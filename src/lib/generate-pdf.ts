import { generateReportHTML, ReportData } from "./pdf-template";
import { storePDF } from "./pdf-store";

export async function buildPDF(data: ReportData): Promise<{ buffer: Buffer; token: string; filename: string }> {
  const html = generateReportHTML(data);

  const chromium = (await import("@sparticuz/chromium-min")).default;
  const puppeteer = (await import("puppeteer-core")).default;

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(
      "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar"
    ),
    headless: true,
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = Buffer.from(
    await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    })
  );

  await browser.close();

  const filename = `rapport-happy-retraite-${data.prenom?.toLowerCase() || "client"}-${data.nom?.toLowerCase() || ""}.pdf`;
  const token = storePDF(pdfBuffer, filename);

  return { buffer: pdfBuffer, token, filename };
}
