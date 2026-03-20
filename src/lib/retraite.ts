// ─── Constants ───────────────────────────────────────────────────────────────
export const PASS_2026 = 48600;
export const ANNEE_ACTUELLE = 2026;

// ─── Types ────────────────────────────────────────────────────────────────────
export type Statut = "salarie" | "fonctionnaire" | "independant" | "liberal" | "mixte" | "";
export type CategorieFC = "sedentaire" | "active" | "super_active" | "hospitaliere" | "";
export type StatutJuridiqueC = "micro" | "sasu" | "eurl" | "";
export type TypeActiviteMicro = "commerce" | "services" | "liberal_micro" | "";
export type EvolutionRevenus = "hausse" | "stable" | "baisse" | "";
export type EvolutionCarriereFC = "final" | "avancement" | "temps_partiel" | "";
export type EvolutionActivite = "croissance" | "stable" | "ralentissement" | "";

export interface FormData {
  // Q1-Q6 Commun
  statut: Statut;
  anneeNaissance: number;
  trimestreMode: "connu" | "inconnu";
  trimestresCoties: number;
  anneesActivite: number;
  periodesSansCotisation: boolean;
  anneesSansCotisation: number;
  typePeriodeSansCotisation: string;
  enfants: number;
  epargneExistante: number;

  // Branche A — Salarié privé
  revenuBrutAnnuel: number;
  evolutionRevenusSal: EvolutionRevenus;
  baisseAnsSal: number;
  baisseReductionSal: number;
  aEpargneSalariale: boolean;
  typeEpargneSalariale: string;
  montantEpargneSalariale: number;
  aRetraiteSupp: boolean;
  montantRetraiteSupp: number;
  souhaitRachat: boolean;

  // Branche B — Fonctionnaire
  categorieFC: CategorieFC;
  gradeFC: string;
  traitementFC: number;
  partPrimesFC: number;
  bonificationsFC: string[];
  evolutionCarriereFC: EvolutionCarriereFC;
  augmentationTraitementFC: number;
  tempsPartielDansAnsFC: number;
  pourcentageTempsPartielFC: number;
  aPeriodesPriveFC: boolean;
  anneesPriveFC: number;

  // Branche C — Indépendant
  statutJuridiqueC: StatutJuridiqueC;
  activiteMicroC: TypeActiviteMicro;
  chiffreAffairesC: number;
  revenuNetC: number;
  verseSalaireC: boolean;
  salaireSASUC: number;
  aPERC: boolean;
  versementsPERC: number;
  anciennetePERC: number;
  evolutionActiviteC: EvolutionActivite;
  ralentissementDansAnsC: number;
  ralentissementReductionC: number;
  envisageChangementStatutC: boolean;
  typeChangementStatutC: string;

  // Branche D — Libéral
  professionD: string;
  caisseD: string;
  revenuNetBNCD: number;
  connaitPointsD: boolean;
  pointsD: number;
  regimesD: string[];
  aAnneesSalariatD: boolean;
  anneesSalariatD: number;
  revenuSalariatD: number;
  secteurMedecinD: "1" | "2" | "3" | "";
  evolutionActiviteD: EvolutionActivite;
  retraiteProgressiveD: boolean;
  retraiteProgressiveDansAnsD: number;
  retraiteProgressivePctD: number;

  // Branche E — Mixte
  statutsMixtes: string[];
  anneesParStatutMixte: Record<string, number>;
  revenusParStatutMixte: Record<string, number>;
  statutActuelMixte: string;

  // Bloc final
  capaciteEpargneMensuelle: number;
  revenuCible: number;
  prenom: string;
  nom: string;
  email: string;
  optInCourtier: boolean;
}

