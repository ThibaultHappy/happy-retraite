// app/blog/retraite-enseignants-prive-contrat-ircantec/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";
import RelatedArticles from "@/components/RelatedArticles";
import { BlogCTAMid } from "@/components/BlogCTA";

export const metadata: Metadata = {
  title: "Retraite enseignants privé sous contrat : IRCANTEC expliqué | Happy Retraite",
  description: "Enseignant du privé sous contrat : vous cotisez à l'IRCANTEC, pas à l'AGIRC-ARRCO. Droits, calcul de pension, leviers 2026.",
  alternates: { canonical: "https://www.happyretraite.fr/blog/retraite-enseignants-prive-contrat-ircantec" },
  openGraph: {
    title: "Retraite enseignants privé sous contrat : IRCANTEC expliqué | Happy Retraite",
    description: "Enseignant du privé sous contrat : vous cotisez à l'IRCANTEC, pas à l'AGIRC-ARRCO. Droits, calcul de pension, leviers 2026.",
    url: "https://www.happyretraite.fr/blog/retraite-enseignants-prive-contrat-ircantec",
    siteName: "Happy Retraite",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retraite enseignants privé sous contrat : IRCANTEC expliqué | Happy Retraite",
    description: "Enseignant du privé sous contrat : vous cotisez à l'IRCANTEC, pas à l'AGIRC-ARRCO. Droits, calcul de pension, leviers 2026.",
  },
};

