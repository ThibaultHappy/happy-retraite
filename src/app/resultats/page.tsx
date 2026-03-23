"use client";

import { useEffect, useState, Suspense, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormData, DiagnosticResult } from "@/lib/retraite";
import { posthog } from "@/lib/posthog";

function fmtEuro(n: number) {
  return Math.abs(n).toLocaleString("fr-FR") + "€";
}

const LABEL_STATUT: Record<string, string> = {
  salarie: "Salarié privé",
  fonctionnaire: "Fonctionnaire",
  independant: "Indépendant",
  liberal: "Profession libérale",
  mixte: "Carrière mixte",
};

function ResultatsContent() {
  const [data, setData] = useState<{ formData: FormData; result: DiagnosticResult } | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "loading">("idle");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [pdfToken, setPdfToken] = useState<string | null>(null);
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadError, setLeadError] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("happyRetraite_diagnostic");
      if (raw) {
        try {
          setData(JSON.parse(raw));
        } catch {
          // ignore parse errors
        }
      }
    }
  }, []);

  // Vérifier le statut du paiement au retour de Stripe
  useEffect(() => {
    const payment = searchParams.get("payment");
    const sessionId = searchParams.get("session_id");
    if (payment === "success" && sessionId) {
      setPaymentStatus("loading");
      fetch(`/api/verify-payment?session_id=${sessionId}`)
        .then((r) => r.json())
        .then((d) => {
          if (d.paid) {
            setPaymentStatus("success");
            // Generate PDF in background
            const raw = typeof window !== "undefined" ? localStorage.getItem("happyRetraite_diagnostic") : null;
            if (raw) {
              try {
                const { formData: f, result: r } = JSON.parse(raw);
                setPdfGenerating(true);
                fetch("/api/generate-pdf", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    prenom: f.prenom,
                    nom: f.nom,
                    email: f.email,
                    statut: f.statut,
                    annee_naissance: f.anneeNaissance,
                    pension_estimee: r.pensionEstimee,
                    gap_mensuel: r.gap,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => { if (data.token) setPdfToken(data.token); })
                  .finally(() => setPdfGenerating(false));
              } catch {
                setPdfGenerating(false);
              }
            }
          } else {
            setPaymentStatus("idle");
          }
        })
        .catch(() => setPaymentStatus("idle"));
    }
  }, [searchParams]);

  const handleLeadCapture = useCallback(async () => {
    if (!data || !leadEmail.includes("@")) {
      setLeadError("Veuillez entrer une adresse email valide.");
      return;
    }
    setLeadError("");
    setLeadLoading(true);
    const { formData: f, result: r } = data;
    const revenuCible = r.pensionEstimee - r.gap;
    const tauxCouv = Math.round((r.pensionEstimee / Math.max(revenuCible, 1)) * 100);
    try {
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: leadEmail,
          prenom: f.prenom || "",
          pension_estimee: r.pensionEstimee,
          age_depart: r.ageDepart,
          annees_restantes: r.anneesRestantes,
          trimestres_valides: r.trimestresValides,
          trimestres_requis: r.trimestresRequis,
          taux_couverture: tauxCouv,
          revenu_cible: revenuCible,
          gap: r.gap,
          statut: f.statut,
          annee_naissance: f.anneeNaissance,
        }),
      });
      posthog.capture("lead_captured", { statut: f.statut, pension_estimee: r.pensionEstimee });
      setLeadCaptured(true);
    } catch {
      setLeadError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLeadLoading(false);
    }
  }, [data, leadEmail]);

  const handleCheckout = useCallback(async () => {
    if (!data) return;
    posthog.capture("payment_initiated", {
      pension_estimee: data.result.pensionEstimee,
      gap_mensuel: data.result.gap,
      statut: data.formData.statut,
    });
    setCheckoutLoading(true);
    try {
      const { formData: f, result: r } = data;
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: f.prenom,
          nom: f.nom,
          email: f.email,
          statut: f.statut,
          annee_naissance: f.anneeNaissance,
          pension_estimee: r.pensionEstimee,
          gap_mensuel: r.gap,
        }),
      });
      const { url, error } = await res.json();
      if (error || !url) throw new Error(error ?? "No URL");
      window.location.href = url;
    } catch {
      setCheckoutLoading(false);
      alert("Erreur lors de l'initialisation du paiement. Veuillez réessayer.");
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="text-center px-6">
          <div
            className="w-12 h-12 border-4 border-gray-200 rounded-full mx-auto mb-4"
            style={{ borderTopColor: "#1D9E75", animation: "spin 1s linear infinite" }}
          />
          <p className="text-gray-500 mb-6">Calcul en cours…</p>
          <p className="text-sm text-gray-400 mb-4">Aucun diagnostic trouvé.</p>
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold"
            style={{ background: "linear-gradient(to right, #10D98A, #2D9CDB)" }}
          >
            Faire mon diagnostic gratuit
          </Link>
        </div>
      </div>
    );
  }

  const { formData: f, result: r } = data;
  const prenom = f.prenom ? `, ${f.prenom}` : "";
  const gap = r.gap;
  const tauxCouverture = Math.round((r.pensionEstimee / Math.max(f.revenuCible, 1)) * 100);
  const gapTotal = gap * 12 * 20;
  const statutLabel = LABEL_STATUT[f.statut] || f.statut;

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#F7F9FC" }}>
      {/* Header */}
      <header className="px-6 py-4 bg-white sticky top-0 z-10" style={{ borderBottom: "1px solid #E8EDF5" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-bold" style={{ color: "#0F1F3D" }}>
            Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
          </Link>
          <Link href="/diagnostic" className="text-sm transition-colors" style={{ color: "#6B7A99" }}>
            Refaire le diagnostic
          </Link>
        </div>
      </header>

      {/* ── SECTION 1 — DIAGNOSTIC ─────────────────────────────────────────── */}
      <section className="px-6 py-16" style={{ backgroundColor: "#0F1F3D" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: "rgba(29,158,117,0.15)", color: "#1D9E75", border: "1px solid rgba(29,158,117,0.3)" }}
          >
            {statutLabel}
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Votre diagnostic retraite{prenom}
          </h1>
          <p className="text-sm mb-10" style={{ color: "#7A95BB" }}>{r.regime}</p>

          {/* Pension principale */}
          <div
            className="inline-block rounded-3xl px-10 py-8 mb-8 text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-sm mb-2" style={{ color: "#7A95BB" }}>Pension estimée</p>
            <div
              className="mb-1"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "64px", fontWeight: 700, color: "#1D9E75", lineHeight: 1 }}
            >
              {fmtEuro(r.pensionEstimee)}
            </div>
            <p className="text-sm" style={{ color: "#4B6082" }}>/mois brut</p>
          </div>

          {/* Age / années restantes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {[
              { value: `${r.ageDepart} ans`, label: "Âge de départ estimé" },
              { value: `${r.anneesRestantes} ans`, label: "Avant la retraite" },
              { value: `${r.trimestresValides}/${r.trimestresRequis}`, label: "Trimestres validés/requis", wide: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-4 text-center ${item.wide ? "col-span-2 sm:col-span-1" : ""}`}
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-xs mt-1" style={{ color: "#4B6082" }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Jauge */}
          <div className="text-left rounded-2xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex justify-between text-sm mb-3" style={{ color: "#7A95BB" }}>
              <span>Taux de couverture de votre objectif</span>
              <span className="font-bold text-white">{tauxCouverture}%</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${Math.min(tauxCouverture, 100)}%`, backgroundColor: "#1D9E75" }}
              />
            </div>
            <div className="flex justify-between text-xs mt-2" style={{ color: "#4B6082" }}>
              <span>0€</span>
              <span>Objectif : {fmtEuro(f.revenuCible)}/mois</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — LE GAP ─────────────────────────────────────────────── */}
      <section className="px-6 py-16 bg-white" style={{ border: "1px solid #E8EDF5" }}>
        <div className="max-w-3xl mx-auto text-center">
          {gap <= 0 ? (
            <>
              <div className="text-5xl mb-4">🎉</div>
              <h2
                className="text-3xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0F1F3D" }}
              >
                Bonne nouvelle !
              </h2>
              <p className="mb-6" style={{ color: "#6B7A99" }}>
                Votre pension estimée couvre votre objectif de {fmtEuro(f.revenuCible)}/mois.
              </p>
              <div
                className="inline-block rounded-3xl px-10 py-6"
                style={{ backgroundColor: "#E8F5EF", border: "1px solid #E8EDF5" }}
              >
                <div className="text-5xl font-bold" style={{ color: "#1D9E75" }}>
                  +{fmtEuro(Math.abs(gap))}
                </div>
                <p className="text-sm mt-1" style={{ color: "#6B7A99" }}>/mois d&apos;excédent</p>
              </div>
            </>
          ) : (
            <>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0F1F3D" }}
              >
                Il vous manque chaque mois
              </h2>
              <div
                className="inline-block rounded-3xl px-10 py-8 mb-6"
                style={{ backgroundColor: "#FFF5F5", border: "1px solid #FED7D7" }}
              >
                <div
                  className="mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "56px", fontWeight: 700, color: "#E53E3E", lineHeight: 1 }}
                >
                  {fmtEuro(gap)}
                </div>
                <p className="text-sm" style={{ color: "#6B7A99" }}>/mois pour atteindre {fmtEuro(f.revenuCible)}/mois</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <div className="rounded-2xl p-5" style={{ backgroundColor: "#F7F9FC", border: "1px solid #E8EDF5" }}>
                  <div className="text-2xl font-bold" style={{ color: "#E53E3E" }}>{fmtEuro(gapTotal)}</div>
                  <p className="text-xs mt-1" style={{ color: "#6B7A99" }}>Gap cumulé sur 20 ans de retraite</p>
                </div>
                <div className="rounded-2xl p-5" style={{ backgroundColor: "#F7F9FC", border: "1px solid #E8EDF5" }}>
                  <div className="text-2xl font-bold" style={{ color: "#0F1F3D" }}>{r.trimestresManquants}</div>
                  <p className="text-xs mt-1" style={{ color: "#6B7A99" }}>Trimestres manquants pour le taux plein</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── SECTION 3 — CAPTURE EMAIL + LEVIERS ────────────────────────────── */}
      <section className="px-6 py-16" style={{ backgroundColor: "#F7F9FC" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#1D9E75", letterSpacing: "2px" }}>
            Personnalisé pour votre profil
          </p>
          <h2
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0F1F3D" }}
          >
            Vos 3 actions prioritaires
          </h2>
          <p className="mb-8" style={{ color: "#6B7A99" }}>
            Actions concrètes pour combler votre écart de {fmtEuro(Math.max(gap, 0))}/mois.
          </p>

          {/* ── Formulaire de capture (avant soumission) */}
          {!leadCaptured ? (
            <div
              className="rounded-2xl p-7 mb-6"
              style={{ backgroundColor: "white", border: "2px solid #1D9E75" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0F1F3D" }}
              >
                Recevez votre analyse gratuite
              </h3>
              <p className="text-sm mb-5" style={{ color: "#6B7A99", lineHeight: 1.6 }}>
                Votre pension estimée, votre âge de départ et vos premiers leviers d&apos;action — directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="votre@email.fr"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLeadCapture()}
                  className="flex-1 rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ border: "1px solid #E8EDF5", color: "#0F1F3D", backgroundColor: "#F7F9FC" }}
                />
                <button
                  onClick={handleLeadCapture}
                  disabled={leadLoading}
                  className="rounded-xl px-6 py-3 text-sm font-semibold text-white whitespace-nowrap"
                  style={{ backgroundColor: "#1D9E75", opacity: leadLoading ? 0.7 : 1, cursor: leadLoading ? "not-allowed" : "pointer" }}
                >
                  {leadLoading ? "Envoi…" : "Recevoir mon analyse →"}
                </button>
              </div>
              {leadError && <p className="text-xs mt-2" style={{ color: "#E53E3E" }}>{leadError}</p>}
            </div>
          ) : (
            /* ── Message post-capture */
            <div
              className="rounded-2xl p-5 mb-6 flex items-center gap-4"
              style={{ backgroundColor: "#E8F5EF", border: "1px solid #1D9E75" }}
            >
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#085041" }}>Analyse envoyée !</p>
                <p className="text-xs mt-0.5" style={{ color: "#0F6E56" }}>
                  Consultez votre email pour l&apos;analyse complète. Le levier n°1 est débloqué ci-dessous.
                </p>
              </div>
            </div>
          )}

          {/* ── Leviers */}
          <div className="space-y-5">
            {r.leviers.map((l, i) => {
              // Levier 1 : visible après capture, flou avant
              if (i === 0) {
                if (!leadCaptured) {
                  return (
                    <div key={i} className="bg-white rounded-2xl relative overflow-hidden select-none" style={{ border: "1px solid #E8EDF5", minHeight: "100px" }}>
                      <div className="p-6 flex gap-5" style={{ filter: "blur(5px)", userSelect: "none", pointerEvents: "none" }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: "#1D9E75" }}>1</div>
                        <div>
                          <h3 className="font-semibold mb-2" style={{ color: "#0F1F3D" }}>{l.titre}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>{l.detail}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl">🔒</span>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 flex gap-5" style={{ border: "1px solid #E8EDF5" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: "#1D9E75" }}>1</div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: "#0F1F3D" }}>{l.titre}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>{l.detail}</p>
                    </div>
                  </div>
                );
              }
              // Levier 2 : titre visible, détail flou
              if (i === 1) {
                return (
                  <div key={i} className="bg-white rounded-2xl relative overflow-hidden select-none" style={{ border: "1px solid #E8EDF5", minHeight: "110px" }}>
                    <div className="p-6 flex gap-5">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: "#E8EDF5", color: "#6B7A99" }}>2</div>
                      <div>
                        <h3 className="font-semibold mb-2" style={{ color: "#0F1F3D" }}>{l.titre}</h3>
                        <p className="text-sm leading-relaxed" style={{ filter: "blur(4px)", userSelect: "none", color: "#6B7A99" }}>{l.detail}</p>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-3/4 flex flex-col items-center justify-end pb-3" style={{ background: "linear-gradient(to bottom, transparent, white 65%)" }}>
                      <span className="text-lg">🔒</span>
                    </div>
                  </div>
                );
              }
              // Levier 3 : entièrement flou
              return (
                <div key={i} className="bg-white rounded-2xl relative overflow-hidden select-none" style={{ border: "1px solid #E8EDF5", minHeight: "90px" }}>
                  <div className="p-6 flex gap-5" style={{ filter: "blur(5px)", userSelect: "none", pointerEvents: "none" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: "#F7F9FC", color: "#6B7A99", border: "1px solid #E8EDF5" }}>3</div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: "#0F1F3D" }}>{l.titre}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>{l.detail}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CTA PAYANT ─────────────────────────────────────────── */}
      <section className="px-6 py-16" style={{ backgroundColor: "#F7F9FC" }}>
        <div className="max-w-3xl mx-auto">
          {/* Message succès paiement */}
          {(paymentStatus === "success" || paymentStatus === "loading") && (
            <div
              className="mb-8 rounded-2xl p-6 text-center"
              style={{ backgroundColor: "#E8F5EF", border: "1px solid #1D9E75" }}
            >
              {paymentStatus === "loading" ? (
                <p style={{ color: "#0F6E56", fontWeight: 500 }}>Vérification du paiement…</p>
              ) : (
                <>
                  <div className="text-3xl mb-3">✅</div>
                  <p style={{ color: "#085041", fontWeight: 600, fontSize: "16px", marginBottom: "6px" }}>
                    Paiement confirmé — merci !
                  </p>
                  {pdfGenerating ? (
                    <p style={{ color: "#0F6E56", fontSize: "14px" }}>
                      Génération de votre rapport PDF en cours…
                    </p>
                  ) : pdfToken ? (
                    <a
                      href={`/api/download-pdf?token=${pdfToken}`}
                      download
                      style={{
                        display: "inline-block",
                        marginTop: "12px",
                        padding: "12px 28px",
                        backgroundColor: "#1D9E75",
                        color: "white",
                        borderRadius: "50px",
                        fontWeight: 600,
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      📥 Télécharger mon rapport PDF →
                    </a>
                  ) : (
                    <p style={{ color: "#0F6E56", fontSize: "14px" }}>
                      Votre rapport est en cours de génération, vous le recevrez par email dans 2 minutes.
                    </p>
                  )}
                </>
              )}
            </div>
          )}
          <div
            className="text-center"
            style={{ backgroundColor: "#0F1F3D", borderRadius: "16px", padding: "36px 28px" }}
          >
            {/* Tag */}
            <div style={{ display: "inline-block", marginBottom: "20px" }}>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                borderRadius: "20px",
                padding: "4px 14px",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 500,
              }}>
                Rapport personnalisé
              </span>
            </div>

            {/* Titre */}
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>
              Vous méritez plus qu&apos;un aperçu.<br />Voici votre plan complet.
            </h2>

            {/* Sous-titre */}
            <p style={{ fontSize: "13px", color: "#7A95BB", maxWidth: "480px", margin: "0 auto 24px", lineHeight: 1.6 }}>
              Un conseiller retraite facture 150€ l&apos;heure pour ce niveau d&apos;analyse. Votre rapport personnalisé est prêt en 2 minutes — pour 29€.
            </p>

            {/* Features grid 2 colonnes */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", maxWidth: "460px", margin: "0 auto 28px" }}>
              {[
                "✓ Calcul détaillé par régime",
                "✓ Tous vos leviers débloqués",
                "✓ Plan d'action mois par mois",
                "✓ 3 scénarios comparatifs",
                "✓ Simulation PER 10/20/30 ans",
                "✓ PDF professionnel à imprimer",
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", borderRadius: "8px", padding: "10px 12px", fontSize: "12px", textAlign: "left" }}>
                  {item}
                </div>
              ))}
            </div>

            {/* Bouton */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <button
                onClick={handleCheckout}
                disabled={checkoutLoading || paymentStatus === "success"}
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  padding: "22px",
                  fontSize: "19px",
                  fontWeight: 600,
                  borderRadius: "14px",
                  background: paymentStatus === "success" ? "#0F6E56" : "linear-gradient(to right, #10D98A, #2D9CDB)",
                  color: "white",
                  border: "none",
                  cursor: checkoutLoading || paymentStatus === "success" ? "not-allowed" : "pointer",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  opacity: checkoutLoading ? 0.7 : 1,
                }}
              >
                {checkoutLoading ? "Redirection vers le paiement…" : paymentStatus === "success" ? "✅ Rapport commandé" : "Obtenir mon rapport complet — 29€ →"}
              </button>
            </div>

            {/* Sous bouton */}
            <p style={{ fontSize: "11px", color: "#4B6082", marginTop: "8px", marginBottom: "16px" }}>
              Paiement unique · Aucun abonnement
            </p>

            {/* Ligne sécurité */}
            <p style={{ fontSize: "11px", color: "#4B6082" }}>
              🔒 Paiement sécurisé Stripe · Remboursé si insatisfait sous 7 jours
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — ACTIONS SECONDAIRES ───────────────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: "#F7F9FC", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.share) {
                navigator.share({ title: "Mon diagnostic retraite", url: window.location.href });
              } else {
                navigator.clipboard?.writeText(window.location.href);
                alert("Lien copié !");
              }
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium text-sm transition-colors"
            style={{ borderColor: "#1D9E75", color: "#1D9E75" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Partager mon diagnostic
          </button>
          <Link
            href="/diagnostic"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors"
            style={{ border: "1px solid #E8EDF5", color: "#6B7A99", backgroundColor: "white" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Recommencer avec un autre profil
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="px-6 py-6" style={{ backgroundColor: "#0F1F3D", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center leading-relaxed" style={{ color: "#4B6082" }}>
            Les estimations sont fournies à titre indicatif et ne constituent pas un conseil financier réglementé.
          </p>
          <div style={{ display: "flex", gap: "20px", fontSize: "12px", whiteSpace: "nowrap" }}>
            <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#4B6082", textDecoration: "none" }}>bonjour@happyretraite.fr</a>
            <Link href="/contact" style={{ color: "#4B6082", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ResultatsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-10 h-10 border-4 border-gray-200 rounded-full mx-auto mb-4"
              style={{ borderTopColor: "#1D9E75", animation: "spin 1s linear infinite" }}
            />
            <p className="text-gray-500">Calcul en cours…</p>
          </div>
        </div>
      }
    >
      <ResultatsContent />
    </Suspense>
  );
}
