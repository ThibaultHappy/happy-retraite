"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogStickyBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only on article pages
    if (pathname === "/blog" || pathname.startsWith("/blog/categorie")) return;

    // Already dismissed this session
    if (sessionStorage.getItem("blog_banner_dismissed") === "true") {
      setDismissed(true);
      return;
    }

    const show = () => setVisible(true);

    // Trigger 1: 30 seconds
    const timer = setTimeout(show, 30000);

    // Trigger 2: 50% scroll
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= 0.5) show();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("blog_banner_dismissed", "true");
  };

  if (dismissed || !visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#0F1F3D",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        zIndex: 1000,
        boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <p
          style={{
            color: "white",
            fontWeight: 600,
            fontSize: "15px",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          Découvrez combien vous toucherez vraiment à la retraite
        </p>
        <p style={{ color: "#7A95BB", fontSize: "12px", margin: "4px 0 0" }}>
          Diagnostic gratuit · 2 minutes · Sans carte bancaire
        </p>
      </div>

      <Link
        href="/diagnostic/intro"
        style={{
          background: "linear-gradient(to right, #10D98A, #2D9CDB)",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Faire mon diagnostic →
      </Link>

      <button
        onClick={dismiss}
        aria-label="Fermer"
        style={{
          position: "absolute",
          top: "10px",
          right: "16px",
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.4)",
          cursor: "pointer",
          fontSize: "22px",
          lineHeight: 1,
          padding: "4px",
        }}
      >
        ×
      </button>
    </div>
  );
}
