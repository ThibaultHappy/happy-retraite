import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "PER : combien verser selon son âge ? Simulations chiffrées | Happy Retraite",
  description: "PER à 40, 50 et 55 ans : simulations chiffrées pour compenser une retraite insuffisante. Calculs avec déduction fiscale incluse.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/per-combien-verser-selon-age" },
  openGraph: {
    title: "PER : combien verser selon son âge ? Simulations chiffrées | Happy Retraite",
    description: "PER à 40, 50 et 55 ans : simulations chiffrées pour compenser une retraite insuffisante. Calculs avec déduction fiscale incluse.",
    url: "https://www.happyretraite.fr/blog/per-combien-verser-selon-age",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "PER : combien verser selon son âge ? Simulations chiffrées | Happy Retraite",
    description: "PER à 40, 50 et 55 ans : simulations chiffrées pour compenser une retraite insuffisante. Calculs avec déduction fiscale incluse.",
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
            <Link href="/diagnostic" className="hidden sm:inline-block" style={{ background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <ArticleJsonLd
          headline="PER : combien verser selon son âge ? Simulations chiffrées"
          description="PER à 40, 50 et 55 ans : simulations chiffrées pour compenser une retraite insuffisante. Calculs avec déduction fiscale incluse."
          url="https://www.happyretraite.fr/blog/per-combien-verser-selon-age"
          datePublished="2026-02-10"
        />

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Épargne retraite</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>7 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            PER : combien verser selon son âge pour bien préparer sa retraite ?
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            Le PER est l&apos;outil le plus puissant pour préparer sa retraite en France — mais combien faut-il vraiment verser selon son âge et sa situation ? On fait les calculs.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>Le PER en 3 points essentiels</H2>
          <P>1. Les versements volontaires sont déductibles de votre revenu imposable. 2. Le capital est bloqué jusqu&apos;à la retraite (sauf accidents de vie). 3. À la sortie, vous choisissez entre capital ou rente.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Plafond de déduction 2026 : 10% de vos revenus professionnels nets de l&apos;année N-1, dans la limite de 35 194€ (plafond annuel de la sécurité sociale × 10%). Les TNS bénéficient d&apos;un plafond majoré (~74 000€ dans certains cas).</p>
          </InfoBox>

          <H2>L&apos;avantage fiscal concret selon votre TMI</H2>
          <P>TMI 30% : 1 000€ versés sur un PER ne vous coûtent réellement que 700€ — économie de 300€. TMI 41% : 1 000€ versés coûtent 590€ — économie de 410€. TMI 45% : 1 000€ versés coûtent 550€ — économie de 450€.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Plus votre TMI est élevée, plus le PER est avantageux. C&apos;est pourquoi les TNS à hauts revenus doivent en priorité maximiser leur PER avant tout autre placement.</p>
          </GreenBox>

          <H2>Simulation selon l&apos;âge de départ</H2>
          <H3>Vous avez 40 ans (24 ans avant la retraite)</H3>
          <P>Versement de 300€/mois avec 5% de rendement annuel moyen → Capital à 64 ans : ~163 000€. Rente mensuelle sur 20 ans : ~680€/mois. Coût réel (TMI 30%) : 210€/mois net.</P>
          <H3>Vous avez 50 ans (14 ans avant la retraite)</H3>
          <P>Pour obtenir le même capital de 163 000€ : il faut verser ~630€/mois. Coût réel (TMI 30%) : 441€/mois. Pour un objectif plus modeste de 80 000€ : ~300€/mois.</P>
          <H3>Vous avez 55 ans (9 ans avant la retraite)</H3>
          <P>Pour 80 000€ de capital : ~590€/mois. L&apos;horizon est court, mais la déduction fiscale reste très intéressante, surtout si vous êtes dans vos meilleures années de revenus.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Tableau récapitulatif objectif 100 000€ de capital : à 40 ans → 184€/mois (TMI 30% → 129€ nets) — à 50 ans → 390€/mois (TMI 30% → 273€ nets) — à 55 ans → 730€/mois (TMI 30% → 511€ nets). Plus on attend, plus l&apos;effort mensuel est important.</p>
          </GreenBox>

          <H2>PER vs assurance-vie : quand choisir quoi ?</H2>
          <P>Le PER est préférable si : votre TMI actuelle est ≥ 30% ET vous n&apos;aurez pas besoin de ces fonds avant la retraite ET votre TMI à la retraite sera inférieure (probable si vos revenus baissent).</P>
          <P>L&apos;assurance-vie est préférable si : vous pouvez avoir besoin de liquidité avant la retraite — OU si votre TMI actuelle est faible (≤ 11%) — OU si vous souhaitez transmettre un capital avec une fiscalité successorale avantageuse.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>La stratégie optimale pour beaucoup d&apos;indépendants : maximiser le PER d&apos;abord (déduction fiscale), puis compléter avec l&apos;assurance-vie en ETF. Ne choisissez pas l&apos;un ou l&apos;autre — combinez les deux.</p>
          </InfoBox>

          <H2>Les erreurs fréquentes des indépendants avec le PER</H2>
          <H3>Erreur 1 : ouvrir un PER sans vérifier ses trimestres</H3>
          <P>Un PER ne compense pas des trimestres manquants. Si vous partez avec décote, votre pension de base sera plus faible — et le PER devra combler plus. Vérifiez d&apos;abord votre situation de trimestres.</P>
          <H3>Erreur 2 : tout mettre en fonds euros à 40 ans</H3>
          <P>À 40 ans, vous avez 24 ans devant vous. Un portefeuille 80% ETF / 20% fonds euros est plus adapté qu&apos;un portefeuille 100% fonds euros à 2,5% de rendement.</P>
          <H3>Erreur 3 : ne pas utiliser les années de report</H3>
          <P>Le plafond PER non utilisé se reporte sur 3 ans. Si vous n&apos;avez pas versé depuis 3 ans, vous pouvez &quot;rattraper&quot; jusqu&apos;à 4 années de plafond en un seul versement — idéal pour une année exceptionnellement bonne.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Comment trouver votre plafond disponible : avis d&apos;imposition → case 6QS &quot;Plafond retraite non utilisé&quot;. C&apos;est le montant que vous pouvez déduire en plus du plafond de l&apos;année courante.</p>
          </GreenBox>

          <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "white", border: "1px solid #E8EDF5", borderRadius: "12px", display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Êtes-vous indépendant ? Lisez aussi →{" "}
              <Link href="/blog/retraite-independant-vs-salarie-comparaison" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Retraite indépendant vs salarié : les chiffres qui font mal</Link>
            </p>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Des trimestres manquants ? Toutes les solutions →{" "}
              <Link href="/blog/trimestres-manquants-comment-les-recuperer" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Trimestres manquants : toutes les solutions en 2026</Link>
            </p>
          </div>
        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.economie.gouv.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>economie.gouv.fr</a> — Plan d&apos;Épargne Retraite (PER), règles et plafonds</li>
            <li>→ <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>service-public.fr</a> — Déductibilité des versements PER, cas des TNS</li>
            <li>→ <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>impots.gouv.fr</a> — Plafond épargne retraite (case 6QS), fiscalité à la sortie</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            Plafond PER 2026 : 10% des revenus nets N-1 dans la limite de 35 194€. Les TNS bénéficient d&apos;un plafond majoré — vérifiez sur impots.gouv.fr.
          </p>
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
