import { NextRequest, NextResponse } from "next/server";
import { getPDF } from "@/lib/pdf-store";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token manquant" }, { status: 400 });
  }

  const entry = getPDF(token);

  if (!entry) {
    return NextResponse.json({ error: "Rapport introuvable ou expiré" }, { status: 404 });
  }

  return new NextResponse(entry.buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${entry.filename}"`,
      "Content-Length": String(entry.buffer.length),
    },
  });
}
