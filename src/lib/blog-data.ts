export type Category = {
  slug: string;
  name: string;
  description: string;
  color: { bg: string; text: string };
};

export type Article = {
  slug: string;
  titre: string;
  desc: string;
  badge: string;
  temps: string;
  categorySlug: string;
};

export const categories: Category[] = [
  {
    slug: "professions-liberales",
    name: "Professions libérales & médicales",
    description:
      "CARPIMKO, CARMF, CARCDSF, CARPV, CAVP — les régimes spéciaux des professions libérales décryptés pour optimiser votre retraite.",
    color: { bg: "#E8F5EF", text: "#0F6E56" },
  },
  {
    slug: "expatries-frontaliers",
    name: "Expatriés & frontaliers",
    description:
      "Suisse, Belgique, Luxembourg, Royaume-Uni — comment récupérer et coordonner vos droits retraite entre la France et l'étranger.",
    color: { bg: "#EBF4FF", text: "#2D4A7A" },
  },
  {
    slug: "independants-dirigeants",
    name: "Indépendants & dirigeants",
    description:
      "Micro-entrepreneur, EURL, SASU — les spécificités retraite des indépendants et dirigeants, et comment compenser le déficit.",
    color: { bg: "#FEF3E2", text: "#B45309" },
  },
  {
    slug: "guides-pratiques",
    name: "Guides pratiques",
    description:
      "Trimestres manquants, rachat, départ anticipé, divorce — les guides concrets pour maîtriser et optimiser votre retraite.",
    color: { bg: "#F3E8FF", text: "#7C3AED" },
  },
];

