import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Trimestres manquants à la retraite : toutes les solutions en 2026 | Happy Retraite",
  description: "Il vous manque des trimestres pour partir à taux plein ? Rachat, périodes assimilées, régularisation — toutes les solutions expliquées.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Trimestres manquants à la retraite : toutes les solutions en 2026",
  description: "Il vous manque des trimestres pour partir à taux plein ? Rachat, périodes assimilées, régularisation — toutes les solutions expliquées.",
  author: { "@type": "Organization", name: "Happy Retraite" },
  publisher: { "@type": "Organization", name: "Happy Retraite", url: "https://www.happyretraite.fr" },
  url: "https://www.happyretraite.fr/blog/trimestres-manquants-comment-les-recuperer",
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
            <Link href="/diagnostic" className="hidden sm:inline-block" style={{ background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
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
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Guide pratique</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>7 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            Trimestres manquants à la retraite : toutes les solutions en 2026
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            1 retraité sur 3 part avec une décote faute de trimestres suffisants. Pourtant, la plupart ont des solutions qu&apos;ils n&apos;ont pas explorées. Voici le guide complet.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>D&apos;abord : vérifiez votre relevé de carrière</H2>
          <P>Avant de chercher des solutions, assurez-vous que votre relevé est exact. Les erreurs sont plus fréquentes qu&apos;on ne le croit.</P>
          <H3>Comment télécharger votre RIS</H3>
          <P>Rendez-vous sur info-retraite.fr → &quot;Mon compte retraite&quot; → &quot;Mon relevé de carrière&quot;. Vous y trouverez l&apos;historique complet de vos trimestres validés, régime par régime.</P>
          <H3>Les erreurs les plus fréquentes</H3>
          <P>Jobs étudiants non déclarés ou mal intégrés — Périodes à l&apos;étranger (conventions bilatérales parfois non appliquées) — Erreurs de l&apos;ex-RSI pour les anciens indépendants — Congés maternité ou paternité mal comptabilisés — Périodes de chômage non rémunéré non reportées — Trimestres de service militaire oubliés.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Si vous constatez une erreur, contactez directement la caisse concernée (CARSAT, CIPAV, SSI...) avec vos justificatifs. La régularisation peut prendre 3 à 6 mois.</p>
          </InfoBox>

          <H2>Les trimestres &quot;gratuits&quot; souvent ignorés</H2>
          <H3>Le chômage indemnisé</H3>
          <P>Chaque période d&apos;allocation chômage (ARE) valide des trimestres : 50 jours indemnisés = 1 trimestre (dans la limite de 4 par an). Ces trimestres doivent apparaître sur votre RIS — s&apos;ils manquent, contactez Pôle Emploi.</P>
          <H3>L&apos;arrêt maladie longue durée</H3>
          <P>En arrêt maladie indemnisé par la Sécurité Sociale depuis plus de 60 jours consécutifs, vous validez des trimestres. 60 jours = 1 trimestre.</P>
          <H3>La maternité et le congé parental</H3>
          <P>Chaque trimestre civil comprenant au moins 90 jours de congé maternité compte comme un trimestre validé. Le congé parental valide aussi des trimestres dans certaines conditions.</P>
          <H3>Le service militaire</H3>
          <P>Souvent oublié par les générations nées avant 1980 : chaque période de service national obligatoire valide des trimestres. Ces périodes doivent être reportées sur votre RIS.</P>
          <H3>Les périodes de formation (AFPA, CPF...)</H3>
          <P>Certaines formations rémunérées ouvrent des droits à trimestres. Vérifiez auprès de votre OPCO ou de France Travail.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Récapitulatif des &quot;trimestres gratuits&quot; : Chômage indemnisé — Arrêt maladie (60 jours = 1 trimestre) — Congé maternité — Service militaire — Invalidité reconnue — Certaines périodes de formation.</p>
          </GreenBox>

          <H2>Trimestres spécifiques aux indépendants</H2>
          <H3>Les années à faible CA en micro-entreprise</H3>
          <P>Une année avec moins de 8 000-10 000€ de CA (selon l&apos;activité) ne valide que 1 à 3 trimestres. Ces trimestres partiels ne peuvent pas être &quot;rattrapés&quot; — mais les années suivantes avec un CA suffisant peuvent compenser.</P>
          <H3>Les erreurs fréquentes côté URSSAF</H3>
          <P>Des décalages de déclaration entre votre CA déclaré et les trimestres enregistrés dans votre compte retraite sont fréquents, notamment lors des changements de régime (passage de micro à réel, ou inversement).</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Vérifiez systématiquement la cohérence entre vos déclarations URSSAF et votre relevé de carrière sur info-retraite.fr. Signalez toute anomalie à votre SSI régionale.</p>
          </InfoBox>

          <H2>Le rachat de trimestres</H2>
          <P>Si après avoir récupéré tous les trimestres &quot;gratuits&quot; il vous en manque encore, le rachat est envisageable. Deux cas : années d&apos;études supérieures (jusqu&apos;à 12 trimestres) et années incomplètes.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Nous avons fait le calcul complet de rentabilité dans notre article dédié →{" "}
              <Link href="/blog/rachat-trimestres-retraite-rentable" style={{ color: "#0F6E56", textDecoration: "none", fontWeight: 600 }}>Rachat de trimestres : est-ce vraiment rentable ?</Link>
            </p>
          </GreenBox>

          <H2>Continuer à travailler vs partir avec décote : le vrai calcul</H2>
          <P>Imaginons qu&apos;il vous manque 4 trimestres pour le taux plein et que vous avez 64 ans. Option A — Partir maintenant avec décote : pension de 1 400€ × (1 - 4×0,625%) = 1 365€/mois. Option B — Travailler 1 an de plus : pension de 1 400€/mois + trimestres supplémentaires potentiels. Option C — Partir à 67 ans : taux plein automatique, quelle que soit la durée.</P>
          <P>Le bon choix dépend de votre état de santé, de votre situation professionnelle et de votre espérance de vie estimée.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Règle pratique : si la décote est inférieure à 5% et que vous avez un emploi peu contraignant, travailler 6-12 mois supplémentaires peut valoir le coup. Au-delà de 5% de décote, envisagez d&apos;autres options.</p>
          </InfoBox>
        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>service-public.fr</a> — Trimestres assimilés, périodes validées, règles de calcul</li>
            <li>→ <a href="https://www.info-retraite.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>info-retraite.fr</a> — Relevé de carrière, régularisation des anomalies</li>
            <li>→ <a href="https://www.lassuranceretraite.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>lassuranceretraite.fr</a> — Décote, surcote et calcul de la pension de base</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            En cas d&apos;anomalie sur votre relevé, contactez directement la caisse concernée (CARSAT, SSI, CIPAV...) avec vos justificatifs.
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
