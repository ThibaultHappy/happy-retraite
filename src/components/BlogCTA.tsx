"use client";

import Link from "next/link";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export function BlogCTAMid({ context }: { context?: string }) {
  const label = context ?? "votre retraite";
  return (
    <div style={{ margin: "40px 0", padding: "28px 28px 24px", borderRadius: "16px", background: "linear-gradient(135deg, #0F1F3D 0%, #1B2B4B 100%)", border: "1px solid rgba(29,158,117,0.25)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(29,158,117,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "14px", padding: "4px 12px", borderRadius: "999px", backgroundColor: "rgba(29,158,117,0.15)", border: "1px solid rgba(29,158,117,0.3)" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10D98A", display: "inline-block" }} />
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#1D9E75", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>Diagnostic gratuit</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" as const }}>
        <div style={{ flex: "1 1 260px" }}>
          <p style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "white", lineHeight: 1.3, marginBottom: "8px" }}>
            Combien toucherez-vous <span style={{ color: "#1D9E75" }}>vraiment</span> ?
          </p>
          <p style={{ fontSize: "13px", color: "#7A95BB", lineHeight: 1.6, margin: 0 }}>
            Calculez {label} en 2 minutes — résultat immédiat, sans inscription.
          </p>
        </div>
        <div style={{ flex: "0 0 auto" }}>
          <Link href="/diagnostic/intro" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "14px 24px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(16,217,138,0.35)", whiteSpace: "nowrap" as const }}>
            Calculer ma pension →
          </Link>
          <p style={{ fontSize: "11px", color: "#4B6082", marginTop: "6px", textAlign: "center" as const }}>✓ Gratuit &nbsp;·&nbsp; ✓ 2 min &nbsp;·&nbsp; ✓ Sans carte</p>
        </div>
      </div>
    </div>
  );
}

export function BlogCTAFinal({ title, subtitle, urgency, ctaLabel }: { title?: string; subtitle?: string; urgency?: string; ctaLabel?: string }) {
  return (
    <div style={{ backgroundColor: "#0F1F3D", borderRadius: "20px", padding: "48px 40px", textAlign: "center" as const, marginTop: "64px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(29,158,117,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "24px", padding: "7px 16px", borderRadius: "999px", backgroundColor: "rgba(29,158,117,0.12)", border: "1px solid rgba(29,158,117,0.25)" }}>
        <div style={{ display: "flex" }}>
          {["M", "S", "T", "A"].map((l, i) => (
            <div key={i} style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: ["#1D9E75", "#2D9CDB", "#10D98A", "#085041"][i], border: "2px solid #0F1F3D", marginLeft: i > 0 ? "-5px" : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: 700, color: "white" }}>{l}</div>
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "#9fe1cb", fontWeight: 500 }}>+2 400 diagnostics ce mois</span>
      </div>
      <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.3, position: "relative" }}>
        {title ?? "Votre situation est unique — votre diagnostic aussi"}
      </h2>
      <p style={{ color: "#7A95BB", fontSize: "15px", maxWidth: "520px", margin: "0 auto 12px", lineHeight: 1.7, position: "relative" }}>
        {subtitle ?? "Ne repartez pas sans savoir ce que vous toucherez vraiment. En 2 minutes, vous avez votre chiffre exact, votre gap, et votre premier levier d'action."}
      </p>
      <p style={{ color: "#FC8181", fontSize: "13px", marginBottom: "32px", fontWeight: 500, position: "relative" }}>
        ⚠️ {urgency ?? "Chaque mois sans agir = des droits définitivement perdus."}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", maxWidth: "480px", margin: "0 auto 32px", position: "relative" }}>
        {[{ icon: "📊", text: "Votre pension exacte" }, { icon: "📉", text: "Votre gap mensuel" }, { icon: "🎯", text: "Votre 1er levier" }].map((f, i) => (
          <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "10px", padding: "10px 8px", fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>
            <div style={{ fontSize: "18px", marginBottom: "4px" }}>{f.icon}</div>
            {f.text}
          </div>
        ))}
      </div>
      <div style={{ position: "relative" }}>
        <Link href="/diagnostic/intro" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "20px 40px", borderRadius: "999px", fontSize: "17px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 36px rgba(16,217,138,0.4)", letterSpacing: "-0.2px" }}>
          {ctaLabel ?? "Calculer ma pension maintenant — c'est gratuit →"}
        </Link>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "14px" }}>
          {["✓ 100% gratuit", "✓ Résultat immédiat", "✓ Sans inscription"].map((t, i) => (
            <span key={i} style={{ fontSize: "12px", color: "#4B6082" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "28px", padding: "14px 20px", borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", maxWidth: "440px", margin: "28px auto 0", position: "relative" }}>
        <p style={{ fontSize: "12px", color: "#7A95BB", fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>
          &ldquo;J&apos;avais lu des dizaines d&apos;articles. HappyRetraite m&apos;a donné mon chiffre exact en 2 minutes. Aucune comparaison.&rdquo;
        </p>
        <p style={{ fontSize: "10px", color: "#4B6082", margin: "6px 0 0" }}>— Sophie, 52 ans, Kinésithérapeute</p>
      </div>
    </div>
  );
}
