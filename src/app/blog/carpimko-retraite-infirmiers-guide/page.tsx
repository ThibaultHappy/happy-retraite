import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";
import RelatedArticles from "@/components/RelatedArticles";
import { BlogCTAMid, BlogCTAFinal } from "@/components/BlogCTA";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "CARPIMKO retraite : guide complet pour infirmiers libéraux | Happy Retraite",
  description: "Cotisations, points CARPIMKO, calcul de pension et stratégies d'optimisation pour infirmiers et paramédicaux libéraux. Guide 2026.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/carpimko-retraite-infirmiers-guide" },
  openGraph: {
    title: "CARPIMKO retraite : guide complet pour infirmiers libéraux | Happy Retraite",
    description: "Cotisations, points CARPIMKO, calcul de pension et stratégies d'optimisation pour infirmiers et paramédicaux libéraux. Guide 2026.",
    url: "https://www.happyretraite.fr/blog/carpimko-retraite-infirmiers-guide",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CARPIMKO retraite : guide complet pour infirmiers libéraux | Happy Retraite",
    description: "Cotisations, points CARPIMKO, calcul de pension et stratégies d'optimisation pour infirmiers et paramédicaux libéraux. Guide 2026.",
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
          headline="CARPIMKO retraite : guide complet pour infirmiers libéraux"
          description="Cotisations, points CARPIMKO, calcul de pension et stratégies d'optimisation pour infirmiers et paramédicaux libéraux. Guide 2026."
          url="https://www.happyretraite.fr/blog/carpimko-retraite-infirmiers-guide"
          datePublished="2026-02-15"
        />

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Professions libérales</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>8 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            CARPIMKO retraite : tout ce que les infirmiers libéraux doivent savoir
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            La CARPIMKO est la caisse de retraite obligatoire de 5 professions paramédicales libérales. Voici comment fonctionne vraiment votre retraite — et ce que beaucoup de praticiens ignorent encore.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>La CARPIMKO, c&apos;est quoi exactement ?</H2>
          <P>La CARPIMKO (Caisse Autonome de Retraite et de Prévoyance des Infirmiers, Masseurs-Kinésithérapeutes, Pédicures-Podologues, Orthophonistes et Orthoptistes) gère la retraite complémentaire de ces 5 professions libérales conventionnées.</P>
          <P>En tant qu&apos;infirmier libéral, votre retraite se compose de : Retraite de base (régime général via URSSAF/CNAV) + Retraite complémentaire CARPIMKO (régime par points) + Régime invalidité-décès CARPIMKO (couverture supplémentaire).</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Depuis 2023, les auxiliaires médicaux libéraux sont rattachés au régime général pour la retraite de base — et non plus à la SSI. Ce changement a des conséquences positives sur les droits de base.</p>
          </InfoBox>

          <H2>Qui cotise à la CARPIMKO ?</H2>
          <BlogCTAMid context="votre situation de retraite" />
          <P>Sont obligatoirement affiliés : Infirmiers libéraux conventionnés — Masseurs-kinésithérapeutes libéraux — Pédicures-podologues libéraux — Orthophonistes libéraux — Orthoptistes libéraux.</P>
          <P>L&apos;affiliation est automatique dès la première installation en libéral conventionné. Pas de démarche à effectuer — mais vérifiez tout de même que votre compte est bien créé sur carpimko.com.</P>

          <H2>Structure des cotisations</H2>
          <H3>Retraite de base (régime général)</H3>
          <P>Vous cotisez à la CNAV (Caisse Nationale d&apos;Assurance Vieillesse) via votre URSSAF, comme un indépendant classique. Le taux est de 17,75% sur vos revenus BNC, dans la limite de 1 PASS (48 060€ en 2026 — Source : URSSAF), puis 0,6% au-delà.</P>
          <H3>Retraite complémentaire CARPIMKO</H3>
          <P>Le régime complémentaire CARPIMKO fonctionne par points. La cotisation annuelle est composée d&apos;une part forfaitaire et d&apos;une part proportionnelle aux revenus BNC. En 2026 : cotisation forfaitaire ≈ 2 500€/an + cotisation proportionnelle ≈ 3,5% des revenus BNC au-delà d&apos;un seuil.</P>
          <H3>Régime invalidité-décès</H3>
          <P>Une cotisation supplémentaire (~1 300€/an forfaitaire) couvre le risque invalidité et décès. Cette couverture est indépendante de votre prévoyance personnelle éventuelle.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Total cotisations CARPIMKO annuelles pour un infirmier à 60 000€ BNC : ~7 500€ (base) + ~3 200€ (complémentaire) + ~1 300€ (invalidité-décès) = environ 12 000€/an, soit ~20% du BNC.</p>
          </GreenBox>

          <H2>Calculer sa pension CARPIMKO</H2>
          <H3>La pension de base (régime général)</H3>
          <P>Formule : SAM × 50% × (trimestres validés / 172). Pour un infirmier à 60 000€ BNC pendant 30 ans, le revenu net imposable moyen est d&apos;environ 45 000€ (après abattement de 34% pour frais réels ou charges réelles). SAM moyen : ~45 000€. Pension de base estimée = 45 000/12 × 50% × (120/172) ≈ 1 308€/mois.</P>
          <H3>La pension CARPIMKO (points)</H3>
          <P>En 2026, la valeur du point CARPIMKO est d&apos;environ 0,72€/an. Un infirmier à 60 000€ BNC cotisant pendant 30 ans accumule environ 3 800 points. Pension complémentaire = 3 800 × 0,72 ≈ 2 736€/an ≈ 228€/mois.</P>
          <P>Pension totale estimée : ~1 308 + ~228 = ~1 536€/mois pour 30 ans de carrière à 60 000€ BNC. À titre de comparaison, un salarié hospitalier au même niveau de revenu net toucherait environ 2 000-2 200€/mois.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>L&apos;écart avec le salarié est structurel et ne peut pas être entièrement comblé. L&apos;objectif est de le minimiser via le PER et d&apos;autres placements.</p>
          </InfoBox>

          <H2>Ce que beaucoup d&apos;infirmiers ratent</H2>
          <H3>Les années d&apos;installation à faible revenu</H3>
          <P>Lors de la première installation, les revenus BNC sont souvent bas (1-2 ans pour constituer la patientèle). Ces années peuvent valider moins de 4 trimestres — voire aucun si les revenus sont très faibles.</P>
          <H3>Les erreurs sur le relevé de carrière</H3>
          <P>Certains infirmiers découvrent à 55 ans que des années cotisées à la CARPIMKO ne sont pas reportées sur leur relevé info-retraite.fr. C&apos;est fréquent pour les praticiens ayant eu des parcours mixtes (hospitalier + libéral). Vérifiez chaque année.</P>
          <H3>Le rachat d&apos;années d&apos;études IFSI</H3>
          <P>Les années passées en IFSI (Institut de Formation en Soins Infirmiers) sont rachetables, jusqu&apos;à 12 trimestres. Pour un infirmier qui a fait 3 ans d&apos;études après le bac, cela représente jusqu&apos;à 12 trimestres supplémentaires.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Action prioritaire : connectez-vous sur info-retraite.fr et vérifiez que toutes vos années en libéral sont bien enregistrées. Contactez la CARPIMKO si des anomalies apparaissent (carpimko.com, 01 40 68 32 00).</p>
          </GreenBox>

          <RelatedArticles currentSlug="carpimko-retraite-infirmiers-guide" />
        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.carpimko.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>carpimko.com</a> — Cotisations, valeur du point, prestations invalidité-décès</li>
            <li>→ <a href="https://www.cnavpl.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>cnavpl.fr</a> — Retraite de base des professions libérales paramédicales</li>
            <li>→ <a href="https://www.urssaf.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>urssaf.fr</a> — PASS 2026 (48 060€), cotisations CNAV des auxiliaires médicaux libéraux</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            Basé sur le PASS 2026 (48 060€) et les barèmes CARPIMKO en vigueur. Vérifiez les montants actualisés sur carpimko.com.
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
