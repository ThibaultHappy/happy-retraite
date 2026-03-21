import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Retraite micro-entrepreneur : combien vais-je vraiment toucher ? | Happy Retraite",
  description: "Calcul concret de la retraite d'un auto-entrepreneur en 2026. Trimestres, pension de base, CIPAV ou régime général : on fait les chiffres pour vous.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Retraite micro-entrepreneur : combien vais-je vraiment toucher ?",
  description: "Calcul concret de la retraite d'un auto-entrepreneur en 2026. Trimestres, pension de base, CIPAV ou régime général : on fait les chiffres pour vous.",
  author: { "@type": "Organization", name: "Happy Retraite" },
  publisher: { "@type": "Organization", name: "Happy Retraite", url: "https://www.happyretraite.fr" },
  url: "https://www.happyretraite.fr/blog/retraite-micro-entrepreneur-combien-vais-je-toucher",
  datePublished: "2026-03-01",
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
            <Link href="/diagnostic" style={{ backgroundColor: "#1D9E75", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Indépendant</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>7 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            Retraite micro-entrepreneur : combien vais-je vraiment toucher ?
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            Un micro-entrepreneur touche en moyenne 40% de moins qu&apos;un salarié à revenu équivalent à la retraite. Voici pourquoi — et comment changer ça.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>Le choc des chiffres</H2>
          <P>La majorité des micro-entrepreneurs ne savent pas ce qui les attend. Selon les données de la DREES, un travailleur indépendant perçoit en moyenne 1 200€/mois de pension, contre 1 800€ pour un salarié ayant eu le même niveau de revenu. L&apos;écart vient du système de cotisation.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Contrairement au salarié qui cotise sur son salaire brut (avec une cotisation patronale de ~30%), le micro-entrepreneur cotise sur son chiffre d&apos;affaires, sans les mêmes taux de remplacement.</p>
          </InfoBox>

          <H2>Comment fonctionne la cotisation retraite en micro-entreprise</H2>
          <H3>Ce que vous payez réellement</H3>
          <P>En micro-entreprise, les cotisations sociales sont prélevées directement sur votre CA, pas sur votre bénéfice. Le taux global (incluant retraite de base et complémentaire) dépend de votre activité : Vente de marchandises : ~12,3% — Prestations de services BIC : ~21,2% — Professions libérales (CIPAV) : ~22,2%</P>
          <P>Ces cotisations incluent la retraite de base et complémentaire, mais à des niveaux bien inférieurs à ceux d&apos;un salarié.</P>
          <H3>CIPAV ou régime général ?</H3>
          <P>Depuis 2018, la plupart des micro-entrepreneurs en prestations de services relèvent du régime général (CNAV + AGIRC-ARRCO). Seules certaines professions libérales réglementées restent à la CIPAV : architectes, experts-comptables, consultants en gestion...</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Vérifiez votre caisse d&apos;affiliation sur net-entreprises.fr — une erreur d&apos;affiliation peut vous faire perdre des années de droits.</p>
          </GreenBox>

          <H2>Valider ses trimestres : les seuils 2026</H2>
          <P>Pour valider 1 trimestre, vous devez avoir cotisé sur un revenu équivalent à 150 fois le SMIC horaire, soit environ 1 690€ de revenu net.</P>
          <P>Tableau des CA minimum pour valider des trimestres (prestations de services, ~21% de cotisations) : 1 trimestre ≈ 8 050€ CA — 2 trimestres ≈ 16 100€ CA — 3 trimestres ≈ 24 150€ CA — 4 trimestres ≈ 32 200€ CA</P>
          <P>Exemple concret — Marie, graphiste freelance, 30 000€ de CA annuel : trimestres validés = 3 (le 4e trimestre nécessiterait 32 200€). Après 30 ans à ce niveau, il lui manquerait potentiellement 30 trimestres.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Piège fréquent : les années de lancement avec moins de 8 000€ de CA ne valident aucun trimestre. Ces années &quot;blanches&quot; comptent pour la durée de carrière mais pas pour les droits.</p>
          </InfoBox>

          <H2>Calculer sa pension : la formule expliquée</H2>
          <H3>La formule de base</H3>
          <P>Retraite de base = SAM × 50% × (trimestres validés / 172). SAM = Salaire Annuel Moyen (moyenne de vos 25 meilleures années de revenus).</P>
          <H3>Exemple chiffré</H3>
          <P>Prenons Thomas, consultant en micro-entreprise, 35 000€ de CA pendant 25 ans. Revenu net imposable moyen : ~27 000€/an (après abattement micro). SAM sur 25 ans : 27 000€. Trimestres validés : 25 × 4 = 100 trimestres (si CA suffisant chaque année). Pension de base = 27 000 / 12 × 50% × (100/172) = ~655€/mois. Avec la retraite complémentaire (points AGIRC-ARRCO ou CIPAV), total estimé : 800-900€/mois.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Pour comparaison, un salarié avec le même revenu net de 27 000€/an pendant 25 ans toucherait environ 1 200-1 400€/mois. L&apos;écart représente 400-600€/mois, soit 5 000-7 000€/an.</p>
          </GreenBox>

          <H2>Le vrai problème : les années creuses comptent aussi</H2>
          <P>La pension est calculée sur la moyenne de vos 25 meilleures années. En micro-entreprise, les années de lancement, les crises, les congés maternité non protégés... viennent peser sur cette moyenne.</P>
          <P>Une année à 0€ de revenu ne vous fait pas perdre de trimestres si vous en avez assez — mais elle peut entrer dans vos 25 meilleures années si vous n&apos;en avez pas d&apos;autres.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Conseil pratique : si vous anticipez une année à faible revenu, c&apos;est le moment de racheter des trimestres (plus économique que quand vos revenus sont élevés) ou de maximiser vos versements PER pour l&apos;avantage fiscal.</p>
          </InfoBox>

          <H2>3 leviers pour améliorer votre retraite d&apos;indépendant</H2>
          <H3>1. Le Plan d&apos;Épargne Retraite (PER)</H3>
          <P>Le PER est votre meilleur outil. Les versements sont déductibles de votre revenu imposable (jusqu&apos;à 10% de vos revenus nets, soit ~3 500€ si vous gagnez 35 000€). Sur 25 ans avec 300€/mois et 5% de rendement, vous constituez un capital de ~170 000€, soit une rente de ~700€/mois.</P>
          <H3>2. Racheter des trimestres</H3>
          <P>Si vous avez des années incomplètes, le rachat de trimestres est possible. Le coût dépend de votre âge et de votre revenu. À 45 ans pour un revenu de 30 000€, compter environ 2 000-4 000€ par trimestre. Rentable si vous pouvez partir 1-2 ans plus tôt.</P>
          <H3>3. Cumuler avec une activité salariée</H3>
          <P>Certains micro-entrepreneurs peuvent cumuler avec un emploi salarié (CDI temps partiel, consulting en portage salarial...). Cette double cotisation peut significativement améliorer les droits retraite.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Liens utiles : Simuler vos trimestres sur info-retraite.fr — Calculer votre plafond PER sur votre avis d&apos;imposition (case 6QS)</p>
          </GreenBox>

          <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "white", border: "1px solid #E8EDF5", borderRadius: "12px" }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Pour aller plus loin, lisez notre article sur le rachat de trimestres : est-ce vraiment rentable ? →{" "}
              <Link href="/blog/rachat-trimestres-retraite-rentable" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Rachat de trimestres : est-ce vraiment rentable ?</Link>
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div style={{ backgroundColor: "#0F1F3D", borderRadius: "16px", padding: "40px", textAlign: "center", marginTop: "64px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "12px" }}>
            Calculez votre retraite en 2 minutes
          </h2>
          <p style={{ color: "#7A95BB", fontSize: "15px", marginBottom: "28px", lineHeight: 1.6 }}>
            Diagnostic gratuit et personnalisé selon votre statut et votre situation.
          </p>
          <Link
            href="/diagnostic"
            style={{ display: "inline-block", background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "16px 40px", borderRadius: "12px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}
          >
            Faire mon diagnostic gratuit →
          </Link>
        </div>
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
