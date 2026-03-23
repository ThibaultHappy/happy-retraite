"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

// ── Logo ──────────────────────────────────────────────────────────────────────
const Logo = ({ light = false }: { light?: boolean }) => {
  const arcMid = light ? "#1D9E75" : "#9fe1cb";
  const dot = "#1D9E75";
  const horizon = light ? "#7A95BB" : "#1B2B4B";
  const textMain = light ? "white" : "#0F1F3D";
  const tagline = light ? "#7A95BB" : "#6B7A99";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <svg viewBox="0 0 56 40" xmlns="http://www.w3.org/2000/svg" width="48" height="48" aria-hidden="true">
        <g transform="translate(0, 34)">
          <path d="M 0 0 A 28 28 0 0 1 56 0" fill={dot} fillOpacity="0.2" />
          <path d="M 8 0 A 20 20 0 0 1 48 0" fill={arcMid} fillOpacity="0.4" />
          <circle cx="28" cy="0" r="13" fill={dot} />
          <line x1="28" y1="-18" x2="28" y2="-23" stroke={dot} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="45" y1="-9" x2="49" y2="-13" stroke={dot} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="11" y1="-9" x2="7" y2="-13" stroke={dot} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="-3" y1="0" x2="11" y2="0" stroke={horizon} strokeWidth="1.5" />
          <line x1="45" y1="0" x2="59" y2="0" stroke={horizon} strokeWidth="1.5" />
        </g>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{ fontFamily: PLAYFAIR, fontSize: "26px", fontWeight: 700, lineHeight: 1, color: textMain }}>
          Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
        </span>
        <span style={{ fontFamily: DM, fontSize: "9px", fontWeight: 600, letterSpacing: "3px", color: tagline, textTransform: "uppercase" }}>
          CLARIFIER SON AVENIR
        </span>
      </div>
    </div>
  );
};

// ── Animated counter ──────────────────────────────────────────────────────────
function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value.toLocaleString("fr-FR")}</span>;
}

