"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FormData,
  defaultFormData,
  calculateDiagnostic,
  PROFESSIONS_LIBERALES,
  getAgeLegal,
  getTrimestreRequis,
  ANNEE_ACTUELLE,
} from "@/lib/retraite";

// ─── Step IDs ─────────────────────────────────────────────────────────────────
type StepId =
  | "statut" | "naissance" | "trimestres" | "periodes" | "enfants" | "epargne"
  | "a_revenus" | "a_evolution" | "a_epargne_sal" | "a_retraite_supp" | "a_rachat"
  | "b_categorie" | "b_grade" | "b_traitement" | "b_primes" | "b_bonifications" | "b_evolution" | "b_prive"
  | "c_statut" | "c_ca" | "c_salaire_sasu" | "c_revenu" | "c_per" | "c_evolution" | "c_changement"
  | "d_profession" | "d_revenus" | "d_points" | "d_regimes" | "d_salariat" | "d_secteur" | "d_evolution"
  | "e_statuts" | "e_repartition" | "e_actuel"
  | "fin_epargne" | "fin_cible" | "fin_contact";

function getStepSequence(f: FormData): StepId[] {
  const steps: StepId[] = ["statut", "naissance", "trimestres", "periodes", "enfants", "epargne"];

  switch (f.statut) {
    case "salarie":
      steps.push("a_revenus", "a_evolution", "a_epargne_sal", "a_retraite_supp", "a_rachat");
      break;
    case "fonctionnaire":
      steps.push("b_categorie", "b_grade", "b_traitement", "b_primes", "b_bonifications", "b_evolution", "b_prive");
      break;
    case "independant":
      steps.push("c_statut");
      if (f.statutJuridiqueC === "sasu") {
        steps.push("c_salaire_sasu", "c_revenu");
      } else if (f.statutJuridiqueC === "eurl") {
        steps.push("c_revenu");
      } else {
        steps.push("c_ca");
      }
      steps.push("c_per", "c_evolution", "c_changement");
      break;
    case "liberal":
      steps.push("d_profession", "d_revenus", "d_points", "d_regimes", "d_salariat");
      if (f.caisseD === "CARMF") steps.push("d_secteur");
      steps.push("d_evolution");
      break;
    case "mixte":
      steps.push("e_statuts", "e_repartition", "e_actuel");
      break;
  }

  steps.push("fin_epargne", "fin_cible", "fin_contact");
  return steps;
}

function validateStep(stepId: StepId, f: FormData): boolean {
  switch (stepId) {
    case "statut": return f.statut !== "";
    case "b_categorie": return f.categorieFC !== "";
    case "c_statut": return f.statutJuridiqueC !== "";
    case "d_profession": return f.professionD !== "";
    case "e_statuts": return f.statutsMixtes.length > 0;
    case "e_actuel": return f.statutActuelMixte !== "";
    case "fin_contact": return f.email.includes("@") && f.nom.trim() !== "";
    default: return true;
  }
}

// ─── Helper components ────────────────────────────────────────────────────────
function SliderField({
  label, min, max, step = 1, value, onChange, format, note,
}: {
  label?: string; min: number; max: number; step?: number;
  value: number; onChange: (v: number) => void;
  format?: (v: number) => string; note?: React.ReactNode;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const fmt = format ?? ((v: number) => v.toLocaleString("fr-FR"));
  return (
    <div>
      {label && <p className="text-sm mb-2" style={{ color: "#6B7A99" }}>{label}</p>}
      <div className="text-center mb-6">
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "52px", fontWeight: 700, color: "#1D9E75" }}>{fmt(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #1D9E75 0%, #1D9E75 ${pct}%, #E8EDF5 ${pct}%, #E8EDF5 100%)`,
        }}
      />
      <div className="flex justify-between text-xs mt-2" style={{ color: "#6B7A99" }}>
        <span>{fmt(min)}</span>
        <span>{fmt(max)}</span>
      </div>
      {note && (
        <div className="mt-4 text-xs leading-relaxed p-3 rounded-xl" style={{ backgroundColor: "#F0F4FF", borderLeft: "2px solid #2D4A7A", color: "#6B7A99" }}>
          {note}
        </div>
      )}
    </div>
  );
}

function CardButton({
  selected, onClick, icon, title, desc,
}: {
  selected: boolean; onClick: () => void;
  icon?: string; title: string; desc?: string; fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left p-5 rounded-2xl transition-all w-full"
      style={{
        border: selected ? "2px solid #1D9E75" : "1px solid #E8EDF5",
        backgroundColor: selected ? "#E8F5EF" : "white",
      }}
    >
      {icon && <div className="text-2xl mb-2">{icon}</div>}
      <div className="font-semibold text-sm" style={{ color: selected ? "#085041" : "#0F1F3D" }}>{title}</div>
      {desc && <div className="text-xs mt-0.5 leading-snug" style={{ color: selected ? "#0F6E56" : "#6B7A99" }}>{desc}</div>}
    </button>
  );
}

function YesNo({ value, onChange }: { value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <CardButton selected={value === true} onClick={() => onChange(true)} title="Oui" icon="✓" />
      <CardButton selected={value === false} onClick={() => onChange(false)} title="Non" icon="✕" />
    </div>
  );
}

function InfoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 text-xs leading-relaxed p-4 rounded-xl" style={{ backgroundColor: "#F0F4FF", borderLeft: "2px solid #2D4A7A", color: "#6B7A99" }}>
      {children}
    </div>
  );
}

function SectionTitle({ text }: { text: string }) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-bold mb-2"
      style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0F1F3D" }}
    >
      {text}
    </h2>
  );
}

