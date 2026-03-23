import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);
const LEADS_FILE = path.join("/tmp", "leads.json");
const DELAY_MS = 24 * 60 * 60 * 1000; // 24h

function fmtEuro(n: number) {
  return Math.abs(n).toLocaleString("fr-FR") + " €";
}

function buildRelanceHTML(data: {
  prenom: string;
  pension_estimee: number;
  email: string;
}) {
  const prenomDisplay = data.prenom ? data.prenom : "vous";
  const prenomTitle = data.prenom ? `${data.prenom},` : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#F7F9FC;font-family:'DM Sans',Arial,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:32px 16px;">

  <!-- Header -->
  <div style="background:#0F1F3D;border-radius:16px 16px 0 0;padding:28px 40px;text-align:center;">
    <div style="font-size:22px;font-weight:700;color:white;letter-spacing:-0.5px;">
      Happy<span style="color:#1D9E75;">Retraite</span>
    </div>
  </div>

  <!-- Intro -->
  <div style="background:white;padding:36px 40px 28px;border-left:1px solid #E8EDF5;border-right:1px solid #E8EDF5;">
    <h1 style="font-family:Georgia,serif;font-size:24px;font-weight:700;color:#0F1F3D;margin:0 0 16px;line-height:1.3;">
      ${prenomTitle} votre rapport retraite vous attend 👋
    </h1>
    <p style="color:#6B7A99;font-size:15px;line-height:1.7;margin:0 0 20px;">
      Hier, vous avez obtenu votre diagnostic gratuit. Votre pension estimée était de
      <strong style="color:#1D9E75;">${fmtEuro(data.pension_estimee)}/mois</strong>.
    </p>
    <p style="color:#6B7A99;font-size:15px;line-height:1.7;margin:0;">
      ${prenomDisplay === "vous" ? "Vous êtes" : `${data.prenom}, vous êtes`} à un clic d'un plan d'action complet sur <strong style="color:#0F1F3D;">9 pages</strong> — conçu spécifiquement pour votre situation.
    </p>
  </div>

  <!-- Bénéfices -->
  <div style="background:#F7F9FC;padding:28px 40px;border-left:1px solid #E8EDF5;border-right:1px solid #E8EDF5;">
    <p style="color:#0F1F3D;font-weight:700;font-size:14px;margin:0 0 16px;">Ce que contient votre rapport complet :</p>
    ${[
      ["📊", "Tous vos leviers débloqués", "PER, immobilier locatif, assurance-vie — chiffrés pour votre profil"],
      ["🗓️", "Plan d'action mois par mois", "Les étapes concrètes à suivre dans les 12 prochains mois"],
      ["📈", "Simulations sur 10, 20, 30 ans", "Projection de votre capital selon plusieurs scénarios d'épargne"],
    ].map(([icon, titre, detail]) => `
    <div style="display:flex;gap:14px;margin-bottom:16px;align-items:flex-start;">
      <div style="width:36px;height:36px;background:#E8F5EF;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;text-align:center;line-height:36px;">${icon}</div>
      <div>
        <div style="color:#0F1F3D;font-weight:600;font-size:14px;margin-bottom:2px;">${titre}</div>
        <div style="color:#6B7A99;font-size:13px;">${detail}</div>
      </div>
    </div>`).join("")}
  </div>

  <!-- CTA -->
  <div style="background:#0F1F3D;padding:36px 40px;text-align:center;border-left:1px solid #0F1F3D;border-right:1px solid #0F1F3D;">
    <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0 0 8px;">Paiement unique · Sans abonnement</p>
    <a href="https://www.happyretraite.fr/resultats"
       style="display:inline-block;background:linear-gradient(to right,#10D98A,#2D9CDB);color:white;padding:18px 40px;border-radius:12px;font-weight:700;font-size:16px;text-decoration:none;margin:8px 0 16px;">
      Obtenir mon rapport — 29€ →
    </a>
    <p style="color:#4B6082;font-size:11px;margin:0;">🔒 Paiement sécurisé Stripe · Remboursé si insatisfait sous 7 jours</p>
  </div>

  <!-- Footer -->
  <div style="background:#F7F9FC;border:1px solid #E8EDF5;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
    <p style="color:#9BA8BB;font-size:11px;margin:0;line-height:1.8;">
      Vous recevez cet email car vous avez effectué un diagnostic sur happyretraite.fr.<br/>
      © 2026 Happy Retraite · Les estimations sont indicatives et ne constituent pas un conseil financier.<br/>
      <a href="mailto:bonjour@happyretraite.fr?subject=Désabonnement&body=Merci de me désabonner : ${encodeURIComponent(data.email)}"
         style="color:#9BA8BB;">Se désabonner</a>
    </p>
  </div>

</div>
</body>
</html>`;
}

export async function GET(req: NextRequest) {
  // Vérification du secret cron Vercel
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let leads: Record<string, unknown>[] = [];
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    leads = JSON.parse(raw);
  } catch {
    return NextResponse.json({ processed: 0, message: "Aucun lead trouvé" });
  }

  const now = Date.now();
  let sent = 0;
  const updated = leads.map((lead) => {
    if (
      lead.purchased === false &&
      lead.relance_sent === false &&
      typeof lead.captured_at === "string" &&
      now - new Date(lead.captured_at).getTime() >= DELAY_MS
    ) {
      return { ...lead, _sendRelance: true };
    }
    return lead;
  });

  const toSend = updated.filter((l) => l._sendRelance);

  for (const lead of toSend) {
    try {
      const html = buildRelanceHTML({
        prenom: (lead.prenom as string) || "",
        pension_estimee: Number(lead.pension_estimee) || 0,
        email: (lead.email as string) || "",
      });

      const prenomTitle = lead.prenom ? `${lead.prenom}, ` : "";
      await resend.emails.send({
        from: "Happy Retraite <bonjour@happyretraite.fr>",
        to: lead.email as string,
        subject: `${prenomTitle}votre rapport retraite vous attend 👋`,
        html,
      });

      sent++;
      console.log(`  📧 Relance envoyée à ${lead.email}`);
    } catch (err) {
      console.error(`  ❌ Relance failed pour ${lead.email}:`, err);
    }
  }

  // Mettre à jour le fichier : marquer relance_sent=true, supprimer _sendRelance
  const final = updated.map((l) => {
    if (l._sendRelance) {
      const { _sendRelance, ...rest } = l;
      void _sendRelance;
      return { ...rest, relance_sent: true };
    }
    return l;
  });
  await fs.writeFile(LEADS_FILE, JSON.stringify(final, null, 2));

  return NextResponse.json({ processed: toSend.length, sent });
}