export default function RetraiteEnseignantsPriveContrat() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleJsonLd
        headline="Retraite enseignants privé sous contrat : IRCANTEC expliqué"
        description="Enseignant du privé sous contrat : vous cotisez à l'IRCANTEC, pas à l'AGIRC-ARRCO. Droits, calcul de pension, leviers 2026."
        url="https://www.happyretraite.fr/blog/retraite-enseignants-prive-contrat-ircantec"
        datePublished="2026-03-20"
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Statut particulier
          </span>
          <span className="text-gray-400 text-sm">8 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite des enseignants du privé sous contrat : IRCANTEC et droits méconnus
        </h1>
        <p className="text-lg text-gray-500">
          Ni fonctionnaire, ni salarié classique — l'enseignant du privé sous contrat avec l'État a un statut hybride qui crée une vraie confusion sur ses droits retraite. IRCANTEC, régime général, carrière mixte : voici ce qu'il faut savoir.
        </p>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        En France, environ <strong>130 000 enseignants</strong> exercent dans des établissements privés sous contrat avec l'État (principalement catholiques, mais aussi d'autres réseaux). Leur statut est unique : ils sont rémunérés par l'État, sans être fonctionnaires. Ce statut hybride génère une situation retraite que beaucoup découvrent seulement à l'approche de la liquidation — parfois avec de mauvaises surprises.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le statut des enseignants du privé sous contrat : ni fonctionnaire, ni salarié ordinaire
      </h2>
      <p className="text-gray-700 mb-4">
        Les enseignants des établissements privés <strong>sous contrat d'association avec l'État</strong> (loi Debré de 1959) sont dans une situation juridique particulière :
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
        <li>Ils sont <strong>agents de droit public non titulaires</strong> — rémunérés par l'État comme des fonctionnaires, mais sans le statut.</li>
        <li>Leur employeur est l'État (Ministère de l'Éducation nationale) pour la rémunération.</li>
        <li>L'établissement privé reste leur employeur juridique pour les aspects non pécuniaires.</li>
        <li>Ils ne sont <strong>pas affiliés à la CNRACL</strong> (fonctionnaires territoriaux et hospitaliers) ni aux caisses des fonctionnaires d'État.</li>
      </ul>
      <p className="text-gray-700 mb-6">
        Conséquence directe pour la retraite : ils cotisent au <strong>régime général (CNAV)</strong> pour la retraite de base, et à l'<strong>IRCANTEC</strong> pour la retraite complémentaire — et non à l'AGIRC-ARRCO comme les salariés du privé classiques.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        L'IRCANTEC : le régime complémentaire méconnu
      </h2>
      <BlogCTAMid context="votre situation de retraite" />
      <p className="text-gray-700 mb-4">
        L'<strong>IRCANTEC</strong> (Institution de Retraite Complémentaire des Agents Non Titulaires de l'État et des Collectivités) est le régime complémentaire des agents publics non titulaires. Il regroupe environ <strong>5 millions de cotisants</strong> — enseignants du privé, contractuels de la fonction publique, élus locaux, etc.
      </p>
      <p className="text-gray-700 mb-4">
        L'IRCANTEC fonctionne par <strong>points</strong>, comme l'AGIRC-ARRCO. Chaque année, vos cotisations achètent des points dont la valeur est fixée annuellement. À la retraite : nombre de points × valeur du point = pension complémentaire annuelle.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">IRCANTEC vs AGIRC-ARRCO : les différences clés</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Critère</th>
              <th className="text-left p-3">IRCANTEC</th>
              <th className="text-left p-3 rounded-tr-lg">AGIRC-ARRCO</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Bénéficiaires</td>
              <td className="p-3">Agents publics non titulaires</td>
              <td className="p-3">Salariés du privé</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Taux de cotisation</td>
              <td className="p-3">~2,8% salarié / ~4,9% employeur (T1)</td>
              <td className="p-3">~3,15% salarié / ~4,72% employeur (T1)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Valeur du point 2026</td>
              <td className="p-3">~0,51€/an</td>
              <td className="p-3">~1,4159€/an</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Abattement si départ avant 67 ans</td>
              <td className="p-3">Oui (selon âge et trimestres)</td>
              <td className="p-3">Oui (coefficient de solidarité)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Coordination possible</td>
              <td className="p-3 text-orange-600">Non transférable vers AGIRC-ARRCO</td>
              <td className="p-3">Non transférable vers IRCANTEC</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">📊 Ce que signifie la valeur du point IRCANTEC</p>
        <p className="text-sm text-gray-600">
          Un enseignant du privé avec un salaire brut de 30 000€/an accumule environ <strong>165 points IRCANTEC</strong> par an. Avec 35 ans de carrière : 5 775 points × 0,51€ = <strong>~2 945€/an soit ~245€/mois</strong> de pension complémentaire IRCANTEC. C'est nettement moins qu'un salarié du privé à salaire équivalent avec l'AGIRC-ARRCO (~520€/mois). L'écart est structurel.
        </p>
      </div>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Calcul concret de la retraite d'un enseignant du privé sous contrat
      </h2>
      <p className="text-gray-700 mb-4">
        Prenons le cas de Marie, professeure de français dans un lycée privé sous contrat depuis 35 ans, salaire brut moyen de 32 000€/an.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Régime</th>
              <th className="text-left p-3">Calcul</th>
              <th className="text-left p-3 rounded-tr-lg">Pension estimée</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Retraite de base (CNAV)</td>
              <td className="p-3">SAM 25 meilleures années × 50% × 140/172</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~930€/mois</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Complémentaire (IRCANTEC)</td>
              <td className="p-3">~5 775 points × 0,51€ / 12</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~245€/mois</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">Total estimé</td>
              <td className="p-3"></td>
              <td className="p-3 text-[#1D9E75] font-bold text-base">~1 175€/mois</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 mb-6">
        Un enseignant du public titulaire avec la même carrière toucherait environ <strong>1 800 à 2 100€/mois</strong> (calcul sur les 6 derniers mois de traitement indiciaire, hors primes). L'écart avec l'enseignant du privé sous contrat peut dépasser <strong>600 à 900€/mois</strong> — un différentiel majeur que beaucoup découvrent trop tard.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les spécificités de carrière des enseignants du privé
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Les heures complémentaires et supplémentaires</h3>
      <p className="text-gray-700 mb-4">
        Les heures supplémentaires (HSA, HSE) rémunérées par l'État sont <strong>soumises à cotisations retraite</strong> et entrent dans le salaire annuel moyen. Elles améliorent donc les droits CNAV et IRCANTEC. Vérifiez que ces heures apparaissent bien dans vos relevés.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Les périodes de temps partiel</h3>
      <p className="text-gray-700 mb-4">
        Un enseignant à mi-temps (50%) valide des trimestres au prorata. Si votre salaire à mi-temps dépasse le seuil de validation (environ 1 747€ brut/trimestre en 2026), vous validez quand même 4 trimestres par an. En revanche, votre salaire annuel moyen en sera affecté — et donc votre pension de base.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">La carrière mixte public/privé</h3>
      <p className="text-gray-700 mb-6">
        Certains enseignants ont commencé dans le public (CNRACL ou régime des fonctionnaires d'État) avant de rejoindre le privé sous contrat, ou inversement. Cette carrière mixte génère des droits dans plusieurs régimes qui doivent tous être liquidés séparément. Vérifiez sur info-retraite.fr que chaque période apparaît dans le bon régime.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Les pièges fréquents et comment les éviter
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Confondre IRCANTEC et AGIRC-ARRCO</h3>
      <p className="text-gray-700 mb-4">
        C'est l'erreur la plus fréquente. Beaucoup d'enseignants du privé pensent cotiser à l'AGIRC-ARRCO comme leurs collègues salariés du privé. Ce n'est pas le cas. Les deux régimes ne sont pas transférables, ne se cumulent pas, et ont des niveaux de prestation très différents.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Ne pas vérifier son relevé IRCANTEC</h3>
      <p className="text-gray-700 mb-4">
        Les erreurs d'enregistrement existent, notamment lors des changements d'établissement, des congés maternité, ou des périodes de temps partiel. Demandez votre relevé de points IRCANTEC directement sur <strong>ircantec.fr</strong> et vérifiez que toutes vos années de cotisation y figurent.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">L'abattement IRCANTEC si départ avant 67 ans</h3>
      <p className="text-gray-700 mb-6">
        Comme l'AGIRC-ARRCO, l'IRCANTEC applique un <strong>coefficient de minoration</strong> si vous partez à la retraite avant d'avoir atteint le taux plein ou l'âge de 67 ans. Ce coefficient peut réduire significativement votre pension complémentaire. Vérifiez votre situation sur ircantec.fr avant de fixer votre date de départ.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Comment compenser le différentiel avec le public : les leviers disponibles
      </h2>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Le PERCO ou PER collectif via l'établissement</h3>
      <p className="text-gray-700 mb-4">
        Certains établissements privés sous contrat proposent un Plan d'Épargne Retraite Collectif (PERCOL) avec abondement de l'employeur. Si c'est le cas dans votre établissement, c'est l'un des leviers les plus efficaces — l'abondement employeur est un complément de rémunération exonéré de charges.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Le PER individuel</h3>
      <p className="text-gray-700 mb-6">
        Le PER individuel permet de déduire les versements de votre revenu imposable. Pour un enseignant à TMI 30%, chaque 1 000€ versés coûte réellement <strong>700€ après économie fiscale</strong>. Sur 20 ans à 200€/mois avec un rendement de 5%, le capital constitué dépasse <strong>82 000€</strong> — soit une rente de ~340€/mois pendant 20 ans.
      </p>

      {/* Checklist */}
      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Les actions prioritaires pour un enseignant du privé sous contrat</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Vérifier son relevé de points IRCANTEC sur ircantec.fr</li>
          <li><strong>2.</strong> Vérifier son relevé de carrière complet sur info-retraite.fr (CNAV + IRCANTEC + autres régimes éventuels)</li>
          <li><strong>3.</strong> Vérifier si l'établissement propose un PERCOL avec abondement</li>
          <li><strong>4.</strong> Ouvrir un PER individuel pour combler le différentiel avec le public</li>
          <li><strong>5.</strong> Anticiper l'abattement IRCANTEC si départ avant 67 ans — simuler sur ircantec.fr</li>
          <li><strong>6.</strong> En cas de carrière mixte public/privé : identifier tous les régimes sur info-retraite.fr</li>
        </ol>
      </div>

      <RelatedArticles currentSlug="retraite-enseignants-prive-contrat-ircantec" />

      {/* Sources */}
      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ ircantec.fr — Relevé de points, simulation de pension, valeur du point 2026</p>
        <p>→ info-retraite.fr — Relevé de carrière multi-régimes</p>
        <p>→ service-public.fr — Statut des maîtres des établissements privés sous contrat</p>
        <p>→ education.gouv.fr — Rémunération et statut des enseignants du privé sous contrat</p>
        <p className="mt-2 italic">Les montants de pension sont indicatifs. Vérifiez votre situation personnelle sur ircantec.fr et info-retraite.fr.</p>
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
