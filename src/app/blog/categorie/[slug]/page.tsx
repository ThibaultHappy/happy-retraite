import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getArticlesByCategory,
  getCategoryBySlug,
} from "@/lib/blog-data";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Blog Happy Retraite`,
    description: cat.description,
    alternates: { canonical: `https://www.happyretraite.fr/blog/categorie/${slug}` },
    openGraph: {
      title: `${cat.name} — Blog Happy Retraite`,
      description: cat.description,
      url: `https://www.happyretraite.fr/blog/categorie/${slug}`,
      siteName: "Happy Retraite",
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const catArticles = getArticlesByCategory(slug);

  return (
    <div style={{ fontFamily: DM, backgroundColor: "#F7F9FC", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ backgroundColor: "#0F1F3D", padding: "0 24px" }}>
        <div
          className="max-w-6xl mx-auto flex items-center justify-between"
          style={{ minHeight: "72px" }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: PLAYFAIR, fontSize: "20px", color: "white" }}>
              Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
            </span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link
              href="/blog"
              style={{ color: "white", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}
            >
              Contact
            </Link>
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
      <section
        style={{ backgroundColor: "#0F1F3D", padding: "56px 24px 48px", textAlign: "center" }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#4B6082",
              marginBottom: "20px",
            }}
          >
            <Link href="/" style={{ color: "#4B6082", textDecoration: "none" }}>
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#4B6082", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "#7A95BB" }}>{cat.name}</span>
          </div>

          {/* Category badge */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                backgroundColor: cat.color.bg,
                color: cat.color.text,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "5px 16px",
                borderRadius: "50px",
              }}
            >
              {catArticles.length} articles
            </span>
          </div>

          <h1
            style={{
              fontFamily: PLAYFAIR,
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            {cat.name}
          </h1>
          <p style={{ fontSize: "16px", color: "#7A95BB", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto" }}>
            {cat.description}
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {catArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E8EDF5",
                  borderRadius: "16px",
                  padding: "28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
                >
                  <span
                    style={{
                      backgroundColor: cat.color.bg,
                      color: cat.color.text,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: "50px",
                    }}
                  >
                    {article.badge}
                  </span>
                  <span style={{ color: "#6B7A99", fontSize: "12px" }}>
                    {article.temps} de lecture
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: PLAYFAIR,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0F1F3D",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                    flex: 0,
                  }}
                >
                  {article.titre}
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#6B7A99",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "20px",
                  }}
                >
                  {article.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#1D9E75",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Lire l&apos;article
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#1D9E75",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Voir tous les articles
          </Link>
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
