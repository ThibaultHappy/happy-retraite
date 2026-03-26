import Link from "next/link";
import type { Metadata } from "next";
import BlogFilter from "@/components/BlogFilter";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export const metadata: Metadata = {
  title: "Blog Happy Retraite — Guides et analyses retraite | Happy Retraite",
  description:
    "Guides, analyses et conseils pour préparer votre retraite sereinement. Indépendants, salariés, fonctionnaires — des articles concrets et chiffrés.",
};

export default function BlogIndexPage() {
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
            <Link href="/blog" style={{ color: "white", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>Blog</Link>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>Contact</Link>
            <Link
              href="/diagnostic/intro"
              className="hidden sm:inline-block"
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
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "#0F1F3D", padding: "64px 24px 56px", textAlign: "center" }}>
        <div className="max-w-3xl mx-auto">
          <h1
            style={{
              fontFamily: PLAYFAIR,
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Le blog Happy Retraite
          </h1>
          <p style={{ fontSize: "18px", color: "#7A95BB", lineHeight: 1.6 }}>
            Guides et analyses pour préparer votre retraite sereinement
          </p>
        </div>
      </section>

      {/* Articles + Filters */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <BlogFilter />

        {/* CTA Final */}
        <div
          style={{
            backgroundColor: "#0F1F3D",
            borderRadius: "16px",
            padding: "48px 40px",
            textAlign: "center",
            marginTop: "64px",
          }}
        >
          <h2
            style={{
              fontFamily: PLAYFAIR,
              fontSize: "32px",
              fontWeight: 700,
              color: "white",
              marginBottom: "12px",
            }}
          >
            Prêt à connaître votre situation réelle ?
          </h2>
          <p
            style={{
              color: "#7A95BB",
              fontSize: "16px",
              marginBottom: "32px",
              lineHeight: 1.6,
              maxWidth: "480px",
              margin: "0 auto 32px",
            }}
          >
            Diagnostic gratuit et personnalisé selon votre statut, vos revenus et votre carrière.
          </p>
          <Link
            href="/diagnostic/intro"
            style={{
              display: "inline-block",
              background: "linear-gradient(to right, #10D98A, #2D9CDB)",
              color: "white",
              padding: "18px 48px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Faire mon diagnostic gratuit →
          </Link>
          <p style={{ color: "#4B6082", fontSize: "13px", marginTop: "16px" }}>
            Sans carte bancaire · Résultat immédiat
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0F1F3D",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "40px 24px",
          marginTop: "40px",
        }}
      >
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
