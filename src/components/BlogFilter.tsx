"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, categories } from "@/lib/blog-data";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

export default function BlogFilter() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.categorySlug === activeCategory)
    : articles;

  return (
    <>
      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "40px",
          fontFamily: DM,
        }}
      >
        <button
          onClick={() => setActiveCategory(null)}
          style={{
            padding: "8px 18px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            border: activeCategory === null ? "none" : "1px solid #E8EDF5",
            backgroundColor: activeCategory === null ? "#1D9E75" : "#F7F9FC",
            color: activeCategory === null ? "white" : "#4B5563",
            transition: "all 0.15s ease",
          }}
        >
          Tous ({articles.length})
        </button>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.slug;
          const count = articles.filter((a) => a.categorySlug === cat.slug).length;
          return (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              style={{
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                border: isActive ? "none" : "1px solid #E8EDF5",
                backgroundColor: isActive ? "#1D9E75" : "#F7F9FC",
                color: isActive ? "white" : "#4B5563",
                transition: "all 0.15s ease",
              }}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Articles grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "32px",
        }}
      >
        {filtered.map((article) => {
          const cat = categories.find((c) => c.slug === article.categorySlug);
          const badgeColor = cat?.color ?? { bg: "#E8F5EF", text: "#0F6E56" };

          return (
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
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                  cursor: "pointer",
                  fontFamily: DM,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Badge + temps */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: badgeColor.bg,
                      color: badgeColor.text,
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

                {/* Titre */}
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

                {/* Description */}
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

                {/* Lire la suite */}
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
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
          );
        })}
      </div>
    </>
  );
}
