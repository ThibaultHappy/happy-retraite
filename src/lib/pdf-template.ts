export interface ReportData {
  prenom: string;
  nom: string;
  email: string;
  statut: string;
  annee_naissance: string;
  pension_estimee: string;
  gap_mensuel: string;
  date_generation?: string;
}

function formatCurrency(val: string | number): string {
  const n = typeof val === "string" ? parseFloat(val) : val;
  if (isNaN(n)) return "—";
  return n.toLocaleString("fr-FR") + " €";
}

function getAge(annee: string): number {
  return new Date().getFullYear() - parseInt(annee, 10);
}

function getStatutLabel(statut: string): string {
  const map: Record<string, string> = {
    salarie: "Salarié(e) du privé",
    fonctionnaire: "Fonctionnaire",
    independant: "Indépendant(e)",
    mixte: "Carrière mixte",
  };
  return map[statut] || statut;
}

function getRetraiteAge(statut: string): string {
  if (statut === "fonctionnaire") return "64 ans";
  return "64–67 ans";
}

export function generateReportHTML(data: ReportData): string {
  const age = getAge(data.annee_naissance);
  const anneesRestantes = Math.max(0, 64 - age);
  const pension = parseFloat(data.pension_estimee) || 0;
  const gap = parseFloat(data.gap_mensuel) || 0;
  // gap > 0 = excédent (pension > objectif), gap < 0 = manque (pension < objectif)
  const isExcedent = gap > 0;
  const absGap = Math.abs(gap);
  // revenuCible = objectif de l'utilisateur = pension - gap
  const revenuCible = pension - gap;
  const statutLabel = getStatutLabel(data.statut);
  const dateGen = data.date_generation || new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  // Chart: pension en % de l'objectif
  const pensionPct = revenuCible > 0 ? Math.min(100, Math.round((pension / revenuCible) * 100)) : 70;
  const gapPct = isExcedent ? 0 : 100 - pensionPct;

  // SVG donut chart
  const r = 80;
  const cx = 100;
  const cy = 100;
  const circumference = 2 * Math.PI * r;
  const pensionDash = (pensionPct / 100) * circumference;
  const gapDash = (gapPct / 100) * circumference;

  // Checkmark SVG (évite le rendu □ de ${CHECK} dans Chromium/Puppeteer)
  const CHECK = `<svg width="14" height="14" viewBox="0 0 14 14"><polyline points="2,7 5,11 12,3" stroke="#1D9E75" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  // Strategies based on years remaining
  const perVersement = Math.max(200, Math.round(absGap * 0.5));
  const assuranceVie = Math.max(100, Math.round(absGap * 0.3));

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Rapport Happy Retraite — ${data.prenom} ${data.nom}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'DM Sans', Arial, sans-serif;
    color: #0F1F3D;
    background: white;
    font-size: 14px;
    line-height: 1.6;
  }

  .page {
    width: 210mm;
    min-height: 297mm;
    padding: 0;
    page-break-after: always;
    position: relative;
    overflow: hidden;
  }

  .page:last-child {
    page-break-after: auto;
  }

  /* ── PAGE 1: COVER ── */
  .cover {
    background: linear-gradient(160deg, #0F1F3D 0%, #1B3A5C 60%, #0F6E56 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 60px 48px;
  }

  .cover-logo {
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cover-logo-text {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 28px;
    color: white;
  }

  .cover-logo-text span {
    color: #1D9E75;
  }

  .cover-badge {
    background: rgba(29, 158, 117, 0.2);
    border: 1px solid rgba(29, 158, 117, 0.5);
    color: #5DCAA5;
    padding: 6px 20px;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  .cover h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 42px;
    font-weight: 700;
    color: white;
    margin-bottom: 16px;
    line-height: 1.2;
  }

  .cover h1 span {
    color: #1D9E75;
  }

  .cover-subtitle {
    font-size: 16px;
    color: rgba(255,255,255,0.7);
    margin-bottom: 64px;
    max-width: 400px;
  }

  .cover-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
    max-width: 480px;
    margin-bottom: 48px;
  }

  .cover-info-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
  }

  .cover-info-label {
    font-size: 10px;
    font-weight: 600;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
  }

  .cover-info-value {
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #1D9E75;
  }

  .cover-date {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    position: absolute;
    bottom: 32px;
  }

  /* ── INNER PAGES ── */
  .inner-page {
    background: white;
    padding: 48px 56px;
    display: flex;
    flex-direction: column;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #E8EDF5;
    margin-bottom: 36px;
  }

  .page-header-logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18px;
    color: #0F1F3D;
  }

  .page-header-logo span {
    color: #1D9E75;
  }

  .page-header-tag {
    font-size: 10px;
    font-weight: 600;
    color: #6B7A99;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .section-badge {
    display: inline-block;
    background: #E8F5EF;
    color: #0F6E56;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 4px 14px;
    border-radius: 50px;
    margin-bottom: 12px;
  }

  h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 28px;
    font-weight: 700;
    color: #0F1F3D;
    margin-bottom: 8px;
    line-height: 1.25;
  }

  .section-subtitle {
    font-size: 14px;
    color: #6B7A99;
    margin-bottom: 32px;
  }

  /* ── KPI GRID ── */
  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }

  .kpi-card {
    background: #F7F9FC;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #E8EDF5;
  }

  .kpi-label {
    font-size: 11px;
    font-weight: 600;
    color: #6B7A99;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
  }

  .kpi-value {
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #1D9E75;
  }

  .kpi-value.danger {
    color: #E53E3E;
  }

  .kpi-value.navy {
    color: #0F1F3D;
  }

  .kpi-sub {
    font-size: 12px;
    color: #6B7A99;
    margin-top: 4px;
  }

  /* ── CHART AREA ── */
  .chart-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }

  .chart-box {
    background: #F7F9FC;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #E8EDF5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chart-title {
    font-size: 12px;
    font-weight: 600;
    color: #0F1F3D;
    margin-bottom: 16px;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .chart-legend {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
    width: 100%;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #0F1F3D;
  }

  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .legend-pct {
    margin-left: auto;
    font-weight: 700;
  }

  /* ── STRATEGY CARDS ── */
  .strategy-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }

  .strategy-card {
    background: white;
    border: 1px solid #E8EDF5;
    border-left: 4px solid #1D9E75;
    border-radius: 0 12px 12px 0;
    padding: 20px 24px;
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .strategy-icon {
    width: 40px;
    height: 40px;
    background: #E8F5EF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  .strategy-content h3 {
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #0F1F3D;
    margin-bottom: 4px;
  }

  .strategy-content p {
    font-size: 12px;
    color: #6B7A99;
    line-height: 1.5;
  }

  .strategy-amount {
    margin-left: auto;
    text-align: right;
    flex-shrink: 0;
  }

  .strategy-amount-value {
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #1D9E75;
  }

  .strategy-amount-label {
    font-size: 10px;
    color: #6B7A99;
  }

  /* ── INFO BOX ── */
  .info-box {
    background: #F0F4FF;
    border-left: 4px solid #2D4A7A;
    border-radius: 0 8px 8px 0;
    padding: 16px 20px;
    margin-bottom: 24px;
  }

  .info-box-title {
    font-size: 12px;
    font-weight: 700;
    color: #0F1F3D;
    margin-bottom: 4px;
  }

  .info-box p {
    font-size: 12px;
    color: #4B6082;
    line-height: 1.5;
  }

  /* ── TABLE ── */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
    font-size: 13px;
  }

  th {
    background: #0F1F3D;
    color: white;
    padding: 10px 16px;
    text-align: left;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  th:first-child { border-radius: 8px 0 0 0; }
  th:last-child { border-radius: 0 8px 0 0; }

  td {
    padding: 10px 16px;
    border-bottom: 1px solid #E8EDF5;
    color: #0F1F3D;
  }

  tr:nth-child(even) td {
    background: #F7F9FC;
  }

  td.green { color: #1D9E75; font-weight: 700; }
  td.red { color: #E53E3E; font-weight: 700; }

  /* ── TIMELINE ── */
  .timeline {
    position: relative;
    padding-left: 32px;
    margin-bottom: 32px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #E8EDF5;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 24px;
  }

  .timeline-dot {
    position: absolute;
    left: -26px;
    top: 4px;
    width: 14px;
    height: 14px;
    background: #1D9E75;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 0 2px #1D9E75;
  }

  .timeline-year {
    font-size: 11px;
    font-weight: 700;
    color: #1D9E75;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }

  .timeline-title {
    font-size: 14px;
    font-weight: 600;
    color: #0F1F3D;
    margin-bottom: 4px;
  }

  .timeline-desc {
    font-size: 12px;
    color: #6B7A99;
    line-height: 1.5;
  }

  /* ── CHECKLIST ── */
  .checklist {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  }

  .checklist li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 13px;
    color: #0F1F3D;
  }

  .check-icon {
    width: 20px;
    height: 20px;
    background: #E8F5EF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1D9E75;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ── HIGHLIGHT CARD ── */
  .highlight-card {
    background: linear-gradient(135deg, #0F1F3D 0%, #1B3A5C 100%);
    border-radius: 16px;
    padding: 28px 32px;
    color: white;
    margin-bottom: 24px;
  }

  .highlight-card h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
    margin-bottom: 12px;
  }

  .highlight-card p {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    line-height: 1.6;
  }

  .highlight-card .big-number {
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #1D9E75;
    line-height: 1;
    margin: 16px 0 8px;
  }

  /* ── FINAL PAGE ── */
  .final-page {
    background: linear-gradient(160deg, #0F1F3D 0%, #1B3A5C 50%, #0F6E56 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 60px 48px;
  }

  .final-page h2 {
    font-family: 'Playfair Display', Georgia, serif;
    color: white;
    font-size: 32px;
    margin-bottom: 16px;
  }

  .final-page p {
    color: rgba(255,255,255,0.7);
    font-size: 15px;
    max-width: 400px;
    margin-bottom: 32px;
    line-height: 1.6;
  }

  .final-cta {
    background: #1D9E75;
    color: white;
    padding: 14px 36px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 48px;
  }

  .disclaimer {
    font-size: 10px;
    color: rgba(255,255,255,0.35);
    max-width: 460px;
    line-height: 1.6;
    margin-top: 40px;
  }

  /* Print */
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { page-break-after: always; }
  }
</style>
</head>
<body>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 1 — COUVERTURE
═══════════════════════════════════════════════════════════ -->
<div class="page cover">
  <div class="cover-logo">
    <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="20" r="10" fill="#1D9E75"/>
      <path d="M26 30 C26 30 10 36 10 44 L42 44 C42 36 26 30 26 30Z" fill="rgba(255,255,255,0.2)"/>
      <line x1="26" y1="6" x2="26" y2="2" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="38" y1="8" x2="40" y2="4" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="20" x2="48" y2="20" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="14" y1="8" x2="12" y2="4" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="8" y1="20" x2="4" y2="20" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
    <div class="cover-logo-text">Happy<span>Retraite</span></div>
  </div>

  <div class="cover-badge">Rapport personnalisé</div>

  <h1>Votre plan retraite<br/><span>sur-mesure</span></h1>
  <p class="cover-subtitle">Analyse complète de votre situation et stratégies personnalisées pour optimiser votre retraite</p>

  <div class="cover-info-grid">
    <div class="cover-info-card">
      <div class="cover-info-label">Préparé pour</div>
      <div class="cover-info-value" style="font-size: 17px; color: white;">${data.prenom} ${data.nom}</div>
    </div>
    <div class="cover-info-card">
      <div class="cover-info-label">Statut</div>
      <div class="cover-info-value" style="font-size: 15px; color: white;">${statutLabel}</div>
    </div>
    <div class="cover-info-card">
      <div class="cover-info-label">Pension estimée</div>
      <div class="cover-info-value">${formatCurrency(pension)}<span style="font-size:13px;color:rgba(255,255,255,0.5)">/mois</span></div>
    </div>
    <div class="cover-info-card">
      <div class="cover-info-label">${isExcedent ? "Excédent mensuel" : "Écart à combler"}</div>
      <div class="cover-info-value" style="color: ${isExcedent ? "#1D9E75" : "#FF8A8A"};">${isExcedent ? `+${formatCurrency(gap)}` : formatCurrency(absGap)}<span style="font-size:13px;color:rgba(255,255,255,0.5)">/mois</span></div>
    </div>
  </div>

  <div class="cover-date">Généré le ${dateGen} · Confidentiel</div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 2 — SYNTHÈSE EXÉCUTIVE
═══════════════════════════════════════════════════════════ -->
<div class="page inner-page">
  <div class="page-header">
    <div class="page-header-logo">Happy<span>Retraite</span></div>
    <div class="page-header-tag">Synthèse exécutive · Page 2</div>
  </div>

  <div class="section-badge">Vue d'ensemble</div>
  <h2>Votre situation retraite</h2>
  <p class="section-subtitle">${data.prenom}, voici les grands indicateurs de votre situation à ${age} ans en tant que ${statutLabel.toLowerCase()}.</p>

  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-label">Pension estimée</div>
      <div class="kpi-value">${formatCurrency(pension)}<span style="font-size:13px;font-weight:500;color:#6B7A99">/mois</span></div>
      <div class="kpi-sub">À partir de ${getRetraiteAge(data.statut)}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Revenu cible</div>
      <div class="kpi-value navy">${formatCurrency(revenuCible)}<span style="font-size:13px;font-weight:500;color:#6B7A99">/mois</span></div>
      <div class="kpi-sub">Pour maintenir votre niveau de vie</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">${isExcedent ? "Excédent mensuel" : "Écart mensuel"}</div>
      <div class="kpi-value ${isExcedent ? "" : "danger"}">${formatCurrency(absGap)}<span style="font-size:13px;font-weight:500;color:#6B7A99">/mois</span></div>
      <div class="kpi-sub">${isExcedent ? "Votre pension couvre votre objectif" : "À compléter par l'épargne"}</div>
    </div>
  </div>

  <div class="chart-row">
    <div class="chart-box">
      <div class="chart-title">Répartition pension vs écart</div>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <!-- Donut chart -->
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#E8EDF5" stroke-width="24"/>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1D9E75" stroke-width="24"
          stroke-dasharray="${pensionDash.toFixed(1)} ${(circumference - pensionDash).toFixed(1)}"
          stroke-dashoffset="${(circumference * 0.25).toFixed(1)}"
          stroke-linecap="round"/>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#E53E3E" stroke-width="24"
          stroke-dasharray="${gapDash.toFixed(1)} ${(circumference - gapDash).toFixed(1)}"
          stroke-dashoffset="${(circumference * 0.25 - pensionDash).toFixed(1)}"
          stroke-linecap="round" opacity="0.8"/>
        <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="20" font-weight="700" fill="#0F1F3D" font-family="DM Sans, Arial, sans-serif">${pensionPct}%</text>
        <text x="${cx}" y="${cy + 14}" text-anchor="middle" font-size="11" fill="#6B7A99" font-family="DM Sans, Arial, sans-serif">couverts</text>
      </svg>
      <div class="chart-legend">
        <div class="legend-item">
          <div class="legend-dot" style="background:#1D9E75"></div>
          <span>Pension de base</span>
          <span class="legend-pct" style="color:#1D9E75">${pensionPct}%</span>
        </div>
        ${isExcedent ? `
        <div class="legend-item">
          <div class="legend-dot" style="background:#1D9E75"></div>
          <span>Excédent</span>
          <span class="legend-pct" style="color:#1D9E75">+${formatCurrency(absGap)}/mois</span>
        </div>` : `
        <div class="legend-item">
          <div class="legend-dot" style="background:#E53E3E"></div>
          <span>Écart à combler</span>
          <span class="legend-pct" style="color:#E53E3E">${gapPct}%</span>
        </div>`}
      </div>
    </div>

    <div class="chart-box">
      <div class="chart-title">Projection à ${anneesRestantes} ans</div>
      <svg width="180" height="160" viewBox="0 0 180 160">
        <!-- Bar chart: pension vs cible -->
        <defs>
          <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1D9E75"/>
            <stop offset="100%" stop-color="#0F6E56"/>
          </linearGradient>
          <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#E53E3E"/>
            <stop offset="100%" stop-color="#C53030"/>
          </linearGradient>
        </defs>
        <!-- Y axis -->
        <line x1="30" y1="10" x2="30" y2="130" stroke="#E8EDF5" stroke-width="1"/>
        <line x1="30" y1="130" x2="170" y2="130" stroke="#E8EDF5" stroke-width="1"/>
        <!-- Pension bar -->
        <rect x="50" y="${Math.round(130 - (pension / revenuCible) * 110)}" width="40" height="${Math.round((pension / revenuCible) * 110)}" rx="4" fill="url(#greenGrad)"/>
        <text x="70" y="148" text-anchor="middle" font-size="9" fill="#6B7A99" font-family="DM Sans, Arial, sans-serif">Pension</text>
        <!-- Cible bar -->
        <rect x="110" y="20" width="40" height="110" rx="4" fill="#E8EDF5"/>
        <text x="130" y="148" text-anchor="middle" font-size="9" fill="#6B7A99" font-family="DM Sans, Arial, sans-serif">Cible</text>
        <!-- Gap indicator -->
        <line x1="90" y1="${Math.round(130 - (pension / revenuCible) * 110)}" x2="110" y2="${Math.round(130 - (pension / revenuCible) * 110)}" stroke="#E53E3E" stroke-width="1" stroke-dasharray="3 2"/>
        <line x1="90" y1="20" x2="110" y2="20" stroke="#E53E3E" stroke-width="1" stroke-dasharray="3 2"/>
        <line x1="100" y1="${Math.round(130 - (pension / revenuCible) * 110)}" x2="100" y2="20" stroke="#E53E3E" stroke-width="1.5"/>
        <text x="105" y="${Math.round(75 - (pension / revenuCible) * 30)}" font-size="8" fill="#E53E3E" font-family="DM Sans, Arial, sans-serif">-${gapPct}%</text>
      </svg>
      <div style="font-size:12px;color:#6B7A99;text-align:center;margin-top:8px">
        <span style="color:#1D9E75;font-weight:700">${formatCurrency(pension)}</span> sur <span style="color:#0F1F3D;font-weight:700">${formatCurrency(revenuCible)}</span> visés
      </div>
    </div>
  </div>

  <div class="info-box">
    <div class="info-box-title">💡 Ce que signifie cet écart</div>
    <p>${isExcedent
      ? `Bonne nouvelle : votre pension estimée de ${formatCurrency(pension)}/mois dépasse votre objectif de ${formatCurrency(revenuCible)}/mois. Vous disposez d'un excédent de ${formatCurrency(absGap)}/mois. Avec ${anneesRestantes} années devant vous, ce surplus peut être investi pour renforcer encore votre indépendance financière.`
      : `Un écart de ${formatCurrency(absGap)}/mois représente ${formatCurrency(absGap * 12)}/an à générer par votre épargne personnelle. Avec ${anneesRestantes} années devant vous, une stratégie structurée peut transformer cet écart en opportunité d'indépendance financière.`
    }</p>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 3 — ANALYSE DE VOTRE PROFIL
