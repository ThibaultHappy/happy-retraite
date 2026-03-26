import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";
import RelatedArticles from "@/components/RelatedArticles";
import { BlogCTAMid, BlogCTAFinal } from "@/components/BlogCTA";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Retraite en EURL : optimiser ses cotisations sans se tromper | Happy Retraite",
  description: "Rémunération ou dividendes en EURL ? Le calcul complet pour maximiser sa retraite tout en optimisant sa fiscalité.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/retraite-eurl-optimiser-cotisations" },
  openGraph: {
    title: "Retraite en EURL : optimiser ses cotisations sans se tromper | Happy Retraite",
    description: "Rémunération ou dividendes en EURL ? Le calcul complet pour maximiser sa retraite tout en optimisant sa fiscalité.",
    url: "https://www.happyretraite.fr/blog/retraite-eurl-optimiser-cotisations",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retraite en EURL : optimiser ses cotisations sans se tromper | Happy Retraite",
    description: "Rémunération ou dividendes en EURL ? Le calcul complet pour maximiser sa retraite tout en optimisant sa fiscalité.",
  },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "28px", fontWeight: 700, color: "#0F1F3D", marginTop: "48px", marginBottom: "16px" }}>{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#0F1F3D", marginTop: "32px", marginBottom: "12px" }}>{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: "16px", lineHeight: 1.8 }}>{children}</p>;
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return <div style={{ backgroundColor: "#F0F4FF", borderLeft: "4px solid #2D4A7A", borderRadius: "0 8px 8px 0", padding: "16px 20px", margin: "24px 0" }}>{children}</div>;
}

function GreenBox({ children }: { children: React.ReactNode }) {
  return <div style={{ backgroundColor: "#E8F5EF", borderLeft: "4px solid #1D9E75", borderRadius: "0 8px 8px 0", padding: "16px 20px", margin: "24px 0" }}>{children}</div>;
}

