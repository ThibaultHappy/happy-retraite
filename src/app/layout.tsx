import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import PosthogProvider from "@/components/PosthogProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Retraite — Simulateur retraite personnalisé et rapport PDF",
  description:
    "Calculez votre pension retraite réelle en 2 minutes. Rapport personnalisé avec vos leviers d'optimisation. Salarié, indépendant, fonctionnaire.",
  keywords:
    "simulateur retraite, calcul retraite, optimiser retraite, PER, rachat trimestres",
  metadataBase: new URL("https://www.happyretraite.fr"),
  alternates: {
    canonical: "https://www.happyretraite.fr",
  },
  openGraph: {
    title: "Happy Retraite — Simulateur retraite personnalisé et rapport PDF",
    description:
      "Calculez votre pension retraite réelle en 2 minutes. Rapport personnalisé avec vos leviers d'optimisation.",
    url: "https://www.happyretraite.fr",
    type: "website",
    siteName: "Happy Retraite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Retraite — Simulateur retraite personnalisé et rapport PDF",
    description:
      "Calculez votre pension retraite réelle en 2 minutes. Rapport personnalisé avec vos leviers d'optimisation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Happy Retraite",
  description: "Simulateur retraite personnalisé",
  url: "https://www.happyretraite.fr",
  applicationCategory: "FinanceApplication",
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "EUR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <PosthogProvider>{children}</PosthogProvider>
        <GoogleAnalytics gaId="G-0X7J3H7Q33" />
      </body>
    </html>
  );
}
