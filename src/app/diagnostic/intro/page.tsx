"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

const STEPS = [
  { icon: "📊", title: "Votre pension estimée au centime près", desc: "Calculée selon votre statut exact, vos années cotisées et vos revenus réels — pas une moyenne nationale.", tag: "Gratuit", color: "#1D9E75" },
  { icon: "📉", title: "Votre gap mensuel chiffré", desc: "Ce qu'il vous manque chaque mois pour atteindre votre objectif. Et ce que ça représente sur 20 ans.", tag: "Gratuit", color: "#1D9E75" },
  { icon: "🎯", title: "Votre 1er levier personnalisé", desc: "L'action la plus impactante adaptée à votre statut. Concrète, chiffrée, actionnable cette semaine.", tag: "Gratuit", color: "#1D9E75" },
  { icon: "📄", title: "Votre plan complet en PDF", desc: "3 leviers débloqués, simulations sur 10/20/30 ans, plan d'action mois par mois.", tag: "29€", color: "#2D9CDB" },
];

const TESTIMONIALS = [
  { initiale: "M", prenom: "Marc", age: 48, metier: "Cadre salarié", texte: "J'étais persuadé de toucher 2 200€. C'est 1 380€. J'ai ouvert un PER le lendemain.", color: "#2D9CDB" },
  { initiale: "S", prenom: "Sophie", age: 52, metier: "Kinésithérapeute", texte: "Voir le chiffre exact — 1 240€/mois — ça m'a mise en mouvement immédiatement.", color: "#1D9E75" },
  { initiale: "T", prenom: "Thomas", age: 41, metier: "Consultant indépendant", texte: "20 ans pour corriger le tir. Je n'aurais jamais fait ce calcul seul.", color: "#10D98A" },
];

export default function DiagnosticIntroPage() {
  const [visible, setVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: DM, backgroundColor: "#0F1F3D", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Nav minimaliste */}
      <nav style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: PLAYFAIR, fontSize: "20px", color: "white" }}>
              Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
            </span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10D98A" }} />
            <span style={{ fontSize: "13px", color: "#4B6082" }}>Diagnostic gratuit · 2 minutes</span>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main
        className="max-w-3xl mx-auto px-6 py-12 flex-1"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          width: "100%",
        }}
      >
        {/* Progress indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
          <div style={{ flex: 1, height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.08)" }}>
            <div style={{ width: "0%", height: "100%", backgroundColor: "#1D9E75", borderRadius: "2px" }} />
          </div>
          <span style={{ fontSize: "12px", color: "#4B6082", whiteSpace: "nowrap" }}>Étape 0 / ~10</span>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "20px", padding: "6px 14px", borderRadius: "999px",
            backgroundColor: "rgba(29,158,117,0.12)", border: "1px solid rgba(29,158,117,0.25)",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10D98A", display: "inline-block" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#1D9E75", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
              Voici ce que vous allez recevoir
            </span>
          </div>

          <h1 style={{
            fontFamily: PLAYFAIR,
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            Votre diagnostic retraite<br />
            <span style={{ color: "#1D9E75" }}>personnalisé</span> en 2 minutes
          </h1>
          <p style={{ fontSize: "16px", color: "#7A95BB", lineHeight: 1.7, maxWidth: "520px" }}>
            Pas une estimation générique. Votre chiffre exact, calculé selon votre statut, vos années cotisées et vos revenus réels.
          </p>
        </div>

        {/* Ce que vous allez recevoir */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {STEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "18px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-12px)",
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 80}ms`,
                }}
              >
                <span style={{ fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>{step.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" as const }}>
                    <h3 style={{ fontSize: "15px", fontWeight: 600, color: "white", margin: 0 }}>{step.title}</h3>
                    <span style={{
                      fontSize: "10px", fontWeight: 700,
                      color: step.tag === "Gratuit" ? "#1D9E75" : "#2D9CDB",
                      backgroundColor: step.tag === "Gratuit" ? "rgba(29,158,117,0.15)" : "rgba(45,156,219,0.15)",
                      padding: "2px 8px", borderRadius: "999px",
                    }}>
                      {step.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#7A95BB", margin: 0, lineHeight: 1.6 }}>{step.desc}</p>
                </div>
                <div style={{
                  width: "20px", height: "20px", borderRadius: "50%",
                  backgroundColor: step.tag === "Gratuit" ? "rgba(29,158,117,0.2)" : "rgba(45,156,219,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="10" height="10" fill="none" stroke={step.color} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial rotatif */}
        <div style={{
          padding: "20px 24px",
          borderRadius: "14px",
          backgroundColor: "rgba(29,158,117,0.08)",
          border: "1px solid rgba(29,158,117,0.2)",
          marginBottom: "36px",
          minHeight: "100px",
        }}>
          <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 20 20">
                <path fill="#1D9E75" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p style={{ fontSize: "14px", color: "#9fe1cb", fontStyle: "italic", lineHeight: 1.6, marginBottom: "10px", transition: "opacity 0.3s" }}>
            &ldquo;{TESTIMONIALS[activeTestimonial].texte}&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              backgroundColor: TESTIMONIALS[activeTestimonial].color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px", fontWeight: 700, color: "white",
            }}>
              {TESTIMONIALS[activeTestimonial].initiale}
            </div>
            <span style={{ fontSize: "12px", color: "#4B6082" }}>
              {TESTIMONIALS[activeTestimonial].prenom}, {TESTIMONIALS[activeTestimonial].age} ans — {TESTIMONIALS[activeTestimonial].metier}
            </span>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? "16px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  backgroundColor: i === activeTestimonial ? "#1D9E75" : "rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          padding: "12px 16px", borderRadius: "10px",
          backgroundColor: "rgba(252,129,129,0.08)",
          border: "1px solid rgba(252,129,129,0.15)",
          marginBottom: "32px",
        }}>
          <span style={{ fontSize: "16px" }}>⚠️</span>
          <p style={{ fontSize: "13px", color: "#FC8181", margin: 0, lineHeight: 1.5 }}>
            <strong>Chaque mois sans diagnostic = des décisions prises dans le flou.</strong>{" "}
            La retraite se construit maintenant, pas à 62 ans.
          </p>
        </div>

        {/* CTA principal */}
        <div style={{ textAlign: "center" as const }}>
          <Link
            href="/diagnostic"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "linear-gradient(to right, #10D98A, #2D9CDB)",
              color: "white",
              padding: "22px 48px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 40px rgba(16,217,138,0.4)",
              letterSpacing: "-0.3px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            Je commence mon diagnostic gratuit
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "14px" }}>
            {["✓ 100% gratuit", "✓ 2 minutes", "✓ Sans inscription"].map((t, i) => (
              <span key={i} style={{ fontSize: "12px", color: "#4B6082" }}>{t}</span>
            ))}
          </div>

          <p style={{ fontSize: "12px", color: "#4B6082", marginTop: "12px" }}>
            🔒 Vos données restent privées et ne sont jamais revendues
          </p>
        </div>
      </main>
    </div>
  );
}
