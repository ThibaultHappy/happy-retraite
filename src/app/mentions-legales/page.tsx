import Link from "next/link";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata = {
  title: "Mentions légales — Happy Retraite",
  description: "Mentions légales du site Happy Retraite.",
};

export default function MentionsLegalesPage() {
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
              background: "linear-gradient(to right, #10D98A, #2D9CDB)",
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
          Mentions légales
        </h1>
        <p style={{ color: "#6B7A99", fontSize: "14px", marginBottom: "48px" }}>Dernière mise à jour : mars 2026</p>

        <Section title="1. Éditeur du site">
          <p>Le site <strong>happyretraite.fr</strong> est édité par :</p>
          <ul>
            <li>Raison sociale : Happy Retraite</li>
            <li>Forme juridique : en cours de constitution</li>
            <li>Siège social : France</li>
            <li>Email : <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#1D9E75" }}>bonjour@happyretraite.fr</a></li>
          </ul>
        </Section>

        <Section title="2. Hébergement">
          <p>Le site est hébergé par :</p>
          <ul>
            <li><strong>Vercel Inc.</strong></li>
            <li>440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
            <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75" }}>vercel.com</a></li>
          </ul>
        </Section>

        <Section title="3. Propriété intellectuelle">
          <p>
            L'ensemble du contenu du site (textes, visuels, logo, algorithmes de calcul) est la propriété exclusive de Happy Retraite et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.
          </p>
        </Section>

        <Section title="4. Limitation de responsabilité">
          <p>
            Les estimations de pension de retraite fournies par Happy Retraite sont calculées sur la base des informations renseignées par l'utilisateur et de règles générales de calcul. Elles ont une valeur <strong>purement indicative</strong> et ne constituent pas un conseil financier réglementé au sens de la directive MIF2.
          </p>
          <p>
            Happy Retraite ne peut être tenu responsable des décisions financières prises sur la base de ces estimations. Nous vous recommandons de consulter un conseiller en gestion de patrimoine (CGP) agréé AMF pour toute décision d'investissement.
          </p>
        </Section>

        <Section title="5. Paiement et remboursement">
          <p>
            Le paiement du rapport personnalisé (29 €) est traité de manière sécurisée par <strong>Stripe</strong>. Happy Retraite ne stocke aucune donnée bancaire.
          </p>
          <p>
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus numériques fournis immédiatement après achat. Toutefois, en cas d'insatisfaction, nous nous engageons à étudier toute demande de remboursement sous 7 jours à l'adresse <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#1D9E75" }}>bonjour@happyretraite.fr</a>.
          </p>
        </Section>

        <Section title="6. Droit applicable">
          <p>
            Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </Section>

        <Section title="7. Contact">
          <p>
            Pour toute question relative aux présentes mentions légales :{" "}
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
