// app/blog/retraite-travail-luxembourg/page.tsx

import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { BlogCTAMid } from "@/components/BlogCTA";

export const metadata = {
  title: "Retraite des Français qui ont travaillé au Luxembourg : CNAP et coordination | Happy Retraite",
  description:
    "Frontalier franco-luxembourgeois : pension luxembourgeoise (CNAP) généreuse mais complexe à coordonner avec la France. Le guide complet 2026.",
};

export default function RetraiteTravailLuxembourg() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Expatrié
          </span>
          <span className="text-gray-400 text-sm">8 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite des Français qui ont travaillé au Luxembourg : CNAP, pension généreuse et coordination franco-luxembourgeoise
        </h1>
        <p className="text-lg text-gray-500">
          Le Luxembourg verse l'une des pensions les plus généreuses d'Europe. Mais pour un frontalier français, coordonner cette pension avec la retraite française est plus complexe qu'il n'y paraît. Voici ce qu'il faut savoir.
        </p>
      </div>

      <p className="text-gray-700 mb-6">
        Environ <strong>115 000 frontaliers français</strong> travaillent au Luxembourg — la plus grande concentration de frontaliers d'Europe rapportée à la taille du pays. Des salaires parmi les plus élevés d'Europe, une pension luxembourgeoise réputée généreuse... mais une coordination avec la retraite française que beaucoup anticipent mal. Résultat : des droits perdus, des délais non anticipés, et parfois de mauvaises surprises fiscales.
      </p>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le système de retraite luxembourgeois : la CNAP
      </h2>
      <p className="text-gray-700 mb-4">
        La retraite des salariés luxembourgeois est gérée par la <strong>CNAP</strong> (Caisse Nationale d'Assurance Pension). Le régime luxembourgeois est réputé pour sa générosité — avec un taux de remplacement parmi les plus élevés d'Europe occidentale.
      </p>
      <p className="text-gray-700 mb-6">
        La pension luxembourgeoise se compose de deux éléments : une <strong>pension forfaitaire</strong> (montant fixe par année d'assurance) et une <strong>pension proportionnelle</strong> (calculée sur les revenus cotisés). Le taux de remplacement peut atteindre <strong>85 à 90%</strong> du dernier salaire pour une carrière complète au Luxembourg — nettement supérieur à la France.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Comparatif France vs Luxembourg</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Critère</th>
              <th className="text-left p-3">France</th>
              <th className="text-left p-3 rounded-tr-lg">Luxembourg</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Âge légal de retraite</td>
              <td className="p-3">64 ans</td>
              <td className="p-3">65 ans (anticipée dès 57 ans sous conditions)</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Carrière complète</td>
              <td className="p-3">172 trimestres (43 ans)</td>
              <td className="p-3">40 ans</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Taux de remplacement</td>
              <td className="p-3">~50-60%</td>
              <td className="p-3">~85-90% (carrière complète)</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Retraite anticipée</td>
              <td className="p-3">Dès 62 ans (carrière longue)</td>
              <td className="p-3">Dès 57 ans (40 ans de cotisation)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Plafond pension</td>
              <td className="p-3">Plafond PASS</td>
              <td className="p-3">5× salaire social minimum (~12 000€/mois)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">📊 Exemple : Sophie, 25 ans au Luxembourg</p>
        <p className="text-sm text-gray-600">
          Salaire moyen au Luxembourg : 65 000€/an. Après 25 ans de cotisation à la CNAP :
          pension luxembourgeoise estimée <strong>~2 800-3 200€/mois</strong>.
          Si elle a également 15 ans de carrière française, sa pension française s'y ajoute : ~500-650€/mois.
          Total estimé : <strong>3 300-3 850€/mois</strong> — un niveau confortable, mais qui nécessite une liquidation bien coordonnée.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La retraite anticipée luxembourgeoise : une opportunité à saisir
      </h2>
      <BlogCTAMid context="votre situation de retraite" />
      <p className="text-gray-700 mb-4">
        C'est l'une des spécificités les plus attractives du système luxembourgeois : la retraite anticipée est possible dès <strong>57 ans</strong> avec 40 années d'assurance (tous pays UE confondus grâce à la totalisation). Pour un frontalier qui a commencé à travailler tôt, c'est une option à sérieusement évaluer.
      </p>
      <p className="text-gray-700 mb-6">
        Attention : la retraite anticipée luxembourgeoise à 57 ans ne signifie pas que vous pouvez liquider votre retraite française au même âge. Les deux systèmes ont des règles indépendantes. Vous pouvez percevoir votre pension luxembourgeoise dès 57 ans tout en continuant à travailler (ou non) et en reportant la liquidation française à 64 ans.
      </p>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La fiscalité : le point critique pour les frontaliers
      </h2>
      <p className="text-gray-700 mb-4">
        C'est souvent là que les frontaliers franco-luxembourgeois ont les plus mauvaises surprises. La convention fiscale France-Luxembourg prévoit que la pension luxembourgeoise est <strong>imposable au Luxembourg</strong> (et non en France) pour les anciens résidents luxembourgeois. Mais si vous résidez en France au moment de la retraite, les règles sont différentes.
      </p>
      <p className="text-gray-700 mb-6">
        Pour un <strong>frontalier résident français</strong> qui perçoit une pension luxembourgeoise : la pension est en principe imposable en <strong>France</strong>, avec un crédit d'impôt pour éviter la double imposition. Mais les règles sont complexes et ont évolué — consultez un conseiller fiscal spécialisé frontalier avant de prendre votre retraite.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">⚠️ Attention à la cotisation maladie sur la pension luxembourgeoise</p>
        <p className="text-sm text-gray-600">
          Si vous percevez une pension luxembourgeoise et résidez en France, vous pouvez être soumis à une cotisation maladie luxembourgeoise sur cette pension — même si vous êtes couvert par la Sécurité sociale française. Ce point est souvent source de litige. Vérifiez votre situation auprès de la CNS (Caisse Nationale de Santé luxembourgeoise) et de votre CPAM.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Comment liquider sa retraite franco-luxembourgeoise
      </h2>
      <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8 ml-2">
        <li><strong>Vérifiez vos droits luxembourgeois</strong> sur guichet.lu ou directement auprès de la CNAP — demandez votre relevé de carrière luxembourgeois.</li>
        <li><strong>Vérifiez vos droits français</strong> sur info-retraite.fr.</li>
        <li><strong>Évaluez l'option retraite anticipée</strong> : si vous avez 40 ans d'assurance tous pays confondus, la retraite luxembourgeoise dès 57 ans est peut-être envisageable.</li>
        <li><strong>Déposez votre demande auprès de la CNAP</strong> (cnap.lu) — les demandes ne se transmettent pas automatiquement entre pays, même dans l'UE.</li>
        <li><strong>Déposez votre demande française</strong> auprès de votre CARSAT — elle contactera la CNAP pour la coordination.</li>
        <li><strong>Anticipez la fiscalité</strong> : consultez un conseiller fiscal spécialisé frontalier avant la liquidation.</li>
      </ol>

      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Plan d'action pour un Français ayant travaillé au Luxembourg</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Demander son relevé de carrière CNAP sur guichet.lu</li>
          <li><strong>2.</strong> Vérifier ses droits français sur info-retraite.fr</li>
          <li><strong>3.</strong> Évaluer la retraite anticipée luxembourgeoise (dès 57 ans avec 40 ans d'assurance)</li>
          <li><strong>4.</strong> Anticiper la fiscalité de la pension luxembourgeoise en France</li>
          <li><strong>5.</strong> Déposer les demandes dans les deux pays 18 mois avant la date souhaitée</li>
          <li><strong>6.</strong> Vérifier la situation maladie (CNS Luxembourg vs CPAM France)</li>
        </ol>
      </div>

      <RelatedArticles currentSlug="retraite-travail-luxembourg" />

      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ cnap.lu — Caisse Nationale d'Assurance Pension luxembourgeoise</p>
        <p>→ guichet.lu — Portail officiel luxembourgeois, relevé de carrière</p>
        <p>→ cleiss.fr — Coordination France-Luxembourg, règlement européen</p>
        <p>→ info-retraite.fr — Droits français, coordination internationale</p>
        <p className="mt-2 italic">Les règles fiscales franco-luxembourgeoises sont complexes. Consultez un conseiller spécialisé pour votre situation personnelle.</p>
      </div>

      <div className="bg-[#F9EBE4] rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-[#0F1F3D] mb-2">Calculez votre retraite en 2 minutes</h3>
        <p className="text-gray-500 mb-6 text-sm">Diagnostic gratuit et personnalisé selon votre statut et votre situation.</p>
        <Link href="/diagnostic/intro" className="inline-block bg-gradient-to-r from-[#10D98A] to-[#2D9CDB] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
          Faire mon diagnostic gratuit →
        </Link>
      </div>
    </article>
  );
}
