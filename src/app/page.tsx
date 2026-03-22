import Link from "next/link";

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const DM = "'DM Sans', sans-serif";

const Logo = ({ light = false }: { light?: boolean }) => {
  const arcOuter = "#1D9E75";
  const arcMid = light ? "#1D9E75" : "#9fe1cb";
  const dot = "#1D9E75";
  const horizon = light ? "#7A95BB" : "#1B2B4B";
  const textMain = light ? "white" : "#0F1F3D";
  const tagline = light ? "#7A95BB" : "#6B7A99";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Icône soleil — 44×44 */}
      <svg viewBox="0 0 56 40" xmlns="http://www.w3.org/2000/svg" width="52" height="52" aria-hidden="true">
        <g transform="translate(0, 34)">
          <path d="M 0 0 A 28 28 0 0 1 56 0" fill={arcOuter} fillOpacity="0.25" stroke="none"/>
          <path d="M 8 0 A 20 20 0 0 1 48 0" fill={arcMid} fillOpacity="0.45" stroke="none"/>
          <circle cx="28" cy="0" r="13" fill={dot}/>
          <line x1="28" y1="-18" x2="28" y2="-23" stroke={dot} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="45" y1="-9" x2="49" y2="-13" stroke={dot} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="11" y1="-9" x2="7" y2="-13" stroke={dot} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="-3" y1="0" x2="11" y2="0" stroke={horizon} strokeWidth="1.5"/>
          <line x1="45" y1="0" x2="59" y2="0" stroke={horizon} strokeWidth="1.5"/>
        </g>
      </svg>
      {/* Texte */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "28px", fontWeight: 700, lineHeight: 1, color: textMain }}>
          Happy<span style={{ color: "#1D9E75" }}>Retraite</span>
        </span>
        <span style={{ fontFamily: DM, fontSize: "10px", fontWeight: 600, letterSpacing: "3px", color: tagline, textTransform: "uppercase" }}>
          CLARIFIER SON AVENIR
        </span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: DM, backgroundColor: "#F7F9FC" }}>

      {/* 1. NAV */}
      <nav style={{ backgroundColor: "#0F1F3D", padding: "0 24px" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ minHeight: "72px" }}>
          <Link href="/"><Logo light /></Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>
              Blog
            </Link>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}>
              Contact
            </Link>
            <Link
              href="/diagnostic"
              style={{
                background: "linear-gradient(to right, #10D98A, #2D9CDB)",
                color: "white",
                padding: "10px 22px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <section style={{ backgroundColor: "#0F1F3D", padding: "80px 24px 72px", textAlign: "center" }}>
        <div className="max-w-4xl mx-auto">
          <div
            style={{
              display: "inline-block",
              marginBottom: "20px",
              padding: "6px 18px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 500,
              backgroundColor: "rgba(29,158,117,0.15)",
              color: "#1D9E75",
              border: "1px solid rgba(29,158,117,0.3)",
            }}
          >
            Diagnostic 100% gratuit
          </div>
          <h1
            style={{
              fontFamily: PLAYFAIR,
              fontSize: "clamp(36px, 6vw, 58px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Votre retraite mérite{" "}
            <span style={{ color: "#1D9E75" }}>mieux</span>{" "}
            qu&apos;une estimation
          </h1>
          <p style={{ fontSize: "18px", color: "#7A95BB", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.6 }}>
            Découvrez combien vous toucherez vraiment — et ce que vous pouvez encore faire pour améliorer ce montant. En 2 minutes.
          </p>
          <Link
            href="/diagnostic"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(to right, #10D98A, #2D9CDB)",
              color: "white",
              padding: "16px 32px",
              borderRadius: "999px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(16,217,138,0.35)",
            }}
          >
            Obtenir mon diagnostic gratuit
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p style={{ marginTop: "12px", fontSize: "13px", color: "#4B6082" }}>
            Sans carte bancaire · Résultat immédiat
          </p>
        </div>
      </section>

      {/* 3. STATS */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "48px 24px" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { number: "72%", label: "des Français craignent de ne pas maintenir leur niveau de vie à la retraite" },
            { number: "-50%", label: "de revenus en moyenne à la retraite pour tous les actifs" },
            { number: "2 min", label: "pour obtenir votre diagnostic complet et votre plan d'action" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                border: "1px solid #E8EDF5",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <div style={{ fontFamily: DM, fontSize: "32px", fontWeight: 700, color: "#1D9E75", marginBottom: "6px" }}>
                {stat.number}
              </div>
              <p style={{ color: "#6B7A99", fontSize: "14px", lineHeight: 1.4 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMMENT ÇA MARCHE */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "80px 24px" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            En 4 étapes
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "12px" }}>
            Comment ça marche ?
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A99", marginBottom: "56px", maxWidth: "480px", margin: "0 auto 56px" }}>
            Un processus simple et rapide pour connaître votre situation réelle
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: "1", title: "Votre profil en 2 minutes", desc: "Statut, âge, trimestres cotisés, épargne — un parcours guidé qui s'adapte à votre situation." },
              { step: "2", title: "Votre pension estimée", desc: "Montant mensuel réel, âge de départ, taux de couverture — calculés selon votre régime." },
              { step: "3", title: "Vos leviers personnalisés", desc: "PER, rachat de trimestres, optimisation de statut — ce que vous pouvez encore faire concrètement." },
              { step: "4", title: "Votre plan d'action", desc: "Un rapport PDF avec les actions prioritaires, chiffrées et datées, pour agir dès maintenant." },
            ].map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    backgroundColor: "#1D9E75", color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: DM, fontWeight: 700, fontSize: "18px", marginBottom: "16px",
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontFamily: DM, fontWeight: 600, fontSize: "16px", color: "#0F1F3D", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "14px", color: "#6B7A99", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CE QUE VOUS RECEVEZ */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Inclus dans votre diagnostic
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "12px" }}>
            Ce que vous recevez
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A99", marginBottom: "48px", maxWidth: "480px", margin: "0 auto 48px" }}>
            Un diagnostic clair, personnalisé, basé sur votre situation réelle
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Votre pension estimée",
                desc: "Calculée selon votre situation réelle : statut, revenus, années cotisées et épargne.",
              },
              {
                icon: (
                  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                ),
                title: "Votre gap mensuel",
                desc: "Ce qu'il vous manque chaque mois pour atteindre le niveau de vie que vous visez.",
              },
              {
                icon: (
                  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Votre plan en 3 actions",
                desc: "Des recommandations concrètes, dans le bon ordre, adaptées à votre statut professionnel.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E8EDF5",
                  borderRadius: "16px",
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px", height: "56px", borderRadius: "14px",
                    backgroundColor: "#E8F5EF", color: "#1D9E75",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: DM, fontWeight: 600, fontSize: "16px", color: "#0F1F3D", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "14px", color: "#6B7A99", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. POUR QUI */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Pour tous les profils
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "12px" }}>
            Fait pour vous, quel que soit votre profil
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A99", marginBottom: "48px", maxWidth: "480px", margin: "0 auto 48px" }}>
            Chaque statut a ses propres règles. On les connaît toutes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "👔", title: "Salariés", desc: "Vous ne savez pas vraiment combien vous toucherez et craignez une chute de revenus brutale." },
              { icon: "💻", title: "Indépendants & freelances", desc: "Vos cotisations sont faibles et votre pension sera bien plus basse que vous ne l'imaginez." },
              { icon: "⚕️", title: "Professions libérales", desc: "Votre caisse spécifique est complexe et vous manquez de visibilité sur vos droits réels." },
              { icon: "⏳", title: "Proches de la retraite", desc: "Il vous reste peu de temps mais encore des leviers à actionner. Chaque mois compte." },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E8EDF5",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{p.icon}</div>
                <h3 style={{ fontFamily: DM, fontWeight: 600, fontSize: "16px", color: "#0F1F3D", marginBottom: "8px" }}>{p.title}</h3>
                <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "14px", color: "#6B7A99", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/diagnostic"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white",
                padding: "16px 32px", borderRadius: "999px",
                fontSize: "15px", fontWeight: 600, textDecoration: "none",
                boxShadow: "0 4px 20px rgba(16,217,138,0.3)",
              }}
            >
              Démarrer mon diagnostic gratuit
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TÉMOIGNAGES */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Témoignages
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "12px" }}>
            Ils ont découvert leur situation réelle
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A99", marginBottom: "48px" }}>
            Et ils ont agi avant qu'il ne soit trop tard
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { initiale: "M", prenom: "Marc", metier: "Cadre salarié", age: 48, texte: "Je pensais avoir une retraite correcte grâce à mes 20 ans en CDI. HappyRetraite m'a montré que je toucherais 38% de moins que mon salaire actuel. J'ai ouvert un PER le mois suivant." },
              { initiale: "S", prenom: "Sophie", metier: "Kinésithérapeute libérale", age: 52, texte: "En tant que libérale, je savais vaguement que ma retraite serait mauvaise. Mais voir le chiffre exact — 1 240€/mois — ça m'a vraiment mise en mouvement. Le plan d'action était parfait pour mon statut." },
              { initiale: "T", prenom: "Thomas", metier: "Indépendant / Consultant", age: 41, texte: "En micro-entreprise depuis 6 ans, je cotisais presque rien. L'outil m'a ouvert les yeux : j'avais encore 20 ans pour corriger le tir. Je n'aurais jamais fait ce calcul seul." },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#E8F5EF",
                  borderLeft: "3px solid #1D9E75",
                  borderRadius: "12px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "42px", height: "42px", borderRadius: "50%",
                      backgroundColor: "#1D9E75", color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "15px", flexShrink: 0,
                    }}
                  >
                    {t.initiale}
                  </div>
                  <div>
                    <div style={{ fontFamily: DM, fontWeight: 600, fontSize: "14px", color: "#0F1F3D" }}>{t.prenom}, {t.age} ans</div>
                    <div style={{ fontFamily: DM, fontSize: "12px", color: "#0F6E56" }}>{t.metier}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 20 20">
                      <path fill="#1D9E75" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p style={{ color: "#085041", fontSize: "14px", lineHeight: 1.6, flex: 1 }}>&ldquo;{t.texte}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TARIFS */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "80px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#1D9E75", marginBottom: "12px" }}>
            Tarifs
          </p>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0F1F3D", textAlign: "center", marginBottom: "12px" }}>
            Simple et transparent
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A99", marginBottom: "56px" }}>
            Commencez gratuitement, allez plus loin si vous le souhaitez
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Gratuit */}
            <div style={{ border: "1px solid #E8EDF5", borderRadius: "16px", padding: "32px", backgroundColor: "white" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#6B7A99", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Diagnostic de base
              </div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontFamily: DM, fontSize: "42px", fontWeight: 700, color: "#0F1F3D" }}>0€</span>
                <span style={{ color: "#6B7A99", marginLeft: "8px", fontSize: "14px" }}>/ toujours</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Estimation de votre pension mensuelle", "Calcul de votre écart de revenus", "3 recommandations personnalisées"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#0F1F3D" }}>
                    <svg width="18" height="18" fill="none" stroke="#1D9E75" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/diagnostic"
                style={{
                  display: "block", textAlign: "center", padding: "12px",
                  borderRadius: "10px", fontWeight: 500, fontSize: "14px",
                  border: "1.5px solid #E8EDF5", color: "#0F1F3D", textDecoration: "none",
                }}
              >
                Commencer gratuitement
              </Link>
            </div>

            {/* Payant */}
            <div style={{ border: "2px solid #1D9E75", borderRadius: "16px", padding: "32px", backgroundColor: "white", position: "relative" }}>
              <div
                style={{
                  position: "absolute", top: "16px", right: "16px",
                  backgroundColor: "#1D9E75", color: "white",
                  fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px",
                }}
              >
                Recommandé
              </div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#6B7A99", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Rapport complet PDF
              </div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontFamily: DM, fontSize: "42px", fontWeight: 700, color: "#0F1F3D" }}>29€</span>
                <span style={{ color: "#6B7A99", marginLeft: "8px", fontSize: "14px" }}>/ unique</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Tout le diagnostic de base", "Rapport PDF détaillé de 15 pages", "Simulations avec différents scénarios", "Stratégies épargne personnalisées"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#0F1F3D" }}>
                    <svg width="18" height="18" fill="none" stroke="#1D9E75" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/diagnostic"
                style={{
                  display: "block", textAlign: "center", padding: "12px 24px",
                  borderRadius: "10px", fontWeight: 600, fontSize: "14px",
                  background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white", textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(16,217,138,0.3)", whiteSpace: "nowrap",
                }}
              >
                Obtenir mon rapport — 29€
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RAPPORT PERSONNALISÉ */}
      <section style={{ backgroundColor: "#F7F9FC", padding: "48px 24px", borderTop: "1px solid #E8EDF5" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center" style={{ backgroundColor: "#0F1F3D", borderRadius: "16px", padding: "36px 28px" }}>
            {/* Tag */}
            <div style={{ display: "inline-block", marginBottom: "20px" }}>
              <span style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", borderRadius: "20px", padding: "4px 14px", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 500 }}>
                Rapport personnalisé
              </span>
            </div>
            {/* Titre */}
            <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>
              Votre plan retraite complet<br />en 2 minutes.
            </h2>
            {/* Sous-titre */}
            <p style={{ fontSize: "13px", color: "#7A95BB", maxWidth: "480px", margin: "0 auto 24px", lineHeight: 1.6 }}>
              Un conseiller retraite facture 150€ l&apos;heure pour ce niveau d&apos;analyse. Votre rapport personnalisé est prêt en 2 minutes — pour 29€.
            </p>
            {/* Features grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", maxWidth: "460px", margin: "0 auto 28px" }}>
              {[
                "✓ Calcul détaillé par régime",
                "✓ Tous vos leviers débloqués",
                "✓ Plan d'action mois par mois",
                "✓ 3 scénarios comparatifs",
                "✓ Simulation PER 10/20/30 ans",
                "✓ PDF professionnel à imprimer",
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", borderRadius: "8px", padding: "10px 12px", fontSize: "12px", textAlign: "left" }}>
                  {item}
                </div>
              ))}
            </div>
            {/* Bouton */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <Link
                href="/diagnostic"
                style={{
                  display: "block", width: "100%", maxWidth: "480px",
                  padding: "22px", fontSize: "19px", fontWeight: 600,
                  borderRadius: "14px", textDecoration: "none",
                  background: "linear-gradient(to right, #10D98A, #2D9CDB)",
                  color: "white", textAlign: "center", whiteSpace: "nowrap",
                }}
              >
                Démarrer mon diagnostic — gratuit →
              </Link>
            </div>
            <p style={{ fontSize: "11px", color: "#4B6082", marginTop: "8px", marginBottom: "16px" }}>
              Diagnostic gratuit · Rapport complet disponible à 29€
            </p>
            <p style={{ fontSize: "11px", color: "#4B6082" }}>
              🔒 Paiement sécurisé Stripe · Remboursé si insatisfait sous 7 jours
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: "#0F1F3D", padding: "80px 24px", textAlign: "center" }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            Votre retraite se construit maintenant
          </h2>
          <p style={{ color: "#7A95BB", marginBottom: "32px", lineHeight: 1.6 }}>
            Rejoignez des milliers de Français qui ont déjà pris le contrôle de leur retraite.
          </p>
          <Link
            href="/diagnostic"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(to right, #10D98A, #2D9CDB)", color: "white",
              padding: "16px 32px", borderRadius: "999px",
              fontSize: "15px", fontWeight: 600, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(16,217,138,0.35)",
            }}
          >
            Obtenir mon diagnostic gratuit
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer style={{ backgroundColor: "#0F1F3D", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 24px" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link href="/"><Logo light /></Link>
          <p style={{ fontSize: "13px", color: "#4B6082", textAlign: "center" }}>
            © 2026 Happy Retraite. Les estimations sont indicatives et ne constituent pas un conseil financier.
          </p>
          <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "#4B6082" }}>
            <Link href="/blog" style={{ color: "#4B6082", textDecoration: "none" }}>Blog</Link>
            <a href="mailto:bonjour@happyretraite.fr" style={{ color: "#4B6082", textDecoration: "none" }}>bonjour@happyretraite.fr</a>
            <Link href="/mentions-legales" style={{ color: "#4B6082", textDecoration: "none" }}>Mentions légales</Link>
            <Link href="/confidentialite" style={{ color: "#4B6082", textDecoration: "none" }}>Confidentialité</Link>
            <Link href="/contact" style={{ color: "#4B6082", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
