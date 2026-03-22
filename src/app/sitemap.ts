import { MetadataRoute } from "next";

const blogSlugs = [
  "retraite-micro-entrepreneur-combien-vais-je-toucher",
  "retraite-60-ans-encore-possible-2026",
  "rachat-trimestres-retraite-rentable",
  "trimestres-manquants-comment-les-recuperer",
  "retraite-independant-vs-salarie-comparaison",
  "per-combien-verser-selon-age",
  "carpimko-retraite-infirmiers-guide",
  "retraite-eurl-optimiser-cotisations",
  "sasu-retraite-calcul",
  "fonctionnaire-retraite-progressive",
  "carmf-retraite-medecins-liberaux-guide",
  "carcdsf-retraite-chirurgiens-dentistes-sages-femmes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `https://www.happyretraite.fr/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.happyretraite.fr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://www.happyretraite.fr/diagnostic",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.happyretraite.fr/resultats",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.happyretraite.fr/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
