// app/blog/retraite-travail-suisse/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Retraite des Français qui ont travaillé en Suisse : AVS, LPP et droits français | Happy Retraite",
  description:
    "Frontalier ou expatrié en Suisse : comment récupérer vos droits AVS et LPP, les coordonner avec votre retraite française, et éviter les pièges de la liquidation.",
};

export default function RetraiteTravailSuisse() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Expatrié
          </span>
          <span className="text-gray-400 text-sm">9 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite des Français qui ont travaillé en Suisse : AVS, LPP et coordination avec la France
        </h1>
        <p className="text-lg text-gray-500">
          Frontalier, détaché ou expatrié en Suisse — des centaines de milliers de Français ont cotisé au système suisse. AVS, LPP, remboursement du 2e pilier : voici comment récupérer vos droits sans en perdre.
        </p>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        Environ <strong>200 000 frontaliers français</strong> traversent la frontière chaque jour pour travailler en Suisse. Des dizaines de milliers d'autres y ont vécu plusieurs années avant de rentrer. Pourtant, la question de la retraite suisse reste l'une des plus mal comprises : AVS, LPP, libre passage, remboursement du 2e pilier — autant de mécanismes qui peuvent représenter des dizaines ou centaines de milliers de francs suisses, et que beaucoup ne récupèrent jamais faute d'information.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le système de retraite suisse : les 3 piliers
      </h2>
      <p className="text-gray-700 mb-4">
        La Suisse organise sa retraite autour de trois piliers distincts. En tant que travailleur en Suisse, vous cotisez obligatoirement aux deux premiers.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Pilier</th>
              <th className="text-left p-3">Nom</th>
              <th className="text-left p-3">Obligatoire ?</th>
              <th className="text-left p-3 rounded-tr-lg">Équivalent français</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">1er pilier</td>
              <td className="p-3">AVS (Assurance Vieillesse et Survivants)</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Oui</td>
              <td className="p-3">Retraite de base (CNAV)</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">2e pilier</td>
              <td className="p-3">LPP (Prévoyance Professionnelle)</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Oui (salaire &gt; 22 050 CHF)</td>
              <td className="p-3">Retraite complémentaire (AGIRC-ARRCO)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">3e pilier</td>
              <td className="p-3">Prévoyance individuelle (3a/3b)</td>
              <td className="p-3">Volontaire</td>
              <td className="p-3">PER / Assurance-vie</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le 1er pilier (AVS) : ce que vous récupérez à la retraite
      </h2>
      <p className="text-gray-700 mb-4">
        L'AVS est le régime de retraite de base suisse. En tant que travailleur en Suisse, vous cotisez à l'AVS sur l'intégralité de votre salaire, sans plafond. L'accord bilatéral <strong>France-Suisse sur la sécurité sociale</strong> permet de totaliser les périodes cotisées dans les deux pays pour l'ouverture des droits.
      </p>
      <p className="text-gray-700 mb-4">
        Concrètement : si vous avez travaillé 15 ans en France et 12 ans en Suisse, les 27 années combinées servent à vérifier si vous atteignez les conditions de retraite dans chaque pays. Chaque pays verse ensuite sa pension proportionnellement aux années cotisées chez lui.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Montants AVS 2026</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Durée de cotisation en Suisse</th>
              <th className="text-left p-3 rounded-tr-lg">Pension AVS mensuelle estimée</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">5 ans</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~180–350 CHF/mois</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3">10 ans</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~360–700 CHF/mois</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">20 ans</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~720–1 400 CHF/mois</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3">Carrière complète (44 ans)</td>
              <td className="p-3 text-[#1D9E75] font-semibold">1 225–2 450 CHF/mois</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        Fourchettes 2026. La pension exacte dépend du revenu moyen et des années de cotisation. Simulez sur ahv-iv.ch.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">⚠️ Âge de la retraite AVS en 2026</p>
        <p className="text-sm text-gray-600">
          Depuis la réforme AVS 21 entrée en vigueur en 2024, l'âge de la retraite en Suisse est de <strong>65 ans pour les hommes et les femmes</strong> (passage progressif de 64 à 65 ans pour les femmes entre 2025 et 2028). Vous pouvez anticiper ou différer de 1 à 5 ans, avec des ajustements de pension. Si vous partez à 64 ans en France, vous devrez attendre 65 ans pour liquider l'AVS — ou accepter une réduction.
        </p>
      </div>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le 2e pilier (LPP) : le capital qui vous appartient — et que beaucoup oublient
      </h2>
      <p className="text-gray-700 mb-4">
        Le 2e pilier est la grande spécificité du système suisse. Contrairement à l'AVS (régime par répartition), le LPP fonctionne par <strong>capitalisation individuelle</strong> : chaque franc cotisé est mis de côté sur un compte personnel auprès d'une institution de prévoyance. Ce capital vous appartient.
      </p>
      <p className="text-gray-700 mb-6">
        Pour un travailleur qui a eu un bon salaire en Suisse pendant 10 à 15 ans, le capital LPP accumulé peut représenter <strong>50 000 à 200 000 CHF</strong> — parfois bien plus. C'est de l'argent qui vous revient, soit sous forme de rente viagère à la retraite, soit en capital (selon les conditions de la caisse de pension).
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Le compte de libre passage : ce qui se passe quand vous quittez la Suisse</h3>
      <p className="text-gray-700 mb-4">
        Quand vous quittez un emploi en Suisse sans prendre votre retraite, votre capital LPP est transféré sur un <strong>compte de libre passage</strong> (Freizügigkeitskonto) — une sorte de compte bloqué jusqu'à la retraite. Si vous quittez définitivement la Suisse pour un pays hors UE/AISSE, vous pouvez demander le <strong>remboursement en capital</strong> de la partie obligatoire LPP.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">⚠️ France et remboursement LPP : les règles ont changé</p>
        <p className="text-sm text-gray-600">
          La France est membre de l'UE. En vertu de l'accord bilatéral Suisse-UE, le remboursement anticipé de la partie <strong>obligatoire</strong> du LPP n'est <strong>plus possible</strong> pour les résidents français depuis 2010. Vous devrez attendre l'âge de la retraite pour percevoir votre LPP (rente ou capital selon la caisse). La partie <strong>surobligatoire</strong> (au-delà du minimum légal) peut dans certains cas être remboursée anticipativement — vérifiez avec votre caisse de pension.
        </p>
      </div>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Frontalier vs expatrié : deux situations différentes
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Le frontalier franco-suisse</h3>
      <p className="text-gray-700 mb-4">
        Le frontalier vit en France et travaille en Suisse. Il cotise à l'AVS et au LPP suisses comme tout salarié local. Sa retraite française (régime général + AGIRC-ARRCO) continue de se constituer via des cotisations volontaires à la CFE ou sera partielle si aucune cotisation française n'est maintenue.
      </p>
      <p className="text-gray-700 mb-6">
        À la retraite, un frontalier avec 30 ans de carrière exclusivement en Suisse aura une <strong>pension AVS suisse + rente LPP suisse</strong>, mais peu ou pas de pension française. L'accord bilatéral permet de totaliser les périodes pour le taux plein, mais la pension française sera très faible si peu d'années françaises ont été cotisées.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">L'expatrié qui rentre en France</h3>
      <p className="text-gray-700 mb-6">
        Si vous avez travaillé quelques années en Suisse puis êtes rentré en France pour continuer votre carrière, vous avez des droits dans les deux pays. À la retraite, vous liquidez les deux pensions séparément : la retraite française (CNAV + AGIRC-ARRCO) auprès de votre caisse française, et la pension AVS + rente LPP auprès des caisses suisses. Les délais de liquidation peuvent être longs — anticipez 12 à 18 mois.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les erreurs les plus fréquentes — et comment les éviter
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Oublier son compte de libre passage</h3>
      <p className="text-gray-700 mb-4">
        Des centaines de millions de francs suisses dorment dans des comptes de libre passage oubliés par d'anciens travailleurs. Si vous avez quitté un emploi suisse sans suivre votre LPP, il est peut-être sur un compte de libre passage que vous avez perdu de vue. La centrale du 2e pilier suisse (<strong>zentralstelle2saeulen.ch</strong>) permet de retrouver des avoirs oubliés.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Ne pas demander son relevé AVS</h3>
      <p className="text-gray-700 mb-4">
        Votre relevé de compte AVS (Kontoauszug) indique tous les revenus pris en compte et les années de cotisation. Il est disponible sur demande auprès de la caisse de compensation cantonale. Vérifiez que toutes vos années de travail en Suisse y figurent — les erreurs existent.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Mal coordonner les dates de liquidation</h3>
      <p className="text-gray-700 mb-6">
        L'âge de retraite en France (64 ans) et en Suisse (65 ans) ne coïncident pas. Si vous liquidez votre retraite française à 64 ans, vous devez attendre 65 ans pour l'AVS — ou accepter une réduction de 6,8% par année d'anticipation. Planifiez cette décision au moins 3 ans avant votre date de départ.
      </p>

      {/* Checklist */}
      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Plan d'action pour un Français ayant travaillé en Suisse</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Demander son relevé AVS auprès de la caisse de compensation cantonale</li>
          <li><strong>2.</strong> Localiser son capital LPP (compte de libre passage ou caisse de pension actuelle) sur zentralstelle2saeulen.ch</li>
          <li><strong>3.</strong> Vérifier son relevé de carrière français sur info-retraite.fr</li>
          <li><strong>4.</strong> Anticiper la différence d'âge de retraite (64 ans France vs 65 ans Suisse)</li>
          <li><strong>5.</strong> Déposer les demandes de retraite dans les deux pays 18 mois avant la date souhaitée</li>
          <li><strong>6.</strong> Compenser les éventuelles années manquantes côté français via PER</li>
        </ol>
      </div>

      {/* Internal links */}
      <div className="border-t border-gray-100 pt-8 mb-10">
        <p className="text-sm text-gray-500 mb-3">Articles liés :</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/retraite-francais-expatries" className="text-[#1D9E75] hover:underline text-sm">
            Retraite des Français expatriés : comment récupérer vos droits →
          </Link>
          <Link href="/blog/per-combien-verser-selon-age" className="text-[#1D9E75] hover:underline text-sm">
            PER : combien verser selon son âge ? →
          </Link>
          <Link href="/blog/trimestres-manquants-solutions" className="text-[#1D9E75] hover:underline text-sm">
            Trimestres manquants : toutes les solutions en 2026 →
          </Link>
        </div>
      </div>

      {/* Sources */}
      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ ahv-iv.ch — AVS, simulation de pension, relevé de compte</p>
        <p>→ zentralstelle2saeulen.ch — Recherche d'avoirs LPP oubliés</p>
        <p>→ cleiss.fr — Accord bilatéral France-Suisse sur la sécurité sociale</p>
        <p>→ info-retraite.fr — Droits français, coordination internationale</p>
        <p>→ service-public.fr — Frontaliers, retraite à l'étranger</p>
        <p className="mt-2 italic">Les règles AVS et LPP évoluent. Vérifiez les montants actualisés sur ahv-iv.ch et auprès de votre caisse de pension suisse.</p>
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
