// app/blog/retraite-apres-divorce/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Retraite après divorce : comment le partage impacte vos droits | Happy Retraite",
  description:
    "Divorce et retraite : pension de réversion, partage des droits, prestation compensatoire. Ce que le divorce change vraiment pour votre future pension.",
};

export default function RetraiteApresDivorce() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Situations de vie
          </span>
          <span className="text-gray-400 text-sm">7 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite après divorce : ce que le partage change vraiment pour vos droits
        </h1>
        <p className="text-lg text-gray-500">
          Le divorce impacte la retraite de façon souvent sous-estimée. Pension de réversion, droits propres réduits, partage des points — voici ce que tout divorcé doit savoir avant de planifier sa retraite.
        </p>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        "Mon ex-mari avait un meilleur salaire que moi. Je lui ai consacré des années à m'occuper des enfants. À la retraite, je me retrouve avec une pension de 900€." Ce témoignage, des milliers de femmes divorcées le vivent chaque année. En France, le divorce est l'un des facteurs les plus fréquents de <strong>retraite insuffisante</strong> — surtout pour les femmes qui ont réduit leur activité pendant le mariage. Voici les mécanismes à connaître, et les leviers pour limiter l'impact.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Ce que le divorce ne change PAS : vos droits propres restent les vôtres
      </h2>
      <p className="text-gray-700 mb-4">
        Premier point rassurant : vos droits à la retraite acquis pendant le mariage vous appartiennent entièrement. Le divorce ne "partage" pas les trimestres cotisés ni les points de retraite accumulés. Chaque ex-conjoint conserve intégralement ses droits propres, constitués pendant et hors mariage.
      </p>
      <p className="text-gray-700 mb-6">
        Le problème est ailleurs : si vous avez travaillé à temps partiel, arrêté de travailler pour élever les enfants, ou accepté des postes moins rémunérés pour des raisons familiales, <strong>votre pension propre sera structurellement plus faible</strong> — indépendamment du divorce. Et une fois divorcé(e), vous perdez le droit à la pension de réversion de votre ex-conjoint de son vivant.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La pension de réversion après divorce : les règles précises
      </h2>
      <p className="text-gray-700 mb-4">
        La <strong>pension de réversion</strong> est versée au conjoint survivant après le décès du retraité. En cas de divorce, les règles diffèrent selon le régime :
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Régime général (salariés du privé)</h3>
      <p className="text-gray-700 mb-4">
        Le divorce <strong>n'exclut pas</strong> du droit à la réversion. Un ex-conjoint divorcé peut percevoir une pension de réversion après le décès de son ex, à condition d'avoir été marié (le PACS et le concubinage n'ouvrent pas droit à la réversion). Si le défunt s'est remarié, la réversion est <strong>partagée</strong> entre l'ex-conjoint et le conjoint actuel, au prorata de la durée respective de chaque mariage.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Situation</th>
              <th className="text-left p-3">Droit à la réversion ?</th>
              <th className="text-left p-3 rounded-tr-lg">Quote-part</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">Divorcé(e), ex non remarié</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Oui</td>
              <td className="p-3">100% de la réversion</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3">Divorcé(e), ex remarié</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Oui (partiel)</td>
              <td className="p-3">Prorata durée mariage</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">PACS ou concubinage</td>
              <td className="p-3 text-red-500 font-semibold">Non</td>
              <td className="p-3">—</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3">Remarié(e) après divorce</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Oui (nouveau conjoint)</td>
              <td className="p-3">Selon durée du nouveau mariage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Fonctionnaires : règles différentes</h3>
      <p className="text-gray-700 mb-6">
        Pour les fonctionnaires, la réversion est réservée au <strong>conjoint au moment du décès</strong>. L'ex-conjoint divorcé <strong>n'y a pas droit</strong>, sauf si le jugement de divorce prévoit expressément une prestation compensatoire. C'est une différence majeure avec le régime général — et une mauvaise surprise pour beaucoup d'ex-conjoints de fonctionnaires.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">📊 Taux de réversion 2026</p>
        <p className="text-sm text-gray-600">
          Régime général : <strong>54%</strong> de la pension du défunt (sous conditions de ressources). AGIRC-ARRCO : <strong>60%</strong> sans condition de ressources. Fonctionnaires : <strong>50%</strong> du traitement indiciaire du défunt. Ces taux s'appliquent à la quote-part calculée selon la durée du mariage en cas de divorce.
        </p>
      </div>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La prestation compensatoire : un levier souvent négligé pour la retraite
      </h2>
      <p className="text-gray-700 mb-4">
        La <strong>prestation compensatoire</strong> versée lors du divorce compense la disparité de niveau de vie créée par le divorce. Elle peut être versée en capital ou en rente. Ce que beaucoup ignorent : elle peut être négociée en tenant compte de l'écart de retraite future.
      </p>
      <p className="text-gray-700 mb-6">
        Si votre ex-conjoint a une carrière complète et une pension estimée à 2 500€/mois, et que vous aurez 900€/mois à cause des années non cotisées pour la famille — cet écart de <strong>1 600€/mois</strong> peut légitimement entrer dans le calcul de la prestation compensatoire. Les juges aux affaires familiales prennent de plus en plus en compte les projections de retraite dans ces calculs.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les trimestres "famille" : ce qui compense partiellement les années non cotisées
      </h2>
      <p className="text-gray-700 mb-4">
        Le système de retraite français prévoit des <strong>majorations de durée d'assurance</strong> pour les parents qui ont élevé des enfants. Ces trimestres "famille" s'appliquent indépendamment du statut marital.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Dispositif</th>
              <th className="text-left p-3">Trimestres accordés</th>
              <th className="text-left p-3 rounded-tr-lg">Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Majoration pour enfant (maternité)</td>
              <td className="p-3 text-[#1D9E75] font-semibold">4 trimestres/enfant</td>
              <td className="p-3">Mère automatiquement</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Majoration éducation</td>
              <td className="p-3 text-[#1D9E75] font-semibold">4 trimestres/enfant</td>
              <td className="p-3">À partager entre parents (choix)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Congé parental</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Jusqu'à 3 ans</td>
              <td className="p-3">Assimilés trimestres cotisés</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-medium">Aidant familial</td>
              <td className="p-3 text-[#1D9E75] font-semibold">Variable</td>
              <td className="p-3">Selon durée de l'aide</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 mb-6">
        Important : la majoration pour éducation (4 trimestres par enfant) peut être attribuée à l'un ou l'autre parent, ou partagée. En cas de divorce, si aucun choix n'a été fait dans les 6 mois suivant le 4e anniversaire de l'enfant, elle est attribuée à la mère par défaut. Vérifiez votre relevé de carrière — ces trimestres sont parfois mal enregistrés.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le cas du conjoint qui a arrêté de travailler : reconstruire ses droits après divorce
      </h2>
      <p className="text-gray-700 mb-4">
        C'est la situation la plus difficile : vous avez arrêté ou fortement réduit votre activité pendant le mariage, et vous vous retrouvez divorcé(e) à 45 ou 50 ans avec une pension prévisionnelle très faible.
      </p>
      <p className="text-gray-700 mb-6">
        La bonne nouvelle : il reste du temps pour agir. Avec 15 à 20 ans devant vous avant la retraite, plusieurs leviers sont disponibles.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Reprendre une activité à temps plein</h3>
      <p className="text-gray-700 mb-4">
        Chaque année de cotisation à temps plein reconstruit des droits. Un salaire de 30 000€ brut pendant 15 ans génère une pension de base supplémentaire d'environ <strong>400 à 500€/mois</strong>. C'est significatif, mais souvent insuffisant seul.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Le PER comme outil de rattrapage</h3>
      <p className="text-gray-700 mb-6">
        Le Plan d'Épargne Retraite est particulièrement adapté aux situations de reconstruction post-divorce. Les versements sont déductibles des revenus imposables, et le capital est disponible à la retraite. Pour quelqu'un qui reprend une activité à 45 ans avec un salaire de 35 000€, verser <strong>300€/mois</strong> sur un PER pendant 19 ans génère un capital d'environ <strong>130 000 à 150 000€</strong> à 64 ans — soit une rente de 540 à 625€/mois.
      </p>

      {/* Checklist */}
      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Les actions prioritaires après un divorce</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Vérifier son relevé de carrière sur info-retraite.fr — identifier les trimestres manquants</li>
          <li><strong>2.</strong> Vérifier que les trimestres famille (éducation enfants) sont bien enregistrés</li>
          <li><strong>3.</strong> Évaluer son droit à la réversion en cas de décès de l'ex-conjoint (selon régime)</li>
          <li><strong>4.</strong> Lors des négociations de divorce : faire estimer les pensions futures respectives pour calibrer la prestation compensatoire</li>
          <li><strong>5.</strong> Ouvrir un PER pour combler l'écart si reprise d'activité tardive</li>
          <li><strong>6.</strong> Consulter un CGP indépendant pour un bilan patrimonial global post-divorce</li>
        </ol>
      </div>

      {/* Internal links */}
      <div className="border-t border-gray-100 pt-8 mb-10">
        <p className="text-sm text-gray-500 mb-3">Articles liés :</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/trimestres-manquants-solutions" className="text-[#1D9E75] hover:underline text-sm">
            Trimestres manquants : toutes les solutions en 2026 →
          </Link>
          <Link href="/blog/per-combien-verser-selon-age" className="text-[#1D9E75] hover:underline text-sm">
            PER : combien verser selon son âge ? →
          </Link>
          <Link href="/blog/retraite-progressive-fonctionnaires" className="text-[#1D9E75] hover:underline text-sm">
            Retraite progressive pour les fonctionnaires →
          </Link>
        </div>
      </div>

      {/* Sources */}
      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ service-public.fr — Pension de réversion, conditions et taux</p>
        <p>→ info-retraite.fr — Relevé de carrière, trimestres famille</p>
        <p>→ legislation.fr — Code de la sécurité sociale, articles sur la réversion</p>
        <p>→ cnav.fr — Majoration de durée d'assurance pour enfants</p>
        <p className="mt-2 italic">Les règles de réversion varient selon les régimes. Vérifiez votre situation spécifique sur service-public.fr ou auprès de votre caisse de retraite.</p>
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