═══════════════════════════════════════════════════════════ -->
<div class="page inner-page">
  <div class="page-header">
    <div class="page-header-logo">Happy<span>Retraite</span></div>
    <div class="page-header-tag">Analyse de profil · Page 3</div>
  </div>

  <div class="section-badge">Votre profil</div>
  <h2>Analyse de votre situation</h2>
  <p class="section-subtitle">Comprendre les spécificités de votre statut pour maximiser votre retraite.</p>

  <div class="highlight-card">
    <h3>Profil : ${statutLabel}</h3>
    <p>${getProfilDescription(data.statut, age, anneesRestantes)}</p>
    <div class="big-number">${formatCurrency(pension)}<span style="font-size:20px;font-weight:500;color:rgba(255,255,255,0.5)">/mois</span></div>
    <p style="font-size:12px;color:rgba(255,255,255,0.5)">Pension estimée à la retraite · Taux de remplacement : ~${pensionPct}%</p>
  </div>

  <div class="section-badge">Mécanismes de calcul</div>
  <h2 style="font-size:20px;margin-bottom:8px">Comment est calculée votre pension</h2>
  <p class="section-subtitle">Les règles qui s'appliquent à votre situation.</p>

  ${getPensionExplainHTML(data.statut)}

  <div class="info-box">
    <div class="info-box-title">📊 Points importants pour votre statut</div>
    <p>${getStatutTips(data.statut)}</p>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 4 — VOS 3 LEVIERS PRINCIPAUX
