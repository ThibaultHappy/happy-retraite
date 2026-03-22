import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Retraite progressive pour les fonctionnaires : mode d'emploi 2026 | Happy Retraite",
  description: "Retraite progressive dans la fonction publique : conditions, calcul, avantages et pièges. Tout ce qu'il faut savoir avant de faire la demande.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Retraite progressive pour les fonctionnaires : mode d'emploi 2026",
  description: "Retraite progressive dans la fonction publique : conditions, calcul, avantages et pièges. Tout ce qu'il faut savoir avant de faire la demande.",
  author: { "@type": "Organization", name: "Happy Retraite" },
  publisher: { "@type": "Organization", name: "Happy Retraite", url: "https://www.happyretraite.fr" },
  url: "https://www.happyretraite.fr/blog/fonctionnaire-retraite-progressive",
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
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Fonctionnaire</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>6 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            Retraite progressive pour les fonctionnaires : mode d&apos;emploi 2026
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            Depuis la réforme 2023, les fonctionnaires peuvent accéder à la retraite progressive — un dispositif qui permet de travailler à temps partiel tout en touchant une partie de sa pension. Mode d&apos;emploi complet.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>La retraite progressive : principe et fonctionnement</H2>
          <P>La retraite progressive permet de passer à temps partiel (entre 50% et 90% de votre temps de travail) tout en percevant une fraction de votre pension calculée provisoirement. Vous continuez à accumuler des droits sur la période travaillée, jusqu&apos;à votre départ définitif à la retraite.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Ce dispositif existait déjà pour les salariés du privé depuis les années 1990. Il a été étendu aux fonctionnaires par la réforme de 2023 (loi du 14 avril 2023), avec des conditions spécifiques à la fonction publique.</p>
          </InfoBox>

          <H2>Les conditions d&apos;accès pour les fonctionnaires</H2>
          <H3>Conditions d&apos;âge</H3>
          <P>Vous devez avoir au minimum 2 ans de moins que l&apos;âge légal de départ à la retraite. En 2026, avec un âge légal de 64 ans : vous pouvez demander la retraite progressive à partir de 62 ans.</P>
          <H3>Conditions de durée d&apos;assurance</H3>
          <P>Vous devez justifier d&apos;au moins 150 trimestres (37,5 ans) de durée d&apos;assurance tous régimes confondus. Cette condition inclut les trimestres de service actif, les trimestres &quot;cotisés&quot; et certains trimestres assimilés.</P>
          <H3>L&apos;accord de l&apos;employeur public</H3>
          <P>C&apos;est le point le plus délicat. Contrairement au secteur privé où l&apos;employeur ne peut refuser que dans des cas limités, dans la fonction publique, l&apos;accord de l&apos;administration est nécessaire et peut être refusé en cas de nécessités de service.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Conseil pratique : commencez les démarches au moins 12 à 18 mois avant la date souhaitée. Un refus peut être contesté, mais la procédure est longue. Anticipez.</p>
          </GreenBox>

          <H2>Le calcul de la pension provisoire</H2>
          <P>La pension provisoire est calculée ainsi : Pension provisoire = (Pension calculée normalement à la date de demande) × (1 - quotité de travail). Exemple : fonctionnaire à 62 ans, 30 ans de service, traitement indiciaire de 3 000€/mois. Pension calculée normalement : 3 000 × 75% × (120/167) = ~1 617€/mois (taux plein non atteint → décote). Passage à 60% du temps de travail → quotité = 60%. Pension provisoire = 1 617 × (1 - 0,60) = ~647€/mois. Rémunération à 60% = 3 000 × 60% = 1 800€/mois. Total : 647 + 1 800 = 2 447€/mois (vs 3 000€ à temps plein).</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>La pension provisoire n&apos;est pas définitive. Elle est recalculée lors de la liquidation définitive de votre retraite, en tenant compte des droits supplémentaires accumulés pendant la période de retraite progressive.</p>
          </InfoBox>

          <H2>Avantages et inconvénients réels</H2>
          <H3>Les avantages</H3>
          <P>Transition douce vers la retraite — moins de choc psychologique et physique. Maintien d&apos;une activité partielle et d&apos;un lien social. Accumulation de droits supplémentaires pendant la période (meilleure pension définitive). Souplesse possible selon l&apos;accord avec l&apos;employeur (télétravail, jours choisis...).</P>
          <H3>Les inconvénients</H3>
          <P>Accord de l&apos;administration pas garanti — certains corps ou services refusent systématiquement. Calcul complexe de la pension provisoire. Possible impact sur la retraite complémentaire RAFP (Retraite Additionnelle de la Fonction Publique). Droits au chômage absents si fin de période de retraite progressive avant liquidation définitive.</P>

          <H2>Cas particulier : fonctionnaire avec carrière mixte public/privé</H2>
          <P>Si vous avez eu une carrière mixte (salarié du privé puis fonctionnaire, ou inversement), les conditions de la retraite progressive s&apos;apprécient au regard de chaque régime. Vous pouvez bénéficier du dispositif si vous remplissez les conditions du régime dans lequel vous êtes actuellement affilié.</P>
          <P>Attention : la pension provisoire ne sera calculée que sur la base du régime de la fonction publique. La partie retraite du régime général sera liquidée au départ définitif.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Les carrières mixtes sont parmi les situations les plus complexes à simuler. L&apos;estimation fournie par info-retraite.fr peut être insuffisamment précise. Sollicitez votre CARSAT et votre administration publique pour une simulation conjointe.</p>
          </InfoBox>

          <H2>Comment faire la demande</H2>
          <P>1. Simulez votre situation sur info-retraite.fr pour vérifier que vous remplissez les conditions. 2. Contactez votre DRH ou service des ressources humaines pour exprimer votre souhait (dès 12-18 mois avant). 3. Déposez une demande officielle auprès de votre service RH (formulaire disponible sur votre espace agent). 4. Attendez la réponse de l&apos;administration (délai légal de réponse : 2 mois). 5. En cas d&apos;accord, déposez simultanément votre dossier auprès de votre caisse de retraite.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Astuce : si votre demande est refusée pour &quot;nécessités de service&quot;, vous pouvez contester devant la commission administrative paritaire (CAP) puis, si nécessaire, devant le tribunal administratif. Le refus doit être motivé.</p>
          </GreenBox>
        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>service-public.fr</a> — Retraite progressive fonctionnaire, conditions et procédure</li>
            <li>→ <a href="https://www.info-retraite.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>info-retraite.fr</a> — Simulation retraite fonctionnaire, durée d&apos;assurance</li>
            <li>→ <a href="https://www.fonction-publique.gouv.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>fonction-publique.gouv.fr</a> — Loi du 14 avril 2023, extension de la retraite progressive aux fonctionnaires</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            Basé sur la réforme des retraites de 2023 (loi n°2023-270). Vérifiez les conditions spécifiques à votre corps sur service-public.fr.
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