export default function ArticlePage() {
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
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>Contact</Link>
            <Link href="/diagnostic/intro" className="hidden sm:inline-block" style={{ background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <ArticleJsonLd
          headline="Retraite en EURL : optimiser ses cotisations sans se tromper"
          description="Rémunération ou dividendes en EURL ? Le calcul complet pour maximiser sa retraite tout en optimisant sa fiscalité."
          url="https://www.happyretraite.fr/blog/retraite-eurl-optimiser-cotisations"
          datePublished="2026-02-20"
        />

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Indépendant</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>8 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            Retraite en EURL : comment optimiser ses cotisations sans se tromper
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            Le gérant d&apos;EURL face à un dilemme constant : se verser un salaire élevé (plus de droits retraite, plus de charges) ou prendre des dividendes (moins de charges, mais moins de droits). Voici le calcul que vous devez faire.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>Le régime social du gérant d&apos;EURL</H2>
          <P>Le gérant associé unique d&apos;une EURL est un Travailleur Non Salarié (TNS). Il est affilié à la Sécurité Sociale des Indépendants (SSI, ex-RSI) — pas au régime général comme un salarié. Conséquence directe : des cotisations différentes et une retraite calculée différemment.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Attention si vous avez une EURL avec option IS (Impôt sur les Sociétés) : les dividendes versés au gérant associé unique sont soumis aux cotisations sociales TNS pour la partie dépassant 10% du capital social + primes d&apos;émission + sommes versées en compte courant.</p>
          </InfoBox>

          <H2>Ce que vous cotisez réellement</H2>
          <BlogCTAMid context="votre situation de retraite" />
          <P>Sur votre rémunération de gérant : cotisations TNS globales entre 40 et 45% de la rémunération nette (retraite de base + complémentaire + prévoyance + maladie). Sur les dividendes dépassant 10% du capital : mêmes cotisations TNS (sans la maladie), soit environ 35%.</P>
          <H3>Exemple concret — Jean, gérant d&apos;EURL, 80 000€ de bénéfice disponible</H3>
          <P>Option A — 60 000€ de rémunération + 20 000€ dividendes (sous le seuil des 10%) : cotisations TNS ≈ 60 000 × 40% = 24 000€ — revenu net ≈ 56 000€ — droits retraite basés sur 60 000€. Option B — 20 000€ de rémunération + 60 000€ dividendes : cotisations TNS ≈ 20 000 × 40% = 8 000€ — revenus nets ≈ 72 000€ — mais droits retraite basés sur seulement 20 000€.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>La tentation de l&apos;Option B est forte (72 000€ vs 56 000€ de revenus disponibles). Mais les droits retraite de l&apos;Option B peuvent générer 400 à 600€/mois de pension en moins à long terme — soit 50 000 à 70 000€ sur 10 ans de retraite.</p>
          </GreenBox>

          <H2>Le piège des dividendes — simulation complète</H2>
          <P>Pour la retraite de base CNAV, le calcul est simple : avec 20 000€ de rémunération pendant 30 ans, le SAM (Salaire Annuel Moyen des 25 meilleures années) sera d&apos;environ 15 000€ (après abattements). Pension de base = 15 000/12 × 50% × (120/172) ≈ 436€/mois. Avec 60 000€ de rémunération : pension de base ≈ 1 308€/mois. L&apos;écart sur 20 ans de retraite : 872€/mois × 240 mois = 209 000€.</P>
          <P>Le &quot;gain&quot; apparent de l&apos;Option B (16 000€/an de revenus supplémentaires) est effacé en 13 ans par la perte de pension.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Cette simulation ne tient pas compte de la capitalisation si vous investissez les 16 000€ économisés par an. Dans certains cas, investir dans un PER ou dans l&apos;immobilier compense la perte de pension — mais c&apos;est rarement aussi avantageux que ça en a l&apos;air.</p>
          </InfoBox>

          <H2>Le PER TNS : l&apos;arme fiscale du gérant d&apos;EURL</H2>
          <P>Le gérant d&apos;EURL a accès à un plafond PER majoré par rapport à un salarié. Plafond total déductible 2026 : le plus élevé entre 10% du bénéfice imposable + 15% de la fraction entre 1 et 8 PASS OU 10% de 8 PASS. Concrètement : pour 60 000€ de rémunération + 30 000€ de bénéfice imposable TNS, plafond PER potentiel ≈ 13 500€/an.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Stratégie optimale EURL : Se verser une rémunération suffisante pour générer des droits retraite corrects (au moins 30 000-40 000€/an) + Maximiser les versements PER TNS sur la partie dividendes + Compléter avec une assurance-vie pour la liquidité.</p>
          </GreenBox>

          <H2>Quelle rémunération viser selon votre situation ?</H2>
          <H3>Revenus totaux &lt; 40 000€ — Priorité aux droits retraite</H3>
          <P>À ce niveau, minimiser les charges n&apos;est pas la priorité. Versez-vous la totalité en rémunération, ouvrez un PER et maximisez les versements.</P>
          <H3>Revenus totaux 40 000-80 000€ — Équilibre rémunération/dividendes</H3>
          <P>Une rémunération de 40 000-50 000€ génère des droits retraite corrects. Le surplus en dividendes (attention au seuil des 10%) finance un PER et une assurance-vie.</P>
          <H3>Revenus totaux &gt; 80 000€ — Optimisation plus complexe</H3>
          <P>À ce niveau, l&apos;accompagnement d&apos;un expert-comptable + CGP (conseiller en gestion de patrimoine) est indispensable. Les stratégies de holding, de rémunération optimale et de PER Madelin deviennent véritablement rentables.</P>

          <RelatedArticles currentSlug="retraite-eurl-optimiser-cotisations" />
        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.urssaf.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>urssaf.fr</a> — Cotisations TNS, dividendes et assiette de cotisation EURL</li>
            <li>→ <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>service-public.fr</a> — Régime social du gérant d&apos;EURL, retraite TNS</li>
            <li>→ <a href="https://bofip.impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>bofip.impots.gouv.fr</a> — Plafond PER TNS, déductibilité Madelin</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            Les règles de cotisation sur les dividendes d&apos;EURL évoluent régulièrement. Consultez urssaf.fr ou votre expert-comptable pour les modalités actualisées.
          </p>
        </div>

        <BlogCTAFinal />
      </article>

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