═══════════════════════════════════════════════════════════ -->
<div class="page inner-page">
  <div class="page-header">
    <div class="page-header-logo">Happy<span>Retraite</span></div>
    <div class="page-header-tag">Leviers d'action · Page 4</div>
  </div>

  <div class="section-badge">Stratégies recommandées</div>
  <h2>Vos 3 leviers prioritaires</h2>
  <p class="section-subtitle">Classés par impact potentiel sur votre retraite, adaptés à votre profil ${statutLabel.toLowerCase()}.</p>

  <div class="strategy-list">
    <div class="strategy-card">
      <div class="strategy-icon">🏦</div>
      <div class="strategy-content">
        <h3>Plan d'Épargne Retraite (PER)</h3>
        <p>Versements déductibles de votre revenu imposable. Idéal pour réduire votre impôt maintenant tout en construisant un capital retraite. Sortie possible en capital ou en rente.</p>
      </div>
      <div class="strategy-amount">
        <div class="strategy-amount-value">${formatCurrency(perVersement)}</div>
        <div class="strategy-amount-label">/mois recommandé</div>
      </div>
    </div>

    <div class="strategy-card" style="border-left-color: #2D9CDB;">
      <div class="strategy-icon" style="background:#EBF4FF;">🏠</div>
      <div class="strategy-content">
        <h3>Immobilier locatif</h3>
        <p>Constitution d'un patrimoine tangible générant des revenus passifs complémentaires à la retraite. Le LMNP offre une fiscalité avantageuse sur les revenus locatifs.</p>
      </div>
      <div class="strategy-amount">
        <div class="strategy-amount-value" style="color:#2D9CDB;">${formatCurrency(Math.round(absGap * 0.4))}</div>
        <div class="strategy-amount-label">/mois de loyers visés</div>
      </div>
    </div>

    <div class="strategy-card" style="border-left-color: #7A95BB;">
      <div class="strategy-icon" style="background:#F0F4FF;">📈</div>
      <div class="strategy-content">
        <h3>Assurance-vie + ETF</h3>
        <p>Enveloppe fiscale souple avec accès aux marchés financiers. Après 8 ans, les plus-values bénéficient d'un abattement de 4 600€/an (9 200€ pour un couple).</p>
      </div>
      <div class="strategy-amount">
        <div class="strategy-amount-value" style="color:#7A95BB;">${formatCurrency(assuranceVie)}</div>
        <div class="strategy-amount-label">/mois recommandé</div>
      </div>
    </div>
  </div>

  <div class="kpi-grid" style="margin-bottom:0;">
    <div class="kpi-card" style="background:#E8F5EF;border-color:#1D9E75;">
      <div class="kpi-label" style="color:#0F6E56;">Impact PER</div>
      <div class="kpi-value">+${formatCurrency(Math.round(perVersement * anneesRestantes * 1.04))}</div>
      <div class="kpi-sub">Capital estimé en ${anneesRestantes} ans</div>
    </div>
    <div class="kpi-card" style="background:#EBF4FF;border-color:#2D9CDB;">
      <div class="kpi-label" style="color:#1B3A5C;">Économie fiscale PER</div>
      <div class="kpi-value" style="color:#2D9CDB;">-${formatCurrency(Math.round(perVersement * 12 * 0.3))}</div>
      <div class="kpi-sub">Impôts économisés/an (TMI 30%)</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Effort total/mois</div>
      <div class="kpi-value navy">${formatCurrency(perVersement + assuranceVie)}</div>
      <div class="kpi-sub">PER + Assurance-vie</div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 5 — STRATÉGIE PER DÉTAILLÉE
