"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CTA_ID = "blog-mid-cta-injected";

const CTA_HTML = `
<div id="${CTA_ID}" style="
  background: #F9EBE4;
  border-radius: 16px;
  padding: 28px 32px;
  margin: 40px 0;
  font-family: 'DM Sans', sans-serif;
  border: 1px solid rgba(233, 140, 100, 0.2);
">
  <p style="
    font-size: 18px;
    font-weight: 700;
    color: #0F1F3D;
    margin: 0 0 8px;
    line-height: 1.3;
  ">Quelle sera votre pension à la retraite ?</p>
  <p style="
    font-size: 14px;
    color: #6B7A99;
    margin: 0 0 20px;
    line-height: 1.6;
  ">Obtenez votre estimation personnalisée en 2 minutes — gratuit.</p>
  <a href="/diagnostic/intro" style="
    display: inline-block;
    background: linear-gradient(to right, #10D98A, #2D9CDB);
    color: white;
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  ">Obtenir mon estimation →</a>
</div>
`;

export default function BlogMidCTAInjector() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip blog index and category pages
    if (pathname === "/blog" || pathname.startsWith("/blog/categorie")) return;

    // Skip if already injected
    if (document.getElementById(CTA_ID)) return;

    const article = document.querySelector("article");
    if (!article) return;

    const h2s = article.querySelectorAll("h2");
    if (h2s.length < 2) return;

    // Insert after the 3rd h2 (index 2), fallback to 2nd (index 1)
    const targetIndex = h2s.length >= 3 ? 2 : 1;
    const targetH2 = h2s[targetIndex];

    // Find a good insertion point: after the next sibling paragraph/element
    let insertRef: Element = targetH2;
    if (targetH2.nextElementSibling) {
      insertRef = targetH2.nextElementSibling;
    }

    const ctaDiv = document.createElement("div");
    ctaDiv.innerHTML = CTA_HTML;
    const ctaNode = ctaDiv.firstElementChild;
    if (!ctaNode) return;

    insertRef.parentNode?.insertBefore(ctaNode, insertRef.nextSibling);
  }, [pathname]);

  return null;
}
