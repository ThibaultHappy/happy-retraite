import { NextRequest, NextResponse } from "next/server";
import { ReportData } from "@/lib/pdf-template";
import { buildPDF } from "@/lib/generate-pdf";

export async function POST(req: NextRequest) {
  try {
    const data: ReportData = await req.json();
    const { token, filename } = await buildPDF(data);
    return NextResponse.json({ token, filename });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json({ error: "Erreur lors de la génération du PDF" }, { status: 500 });
  }
}