═══════════════════════════════════════════════════════════ -->
<div class="page inner-page">
  <div class="page-header">
    <div class="page-header-logo">Happy<span>Retraite</span></div>
    <div class="page-header-tag">PER en détail · Page 5</div>
  </div>

  <div class="section-badge">Focus PER</div>
  <h2>Le Plan d'Épargne Retraite expliqué</h2>
  <p class="section-subtitle">${isExcedent
    ? `Votre pension couvre déjà votre objectif. Le PER reste un excellent outil pour optimiser votre fiscalité et renforcer votre capital retraite.`
    : `Le PER est l'outil le plus puissant pour combler votre écart de ${formatCurrency(absGap)}/mois.`
  }</p>

  <table>
    <thead>
      <tr>
        <th>Caractéristique</th>
        <th>PER Individuel</th>
        <th>PER Collectif (PERCOL)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Déduction fiscale</td>
        <td class="green">${CHECK} Jusqu'à 10% revenus</td>
        <td class="green">${CHECK} Abondement employeur</td>
      </tr>
      <tr>
        <td>Sortie en capital</td>
        <td class="green">${CHECK} Possible à 100%</td>
        <td class="green">${CHECK} Possible à 100%</td>
      </tr>
      <tr>
        <td>Sortie anticipée</td>
        <td>Accident de vie uniquement</td>
        <td>Achat résidence principale</td>
      </tr>
      <tr>
        <td>Fiscalité à la sortie</td>
        <td>IR + PS sur rente</td>
        <td>IR sur versements volontaires</td>
      </tr>
      <tr>
        <td>Recommandé pour vous</td>
        <td class="green">${CHECK} Prioritaire</td>
        <td>Si disponible chez employeur</td>
      </tr>
    </tbody>
  </table>

  <div class="section-badge">Simulation</div>
  <h2 style="font-size:20px;margin-bottom:8px">Projection sur ${anneesRestantes} ans</h2>

  <table>
    <thead>
      <tr>
        <th>Scénario</th>
        <th>Versement/mois</th>
        <th>Capital à 64 ans</th>
        <th>Rente estimée</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Conservateur</td>
        <td>${formatCurrency(Math.round(perVersement * 0.5))}</td>
        <td class="green">${formatCurrency(Math.round(perVersement * 0.5 * 12 * anneesRestantes * 1.02))}</td>
        <td>${formatCurrency(Math.round(perVersement * 0.5 * 12 * anneesRestantes * 1.02 / 20 / 12))}/mois</td>
      </tr>
      <tr>
        <td>Recommandé</td>
        <td style="font-weight:700;color:#1D9E75">${formatCurrency(perVersement)}</td>
        <td class="green" style="font-size:15px">${formatCurrency(Math.round(perVersement * 12 * anneesRestantes * 1.04))}</td>
        <td style="font-weight:700">${formatCurrency(Math.round(perVersement * 12 * anneesRestantes * 1.04 / 20 / 12))}/mois</td>
      </tr>
      <tr>
        <td>Ambitieux</td>
        <td>${formatCurrency(Math.round(perVersement * 1.5))}</td>
        <td class="green">${formatCurrency(Math.round(perVersement * 1.5 * 12 * anneesRestantes * 1.05))}</td>
        <td>${formatCurrency(Math.round(perVersement * 1.5 * 12 * anneesRestantes * 1.05 / 20 / 12))}/mois</td>
      </tr>
    </tbody>
  </table>

  <div class="info-box">
    <div class="info-box-title">⚡ Conseil fiscal important</div>
    <p>En 2025, vous pouvez déduire jusqu'à <strong>10% de vos revenus professionnels nets de l'année précédente</strong> (plafond : 35 194€). Les versements non utilisés sont reportables sur 3 ans. Si vous avez des années non utilisées, il peut être très avantageux de réaliser un "rattrapage" cette année.</p>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 6 — IMMOBILIER ET ASSURANCE-VIE