// ── Pension preview card ──────────────────────────────────────────────────────
function PensionCard() {
  const [pension, setPension] = useState(1240);
  const [animating, setAnimating] = useState(false);
  const profiles = [
    { label: "Cadre salarié, 48 ans", pension: 2180, taux: 62 },
    { label: "Kinésithérapeute libérale, 52 ans", pension: 1240, taux: 41 },
    { label: "Consultant indépendant, 41 ans", pension: 890, taux: 30 },
    { label: "Fonctionnaire cat. A, 45 ans", pension: 2640, taux: 74 },
  ];
  const [activeIdx, setActiveIdx] = useState(1);

  function switchProfile(idx: number) {
    if (idx === activeIdx) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setPension(profiles[idx].pension);
      setAnimating(false);
    }, 250);
  }

  const profile = profiles[activeIdx];
  const gap = Math.max(0, 2500 - pension);

  return (
    <div style={{
      backgroundColor: "#0F1F3D",
      borderRadius: "20px",
      padding: "28px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
      maxWidth: "400px",
      width: "100%",
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <span style={{ fontSize: "11px", fontWeight: 600, color: "#1D9E75", textTransform: "uppercase", letterSpacing: "2px" }}>
          Aperçu du diagnostic
        </span>
        <span style={{ fontSize: "11px", color: "#4B6082", backgroundColor: "rgba(255,255,255,0.05)", padding: "3px 8px", borderRadius: "20px" }}>
          Exemple réel
        </span>
      </div>

      {/* Profile tabs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "20px" }}>
        {profiles.map((p, i) => (
          <button
            key={i}
            onClick={() => switchProfile(i)}
            style={{
              padding: "6px 8px",
              borderRadius: "8px",
              fontSize: "10px",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              backgroundColor: activeIdx === i ? "rgba(29,158,117,0.2)" : "rgba(255,255,255,0.04)",
              color: activeIdx === i ? "#1D9E75" : "#4B6082",
              fontWeight: activeIdx === i ? 600 : 400,
              borderColor: activeIdx === i ? "rgba(29,158,117,0.4)" : "transparent",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Main number */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        borderRadius: "14px",
        backgroundColor: "rgba(255,255,255,0.04)",
        marginBottom: "16px",
        transition: "opacity 0.25s",
        opacity: animating ? 0 : 1,
      }}>
        <p style={{ fontSize: "11px", color: "#4B6082", marginBottom: "6px" }}>Pension mensuelle estimée</p>
        <p style={{ fontFamily: DM, fontSize: "52px", fontWeight: 700, color: "#1D9E75", lineHeight: 1, margin: "0 0 4px" }}>
          {pension.toLocaleString("fr-FR")}€
        </p>
        <p style={{ fontSize: "12px", color: "#4B6082" }}>/mois brut</p>
      </div>

      {/* Gauge */}
      <div style={{ marginBottom: "16px", opacity: animating ? 0 : 1, transition: "opacity 0.25s" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
          <span style={{ fontSize: "11px", color: "#7A95BB" }}>Couverture de l'objectif (2 500€)</span>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "white" }}>{profile.taux}%</span>
        </div>
        <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${profile.taux}%`,
            borderRadius: "4px",
            background: "linear-gradient(to right, #10D98A, #2D9CDB)",
            transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }} />
        </div>
      </div>

      {/* Gap */}
      {gap > 0 && (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderRadius: "10px",
          backgroundColor: "rgba(229,62,62,0.1)",
          border: "1px solid rgba(229,62,62,0.2)",
          opacity: animating ? 0 : 1,
          transition: "opacity 0.25s",
        }}>
          <span style={{ fontSize: "12px", color: "#FC8181" }}>Il manque chaque mois</span>
          <span style={{ fontWeight: 700, color: "#FC8181", fontSize: "16px" }}>-{gap.toLocaleString("fr-FR")}€</span>
        </div>
      )}

      {/* CTA */}
      <Link
        href="/diagnostic"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "16px",
          padding: "14px",
          borderRadius: "12px",
          background: "linear-gradient(to right, #10D98A, #2D9CDB)",
          color: "white",
          fontWeight: 600,
          fontSize: "14px",
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(16,217,138,0.3)",
        }}
      >
        Calculer ma pension réelle →
      </Link>
      <p style={{ textAlign: "center", fontSize: "11px", color: "#4B6082", marginTop: "8px" }}>
        Gratuit · 2 minutes · Sans inscription
      </p>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: DM, backgroundColor: "#F7F9FC" }}>

      {/* ── NAV ── */}
      <nav style={{
        backgroundColor: scrolled ? "rgba(15,31,61,0.97)" : "#0F1F3D",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
      }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ minHeight: "72px" }}>
          <Link href="/"><Logo light /></Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", textDecoration: "none" }}>Contact</Link>
            <Link
              href="/diagnostic"
              className="hidden sm:inline-block"
              style={{
                background: "linear-gradient(to right, #10D98A, #2D9CDB)",
                color: "white",
                padding: "10px 22px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Faire mon diagnostic →
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#0F1F3D", padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>

        {/* Background glow */}
        <div style={{
          position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse at center, rgba(29,158,117,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-6xl mx-auto" style={{ display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap", justifyContent: "center" }}>

          {/* Left — copy */}
          <div style={{ flex: "1 1 420px", maxWidth: "560px" }}>

            {/* Social proof badge — remonté TOUT en haut */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
              padding: "8px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(29,158,117,0.12)",
              border: "1px solid rgba(29,158,117,0.25)",
            }}>
              <div style={{ display: "flex", gap: "-4px" }}>
                {["M", "S", "T", "A"].map((l, i) => (
                  <div key={i} style={{
                    width: "24px", height: "24px", borderRadius: "50%",
                    backgroundColor: ["#1D9E75", "#2D9CDB", "#10D98A", "#085041"][i],
                    border: "2px solid #0F1F3D",
                    marginLeft: i > 0 ? "-6px" : 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "9px", fontWeight: 700, color: "white",
                  }}>{l}</div>
                ))}
              </div>
              <span style={{ fontSize: "13px", color: "#9fe1cb", fontWeight: 500 }}>
                +2 400 diagnostics réalisés ce mois
              </span>
            </div>

            <h1 style={{
              fontFamily: PLAYFAIR,
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}>
              Combien toucherez-vous{" "}
              <span style={{
                color: "#1D9E75",
                position: "relative",
              }}>
                vraiment
              </span>{" "}
              à la retraite ?
            </h1>

            <p style={{ fontSize: "18px", color: "#7A95BB", lineHeight: 1.7, marginBottom: "12px" }}>
              La plupart des Français surestiment leur pension de <strong style={{ color: "white" }}>30 à 50%</strong>. Découvrez votre chiffre réel — et ce que vous pouvez encore faire — en 2 minutes.
            </p>

            {/* Urgency line */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10D98A", flexShrink: 0 }} />
              <p style={{ fontSize: "14px", color: "#4B6082" }}>
                Chaque année sans agir = des milliers d'euros perdus à la retraite
              </p>
            </div>

            {/* Main CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <Link
                href="/diagnostic"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(to right, #10D98A, #2D9CDB)",
                  color: "white",
                  padding: "18px 36px",
                  borderRadius: "999px",
                  fontSize: "17px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 6px 32px rgba(16,217,138,0.4)",
                  letterSpacing: "-0.2px",
                }}
              >
                Calculer ma pension gratuitement
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {["✓ 100% gratuit", "✓ 2 minutes", "✓ Sans carte bancaire"].map((t, i) => (
                  <span key={i} style={{ fontSize: "12px", color: "#4B6082" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Mini testimonial */}
            <div style={{
              marginTop: "32px",
              padding: "16px 20px",
              borderRadius: "14px",
              backgroundColor: "rgba(255,255,255,0.04)",
              borderLeft: "3px solid #1D9E75",
            }}>
              <p style={{ fontSize: "13px", color: "#9fe1cb", lineHeight: 1.6, fontStyle: "italic", marginBottom: "8px" }}>
                &ldquo;J'étais persuadé de toucher 2 200€/mois. HappyRetraite m'a montré que ce serait 1 380€. J'ai ouvert un PER le lendemain.&rdquo;
              </p>
              <p style={{ fontSize: "11px", color: "#4B6082" }}>— Marc, 48 ans, Cadre salarié</p>
            </div>
          </div>

          {/* Right — interactive preview card */}
          <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <PensionCard />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ backgroundColor: "#0a1628", padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
          {[
            { icon: "🔒", text: "Données 100% privées" },
            { icon: "⚡", text: "Résultat immédiat" },
            { icon: "🎯", text: "Adapté à votre statut" },
            { icon: "📊", text: "Basé sur les vrais barèmes 2026" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span style={{ fontSize: "13px", color: "#4B6082" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "64px 24px" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "13px", color: "#1D9E75", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "40px" }}>
            La réalité que personne ne vous dit
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { number: 72, suffix: "%", label: "des Français craignent de ne pas maintenir leur niveau de vie", note: "Sondage IFOP 2024" },
              { number: 50, suffix: "%", label: "de revenus perdus en moyenne au passage à la retraite", note: "Tous statuts confondus" },
              { number: 2, suffix: " min", label: "pour obtenir votre estimation personnalisée et vos leviers d'action", note: "Sans inscription" },
            ].map((stat, i) => (
              <div key={i} style={{
                backgroundColor: "white",
                border: "1px solid #E8EDF5",
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "center",
                boxShadow: "0 2px 16px rgba(15,31,61,0.04)",
              }}>
                <div style={{ fontFamily: DM, fontSize: "48px", fontWeight: 800, color: "#1D9E75", lineHeight: 1, marginBottom: "12px" }}>
                  {i < 2 ? <><AnimatedNumber target={stat.number} />{stat.suffix}</> : <>{stat.number}{stat.suffix}</>}
                </div>
                <p style={{ color: "#0F1F3D", fontSize: "15px", fontWeight: 500, lineHeight: 1.4, marginBottom: "8px" }}>{stat.label}</p>
                <p style={{ color: "#6B7A99", fontSize: "11px" }}>{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section style={{ backgroundColor: "white", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Votre situation est unique
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "12px" }}>
            Fait pour vous, quel que soit votre statut
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A99", marginBottom: "48px", maxWidth: "480px", margin: "0 auto 48px" }}>
            Chaque statut a ses propres règles. On les connaît toutes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "👔",
                title: "Salariés",
                pension: "~1 800€/mois",
                taux: "55%",
                alert: "Chute de revenus souvent sous-estimée",
                color: "#2D9CDB",
              },
              {
                icon: "💻",
                title: "Indépendants",
                pension: "~890€/mois",
                taux: "30%",
                alert: "Protection retraite très limitée en micro",
                color: "#E53E3E",
              },
              {
                icon: "⚕️",
                title: "Professions libérales",
                pension: "~1 400€/mois",
                taux: "40%",
                alert: "Caisse spécifique mal connue",
                color: "#D69E2E",
              },
              {
                icon: "🏛️",
                title: "Fonctionnaires",
                pension: "~2 400€/mois",
                taux: "73%",
                alert: "Primes exclues du calcul = surprises",
                color: "#1D9E75",
              },
            ].map((p, i) => (
              <div key={i} style={{
                backgroundColor: "#F7F9FC",
                border: "1px solid #E8EDF5",
                borderRadius: "16px",
                padding: "24px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{p.icon}</div>
                <h3 style={{ fontFamily: DM, fontWeight: 700, fontSize: "16px", color: "#0F1F3D", marginBottom: "16px" }}>{p.title}</h3>

                <div style={{ marginBottom: "12px" }}>
                  <p style={{ fontSize: "11px", color: "#6B7A99", marginBottom: "2px" }}>Pension moyenne estimée</p>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: p.color }}>{p.pension}</p>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "11px", color: "#6B7A99" }}>Taux de remplacement</span>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: p.color }}>{p.taux}</span>
                  </div>
                  <div style={{ height: "5px", borderRadius: "3px", backgroundColor: "#E8EDF5", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: p.taux, backgroundColor: p.color, borderRadius: "3px" }} />
                  </div>
                </div>

                <div style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(229,62,62,0.06)",
                  fontSize: "11px",
                  color: "#E53E3E",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "6px",
                }}>
                  <span>⚠️</span>
                  <span>{p.alert}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/diagnostic"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white",
                padding: "16px 36px", borderRadius: "999px",
                fontSize: "16px", fontWeight: 700, textDecoration: "none",
                boxShadow: "0 4px 24px rgba(16,217,138,0.35)",
              }}
            >
              Voir ma situation personnelle →
            </Link>
            <p style={{ marginTop: "10px", fontSize: "12px", color: "#6B7A99" }}>Résultat adapté à votre statut exact</p>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Simple et rapide
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "48px" }}>
            En 4 étapes, tout devient clair
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                step: "01",
                title: "Votre profil en 2 minutes",
                desc: "Statut, âge, trimestres cotisés, épargne — un parcours guidé qui s'adapte à votre situation. Pas de jargon.",
                time: "~30 sec",
                color: "#1D9E75",
              },
              {
                step: "02",
                title: "Votre pension estimée au centime près",
                desc: "Montant mensuel réel, âge de départ, taux de couverture — calculés selon votre régime exact (pas une moyenne générique).",
                time: "Instantané",
                color: "#10D98A",
              },
              {
                step: "03",
                title: "Vos leviers personnalisés",
                desc: "PER, rachat de trimestres, optimisation de statut — ce que vous pouvez encore faire concrètement, dans le bon ordre.",
                time: "Personnalisé",
                color: "#2D9CDB",
              },
              {
                step: "04",
                title: "Votre plan d'action",
                desc: "Un rapport PDF avec les actions prioritaires, chiffrées et datées. Pour agir dès maintenant.",
                time: "29€",
                color: "#7A95BB",
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                padding: "28px 0",
                borderBottom: i < 3 ? "1px solid #E8EDF5" : "none",
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  backgroundColor: item.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: DM,
                  fontWeight: 800,
                  fontSize: "16px",
                  flexShrink: 0,
                }}>
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                    <h3 style={{ fontFamily: DM, fontWeight: 700, fontSize: "17px", color: "#0F1F3D" }}>{item.title}</h3>
                    <span style={{ fontSize: "11px", color: item.color, backgroundColor: `${item.color}15`, padding: "2px 10px", borderRadius: "999px", fontWeight: 600, whiteSpace: "nowrap" }}>
                      {item.time}
                    </span>
                  </div>
                  <p style={{ fontFamily: DM, fontSize: "14px", color: "#6B7A99", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section style={{ backgroundColor: "white", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Ils ont agi avant qu'il soit trop tard
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "48px" }}>
            Ce que ça change concrètement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                initiale: "M",
                prenom: "Marc",
                metier: "Cadre salarié",
                age: 48,
                before: "2 200€ estimés",
                after: "1 380€ réels",
                action: "A ouvert un PER le mois suivant. +340€/mois projetés à la retraite.",
                color: "#2D9CDB",
              },
              {
                initiale: "S",
                prenom: "Sophie",
                metier: "Kinésithérapeute libérale",
                age: 52,
                before: "Vague inquiétude",
                after: "1 240€/mois exact",
                action: "Levier CARPIMKO identifié. Plan sur 12 ans mis en place.",
                color: "#1D9E75",
              },
              {
                initiale: "T",
                prenom: "Thomas",
                metier: "Consultant indépendant",
                age: 41,
                before: "Ignorait sa situation",
                after: "890€/mois projetés",
                action: "Passage en SASU enclenché. 20 ans pour corriger le tir.",
                color: "#10D98A",
              },
            ].map((t, i) => (
              <div key={i} style={{
                backgroundColor: "#F7F9FC",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid #E8EDF5",
              }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 20 20">
                      <path fill="#1D9E75" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Before / After */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ padding: "10px", borderRadius: "10px", backgroundColor: "rgba(229,62,62,0.06)", textAlign: "center" }}>
                    <p style={{ fontSize: "10px", color: "#E53E3E", marginBottom: "2px", fontWeight: 600 }}>CROYAIT</p>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#E53E3E" }}>{t.before}</p>
                  </div>
                  <div style={{ padding: "10px", borderRadius: "10px", backgroundColor: "rgba(29,158,117,0.08)", textAlign: "center" }}>
                    <p style={{ fontSize: "10px", color: "#1D9E75", marginBottom: "2px", fontWeight: 600 }}>RÉALITÉ</p>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#1D9E75" }}>{t.after}</p>
                  </div>
                </div>

                {/* Action taken */}
                <p style={{ fontSize: "13px", color: "#0F1F3D", lineHeight: 1.6, fontStyle: "italic", marginBottom: "16px" }}>
                  &ldquo;{t.action}&rdquo;
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    backgroundColor: t.color, color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "13px",
                  }}>{t.initiale}</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "13px", color: "#0F1F3D" }}>{t.prenom}, {t.age} ans</p>
                    <p style={{ fontSize: "11px", color: "#6B7A99" }}>{t.metier}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE VOUS RECEVEZ ── */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Inclus dans votre diagnostic gratuit
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "48px" }}>
            Ce que vous obtenez en 2 minutes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Votre pension estimée",
                desc: "Montant mensuel calculé selon votre statut exact, vos années cotisées et vos revenus. Pas une moyenne — votre chiffre.",
                tag: "Gratuit",
              },
              {
                icon: "📉",
                title: "Votre gap mensuel",
                desc: "Ce qu'il vous manque chaque mois pour atteindre votre objectif. Et ce que ça représente sur 20 ans de retraite.",
                tag: "Gratuit",
              },
              {
                icon: "🎯",
                title: "Votre 1er levier",
                desc: "L'action la plus impactante adaptée à votre situation. Concrète, chiffrée, actionnable dès cette semaine.",
                tag: "Gratuit",
              },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: "white",
                border: "1px solid #E8EDF5",
                borderRadius: "16px",
                padding: "28px",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: "16px", right: "16px",
                  fontSize: "11px", fontWeight: 700, color: "#1D9E75",
                  backgroundColor: "#E8F5EF", padding: "3px 10px", borderRadius: "999px",
                }}>
                  {item.tag}
                </div>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontFamily: DM, fontWeight: 700, fontSize: "16px", color: "#0F1F3D", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section style={{ backgroundColor: "white", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Tarifs
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "8px" }}>
            Commencez gratuitement
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A99", marginBottom: "48px" }}>
            Allez plus loin seulement si vous le souhaitez
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div style={{ border: "1px solid #E8EDF5", borderRadius: "16px", padding: "32px", backgroundColor: "#F7F9FC" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#6B7A99", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>Diagnostic de base</div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontFamily: DM, fontSize: "42px", fontWeight: 800, color: "#0F1F3D" }}>0€</span>
                <span style={{ color: "#6B7A99", marginLeft: "8px", fontSize: "14px" }}>/ toujours gratuit</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Estimation de votre pension mensuelle", "Calcul de votre écart de revenus", "1er levier personnalisé"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#0F1F3D" }}>
                    <svg width="18" height="18" fill="none" stroke="#1D9E75" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/diagnostic" style={{
                display: "block", textAlign: "center", padding: "13px",
                borderRadius: "10px", fontWeight: 600, fontSize: "14px",
                border: "1.5px solid #E8EDF5", color: "#0F1F3D", textDecoration: "none",
                backgroundColor: "white",
              }}>
                Commencer gratuitement →
              </Link>
            </div>

            <div style={{ border: "2px solid #1D9E75", borderRadius: "16px", padding: "32px", backgroundColor: "white", position: "relative" }}>
              <div style={{
                position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                backgroundColor: "#1D9E75", color: "white",
                fontSize: "11px", fontWeight: 700, padding: "5px 16px", borderRadius: "999px",
                whiteSpace: "nowrap",
              }}>
                ⭐ Recommandé
              </div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#6B7A99", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>Rapport complet PDF</div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontFamily: DM, fontSize: "42px", fontWeight: 800, color: "#0F1F3D" }}>29€</span>
                <span style={{ color: "#6B7A99", marginLeft: "8px", fontSize: "14px" }}>/ paiement unique</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Tout le diagnostic de base", "Rapport PDF détaillé de 9 pages", "Simulations avec différents scénarios", "Stratégies épargne personnalisées"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#0F1F3D" }}>
                    <svg width="18" height="18" fill="none" stroke="#1D9E75" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/diagnostic" style={{
                display: "block", textAlign: "center", padding: "14px 24px",
                borderRadius: "10px", fontWeight: 700, fontSize: "15px",
                background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(16,217,138,0.3)",
              }}>
                Obtenir mon rapport — 29€ →
              </Link>
              <p style={{ textAlign: "center", fontSize: "11px", color: "#6B7A99", marginTop: "10px" }}>
                🔒 Stripe · Remboursé si insatisfait sous 7 jours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ backgroundColor: "#0F1F3D", padding: "96px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(29,158,117,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative" }}>
          <p style={{ fontSize: "13px", color: "#1D9E75", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px" }}>
            Dernière chance d'agir
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 700, color: "white", marginBottom: "20px", lineHeight: 1.2 }}>
            Votre retraite<br />se construit <span style={{ color: "#1D9E75" }}>maintenant</span>
          </h2>
          <p style={{ color: "#7A95BB", marginBottom: "40px", lineHeight: 1.7, fontSize: "16px" }}>
            Chaque mois sans diagnostic est un mois de moins pour agir.<br />
            2 minutes peuvent changer des milliers d'euros de pension.
          </p>
          <Link
            href="/diagnostic"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white",
              padding: "20px 44px", borderRadius: "999px",
              fontSize: "18px", fontWeight: 700, textDecoration: "none",
              boxShadow: "0 8px 40px rgba(16,217,138,0.4)",
              letterSpacing: "-0.2px",
            }}
          >
            Calculer ma pension gratuitement
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "16px" }}>
            {["✓ Gratuit", "✓ 2 minutes", "✓ Sans carte bancaire"].map((t, i) => (
              <span key={i} style={{ fontSize: "13px", color: "#4B6082" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#0F1F3D", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 24px" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link href="/"><Logo light /></Link>
          <p style={{ fontSize: "12px", color: "#4B6082", textAlign: "center" }}>
            © 2026 Happy Retraite. Les estimations sont indicatives et ne constituent pas un conseil financier.
          </p>
          <div style={{ display: "flex", gap: "20px", fontSize: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/blog" style={{ color: "#4B6082", textDecoration: "none" }}>Blog</Link>
            <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#4B6082", textDecoration: "none" }}>Contact</a>
            <Link href="/mentions-legales" style={{ color: "#4B6082", textDecoration: "none" }}>Mentions légales</Link>
            <Link href="/confidentialite" style={{ color: "#4B6082", textDecoration: "none" }}>Confidentialité</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
