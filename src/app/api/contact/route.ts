import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { prenom, email, sujet, message } = await req.json();

    if (!prenom || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    // Email interne vers l'équipe
    await resend.emails.send({
      from: "Happy Retraite <onboarding@resend.dev>",
      to: "bonjour@happyretraite.fr",
      subject: `[Contact HR] ${sujet} - ${prenom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
          <h2 style="color: #0F1F3D; margin-bottom: 24px;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6B7A99; width: 100px; font-size: 14px;">Prénom</td>
              <td style="padding: 10px 0; color: #0F1F3D; font-weight: 600; font-size: 14px;">${prenom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B7A99; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #1D9E75;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B7A99; font-size: 14px;">Sujet</td>
              <td style="padding: 10px 0; color: #0F1F3D; font-size: 14px;">${sujet}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #F7F9FC; border-radius: 8px; border-left: 4px solid #1D9E75;">
            <p style="color: #6B7A99; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #0F1F3D; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Email de confirmation à l'utilisateur
    await resend.emails.send({
      from: "Happy Retraite <onboarding@resend.dev>",
      to: email,
      subject: "Nous avons bien reçu votre message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #0F1F3D; font-size: 24px; margin-bottom: 8px;">Bonjour ${prenom},</h1>
          <p style="color: #6B7A99; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Merci pour votre message. Nous vous répondrons dans les 24 heures.
          </p>
          <div style="background: #E8F5EF; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #0F6E56; font-size: 14px; margin: 0;">
              <strong>Sujet :</strong> ${sujet}
            </p>
          </div>
          <p style="color: #0F1F3D; font-size: 14px; margin-top: 32px;">
            L'équipe Happy Retraite
          </p>
          <hr style="border: none; border-top: 1px solid #E8EDF5; margin: 32px 0;" />
          <p style="color: #9BA8BB; font-size: 11px;">
            Vous recevez cet email car vous avez contacté Happy Retraite via happyretraite.fr
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
