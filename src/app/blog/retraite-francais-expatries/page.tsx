// app/blog/retraite-francais-expatries/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Retraite des Français expatriés : récupérer vos droits | Happy Retraite",
  description: "Accords bilatéraux, CFE, trimestres à l'étranger — le guide complet pour ne pas perdre vos droits retraite français en 2026.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/retraite-francais-expatries" },
  openGraph: {
    title: "Retraite des Français expatriés : récupérer vos droits | Happy Retraite",
    description: "Accords bilatéraux, CFE, trimestres à l'étranger — le guide complet pour ne pas perdre vos droits retraite français en 2026.",
    url: "https://www.happyretraite.fr/blog/retraite-francais-expatries",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retraite des Français expatriés : récupérer vos droits | Happy Retraite",
    description: "Accords bilatéraux, CFE, trimestres à l'étranger — le guide complet pour ne pas perdre vos droits retraite français en 2026.",
  },
};

export default function RetraiteExpatries() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleJsonLd
        headline="Retraite des Français expatriés : récupérer vos droits"
        description="Accords bilatéraux, CFE, trimestres à l'étranger — le guide complet pour ne pas perdre vos droits retraite français en 2026."
        url="https://www.happyretraite.fr/blog/retraite-francais-expatries"
        datePublished="2026-03-12"
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Expatrié
          </span>
          <span className="text-gray-400 text-sm">9 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite des Français expatriés : comment récupérer vos droits (sans en perdre)
        </h1>
        <p className="text-lg text-gray-500">
          Travailler à l'étranger, c'est souvent continuer à cotiser — mais pas toujours pour la France. Le résultat : des droits éparpillés entre plusieurs pays, une liquidation complexe, et des erreurs qui coûtent cher. Voici comment éviter les pièges.
        </p>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        "J'ai travaillé 8 ans en Suisse, puis 5 ans au Canada avant de rentrer en France. Je touche une retraite de trois pays différents — mais personne ne m'a expliqué comment ça fonctionne." C'est le témoignage typique d'un expatrié face à sa retraite. Environ <strong>2,5 millions de Français</strong> résident à l'étranger. Beaucoup rentrent en France à l'approche de la retraite sans avoir anticipé l'impact de leurs années expatriées.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Principe de base : où cotise-t-on quand on travaille à l'étranger ?
      </h2>
      <p className="text-gray-700 mb-4">
        Règle générale : quand vous travaillez dans un pays étranger en tant que salarié local, vous cotisez au régime de retraite de <strong>ce pays</strong> — pas à la France. Vos années passées à l'étranger ne s'ajoutent pas automatiquement à votre retraite française. Elles génèrent des droits dans le pays d'accueil, que vous devrez liquider séparément au moment de la retraite.
      </p>
      <p className="text-gray-700 mb-6">
        Il existe cependant deux mécanismes qui changent tout : les <strong>accords bilatéraux de sécurité sociale</strong> et la <strong>CFE</strong> (Caisse des Français de l'Étranger).
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Les trois situations possibles</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Situation</th>
              <th className="text-left p-3">Cotisations retraite</th>
              <th className="text-left p-3 rounded-tr-lg">Impact sur retraite française</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Salarié local à l'étranger</td>
              <td className="p-3">Régime du pays d'accueil</td>
              <td className="p-3 text-orange-600">Aucun (droits étrangers séparés)</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Détaché par une entreprise française</td>
              <td className="p-3">Régime français maintenu</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Droits français préservés</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Adhérent volontaire CFE</td>
              <td className="p-3">CFE (cotisation volontaire)</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Droits français préservés</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La CFE : le filet de sécurité des expatriés qui cotisent volontairement
      </h2>
      <p className="text-gray-700 mb-4">
        La <strong>Caisse des Français de l'Étranger (CFE)</strong> permet aux Français qui partent à l'étranger hors détachement de continuer à cotiser au régime français de retraite, de façon volontaire. C'est une option, pas une obligation.
      </p>
      <p className="text-gray-700 mb-4">
        Cotiser à la CFE permet de <strong>continuer à valider des trimestres</strong> pour la retraite française pendant les années passées à l'étranger, comme si vous étiez resté en France. Le coût dépend de votre classe de revenus choisie — de quelques centaines à plusieurs milliers d'euros par an.
      </p>
      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">📊 À retenir sur la CFE</p>
        <p className="text-sm text-gray-600">
          L'adhésion à la CFE doit se faire dans les <strong>6 mois</strong> suivant le départ à l'étranger (ou dans les 10 ans pour la retraite seule). Passé ce délai, vous ne pouvez plus adhérer pour les périodes passées. Beaucoup d'expatriés l'apprennent trop tard. Si vous êtes actuellement à l'étranger sans CFE, vérifiez votre situation sur cfe.fr dès aujourd'hui.
        </p>
      </div>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les accords bilatéraux : la clé pour ne pas perdre vos années à l'étranger
      </h2>
      <p className="text-gray-700 mb-4">
        La France a signé des <strong>accords bilatéraux de sécurité sociale</strong> avec plus de 40 pays. Ces accords permettent de <strong>totaliser les périodes d'assurance</strong> (trimestres) acquises dans chaque pays pour l'ouverture des droits à la retraite — même si chaque pays verse sa pension séparément.
      </p>
      <p className="text-gray-700 mb-6">
        Concrètement : si vous avez travaillé 15 ans en France et 10 ans au Maroc (accord bilatéral), les 25 années combinées servent à vérifier si vous atteignez le taux plein. Chaque pays verse ensuite sa quote-part de pension proportionnellement aux années cotisées chez lui.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Pays clés avec accord bilatéral France</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Zone</th>
              <th className="text-left p-3 rounded-tr-lg">Pays couverts</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Union Européenne</td>
              <td className="p-3">Tous les pays UE + EEE + Suisse (règlement européen)</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Amérique du Nord</td>
              <td className="p-3">Canada, USA, Québec (accord séparé)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Maghreb</td>
              <td className="p-3">Maroc, Algérie, Tunisie</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Autres</td>
              <td className="p-3">Japon, Corée du Sud, Brésil, Inde, Australie, et +30 autres</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">⚠️ Pays sans accord bilatéral</p>
        <p className="text-sm text-gray-600">
          Si vous avez travaillé dans un pays sans accord (certains pays d'Asie du Sud-Est, Afrique subsaharienne, Moyen-Orient hors accords spécifiques), vos années là-bas ne seront pas prises en compte pour le taux plein français. Vous devrez liquider les droits locaux séparément — si le pays dispose d'un régime de retraite obligatoire.
        </p>
      </div>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Cas concrets : combien touche un expatrié à la retraite ?
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Cas 1 — Sophie, 20 ans en France puis 15 ans en Allemagne</h3>
      <p className="text-gray-700 mb-4">
        Sophie a travaillé 20 ans en France comme cadre, puis 15 ans en Allemagne pour une multinationale (non détachée). Elle rentre en France à 58 ans pour ses dernières années de carrière.
      </p>
      <p className="text-gray-700 mb-6">
        À la retraite : <strong>pension française</strong> calculée sur ses 20 ans + ses années de retour, <strong>pension allemande</strong> (Deutsche Rentenversicherung) calculée sur ses 15 ans allemands. Les deux pensions s'additionnent. L'accord UE permet de totaliser les périodes pour vérifier le taux plein. Sophie touche deux pensions séparées, versées par chaque caisse nationale.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Cas 2 — Thomas, 30 ans au Japon sans CFE</h3>
      <p className="text-gray-700 mb-6">
        Thomas est parti au Japon à 28 ans pour rejoindre une entreprise locale. Il n'a pas adhéré à la CFE. Il rentre en France à 58 ans avec 0 trimestre validé en France entre 28 et 58 ans. Son seul espoir : les 10 ans de cotisation en France avant son départ + les 6 dernières années. Accord bilatéral France-Japon existant — ses années japonaises permettent de totaliser pour le taux plein, mais la pension française sera très faible. La pension japonaise (kosei nenkin) sera la principale.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Comment liquider sa retraite quand on a cotisé dans plusieurs pays
      </h2>
      <p className="text-gray-700 mb-4">
        La liquidation d'une retraite multi-pays est plus complexe mais pas insurmontable. Les étapes clés :
      </p>
      <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6 ml-2">
        <li><strong>Récupérez votre relevé de carrière français</strong> sur info-retraite.fr — vérifiez que les périodes françaises sont complètes.</li>
        <li><strong>Contactez les caisses étrangères</strong> de chaque pays où vous avez cotisé pour obtenir votre relevé de droits locaux.</li>
        <li><strong>Informez l'Assurance Retraite française</strong> de vos périodes à l'étranger — ils coordonnent avec les caisses étrangères si un accord existe.</li>
        <li><strong>Déposez une demande de retraite dans chaque pays</strong> séparément (les demandes ne se transmettent pas automatiquement entre pays, sauf dans l'UE).</li>
        <li><strong>Anticipez les délais</strong> : la liquidation multi-pays peut prendre 12 à 24 mois. Déposez vos demandes 18 mois avant la date souhaitée.</li>
      </ol>

      {/* Section 6 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les pièges à éviter absolument
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Ne pas confondre "trimestres totalisés" et "trimestres cotisés"</h3>
      <p className="text-gray-700 mb-4">
        La totalisation des périodes étrangères sert uniquement à <strong>vérifier si vous avez le taux plein</strong>. Elle n'augmente pas votre pension française. La pension de base française est calculée uniquement sur vos trimestres <strong>cotisés en France</strong> et votre salaire annuel moyen français.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">La règle du prorata</h3>
      <p className="text-gray-700 mb-6">
        Même si vous atteignez le taux plein grâce à la totalisation, la pension française sera calculée <strong>au prorata</strong> des trimestres français sur le total de votre carrière. Exemple : 20 ans en France sur 40 ans de carrière totale = 50% de la pension théorique à taux plein.
      </p>

      {/* Checklist */}
      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Plan d'action pour l'expatrié qui prépare sa retraite</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Vérifier son relevé de carrière sur info-retraite.fr (périodes françaises)</li>
          <li><strong>2.</strong> Si encore à l'étranger : vérifier si une adhésion CFE est encore possible sur cfe.fr</li>
          <li><strong>3.</strong> Lister tous les pays où vous avez cotisé et vérifier l'existence d'un accord bilatéral</li>
          <li><strong>4.</strong> Contacter les caisses étrangères pour obtenir vos relevés de droits locaux</li>
          <li><strong>5.</strong> Anticiper : déposer les demandes de retraite 18 mois avant la date souhaitée</li>
          <li><strong>6.</strong> Compenser les années manquantes via PER ou épargne complémentaire</li>
        </ol>
      </div>

      {/* Internal links */}
      <div className="border-t border-gray-100 pt-8 mb-10">
        <p className="text-sm text-gray-500 mb-3">Articles liés :</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/trimestres-manquants-comment-les-recuperer" className="text-[#1D9E75] hover:underline text-sm">
            Trimestres manquants : toutes les solutions en 2026 →
          </Link>
          <Link href="/blog/per-combien-verser-selon-age" className="text-[#1D9E75] hover:underline text-sm">
            PER : combien verser selon son âge ? →
          </Link>
          <Link href="/blog/rachat-trimestres-retraite-rentable" className="text-[#1D9E75] hover:underline text-sm">
            Rachat de trimestres : est-ce vraiment rentable ? →
          </Link>
        </div>
      </div>

      {/* Sources */}
      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ cfe.fr — Caisse des Français de l'Étranger, adhésion et cotisations</p>
        <p>→ info-retraite.fr — Relevé de carrière, droits multi-régimes</p>
        <p>→ service-public.fr — Accords bilatéraux de sécurité sociale</p>
        <p>→ cleiss.fr — Centre de Liaisons Européennes et Internationales de Sécurité Sociale</p>
        <p className="mt-2 italic">Les règles varient selon les pays et les accords en vigueur. Consultez le CLEISS pour votre situation spécifique.</p>
      </div>

      {/* CTA */}
      <div className="bg-[#F9EBE4] rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-[#0F1F3D] mb-2">
          Calculez votre retraite en 2 minutes
        </h3>
        <p className="text-gray-500 mb-6 text-sm">
          Diagnostic gratuit et personnalisé selon votre statut et votre situation.
        </p>
        <Link
          href="/diagnostic"
          className="inline-block bg-gradient-to-r from-[#10D98A] to-[#2D9CDB] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Faire mon diagnostic gratuit →
        </Link>
      </div>
    </article>
  );
}
