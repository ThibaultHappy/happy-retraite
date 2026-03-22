import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Rachat de trimestres : est-ce vraiment rentable ? | Happy Retraite",
  description: "Rachat de trimestres retraite : coût réel, gain sur la pension, délai de rentabilité. On fait le calcul pour vous avant de décider.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rachat de trimestres : est-ce vraiment rentable ?",
  description: "Rachat de trimestres retraite : coût réel, gain sur la pension, délai de rentabilité. On fait le calcul pour vous avant de décider.",
  author: { "@type": "Organization", name: "Happy Retraite" },
  publisher: { "@type": "Organization", name: "Happy Retraite", url: "https://www.happyretraite.fr" },
  url: "https://www.happyretraite.fr/blog/rachat-trimestres-retraite-rentable",
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
            <Link href="/diagnostic" style={{ background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
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
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Optimisation</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>8 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            Rachat de trimestres : est-ce vraiment rentable ?
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            On peut acheter des trimestres manquants pour améliorer sa retraite — mais à des prix qui surprennent. Voici le calcul complet pour savoir si ça vaut vraiment le coup.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>Deux types de rachat, deux logiques différentes</H2>
          <H3>Le rachat d&apos;années d&apos;études</H3>
          <P>Vous pouvez racheter jusqu&apos;à 12 trimestres correspondant à vos années d&apos;études supérieures (à condition d&apos;avoir obtenu le diplôme). Ce rachat améliore à la fois le taux de pension ET potentiellement l&apos;âge de départ.</P>
          <H3>Le rachat d&apos;années incomplètes</H3>
          <P>Certaines années de votre carrière ont peut-être généré moins de 4 trimestres validés (faible revenu, activité partielle...). Vous pouvez les &quot;compléter&quot; pour atteindre 4 trimestres par an.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Le rachat d&apos;années incomplètes ne joue que sur le taux (pas sur l&apos;âge de départ), contrairement au rachat d&apos;études qui peut faire les deux.</p>
          </InfoBox>

          <H2>Combien ça coûte réellement ?</H2>
          <P>Le coût d&apos;un trimestre racheté dépend de deux facteurs : votre âge au moment du rachat et votre revenu annuel moyen des 3 dernières années.</P>
          <P>Barème simplifié pour un revenu de 40 000€ brut annuel : à 40 ans ≈ 1 800€/trimestre — à 45 ans ≈ 2 400€/trimestre — à 50 ans ≈ 3 200€/trimestre — à 55 ans ≈ 4 100€/trimestre</P>
          <P>Pour 4 trimestres rachetés à 45 ans avec 40 000€ de revenu : environ 9 600€. Ce montant est déductible de votre revenu imposable (économie fiscale de ~2 900€ à 30% TMI, ~3 900€ à 41%).</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Coût net après déduction fiscale (TMI 30%) : 9 600€ - 2 900€ = 6 700€ pour 4 trimestres. À TMI 41% : environ 5 600€ nets. Plus votre TMI est élevée, plus le rachat est fiscalement avantageux.</p>
          </GreenBox>

          <H2>Ce que ça rapporte</H2>
          <H3>L&apos;effet sur le montant de la pension</H3>
          <P>Chaque trimestre racheté augmente votre taux de pension. La formule : chaque trimestre manquant crée une décote de 0,625% sur votre pension de base. 4 trimestres rachetés = +2,5% de pension.</P>
          <P>Exemple concret : pension de base de 1 200€/mois. Sans les 4 trimestres : décote de 2,5% = 1 170€/mois (perte de 30€/mois). Avec les 4 trimestres rachetés : 1 200€/mois. Gain : 30€/mois.</P>
          <H3>L&apos;effet sur l&apos;âge de départ</H3>
          <P>Si le rachat vous permet d&apos;atteindre le taux plein, vous pouvez partir plus tôt. Chaque année de départ anticipé représente 12 mois × votre pension mensuelle.</P>
          <P>Si ces 4 trimestres vous permettent de partir 1 an plus tôt avec 1 500€/mois de pension totale : gain = 18 000€ la première année de retraite.</P>

          <H2>Le calcul de rentabilité : soyez honnête avec vous-même</H2>
          <H3>Cas 1 : le rachat n&apos;impacte que le montant (pas l&apos;âge)</H3>
          <P>Coût net : 6 700€ — Gain mensuel : 30€ — Délai de récupération : 6 700 / 30 = 223 mois = 18,6 ans. Alternative : ces 6 700€ investis dans un PER à 5% pendant 15 ans = ~13 900€, soit une rente mensuelle de ~58€/mois pendant 20 ans.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Dans ce cas précis, le PER est probablement plus rentable que le rachat. La règle générale : si le délai de récupération dépasse 12-15 ans, considérez des alternatives.</p>
          </InfoBox>
          <H3>Cas 2 : le rachat vous permet de partir plus tôt</H3>
          <P>Si partir 1 an plus tôt vaut 18 000€ de pension supplémentaire et que le rachat coûte 6 700€ nets, le retour sur investissement est immédiat et massif. Dans ce cas, le rachat est presque toujours rentable.</P>

          <H2>Pour qui le rachat est-il conseillé ?</H2>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Rachat probablement rentable si : il vous manque 1-4 trimestres pour le taux plein ET vous partez dans moins de 5 ans — OU si le rachat vous fait passer en carrière longue — OU si votre TMI est ≥ 41% (forte économie fiscale).</p>
          </GreenBox>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Rachat probablement moins rentable si : il vous manque plus de 8 trimestres — OU votre retraite est encore dans 15+ ans — OU vous avez une capacité d&apos;épargne pour un PER.</p>
          </InfoBox>

          <H2>Le cas particulier des indépendants et auto-entrepreneurs</H2>
          <P>Pour les micro-entrepreneurs avec des années à faible CA, le rachat d&apos;années incomplètes est souvent pertinent — surtout les premières années de lancement. Mais attention : le coût est calculé sur vos revenus actuels, pas sur ce que vous gagniez à l&apos;époque.</P>
          <P>Un indépendant qui rachète des trimestres de ses années d&apos;études à 50 ans avec 60 000€ de revenus paiera beaucoup plus cher que s&apos;il l&apos;avait fait à 35 ans avec 30 000€.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Conseil clé : si vous envisagez de racheter, faites-le le plus tôt possible. Le coût augmente significativement avec l&apos;âge.</p>
          </GreenBox>

          <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "white", border: "1px solid #E8EDF5", borderRadius: "12px" }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Vous avez identifié des trimestres manquants ? Découvrez toutes les solutions possibles →{" "}
              <Link href="/blog/trimestres-manquants-comment-les-recuperer" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Trimestres manquants : toutes les solutions en 2026</Link>
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
