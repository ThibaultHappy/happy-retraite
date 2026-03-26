"use client";

import { useState } from "react";
import Link from "next/link";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

const SUJETS = [
  "Question sur mon diagnostic",
  "Problème avec mon rapport PDF",
  "Proposition de partenariat",
  "Autre",
];

export default function ContactPage() {
  const [form, setForm] = useState({ prenom: "", email: "", sujet: SUJETS[0], message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1.5px solid #E8EDF5",
    backgroundColor: "white",
    fontFamily: DM,
    fontSize: "14px",
    color: "#0F1F3D",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: DM,
    fontSize: "13px",
    fontWeight: 600,
    color: "#0F1F3D",
    marginBottom: "6px",
  };

  return (
    <div style={{ fontFamily: DM, backgroundColor: "#F7F9FC", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ backgroundColor: "#0F1F3D", padding: "0 24px" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ minHeight: "72px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: PLAYFAIR, fontSize: "20px", color: "white" }}>
              Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
            </span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>
              Contact
            </Link>
            <Link
              href="/diagnostic/intro"
              className="hidden sm:inline-block"
              style={{
                background: "linear-gradient(to right, #10D98A, #2D9CDB)",
                color: "white",
                padding: "10px 22px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-xl mx-auto px-6 py-16">
        <div style={{ marginBottom: "32px" }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "#E8F5EF",
            color: "#0F6E56",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: "50px",
            marginBottom: "16px",
          }}>
            Support
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "12px", lineHeight: 1.2 }}>
            Contactez-nous
          </h1>
          <p style={{ fontSize: "16px", color: "#6B7A99", lineHeight: 1.6 }}>
            Une question sur votre diagnostic, votre rapport ou un partenariat ?<br />
            On vous répond sous 24h.
          </p>
          <p style={{ marginTop: "12px", fontSize: "14px" }}>
            <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 500 }}>
              bonjour@happyretraite.fr
            </a>
          </p>
        </div>

        {status === "success" ? (
          <div style={{
            backgroundColor: "#E8F5EF",
            border: "1px solid #1D9E75",
            borderRadius: "16px",
            padding: "40px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
            <h2 style={{ fontFamily: PLAYFAIR, fontSize: "24px", color: "#0F1F3D", marginBottom: "8px" }}>
              Message envoyé !
            </h2>
            <p style={{ color: "#0F6E56", fontSize: "15px", lineHeight: 1.6 }}>
              Merci {form.prenom}, nous vous répondrons dans les 24 heures.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid #E8EDF5",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            <div>
              <label style={labelStyle}>Prénom *</label>
              <input
                type="text"
                required
                value={form.prenom}
                onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                placeholder="Votre prénom"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="votre@email.fr"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Sujet</label>
              <select
                value={form.sujet}
                onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                {SUJETS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Message *</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Décrivez votre question ou votre demande…"
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {status === "error" && (
              <p style={{ color: "#E53E3E", fontSize: "13px" }}>
                Une erreur est survenue. Réessayez ou écrivez-nous directement à bonjour@happyretraite.fr
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                background: "linear-gradient(to right, #10D98A, #2D9CDB)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "16px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
                fontFamily: DM,
              }}
            >
              {status === "loading" ? "Envoi en cours…" : "Envoyer →"}
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0F1F3D", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 24px", marginTop: "40px" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: PLAYFAIR, fontSize: "18px", color: "white" }}>
              Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
            </span>
          </Link>
          <p style={{ fontSize: "13px", color: "#4B6082", textAlign: "center" }}>
            © 2026 Happy Retraite. Les estimations sont indicatives et ne constituent pas un conseil financier.
          </p>
          <div style={{ display: "flex", gap: "24px", fontSize: "13px" }}>
            <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#4B6082", textDecoration: "none" }}>bonjour@happyretraite.fr</a>
            <Link href="/contact" style={{ color: "#4B6082", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