═══════════════════════════════════════════════════════════ -->
<div class="page inner-page">
  <div class="page-header">
    <div class="page-header-logo">Happy<span>Retraite</span></div>
    <div class="page-header-tag">Autres leviers · Page 6</div>
  </div>

  <div class="section-badge">Immobilier</div>
  <h2>Investissement immobilier locatif</h2>
  <p class="section-subtitle">Compléter votre retraite avec des revenus passifs stables.</p>

  <div class="strategy-list">
    <div class="strategy-card">
      <div class="strategy-icon">🏠</div>
      <div class="strategy-content">
        <h3>LMNP (Loueur Meublé Non Professionnel)</h3>
        <p>Régime d'amortissement comptable qui permet de neutraliser la fiscalité sur les loyers pendant de nombreuses années. Le bien s'autofinance souvent grâce au loyer.</p>
      </div>
    </div>
    <div class="strategy-card">
      <div class="strategy-icon">🏢</div>
      <div class="strategy-content">
        <h3>SCPI (Sociétés Civiles de Placement Immobilier)</h3>
        <p>Investissement immobilier sans gestion : vous achetez des "parts" d'un parc immobilier diversifié. Rendement moyen : 4–5%/an. Accessible dès 5 000€.</p>
      </div>
    </div>
  </div>

  <div class="section-badge" style="margin-top: 16px;">Assurance-vie</div>
  <h2 style="font-size:22px;margin-bottom:8px;">L'assurance-vie multi-support</h2>
  <p class="section-subtitle">L'enveloppe fiscale la plus souple du patrimoine français.</p>

  <table>
    <thead>
      <tr>
        <th>Horizon</th>
        <th>Allocation recommandée</th>
        <th>Rendement attendu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Court terme (&lt;5 ans)</td>
        <td>80% fonds euros / 20% ETF</td>
        <td class="green">3–4%/an</td>
      </tr>
      <tr>
        <td>Moyen terme (5–10 ans)</td>
        <td>50% fonds euros / 50% ETF</td>
        <td class="green">4–6%/an</td>
      </tr>
      <tr>
        <td>Long terme (&gt;10 ans)</td>
        <td>20% fonds euros / 80% ETF</td>
        <td class="green">6–8%/an</td>
      </tr>
    </tbody>
  </table>

  <div class="info-box">
    <div class="info-box-title">💡 ETF recommandés pour votre profil</div>
    <p>Pour un profil équilibré : <strong>MSCI World</strong> (diversification globale, +8%/an historique sur 20 ans), <strong>MSCI Europe</strong> (exposition européenne), <strong>obligations d'État zone euro</strong> (stabilité). La régularité des versements (DCA) réduit le risque de timing de marché.</p>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 7 — PLAN D'ACTION 12 MOIS
