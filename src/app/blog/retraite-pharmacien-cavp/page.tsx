// app/blog/retraite-pharmacien-cavp/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Retraite pharmacien : CAVP, cotisations 2026 et le choc du taux de remplacement | Happy Retraite",
  description:
    "Les pharmaciens libéraux cotisent à la CAVP. Résultat : un taux de remplacement souvent inférieur à 30%. Calcul de pension, cotisations, stratégies d'optimisation.",
};

export default function RetraitePharmacienCavp() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Professions libérales
          </span>
          <span className="text-gray-400 text-sm">8 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite pharmacien : CAVP, cotisations 2026 et le choc du taux de remplacement
        </h1>
        <p className="text-lg text-gray-500">
          Les pharmaciens libéraux ont souvent des revenus confortables — et une retraite qui déçoit. Avec un taux de remplacement autour de 25 à 35%, le choc à la liquidation est réel. Voici comment le comprendre et l'anticiper.
        </p>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        "Je gagnais 9 000€ nets par mois avec ma pharmacie. À la retraite, je touche 2 400€." Ce témoignage, des centaines de pharmaciens le vivent chaque année. La CAVP (Caisse d'Assurance Vieillesse des Pharmaciens) gère la retraite complémentaire de la profession — mais le système de points, combiné au plafonnement des cotisations, génère mécaniquement des taux de remplacement très faibles pour les hauts revenus. Décryptage.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La CAVP : comment fonctionne la retraite des pharmaciens libéraux
      </h2>
      <p className="text-gray-700 mb-4">
        La <strong>CAVP</strong> (Caisse d'Assurance Vieillesse des Pharmaciens) gère la retraite complémentaire d'environ <strong>33 000 pharmaciens libéraux</strong> en France. Comme pour les autres professions libérales, la retraite de base relève de la <strong>CNAVPL</strong>.
      </p>
      <p className="text-gray-700 mb-6">
        Le régime CAVP fonctionne par points : chaque année, vos cotisations achètent des points, dont la valeur est fixée annuellement. À la retraite, le nombre de points accumulé × la valeur du point = votre pension complémentaire annuelle.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Structure complète de la retraite pharmacien</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Régime</th>
              <th className="text-left p-3">Caisse</th>
              <th className="text-left p-3 rounded-tr-lg">Part de la pension totale</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Retraite de base</td>
              <td className="p-3">CNAVPL</td>
              <td className="p-3">15–25%</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Retraite complémentaire</td>
              <td className="p-3">CAVP</td>
              <td className="p-3">65–75%</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">ASV (conventionné)</td>
              <td className="p-3">CAVP / CPAM</td>
              <td className="p-3">Selon conventionnement</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-medium">Invalidité-décès</td>
              <td className="p-3">CAVP</td>
              <td className="p-3">Prévoyance uniquement</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Cotisations CAVP 2026 : le calcul concret
      </h2>
      <p className="text-gray-700 mb-4">
        Les cotisations CAVP sont calculées sur les bénéfices non commerciaux (BNC) pour les titulaires libéraux, avec une partie forfaitaire et une partie proportionnelle. Au-delà d'un certain plafond de revenus, les cotisations ne génèrent plus de droits supplémentaires proportionnels — c'est le mécanisme qui crée le faible taux de remplacement.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">BNC annuel</th>
              <th className="text-left p-3">Cotisation CNAVPL</th>
              <th className="text-left p-3">Cotisation CAVP</th>
              <th className="text-left p-3 rounded-tr-lg">Total retraite/an</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">60 000€</td>
              <td className="p-3">~4 800€</td>
              <td className="p-3">~6 200€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~11 000€</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3">90 000€</td>
              <td className="p-3">~6 900€</td>
              <td className="p-3">~9 100€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~16 000€</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">120 000€</td>
              <td className="p-3">~8 400€</td>
              <td className="p-3">~11 800€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~20 200€</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3">180 000€</td>
              <td className="p-3">~9 200€</td>
              <td className="p-3">~13 500€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~22 700€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-400 mb-8">
        Estimations 2026 basées sur le PASS (48 060€). Vérifiez sur cavp.fr pour les montants exacts.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le choc du taux de remplacement : pourquoi les pharmaciens sont particulièrement touchés
      </h2>
      <p className="text-gray-700 mb-4">
        Un titulaire de pharmacie avec un BNC de 120 000€/an depuis 30 ans peut espérer une pension totale de <strong>2 500 à 3 200€/mois</strong>. Son revenu habituel était de <strong>8 000 à 9 000€ nets</strong>. Le taux de remplacement est donc de l'ordre de <strong>28 à 38%</strong>.
      </p>
      <p className="text-gray-700 mb-6">
        Pour comprendre pourquoi : les cotisations CAVP sont plafonnées. Au-delà d'un certain niveau de BNC, chaque euro de revenu supplémentaire ne génère plus de point CAVP proportionnel. Un pharmacien à 180 000€ de BNC ne cotise pas deux fois plus qu'à 90 000€ — et n'aura pas deux fois plus de pension.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">📊 Le cas concret d'Isabelle, 50 ans, titulaire depuis 22 ans</p>
        <p className="text-sm text-gray-600">
          BNC moyen : 105 000€/an. Cotisations retraite versées sur 22 ans : ~390 000€.
          Pension estimée à 64 ans (14 ans restants) : <strong>~2 700€/mois</strong>.
          Revenu net actuel : ~7 000€/mois. Taux de remplacement : <strong className="text-red-600">~39%</strong>.
          Écart mensuel à combler : ~4 300€/mois si elle veut maintenir son niveau de vie.
        </p>
      </div>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Pharmacien salarié vs titulaire : deux situations très différentes
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Le pharmacien salarié (adjoint, hospitalier)</h3>
      <p className="text-gray-700 mb-4">
        Le pharmacien salarié cotise au <strong>régime général (CNAV) + AGIRC-ARRCO</strong>, comme tout salarié du privé. Son taux de remplacement est mécaniquement meilleur que celui d'un titulaire libéral à revenu équivalent, car les cotisations patronales et salariales sont calculées sur l'intégralité du salaire jusqu'au plafond.
      </p>
      <p className="text-gray-700 mb-6">
        En revanche, les revenus des pharmaciens salariés sont généralement plus faibles que ceux des titulaires — ce qui nivelle les pensions finales. Un pharmacien adjoint avec 40 ans de carrière à 45 000€ brut peut espérer environ <strong>1 600 à 1 900€/mois</strong> de pension totale.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">La carrière mixte salarié → titulaire</h3>
      <p className="text-gray-700 mb-6">
        Beaucoup de pharmaciens ont commencé comme adjoints salariés avant de reprendre ou créer une officine. Les droits acquis en tant que salarié (régime général + AGIRC-ARRCO) s'additionnent aux droits CAVP acquis en tant que titulaire. Cette carrière mixte est souvent avantageuse — mais nécessite de vérifier que chaque régime apparaît correctement sur info-retraite.fr.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        L'ASV pharmacien : un avantage à ne pas négliger
      </h2>
      <p className="text-gray-700 mb-4">
        Les pharmaciens conventionnés bénéficient de l'<strong>Avantage Social Vieillesse (ASV)</strong>, comme les médecins et dentistes. La CPAM prend en charge une partie des cotisations ASV — ce qui en fait un des avantages les plus rentables du statut libéral conventionné.
      </p>
      <p className="text-gray-700 mb-6">
        L'ASV génère des points supplémentaires qui s'ajoutent à la pension CAVP. Pour 30 ans de conventionnement complet, la pension ASV d'un pharmacien représente généralement <strong>300 à 600€/mois</strong> supplémentaires. Vérifiez que vos périodes de conventionnement sont bien enregistrées dans votre relevé CAVP.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les 3 leviers prioritaires pour optimiser sa retraite de pharmacien
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">1. Le PER : indispensable pour les titulaires à hauts revenus</h3>
      <p className="text-gray-700 mb-4">
        Le Plan d'Épargne Retraite est l'outil numéro un. Déductible du BNC dans la limite de 10% du bénéfice (plafond ~35 194€/an en 2026). Pour un pharmacien à TMI 41%, chaque 1 000€ versés sur le PER coûte réellement <strong>590€ après économie fiscale</strong>.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Versement PER/mois</th>
              <th className="text-left p-3">Horizon</th>
              <th className="text-left p-3">Capital estimé (5%/an)</th>
              <th className="text-left p-3 rounded-tr-lg">Rente mensuelle</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">500€</td>
              <td className="p-3">20 ans</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~205 000€</td>
              <td className="p-3">~855€/mois</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3">1 000€</td>
              <td className="p-3">20 ans</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~410 000€</td>
              <td className="p-3">~1 710€/mois</td>
            </tr>
            <tr>
              <td className="p-3">2 000€</td>
              <td className="p-3">15 ans</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~530 000€</td>
              <td className="p-3">~2 210€/mois</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">2. Anticiper la cession de l'officine</h3>
      <p className="text-gray-700 mb-6">
        La valeur d'une pharmacie (fonds de commerce) constitue souvent le principal actif patrimonial du titulaire. La cession de l'officine au moment de la retraite génère un capital important — mais sa fiscalité doit être anticipée. Selon la durée de détention et le régime fiscal choisi (IS/IR), l'abattement pour durée de détention peut réduire significativement l'imposition. Consultez un expert-comptable spécialisé en cession de pharmacies 3 à 5 ans avant la date envisagée.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">3. La SCI pour l'immobilier de l'officine</h3>
      <p className="text-gray-700 mb-6">
        Si vous êtes propriétaire des murs de votre officine via une SCI, ces loyers continueront à vous être versés après la cession du fonds de commerce. Un pharmacien qui a acheté ses murs à 40 ans et les loue à son successeur à 64 ans dispose d'un complément de revenu stable pendant la retraite — souvent plus régulier qu'une rente.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Retraite progressive et cumul emploi-retraite pour les pharmaciens
      </h2>
      <p className="text-gray-700 mb-4">
        Depuis la réforme 2023, les libéraux peuvent accéder à la <strong>retraite progressive</strong> dès 60 ans. Un titulaire qui souhaite réduire ses heures progressivement peut percevoir une fraction de sa pension CAVP tout en continuant à exercer et à cotiser.
      </p>
      <p className="text-gray-700 mb-8">
        Le <strong>cumul emploi-retraite libéralisé</strong> (depuis 2023) permet également de continuer à exercer après liquidation et de générer de nouveaux droits. Pour un pharmacien qui cède son officine mais continue comme adjoint ou remplaçant, c'est une option à évaluer.
      </p>

      {/* Checklist */}
      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Les 5 actions prioritaires pour un pharmacien titulaire</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Vérifier son relevé de points CAVP sur cavp.fr et son relevé multi-régimes sur info-retraite.fr</li>
          <li><strong>2.</strong> Ouvrir un PER TNS si ce n'est pas fait — déduction immédiate sur le BNC</li>
          <li><strong>3.</strong> Calculer son plafond PER disponible (case 6QS de l'avis d'imposition) et effectuer un rattrapage si des années sont non utilisées</li>
          <li><strong>4.</strong> Anticiper la cession de l'officine : fiscalité, valorisation, timing</li>
          <li><strong>5.</strong> Vérifier que les périodes de conventionnement ASV sont bien enregistrées</li>
        </ol>
      </div>

      {/* Internal links */}
      <div className="border-t border-gray-100 pt-8 mb-10">
        <p className="text-sm text-gray-500 mb-3">Articles liés :</p>
        <div className="flex flex-col gap-2">
          <Link href="/blog/per-combien-verser-selon-age" className="text-[#1D9E75] hover:underline text-sm">
            PER : combien verser selon son âge ? →
          </Link>
          <Link href="/blog/carmf-retraite-medecins-liberaux" className="text-[#1D9E75] hover:underline text-sm">
            Retraite médecin libéral : guide CARMF complet →
          </Link>
          <Link href="/blog/rachat-trimestres-rentable" className="text-[#1D9E75] hover:underline text-sm">
            Rachat de trimestres : est-ce vraiment rentable ? →
          </Link>
        </div>
      </div>

      {/* Sources */}
      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ cavp.fr — Cotisations, points, valeur du point CAVP 2026</p>
        <p>→ cnavpl.fr — Retraite de base des professions libérales</p>
        <p>→ info-retraite.fr — Relevé de carrière multi-régimes</p>
        <p>→ service-public.fr — Retraite progressive, cumul emploi-retraite</p>
        <p className="mt-2 italic">Basé sur le PASS 2026 (48 060€). Les montants sont indicatifs — vérifiez sur cavp.fr pour les valeurs définitives.</p>
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
