import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Retraite indépendant vs salarié : les chiffres qui font mal | Happy Retraite",
  description: "À revenu égal, un indépendant touche en moyenne 40% de moins qu'un salarié à la retraite. Voici pourquoi — et comment compenser.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Retraite indépendant vs salarié : les chiffres qui font mal",
  description: "À revenu égal, un indépendant touche en moyenne 40% de moins qu'un salarié à la retraite. Voici pourquoi — et comment compenser.",
  author: { "@type": "Organization", name: "Happy Retraite" },
  publisher: { "@type": "Organization", name: "Happy Retraite", url: "https://www.happyretraite.fr" },
  url: "https://www.happyretraite.fr/blog/retraite-independant-vs-salarie-comparaison",
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
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>6 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            Retraite indépendant vs salarié : les chiffres qui font mal
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            Même revenu, même durée de carrière — mais 40% d&apos;écart à la retraite. Voici la réalité des chiffres et, surtout, comment les changer.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>Le chiffre qui dérange : 40% d&apos;écart</H2>
          <P>C&apos;est la moyenne observée par la DREES. Un indépendant ayant gagné 40 000€ nets par an pendant 30 ans touchera environ 1 150€/mois de retraite totale. Un salarié ayant eu le même revenu net : environ 1 600-1 800€/mois. L&apos;écart ? Entre 400 et 650€/mois — soit 50 000 à 80 000€ sur 10 ans de retraite.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Ces chiffres sont des moyennes. L&apos;écart réel dépend du statut exact (SASU, EURL, micro...), de la régularité des revenus et des choix de rémunération vs dividendes.</p>
          </InfoBox>

          <H2>Pourquoi cet écart existe-t-il ?</H2>
          <H3>Pas de cotisation patronale</H3>
          <P>Le salarié bénéficie d&apos;une cotisation &quot;patronale&quot; de ~30% de son salaire brut, payée par l&apos;employeur. L&apos;indépendant paie l&apos;équivalent lui-même — mais à des taux souvent inférieurs et sur une base de calcul différente.</P>
          <H3>La base de calcul est différente</H3>
          <P>Pour le salarié, la retraite de base se calcule sur les 25 meilleures années de salaire brut. Pour l&apos;indépendant, c&apos;est sur le revenu net imposable — déjà après déduction des charges. Mécaniquement, la base est plus faible.</P>
          <H3>La retraite complémentaire est plus faible</H3>
          <P>Le salarié cotise à l&apos;AGIRC-ARRCO avec une forte contribution patronale. L&apos;indépendant à la SSI ou la CIPAV bénéficie d&apos;une complémentaire beaucoup plus limitée.</P>

          <H2>Comparaison côte à côte — mêmes revenus nets, 30 ans de carrière</H2>
          <P>Profil : 40 000€ de revenus nets pendant 30 ans. Salarié privé (régime général + AGIRC-ARRCO) : pension estimée ~1 650€/mois. Indépendant micro-entreprise (prestations services) : pension estimée ~900€/mois. Indépendant EURL (gérant majoritaire, SSI) : pension estimée ~1 050€/mois. Indépendant SASU (salaire 40 000€, pas de dividendes) : pension estimée ~1 600€/mois.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>La SASU avec une rémunération correcte est le statut indépendant qui se rapproche le plus du régime salarié — au prix de charges sociales plus élevées.</p>
          </GreenBox>

          <H2>Les pièges spécifiques aux indépendants</H2>
          <H3>Les années à faible revenu pèsent sur la moyenne</H3>
          <P>Les 5 premières années d&apos;une entreprise sont souvent marquées par des revenus faibles. Pour un indépendant avec 10 ans de carrière salariée puis 20 ans d&apos;indépendance, les 25 meilleures années peuvent inclure des années difficiles.</P>
          <H3>Les trimestres non validés en micro-entreprise</H3>
          <P>Avec moins de ~8 000€ de CA, certaines années de micro-entreprise ne valident aucun trimestre. Ces &quot;trous&quot; dans la carrière aggravent l&apos;écart.</P>

          <H2>4 stratégies pour réduire l&apos;écart</H2>
          <H3>1. Le PER : votre allié fiscal principal</H3>
          <P>Pour un indépendant à 30% de TMI, chaque 1 000€ versé sur un PER ne coûte réellement que 700€ après économie fiscale. Sur 20 ans à 500€/mois, capital constitué : ~200 000€ à 5% de rendement, soit ~830€/mois de rente pendant 20 ans.</P>
          <H3>2. Optimiser son statut juridique</H3>
          <P>Passer de micro-entreprise à EURL ou SASU peut augmenter significativement les droits retraite. La SASU avec salaire &quot;normal&quot; offre les meilleures cotisations — mais aussi les plus élevées.</P>
          <H3>3. Rachat de trimestres ciblé</H3>
          <P>Si vous avez des années incomplètes ou des études non rachetées, le rachat peut combler une partie de l&apos;écart. Particulièrement intéressant pour les indépendants à forte TMI.</P>
          <H3>4. L&apos;immobilier locatif comme complément</H3>
          <P>Un bien locatif générant 600€/mois de loyer net comble partiellement l&apos;écart de 600€/mois. En LMNP, la fiscalité sur les loyers est quasi-nulle pendant les premières années grâce à l&apos;amortissement.</P>

          <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "white", border: "1px solid #E8EDF5", borderRadius: "12px", display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Vous êtes en SASU ? Lisez notre analyse détaillée →{" "}
              <Link href="/blog/sasu-retraite-calcul" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>SASU et retraite : le calcul que personne ne fait</Link>
            </p>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Vous êtes en EURL ? Lisez notre guide spécifique →{" "}
              <Link href="/blog/retraite-eurl-optimiser-cotisations" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Retraite en EURL : comment optimiser ses cotisations</Link>
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