═══════════════════════════════════════════════════════════ -->
<div class="page inner-page">
  <div class="page-header">
    <div class="page-header-logo">Happy<span>Retraite</span></div>
    <div class="page-header-tag">Plan d'action · Page 7</div>
  </div>

  <div class="section-badge">Feuille de route</div>
  <h2>Votre plan d'action sur 12 mois</h2>
  <p class="section-subtitle">Des étapes concrètes et prioritaires pour commencer à agir dès maintenant.</p>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">Mois 1–2</div>
      <div class="timeline-title">Bilan et diagnostic complet</div>
      <div class="timeline-desc">Récupérez votre relevé de carrière sur info-retraite.fr · Identifiez vos éventuels trimestres manquants · Listez vos contrats d'assurance-vie existants · Calculez votre capacité d'épargne réelle</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">Mois 3–4</div>
      <div class="timeline-title">Ouverture du PER</div>
      <div class="timeline-desc">Comparez les PER (Linxea Spirit PER, Lucya Cardif, Placement-direct) · Ouvrez votre PER individuel · Effectuez un premier versement de ${formatCurrency(perVersement)} · Configurez un virement automatique mensuel</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">Mois 5–6</div>
      <div class="timeline-title">Optimisation fiscale</div>
      <div class="timeline-desc">Calculez votre plafond PER disponible (case 6QS de votre avis d'imposition) · Envisagez un versement de rattrapage si vous avez des années non utilisées · Consultez un conseiller fiscal si TMI ≥ 30%</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">Mois 7–9</div>
      <div class="timeline-title">Épargne complémentaire</div>
      <div class="timeline-desc">Ouvrez une assurance-vie multi-support si vous n'en avez pas · Investissez ${formatCurrency(assuranceVie)}/mois en ETF MSCI World · Constituez une épargne de précaution (3–6 mois de charges)</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot" style="background:#2D9CDB;box-shadow:0 0 0 2px #2D9CDB;"></div>
      <div class="timeline-year">Mois 10–12</div>
      <div class="timeline-title">Projet immobilier (optionnel)</div>
      <div class="timeline-desc">Étudiez la viabilité d'un investissement LMNP ou SCPI · Simulez le cashflow avec un courtier immobilier · Rencontrez un notaire pour optimiser la structure juridique</div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 8 — CHECKLIST ET RESSOURCES
═══════════════════════════════════════════════════════════ -->
<div class="page inner-page">
  <div class="page-header">
    <div class="page-header-logo">Happy<span>Retraite</span></div>
    <div class="page-header-tag">Checklist & ressources · Page 8</div>
  </div>

  <div class="section-badge">À faire maintenant</div>
  <h2>Checklist prioritaire</h2>
  <p class="section-subtitle">Les 10 actions les plus importantes pour sécuriser votre retraite.</p>

  <ul class="checklist">
    <li><div class="check-icon">1</div><div><strong>Vérifiez votre relevé de carrière</strong> sur info-retraite.fr — erreurs fréquentes sur les premières années de travail</div></li>
    <li><div class="check-icon">2</div><div><strong>Calculez votre plafond PER disponible</strong> — case 6QS de votre dernier avis d'imposition</div></li>
    <li><div class="check-icon">3</div><div><strong>Ouvrez un PER individuel</strong> si vous n'en avez pas — Linxea Spirit PER ou Lucya Cardif sont parmi les meilleurs du marché</div></li>
    <li><div class="check-icon">4</div><div><strong>Automatisez votre épargne</strong> — virement le jour de la paie pour éviter la procrastination</div></li>
    <li><div class="check-icon">5</div><div><strong>Ouvrez une assurance-vie</strong> si elle a plus de 8 ans, la fiscalité devient très avantageuse</div></li>
    <li><div class="check-icon">6</div><div><strong>Diversifiez en ETF</strong> — MSCI World couvre 85% de la capitalisation mondiale</div></li>
    <li><div class="check-icon">7</div><div><strong>Consultez votre DRH</strong> si salarié — vérifiez si un PERCOL avec abondement est disponible</div></li>
    <li><div class="check-icon">8</div><div><strong>Évaluez votre TMI actuelle</strong> — si ≥ 41%, le PER devient ultra-avantageux fiscalement</div></li>
    <li><div class="check-icon">9</div><div><strong>Anticipez la retraite progressive</strong> — possible dès 60 ans pour les salariés, permet de cumuler emploi et retraite partielle</div></li>
    <li><div class="check-icon">10</div><div><strong>Faites un bilan patrimonial complet</strong> avec un conseiller en gestion de patrimoine (CGP) indépendant</div></li>
  </ul>

  <div class="section-badge">Ressources officielles</div>
  <h2 style="font-size:20px;margin-bottom:16px;">Liens et outils utiles</h2>

  <table>
    <thead>
      <tr>
        <th>Ressource</th>
        <th>Usage</th>
        <th>Adresse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Info Retraite</strong></td>
        <td>Relevé de carrière officiel</td>
        <td>info-retraite.fr</td>
      </tr>
      <tr>
        <td><strong>Mon Compte Retraite</strong></td>
        <td>Simulation pension officielle</td>
        <td>mcompteretraite.fr</td>
      </tr>
      <tr>
        <td><strong>Impots.gouv.fr</strong></td>
        <td>Plafond PER (case 6QS)</td>
        <td>impots.gouv.fr</td>
      </tr>
      <tr>
        <td><strong>Linxea Spirit PER</strong></td>
        <td>Meilleur PER du marché</td>
        <td>linxea.com</td>
      </tr>
      <tr>
        <td><strong>Lucya Cardif PER</strong></td>
        <td>Alternative PER top-tier</td>
        <td>lucya-cardif.fr</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ═══════════════════════════════════════════════════════════
     PAGE 9 — PAGE FINALE
═══════════════════════════════════════════════════════════ -->
<div class="page final-page">
  <div class="cover-logo" style="margin-bottom:32px;">
    <svg width="40" height="40" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="20" r="10" fill="#1D9E75"/>
      <path d="M26 30 C26 30 10 36 10 44 L42 44 C42 36 26 30 26 30Z" fill="rgba(255,255,255,0.2)"/>
      <line x1="26" y1="6" x2="26" y2="2" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="38" y1="8" x2="40" y2="4" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="20" x2="48" y2="20" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="14" y1="8" x2="12" y2="4" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="8" y1="20" x2="4" y2="20" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
    <div class="cover-logo-text">Happy<span>Retraite</span></div>
  </div>

  <h2>Votre retraite se construit<br/>aujourd'hui</h2>
  <p>
    ${data.prenom}, vous avez maintenant toutes les clés pour agir.<br/>
    ${isExcedent
      ? `Votre pension estimée couvre déjà votre objectif — avec un excédent de ${formatCurrency(absGap)}/mois.<br/>Continuez à construire votre patrimoine pour renforcer encore votre sécurité financière.`
      : `Avec ${anneesRestantes} années devant vous et les bons outils,<br/>combler cet écart de ${formatCurrency(absGap)}/mois est tout à fait atteignable.`
    }
  </p>

  <div style="background:rgba(29,158,117,0.15);border:1px solid rgba(29,158,117,0.3);border-radius:16px;padding:28px 40px;max-width:420px;margin-bottom:40px;">
    <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Votre objectif</div>
    <div style="font-family:'DM Sans',Arial,sans-serif;font-size:36px;font-weight:700;color:#1D9E75;margin-bottom:4px;">${formatCurrency(revenuCible)}<span style="font-size:16px;color:rgba(255,255,255,0.5)">/mois</span></div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);">Objectif : ${formatCurrency(revenuCible)}/mois</div>
  </div>

  <p class="disclaimer">
    Les estimations contenues dans ce rapport sont calculées sur la base des informations que vous avez fournies et de règles générales de calcul de retraite. Elles ont une valeur indicative et ne constituent pas un conseil financier personnalisé. Consultez un conseiller en gestion de patrimoine agréé pour des recommandations adaptées à votre situation précise.<br/><br/>
    © 2026 Happy Retraite · Rapport généré le ${dateGen} · Confidentiel — réservé à ${data.prenom} ${data.nom}
  </p>
