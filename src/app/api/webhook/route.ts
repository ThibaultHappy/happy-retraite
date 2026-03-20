import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { buildPDF } from "@/lib/generate-pdf";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const meta = session.metadata ?? {};

    console.log("✅ Paiement confirmé — Happy Retraite");
    console.log("  Nom     :", meta.nom, meta.prenom);
    console.log("  Email   :", meta.email);

    // Générer le PDF
    let pdfBuffer: Buffer | null = null;
    let token = "";
    try {
      const result = await buildPDF({
        prenom: meta.prenom,
        nom: meta.nom,
        email: meta.email,
        statut: meta.statut,
        annee_naissance: meta.annee_naissance,
        pension_estimee: meta.pension_estimee,
        gap_mensuel: meta.gap_mensuel,
      });
      pdfBuffer = result.buffer;
      token = result.token;
      console.log("  📄 PDF généré — token:", token);
    } catch (pdfErr) {
      console.error("  ❌ PDF generation failed:", pdfErr);
    }

    // Envoyer l'email avec le PDF en pièce jointe
    if (pdfBuffer && meta.email) {
      try {
        await resend.emails.send({
          from: "Happy Retraite <onboarding@resend.dev>",
          to: meta.email,
          subject: `${meta.prenom}, votre rapport retraite est prêt`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="color: #0F1F3D; font-size: 24px; margin-bottom: 8px;">
                Bonjour ${meta.prenom},
              </h1>
              <p style="color: #6B7A99; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                Votre rapport retraite personnalisé est prêt. Vous le trouverez en pièce jointe de cet email.
              </p>
              <div style="background: #E8F5EF; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <p style="color: #0F1F3D; font-weight: bold; margin: 0 0 8px;">
                  Ce que contient votre rapport :
                </p>
                <ul style="color: #6B7A99; padding-left: 20px; margin: 0;">
                  <li>Votre pension estimée par régime</li>
                  <li>Vos leviers d'optimisation chiffrés</li>
                  <li>Votre plan d'action personnalisé</li>
                  <li>Les questions à poser à votre CGP</li>
                </ul>
              </div>
              <p style="color: #6B7A99; font-size: 14px; line-height: 1.6;">
                Si vous avez des questions, répondez simplement à cet email.
              </p>
              <p style="color: #0F1F3D; font-size: 14px; margin-top: 32px;">
                L'équipe Happy Retraite
              </p>
              <hr style="border: none; border-top: 1px solid #E8EDF5; margin: 32px 0;" />
              <p style="color: #9BA8BB; font-size: 11px;">
                Ce rapport est fourni à titre informatif et ne constitue pas un conseil financier réglementé.
              </p>
            </div>
          `,
          attachments: [
            {
              filename: `rapport-happy-retraite-${meta.prenom?.toLowerCase() || "client"}.pdf`,
              content: pdfBuffer.toString("base64"),
            },
          ],
        });
        console.log("  📧 Email envoyé à :", meta.email);
      } catch (emailErr) {
        console.error("  ❌ Email send failed:", emailErr);
      }
    }
  }

  return NextResponse.json({ received: true });
}
