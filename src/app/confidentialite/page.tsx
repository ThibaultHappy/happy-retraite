import Link from "next/link";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata = {
  title: "Politique de confidentialité — Happy Retraite",
  description: "Politique de confidentialité et traitement des données personnelles de Happy Retraite.",
};

export default function ConfidentialitePage() {
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
          <Link
            href="/diagnostic"
            style={{
              backgroundColor: "#1D9E75",
              color: "white",
              padding: "10px 22px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Commencer gratuitement
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "8px" }}>
          Politique de confidentialité
        </h1>
        <p style={{ color: "#6B7A99", fontSize: "14px", marginBottom: "48px" }}>Dernière mise à jour : mars 2026</p>

        <Section title="1. Responsable du traitement">
          <p>
            Happy Retraite, joignable à <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#1D9E75" }}>bonjour@happyretraite.fr</a>, est responsable du traitement de vos données personnelles collectées via le site <strong>happyretraite.fr</strong>.
          </p>
        </Section>

        <Section title="2. Données collectées">
          <p>Nous collectons les données suivantes :</p>
          <ul>
            <li><strong>Données du diagnostic</strong> : prénom, année de naissance, statut professionnel, revenus, trimestres cotisés, revenu cible. Ces données sont stockées localement dans votre navigateur (localStorage) et ne sont pas transmises à nos serveurs sauf lors d'un achat.</li>
            <li><strong>Données de paiement</strong> : prénom, nom, email, données de diagnostic. Transmises à Stripe pour le traitement du paiement et stockées dans les métadonnées de la session.</li>
            <li><strong>Données de contact</strong> : prénom, email, message. Collectées via le formulaire de contact.</li>
            <li><strong>Données analytiques</strong> : pages visitées, interactions, via Google Analytics 4 et PostHog (données anonymisées ou pseudonymisées).</li>
          </ul>
        </Section>

        <Section title="3. Finalités du traitement">
          <ul>
            <li>Calcul et affichage de votre estimation de retraite</li>
            <li>Génération et livraison de votre rapport PDF personnalisé</li>
            <li>Traitement de votre paiement via Stripe</li>
            <li>Envoi de votre rapport par email via Resend</li>
            <li>Réponse à vos demandes de contact</li>
            <li>Amélioration de nos services via l'analyse d'audience</li>
          </ul>
        </Section>

        <Section title="4. Base légale">
          <ul>
            <li><strong>Exécution du contrat</strong> : traitement du paiement et livraison du rapport</li>
            <li><strong>Consentement</strong> : analytics et cookies non essentiels</li>
            <li><strong>Intérêt légitime</strong> : amélioration de nos services et sécurité</li>
          </ul>
        </Section>

        <Section title="5. Sous-traitants et transferts">
          <p>Vos données peuvent être transmises aux sous-traitants suivants, dans le cadre strict de la fourniture du service :</p>
          <ul>
            <li><strong>Stripe</strong> (paiement) — USA, couvert par les clauses contractuelles types UE</li>
            <li><strong>Resend</strong> (emails transactionnels) — USA, couvert par les clauses contractuelles types UE</li>
            <li><strong>Vercel</strong> (hébergement) — USA, couvert par les clauses contractuelles types UE</li>
            <li><strong>Google Analytics</strong> (audience) — USA, couvert par les clauses contractuelles types UE</li>
            <li><strong>PostHog</strong> (analytics produit) — serveurs EU (eu.posthog.com)</li>
          </ul>
        </Section>

        <Section title="6. Durée de conservation">
          <ul>
            <li>Données localStorage : supprimées à la fermeture ou à la demande de l'utilisateur</li>
            <li>Données de paiement (Stripe) : 13 mois après la transaction</li>
            <li>Rapports PDF en mémoire serveur : 24 heures</li>
            <li>Emails de contact : 3 ans</li>
            <li>Données analytiques : 26 mois (GA4) / 1 an (PostHog)</li>
          </ul>
        </Section>

        <Section title="7. Vos droits (RGPD)">
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement à des fins de marketing</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            <li><strong>Droit de retrait du consentement</strong> : à tout moment pour les traitements basés sur le consentement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#1D9E75" }}>bonjour@happyretraite.fr</a>. Vous disposez également du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (cnil.fr).
          </p>
        </Section>

        <Section title="8. Cookies">
          <p>Le site utilise :</p>
          <ul>
            <li><strong>Cookies strictement nécessaires</strong> : fonctionnement du site (pas de consentement requis)</li>
            <li><strong>Cookies analytiques</strong> : Google Analytics 4 et PostHog — déposés après votre consentement implicite lors de la navigation</li>
          </ul>
          <p>
            Vous pouvez désactiver les cookies analytiques via les paramètres de votre navigateur ou en installant l'extension Google Analytics Opt-out.
          </p>
        </Section>

        <Section title="9. Sécurité">
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : connexion HTTPS, chiffrement des données sensibles, accès restreint aux données de paiement (gérées exclusivement par Stripe).
          </p>
        </Section>

        <Section title="10. Contact DPO">
          <p>
            Pour toute question relative à la protection de vos données personnelles :{" "}
            <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#1D9E75" }}>bonjour@happyretraite.fr</a>
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0F1F3D", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 24px" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: PLAYFAIR, fontSize: "18px", color: "white" }}>
              Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
            </span>
          </Link>
          <p style={{ fontSize: "13px", color: "#4B6082", textAlign: "center" }}>
            © 2026 Happy Retraite. Les estimations sont indicatives et ne constituent pas un conseil financier.
          </p>
          <div style={{ display: "flex", gap: "24px", fontSize: "13px" }}>
            <Link href="/mentions-legales" style={{ color: "#4B6082", textDecoration: "none" }}>Mentions légales</Link>
            <Link href="/confidentialite" style={{ color: "#4B6082", textDecoration: "none" }}>Confidentialité</Link>
            <Link href="/contact" style={{ color: "#4B6082", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ fontFamily: PLAYFAIR, fontSize: "22px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>
        {title}
      </h2>
      <div style={{ fontSize: "15px", color: "#374151", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "12px" }}>
        {children}
      </div>
    </div>
  );
}
