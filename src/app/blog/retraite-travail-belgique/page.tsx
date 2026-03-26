// app/blog/retraite-travail-belgique/page.tsx

import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { BlogCTAMid } from "@/components/BlogCTA";

export const metadata = {
  title: "Retraite des Français qui ont travaillé en Belgique : ONP, coordination et droits | Happy Retraite",
  description:
    "Frontalier ou expatrié en Belgique : comment coordonner votre pension belge (ONP) avec votre retraite française, éviter les pièges et maximiser vos droits.",
};

export default function RetraiteTravailBelgique() {
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
          Retraite des Français qui ont travaillé en Belgique : pension ONP et coordination avec la France
        </h1>
        <p className="text-lg text-gray-500">
          Frontalier franco-belge ou expatrié en Belgique — vous cotisez à l'ONP belge tout en conservant des droits français. Deux systèmes, deux pensions, une coordination souvent mal anticipée. Voici le guide complet.
        </p>
      </div>

      <p className="text-gray-700 mb-6">
        Environ <strong>200 000 frontaliers français</strong> traversent chaque jour la frontière belge pour travailler. Des dizaines de milliers d'autres y ont vécu plusieurs années. Pourtant, la coordination entre la pension belge et la retraite française reste l'un des sujets les plus mal maîtrisés — avec des conséquences financières parfois importantes à la liquidation.
      </p>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le système de retraite belge : l'ONP
      </h2>
      <p className="text-gray-700 mb-4">
        En Belgique, la retraite des salariés est gérée par l'<strong>ONP</strong> (Office National des Pensions). Le régime belge fonctionne par <strong>répartition</strong>, comme le régime français, mais avec des règles de calcul très différentes.
      </p>
      <p className="text-gray-700 mb-6">
        La pension belge est calculée sur la base de la <strong>carrière complète</strong> (45 ans pour une pension à taux plein) et du <strong>salaire annuel moyen</strong> sur l'ensemble de la carrière. Le taux est de <strong>60%</strong> du salaire annuel moyen pour un isolé, et <strong>75%</strong> pour un ménage (si le conjoint est à charge).
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Comparatif France vs Belgique</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Critère</th>
              <th className="text-left p-3">France</th>
              <th className="text-left p-3 rounded-tr-lg">Belgique</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Âge légal de retraite</td>
              <td className="p-3">64 ans</td>
              <td className="p-3">65 ans (66 ans en 2025, 67 ans en 2030)</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Carrière complète</td>
              <td className="p-3">172 trimestres (43 ans)</td>
              <td className="p-3">45 ans</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Base de calcul</td>
              <td className="p-3">25 meilleures années</td>
              <td className="p-3">Toute la carrière</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Taux plein</td>
              <td className="p-3">50% du salaire annuel moyen</td>
              <td className="p-3">60% (isolé) / 75% (ménage)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Retraite complémentaire</td>
              <td className="p-3">AGIRC-ARRCO obligatoire</td>
              <td className="p-3">2e pilier (pension complémentaire employeur)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        L'accord bilatéral France-Belgique : la totalisation des périodes
      </h2>
      <BlogCTAMid context="votre situation de retraite" />
      <p className="text-gray-700 mb-4">
        La France et la Belgique sont toutes deux membres de l'UE. Le <strong>règlement européen de coordination</strong> (883/2004) s'applique : les périodes cotisées dans chaque pays peuvent être <strong>totalisées</strong> pour vérifier les conditions d'ouverture des droits (taux plein, âge minimum).
      </p>
      <p className="text-gray-700 mb-6">
        Concrètement : si vous avez travaillé 20 ans en France et 15 ans en Belgique, les 35 années combinées servent à vérifier si vous atteignez le taux plein dans chaque pays. Chaque pays verse ensuite sa pension <strong>au prorata</strong> des années cotisées chez lui.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">📊 Exemple concret : Pierre, 20 ans en France + 15 ans en Belgique</p>
        <p className="text-sm text-gray-600">
          Salaire moyen France : 35 000€/an. Salaire moyen Belgique : 42 000€/an.
          <br/>→ <strong>Pension française</strong> : calculée sur 20 ans de cotisation française, avec totalisation pour le taux plein. Environ 800-950€/mois.
          <br/>→ <strong>Pension belge</strong> : calculée sur 15 ans belges, au prorata (15/45 de carrière complète). Environ 600-750€/mois.
          <br/>→ <strong>Total estimé</strong> : 1 400-1 700€/mois cumulé des deux pays.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le 2e pilier belge : la pension complémentaire à ne pas oublier
      </h2>
      <p className="text-gray-700 mb-4">
        Comme en Suisse, la Belgique dispose d'un <strong>2e pilier</strong> de retraite complémentaire — la pension complémentaire d'entreprise (PCE). Elle est constituée par les cotisations de l'employeur (et parfois du salarié) auprès d'une assurance groupe ou d'un fonds de pension.
      </p>
      <p className="text-gray-700 mb-6">
        Contrairement au LPP suisse, le 2e pilier belge peut en général être <strong>récupéré en capital</strong> à la retraite, même pour un résident français. Le montant varie énormément selon l'employeur — de quelques milliers à plusieurs dizaines de milliers d'euros pour des carrières longues dans de grandes entreprises.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">⚠️ Comment retrouver son 2e pilier belge</p>
        <p className="text-sm text-gray-600">
          La <strong>DB2P</strong> (base de données des pensions complémentaires belges) recense tous les droits accumulés. Consultez-la sur mypension.be — vous pouvez y voir l'ensemble de vos droits de pension belges (1er et 2e pilier) en vous connectant avec votre eID ou via itsme.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les pièges spécifiques aux frontaliers franco-belges
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">L'âge de retraite belge qui augmente</h3>
      <p className="text-gray-700 mb-4">
        La Belgique est en train de relever progressivement son âge légal de retraite : <strong>66 ans en 2025, 67 ans en 2030</strong>. Si vous partez à la retraite française à 64 ans, vous devrez attendre 66 ou 67 ans pour liquider votre pension belge — ou accepter une pension réduite. Anticipez cette décision au moins 3 ans à l'avance.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">La règle de l'unicité de législation</h3>
      <p className="text-gray-700 mb-4">
        Pendant votre activité, vous ne pouvez cotiser qu'à <strong>un seul système</strong> à la fois. Si vous travaillez en Belgique, vous cotisez au régime belge — pas au français. Vos droits français sont "gelés" pendant cette période (sauf CFE volontaire).
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">La fiscalité de la pension belge en France</h3>
      <p className="text-gray-700 mb-6">
        Si vous résidez en France à la retraite, votre pension belge est en principe <strong>imposable en France</strong> (convention fiscale France-Belgique de 1964). Elle s'ajoute à votre pension française pour le calcul de l'impôt sur le revenu. Anticipez cet impact fiscal dans votre planification.
      </p>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Comment liquider sa retraite quand on a cotisé en France et en Belgique
      </h2>
      <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8 ml-2">
        <li><strong>Vérifiez vos droits français</strong> sur info-retraite.fr — assurez-vous que vos périodes françaises sont complètes.</li>
        <li><strong>Consultez mypension.be</strong> pour voir l'ensemble de vos droits belges (1er et 2e pilier).</li>
        <li><strong>Déposez votre demande de retraite française</strong> auprès de votre CARSAT — elle se chargera de contacter l'ONP belge grâce au règlement européen.</li>
        <li><strong>Déposez également une demande auprès de l'ONP</strong> directement (mypension.be) — ne pas attendre que la France le fasse automatiquement.</li>
        <li><strong>Anticipez les délais</strong> : la liquidation franco-belge peut prendre 12 à 18 mois. Déposez 18 mois avant la date souhaitée.</li>
      </ol>

      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Plan d'action pour un Français ayant travaillé en Belgique</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Vérifier ses droits français sur info-retraite.fr</li>
          <li><strong>2.</strong> Consulter mypension.be pour les droits belges (1er et 2e pilier)</li>
          <li><strong>3.</strong> Anticiper la différence d'âge légal (64 ans France vs 66-67 ans Belgique)</li>
          <li><strong>4.</strong> Prévoir la fiscalité de la pension belge en France</li>
          <li><strong>5.</strong> Déposer les demandes dans les deux pays 18 mois avant la date souhaitée</li>
          <li><strong>6.</strong> Compenser les années manquantes côté français via PER si nécessaire</li>
        </ol>
      </div>

      <RelatedArticles currentSlug="retraite-travail-belgique" />

      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ mypension.be — Droits pension belge, 1er et 2e pilier</p>
        <p>→ onprvp.fgov.be — Office National des Pensions belge</p>
        <p>→ cleiss.fr — Accord France-Belgique, coordination européenne</p>
        <p>→ info-retraite.fr — Droits français, coordination internationale</p>
        <p className="mt-2 italic">Les règles belges évoluent (âge légal en hausse). Vérifiez sur mypension.be pour votre situation actuelle.</p>
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
