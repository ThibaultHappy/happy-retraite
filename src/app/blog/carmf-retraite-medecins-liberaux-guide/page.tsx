import Link from "next/link";
import type { Metadata } from "next";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "CARMF retraite : le guide complet pour les médecins libéraux en 2026",
  description:
    "Retraite CARMF pour médecins libéraux : cotisations, calcul de la pension, ASV, âge de départ. Tout ce que les médecins doivent savoir en 2026.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CARMF retraite : le guide complet pour les médecins libéraux en 2026",
  description:
    "Retraite CARMF pour médecins libéraux : cotisations, calcul de la pension, ASV, âge de départ. Tout ce que les médecins doivent savoir en 2026.",
  author: { "@type": "Organization", name: "Happy Retraite" },
  publisher: {
    "@type": "Organization",
    name: "Happy Retraite",
    url: "https://www.happyretraite.fr",
  },
  url: "https://www.happyretraite.fr/blog/carmf-retraite-medecins-liberaux-guide",
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
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>
              Professions libérales
            </span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>8 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            CARMF retraite : le guide complet pour les médecins libéraux en 2026
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            120 000 médecins libéraux cotisent à la CARMF sans toujours comprendre ce qu'ils vont vraiment toucher. Entre les 4 régimes superposés, l'ASV secteur 1 et les pièges des années de remplacement — voici le décryptage complet.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>La CARMF : 4 régimes superposés</H2>
          <P>
            Contrairement à un salarié qui cotise à un seul régime, un médecin libéral alimente simultanément 4 régimes distincts. Comprendre chacun est essentiel pour estimer sa pension réelle.
          </P>

          <H3>1. La retraite de base — CNAVPL</H3>
          <P>
            Tous les professionnels libéraux cotisent à la CNAVPL (Caisse Nationale d'Assurance Vieillesse des Professions Libérales) pour leur retraite de base. Il s'agit d'un régime par points : chaque euro cotisé génère des points, et chaque point a une valeur fixée annuellement. En 2026, la valeur de service du point CNAVPL est d'environ 0,614€/an.
          </P>
          <InfoBox>
            Le régime de base CNAVPL est distinct du régime général des salariés. Ses règles de calcul sont différentes — notamment le fait qu'il n'y a pas de "25 meilleures années" mais un système à points cumulés tout au long de la carrière.
          </InfoBox>

          <H3>2. La retraite complémentaire CARMF</H3>
          <P>
            La section professionnelle CARMF gère la retraite complémentaire spécifique aux médecins. Ce régime fonctionne également par points, mais avec des taux de cotisation et une valeur du point différents de la CNAVPL. En 2026, le point complémentaire CARMF vaut environ 3,07€/an.
          </P>

          <H3>3. L'ASV — Avantage Social Vieillesse</H3>
          <P>
            C'est la particularité la plus avantageuse des médecins conventionnés secteur 1. L'ASV est un régime de retraite complémentaire dont les 2/3 des cotisations sont pris en charge par l'Assurance Maladie (CPAM). Le médecin ne paie que 1/3. En 2026, la valeur du point ASV est d'environ 1,97€/an.
          </P>
          <GreenBox>
            <strong>L'ASV en chiffres :</strong> un médecin généraliste secteur 1 avec 30 ans de carrière accumule environ 5 200 points ASV. Pension ASV estimée : 5 200 × 1,97€ ≈ 10 244€/an ≈ <strong>853€/mois</strong>. Et ce, pour seulement 1/3 du coût normal — les 2/3 étant financés par la CPAM.
          </GreenBox>

          <H3>4. Le régime invalidité-décès</H3>
          <P>
            Cotisation forfaitaire annuelle (~2 100€ en 2026), ce régime couvre le risque d'invalidité permanente totale et verse un capital décès aux ayants droit. Il est distinct de toute prévoyance privée souscrite par le médecin.
          </P>

          <H2>L'ASV secteur 1 : l'avantage méconnu qui change tout</H2>
          <P>
            L'Avantage Social Vieillesse est réservé aux médecins conventionnés secteur 1 et, dans une moindre mesure, secteur 2 avec option pratique tarifaire maîtrisée (OPTAM). Pour les médecins secteur 3 (non conventionnés), il n'existe pas.
          </P>

          <H3>Comment fonctionne la prise en charge par la CPAM</H3>
          <P>
            La cotisation ASV totale représente environ 6 360€/an pour un médecin généraliste secteur 1 exerçant à temps plein. La CPAM prend en charge 4 240€ (2/3), le médecin ne paie que 2 120€ (1/3). C'est un avantage considérable : pour 2 120€ cotisés, vous générez les droits équivalant à 6 360€ cotisés.
          </P>

          <H3>Médecins secteur 2 : un accès partiel</H3>
          <P>
            Les médecins secteur 2 avec OPTAM bénéficient d'une prise en charge CPAM réduite (environ la moitié). Les médecins secteur 2 sans OPTAM et secteur 3 ne bénéficient d'aucune prise en charge — ils cotisent à taux plein mais ne génèrent pas de points ASV.
          </P>
          <InfoBox>
            Le passage du secteur 1 au secteur 2 peut sembler attractif pour les honoraires libres — mais il fait perdre définitivement les droits ASV futurs. Sur 20 ans, la perte de pension ASV peut dépasser 150 000€. Ce calcul est rarement fait avant de changer de secteur.
          </InfoBox>

          <H2>Les cotisations CARMF en 2026</H2>
          <P>
            Les cotisations retraite d'un médecin libéral sont calculées sur ses revenus BNC (Bénéfices Non Commerciaux) nets. Le PASS (Plafond Annuel de la Sécurité Sociale) 2026 est fixé à 46 368€.
          </P>

          <H3>Tableau des cotisations pour un médecin à 100 000€ BNC</H3>
          <P>
            Retraite de base CNAVPL : ~8 600€/an — Retraite complémentaire CARMF : ~7 200€/an — ASV (part médecin secteur 1) : ~2 120€/an — Invalidité-décès : ~2 100€/an — <strong>Total retraite : ~20 020€/an</strong> soit ~20% du BNC.
          </P>
          <GreenBox>
            Ces cotisations sont intégralement déductibles du BNC imposable. Pour un médecin à 45% de TMI, 20 000€ de cotisations retraite représentent ~9 000€ d'économie fiscale. Le coût net réel est donc ~11 000€.
          </GreenBox>

          <H3>Pour un médecin à 200 000€ BNC</H3>
          <P>
            Retraite de base CNAVPL : ~11 400€/an — Retraite complémentaire CARMF : ~13 600€/an — ASV (secteur 1) : ~2 120€/an — Invalidité-décès : ~2 100€/an — <strong>Total : ~29 220€/an</strong> soit ~14,6% du BNC (les cotisations sont plafonnées au-delà d'un certain seuil).
          </P>

          <H2>Calculer sa pension CARMF : exemple complet</H2>
          <P>
            Prenons le cas concret de Pierre, médecin généraliste secteur 1, 30 ans de carrière libérale complète, BNC moyen de 90 000€.
          </P>

          <H3>Retraite de base CNAVPL</H3>
          <P>
            Avec 30 ans de cotisations à 90 000€ de BNC, Pierre accumule environ 4 800 points CNAVPL. Pension de base = 4 800 × 0,614€ ≈ <strong>2 947€/an ≈ 246€/mois</strong>.
          </P>
          <InfoBox>
            La retraite de base CNAVPL paraît faible en montant absolu — c'est normal. Elle est complétée par les régimes complémentaires. Ne jamais l'analyser seule.
          </InfoBox>

          <H3>Retraite complémentaire CARMF</H3>
          <P>
            30 ans à 90 000€ BNC → accumulation d'environ 3 600 points CARMF. Pension complémentaire = 3 600 × 3,07€ ≈ <strong>11 052€/an ≈ 921€/mois</strong>.
          </P>

          <H3>ASV (secteur 1)</H3>
          <P>
            30 ans de conventionnement secteur 1 à temps plein → ~5 200 points ASV. Pension ASV = 5 200 × 1,97€ ≈ <strong>10 244€/an ≈ 853€/mois</strong>.
          </P>

          <H3>Pension totale estimée</H3>
          <P>
            Base CNAVPL : 246€ + Complémentaire CARMF : 921€ + ASV : 853€ = <strong>~2 020€/mois brut</strong>. À comparer avec un médecin salarié hospitalier au même niveau de revenus (~3 200-3 600€/mois). L'écart persiste, mais l'ASV secteur 1 le réduit considérablement.
          </P>
          <GreenBox>
            Un médecin secteur 2 sans OPTAM, même BNC, même durée : ~1 200€/mois (pas d'ASV, cotisations complémentaires similaires mais sans l'effet levier). L'ASV représente donc 820€/mois de différence — soit <strong>~200 000€ sur 20 ans de retraite</strong>.
          </GreenBox>

          <H2>Les pièges spécifiques aux médecins</H2>

          <H3>Les années d'internat et de clinicat</H3>
          <P>
            Pendant l'internat, les médecins sont assimilés salariés et cotisent au régime général — pas à la CARMF. Ces années génèrent des trimestres au régime général mais pas de points CARMF ni ASV. Lors du calcul de la retraite, ces droits doivent être récupérés auprès de la CNAV (régime général), et non de la CNAVPL.
          </P>
          <P>
            Le clinicat (post-internat) présente une situation similaire : statut mixte salarié/libéral selon les activités. Vérifiez sur info-retraite.fr que chaque période est bien affectée au bon régime.
          </P>

          <H3>Le médecin remplaçant : un statut trompeur</H3>
          <P>
            Les remplaçants exercent en libéral mais peuvent avoir des revenus variables. Une année à moins de 5 000-6 000€ de BNC ne valide que peu ou pas de trimestres CNAVPL. Pire : certains remplaçants pensent cotiser à la CARMF alors qu'ils ne valident pas leurs droits faute de revenus suffisants.
          </P>
          <InfoBox>
            Piège fréquent : un médecin remplaçant pendant 5 ans entre l'internat et l'installation peut avoir 5 années "grises" avec peu de droits. Ces années ne rattraperont jamais le manque à gagner en droits CARMF. La solution : s'installer plus tôt, ou compenser via le rachat de trimestres.
          </InfoBox>

          <H3>Le passage salarié → libéral</H3>
          <P>
            Un médecin ayant exercé 10 ans à l'hôpital puis 20 ans en libéral est polypensionné : il touche une retraite du régime général (années hospitalières) ET une retraite CARMF (années libérales). Les deux pensions sont calculées indépendamment, puis s'additionnent. Vérifiez que chaque caisse a bien tous vos relevés.
          </P>

          <H2>Optimiser sa retraite de médecin libéral</H2>

          <H3>Le PER Madelin / PER TNS : incontournable à hauts revenus</H3>
          <P>
            Pour un médecin à 150 000€ de BNC et 45% de TMI, chaque 1 000€ versé sur un PER coûte réellement 550€ après économie fiscale. Le plafond annuel déductible peut dépasser 30 000€ pour un médecin à ce niveau de revenus.
          </P>
          <P>
            Simulation : 1 500€/mois sur un PER pendant 25 ans à 5% de rendement → capital de ~850 000€ → rente mensuelle de ~3 500€/mois pendant 20 ans. Ajouté aux ~2 000€ de retraite CARMF : revenu total ~5 500€/mois.
          </P>

          <H3>Rachat des années d'études de médecine</H3>
          <P>
            Les 6 ans minimum d'études de médecine (+ spécialité + internat) représentent jusqu'à 12 trimestres rachetables. Pour un médecin à 45% de TMI, le coût net du rachat (après déduction fiscale) est particulièrement faible. Ce rachat améliore à la fois le taux de pension de base et potentiellement l'âge de départ.
          </P>

          <H3>Rester en secteur 1 vs passer en secteur 2</H3>
          <P>
            La décision de changer de secteur conventionnel est irréversible en termes d'ASV. Avant toute modification, calculez précisément : gains annuels en honoraires supplémentaires secteur 2 VS perte annuelle d'ASV. Dans la majorité des cas analysés, le gain brut en honoraires est inférieur à la perte de pension ASV sur la durée totale de retraite.
          </P>
          <GreenBox>
            Conseil clé : avant tout changement de secteur, demandez à votre CARMF (carmf.fr, 01 40 68 32 00) une simulation de pension comparative secteur 1 vs secteur 2. Ce service est gratuit et peut éviter une décision coûteuse.
          </GreenBox>
        </div>

        {/* Lien interne */}
        <div style={{ backgroundColor: "#F7F9FC", border: "1px solid #E8EDF5", borderRadius: "12px", padding: "20px 24px", margin: "40px 0", fontSize: "14px", color: "#374151" }}>
          Vous exercez une autre profession paramédicale libérale ?{" "}
          <Link href="/blog/carpimko-retraite-infirmiers-guide" style={{ color: "#1D9E75", fontWeight: 600, textDecoration: "none" }}>
            Lisez notre guide CARPIMKO pour les infirmiers, kinés, orthophonistes et orthoptistes →
          </Link>
        </div>

        {/* CTA Final */}
        <div style={{ backgroundColor: "#0F1F3D", borderRadius: "16px", padding: "40px", textAlign: "center", marginTop: "64px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "12px" }}>
            Estimez votre retraite de médecin libéral
          </h2>
          <p style={{ color: "#7A95BB", fontSize: "15px", marginBottom: "28px", lineHeight: 1.6 }}>
            Diagnostic personnalisé en 2 minutes — pension CARMF, ASV, écart et leviers d'optimisation.
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