export const articles: Article[] = [
  {
    slug: "retraite-micro-entrepreneur-combien-vais-je-toucher",
    titre: "Retraite micro-entrepreneur : combien vais-je vraiment toucher ?",
    desc: "Un micro-entrepreneur touche 40% de moins qu'un salarié à revenu équivalent. Voici pourquoi.",
    badge: "Indépendant",
    temps: "7 min",
    categorySlug: "independants-dirigeants",
  },
  {
    slug: "retraite-60-ans-encore-possible-2026",
    titre: "Retraite à 60 ans : encore possible en 2026 ?",
    desc: "Carrière longue, pénibilité, handicap — les dispositifs qui permettent encore de partir avant 64 ans.",
    badge: "Départ anticipé",
    temps: "6 min",
    categorySlug: "guides-pratiques",
  },
  {
    slug: "rachat-trimestres-retraite-rentable",
    titre: "Rachat de trimestres : est-ce vraiment rentable ?",
    desc: "Coût réel, gain sur la pension, délai de récupération — le calcul complet avant de décider.",
    badge: "Optimisation",
    temps: "8 min",
    categorySlug: "guides-pratiques",
  },
  {
    slug: "trimestres-manquants-comment-les-recuperer",
    titre: "Trimestres manquants : toutes les solutions en 2026",
    desc: "Rachat, périodes assimilées, régularisation — toutes les solutions pour atteindre le taux plein.",
    badge: "Guide pratique",
    temps: "7 min",
    categorySlug: "guides-pratiques",
  },
  {
    slug: "retraite-independant-vs-salarie-comparaison",
    titre: "Retraite indépendant vs salarié : les chiffres qui font mal",
    desc: "À revenu égal, 40% d'écart à la retraite. Voici pourquoi — et comment compenser.",
    badge: "Indépendant",
    temps: "6 min",
    categorySlug: "independants-dirigeants",
  },
  {
    slug: "per-combien-verser-selon-age",
    titre: "PER : combien verser selon son âge ?",
    desc: "Simulations chiffrées à 40, 50 et 55 ans pour compenser une retraite insuffisante.",
    badge: "Épargne retraite",
    temps: "7 min",
    categorySlug: "independants-dirigeants",
  },
  {
    slug: "carpimko-retraite-infirmiers-guide",
    titre: "CARPIMKO retraite : le guide complet pour infirmiers libéraux",
    desc: "Cotisations, calcul de pension, points CARPIMKO — tout ce que les paramédicaux libéraux doivent savoir.",
    badge: "Professions libérales",
    temps: "8 min",
    categorySlug: "professions-liberales",
  },
  {
    slug: "retraite-eurl-optimiser-cotisations",
    titre: "Retraite en EURL : optimiser ses cotisations sans se tromper",
    desc: "Rémunération ou dividendes ? Le calcul complet pour préparer sa retraite en gérant d'EURL.",
    badge: "Indépendant",
    temps: "8 min",
    categorySlug: "independants-dirigeants",
  },
  {
    slug: "sasu-retraite-calcul",
    titre: "SASU et retraite : le calcul que personne ne fait",
    desc: "Les dividendes ne cotisent pas. Voici les conséquences réelles pour votre retraite.",
    badge: "Indépendant",
    temps: "7 min",
    categorySlug: "independants-dirigeants",
  },
  {
    slug: "fonctionnaire-retraite-progressive",
    titre: "Retraite progressive pour les fonctionnaires : mode d'emploi",
    desc: "Conditions, calcul de la pension provisoire, accord employeur — tout ce qu'il faut savoir.",
    badge: "Fonctionnaire",
    temps: "6 min",
    categorySlug: "guides-pratiques",
  },
  {
    slug: "carmf-retraite-medecins-liberaux-guide",
    titre: "CARMF retraite : le guide complet pour médecins libéraux",
    desc: "4 régimes, cotisations 2026, calcul de pension et stratégies d'optimisation pour les médecins libéraux.",
    badge: "Professions libérales",
    temps: "9 min",
    categorySlug: "professions-liberales",
  },
  {
    slug: "carcdsf-retraite-chirurgiens-dentistes-sages-femmes",
    titre: "CARCDSF retraite : guide pour chirurgiens-dentistes et sages-femmes",
    desc: "Cotisations, calcul de pension et paradoxe des hauts revenus — tout ce que les affiliés CARCDSF doivent savoir.",
    badge: "Professions libérales",
    temps: "8 min",
    categorySlug: "professions-liberales",
  },
  {
    slug: "retraite-veterinaire-carpv",
    titre: "Retraite vétérinaire libéral : CARPV, cotisations et le paradoxe fiscal",
    desc: "Des cotisations significatives, un taux de remplacement souvent décevant. Calcul de pension CARPV et stratégies d'optimisation.",
    badge: "Professions libérales",
    temps: "8 min",
    categorySlug: "professions-liberales",
  },
  {
    slug: "retraite-francais-expatries",
    titre: "Retraite des Français expatriés : comment récupérer vos droits",
    desc: "Accords bilatéraux, CFE, trimestres à l'étranger — le guide complet pour ne pas perdre vos droits retraite français.",
    badge: "Expatrié",
    temps: "9 min",
    categorySlug: "expatries-frontaliers",
  },
  {
    slug: "retraite-apres-divorce",
    titre: "Retraite après divorce : ce que le partage change vraiment",
    desc: "Pension de réversion, trimestres famille, prestation compensatoire — tout ce qu'un divorcé doit savoir pour sa retraite.",
    badge: "Situations de vie",
    temps: "7 min",
    categorySlug: "guides-pratiques",
  },
  {
    slug: "retraite-pharmacien-cavp",
    titre: "Retraite pharmacien : CAVP, cotisations 2026 et taux de remplacement",
    desc: "Les pharmaciens libéraux cotisent beaucoup — et touchent souvent moins de 35% de leurs revenus. Décryptage et leviers.",
    badge: "Professions libérales",
    temps: "8 min",
    categorySlug: "professions-liberales",
  },
  {
    slug: "retraite-travail-suisse",
    titre: "Retraite des Français qui ont travaillé en Suisse : AVS, LPP et droits français",
    desc: "Frontalier ou expatrié en Suisse : comment récupérer vos droits AVS et LPP, les coordonner avec la retraite française.",
    badge: "Expatrié",
    temps: "9 min",
    categorySlug: "expatries-frontaliers",
  },
  {
    slug: "retraite-enseignants-prive-contrat-ircantec",
    titre: "Retraite des enseignants du privé sous contrat : IRCANTEC et droits méconnus",
    desc: "Ni fonctionnaire, ni salarié classique — l'enseignant du privé sous contrat cotise à l'IRCANTEC. Un régime méconnu aux règles spécifiques.",
    badge: "Statut particulier",
    temps: "8 min",
    categorySlug: "guides-pratiques",
  },
  {
    slug: "retraite-travail-belgique",
    titre: "Retraite des Français qui ont travaillé en Belgique : pension ONP et coordination",
    desc: "Frontalier ou expatrié en Belgique : comment coordonner votre pension belge (ONP) avec votre retraite française, éviter les pièges et maximiser vos droits.",
    badge: "Expatrié",
    temps: "8 min",
    categorySlug: "expatries-frontaliers",
  },
  {
    slug: "retraite-travail-luxembourg",
    titre: "Retraite des Français qui ont travaillé au Luxembourg : CNAP et pension généreuse",
    desc: "Le Luxembourg verse l'une des pensions les plus généreuses d'Europe. Mais coordonner cette pension avec la retraite française est plus complexe qu'il n'y paraît.",
    badge: "Expatrié",
    temps: "8 min",
    categorySlug: "expatries-frontaliers",
  },
  {
    slug: "retraite-travail-royaume-uni-brexit",
    titre: "Retraite des Français au Royaume-Uni après le Brexit : State Pension et nouveaux droits",
    desc: "Brexit et retraite : les règles ont changé. State Pension, accord post-Brexit, voluntary NI contributions — le guide complet 2026.",
    badge: "Expatrié",
    temps: "9 min",
    categorySlug: "expatries-frontaliers",
  },
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) return [];
  return articles
    .filter((a) => a.slug !== currentSlug && a.categorySlug === current.categorySlug)
    .slice(0, count);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
