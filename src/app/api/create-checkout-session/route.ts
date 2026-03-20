import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      prenom = "",
      nom = "",
      email = "",
      statut = "",
      annee_naissance = "",
      pension_estimee = "",
      gap_mensuel = "",
    } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Rapport Happy Retraite",
              description: "Rapport personnalisé PDF — plan d'action retraite complet",
            },
            unit_amount: 2900,
          },
          quantity: 1,
        },
      ],
      customer_email: email || undefined,
      metadata: {
        prenom,
        nom,
        email,
        statut,
        annee_naissance: String(annee_naissance),
        pension_estimee: String(pension_estimee),
        gap_mensuel: String(gap_mensuel),
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || req.nextUrl.origin}/resultats?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || req.nextUrl.origin}/resultats?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Erreur lors de la création du paiement" }, { status: 500 });
  }
}
