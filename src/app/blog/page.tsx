import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Blog Happy Retraite — Guides et analyses retraite | Happy Retraite",
  description: "Guides, analyses et conseils pour préparer votre retraite sereinement. Indépendants, salariés, fonctionnaires — des articles concrets et chiffrés.",
};

const articles = [
  {
    slug: "retraite-micro-entrepreneur-combien-vais-je-toucher",
    titre: "Retraite micro-entrepreneur : combien vais-je vraiment toucher ?",
    desc: "Un micro-entrepreneur touche 40% de moins qu'un salarié à revenu équivalent. Voici pourquoi.",
    badge: "Indépendant",
    temps: "7 min",
  },
  {
    slug: "retraite-60-ans-encore-possible-2026",
    titre: "Retraite à 60 ans : encore possible en 2026 ?",
    desc: "Carrière longue, pénibilité, handicap — les dispositifs qui permettent encore de partir avant 64 ans.",
    badge: "Départ anticipé",
    temps: "6 min",
  },
  {
    slug: "rachat-trimestres-retraite-rentable",
    titre: "Rachat de trimestres : est-ce vraiment rentable ?",
    desc: "Coût réel, gain sur la pension, délai de récupération — le calcul complet avant de décider.",
    badge: "Optimisation",
    temps: "8 min",
  },
  {
    slug: "trimestres-manquants-comment-les-recuperer",
    titre: "Trimestres manquants : toutes les solutions en 2026",
    desc: "Rachat, périodes assimilées, régularisation — toutes les solutions pour atteindre le taux plein.",
    badge: "Guide pratique",
    temps: "7 min",
  },
  {
    slug: "retraite-independant-vs-salarie-comparaison",
    titre: "Retraite indépendant vs salarié : les chiffres qui font mal",
    desc: "À revenu égal, 40% d'écart à la retraite. Voici pourquoi — et comment compenser.",
    badge: "Indépendant",
    temps: "6 min",
  },
  {
    slug: "per-combien-verser-selon-age",
    titre: "PER : combien verser selon son âge ?",
    desc: "Simulations chiffrées à 40, 50 et 55 ans pour compenser une retraite insuffisante.",
    badge: "Épargne retraite",
    temps: "7 min",
  },
  {
    slug: "carpimko-retraite-infirmiers-guide",
    titre: "CARPIMKO retraite : le guide complet pour infirmiers libéraux",
    desc: "Cotisations, calcul de pension, points CARPIMKO — tout ce que les paramédicaux libéraux doivent savoir.",
    badge: "Professions libérales",
    temps: "8 min",
  },
  {
    slug: "retraite-eurl-optimiser-cotisations",
    titre: "Retraite en EURL : optimiser ses cotisations sans se tromper",
    desc: "Rémunération ou dividendes ? Le calcul complet pour préparer sa retraite en gérant d'EURL.",
    badge: "Indépendant",
    temps: "8 min",
  },
  {
    slug: "sasu-retraite-calcul",
    titre: "SASU et retraite : le calcul que personne ne fait",
    desc: "Les dividendes ne cotisent pas. Voici les conséquences réelles pour votre retraite.",
    badge: "Indépendant",
    temps: "7 min",
  },
  {
    slug: "fonctionnaire-retraite-progressive",
    titre: "Retraite progressive pour les fonctionnaires : mode d'emploi",
    desc: "Conditions, calcul de la pension provisoire, accord employeur — tout ce qu'il faut savoir.",
    badge: "Fonctionnaire",
    temps: "6 min",
  },
  {
    slug: "carmf-retraite-medecins-liberaux-guide",
    titre: "CARMF retraite : le guide complet pour médecins libéraux",
    desc: "4 régimes, cotisations 2026, calcul de pension et stratégies d'optimisation pour les médecins libéraux.",
    badge: "Professions libérales",
    temps: "9 min",
  },
  {
    slug: "carcdsf-retraite-chirurgiens-dentistes-sages-femmes",
    titre: "CARCDSF retraite : guide pour chirurgiens-dentistes et sages-femmes",
    desc: "Cotisations, calcul de pension et paradoxe des hauts revenus — tout ce que les affiliés CARCDSF doivent savoir.",
    badge: "Professions libérales",
    temps: "8 min",
  },
];

