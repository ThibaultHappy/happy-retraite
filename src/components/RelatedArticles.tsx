import Link from "next/link";
import { getRelatedArticles, getCategoryBySlug, articles } from "@/lib/blog-data";
import { BlogCTAFinal } from "@/components/BlogCTA";

interface RelatedArticlesProps {
  currentSlug: string;
}

export default function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const related = getRelatedArticles(currentSlug, 3);
  const current = articles.find((a) => a.slug === currentSlug);
  const cat = current ? getCategoryBySlug(current.categorySlug) : undefined;

  return (
    <>
      {/* Bloc fin d'article */}
      <BlogCTAFinal />

      {/* Articles liés */}
      {related.length > 0 && (
        <div className="border-t border-gray-100 pt-8 mb-10">
          <p className="text-sm text-gray-500 mb-3">Articles liés :</p>
          <div className="flex flex-col gap-2">
            {related.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="text-[#1D9E75] hover:underline text-sm"
              >
                {article.titre} →
              </Link>
            ))}
          </div>
          {cat && (
            <div className="mt-4">
              <Link
                href={`/blog/categorie/${cat.slug}`}
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: cat.color.text }}
              >
                Voir tous les articles : {cat.name} →
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
