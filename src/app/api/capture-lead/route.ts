import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

const LEADS_FILE = path.join("/tmp", "leads.json");

async function appendLead(lead: Record<string, unknown>) {
  let leads: Record<string, unknown>[] = [];
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    leads = JSON.parse(raw);
  } catch {
    // Fichier inexistant ou invalide — on repart de zéro
  }
  leads.push({ ...lead, captured_at: new Date().toISOString() });
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

function fmtEuro(n: number) {
  return Math.abs(n).toLocaleString("fr-FR") + " €";
}

function buildEmailHTML(data: {
  prenom: string;
  pension_estimee: number;
  age_depart: number;
  annees_restantes: number;
  trimestres_valides: number;
  trimestres_requis: number;
  taux_couverture: number;
  revenu_cible: number;
  gap: number;
}) {
  const isExcedent = data.gap <= 0;
  const absGap = Math.abs(data.gap);
  const gapColor = isExcedent ? "#1D9E75" : "#E53E3E";
  const gapLabel = isExcedent ? `+${fmtEuro(absGap)}/mois d'excédent` : `-${fmtEuro(absGap)}/mois à combler`;
  const coverPct = Math.min(data.taux_couverture, 100);

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#F7F9FC;font-family:'DM Sans',Arial,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:32px 16px;">

  <!-- Header -->
  <div style="background:#0F1F3D;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
    <div style="font-size:22px;font-weight:700;color:white;letter-spacing:-0.5px;">
      Happy<span style="color:#1D9E75;">Retraite</span>
    </div>
    <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:6px 0 0;">Votre analyse retraite personnalisée</p>
  </div>

  <!-- Intro -->
  <div style="background:white;padding:36px 40px 24px;border-left:1px solid #E8EDF5;border-right:1px solid #E8EDF5;">
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#0F1F3D;margin:0 0 12px;">
      ${data.prenom ? `Bonjour ${data.prenom},` : "Votre diagnostic retraite"}
    </h1>
    <p style="color:#6B7A99;font-size:15px;line-height:1.7;margin:0;">
      Voici votre analyse personnalisée basée sur les informations de votre diagnostic.
    </p>
  </div>

  <!-- Pension mise en avant -->
  <div style="background:#0F1F3D;padding:32px 40px;text-align:center;border-left:1px solid #0F1F3D;border-right:1px solid #0F1F3D;">
    <p style="color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Pension estimée</p>
    <div style="font-size:52px;font-weight:700;color:#1D9E75;line-height:1;">${fmtEuro(data.pension_estimee)}</div>
    <p style="color:rgba(255,255,255,0.4);font-size:13px;margin:6px 0 0;">/mois brut · à partir de ${data.age_depart} ans</p>
  </div>

  <!-- KPIs -->
  <div style="background:white;padding:24px 40px;border-left:1px solid #E8EDF5;border-right:1px solid #E8EDF5;">
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;width:55%;">
          <span style="color:#6B7A99;font-size:13px;">Âge de départ estimé</span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;text-align:right;">
          <strong style="color:#0F1F3D;font-size:15px;">${data.age_depart} ans</strong>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;">
          <span style="color:#6B7A99;font-size:13px;">Années avant la retraite</span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;text-align:right;">
          <strong style="color:#0F1F3D;font-size:15px;">${data.annees_restantes} ans</strong>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;">
          <span style="color:#6B7A99;font-size:13px;">Trimestres validés / requis</span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;text-align:right;">
          <strong style="color:#0F1F3D;font-size:15px;">${data.trimestres_valides} / ${data.trimestres_requis}</strong>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;">
          <span style="color:#6B7A99;font-size:13px;">Objectif mensuel</span>
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #F0F4FF;text-align:right;">
          <strong style="color:#0F1F3D;font-size:15px;">${fmtEuro(data.revenu_cible)}/mois</strong>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;">
          <span style="color:#6B7A99;font-size:13px;">Écart / excédent</span>
        </td>
        <td style="padding:12px 0;text-align:right;">
          <strong style="color:${gapColor};font-size:15px;">${gapLabel}</strong>
        </td>
      </tr>
    </table>
  </div>

  <!-- Jauge couverture -->
  <div style="background:#F7F9FC;padding:20px 40px;border-left:1px solid #E8EDF5;border-right:1px solid #E8EDF5;">
    <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
      <span style="color:#6B7A99;font-size:13px;">Taux de couverture de l'objectif</span>
      <span style="color:#0F1F3D;font-weight:700;font-size:13px;">${data.taux_couverture}%</span>
    </div>
    <div style="height:8px;background:#E8EDF5;border-radius:99px;overflow:hidden;">
      <div style="height:100%;width:${coverPct}%;background:#1D9E75;border-radius:99px;"></div>
    </div>
  </div>

  <!-- CTA -->
  <div style="background:#0F1F3D;padding:36px 40px;text-align:center;border-left:1px solid #0F1F3D;border-right:1px solid #0F1F3D;">
    <p style="color:rgba(255,255,255,0.5);font-size:11px;text-transform:uppercase;letter-spacing:2px;margin:0 0 12px;">Rapport personnalisé</p>
    <h2 style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:white;margin:0 0 12px;line-height:1.4;">
      Votre plan d'action complet<br/>pour aller plus loin
    </h2>
    <p style="color:#7A95BB;font-size:14px;line-height:1.6;margin:0 0 24px;">
      Tous vos leviers débloqués · Simulations PER sur 10, 20, 30 ans<br/>
      Plan d'action mois par mois · PDF professionnel 15 pages
    </p>
    <a href="https://www.happyretraite.fr/resultats"
       style="display:inline-block;background:linear-gradient(to right,#10D98A,#2D9CDB);color:white;padding:16px 36px;border-radius:12px;font-weight:600;font-size:15px;text-decoration:none;">
      Obtenir mon rapport complet — 29€ →
    </a>
    <p style="color:#4B6082;font-size:11px;margin:14px 0 0;">Paiement unique · Aucun abonnement · Remboursé sous 7 jours si insatisfait</p>
  </div>

  <!-- Footer -->
  <div style="background:#F7F9FC;border:1px solid #E8EDF5;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
    <p style="color:#9BA8BB;font-size:11px;margin:0;line-height:1.6;">
      Vous recevez cet email car vous avez effectué un diagnostic sur happyretraite.fr.<br/>
      Les estimations sont indicatives et ne constituent pas un conseil financier.<br/>
      © 2026 Happy Retraite
    </p>
  </div>

</div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      email = "",
      prenom = "",
      pension_estimee = 0,
      age_depart = 64,
      annees_restantes = 0,
      trimestres_valides = 0,
      trimestres_requis = 172,
      taux_couverture = 0,
      revenu_cible = 0,
      gap = 0,
      statut = "",
      annee_naissance = "",
    } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Stockage lead
    await appendLead({ email, prenom, pension_estimee, age_depart, annees_restantes, trimestres_valides, trimestres_requis, taux_couverture, revenu_cible, gap, statut, annee_naissance });

    const html = buildEmailHTML({ prenom, pension_estimee, age_depart, annees_restantes, trimestres_valides, trimestres_requis, taux_couverture, revenu_cible, gap });

    // Email à l'utilisateur
    await resend.emails.send({
      from: "Happy Retraite <bonjour@happyretraite.fr>",
      to: email,
      subject: "Votre situation retraite — analyse personnalisée",
      html,
    });

    // Notification interne
    await resend.emails.send({
      from: "Happy Retraite <noreply@happyretraite.fr>",
      to: "bonjour@happyretraite.fr",
      subject: `[Lead] ${prenom || email} — pension ${pension_estimee}€/mois`,
      html: `<p>Nouveau lead capturé :</p><ul><li>Email : ${email}</li><li>Prénom : ${prenom}</li><li>Pension : ${pension_estimee}€/mois</li><li>Statut : ${statut}</li><li>Taux couverture : ${taux_couverture}%</li></ul>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Capture lead error:", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
