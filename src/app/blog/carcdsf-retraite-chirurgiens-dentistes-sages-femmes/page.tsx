import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "CARCDSF retraite : le guide pour chirurgiens-dentistes et sages-femmes libérales",
  description:
    "Retraite CARCDSF pour chirurgiens-dentistes et sages-femmes : cotisations 2026, calcul de la pension, ASV, optimisation. Le guide complet.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "CARCDSF retraite : le guide pour chirurgiens-dentistes et sages-femmes libérales",
  description:
    "Retraite CARCDSF pour chirurgiens-dentistes et sages-femmes : cotisations 2026, calcul de la pension, ASV, optimisation. Le guide complet.",
  author: { "@type": "Organization", name: "Happy Retraite" },
  publisher: {
    "@type": "Organization",
    name: "Happy Retraite",
    url: "https://www.happyretraite.fr",
  },
  url: "https://www.happyretraite.fr/blog/carcdsf-retraite-chirurgiens-dentistes-sages-femmes",
  datePublished: "2026-03-01",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: PLAYFAIR, fontSize: "28px", fontWeight: 700, color: "#0F1F3D", marginTop: "48px", marginBottom: "16px" }}>
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#0F1F3D", marginTop: "32px", marginBottom: "12px" }}>
      {children}
    </h3>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: "16px", lineHeight: 1.8 }}>{children}</p>;
}
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#F0F4FF", borderLeft: "4px solid #2D4A7A", borderRadius: "0 8px 8px 0", padding: "16px 20px", margin: "24px 0", fontSize: "14px", color: "#374151", lineHeight: 1.7 }}>
      {children}
    </div>
  );
}
function GreenBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#E8F5EF", borderLeft: "4px solid #1D9E75", borderRadius: "0 8px 8px 0", padding: "16px 20px", margin: "24px 0", fontSize: "14px", color: "#374151", lineHeight: 1.7 }}>
      {children}
    </div>
  );
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
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>
              Professions libérales
            </span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>7 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            CARCDSF retraite : le guide pour chirurgiens-dentistes et sages-femmes libérales
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            Les chirurgiens-dentistes ont souvent des revenus parmi les plus élevés des libéraux — et pourtant une retraite qui déçoit. Les sages-femmes libérales, elles, naviguent entre deux régimes sans toujours savoir ce qu'elles accumulent. Voici le guide qu'il fallait.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>La CARCDSF : une caisse, deux professions très différentes</H2>
          <P>
            La CARCDSF (Caisse Autonome de Retraite et de Prévoyance des Chirurgiens-Dentistes et des Sages-Femmes) gère la retraite complémentaire de deux professions qui n'ont en commun que leur caisse de retraite. D'un côté, ~47 000 chirurgiens-dentistes libéraux avec des BNC souvent supérieurs à 100 000€. De l'autre, ~6 000 sages-femmes libérales avec des revenus beaucoup plus modestes et, fréquemment, un double statut libéral/hospitalier.
          </P>
          <InfoBox>
            La CARCDSF ne gère que la retraite complémentaire. La retraite de base relève de la CNAVPL (Caisse Nationale d'Assurance Vieillesse des Professions Libérales), commune à toutes les professions libérales non réglementées par leur propre caisse de base.
          </InfoBox>

          <H2>Structure complète de la retraite CARCDSF</H2>

          <H3>Retraite de base — CNAVPL</H3>
          <P>
            Identique pour toutes les professions libérales affiliées à la CNAVPL : régime par points, cotisation sur les revenus BNC, valeur du point 2026 ≈ 0,614€/an. Ce régime de base représente généralement 15 à 25% de la pension totale.
          </P>

          <H3>Retraite complémentaire — CARCDSF</H3>
          <P>
            La section professionnelle CARCDSF gère un régime complémentaire par points, avec des taux de cotisation et des valeurs de points distincts pour les dentistes et les sages-femmes. En 2026, la valeur du point complémentaire CARCDSF est d'environ 3,12€/an.
          </P>

          <H3>ASV — Avantage Social Vieillesse</H3>
          <P>
            Comme les médecins et les auxiliaires médicaux, les chirurgiens-dentistes et sages-femmes conventionnés bénéficient de l'ASV. La CPAM prend en charge une partie significative des cotisations — ce qui en fait l'un des avantages les plus rentables du statut libéral conventionné.
          </P>

          <H3>Régime invalidité-décès</H3>
          <P>
            Cotisation forfaitaire couvrant l'invalidité permanente totale et le capital décès. Distincte de toute prévoyance privée.
          </P>

          <H2>Focus chirurgiens-dentistes : les chiffres qui surprennent</H2>

          <H3>Des revenus élevés, une retraite décevante</H3>
          <P>
            C'est le paradoxe que beaucoup de dentistes découvrent trop tard. Un chirurgien-dentiste à 150 000€ de BNC avec 30 ans de carrière touche en retraite environ 2 400-2 800€/mois toutes sources confondues. À la même période, il gagnait ~10 000€/mois nets. Le taux de remplacement est donc d'environ 25-28% — l'un des plus faibles de toutes les professions.
          </P>
          <InfoBox>
            Pourquoi ce taux si faible ? Les cotisations retraite sont plafonnées (au-delà d'un certain niveau de BNC, les revenus supplémentaires ne génèrent plus de droits proportionnels). Un dentiste à 300 000€ de BNC cotise davantage qu'à 150 000€ — mais pas deux fois plus.
          </InfoBox>

          <H3>Cotisations 2026 pour un dentiste à 120 000€ BNC</H3>
          <P>
            Retraite de base CNAVPL : ~9 400€/an — Retraite complémentaire CARCDSF : ~8 800€/an — ASV (part dentiste) : ~2 600€/an — Invalidité-décès : ~1 900€/an — <strong>Total retraite : ~22 700€/an</strong> soit ~19% du BNC.
          </P>
          <GreenBox>
            <strong>Pension estimée après 30 ans à 120 000€ BNC :</strong> base CNAVPL ~280€/mois + complémentaire CARCDSF ~1 050€/mois + ASV ~720€/mois = <strong>~2 050€/mois brut</strong>. Pour un revenu habituel de ~8 000€ nets, c'est un choc.
          </GreenBox>

          <H3>Le piège de l'installation tardive</H3>
          <P>
            Les études dentaires durent 6 ans minimum (+ éventuellement spécialité). Un chirurgien-dentiste s'installe souvent entre 26 et 30 ans. Avec un départ à 64 ans, la carrière libérale est de 34 à 38 ans maximum — moins longue que pour un salarié qui commence à 22 ans.
          </P>
          <P>
            Chaque année d'installation tardive est une année de moins de points CARCDSF et d'ASV. Le rachat des années d'études (jusqu'à 12 trimestres) est donc particulièrement pertinent pour les dentistes.
          </P>

          <H3>L'ASV dentiste : conditions et montant</H3>
          <P>
            L'ASV est réservé aux dentistes conventionnés (secteurs 1 et 2 avec CCAM). La CPAM prend en charge environ 60% des cotisations ASV. Pour 30 ans de conventionnement complet, un dentiste accumule environ 4 800 points ASV. Pension ASV estimée : 4 800 × valeur du point ≈ <strong>700-750€/mois</strong>.
          </P>

          <H2>Focus sages-femmes libérales : le défi du double statut</H2>

          <H3>La réalité du terrain : peu exercent à 100% en libéral</H3>
          <P>
            La grande majorité des sages-femmes libérales combinent une activité libérale avec un contrat hospitalier (CDI ou CDD). Ce double statut est courant — mais il génère une complexité retraite que beaucoup n'anticipent pas.
          </P>

          <H3>Comment se calcule la retraite d'une sage-femme polypensionnée</H3>
          <P>
            Prenons Sophie, sage-femme, 50% hospitalière (salarié) / 50% libérale, pendant 30 ans. Côté salarié (régime général + CNRACL si hospitalière publique) : droits calculés sur le salaire à 50% pendant 30 ans. Côté libéral (CNAVPL + CARCDSF + ASV partiel) : droits calculés sur les BNC de l'activité libérale pendant 30 ans. Les deux pensions s'additionnent à la liquidation — mais aucune des deux n'est complète.
          </P>
          <InfoBox>
            Piège fréquent : la sage-femme hospitalière publique cotise à la CNRACL (Caisse Nationale de Retraites des Agents des Collectivités Locales), pas au régime général. La CNRACL a ses propres règles de calcul (dernier traitement indiciaire × 75% × durée/durée requise) — souvent plus favorables que le régime général pour une carrière complète. Vérifiez votre affiliation exacte.
          </InfoBox>

          <H3>ASV sage-femme : les différences avec les médecins</H3>
          <P>
            Les sages-femmes libérales conventionnées bénéficient également de l'ASV, mais avec une prise en charge CPAM différente de celle des médecins. Le montant des cotisations et la valeur des points ASV sage-femme sont distincts de ceux des médecins ou des dentistes.
          </P>
          <P>
            Pour une sage-femme 50% libérale pendant 30 ans, la pension ASV est proportionnelle à l'activité libérale réelle : environ 350-450€/mois. Cela s'additionne à la pension hospitalière.
          </P>

          <H3>Exemple complet : sage-femme 50/50 pendant 30 ans</H3>
          <P>
            Hypothèse : 30 ans à 50% hospitalier public (traitement 2 500€/mois) + 50% libéral (BNC ~35 000€/an). Pension hospitalière CNRACL estimée : ~2 500 × 75% × (demi-carrière/durée requise) ≈ <strong>800-1 000€/mois</strong>. Pension libérale (CNAVPL + CARCDSF + ASV) ≈ <strong>600-750€/mois</strong>. <strong>Total estimé : 1 400-1 750€/mois</strong>. Soit un taux de remplacement correct, à condition que les deux parties de carrière soient bien documentées.
          </P>
          <GreenBox>
            Conseil prioritaire pour les sages-femmes polypensionnées : vérifiez sur info-retraite.fr que CHAQUE régime (CNRACL, CNAVPL, CARCDSF) apparaît correctement. Des oublis sont fréquents lors des changements de statut. Une vérification annuelle prend 10 minutes et peut éviter des pertes de droits.
          </GreenBox>

          <H2>Comparatif des cotisations : dentiste vs sage-femme</H2>
          <P>
            Pour un dentiste à 120 000€ BNC : cotisations retraite totales ~22 700€/an (19% du BNC). Pour une sage-femme à 50 000€ BNC : cotisations retraite totales ~9 200€/an (18% du BNC). Les taux sont similaires en pourcentage — mais les montants absolus et les pensions résultantes sont très différents.
          </P>
          <InfoBox>
            La revalorisation du PASS 2026 (+3% à <strong>48 060€</strong>, source : URSSAF, urssaf.fr) entraîne mécaniquement une légère hausse des cotisations pour les deux professions. Les droits générés augmentent en proportion. Vérifiez sur carcdsf.fr pour les montants définitifs.
          </InfoBox>

          <H2>Les pièges fréquents</H2>

          <H3>Les années de remplacement avant installation</H3>
          <P>
            Comme pour les médecins, les années de remplacement dentaire ou de remplacement sage-femme ont un statut ambigu. Un remplaçant déclare ses honoraires en BNC et cotise en libéral — mais les cotisations CARCDSF ne démarrent qu'à partir d'un certain seuil de revenus. Les années de remplacement à faible revenu peuvent ne valider que peu de points complémentaires.
          </P>

          <H3>Erreurs fréquentes dans le relevé CARCDSF</H3>
          <P>
            Les changements de cabinet (associé, exercice mixte salarié/libéral), les congés maternité en libéral, les interruptions d'activité — tous ces événements peuvent générer des erreurs d'enregistrement. La CARCDSF peut être contactée directement pour régularisation : carcdsf.fr.
          </P>

          <H3>Le rachat des années d'études</H3>
          <P>
            Les 6 ans d'études odontologiques ou les études de sage-femme (3-4 ans) sont rachetables, jusqu'à 12 trimestres maximum. Pour un dentiste à 45% de TMI, le coût net du rachat après déduction fiscale est très réduit. Ce rachat est particulièrement pertinent si vous êtes à quelques trimestres du taux plein ou d'un départ anticipé.
          </P>

          <H2>Optimiser sa retraite CARCDSF</H2>

          <H3>PER TNS : priorité absolue pour les dentistes à hauts revenus</H3>
          <P>
            Un dentiste à 200 000€ de BNC et 45% de TMI peut déduire jusqu'à ~40 000€/an sur un PER. Pour 1 000€ versés, l'économie fiscale est de 450€ — le coût réel est de 550€. Sur 25 ans avec 2 000€/mois et 5% de rendement, le capital constitué dépasse 1 100 000€ — soit une rente de ~4 600€/mois pendant 20 ans. Ajoutée à la pension CARCDSF (~2 000-2 500€), le revenu retraite devient ~6 600€/mois.
          </P>

          <H3>Retraite progressive : possible depuis 2023</H3>
          <P>
            Les professionnels libéraux peuvent désormais accéder à la retraite progressive (réforme 2023). Pour un dentiste de 62 ans qui souhaite réduire son activité, ce dispositif permet de percevoir une fraction de pension tout en continuant à exercer et à cotiser. Les conditions sont similaires à celles du secteur privé.
          </P>

          <H3>Cumul emploi-retraite</H3>
          <P>
            Après liquidation de la retraite, il est possible de continuer à exercer en libéral et de percevoir des honoraires, tout en touchant sa pension. Les revenus du cumul emploi-retraite génèrent des points de retraite supplémentaires (droits rechargés) depuis 2023. Une option intéressante pour les dentistes ou sages-femmes souhaitant une sortie progressive d'activité.
          </P>
          <GreenBox>
            Ressources officielles : carcdsf.fr pour votre simulation personnalisée — info-retraite.fr pour vérifier l'intégralité de vos droits multi-régimes — carmf.fr pour les médecins libéraux.
          </GreenBox>

        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.carcdsf.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>carcdsf.fr</a> — Cotisations, valeur du point, ASV chirurgiens-dentistes et sages-femmes</li>
            <li>→ <a href="https://www.cnavpl.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>cnavpl.fr</a> — Retraite de base des professions libérales</li>
            <li>→ <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>service-public.fr</a> — Règles générales retraite, retraite progressive, rachat de trimestres</li>
            <li>→ <a href="https://www.info-retraite.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>info-retraite.fr</a> — Relevé de carrière, vérification des droits multi-régimes (CNRACL, CNAVPL, CARCDSF)</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            Basé sur le PASS 2026 (48 060€) — les montants exacts sont susceptibles d'évoluer. Vérifiez sur carcdsf.fr pour les valeurs définitives.
          </p>
        </div>

        {/* Liens internes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "40px 0" }}>
          <div style={{ backgroundColor: "#F7F9FC", border: "1px solid #E8EDF5", borderRadius: "12px", padding: "16px 20px", fontSize: "14px", color: "#374151" }}>
            Infirmier, kiné, orthophoniste ou orthoptiste ?{" "}
            <Link href="/blog/carpimko-retraite-infirmiers-guide" style={{ color: "#1D9E75", fontWeight: 600, textDecoration: "none" }}>
              Guide CARPIMKO complet →
            </Link>
          </div>
          <div style={{ backgroundColor: "#F7F9FC", border: "1px solid #E8EDF5", borderRadius: "12px", padding: "16px 20px", fontSize: "14px", color: "#374151" }}>
            Médecin libéral ?{" "}
            <Link href="/blog/carmf-retraite-medecins-liberaux-guide" style={{ color: "#1D9E75", fontWeight: 600, textDecoration: "none" }}>
              Guide CARMF complet →
            </Link>
          </div>
        </div>

        {/* CTA Final */}
        <div style={{ backgroundColor: "#0F1F3D", borderRadius: "16px", padding: "40px", textAlign: "center", marginTop: "64px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "12px" }}>
            Estimez votre retraite CARCDSF en 2 minutes
          </h2>
          <p style={{ color: "#7A95BB", fontSize: "15px", marginBottom: "28px", lineHeight: 1.6 }}>
            Diagnostic gratuit et personnalisé — pension estimée, écart par rapport à votre objectif, leviers d'optimisation.
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
