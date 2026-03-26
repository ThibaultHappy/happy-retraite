// app/blog/retraite-travail-royaume-uni-brexit/page.tsx

import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { BlogCTAMid } from "@/components/BlogCTA";

export const metadata = {
  title: "Retraite des Français au Royaume-Uni après le Brexit : State Pension et nouveaux droits | Happy Retraite",
  description:
    "Brexit et retraite : les règles ont changé pour les Français ayant travaillé au Royaume-Uni. State Pension, accord post-Brexit, coordination avec la France — le guide 2026.",
};

export default function RetraiteTravailRoyaumeUni() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Expatrié
          </span>
          <span className="text-gray-400 text-sm">9 min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0F1F3D] mb-4 leading-tight">
          Retraite des Français au Royaume-Uni après le Brexit : State Pension et nouveaux droits
        </h1>
        <p className="text-lg text-gray-500">
          Le Brexit a tout changé pour les Français ayant travaillé ou vivant au Royaume-Uni. Le règlement européen ne s'applique plus — un accord bilatéral spécifique le remplace. State Pension, coordination avec la France, droits des résidents : voici ce qui a changé et comment protéger vos droits.
        </p>
      </div>

      <p className="text-gray-700 mb-6">
        Environ <strong>150 000 Français</strong> résident au Royaume-Uni, et des dizaines de milliers d'autres y ont travaillé avant de rentrer. Depuis le Brexit effectif au 1er janvier 2021, les règles de coordination des droits sociaux entre la France et le Royaume-Uni ont <strong>fondamentalement changé</strong>. Le règlement européen 883/2004 ne s'applique plus — il a été remplacé par l'<strong>Accord de Commerce et de Coopération</strong> (ACC) UE-Royaume-Uni. Beaucoup de Français concernés ne le savent pas encore.
      </p>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Le système de retraite britannique : la State Pension
      </h2>
      <p className="text-gray-700 mb-4">
        La retraite de base au Royaume-Uni est la <strong>New State Pension</strong> (depuis 2016). Elle fonctionne différemment du système français : pas de calcul sur les salaires, mais un montant <strong>forfaitaire</strong> lié au nombre d'années de National Insurance (NI) contributions.
      </p>
      <p className="text-gray-700 mb-6">
        Pour toucher la State Pension complète en 2026 : il faut <strong>35 années</strong> de cotisations NI. Le montant maximum est d'environ <strong>221£/semaine</strong> (~960£/mois, soit ~1 130€/mois). Pour 10 années minimum, vous touchez une pension partielle proportionnelle.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Années NI cotisées au UK</th>
              <th className="text-left p-3">State Pension hebdomadaire</th>
              <th className="text-left p-3 rounded-tr-lg">Équivalent mensuel (~€)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">10 ans (minimum)</td>
              <td className="p-3">~63£/semaine</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~324€/mois</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3">20 ans</td>
              <td className="p-3">~126£/semaine</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~648€/mois</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">35 ans (maximum)</td>
              <td className="p-3">~221£/semaine</td>
              <td className="p-3 text-[#1D9E75] font-semibold">~1 130€/mois</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-400 mb-6">Taux 2026. Conversion approximative £/€ — vérifiez sur gov.uk/state-pension.</p>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Ce que le Brexit a changé pour les droits retraite
      </h2>
      <BlogCTAMid context="votre situation de retraite" />

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Avant le Brexit : le règlement européen s'appliquait</h3>
      <p className="text-gray-700 mb-4">
        Avant le 1er janvier 2021, les années cotisées en France et au Royaume-Uni pouvaient être <strong>totalisées</strong> grâce au règlement européen 883/2004. Un Français avec 8 ans au UK et 25 ans en France pouvait utiliser ses 33 années combinées pour atteindre les conditions de taux plein dans chaque pays.
      </p>

      <h3 className="text-xl font-semibold text-[#0F1F3D] mt-6 mb-3">Après le Brexit : l'Accord de Commerce et de Coopération</h3>
      <p className="text-gray-700 mb-4">
        L'ACC UE-UK maintient un principe de coordination pour les personnes ayant des droits dans les deux systèmes — mais avec des <strong>nuances importantes</strong> selon votre situation :
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0F1F3D] text-white">
              <th className="text-left p-3 rounded-tl-lg">Situation</th>
              <th className="text-left p-3 rounded-tr-lg">Règles applicables</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Cotisations avant le 31/12/2020</td>
              <td className="p-3">Droits acquis protégés par l'Accord de retrait</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-100">
              <td className="p-3 font-medium">Cotisations après le 01/01/2021</td>
              <td className="p-3">Accord de Commerce et de Coopération UE-UK</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium">Résidents UK au 31/12/2020</td>
              <td className="p-3">Droits protégés par l'Accord de retrait (settled status)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 font-medium">Nouveaux arrivants après 2021</td>
              <td className="p-3">Visa requis, nouvelles règles NI</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">✅ Bonne nouvelle : la totalisation est maintenue</p>
        <p className="text-sm text-gray-600">
          L'ACC maintient le principe de totalisation des périodes pour l'ouverture des droits. Vos années cotisées en France et au Royaume-Uni peuvent toujours être combinées pour atteindre le minimum requis dans chaque pays. La pension de chaque pays reste calculée et versée séparément, au prorata des années cotisées dans ce pays.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        Voluntary NI Contributions : combler ses lacunes UK depuis la France
      </h2>
      <p className="text-gray-700 mb-4">
        C'est l'une des opportunités les plus méconnues et les plus rentables pour les Français ayant travaillé au UK. Si vous avez des <strong>années manquantes</strong> dans votre historique NI britannique, vous pouvez les <strong>racheter volontairement</strong> depuis la France — à un coût très faible comparé aux droits générés.
      </p>
      <p className="text-gray-700 mb-6">
        En 2026, le coût d'une année NI manquante (Class 3 voluntary contributions) est d'environ <strong>824£</strong>. En échange, cette année supplémentaire génère environ <strong>6,32£/semaine</strong> de State Pension à vie — soit ~329£/an. Le seuil de rentabilité est atteint en <strong>2,5 ans</strong> de retraite perçue. C'est l'un des meilleurs investissements retraite disponibles.
      </p>

      <div className="bg-[#F0F4FF] border-l-4 border-[#2D4A7A] rounded-r-lg p-5 mb-8">
        <p className="font-semibold text-[#0F1F3D] mb-1">⚠️ Deadline pour les rachats NI volontaires</p>
        <p className="text-sm text-gray-600">
          Vous pouvez généralement racheter jusqu'à <strong>6 années</strong> manquantes dans le passé. Des fenêtres exceptionnelles ont parfois été ouvertes pour remonter plus loin. Vérifiez sur <strong>gov.uk/voluntary-national-insurance-contributions</strong> les années rachetables pour votre situation et les délais en vigueur.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        L'âge de la State Pension : attention au décalage avec la France
      </h2>
      <p className="text-gray-700 mb-4">
        L'âge de la State Pension au Royaume-Uni est actuellement de <strong>66 ans</strong> pour les hommes et les femmes, et passera à <strong>67 ans</strong> entre 2026 et 2028. Si vous partez à la retraite française à 64 ans, vous devrez attendre 66-67 ans pour la State Pension britannique — soit 2 à 3 ans de décalage à financer.
      </p>
      <p className="text-gray-700 mb-6">
        La State Pension ne peut pas être anticipée — contrairement au système français. En revanche, elle peut être <strong>différée</strong> : chaque semaine de report augmente le montant final d'environ 1% par semaine de report.
      </p>

      <h2 className="text-2xl font-bold text-[#0F1F3D] mt-10 mb-4">
        La retraite professionnelle UK (workplace pension)
      </h2>
      <p className="text-gray-700 mb-6">
        Depuis 2012, l'auto-enrolment oblige les employeurs britanniques à inscrire automatiquement leurs salariés à une <strong>pension professionnelle</strong> (workplace pension). Si vous avez travaillé au UK après 2012, vous avez probablement accumulé des droits dans un fonds de pension privé. Ces droits vous appartiennent et peuvent être récupérés à la retraite — vérifiez auprès de chacun de vos anciens employeurs ou via le <strong>Pension Tracing Service</strong> (gov.uk/find-pension-contact-details).
      </p>

      <div className="bg-[#E8F5EF] rounded-xl p-6 mb-10">
        <p className="font-bold text-[#0F1F3D] mb-4">✅ Plan d'action pour un Français ayant travaillé au Royaume-Uni</p>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> Vérifier son historique NI et son estimation de State Pension sur gov.uk/check-state-pension</li>
          <li><strong>2.</strong> Évaluer le rachat d'années NI manquantes (très rentable à ~824£/an)</li>
          <li><strong>3.</strong> Retrouver ses éventuels workplace pensions via le Pension Tracing Service</li>
          <li><strong>4.</strong> Vérifier ses droits français sur info-retraite.fr</li>
          <li><strong>5.</strong> Anticiper le décalage d'âge (64 ans France vs 66-67 ans UK)</li>
          <li><strong>6.</strong> Déposer les demandes dans les deux pays 18 mois avant la date souhaitée</li>
        </ol>
      </div>

      <RelatedArticles currentSlug="retraite-travail-royaume-uni-brexit" />

      <div className="text-sm text-gray-400 mb-10 space-y-1">
        <p className="font-semibold text-gray-500 mb-2">Sources</p>
        <p>→ gov.uk/state-pension — State Pension, montants 2026</p>
        <p>→ gov.uk/check-state-pension — Vérifier son historique NI</p>
        <p>→ gov.uk/voluntary-national-insurance-contributions — Rachats NI volontaires</p>
        <p>→ gov.uk/find-pension-contact-details — Pension Tracing Service</p>
        <p>→ cleiss.fr — Accord de Commerce et de Coopération UE-UK, coordination</p>
        <p>→ info-retraite.fr — Droits français, coordination internationale</p>
        <p className="mt-2 italic">Les règles post-Brexit continuent d'évoluer. Vérifiez sur gov.uk et cleiss.fr pour les informations les plus récentes.</p>
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