</div>

</body>
</html>`;
}

function getProfilDescription(statut: string, age: number, anneesRestantes: number): string {
  const profiles: Record<string, string> = {
    salarie: `En tant que salarié du privé, votre retraite est gérée par l'Assurance Retraite (régime général) et votre complémentaire Agirc-Arrco. À ${age} ans, vous avez encore ${anneesRestantes} ans pour optimiser vos droits et construire une épargne complémentaire significative.`,
    fonctionnaire: `En tant que fonctionnaire, votre pension est calculée sur la base de vos 6 derniers mois de traitement indiciaire (hors primes), ce qui la rend prévisible mais parfois inférieure à ce qu'un salarié du privé pourrait obtenir. À ${age} ans, il est temps d'explorer les dispositifs complémentaires.`,
    independant: `En tant qu'indépendant, votre pension dépend de vos cotisations à la SSI (ex-RSI). Le taux de remplacement est souvent plus faible que pour les salariés. À ${age} ans avec ${anneesRestantes} ans devant vous, le PER est votre allié le plus puissant.`,
    mixte: `Avec une carrière mixte, vous cumulez des droits dans plusieurs régimes (général, complémentaire, parfois fonctionnaire). La liquidation sera plus complexe mais vous bénéficiez de la diversification. À ${age} ans, un bilan complet de vos droits multi-régimes est essentiel.`,
  };
  return profiles[statut] || profiles.salarie;
}