function BrightWord({ word, color, tip }: { word: string; color: string; tip: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block">
      <strong
        style={{ color, cursor: "help", textDecorationLine: "underline", textDecorationStyle: "dotted", textUnderlineOffset: "3px" }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {word}
      </strong>
      {show && (
        <span
          className="absolute z-50 bottom-full left-0 mb-2 p-3 rounded-xl text-xs text-white leading-relaxed pointer-events-none shadow-xl"
          style={{ backgroundColor: "#0f172a", minWidth: "220px", width: "260px" }}
        >
          {tip}
          <span className="absolute top-full left-4 border-4 border-transparent" style={{ borderTopColor: "#0f172a" }} />
        </span>
      )}
    </span>
  );
}

const TIP_BRUT = "Votre salaire avant déduction des cotisations sociales et de l'impôt. C'est le chiffre sur votre contrat de travail.";
const TIP_NET = "Votre salaire après déduction de toutes les cotisations. C'est ce que vous recevez sur votre compte bancaire. Environ 75-80% du brut pour un salarié.";

// ─── Step renderer ────────────────────────────────────────────────────────────
function renderStep(
  stepId: StepId,
  f: FormData,
  u: <K extends keyof FormData>(k: K, v: FormData[K]) => void
): React.ReactNode {
  const fmtEuro = (v: number) => v.toLocaleString("fr-FR") + "€";
  const fmtEuroMois = (v: number) => v.toLocaleString("fr-FR") + "€/mois";

  switch (stepId) {

    // ── Q1 – Statut ──────────────────────────────────────────────────────────
    case "statut":
      return (
        <div>
          <SectionTitle text="Quel est votre statut professionnel ?" />
          <p className="text-gray-500 mb-8">Choisissez le statut qui décrit le mieux votre situation actuelle.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: "salarie", icon: "👔", title: "Salarié secteur privé", desc: "CDI, CDD, intérim" },
              { id: "fonctionnaire", icon: "🏛️", title: "Fonctionnaire", desc: "État, territorial, hospitalier" },
              { id: "independant", icon: "💼", title: "Indépendant", desc: "Micro, SASU, EURL" },
              { id: "liberal", icon: "⚕️", title: "Profession libérale", desc: "Médecin, avocat, kiné, architecte…" },
              { id: "mixte", icon: "🔀", title: "Carrière mixte", desc: "Plusieurs statuts successifs" },
            ].map((s) => (
              <CardButton
                key={s.id}
                selected={f.statut === s.id}
                onClick={() => u("statut", s.id as FormData["statut"])}
                icon={s.icon} title={s.title} desc={s.desc}
              />
            ))}
          </div>
        </div>
      );

    // ── Q2 – Naissance ───────────────────────────────────────────────────────
    case "naissance": {
      const ageDepart = f.anneeNaissance ? getAgeLegal(f.anneeNaissance, f.categorieFC || undefined) : 64;
      const trimRequis = f.anneeNaissance ? getTrimestreRequis(f.anneeNaissance) : 172;
      const ageActuel = ANNEE_ACTUELLE - f.anneeNaissance;
      const anneesRestantes = Math.max(0, ageDepart - ageActuel);
      return (
        <div>
          <SectionTitle text="Quelle est votre année de naissance ?" />
          <p className="text-gray-500 mb-8">Elle détermine votre âge légal de départ et le nombre de trimestres requis.</p>
          <div className="relative mb-6">
            <select
              value={f.anneeNaissance}
              onChange={(e) => u("anneeNaissance", Number(e.target.value))}
              className="w-full px-5 py-4 text-xl font-bold rounded-2xl border-2 appearance-none cursor-pointer focus:outline-none"
              style={{ borderColor: "#1D9E75", color: "#1D9E75" }}
            >
              {Array.from({ length: 51 }, (_, i) => 1950 + i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#f0faf6" }}>
              <div className="text-2xl font-bold" style={{ color: "#1D9E75" }}>{ageDepart} ans</div>
              <div className="text-xs text-gray-500 mt-1">Âge légal de départ</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#f0faf6" }}>
              <div className="text-2xl font-bold" style={{ color: "#085041" }}>{trimRequis}</div>
              <div className="text-xs text-gray-500 mt-1">Trimestres requis</div>
            </div>
          </div>
          <InfoNote>
            Votre année de naissance détermine deux choses essentielles : l'âge à partir duquel vous pouvez
            partir à la retraite (entre 62 et 64 ans selon votre génération) et le nombre de trimestres nécessaires
            pour toucher votre retraite à taux plein (entre 166 et 172 trimestres). Ces règles ont été modifiées
            par la réforme des retraites de 2023. Il vous reste <strong>{anneesRestantes} ans</strong> avant votre départ estimé.
          </InfoNote>
        </div>
      );
    }

    // ── Q3 – Trimestres ──────────────────────────────────────────────────────
    case "trimestres":
      return (
        <div>
          <SectionTitle text="Combien de trimestres avez-vous cotisé ?" />
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { id: "connu", label: "Je connais mon nombre", icon: "📋" },
              { id: "inconnu", label: "Je ne sais pas", icon: "❓" },
            ].map((m) => (
              <CardButton
                key={m.id}
                selected={f.trimestreMode === m.id}
                onClick={() => u("trimestreMode", m.id as FormData["trimestreMode"])}
                icon={m.icon} title={m.label}
              />
            ))}
          </div>
          {f.trimestreMode === "connu" ? (
            <SliderField
              min={0} max={172} value={f.trimestresCoties}
              onChange={(v) => u("trimestresCoties", v)}
              format={(v) => `${v} trimestres`}
              note={<>Vous trouvez ce chiffre sur <strong>info-retraite.fr</strong> → Mon compte retraite → Ma carrière. Un trimestre est validé quand vous avez gagné au moins 1 782€ bruts dans l'année (en 2026). Maximum 4 trimestres par an.</>}
            />
          ) : (
            <>
              <SliderField
                label="Nombre d'années d'activité professionnelle"
                min={1} max={45} value={f.anneesActivite}
                onChange={(v) => u("anneesActivite", v)}
                format={(v) => `${v} ans ≈ ${v * 4} trimestres`}
              />
              <p className="mt-3 text-xs italic" style={{ color: "#1D9E75" }}>
                Estimation automatique basée sur votre âge. Ajustez selon votre parcours réel.
              </p>
              <InfoNote>
                Un trimestre de retraite est validé lorsque vous avez gagné au moins 1 782€ <BrightWord word="bruts" color="#1D9E75" tip={TIP_BRUT} /> dans l'année (en 2026). 4 trimestres maximum par an.
                Pour connaître votre nombre exact, connectez-vous sur <strong>info-retraite.fr</strong> avec FranceConnect — c'est gratuit et prend 5 minutes. Vous y trouverez votre relevé de carrière complet.
              </InfoNote>
            </>
          )}
        </div>
      );

    // ── Q4 – Périodes sans cotisation ────────────────────────────────────────
    case "periodes":
      return (
        <div>
          <SectionTitle text="Avez-vous eu des périodes sans cotisation ?" />
          <p className="text-gray-500 mb-2">Chômage non indemnisé, expatriation, reconversion, études, temps partiel…</p>
          <YesNo
            value={f.periodesSansCotisation}
            onChange={(v) => u("periodesSansCotisation", v)}
          />
          {f.periodesSansCotisation && (
            <div className="mt-8 space-y-6">
              <SliderField
                label="Combien d'années environ ?"
                min={1} max={20} value={f.anneesSansCotisation}
                onChange={(v) => u("anneesSansCotisation", v)}
                format={(v) => `${v} an${v > 1 ? "s" : ""}`}
              />
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Type de période :</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "chomage_indemnise", label: "Chômage indemnisé" },
                    { id: "chomage_non_indemnise", label: "Chômage non indemnisé" },
                    { id: "maladie", label: "Arrêt maladie long" },
                    { id: "conge_parental", label: "Congé parental" },
                    { id: "expatriation", label: "Expatriation" },
                    { id: "reconversion", label: "Reconversion / études" },
                  ].map((t) => (
                    <CardButton
                      key={t.id}
                      selected={f.typePeriodeSansCotisation === t.id}
                      onClick={() => u("typePeriodeSansCotisation", t.id)}
                      title={t.label}
                    />
                  ))}
                </div>
                <InfoNote>
                  Certaines périodes ne génèrent <strong>pas</strong> de trimestres : chômage non indemnisé, expatriation hors convention, revenus trop faibles.
                  En revanche, le chômage indemnisé (ARE), les arrêts maladie et les congés maternité génèrent des trimestres même sans cotisations directes.
                </InfoNote>
              </div>
            </div>
          )}
        </div>
      );

    // ── Q5 – Enfants ─────────────────────────────────────────────────────────
    case "enfants":
      return (
        <div>
          <SectionTitle text="Combien d'enfants avez-vous ?" />
          <p className="text-gray-500 mb-8">Chaque enfant peut générer des trimestres supplémentaires.</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => u("enfants", n)}
                className="py-5 rounded-2xl border-2 text-xl font-bold transition-all"
                style={{
                  borderColor: f.enfants === n ? "#1D9E75" : "#e5e7eb",
                  backgroundColor: f.enfants === n ? "#e1f5ee" : "white",
                  color: f.enfants === n ? "#1D9E75" : "#374151",
                }}
              >
                {n === 5 ? "5+" : n}
              </button>
            ))}
          </div>
          <InfoNote>
            Chaque enfant peut vous donner droit à des trimestres supplémentaires. Pour les mères : jusqu'à 8 trimestres par enfant (4 pour la maternité + 4 pour l'éducation). Pour les pères : 4 trimestres pour l'éducation sous conditions.
            Ces trimestres s'ajoutent à vos trimestres cotisés et peuvent vous permettre d'atteindre le taux plein plus tôt.
            À partir de 3 enfants, une <strong>majoration de 10%</strong> s'applique sur votre pension.
          </InfoNote>
        </div>
      );

    // ── Q6 – Épargne ─────────────────────────────────────────────────────────
    case "epargne":
      return (
        <div>
          <SectionTitle text="Quelle épargne retraite avez-vous déjà constituée ?" />
          <p className="text-gray-500 mb-8">PER, assurance-vie, PEA, épargne salariale, immobilier locatif…</p>
          <SliderField
            min={0} max={500000} step={5000} value={f.epargneExistante}
            onChange={(v) => u("epargneExistante", v)}
            format={fmtEuro}
            note={<>Incluez tous vos placements destinés à compléter votre retraite : Plan Épargne Retraite (PER), assurance-vie, PEA, épargne salariale (PEE, PERCO), immobilier locatif (valeur nette). <strong>N'incluez pas</strong> votre résidence principale ni votre épargne de précaution (livret A, LDDS).</>}
          />
        </div>
      );

    // ── A — Salarié ───────────────────────────────────────────────────────────
    case "a_revenus":
      return (
        <div>
          <SectionTitle text="Quel est votre revenu annuel brut moyen ?" />
          <p className="text-gray-500 mb-8">
            Salaire de base + primes + heures supplémentaires, <BrightWord word="avant" color="#1D9E75" tip={TIP_BRUT} /> toute déduction.
          </p>
          <SliderField
            min={15000} max={200000} step={1000} value={f.revenuBrutAnnuel}
            onChange={(v) => u("revenuBrutAnnuel", v)}
            format={fmtEuro}
            note={<>Votre salaire <BrightWord word="brut" color="#1D9E75" tip={TIP_BRUT} /> annuel = ce qui apparaît sur votre contrat + primes, AVANT déduction. Exemple : 2 800€ <BrightWord word="net" color="#085041" tip={TIP_NET} />/mois ≈ 3 600€ <BrightWord word="brut" color="#1D9E75" tip={TIP_BRUT} />/mois ≈ 43 200€/an. Seule la partie jusqu'à 48 060€/an (plafond Sécu 2026) entre dans le calcul de la retraite de base — nous gérons le plafonnement.</>}
          />
        </div>
      );

    case "a_evolution":
      return (
        <div>
          <SectionTitle text="Comment vont évoluer vos revenus d'ici la retraite ?" />
          <p className="text-gray-500 mb-8">Ce choix influence votre Salaire Annuel Moyen (SAM), moyenne de vos 25 meilleures années. Si vos revenus augmentent, vos meilleures années seront les dernières — ce qui améliore votre SAM et donc votre pension.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { id: "hausse", icon: "📈", title: "En hausse", desc: "+2%/an en moyenne" },
              { id: "stable", icon: "➡️", title: "Stables", desc: "+1%/an (inflation)" },
              { id: "baisse", icon: "📉", title: "En baisse", desc: "Réduction prévue" },
            ].map((e) => (
              <CardButton
                key={e.id} selected={f.evolutionRevenusSal === e.id}
                onClick={() => u("evolutionRevenusSal", e.id as FormData["evolutionRevenusSal"])}
                icon={e.icon} title={e.title} desc={e.desc}
              />
            ))}
          </div>
          {f.evolutionRevenusSal === "baisse" && (
            <div className="space-y-6 mt-6">
              <SliderField
                label="Dans combien d'années commence la baisse ?"
                min={1} max={20} value={f.baisseAnsSal}
                onChange={(v) => u("baisseAnsSal", v)}
                format={(v) => `${v} an${v > 1 ? "s" : ""}`}
              />
              <SliderField
                label="Réduction estimée de vos revenus"
                min={10} max={60} value={f.baisseReductionSal}
                onChange={(v) => u("baisseReductionSal", v)}
                format={(v) => `-${v}%`}
              />
            </div>
          )}
        </div>
      );

    case "a_epargne_sal":
      return (
        <div>
          <SectionTitle text="Avez-vous un contrat d'épargne salariale ?" />
          <p className="text-gray-500 mb-2">PEE, PERCO, PER collectif, intéressement, participation…</p>
          <YesNo value={f.aEpargneSalariale} onChange={(v) => u("aEpargneSalariale", v)} />
          {f.aEpargneSalariale && (
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Type de dispositif :</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["PEE uniquement", "PERCO ou PER collectif", "Les deux"].map((t) => (
                    <CardButton key={t} selected={f.typeEpargneSalariale === t} onClick={() => u("typeEpargneSalariale", t)} title={t} />
                  ))}
                </div>
              </div>
              <SliderField
                label="Montant annuel moyen versé"
                min={500} max={20000} step={500} value={f.montantEpargneSalariale}
                onChange={(v) => u("montantEpargneSalariale", v)}
                format={fmtEuro}
                note="Incluez les abondements de votre employeur et l'intéressement."
              />
            </div>
          )}
        </div>
      );

    case "a_retraite_supp":
      return (
        <div>
          <SectionTitle text="Avez-vous une retraite supplémentaire employeur ?" />
          <p className="text-gray-500 mb-2">Article 83, PEROB, retraite chapeau, PERO…</p>
          <YesNo value={f.aRetraiteSupp} onChange={(v) => u("aRetraiteSupp", v)} />
          {f.aRetraiteSupp && (
            <div className="mt-8">
              <SliderField
                label="Montant mensuel estimé à la retraite"
                min={100} max={3000} step={50} value={f.montantRetraiteSupp}
                onChange={(v) => u("montantRetraiteSupp", v)}
                format={fmtEuroMois}
                note="Consultez votre DRH ou votre relevé annuel pour connaître ce montant estimé."
              />
            </div>
          )}
        </div>
      );

    case "a_rachat":
      return (
        <div>
          <SectionTitle text="Souhaitez-vous explorer le rachat de trimestres ?" />
          <p className="text-gray-500 mb-2">Possible pour les années d'études supérieures ou années incomplètes.</p>
          <YesNo value={f.souhaitRachat} onChange={(v) => u("souhaitRachat", v)} />
          <InfoNote>
            Le coût du rachat varie selon votre âge et vos revenus. Il est en général rentable si votre espérance de vie est correcte.
            Nous intégrerons cette option dans vos recommandations si c'est pertinent.
          </InfoNote>
        </div>
      );

    // ── B — Fonctionnaire ─────────────────────────────────────────────────────
    case "b_categorie":
      return (
        <div>
          <SectionTitle text="Quelle est votre catégorie ?" />
          <p className="text-gray-500 mb-8">Votre catégorie détermine votre âge minimum de départ.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: "sedentaire", icon: "💻", title: "Sédentaire", desc: "Enseignant, administratif, ingénieur — départ à 64 ans" },
              { id: "active", icon: "🚔", title: "Active", desc: "Policier, pompier, surveillant — départ à 57 ans" },
              { id: "super_active", icon: "⚡", title: "Super-active", desc: "Certains militaires, pompiers spéciaux — départ à 52 ans" },
              { id: "hospitaliere", icon: "🏥", title: "Hospitalière (cat. B)", desc: "Infirmier, aide-soignant — départ à 59 ans" },
            ].map((c) => (
              <CardButton
                key={c.id} selected={f.categorieFC === c.id}
                onClick={() => u("categorieFC", c.id as FormData["categorieFC"])}
                icon={c.icon} title={c.title} desc={c.desc}
              />
            ))}
          </div>
        </div>
      );

    case "b_grade":
      return (
        <div>
          <SectionTitle text="Votre grade / corps actuel" />
          <p className="text-gray-500 mb-8">Votre grade détermine votre traitement indiciaire de référence.</p>
          <div className="grid grid-cols-1 gap-3">
            {(f.categorieFC === "sedentaire"
              ? [
                  { id: "A", label: "Catégorie A — Cadre supérieur, ingénieur, enseignant agrégé" },
                  { id: "B", label: "Catégorie B — Technicien, enseignant certifié, infirmier" },
                  { id: "C", label: "Catégorie C — Agent administratif, agent technique" },
                ]
              : [
                  { id: "actif_1", label: "Corps de catégorie active — Grade 1" },
                  { id: "actif_2", label: "Corps de catégorie active — Grade 2" },
                  { id: "actif_3", label: "Corps de catégorie active — Encadrement" },
                ]
            ).map((g) => (
              <CardButton
                key={g.id} selected={f.gradeFC === g.id}
                onClick={() => u("gradeFC", g.id)}
                title={g.label}
              />
            ))}
          </div>
        </div>
      );

    case "b_traitement":
      return (
        <div>
          <SectionTitle text="Votre traitement indiciaire brut mensuel" />
          <p className="text-gray-500 mb-8">
            La partie fixe de votre rémunération, calculée selon votre grade et échelon. C'est la seule partie qui entre dans le calcul de votre pension — les primes n'y entrent <strong>pas</strong>.
          </p>
          <SliderField
            min={1200} max={8000} step={50} value={f.traitementFC}
            onChange={(v) => u("traitementFC", v)}
            format={fmtEuroMois}
            note={<>Le traitement indiciaire <BrightWord word="brut" color="#1D9E75" tip={TIP_BRUT} /> est différent de votre salaire total avec primes. Vous le trouvez sur votre bulletin de salaire à la ligne <strong>"Traitement indiciaire brut"</strong>. C'est CE montant qui sert de base au calcul de votre pension de base.</>}
          />
        </div>
      );

    case "b_primes":
      return (
        <div>
          <SectionTitle text="Quelle part représentent vos primes ?" />
          <p className="text-gray-500 mb-8">En pourcentage de votre rémunération totale (traitement + primes).</p>
          <SliderField
            min={0} max={80} value={f.partPrimesFC}
            onChange={(v) => u("partPrimesFC", v)}
            format={(v) => `${v}%`}
            note="Les primes ne sont pas incluses dans la pension de base. Elles cotisent uniquement pour le RAFP (plafonné à 20% du traitement)."
          />
        </div>
      );

    case "b_bonifications":
      return (
        <div>
          <SectionTitle text="Avez-vous des bonifications prévues ?" />
          <p className="text-gray-500 mb-8">Les bonifications peuvent porter votre taux jusqu'à 80%.</p>
          <div className="space-y-3">
            {[
              { id: "enfants", label: "Bonification pour enfants (1 an par enfant né avant 2004)" },
              { id: "hors_europe", label: "Services accomplis hors d'Europe (dépaysement)" },
              { id: "categorie_active", label: "Catégorie active — bonification du 1/5ème" },
              { id: "aucune", label: "Aucune bonification" },
            ].map((b) => {
              const selected = f.bonificationsFC.includes(b.id);
              return (
                <button
                  key={b.id}
                  onClick={() => {
                    const current = f.bonificationsFC;
                    if (b.id === "aucune") {
                      u("bonificationsFC", selected ? [] : ["aucune"]);
                    } else {
                      u("bonificationsFC", selected
                        ? current.filter(x => x !== b.id)
                        : [...current.filter(x => x !== "aucune"), b.id]
                      );
                    }
                  }}
                  className="w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-3"
                  style={{
                    borderColor: selected ? "#1D9E75" : "#e5e7eb",
                    backgroundColor: selected ? "#e1f5ee" : "white",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: selected ? "#1D9E75" : "#e5e7eb" }}
                  >
                    {selected && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <span className="text-sm text-gray-700">{b.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      );

    case "b_evolution":
      return (
        <div>
          <SectionTitle text="Évolution de votre carrière d'ici la retraite" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { id: "final", icon: "🎯", title: "Grade final atteint", desc: "Traitement actuel conservé" },
              { id: "avancement", icon: "📈", title: "Avancements prévus", desc: "Promotion ou échelon supérieur" },
              { id: "temps_partiel", icon: "⏱️", title: "Temps partiel envisagé", desc: "Réduction d'activité" },
            ].map((e) => (
              <CardButton
                key={e.id} selected={f.evolutionCarriereFC === e.id}
                onClick={() => u("evolutionCarriereFC", e.id as FormData["evolutionCarriereFC"])}
                icon={e.icon} title={e.title} desc={e.desc}
              />
            ))}
          </div>
          {f.evolutionCarriereFC === "avancement" && (
            <SliderField
              label="Augmentation estimée du traitement"
              min={5} max={40} value={f.augmentationTraitementFC}
              onChange={(v) => u("augmentationTraitementFC", v)}
              format={(v) => `+${v}%`}
            />
          )}
          {f.evolutionCarriereFC === "temps_partiel" && (
            <div className="space-y-6 mt-4">
              <SliderField
                label="Dans combien d'années ?"
                min={1} max={20} value={f.tempsPartielDansAnsFC}
                onChange={(v) => u("tempsPartielDansAnsFC", v)}
                format={(v) => `${v} an${v > 1 ? "s" : ""}`}
              />
              <SliderField
                label="Pourcentage de temps partiel"
                min={50} max={90} step={10} value={f.pourcentageTempsPartielFC}
                onChange={(v) => u("pourcentageTempsPartielFC", v)}
                format={(v) => `${v}%`}
              />
            </div>
          )}
        </div>
      );

    case "b_prive":
      return (
        <div>
          <SectionTitle text="Avez-vous des périodes de services dans le privé ?" />
          <p className="text-gray-500 mb-2">Ces années donnent droit à une pension du régime général en complément.</p>
          <YesNo value={f.aPeriodesPriveFC} onChange={(v) => u("aPeriodesPriveFC", v)} />
          {f.aPeriodesPriveFC && (
            <div className="mt-8">
              <SliderField
                label="Nombre d'années dans le privé"
                min={1} max={30} value={f.anneesPriveFC}
                onChange={(v) => u("anneesPriveFC", v)}
                format={(v) => `${v} an${v > 1 ? "s" : ""}`}
              />
            </div>
          )}
        </div>
      );

    // ── C — Indépendant ───────────────────────────────────────────────────────
    case "c_statut":
      return (
        <div>
          <SectionTitle text="Quel est votre statut juridique exact ?" />
          <p className="text-gray-500 mb-8">Le régime de retraite dépend directement de votre statut.</p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { id: "micro", icon: "🛒", title: "Micro-entrepreneur", desc: "Cotisations sur CA. Régime simple mais protection retraite limitée." },
              { id: "sasu", icon: "🏢", title: "Gérant SASU (assimilé salarié)", desc: "Cotisez comme un salarié. Meilleure protection retraite." },
              { id: "eurl", icon: "📋", title: "Gérant EURL / TNS", desc: "Cotisations SSI sur revenu net. Taux inférieurs au régime général." },
            ].map((s) => (
              <CardButton
                key={s.id} selected={f.statutJuridiqueC === s.id}
                onClick={() => u("statutJuridiqueC", s.id as FormData["statutJuridiqueC"])}
                icon={s.icon} title={s.title} desc={s.desc}
              />
            ))}
          </div>
        </div>
      );

    case "c_ca":
      return (
        <div>
          <SectionTitle text="Quel est votre chiffre d'affaires annuel moyen ?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { id: "commerce", label: "Commerce / Vente", desc: "Abattement 71%" },
              { id: "services", label: "Services (BIC)", desc: "Abattement 50%" },
              { id: "liberal_micro", label: "Libéral / BNC", desc: "Abattement 34%" },
            ].map((a) => (
              <CardButton
                key={a.id} selected={f.activiteMicroC === a.id}
                onClick={() => u("activiteMicroC", a.id as FormData["activiteMicroC"])}
                title={a.label} desc={a.desc}
              />
            ))}
          </div>
          <SliderField
            min={5000} max={300000} step={5000} value={f.chiffreAffairesC}
            onChange={(v) => u("chiffreAffairesC", v)}
            format={fmtEuro}
            note="Votre CA total encaissé dans l'année, avant toute déduction. C'est la somme de toutes vos factures encaissées. Vos cotisations retraite sont un pourcentage direct de ce chiffre."
          />
        </div>
      );

    case "c_salaire_sasu":
      return (
        <div>
          <SectionTitle text="Quel salaire vous versez-vous chaque mois ?" />
          <SliderField
            min={500} max={15000} step={100} value={f.salaireSASUC}
            onChange={(v) => u("salaireSASUC", v)}
            format={fmtEuroMois}
            note={
              <span>
                Votre salaire brut, c'est ce que votre société vous verse avant déduction des cotisations sociales.
                Exemple : si vous recevez 2&nbsp;300€ net sur votre compte, votre salaire brut est d'environ 3&nbsp;000€/mois.<br /><br />
                👉 C'est uniquement ce salaire qui cotise pour votre retraite en SASU — pas vos dividendes.
              </span>
            }
          />
        </div>
      );

    case "c_revenu":
      return (
        <div>
          {f.statutJuridiqueC === "sasu" ? (
            <>
              <SectionTitle text="Quel est votre revenu total annuel ?" />
              <SliderField
                min={20000} max={500000} step={5000} value={f.revenuNetC}
                onChange={(v) => u("revenuNetC", v)}
                format={fmtEuro}
                note="Incluez votre salaire annuel ET vos dividendes. Ce chiffre nous permet d'estimer votre niveau de vie et de calibrer vos recommandations d'épargne. Il n'impacte pas le calcul de votre pension de base — seul votre salaire compte pour ça."
              />
            </>
          ) : (
            <>
              <SectionTitle text="Quel est votre bénéfice net annuel ?" />
              <SliderField
                min={10000} max={300000} step={1000} value={f.revenuNetC}
                onChange={(v) => u("revenuNetC", v)}
                format={fmtEuro}
                note="C'est votre chiffre d'affaires moins toutes vos charges professionnelles (loyer bureau, matériel, frais de déplacement, cotisations...). Vous le trouvez sur votre déclaration fiscale 2035 ou sur votre bilan comptable. C'est cette base qui détermine vos cotisations retraite SSI."
              />
            </>
          )}
        </div>
      );

    case "c_per":
      return (
        <div>
          <SectionTitle text="Avez-vous un PER individuel en cours ?" />
          <p className="text-gray-500 mb-2">Plan d'Épargne Retraite individuel, anciennement Madelin.</p>
          <YesNo value={f.aPERC} onChange={(v) => u("aPERC", v)} />
          {f.aPERC && (
            <div className="mt-8 space-y-6">
              <SliderField
                label="Versements annuels sur votre PER"
                min={500} max={50000} step={500} value={f.versementsPERC}
                onChange={(v) => u("versementsPERC", v)}
                format={fmtEuro}
              />
              <SliderField
                label="Ancienneté du PER"
                min={1} max={20} value={f.anciennetePERC}
                onChange={(v) => u("anciennetePERC", v)}
                format={(v) => `${v} an${v > 1 ? "s" : ""}`}
              />
            </div>
          )}
          <InfoNote>Le PER est le levier retraite principal des indépendants. Les versements sont déductibles fiscalement dans la limite de 10% des revenus.</InfoNote>
        </div>
      );

    case "c_evolution":
      return (
        <div>
          <SectionTitle text="Comment va évoluer votre activité ?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { id: "croissance", icon: "📈", title: "En croissance", desc: "+2%/an en moyenne" },
              { id: "stable", icon: "➡️", title: "Stable", desc: "+1%/an (inflation)" },
              { id: "ralentissement", icon: "📉", title: "Ralentissement prévu", desc: "Réduction d'activité" },
            ].map((e) => (
              <CardButton
                key={e.id} selected={f.evolutionActiviteC === e.id}
                onClick={() => u("evolutionActiviteC", e.id as FormData["evolutionActiviteC"])}
                icon={e.icon} title={e.title} desc={e.desc}
              />
            ))}
          </div>
          {f.evolutionActiviteC === "ralentissement" && (
            <div className="space-y-6">
              <SliderField
                label="Dans combien d'années ?"
                min={1} max={20} value={f.ralentissementDansAnsC}
                onChange={(v) => u("ralentissementDansAnsC", v)}
                format={(v) => `${v} an${v > 1 ? "s" : ""}`}
              />
              <SliderField
                label="Réduction estimée de vos revenus"
                min={10} max={70} value={f.ralentissementReductionC}
                onChange={(v) => u("ralentissementReductionC", v)}
                format={(v) => `-${v}%`}
              />
            </div>
          )}
        </div>
      );

    case "c_changement":
      return (
        <div>
          <SectionTitle text="Envisagez-vous un changement de statut ?" />
          <p className="text-gray-500 mb-2">Un changement peut significativement modifier vos droits retraite futurs.</p>
          <YesNo value={f.envisageChangementStatutC} onChange={(v) => u("envisageChangementStatutC", v)} />
          {f.envisageChangementStatutC && (
            <div className="mt-6 grid grid-cols-1 gap-3">
              {["Passer en SASU", "Passer en portage salarial", "Retour au salariat"].map((opt) => (
                <CardButton
                  key={opt} selected={f.typeChangementStatutC === opt}
                  onClick={() => u("typeChangementStatutC", opt)} title={opt}
                />
              ))}
            </div>
          )}
          <InfoNote>Nous intégrerons ce changement dans nos recommandations pour optimiser votre stratégie retraite.</InfoNote>
        </div>
      );

    // ── D — Libéral ───────────────────────────────────────────────────────────
    case "d_profession":
      return (
        <div>
          <SectionTitle text="Quelle est votre profession ?" />
          <p className="text-gray-500 mb-6">Chaque profession libérale a sa propre caisse de retraite.</p>
          <div className="relative">
            <select
              value={f.professionD}
              onChange={(e) => {
                const prof = e.target.value;
                const found = PROFESSIONS_LIBERALES.find(p => p.profession === prof);
                u("professionD", prof);
                u("caisseD", found?.caisse || "");
              }}
              className="w-full px-5 py-4 rounded-2xl border-2 appearance-none cursor-pointer focus:outline-none text-gray-900"
              style={{ borderColor: f.professionD ? "#1D9E75" : "#e5e7eb" }}
            >
              <option value="">Sélectionnez votre profession…</option>
              {PROFESSIONS_LIBERALES.map((p) => (
                <option key={p.profession} value={p.profession}>{p.profession}</option>
              ))}
            </select>
          </div>
          {f.caisseD && (
            <div className="mt-4 p-3 rounded-xl text-sm" style={{ backgroundColor: "#e1f5ee", color: "#085041" }}>
              Caisse de retraite : <strong>{f.caisseD}</strong>
            </div>
          )}
        </div>
      );

    case "d_revenus":
      return (
        <div>
          <SectionTitle text="Votre revenu net BNC/BIC annuel moyen" />
          <p className="text-gray-500 mb-8">Bénéfice net après déduction de toutes vos charges professionnelles.</p>
          <SliderField
            min={20000} max={500000} step={5000} value={f.revenuNetBNCD}
            onChange={(v) => u("revenuNetBNCD", v)}
            format={fmtEuro}
            note="C'est la base de vos cotisations à votre caisse de retraite. Vous le trouvez sur votre déclaration 2035 ou 2042 C Pro."
          />
        </div>
      );

    case "d_points":
      return (
        <div>
          <SectionTitle text="Connaissez-vous votre solde de points retraite ?" />
          <p className="text-gray-500 mb-2">Vous le trouvez sur le relevé annuel envoyé par votre caisse.</p>
          <YesNo value={f.connaitPointsD} onChange={(v) => u("connaitPointsD", v)} />
          {f.connaitPointsD && (
            <div className="mt-8">
              <SliderField
                label="Nombre de points accumulés"
                min={0}
                max={f.caisseD === "CARMF" ? 50000 : f.caisseD === "CIPAV" ? 15000 : 30000}
                step={100}
                value={f.pointsD}
                onChange={(v) => u("pointsD", v)}
                format={(v) => `${v.toLocaleString("fr-FR")} pts`}
              />
            </div>
          )}
          {!f.connaitPointsD && (
            <InfoNote>Pas de problème — nous estimerons vos points automatiquement à partir de vos revenus et de vos années d'activité.</InfoNote>
          )}
        </div>
      );

    case "d_regimes":
      return (
        <div>
          <SectionTitle text="À quels régimes cotisez-vous ?" />
          <p className="text-gray-500 mb-6">Cochez tous les régimes auxquels vous cotisez actuellement.</p>
          <div className="space-y-3">
            {(f.caisseD === "CARMF"
              ? ["Régime de base", "ASV (Allocation Supplémentaire Vieillesse)", "Régime complémentaire", "PCV (Plan Complémentaire Vieillesse)"]
              : f.caisseD === "CARPIMKO"
              ? ["Régime de base", "Régime complémentaire", "Régime invalidité-décès"]
              : ["Régime de base", "Régime complémentaire"]
            ).map((regime) => {
              const selected = f.regimesD.includes(regime);
              return (
                <button
                  key={regime}
                  onClick={() => u("regimesD", selected ? f.regimesD.filter(r => r !== regime) : [...f.regimesD, regime])}
                  className="w-full text-left p-4 rounded-2xl border-2 flex items-center gap-3 transition-all"
                  style={{ borderColor: selected ? "#1D9E75" : "#e5e7eb", backgroundColor: selected ? "#e1f5ee" : "white" }}
                >
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: selected ? "#1D9E75" : "#e5e7eb" }}>
                    {selected && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <span className="text-sm text-gray-700">{regime}</span>
                </button>
              );
            })}
          </div>
        </div>
      );

    case "d_salariat":
      return (
        <div>
          <SectionTitle text="Avez-vous des années de salariat ?" />
          <p className="text-gray-500 mb-2">Avant ou en parallèle de votre activité libérale.</p>
          <YesNo value={f.aAnneesSalariatD} onChange={(v) => u("aAnneesSalariatD", v)} />
          {f.aAnneesSalariatD && (
            <div className="mt-8 space-y-6">
              <SliderField
                label="Nombre d'années en tant que salarié"
                min={1} max={30} value={f.anneesSalariatD}
                onChange={(v) => u("anneesSalariatD", v)}
                format={(v) => `${v} an${v > 1 ? "s" : ""}`}
              />
              <SliderField
                label="Revenu brut annuel moyen pendant ces années"
                min={15000} max={100000} step={1000} value={f.revenuSalariatD}
                onChange={(v) => u("revenuSalariatD", v)}
                format={fmtEuro}
              />
            </div>
          )}
        </div>
      );

    case "d_secteur":
      return (
        <div>
          <SectionTitle text="Exercez-vous en secteur 1, 2 ou 3 ?" />
          <p className="text-gray-500 mb-8">Le secteur impacte vos cotisations ASV et donc votre retraite CARMF.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: "1", title: "Secteur 1", desc: "Tarifs conventionnels — cotisations ASV complètes" },
              { id: "2", title: "Secteur 2", desc: "Honoraires libres — cotisations ASV réduites" },
              { id: "3", title: "Secteur 3 / OPTAM", desc: "Option pratique tarifaire maîtrisée" },
            ].map((s) => (
              <CardButton
                key={s.id} selected={f.secteurMedecinD === s.id}
                onClick={() => u("secteurMedecinD", s.id as FormData["secteurMedecinD"])}
                title={s.title} desc={s.desc}
              />
            ))}
          </div>
        </div>
      );

    case "d_evolution":
      return (
        <div>
          <SectionTitle text="Évolution de votre activité et départ" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { id: "croissance", icon: "📈", title: "Activité croissante", desc: "+2%/an" },
              { id: "stable", icon: "➡️", title: "Stable", desc: "+1%/an" },
              { id: "ralentissement", icon: "📉", title: "Réduction prévue", desc: "Moins d'actes" },
            ].map((e) => (
              <CardButton
                key={e.id} selected={f.evolutionActiviteD === e.id}
                onClick={() => u("evolutionActiviteD", e.id as FormData["evolutionActiviteD"])}
                icon={e.icon} title={e.title} desc={e.desc}
              />
            ))}
          </div>
          <div className="mt-4 p-4 rounded-2xl" style={{ backgroundColor: "#f0faf6" }}>
            <p className="text-sm font-medium text-gray-700 mb-3">Envisagez-vous une retraite progressive ?</p>
            <p className="text-xs text-gray-500 mb-4">Activité réduite avant départ total, en percevant une fraction de pension.</p>
            <YesNo value={f.retraiteProgressiveD} onChange={(v) => u("retraiteProgressiveD", v)} />
          </div>
        </div>
      );

    // ── E — Mixte ─────────────────────────────────────────────────────────────
    case "e_statuts":
      return (
        <div>
          <SectionTitle text="Quels statuts avez-vous eu ?" />
          <p className="text-gray-500 mb-8">Cochez tous les statuts de votre carrière.</p>
          <div className="space-y-3">
            {[
              { id: "salarie", icon: "👔", label: "Salarié privé" },
              { id: "fonctionnaire", icon: "🏛️", label: "Fonctionnaire" },
              { id: "independant", icon: "💼", label: "Indépendant (micro, SASU, EURL)" },
              { id: "liberal", icon: "⚕️", label: "Profession libérale" },
            ].map((s) => {
              const selected = f.statutsMixtes.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => u("statutsMixtes", selected ? f.statutsMixtes.filter(x => x !== s.id) : [...f.statutsMixtes, s.id])}
                  className="w-full text-left p-4 rounded-2xl border-2 flex items-center gap-3 transition-all"
                  style={{ borderColor: selected ? "#1D9E75" : "#e5e7eb", backgroundColor: selected ? "#e1f5ee" : "white" }}
                >
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: selected ? "#1D9E75" : "#e5e7eb" }}>
                    {selected && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <span className="text-xl mr-2">{s.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      );

    case "e_repartition":
      return (
        <div>
          <SectionTitle text="Répartition de votre carrière" />
          <p className="text-gray-500 mb-8">Pour chaque statut, indiquez la durée et vos revenus moyens.</p>
          <div className="space-y-8">
            {f.statutsMixtes.map((statut) => {
              const labels: Record<string, string> = { salarie: "Salarié", fonctionnaire: "Fonctionnaire", independant: "Indépendant", liberal: "Libéral" };
              return (
                <div key={statut} className="p-5 rounded-2xl border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-5">{labels[statut]}</p>
                  <div className="space-y-5">
                    <SliderField
                      label="Nombre d'années"
                      min={1} max={40}
                      value={f.anneesParStatutMixte[statut] || 10}
                      onChange={(v) => u("anneesParStatutMixte", { ...f.anneesParStatutMixte, [statut]: v })}
                      format={(v) => `${v} an${v > 1 ? "s" : ""}`}
                    />
                    <SliderField
                      label="Revenu annuel moyen"
                      min={10000} max={150000} step={2000}
                      value={f.revenusParStatutMixte[statut] || 40000}
                      onChange={(v) => u("revenusParStatutMixte", { ...f.revenusParStatutMixte, [statut]: v })}
                      format={fmtEuro}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );

    case "e_actuel":
      return (
        <div>
          <SectionTitle text="Quel est votre statut actuel ?" />
          <p className="text-gray-500 mb-8">Parmi les statuts que vous avez sélectionnés.</p>
          <div className="grid grid-cols-1 gap-3">
            {f.statutsMixtes.map((statut) => {
              const labels: Record<string, string> = { salarie: "👔 Salarié", fonctionnaire: "🏛️ Fonctionnaire", independant: "💼 Indépendant", liberal: "⚕️ Libéral" };
              return (
                <CardButton
                  key={statut} selected={f.statutActuelMixte === statut}
                  onClick={() => u("statutActuelMixte", statut)}
                  title={labels[statut] || statut}
                />
              );
            })}
          </div>
        </div>
      );

    // ── Final ──────────────────────────────────────────────────────────────────
    case "fin_epargne":
      return (
        <div>
          <SectionTitle text="Quelle est votre capacité d'épargne mensuelle ?" />
          <p className="text-gray-500 mb-8">Montant que vous pouvez réalistement mettre de côté chaque mois en plus de l'existant.</p>
          <SliderField
            min={0} max={5000} step={50} value={f.capaciteEpargneMensuelle}
            onChange={(v) => u("capaciteEpargneMensuelle", v)}
            format={fmtEuroMois}
          />
        </div>
      );

    case "fin_cible":
      return (
        <div>
          <SectionTitle text="Quel revenu mensuel net visez-vous à la retraite ?" />
          <p className="text-gray-500 mb-8">
            Montant <BrightWord word="net" color="#085041" tip={TIP_NET} /> mensuel dont vous auriez besoin. Incluez loyer ou remboursement de prêt, dépenses courantes, loisirs, santé…
          </p>
          <SliderField
            min={500} max={10000} step={100} value={f.revenuCible}
            onChange={(v) => u("revenuCible", v)}
            format={fmtEuroMois}
            note="Les experts recommandent en général 70-80% de votre revenu actuel pour maintenir votre niveau de vie."
          />
        </div>
      );

    case "fin_contact":
      return (
        <div>
          <SectionTitle text="Dernière étape — où envoyer votre diagnostic ?" />
          <p className="text-gray-500 mb-8">Pour recevoir votre diagnostic par email et sauvegarder vos résultats.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prénom (optionnel)</label>
              <input
                type="text"
                value={f.prenom}
                onChange={(e) => u("prenom", e.target.value)}
                placeholder="Votre prénom"
                className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none text-gray-900"
                style={{ borderColor: "#e5e7eb" }}
                onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom <span style={{ color: "#1D9E75" }}>*</span></label>
              <input
                type="text"
                value={f.nom}
                onChange={(e) => u("nom", e.target.value)}
                placeholder="Votre nom de famille"
                className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none text-gray-900"
                style={{ borderColor: f.nom === "" ? "#e5e7eb" : "#e5e7eb" }}
                onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email <span style={{ color: "#1D9E75" }}>*</span></label>
              <input
                type="email"
                value={f.email}
                onChange={(e) => u("email", e.target.value)}
                placeholder="votre@email.fr"
                className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none text-gray-900"
                style={{ borderColor: f.email && !f.email.includes("@") ? "#ef4444" : "#e5e7eb" }}
                onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <label className="flex items-start gap-3 cursor-pointer mt-6">
              <div
                className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 cursor-pointer"
                style={{ borderColor: f.optInCourtier ? "#1D9E75" : "#d1d5db", backgroundColor: f.optInCourtier ? "#1D9E75" : "white" }}
                onClick={() => u("optInCourtier", !f.optInCourtier)}
              >
                {f.optInCourtier && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
              </div>
              <span className="text-sm text-gray-500 leading-relaxed">
                Je souhaite être contacté gratuitement par un conseiller en gestion de patrimoine partenaire pour approfondir mon plan retraite.
              </span>
            </label>
          </div>
        </div>
      );

    default:
      return <div className="text-gray-500">Étape inconnue : {stepId}</div>;
  }
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DiagnosticPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState<StepId>("statut");
  const [visible, setVisible] = useState(true);

  const steps = getStepSequence(formData);
  // Ensure currentStep is always in the current sequence when statut changes
  useEffect(() => {
    if (!steps.includes(currentStep)) {
      setCurrentStep(steps[0]);
    }
  }, [formData.statut]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-calculate anneesActivite from birth year (début activité supposé à 22 ans)
  useEffect(() => {
    if (formData.trimestreMode === "inconnu") {
      const estimated = Math.max(1, Math.min(45, ANNEE_ACTUELLE - formData.anneeNaissance - 22));
      setFormData((prev) => ({ ...prev, anneesActivite: estimated }));
    }
  }, [formData.anneeNaissance, formData.trimestreMode]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentIndex = steps.indexOf(currentStep);
  const totalSteps = steps.length;
  const progress = Math.round(((currentIndex + 1) / totalSteps) * 100);

  const update = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  function navigate(dir: "next" | "prev") {
    const newIdx = dir === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIdx < 0 || newIdx >= steps.length) return;
    setVisible(false);
    setTimeout(() => {
      setCurrentStep(steps[newIdx]);
      setVisible(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }

  function submit() {
    const result = calculateDiagnostic(formData);
    if (typeof window !== "undefined") {
      localStorage.setItem("happyRetraite_diagnostic", JSON.stringify({ formData, result }));
    }
    router.push("/resultats");
  }

  const isLast = currentIndex === steps.length - 1;
  const canContinue = validateStep(currentStep, formData);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#F7F9FC" }}>
      {/* Header */}
      <header className="bg-white px-6 py-4 sticky top-0 z-10" style={{ borderBottom: "1px solid #E8EDF5" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-bold" style={{ color: "#0F1F3D" }}>
            Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium" style={{ color: "#6B7A99" }}>
              {currentIndex + 1} / {totalSteps}
            </span>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: "#1D9E75" }}
            >
              {progress}%
            </span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mt-3 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#E8EDF5" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: "#1D9E75" }}
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-start justify-center px-6 py-10">
        <div
          className="w-full max-w-2xl transition-all duration-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
        >
          {renderStep(currentStep, formData, update)}
        </div>
      </main>

      {/* Navigation */}
      <div className="bg-white px-6 py-5 sticky bottom-0 z-10" style={{ borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("prev")}
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors"
            style={{
              color: "#6B7A99",
              background: "transparent",
              border: "none",
              visibility: currentIndex === 0 ? "hidden" : "visible",
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Précédent
          </button>

          <button
            onClick={isLast ? submit : () => navigate("next")}
            disabled={!canContinue}
            className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-sm transition-all"
            style={{
              backgroundColor: "#1D9E75",
              opacity: canContinue ? 1 : 0.35,
              cursor: canContinue ? "pointer" : "not-allowed",
              boxShadow: canContinue ? "0 4px 16px rgba(29,158,117,0.3)" : "none",
            }}
          >
            {isLast ? "Voir mon diagnostic" : "Continuer"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
