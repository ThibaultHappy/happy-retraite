import { randomUUID } from "crypto";

interface PDFEntry {
  buffer: Buffer;
  expiresAt: number;
  filename: string;
}

const store = new Map<string, PDFEntry>();

export function storePDF(buffer: Buffer, filename: string): string {
  const token = randomUUID();
  store.set(token, {
    buffer,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24h
    filename,
  });
  return token;
}

export function getPDF(token: string): PDFEntry | null {
  const entry = store.get(token);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    store.delete(token);
    return null;
  }
  return entry;
}
