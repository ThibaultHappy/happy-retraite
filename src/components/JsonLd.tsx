export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: { "@type": "Organization", name: "Happy Retraite", url: "https://www.happyretraite.fr" },
    publisher: { "@type": "Organization", name: "Happy Retraite", url: "https://www.happyretraite.fr" },
    datePublished,
    dateModified: "2026-03-24",
    mainEntityOfPage: url,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.happyretraite.fr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.happyretraite.fr/blog" },
      { "@type": "ListItem", position: 3, name: headline, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
