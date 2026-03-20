import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ paid: false, error: "Missing session_id" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";
    return NextResponse.json({ paid, metadata: session.metadata ?? {} });
  } catch (err) {
    console.error("Verify payment error:", err);
    return NextResponse.json({ paid: false, error: "Session introuvable" }, { status: 404 });
  }
}