export const defaultFormData: FormData = {
  statut: "",
  anneeNaissance: 1978,
  trimestreMode: "inconnu",
  trimestresCoties: 80,
  anneesActivite: 15,
  periodesSansCotisation: false,
  anneesSansCotisation: 2,
  typePeriodeSansCotisation: "",
  enfants: 0,
  epargneExistante: 0,

  revenuBrutAnnuel: 45000,
  evolutionRevenusSal: "",
  baisseAnsSal: 5,
  baisseReductionSal: 20,
  aEpargneSalariale: false,
  typeEpargneSalariale: "",
  montantEpargneSalariale: 2000,
  aRetraiteSupp: false,
  montantRetraiteSupp: 300,
  souhaitRachat: false,

  categorieFC: "",
  gradeFC: "",
  traitementFC: 2500,
  partPrimesFC: 20,
  bonificationsFC: [],
  evolutionCarriereFC: "",
  augmentationTraitementFC: 10,
  tempsPartielDansAnsFC: 5,
  pourcentageTempsPartielFC: 80,
  aPeriodesPriveFC: false,
  anneesPriveFC: 5,

  statutJuridiqueC: "",
  activiteMicroC: "",
  chiffreAffairesC: 40000,
  revenuNetC: 30000,
  verseSalaireC: true,
  salaireSASUC: 3000,
  aPERC: false,
  versementsPERC: 3000,
  anciennetePERC: 3,
  evolutionActiviteC: "",
  ralentissementDansAnsC: 5,
  ralentissementReductionC: 30,
  envisageChangementStatutC: false,
  typeChangementStatutC: "",

  professionD: "",
  caisseD: "",
  revenuNetBNCD: 80000,
  connaitPointsD: false,
  pointsD: 0,
  regimesD: [],
  aAnneesSalariatD: false,
  anneesSalariatD: 5,
  revenuSalariatD: 40000,
  secteurMedecinD: "",
  evolutionActiviteD: "",
  retraiteProgressiveD: false,
  retraiteProgressiveDansAnsD: 5,
  retraiteProgressivePctD: 50,

  statutsMixtes: [],
  anneesParStatutMixte: {},
  revenusParStatutMixte: {},
  statutActuelMixte: "",

  capaciteEpargneMensuelle: 300,
  revenuCible: 2500,
  prenom: "",
  nom: "",
  email: "",
  optInCourtier: false,
};

