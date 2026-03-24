import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "SASU et retraite : le calcul que personne ne fait | Happy Retraite",
  description: "Les dividendes SASU ne cotisent pas pour la retraite. Conséquences chiffrées et stratégies pour éviter le choc à la liquidation.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/sasu-retraite-calcul" },
  openGraph: {
    title: "SASU et retraite : le calcul que personne ne fait | Happy Retraite",
    description: "Les dividendes SASU ne cotisent pas pour la retraite. Conséquences chiffrées et stratégies pour éviter le choc à la liquidation.",
    url: "https://www.happyretraite.fr/blog/sasu-retraite-calcul",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SASU et retraite : le calcul que personne ne fait | Happy Retraite",
    description: "Les dividendes SASU ne cotisent pas pour la retraite. Conséquences chiffrées et stratégies pour éviter le choc à la liquidation.",
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
          headline="SASU et retraite : le calcul que personne ne fait"
          description="Les dividendes SASU ne cotisent pas pour la retraite. Conséquences chiffrées et stratégies pour éviter le choc à la liquidation."
          url="https://www.happyretraite.fr/blog/sasu-retraite-calcul"
          datePublished="2026-02-25"
        />

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ backgroundColor: "#E8F5EF", color: "#0F6E56", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: "50px" }}>Indépendant</span>
            <span style={{ color: "#6B7A99", fontSize: "13px" }}>7 min de lecture</span>
          </div>
          <h1 style={{ fontFamily: PLAYFAIR, fontSize: "40px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px", lineHeight: 1.2 }}>
            SASU et retraite : le calcul que personne ne fait (et qui change tout)
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7A99", lineHeight: 1.6 }}>
            &ldquo;Je suis en SASU, donc assimilé salarié — j&apos;ai les mêmes droits retraite qu&apos;un salarié.&rdquo; C&apos;est ce que croient beaucoup de présidents de SASU. La réalité est plus nuancée — et parfois brutale.
          </p>
        </div>

        {/* Content */}
        <div style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>

          <H2>Le président de SASU : &quot;assimilé salarié&quot;, vraiment ?</H2>
          <P>Oui — le président de SASU est affilié au régime général (CNAV) et à l&apos;AGIRC-ARRCO pour la retraite complémentaire, comme un salarié classique. Les taux de cotisation sont identiques à ceux d&apos;un salarié. C&apos;est là que s&apos;arrête la ressemblance.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Le président de SASU ne bénéficie pas de l&apos;assurance chômage (ARE) — contrairement à un salarié. Et surtout, la part &quot;patronale&quot; des cotisations (environ 25-30% du salaire brut) est supportée par la SASU elle-même.</p>
          </InfoBox>

          <H2>Le problème fondamental : les dividendes ne cotisent pas</H2>
          <P>Voici le calcul que beaucoup évitent. Imaginons Alice, présidente de SASU avec un CA de 150 000€ et des charges de 30 000€. Bénéfice : 120 000€. Elle décide de se verser 20 000€ de salaire et 80 000€ de dividendes (après IS à 15%). Ses droits retraite sont calculés sur... 20 000€.</P>
          <H3>Ce que ça donne concrètement</H3>
          <P>Salaire annuel : 20 000€. Trimestres validés : 4 (seuil dépassé). Revenus pris en compte pour le SAM : 20 000€/an. Après 30 ans de carrière à ce niveau : pension de base ≈ 500€/mois, complémentaire AGIRC-ARRCO ≈ 200€/mois. Total : ~700€/mois. Pendant ce temps, Alice a prélevé en moyenne 80 000€/an de dividendes pendant 30 ans. Elle a &quot;gagné&quot; 80 000€ de liquidité annuelle — mais construit une retraite de misère.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Le vrai calcul : 80 000€/an de dividendes non cotisés × 30 ans = 2 400 000€ de dividendes. Pension résultante : 700€/mois. Un salarié ayant cotisé sur un salaire de 100 000€ pendant 30 ans toucherait ~3 000€/mois. L&apos;écart : 2 300€/mois, soit 276 000€ sur 10 ans.</p>
          </GreenBox>

          <H2>Comparaison SASU vs EURL sur la retraite — même revenu net</H2>
          <P>Hypothèse : revenu net disponible identique de 50 000€/an pour le dirigeant, pendant 30 ans. SASU avec salaire 50 000€ (0 dividendes) : cotisations sociales ~30 000€ — retraite estimée ~1 600€/mois. SASU avec salaire 15 000€ + dividendes 35 000€ : cotisations ~7 000€ — retraite estimée ~500€/mois. EURL avec rémunération 50 000€ : cotisations ~20 000€ — retraite estimée ~1 100€/mois. EURL avec rémunération 20 000€ + dividendes (sous seuil) : cotisations ~9 000€ — retraite estimée ~600€/mois.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>La SASU avec salaire plein génère les meilleurs droits retraite — mais aussi les charges les plus élevées. L&apos;EURL avec rémunération complète est un bon compromis. La minimisation des cotisations est la stratégie la plus risquée pour la retraite.</p>
          </InfoBox>

          <H2>La stratégie optimale : quel salaire viser en SASU ?</H2>
          <H3>Minimum vital pour la retraite</H3>
          <P>Pour valider 4 trimestres : salaire brut annuel ≥ ~7 000€ (soit ~583€/mois brut). C&apos;est le strict minimum — largement insuffisant pour une pension décente.</P>
          <H3>Niveau recommandé selon les objectifs</H3>
          <P>Pour une pension de 1 000€/mois (avec 30 ans de carrière) : viser un salaire annuel de ~30 000€ brut. Pour une pension de 1 500€/mois : ~50 000€ brut. Pour une pension de 2 000€/mois : ~70 000€ brut (niveau salarié cadre).</P>
          <H3>Complément indispensable : le PER</H3>
          <P>Même avec un salaire de 50 000€, la pension sera de ~1 600€/mois après 30 ans. Si votre objectif est 2 500€/mois, il faut combler ~900€/mois via un PER ou d&apos;autres placements.</P>
          <GreenBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Règle pratique SASU : versez-vous un salaire cohérent avec vos besoins de retraite (au moins 40 000€ brut/an si vous visez 1 200€/mois), ouvrez un PER pour le complément, et gardez les dividendes pour les projets long terme ou l&apos;immobilier.</p>
          </GreenBox>

          <H2>Ce que les experts-comptables oublient parfois de dire</H2>
          <P>La plupart des experts-comptables sont excellents pour optimiser la fiscalité immédiate. Certains sont moins attentifs aux conséquences retraite des stratégies de rémunération. Les questions à poser à votre expert-comptable : &quot;Avec ce niveau de rémunération, quelle sera ma pension estimée à 64 ans ?&quot; et &quot;Quel PER me recommandez-vous et quel montant annuel verser ?&quot;.</P>
          <InfoBox>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Si votre expert-comptable ne peut pas répondre précisément à ces questions, complétez avec un conseiller en gestion de patrimoine (CGP) spécialisé en indépendants.</p>
          </InfoBox>

          <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "white", border: "1px solid #E8EDF5", borderRadius: "12px", display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Comparez avec l&apos;EURL →{" "}
              <Link href="/blog/retraite-eurl-optimiser-cotisations" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>Retraite en EURL : comment optimiser ses cotisations</Link>
            </p>
            <p style={{ margin: 0, lineHeight: 1.8 }}>Calculez combien verser sur un PER →{" "}
              <Link href="/blog/per-combien-verser-selon-age" style={{ color: "#1D9E75", textDecoration: "none", fontWeight: 600 }}>PER : combien verser selon son âge ?</Link>
            </p>
          </div>
        </div>

        {/* Sources */}
        <div style={{ borderTop: "1px solid #E8EDF5", marginTop: "64px", paddingTop: "32px" }}>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "20px", fontWeight: 700, color: "#0F1F3D", marginBottom: "16px" }}>Sources</h2>
          <ul style={{ fontSize: "14px", color: "#6B7A99", lineHeight: 2, listStyle: "none", padding: 0 }}>
            <li>→ <a href="https://www.urssaf.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>urssaf.fr</a> — Régime social du président de SASU, cotisations assimilé-salarié</li>
            <li>→ <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>service-public.fr</a> — Droits retraite SASU, CNAV et AGIRC-ARRCO</li>
            <li>→ <a href="https://www.agirc-arrco.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1D9E75", textDecoration: "none" }}>agirc-arrco.fr</a> — Retraite complémentaire assimilé-salarié, calcul des points</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#9BA8BB", marginTop: "12px" }}>
            Les simulations de pension sont indicatives. Obtenez une estimation personnalisée sur info-retraite.fr ou auprès de votre caisse de retraite.
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
