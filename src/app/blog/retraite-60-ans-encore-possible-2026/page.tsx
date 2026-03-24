import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Retraite à 60 ans : encore possible en 2026 ? | Happy Retraite",
  description: "Carrière longue, pénibilité, handicap — les dispositifs qui permettent de partir avant 64 ans en 2026. Conditions et démarches.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/retraite-60-ans-encore-possible-2026" },
  openGraph: {
    title: "Retraite à 60 ans : encore possible en 2026 ? | Happy Retraite",
    description: "Carrière longue, pénibilité, handicap — les dispositifs qui permettent de partir avant 64 ans en 2026. Conditions et démarches.",
    url: "https://www.happyretraite.fr/blog/retraite-60-ans-encore-possible-2026",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retraite à 60 ans : encore possible en 2026 ? | Happy Retraite",
    description: "Carrière longue, pénibilité, handicap — les dispositifs qui permettent de partir avant 64 ans en 2026. Conditions et démarches.",
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
          headline="Retraite à 60 ans : encore possible en 2026 ?"
          description="Carrière longue, pénibilité, handicap — les dispositifs qui permettent de partir avant 64 ans en 2026. Conditions et démarches."
          url="https://www.happyretraite.fr/blog/retraite-60-ans-encore-possible-2026"
          datePublished="2026-01-20"
        />

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Départ anticipé</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>6 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            Retraite à 60 ans : encore possible en 2026 ?
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            Depuis la réforme des retraites de 2023, l&apos;âge légal est passé à 64 ans. Pourtant, des milliers de Français partent encore avant — certains dès 60 ans. Voici les dispositifs qui le permettent encore.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>La réforme 2023 : ce qui a vraiment changé</H2>
          <P>La loi du 14 avril 2023 a relevé l&apos;âge légal de départ de 62 à 64 ans, avec une montée en charge progressive. Pour les personnes nées après le 1er janvier 1968, l&apos;âge légal est désormais 64 ans. Mais l&apos;âge légal n&apos;est pas l&apos;âge unique — plusieurs dispositifs permettent de partir avant.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>L&apos;âge légal est l&apos;âge minimum auquel vous pouvez demander votre retraite sans condition. L&apos;âge du taux plein automatique est toujours 67 ans (sans décote, même sans tous vos trimestres).</p>
          </InfoBox>

          <H2>La carrière longue : le principal dispositif</H2>
          <H3>Principe</H3>
          <P>Si vous avez commencé à travailler tôt, vous pouvez partir avant l&apos;âge légal. Pour une retraite à 60 ans, il faut avoir commencé à travailler avant 16 ans ET avoir validé le nombre de trimestres requis (entre 168 et 176 selon année de naissance).</P>
          <H3>Tableau des conditions 2026</H3>
          <P>Pour partir à 60 ans : début de carrière avant 16 ans + 176 trimestres cotisés (dont certains avant 20 ans). Pour partir à 62 ans : début de carrière avant 18 ans + 172 trimestres cotisés. Pour partir à 63 ans : début de carrière avant 20 ans + conditions allégées.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Important : &quot;trimestres cotisés&quot; ≠ &quot;trimestres validés&quot;. Le chômage, la maladie longue durée et la maternité sont validés mais pas toujours cotisés. Vérifiez la distinction sur votre relevé de carrière.</p>
          </GreenBox>

          <H2>Les autres dispositifs de départ anticipé</H2>
          <H3>Inaptitude au travail</H3>
          <P>Si vous êtes reconnu inapte à 50% ou plus, vous pouvez partir dès 62 ans au taux plein, quel que soit votre nombre de trimestres. La reconnaissance d&apos;inaptitude se fait par votre médecin-conseil de l&apos;Assurance Maladie.</P>
          <H3>Handicap</H3>
          <P>Avec un taux d&apos;incapacité permanente ≥ 50% reconnu pendant au moins un trimestre, départ possible dès 55 ans, voire 50 ans avec 25 ans de carrière en situation de handicap.</P>
          <H3>Pénibilité (Compte Professionnel de Prévention)</H3>
          <P>Le C2P (ex-compte pénibilité) permet d&apos;accumuler des points si vous êtes exposé à des facteurs de risques (travail de nuit, températures extrêmes, bruit...). 10 points = 1 trimestre de départ anticipé ou 1 trimestre de formation.</P>
          <H3>Amiante (ACAATA)</H3>
          <P>Pour les travailleurs exposés à l&apos;amiante, le dispositif ACAATA permet un départ à 50 ans minimum, avec une allocation de cessation anticipée.</P>

          <H2>Cas particulier des indépendants et micro-entrepreneurs</H2>
          <P>La carrière longue s&apos;applique aussi aux indépendants — mais avec un piège majeur. Les années de micro-entreprise avec un CA insuffisant pour valider des trimestres &quot;cotisés&quot; ne comptent pas pour ce dispositif.</P>
          <P>Exemple : vous avez lancé votre micro-entreprise à 19 ans, mais avec 5 000€ de CA la première année. Cette année ne valide aucun trimestre cotisé — vous ne pouvez donc pas l&apos;utiliser pour justifier un début de carrière à 19 ans au sens de la carrière longue.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Pour les indépendants, il est crucial de distinguer &quot;trimestres validés&quot; (cotisés selon le droit commun) et &quot;trimestres cotisés&quot; (avec cotisations effectives minimum). La carrière longue ne retient que ces derniers.</p>
          </InfoBox>

          <H2>Comment vérifier votre éligibilité</H2>
          <P>1. Téléchargez votre Relevé Individuel de Situation sur info-retraite.fr. 2. Vérifiez la colonne &quot;trimestres cotisés&quot; pour chaque régime. 3. Identifiez votre premier trimestre cotisé. 4. Utilisez le simulateur de l&apos;Assurance Retraite pour calculer votre âge de départ minimal.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Conseil : faites cette vérification avant 58 ans. Si vous êtes proche de l&apos;éligibilité, vous avez encore le temps de racheter des trimestres manquants.</p>
          </GreenBox>

          <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "white", border: "1px solid #E8EDF5", borderRadius: "12px", display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Vous avez des trimestres manquants ? Lisez notre guide sur toutes les solutions disponibles →{" "}
              <Link href="/blog/trimestres-manquants-comment-les-recuperer" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Trimestres manquants : toutes les solutions en 2026</Link>
            </p>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Rachat de trimestres : est-ce rentable ? →{" "}
              <Link href="/blog/rachat-trimestres-retraite-rentable" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Rachat de trimestres : est-ce vraiment rentable ?</Link>
            </p>
          </div>
        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>service-public.fr</a> — Réforme retraites 2023, dispositifs de départ anticipé</li>
            <li>→ <a href="https://www.lassuranceretraite.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>lassuranceretraite.fr</a> — Carrière longue, conditions et simulation</li>
            <li>→ <a href="https://www.info-retraite.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>info-retraite.fr</a> — Relevé individuel de situation, simulateur retraite</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            Les conditions d&apos;éligibilité évoluent avec chaque génération. Vérifiez votre situation sur lassuranceretraite.fr ou info-retraite.fr.
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