// ─── Profession / Caisse mapping ──────────────────────────────────────────────
export const PROFESSIONS_LIBERALES: { profession: string; caisse: string }[] = [
  { profession: "Médecin généraliste", caisse: "CARMF" },
  { profession: "Médecin spécialiste", caisse: "CARMF" },
  { profession: "Chirurgien", caisse: "CARMF" },
  { profession: "Kinésithérapeute", caisse: "CARPIMKO" },
  { profession: "Infirmier libéral", caisse: "CARPIMKO" },
  { profession: "Orthophoniste", caisse: "CARPIMKO" },
  { profession: "Pédicure-podologue", caisse: "CARPIMKO" },
  { profession: "Chirurgien-dentiste", caisse: "CARCDSF" },
  { profession: "Orthodontiste", caisse: "CARCDSF" },
  { profession: "Pharmacien", caisse: "CAVP" },
  { profession: "Avocat", caisse: "CNBF" },
  { profession: "Architecte", caisse: "CIPAV" },
  { profession: "Consultant", caisse: "CIPAV" },
  { profession: "Expert", caisse: "CIPAV" },
  { profession: "Psychologue", caisse: "CIPAV" },
  { profession: "Ostéopathe", caisse: "CIPAV" },
  { profession: "Coach", caisse: "CIPAV" },
  { profession: "Autre libéral", caisse: "CIPAV" },
  { profession: "Expert-comptable", caisse: "CAVEC" },
  { profession: "Commissaire aux comptes", caisse: "CAVEC" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function getAgeLegal(anneeNaissance: number, categorieFC?: CategorieFC): number {
  if (categorieFC === "super_active") return 52;
  if (categorieFC === "active") return 57;
  if (categorieFC === "hospitaliere") return 59;
  if (anneeNaissance < 1955) return 62;
  if (anneeNaissance <= 1960) return 63;
  if (anneeNaissance <= 1963) return 63;
  return 64;
}

export function getTrimestreRequis(anneeNaissance: number): number {
  if (anneeNaissance < 1958) return 166;
  if (anneeNaissance <= 1960) return 167;
  if (anneeNaissance <= 1963) return 169;
  if (anneeNaissance <= 1967) return 171;
  return 172;
}

function getTrimestresValides(f: FormData): number {
  const base = f.trimestreMode === "connu" ? f.trimestresCoties : f.anneesActivite * 4;
  if (f.periodesSansCotisation) {
    const lostPct =
      f.typePeriodeSansCotisation === "chomage_non_indemnise" ||
      f.typePeriodeSansCotisation === "expatriation"
        ? 1.0
        : 0.5;
    return Math.max(0, base - Math.floor(f.anneesSansCotisation * 4 * lostPct));
  }
  return base;
}

function majEnfants(enfants: number) {
  return enfants >= 3 ? 1.1 : 1.0;
}

function computePERLevier(epargne: number, ratio: number, anneesRestantes: number): {
  versement: number; capital: number; rente: number; isFallback: boolean;
} {
  const isFallback = !epargne || epargne <= 0;
  const base = isFallback ? 200 : epargne;
  const versement = Math.max(1, Math.round(base * ratio));
  const capital = Math.round(versement * 12 * anneesRestantes * Math.pow(1.04, anneesRestantes));
  const rente = Math.max(1, Math.round((capital * 0.04) / 12));
  return { versement, capital, rente, isFallback };
}

// ─── Result interface ─────────────────────────────────────────────────────────
export interface DiagnosticResult {
  pensionEstimee: number;
  ageDepart: number;
  anneesRestantes: number;
  trimestresValides: number;
  trimestresRequis: number;
  trimestresManquants: number;
  gap: number;
  leviers: { titre: string; detail: string; priorite: number }[];
  regime: string;
}

// ─── calculateSalariePrive ────────────────────────────────────────────────────
export function calculateSalariePrive(f: FormData): DiagnosticResult {
  const ageDepart = getAgeLegal(f.anneeNaissance);
  const ageActuel = ANNEE_ACTUELLE - f.anneeNaissance;
  const anneesRestantes = Math.max(0, ageDepart - ageActuel);

  const trimestresValides = Math.min(getTrimestresValides(f) + anneesRestantes * 4, 200);
  const trimestresRequis = getTrimestreRequis(f.anneeNaissance);
  const trimestresManquants = Math.max(0, trimestresRequis - trimestresValides);

  let revenuRef = f.revenuBrutAnnuel;
  if (f.evolutionRevenusSal === "hausse") revenuRef *= Math.pow(1.015, anneesRestantes / 2);
  if (f.evolutionRevenusSal === "baisse") revenuRef *= (1 - f.baisseReductionSal / 100);
  const sam = Math.min(revenuRef, PASS_2026);

  const ratioT = Math.min(trimestresValides / trimestresRequis, 1);
  let pensionBase = (sam * 0.5 * ratioT) / 12;

  if (trimestresManquants > 0) pensionBase *= (1 - Math.min(trimestresManquants * 0.00625, 0.2));
  const surco = Math.max(0, trimestresValides - trimestresRequis);
  if (surco > 0) pensionBase *= (1 + surco * 0.0125);
  pensionBase *= majEnfants(f.enfants);

  const agircArrco = pensionBase * 0.55;
  const epargneSalRente = f.aEpargneSalariale
    ? (f.montantEpargneSalariale * anneesRestantes * 0.04) / 12
    : 0;
  const retrSupp = f.aRetraiteSupp ? f.montantRetraiteSupp : 0;
  const pensionEstimee = Math.round(pensionBase + agircArrco + epargneSalRente + retrSupp);
  const gap = f.revenuCible - pensionEstimee;

  const per1 = computePERLevier(f.capaciteEpargneMensuelle, 0.4, anneesRestantes);

  const leviers: DiagnosticResult["leviers"] = [
    {
      priorite: 1,
      titre: "Alimenter un PER",
      detail: `Verser ${per1.versement}€/mois pendant ${anneesRestantes} ans constitue ~${per1.capital.toLocaleString("fr-FR")}€ de capital et génère ~${per1.rente}€/mois de rente. Avantage fiscal immédiat à votre tranche marginale.${per1.isFallback ? " (estimation basée sur un versement type de 200€/mois)" : ""}`,
    },
  ];

  if (trimestresManquants > 0) {
    const coutRachat = Math.round(trimestresManquants * (sam / 400) * 1.5);
    const gainRachat = Math.round((sam * 0.5 / 12) * (trimestresManquants / trimestresRequis));
    leviers.push({
      priorite: 2,
      titre: `Racheter ${trimestresManquants} trimestres manquants`,
      detail: `Coût estimé : ~${coutRachat.toLocaleString("fr-FR")}€. Gain : +${gainRachat}€/mois à vie. ROI en ~${Math.round(coutRachat / Math.max(gainRachat, 1) / 12)} ans.`,
    });
  } else {
    leviers.push({
      priorite: 2,
      titre: "Profiter de la surcote (départ tardif)",
      detail: `Travailler 4 trimestres supplémentaires après le taux plein rapporte +${Math.round(pensionBase * 0.05)}€/mois grâce à la surcote de 1,25%/trimestre.`,
    });
  }

  leviers.push({
    priorite: 3,
    titre: f.evolutionRevenusSal === "hausse"
      ? "Décaler légèrement votre départ"
      : "Augmenter vos revenus des prochaines années",
    detail: "Chaque hausse de 1 000€/an de SAM = +42€/mois de pension de base. Négocier une augmentation ou une prime contribue directement à votre retraite.",
  });

  return { pensionEstimee, ageDepart, anneesRestantes, trimestresValides, trimestresRequis, trimestresManquants, gap, leviers, regime: "Régime général + Agirc-Arrco" };
}

// ─── calculateFonctionnaire ───────────────────────────────────────────────────
export function calculateFonctionnaire(f: FormData): DiagnosticResult {
  const ageDepart = getAgeLegal(f.anneeNaissance, f.categorieFC);
  const ageActuel = ANNEE_ACTUELLE - f.anneeNaissance;
  const anneesRestantes = Math.max(0, ageDepart - ageActuel);

  const trimestresValides = Math.min(getTrimestresValides(f) + anneesRestantes * 4, 200);
  const trimestresRequis = getTrimestreRequis(f.anneeNaissance);
  const trimestresManquants = Math.max(0, trimestresRequis - trimestresValides);

  let traitement = f.traitementFC;
  if (f.evolutionCarriereFC === "avancement") traitement *= (1 + f.augmentationTraitementFC / 100);
  if (f.evolutionCarriereFC === "temps_partiel") traitement *= (f.pourcentageTempsPartielFC / 100);

  const ratioT = Math.min(trimestresValides / trimestresRequis, 1);
  let bonifTrimestres = 0;
  if (f.bonificationsFC.includes("enfants") && f.enfants > 0) bonifTrimestres += Math.min(f.enfants, 3) * 4;
  if (f.bonificationsFC.includes("categorie_active") && f.categorieFC === "active") bonifTrimestres += Math.floor(trimestresValides / 5);

  const tauxFinal = Math.min(0.75 + (bonifTrimestres / Math.max(trimestresRequis, 1)) * 0.75, 0.80);
  let pensionBase = traitement * tauxFinal * ratioT;

  if (trimestresManquants > 0) pensionBase *= (1 - Math.min(trimestresManquants * 0.0125, 0.20));
  const surco = Math.max(0, trimestresValides - trimestresRequis);
  if (surco > 0) pensionBase *= (1 + surco * 0.0125);
  pensionBase *= majEnfants(f.enfants);

  const rafp = traitement * Math.min(f.partPrimesFC / 100, 0.20) * 0.10;

  let pensionPrive = 0;
  if (f.aPeriodesPriveFC && f.anneesPriveFC > 0) {
    const tPrive = f.anneesPriveFC * 4;
    const base = (Math.min(35000, PASS_2026) * 0.5 * (tPrive / trimestresRequis)) / 12;
    pensionPrive = base * 1.55;
  }

  const pensionEstimee = Math.round(pensionBase + rafp + pensionPrive);
  const gap = f.revenuCible - pensionEstimee;

  const per2 = computePERLevier(f.capaciteEpargneMensuelle, 0.4, anneesRestantes);

  const leviers: DiagnosticResult["leviers"] = [
    {
      priorite: 1,
      titre: "PER individuel en complément",
      detail: `Votre pension représente ~${Math.round(tauxFinal * 100)}% de votre traitement. Un PER à ${per2.versement}€/mois pendant ${anneesRestantes} ans génèrerait ~${per2.rente}€/mois de rente complémentaire.${per2.isFallback ? " (estimation basée sur un versement type de 200€/mois)" : ""}`,
    },
    {
      priorite: 2,
      titre: "Vérifier vos droits à bonification",
      detail: f.enfants > 0
        ? `Avec ${f.enfants} enfant(s), vous pouvez bénéficier d'une bonification (1 an par enfant né avant 2004) qui peut porter votre taux au-delà de 75%. Renseignez-vous auprès de votre service RH.`
        : "Les bonifications (services hors Europe, catégorie active) peuvent porter votre taux jusqu'à 80%. Vérifiez vos droits auprès de votre DRH.",
    },
    {
      priorite: 3,
      titre: "Primes et RAFP",
      detail: `Vos primes (${f.partPrimesFC}% de vos revenus) ne sont pas incluses dans votre pension de base mais cotisent au RAFP. Votre RAFP estimé est de ${Math.round(rafp)}€/mois. Vérifiez vos cotisations.`,
    },
  ];

  return { pensionEstimee, ageDepart, anneesRestantes, trimestresValides, trimestresRequis, trimestresManquants, gap, leviers, regime: "CNRACL / SRE + RAFP" };
}

// ─── calculateIndependant ─────────────────────────────────────────────────────
export function calculateIndependant(f: FormData): DiagnosticResult {
  const ageDepart = getAgeLegal(f.anneeNaissance);
  const ageActuel = ANNEE_ACTUELLE - f.anneeNaissance;
  const anneesRestantes = Math.max(0, ageDepart - ageActuel);

  const trimestresValides = Math.min(getTrimestresValides(f) + anneesRestantes * 4, 200);
  const trimestresRequis = getTrimestreRequis(f.anneeNaissance);
  const trimestresManquants = Math.max(0, trimestresRequis - trimestresValides);

  let pensionBase = 0;
  let complementaire = 0;

  if (f.statutJuridiqueC === "micro") {
    const abattement = f.activiteMicroC === "commerce" ? 0.71 : f.activiteMicroC === "services" ? 0.50 : 0.34;
    const revenuNetMicro = f.chiffreAffairesC * (1 - abattement);
    const ram = Math.min(revenuNetMicro, PASS_2026);
    const ratioT = Math.min(trimestresValides / trimestresRequis, 1);
    pensionBase = (ram * 0.5 * ratioT) / 12;
    complementaire = pensionBase * 0.15;
  } else if (f.statutJuridiqueC === "sasu") {
    const salaireBrut = f.verseSalaireC ? f.salaireSASUC * 12 : 0;
    const revenuRef = Math.min(salaireBrut, PASS_2026);
    const ratioT = Math.min(trimestresValides / trimestresRequis, 1);
    pensionBase = (revenuRef * 0.5 * ratioT) / 12;
    complementaire = pensionBase * 0.55;
  } else {
    const revenuRef = Math.min(f.revenuNetC, PASS_2026);
    const ratioT = Math.min(trimestresValides / trimestresRequis, 1);
    pensionBase = (revenuRef * 0.5 * ratioT) / 12;
    complementaire = pensionBase * 0.30;
  }

  pensionBase *= majEnfants(f.enfants);

  let perRente = 0;
  if (f.aPERC) {
    const capitalPER = f.versementsPERC * 12 * anneesRestantes * Math.pow(1.03, anneesRestantes / 2);
    perRente = Math.round((capitalPER * 0.04) / 12);
  }

  const pensionEstimee = Math.round(pensionBase + complementaire + perRente);
  const gap = f.revenuCible - pensionEstimee;

  const per3 = computePERLevier(f.capaciteEpargneMensuelle, 0.5, anneesRestantes);

  const leviers: DiagnosticResult["leviers"] = [
    {
      priorite: 1,
      titre: "PER individuel — priorité absolue",
      detail: `En tant qu'indépendant, verser ${per3.versement}€/mois génèrerait ~${per3.rente}€/mois de rente. Les versements sont déductibles fiscalement jusqu'à 10% de vos revenus.${per3.isFallback ? " (estimation basée sur un versement type de 200€/mois)" : ""}`,
    },
  ];

  if (f.statutJuridiqueC === "micro" && gap > 300) {
    leviers.push({
      priorite: 2,
      titre: "Envisager le passage en SASU",
      detail: "En SASU, vous pouvez verser un salaire et cotiser comme un salarié, ce qui améliore significativement vos droits retraite par rapport au régime micro (cotisations 6× plus élevées en base).",
    });
  } else if (f.statutJuridiqueC === "sasu") {
    leviers.push({
      priorite: 2,
      titre: "Optimiser le mix salaire/dividendes",
      detail: "En SASU, les dividendes ne cotisent pas pour la retraite. Augmenter votre salaire améliore vos droits. Calculez le seuil optimal avec votre expert-comptable.",
    });
  } else {
    leviers.push({
      priorite: 2,
      titre: "Augmenter votre assiette de cotisation SSI",
      detail: "En EURL/TNS, chaque euro de revenus supplémentaires améliore votre retraite de base et complémentaire (RCI). Évitez de sous-rémunérer excessivement votre activité.",
    });
  }

  leviers.push({
    priorite: 3,
    titre: "Assurance-vie en complément",
    detail: "L'assurance-vie (fonds euros + UC) offre liquidité et avantages successoraux. Idéale en complément du PER pour les indépendants, avec possibilité de rachat partiel avant la retraite.",
  });

  const regime = f.statutJuridiqueC === "micro" ? "SSI — Micro-entrepreneur"
    : f.statutJuridiqueC === "sasu" ? "Régime général + Agirc-Arrco (SASU)"
    : "SSI — TNS/EURL";

  return { pensionEstimee, ageDepart, anneesRestantes, trimestresValides, trimestresRequis, trimestresManquants, gap, leviers, regime };
}

// ─── calculateLiberal ─────────────────────────────────────────────────────────
export function calculateLiberal(f: FormData): DiagnosticResult {
  const ageDepart = getAgeLegal(f.anneeNaissance);
  const ageActuel = ANNEE_ACTUELLE - f.anneeNaissance;
  const anneesRestantes = Math.max(0, ageDepart - ageActuel);

  const trimestresValides = Math.min(getTrimestresValides(f) + anneesRestantes * 4, 200);
  const trimestresRequis = getTrimestreRequis(f.anneeNaissance);
  const trimestresManquants = Math.max(0, trimestresRequis - trimestresValides);

  const VALEUR_POINT: Record<string, number> = {
    CARMF: 0.5756, CARPIMKO: 2.6469, CIPAV: 2.89, CAVP: 2.5, CNBF: 1.0, CARCDSF: 1.5, CAVEC: 1.2,
  };
  const vp = VALEUR_POINT[f.caisseD] || 2.0;

  let pensionCaisse = 0;
  if (f.connaitPointsD && f.pointsD > 0) {
    pensionCaisse = (f.pointsD * vp) / 12;
    if (f.caisseD === "CARMF") {
      const asv = f.secteurMedecinD === "1" ? 1400 : f.secteurMedecinD === "2" ? 1000 : 1200;
      pensionCaisse += asv;
    }
  } else {
    const anneesDActivite = f.anneesActivite + anneesRestantes;
    const TAUX: Record<string, number> = {
      CARMF: 0.18, CARPIMKO: 0.012, CIPAV: 0.009, CAVP: 0.010, CNBF: 0.15, CARCDSF: 0.012, CAVEC: 0.015,
    };
    const taux = TAUX[f.caisseD] || 0.01;
    const pointsEstimes = (f.revenuNetBNCD * anneesDActivite * taux) / 1000;
    pensionCaisse = (pointsEstimes * vp) / 12;
  }

  pensionCaisse *= majEnfants(f.enfants);

  let pensionRG = 0;
  if (f.aAnneesSalariatD && f.anneesSalariatD > 0) {
    const tPrive = f.anneesSalariatD * 4;
    const base = (Math.min(f.revenuSalariatD, PASS_2026) * 0.5 * (tPrive / trimestresRequis)) / 12;
    pensionRG = base * 1.55;
  }

  const pensionEstimee = Math.round(pensionCaisse + pensionRG);
  const gap = f.revenuCible - pensionEstimee;
  const caisse = f.caisseD || "votre caisse";

  const leviers: DiagnosticResult["leviers"] = [
    {
      priorite: 1,
      titre: `Maximiser les cotisations ${caisse}`,
      detail: `Chaque tranche supplémentaire à ${caisse} acquiert des points à vie. Vérifiez que vous cotisez à la classe maximale adaptée à vos revenus actuels (${f.revenuNetBNCD.toLocaleString("fr-FR")}€/an).`,
    },
    {
      priorite: 2,
      titre: "PER Madelin / PER individuel",
      detail: `En tant que libéral, votre plafond PER est élevé (~${Math.round(f.revenuNetBNCD * 0.25 / 100).toLocaleString("fr-FR")}€/an). Les versements sont entièrement déductibles. C'est le complément idéal à votre caisse.`,
    },
    {
      priorite: 3,
      titre: f.retraiteProgressiveD ? "Optimiser votre retraite progressive" : "Retraite progressive",
      detail: "La retraite progressive vous permet de réduire votre activité avant le départ total, en percevant une fraction de pension. Idéal pour les professions libérales à forte pénibilité ou charge mentale.",
    },
  ];

  return { pensionEstimee, ageDepart, anneesRestantes, trimestresValides, trimestresRequis, trimestresManquants, gap, leviers, regime: `${caisse} + CNAVPL` };
}

// ─── calculateCarriereMixte ───────────────────────────────────────────────────
export function calculateCarriereMixte(f: FormData): DiagnosticResult {
  const ageDepart = getAgeLegal(f.anneeNaissance);
  const ageActuel = ANNEE_ACTUELLE - f.anneeNaissance;
  const anneesRestantes = Math.max(0, ageDepart - ageActuel);

  const trimestresValides = Math.min(getTrimestresValides(f) + anneesRestantes * 4, 200);
  const trimestresRequis = getTrimestreRequis(f.anneeNaissance);
  const trimestresManquants = Math.max(0, trimestresRequis - trimestresValides);

  const totalAnnees = Object.values(f.anneesParStatutMixte).reduce((a, b) => a + b, 0) || 1;
  let pensionTotal = 0;

  for (const statut of f.statutsMixtes) {
    const annees = f.anneesParStatutMixte[statut] || 0;
    const revenus = f.revenusParStatutMixte[statut] || 35000;
    const ratioAnnees = annees / totalAnnees;
    const tPro = (annees + anneesRestantes * ratioAnnees) * 4;
    const ratioT = Math.min(tPro / trimestresRequis, 1);

    if (statut === "salarie") {
      const p = (Math.min(revenus, PASS_2026) * 0.5 * ratioT) / 12;
      pensionTotal += p * 1.55;
    } else if (statut === "fonctionnaire") {
      pensionTotal += (revenus / 12) * 0.75 * ratioT;
    } else if (statut === "independant") {
      const p = (Math.min(revenus, PASS_2026) * 0.5 * ratioT) / 12;
      pensionTotal += p * 1.30;
    } else if (statut === "liberal") {
      pensionTotal += (revenus * 0.15 * ratioT) / 12;
    }
  }

  pensionTotal *= majEnfants(f.enfants);
  const pensionEstimee = Math.round(pensionTotal);
  const gap = f.revenuCible - pensionEstimee;

  const per4 = computePERLevier(f.capaciteEpargneMensuelle, 0.5, anneesRestantes);

  const leviers: DiagnosticResult["leviers"] = [
    {
      priorite: 1,
      titre: "Consolider sur info-retraite.fr",
      detail: "Avec plusieurs régimes, des trimestres peuvent être perdus. Vérifiez sur info-retraite.fr → Mon compte retraite → Ma carrière que toutes vos périodes sont bien enregistrées.",
    },
    {
      priorite: 2,
      titre: "PER individuel multi-régimes",
      detail: `Le PER est déconnecté de votre statut : idéal pour les carrières mixtes. Verser ${per4.versement}€/mois pendant ${anneesRestantes} ans génèrerait ~${per4.rente}€/mois de rente complémentaire.${per4.isFallback ? " (estimation basée sur un versement type de 200€/mois)" : ""}`,
    },
    {
      priorite: 3,
      titre: "Bilan retraite avec un expert",
      detail: "Votre situation multi-régimes est complexe. Un spécialiste retraite peut identifier des droits oubliés, optimiser votre date de départ et coordonner vos différentes caisses.",
    },
  ];

  return { pensionEstimee, ageDepart, anneesRestantes, trimestresValides, trimestresRequis, trimestresManquants, gap, leviers, regime: "Multi-régimes (pro-rata)" };
}

// ─── Dispatcher ───────────────────────────────────────────────────────────────
export function calculateDiagnostic(f: FormData): DiagnosticResult {
  switch (f.statut) {
    case "salarie": return calculateSalariePrive(f);
    case "fonctionnaire": return calculateFonctionnaire(f);
    case "independant": return calculateIndependant(f);
    case "liberal": return calculateLiberal(f);
    case "mixte": return calculateCarriereMixte(f);
    default: return calculateSalariePrive(f);
  }
}