const badgeColors: Record<string, { bg: string; color: string }> = {
  "Indépendant": { bg: "#E8F5EF", color: "#0F6E56" },
  "Départ anticipé": { bg: "#EEF2FF", color: "#3730A3" },
  "Optimisation": { bg: "#FFF7ED", color: "#9A3412" },
  "Guide pratique": { bg: "#F0FDF4", color: "#166534" },
  "Épargne retraite": { bg: "#F0F9FF", color: "#0369A1" },
  "Professions libérales": { bg: "#FDF4FF", color: "#86198F" },
  "Fonctionnaire": { bg: "#FFF1F2", color: "#9F1239" },
};

export default function BlogIndexPage() {
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
            <Link href="/blog" style={{ color: "white", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>Blog</Link>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>Contact</Link>
            <Link href="/diagnostic" className="hidden sm:inline-block" style={{ background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "#0F1F3D", padding: "64px 24px 56px", textAlign: "center" }}>
        <div className="max-w-3xl mx-auto">
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
            Le blog Happy Retraite
          </h1>
          <p style={{ fontSize: "18px", color: "#7A95BB", lineHeight: 1.6 }}>
            Guides et analyses pour préparer votre retraite sereinement
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {articles.map((article) => {
            const colors = badgeColors[article.badge] ?? { bg: "#E8F5EF", color: "#0F6E56" };
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E8EDF5",
                    borderRadius: "16px",
                    padding: "28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s ease",
                    cursor: "pointer",
                  }}

                >
                  {/* Badge + temps */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.color,
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        borderRadius: "50px",
                      }}
                    >
                      {article.badge}
                    </span>
                    <span style={{ color: "#6B7A99", fontSize: "12px" }}>{article.temps} de lecture</span>
                  </div>

                  {/* Titre */}
                  <h2
                    style={{
                      fontFamily: PLAYFAIR,
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0F1F3D",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                      flex: 0,
                    }}
                  >
                    {article.titre}
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6B7A99",
                      lineHeight: 1.7,
                      flex: 1,
                      marginBottom: "20px",
                    }}
                  >
                    {article.desc}
                  </p>

                  {/* Lire la suite */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#1D9E75", fontSize: "14px", fontWeight: 600 }}>
                    Lire l&apos;article
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA Final */}
        <div style={{ backgroundColor: "#0F1F3D", borderRadius: "16px", padding: "48px 40px", textAlign: "center", marginTop: "64px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "32px", fontWeight: 700, color: "white", marginBottom: "12px" }}>
            Prêt à connaître votre situation réelle ?
          </h2>
          <p style={{ color: "#7A95BB", fontSize: "16px", marginBottom: "32px", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 32px" }}>
            Diagnostic gratuit et personnalisé selon votre statut, vos revenus et votre carrière.
          </p>
          <Link
            href="/diagnostic"
            style={{ display: "inline-block", background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "18px 48px", borderRadius: "12px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}
          >
            Faire mon diagnostic gratuit →
          </Link>
          <p style={{ color: "#4B6082", fontSize: "13px", marginTop: "16px" }}>Sans carte bancaire · Résultat immédiat</p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0F1F3D", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 24px", marginTop: "40px" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: PLAYFAIR, fontSize: "18px", color: "white" }}>Happy<span style={{ color: "#1D9E75" }}>Retraite</span></span>
          </Link>
          <p style={{ fontSize: "13px", color: "#4B6082", textAlign: "center" }}>© 2026 Happy Retraite. Les estimations sont indicatives et ne constituent pas un conseil financier.</p>
          <div style={{ display: "flex", gap: "24px", fontSize: "13px" }}>
            <Link href="/blog" style={{ color: "#4B6082", textDecoration: "none" }}>Blog</Link>
            <Link href="/mentions-legales" style={{ color: "#4B6082", textDecoration: "none" }}>Mentions légales</Link>
            <Link href="/confidentialite" style={{ color: "#4B6082", textDecoration: "none" }}>Confidentialité</Link>
            <Link href="/contact" style={{ color: "#4B6082", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
