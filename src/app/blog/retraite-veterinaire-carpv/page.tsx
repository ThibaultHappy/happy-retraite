// app/blog/retraite-veterinaire-carpv/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";
import RelatedArticles from "@/components/RelatedArticles";
import { BlogCTAMid } from "@/components/BlogCTA";

export const metadata: Metadata = {
  title: "Retraite vétérinaire libéral : CARPV et paradoxe fiscal | Happy Retraite",
  description: "Cotisations CARPV 2026, taux de remplacement décevant et 3 leviers pour optimiser la retraite du vétérinaire libéral.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/retraite-veterinaire-carpv" },
  openGraph: {
    title: "Retraite vétérinaire libéral : CARPV et paradoxe fiscal | Happy Retraite",
    description: "Cotisations CARPV 2026, taux de remplacement décevant et 3 leviers pour optimiser la retraite du vétérinaire libéral.",
    url: "https://www.happyretraite.fr/blog/retraite-veterinaire-carpv",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retraite vétérinaire libéral : CARPV et paradoxe fiscal | Happy Retraite",
    description: "Cotisations CARPV 2026, taux de remplacement décevant et 3 leviers pour optimiser la retraite du vétérinaire libéral.",
  },
};

export default function RetraiteVeterinaireCarPV() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleJsonLd
        headline="Retraite vétérinaire libéral : CARPV et paradoxe fiscal"
        description="Cotisations CARPV 2026, taux de remplacement décevant et 3 leviers pour optimiser la retraite du vétérinaire libéral."
        url="https://www.happyretraite.fr/blog/retraite-veterinaire-carpv"
        datePublished="2026-03-10"
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Professions libérales
          </span>
          <span className="text-gray-400 text-sm">8 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite vétérinaire libéral : CARPV, cotisations et le paradoxe fiscal
        </h1>
        <p className="text-lg text-gray-500">
          Les vétérinaires libéraux construisent leur retraite à travers un régime méconnu — la CARPV. Résultat : des cotisations significatives, un taux de remplacement souvent décevant, et des leviers d'optimisation que beaucoup n'activent jamais.
        </p>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        "Je cotise comme un libéral depuis 20 ans, j'aurai une bonne retraite." C'est ce que pensent beaucoup de vétérinaires libéraux. La réalité est plus nuancée. Avec un taux de remplacement qui tourne autour de 30 à 40%, un vétérinaire qui gagnait 80 000€ nets par an peut se retrouver avec 2 000 à 2 500€/mois à la retraite. Le choc est réel — et souvent évitable.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La CARPV : la caisse de retraite des vétérinaires libéraux
      </h2>
      <p className="text-gray-700 mb-4">
        La <strong>CARPV</strong> (Caisse Autonome de Retraite et de Prévoyance des Vétérinaires) gère la retraite complémentaire des vétérinaires libéraux. La retraite de base, elle, relève de la <strong>CNAVPL</strong> (Caisse Nationale d'Assurance Vieillesse des Professions Libérales), commune à toutes les professions libérales non réglementées par une caisse spécifique.
      </p>
      <p className="text-gray-700 mb-6">
        Environ <strong>10 000 vétérinaires libéraux</strong> sont affiliés à la CARPV en France. Une profession avec des revenus très variables selon le type d'activité : rurale, canine, ou mixte — ce qui impacte directement les cotisations et les droits accumulés.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">
        Structure complète de la retraite vétérinaire
      </h3>
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
              <td className="p-3">20–30%</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Retraite complémentaire</td>
              <td className="p-3">CARPV</td>
              <td className="p-3">60–70%</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Invalidité-décès</td>
              <td className="p-3">CARPV</td>
              <td className="p-3">Prévoyance uniquement</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Cotisations CARPV 2026 : combien paie un vétérinaire libéral ?
      </h2>
      <BlogCTAMid context="votre situation de retraite" />
      <p className="text-gray-700 mb-4">
        Les cotisations CARPV sont calculées sur les bénéfices non commerciaux (BNC) déclarés. Elles se décomposent en une part forfaitaire et une part proportionnelle aux revenus, dans la limite du plafond.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">BNC annuel</th>
              <th className="text-left p-3">Cotisation CNAVPL</th>
              <th className="text-left p-3">Cotisation CARPV</th>
              <th className="text-left p-3 rounded-tr-lg">Total retraite</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">40 000€</td>
              <td className="p-3">~3 200€</td>
              <td className="p-3">~4 100€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~7 300€</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3">70 000€</td>
              <td className="p-3">~5 600€</td>
              <td className="p-3">~7 200€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~12 800€</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">100 000€</td>
              <td className="p-3">~7 400€</td>
              <td className="p-3">~9 800€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~17 200€</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3">150 000€</td>
              <td className="p-3">~8 900€</td>
              <td className="p-3">~12 400€</td>
              <td className="p-3 font-semibold text-[#1D9E75]">~21 300€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-400 mb-8">
        Estimations 2026 basées sur le PASS (48 060€). Vérifiez sur carpv.fr pour les montants exacts.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le paradoxe fiscal du vétérinaire libéral à hauts revenus
      </h2>
      <p className="text-gray-700 mb-4">
        Voici ce que beaucoup de vétérinaires découvrent trop tard. Au-delà d'un certain niveau de BNC, les cotisations retraite sont <strong>plafonnées</strong>. Un vétérinaire qui passe de 80 000€ à 160 000€ de BNC ne double pas ses droits retraite — loin de là.
      </p>
      <p className="text-gray-700 mb-6">
        Résultat concret : un vétérinaire canine installé en région parisienne avec 130 000€ de BNC, après 30 ans de carrière, peut espérer une pension totale de <strong>2 200 à 2 800€/mois</strong>. Son taux de remplacement est d'environ <strong>25 à 35%</strong>. Pendant sa carrière, il gagnait 8 000 à 9 000€ nets par mois.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">📊 Le cas concret de Marc, 48 ans, vétérinaire canine</p>
        <p className="text-sm text-gray-600">
          BNC moyen sur 20 ans : 95 000€/an. Cotisations retraite versées : ~340 000€ au total.
          Pension estimée à 64 ans : ~2 400€/mois. Son salaire net actuel : ~6 300€/mois.
          Taux de remplacement : <strong className="text-red-600">38%</strong>. Sans PER ni épargne complémentaire, l'écart à combler est de ~3 900€/mois.
        </p>
      </div>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Spécificités selon le type d'activité vétérinaire
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Vétérinaire rural vs canin : mêmes règles, revenus différents</h3>
      <p className="text-gray-700 mb-4">
        Les règles CARPV s'appliquent de façon identique quelle que soit la spécialité. Mais les revenus moyens diffèrent significativement : un vétérinaire rural gagne souvent <strong>40 000 à 65 000€ de BNC</strong>, contre <strong>70 000 à 130 000€</strong> pour un canin en milieu urbain. L'impact sur la pension finale est direct.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Le vétérinaire salarié puis libéral : la carrière mixte</h3>
      <p className="text-gray-700 mb-6">
        Beaucoup de vétérinaires commencent leur carrière comme salariés (cliniques, industrie pharmaceutique animale) avant de s'installer. Les années salariées génèrent des droits au régime général (CNAV) et à l'AGIRC-ARRCO — qui s'additionneront à la CARPV lors de la liquidation. Cette carrière mixte est souvent avantageuse, mais nécessite de vérifier que chaque régime apparaît bien sur info-retraite.fr.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        L'installation tardive : le piège des études longues
      </h2>
      <p className="text-gray-700 mb-4">
        Les études vétérinaires durent <strong>6 ans minimum</strong> (École Nationale Vétérinaire). Avec les remplacements et une installation souvent entre 27 et 32 ans, la carrière libérale effective est souvent de <strong>32 à 37 ans</strong> — moins longue que pour un salarié qui commence à 22 ans.
      </p>
      <p className="text-gray-700 mb-6">
        Chaque année de carrière représente des points CARPV et CNAVPL supplémentaires. Le <strong>rachat des années d'études</strong> (jusqu'à 12 trimestres) est donc particulièrement pertinent pour les vétérinaires — surtout si vous êtes à TMI 30% ou plus, où le coût net après déduction fiscale est très réduit.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Optimiser sa retraite vétérinaire : les 3 leviers prioritaires
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">1. Le PER TNS : indispensable dès 35 ans</h3>
      <p className="text-gray-700 mb-4">
        Le Plan d'Épargne Retraite est l'outil numéro un du vétérinaire libéral. Les versements sont déductibles du BNC dans la limite de <strong>10% du bénéfice imposable</strong> (plafond 2026 : ~35 194€/an). Pour un vétérinaire à TMI 41%, chaque 1 000€ versés sur le PER coûte réellement <strong>590€</strong> après économie fiscale.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Versement mensuel PER</th>
              <th className="text-left p-3">Capital à 64 ans (5% rendement)</th>
              <th className="text-left p-3 rounded-tr-lg">Rente estimée</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">300€/mois</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~196 000€</td>
              <td className="p-3">~820€/mois</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3">500€/mois</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~327 000€</td>
              <td className="p-3">~1 360€/mois</td>
            </tr>
            <tr>
              <td className="p-3">800€/mois</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~522 000€</td>
              <td className="p-3">~2 180€/mois</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">2. L'immobilier professionnel : acheter ses murs</h3>
      <p className="text-gray-700 mb-6">
        Acheter les locaux de sa clinique via une SCI (Société Civile Immobilière) permet de se constituer un patrimoine immobilier qui génère des revenus locatifs à la retraite. La clinique paie un loyer à la SCI, dont vous êtes associé. À la retraite, ces loyers complètent la pension CARPV. Une stratégie particulièrement adaptée aux vétérinaires qui s'installent en clinique propre.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">3. Vérifier et optimiser ses droits CARPV</h3>
      <p className="text-gray-700 mb-6">
        Demandez votre relevé de points CARPV directement sur <strong>carpv.fr</strong> et vérifiez sur <strong>info-retraite.fr</strong> que toutes vos périodes (remplacements, salariat éventuel) apparaissent. Les erreurs sont fréquentes lors des changements de statut. Signaler une anomalie prend 15 minutes et peut représenter plusieurs dizaines d'euros de pension mensuelle.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Retraite progressive et cumul emploi-retraite pour les vétérinaires
      </h2>
      <p className="text-gray-700 mb-4">
        Depuis la réforme 2023, les libéraux peuvent accéder à la <strong>retraite progressive</strong> dès 60 ans. Pour un vétérinaire qui souhaite réduire son activité progressivement — en passant à mi-temps ou en cédant une partie de sa clientèle — ce dispositif permet de percevoir une fraction de pension tout en continuant à cotiser et à accumuler des droits.
      </p>
      <p className="text-gray-700 mb-8">
        Le <strong>cumul emploi-retraite</strong> est également possible après liquidation complète de la retraite : un vétérinaire retraité peut continuer à exercer, percevoir des honoraires, et depuis 2023, les revenus du cumul génèrent de nouveaux droits retraite.
      </p>

      {/* Checklist */}
      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Les 5 actions prioritaires pour un vétérinaire libéral</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Vérifier son relevé de points sur carpv.fr et info-retraite.fr</li>
          <li><strong>2.</strong> Ouvrir un PER TNS si ce n'est pas encore fait (déduction immédiate sur le BNC)</li>
          <li><strong>3.</strong> Calculer son plafond PER disponible — case 6QS de l'avis d'imposition</li>
          <li><strong>4.</strong> Évaluer le rachat des années d'études si vous êtes à 5–10 trimestres du taux plein</li>
          <li><strong>5.</strong> Anticiper la transmission de clientèle ou de clinique dans une logique patrimoniale globale</li>
        </ol>
      </div>

      <RelatedArticles currentSlug="retraite-veterinaire-carpv" />

      {/* Sources */}
      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ carpv.fr — Cotisations, points, valeur du point CARPV 2026</p>
        <p>→ cnavpl.fr — Retraite de base des professions libérales</p>
        <p>→ info-retraite.fr — Relevé de carrière multi-régimes</p>
        <p>→ service-public.fr — Retraite progressive, rachat de trimestres</p>
        <p className="mt-2 italic">Basé sur le PASS 2026 (48 060€). Les montants sont indicatifs — vérifiez sur carpv.fr pour les valeurs définitives.</p>
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
          href="/diagnostic/intro"
          className="inline-block bg-gradient-to-r from-[#10D98A] to-[#2D9CDB] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Faire mon diagnostic gratuit →
        </Link>
      </div>
    </article>
  );
}