function getPensionExplainHTML(statut: string): string {
  if (statut === "fonctionnaire") {
    return `
    <table>
      <thead><tr><th>Élément</th><th>Règle applicable</th></tr></thead>
      <tbody>
        <tr><td>Base de calcul</td><td>Traitement indiciaire brut des 6 derniers mois</td></tr>
        <tr><td>Taux plein</td><td>75% du traitement de base (167 trimestres requis)</td></tr>
        <tr><td>Bonification</td><td>Possible pour enfants, service en zone difficile</td></tr>
        <tr><td>Décote/Surcote</td><td>-1,25%/trimestre manquant · +1,25%/trimestre supplémentaire</td></tr>
      </tbody>
    </table>`;
  }
  if (statut === "independant") {
    return `
    <table>
      <thead><tr><th>Élément</th><th>Règle applicable</th></tr></thead>
      <tbody>
        <tr><td>Régime</td><td>Sécurité Sociale des Indépendants (SSI)</td></tr>
        <tr><td>Taux de remplacement</td><td>Environ 50–60% du revenu (plus faible que salariés)</td></tr>
        <tr><td>Trimestres</td><td>1 trimestre = revenus ≥ 150 SMIC horaires</td></tr>
        <tr><td>Complémentaire</td><td>Régime complémentaire obligatoire RCI (faible)</td></tr>
      </tbody>
    </table>`;
  }
  return `
  <table>
    <thead><tr><th>Élément</th><th>Règle applicable</th></tr></thead>
    <tbody>
      <tr><td>Régime de base</td><td>Assurance Retraite (CNAV)</td></tr>
      <tr><td>Complémentaire</td><td>Agirc-Arrco (points)</td></tr>
      <tr><td>Formule de base</td><td>SAM × taux × durée/durée référence</td></tr>
      <tr><td>Salaire annuel moyen</td><td>Moyenne des 25 meilleures années</td></tr>
      <tr><td>Taux plein</td><td>50% (avec 172 trimestres validés ou à 67 ans)</td></tr>
    </tbody>
  </table>`;
}

function getStatutTips(statut: string): string {
  const tips: Record<string, string> = {
    salarie: "Vérifiez que toutes vos périodes d'emploi sont bien enregistrées (stages, CDD courts, travail étudiant). Les trimestres cotisés avant 20 ans peuvent ouvrir droit à une retraite anticipée. Demandez votre relevé de carrière sur info-retraite.fr et signalez toute anomalie à votre CARSAT.",
    fonctionnaire: "Votre pension de fonctionnaire exclut les primes (qui peuvent représenter 20–40% de votre rémunération). Compensez cette perte avec un RAFP (Retraite additionnelle de la fonction publique) et un PER individuel. Vérifiez aussi vos droits à bonification pour enfants ou services actifs.",
    independant: "En tant qu'indépendant, le PER est votre outil numéro un : il réduit votre base imposable tout en construisant un capital retraite. Si vous êtes en SASU, une combinaison salaire optimisé + dividendes peut maximiser vos cotisations retraite tout en optimisant la fiscalité globale.",
    mixte: "Avec une carrière mixte, vous devez obtenir votre relevé de carrière dans CHACUN de vos régimes de rattachement. La coordination entre régimes peut créer des opportunités (ou des lacunes) dans le décompte de vos trimestres. Un audit complet est indispensable.",
  };
  return tips[statut] || tips.salarie;
}
