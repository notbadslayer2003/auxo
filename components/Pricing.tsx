'use client'

import { useReveal } from './UseReveal'

// ── DATA ──────────────────────────────────────────────────────────

const MATRIX = [
    {
        num: '01',
        title: 'Gestion des réseaux sociaux',
        sub: 'Récurrent · Engagement 3 mois minimum',
        price: '850€',
        unit: '/ mois HTVA · à partir de',
        cta: 'Démarrer',
        href: '#contact',
        featured: true,
    },
    {
        num: '02',
        title: 'Branding — Identité de marque',
        sub: '3 packs au choix · Projet unique',
        price: 'dès 750€',
        unit: 'HTVA · paiement unique',
        cta: 'Voir les packs',
        href: '#tarifs-branding',
    },
    {
        num: '03',
        title: 'Création de contenu Photo & Vidéo',
        sub: 'Selon projet · Direction artistique incluse',
        price: 'Sur devis',
        unit: '',
        cta: 'Demander',
        href: '#contact',
    },
    {
        num: '04',
        title: 'Audit de communication',
        sub: 'Sans engagement · Livré sous 2 semaines',
        price: '450€',
        unit: 'HTVA · paiement unique',
        cta: 'Démarrer',
        href: '#contact',
    },
    {
        num: '05',
        title: 'Prestations graphiques',
        sub: 'Catalogue · Brochure · Affiche · Roll-up · Pré-presse',
        price: 'Sur devis',
        unit: '',
        cta: 'Demander',
        href: '#contact',
    },
]

const PACK_HEADERS = [
    { key: 'e' as const, name: 'Essentials', price: '750 €', badge: null },
    { key: 'a' as const, name: 'Advanced', price: '1 500 €', badge: 'Le plus choisi', featured: true },
    { key: 'p' as const, name: 'Performance', price: '2 750 €', badge: 'Le plus complet' },
]

type PackVal = boolean | string
const PACK_FEATURES: { name: string; e: PackVal; a: PackVal; p: PackVal }[] = [
    { name: 'Logo (toutes déclinaisons)',         e: true,           a: true,           p: true },
    { name: 'Charte graphique',                   e: 'Simplifiée',   a: 'Complète',     p: 'Complète' },
    { name: 'Éléments visuels de marque',         e: 'Base',         a: 'Étendus',      p: 'Étendus' },
    { name: 'Direction artistique',               e: 'Base',         a: 'Avancée',      p: 'Avancée' },
    { name: 'Mockups sur mesure',                 e: false,          a: true,           p: true },
    { name: 'Animation du logo',                  e: false,          a: true,           p: '+ sound design' },
    { name: 'Définition du nom de marque',        e: false,          a: false,          p: true },
    { name: "Création de l'univers de marque",    e: false,          a: false,          p: true },
    { name: 'Identité audiovisuelle complète',    e: false,          a: false,          p: true },
    { name: 'Charte éditoriale',                  e: false,          a: false,          p: true },
]

const CONDITIONS_RS = [
    { label: 'Engagement minimum',  value: '3 mois' },
    { label: 'Remise à 6 mois',     value: '−5%' },
    { label: 'Remise à 12 mois',    value: '−10%' },
    { label: 'Préavis résiliation', value: '30 jours' },
]

const CONDITIONS_EXCLUDED = [
    "Réponse aux commentaires et messages.",
    "Création de visuels hors Facebook & Instagram.",
    "Budget plateforme des campagnes sponsorisées.",
]

// ── COMPONENT ──────────────────────────────────────────────────────

export default function Pricing() {
    const ref = useReveal()
    const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section
            id="tarifs"
            ref={ref as React.RefObject<HTMLElement>}
            className="section-py"
            style={{ background: 'var(--color-epure)', position: 'relative', overflow: 'hidden' }}
        >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(70,125,101,0.4), transparent)' }} aria-hidden="true" />

            <style>{`
                /* ─── MATRIX ─── */
                .matrix {
                    background: white;
                    border: 1px solid rgba(18,27,31,0.08);
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 24px rgba(18,27,31,0.04);
                }
                .matrix__head {
                    padding: 18px 32px;
                    background: rgba(18,27,31,0.02);
                    border-bottom: 1px solid rgba(18,27,31,0.06);
                    display: flex; justify-content: space-between; align-items: center;
                    flex-wrap: wrap; gap: 8px;
                }
                .matrix__head-lbl {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.7rem; letter-spacing: 0.16em;
                    text-transform: uppercase; color: rgba(18,27,31,0.45);
                }
                .matrix__head-meta {
                    font-family: var(--font-body); font-size: 0.74rem;
                    color: rgba(18,27,31,0.4);
                }
                .matrix__row {
                    position: relative;
                    display: grid;
                    grid-template-columns: auto 1fr auto auto;
                    align-items: center;
                    gap: clamp(20px, 3vw, 40px);
                    padding: clamp(22px, 2.6vw, 30px) clamp(20px, 3vw, 36px);
                    border-bottom: 1px solid rgba(18,27,31,0.06);
                    transition: background 0.25s ease;
                }
                .matrix__row:last-child { border-bottom: none; }
                .matrix__row:hover { background: rgba(255,141,65,0.03); }
                .matrix__row--featured::before {
                    content: ''; position: absolute;
                    left: 0; top: 0; bottom: 0;
                    width: 3px; background: var(--color-vecteur);
                }

                .matrix__num {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.85rem; color: var(--color-vecteur);
                    letter-spacing: 0.1em;
                }
                .matrix__main { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
                .matrix__title {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: clamp(1rem, 1.5vw, 1.18rem);
                    color: var(--color-ancre); line-height: 1.3;
                }
                .matrix__sub {
                    font-family: var(--font-body); font-size: 0.8rem;
                    color: rgba(18,27,31,0.5); line-height: 1.4;
                }
                .matrix__price {
                    display: flex; flex-direction: column;
                    align-items: flex-end; gap: 2px;
                }
                .matrix__amount {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: clamp(1.35rem, 2.2vw, 1.7rem);
                    color: var(--color-vecteur); line-height: 1;
                    white-space: nowrap; letter-spacing: -0.01em;
                }
                .matrix__unit {
                    font-family: var(--font-body); font-size: 0.72rem;
                    color: rgba(18,27,31,0.45); white-space: nowrap;
                }
                .matrix__cta {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.82rem; color: var(--color-ancre);
                    background: transparent;
                    border: 1px solid rgba(18,27,31,0.15);
                    border-radius: 6px; padding: 10px 16px;
                    cursor: pointer; white-space: nowrap;
                    transition: all 0.2s ease;
                }
                .matrix__cta svg { transition: transform 0.2s ease; }
                .matrix__cta:hover {
                    background: var(--color-ancre); color: white;
                    border-color: var(--color-ancre);
                }
                .matrix__cta:hover svg { transform: translateX(3px); }
                .matrix__row--featured .matrix__cta {
                    background: var(--color-vecteur); color: var(--color-ancre);
                    border-color: var(--color-vecteur);
                }
                .matrix__row--featured .matrix__cta:hover {
                    background: var(--color-ancre); color: var(--color-vecteur);
                }

                @media (max-width: 768px) {
                    .matrix__row {
                        grid-template-columns: auto 1fr;
                        grid-template-rows: auto auto;
                        row-gap: 14px;
                    }
                    .matrix__num { grid-column: 1; grid-row: 1; align-self: start; padding-top: 4px; }
                    .matrix__main { grid-column: 2; grid-row: 1; }
                    .matrix__price { grid-column: 1 / -1; grid-row: 2; align-items: flex-start; flex-direction: row; gap: 12px; align-items: baseline; }
                    .matrix__cta { grid-column: 1 / -1; grid-row: 3; width: 100%; justify-content: center; }
                    .matrix__row { grid-template-rows: auto auto auto; }
                }

                /* ─── PACK COMPARISON TABLE ─── */
                .pkg-wrap {
                    background: white;
                    border: 1px solid rgba(18,27,31,0.08);
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 24px rgba(18,27,31,0.04);
                }
                .pkg-scroll { overflow-x: auto; }
                .pkg-table {
                    width: 100%;
                    min-width: 640px;
                    border-collapse: separate;
                    border-spacing: 0;
                    font-family: var(--font-body);
                }
                .pkg-table th, .pkg-table td {
                    text-align: center;
                    padding: 14px 20px;
                    vertical-align: middle;
                }
                .pkg-table th:first-child,
                .pkg-table td:first-child {
                    text-align: left;
                    width: 38%;
                    min-width: 240px;
                }
                .pkg-table thead th {
                    padding: 24px 20px 22px;
                    background: rgba(18,27,31,0.02);
                    border-bottom: 1px solid rgba(18,27,31,0.08);
                    position: relative;
                }
                .pkg-th--featured {
                    background: rgba(70,125,101,0.06) !important;
                }
                .pkg-th--featured::before {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: var(--color-vecteur);
                }
                .pkg-badge {
                    display: inline-block;
                    font-family: var(--font-display); font-size: 0.6rem; font-weight: 700;
                    letter-spacing: 0.14em; text-transform: uppercase;
                    background: var(--color-vecteur); color: white;
                    padding: 3px 9px; border-radius: 3px;
                    margin-bottom: 10px;
                }
                .pkg-badge--soft {
                    background: rgba(70,125,101,0.12); color: var(--color-sillage);
                }
                .pkg-name {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.05rem; color: var(--color-ancre);
                    display: block; margin-bottom: 6px;
                }
                .pkg-price {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.45rem; color: var(--color-vecteur);
                    display: block; letter-spacing: -0.01em;
                }
                .pkg-table tbody tr { border-bottom: 1px solid rgba(18,27,31,0.05); }
                .pkg-table tbody td { font-size: 0.85rem; }
                .pkg-feature {
                    font-family: var(--font-display); font-weight: 500;
                    font-size: 0.88rem; color: var(--color-ancre);
                }
                .pkg-td--featured { background: rgba(70,125,101,0.025); }
                .pkg-check {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 22px; height: 22px; border-radius: 50%;
                    background: rgba(255,141,65,0.12); color: var(--color-vecteur);
                }
                .pkg-dash {
                    color: rgba(18,27,31,0.2); font-size: 1.1rem; font-weight: 300;
                }
                .pkg-val {
                    font-family: var(--font-body); font-size: 0.78rem; font-weight: 500;
                    color: rgba(18,27,31,0.75);
                    padding: 4px 9px; background: rgba(18,27,31,0.04);
                    border-radius: 4px;
                }
                .pkg-cta-row td {
                    padding: 22px 20px 24px;
                    background: rgba(18,27,31,0.015);
                    border-top: 1px solid rgba(18,27,31,0.08);
                }
                .pkg-cta {
                    width: 100%; max-width: 200px;
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.85rem;
                    padding: 11px 20px; border-radius: 6px;
                    cursor: pointer; transition: all 0.2s ease;
                    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
                }
                .pkg-cta--default {
                    background: transparent; color: var(--color-ancre);
                    border: 1px solid rgba(18,27,31,0.2);
                }
                .pkg-cta--default:hover {
                    background: var(--color-ancre); color: white;
                    border-color: var(--color-ancre);
                }
                .pkg-cta--featured {
                    background: var(--color-vecteur); color: var(--color-ancre);
                    border: 1px solid var(--color-vecteur);
                }
                .pkg-cta--featured:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(255,141,65,0.3);
                }

                /* ─── CONDITIONS BLOCK ─── */
                .conditions {
                    background: var(--color-ancre);
                    border-radius: 14px;
                    padding: clamp(28px, 3.5vw, 40px);
                    overflow: hidden;
                    position: relative;
                }
                .conditions__head {
                    display: flex; align-items: center; gap: 10px;
                    margin-bottom: 24px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid rgba(245,228,198,0.12);
                }
                .conditions__lbl {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.7rem; letter-spacing: 0.16em;
                    text-transform: uppercase; color: var(--color-vecteur);
                }
                .conditions__title {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.95rem; color: var(--color-epure);
                    margin-left: 8px;
                }
                .conditions__grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 14px;
                    margin-bottom: 24px;
                }
                .conditions__cell {
                    background: rgba(245,228,198,0.05);
                    border: 1px solid rgba(245,228,198,0.1);
                    border-radius: 8px;
                    padding: 16px 18px;
                    display: flex; flex-direction: column; gap: 4px;
                }
                .conditions__cell-lbl {
                    font-family: var(--font-body); font-size: 0.72rem;
                    color: rgba(245,228,198,0.55);
                }
                .conditions__cell-val {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.1rem; color: var(--color-trame);
                }
                .conditions__excluded-lbl {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.65rem; letter-spacing: 0.14em;
                    text-transform: uppercase; color: rgba(245,228,198,0.5);
                    margin-bottom: 10px; display: block;
                }
                .conditions__excluded {
                    list-style: none; padding: 0; margin: 0;
                    display: flex; flex-direction: column; gap: 6px;
                }
                .conditions__excluded li {
                    display: flex; gap: 10px;
                    font-family: var(--font-body); font-size: 0.78rem;
                    color: rgba(245,228,198,0.55); line-height: 1.5;
                }
                .conditions__excluded li::before {
                    content: '×'; color: rgba(255,141,65,0.6);
                    font-weight: 700; flex-shrink: 0;
                }

                /* ─── CGU FOOTER ─── */
                .cgu {
                    background: rgba(18,27,31,0.03);
                    border: 1px solid rgba(18,27,31,0.08);
                    border-radius: 10px;
                    padding: 16px 24px;
                    display: flex; align-items: center; gap: 12px;
                    flex-wrap: wrap;
                }
                .cgu__icon {
                    color: rgba(18,27,31,0.4); flex-shrink: 0;
                }
                .cgu__text {
                    font-family: var(--font-body); font-size: 0.8rem;
                    color: rgba(18,27,31,0.55); line-height: 1.5;
                    flex: 1; min-width: 200px;
                }
                .cgu__link {
                    color: var(--color-vecteur); text-decoration: underline;
                    text-underline-offset: 3px; font-weight: 500;
                }
            `}</style>

            <div className="container-auxo">
                {/* Header */}
                <div style={{ maxWidth: '620px', marginBottom: 'clamp(48px,6vw,80px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span className="label-tag reveal">Tarifs</span>
                    <h2
                        className="text-display-lg reveal reveal-d1"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ancre)', marginTop: '8px' }}
                    >
                        Transparent.<br />
                        <span style={{ color: 'var(--color-vecteur)' }}>Sans mauvaise surprise.</span>
                    </h2>
                    <p
                        className="reveal reveal-d2"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'rgba(18,27,31,0.6)', lineHeight: 1.7 }}
                    >
                        Tous nos tarifs sont en € HTVA. Pour les prestations sur devis, un premier échange suffit à cadrer votre projet.
                    </p>
                </div>

                {/* ═══ MATRICE — tous les services au même niveau ═══ */}
                <div className="matrix reveal" style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
                    <div className="matrix__head">
                        <span className="matrix__head-lbl">Vue d'ensemble</span>
                        <span className="matrix__head-meta">5 prestations · prix HTVA</span>
                    </div>
                    {MATRIX.map((row, i) => (
                        <div
                            key={row.num}
                            className={`matrix__row${row.featured ? ' matrix__row--featured' : ''}`}
                            style={{ transitionDelay: `${0.05 + i * 0.04}s` }}
                        >
                            <span className="matrix__num">{row.num}</span>
                            <div className="matrix__main">
                                <span className="matrix__title">{row.title}</span>
                                <span className="matrix__sub">{row.sub}</span>
                            </div>
                            <div className="matrix__price">
                                <span className="matrix__amount">{row.price}</span>
                                {row.unit && <span className="matrix__unit">{row.unit}</span>}
                            </div>
                            <button type="button" className="matrix__cta" onClick={() => go(row.href)}>
                                {row.cta}
                                <Arrow />
                            </button>
                        </div>
                    ))}
                </div>

                {/* ═══ BRANDING — tableau de comparaison ═══ */}
                <div id="tarifs-branding" style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}>
                    <SectionTitle>Packs Branding — comparaison</SectionTitle>
                    <div className="pkg-wrap reveal">
                        <div className="pkg-scroll">
                            <table className="pkg-table">
                                <thead>
                                <tr>
                                    <th style={{ background: 'rgba(18,27,31,0.02)' }}>
                                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(18,27,31,0.4)' }}>
                                            Inclusions
                                        </span>
                                    </th>
                                    {PACK_HEADERS.map(h => (
                                        <th key={h.key} className={h.featured ? 'pkg-th--featured' : ''}>
                                            {h.badge && (
                                                <span className={`pkg-badge${h.featured ? '' : ' pkg-badge--soft'}`}>
                                                    {h.badge}
                                                </span>
                                            )}
                                            <span className="pkg-name">{h.name}</span>
                                            <span className="pkg-price">{h.price}</span>
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {PACK_FEATURES.map(f => (
                                    <tr key={f.name}>
                                        <td className="pkg-feature">{f.name}</td>
                                        {PACK_HEADERS.map(h => {
                                            const val = f[h.key]
                                            return (
                                                <td key={h.key} className={h.featured ? 'pkg-td--featured' : ''}>
                                                    {val === true ? (
                                                        <span className="pkg-check" aria-label="inclus">
                                                            <svg viewBox="0 0 14 14" fill="none" style={{ width: 11, height: 11 }}>
                                                                <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                        </span>
                                                    ) : val === false ? (
                                                        <span className="pkg-dash" aria-label="non inclus">—</span>
                                                    ) : (
                                                        <span className="pkg-val">{val}</span>
                                                    )}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                ))}
                                <tr className="pkg-cta-row">
                                    <td />
                                    {PACK_HEADERS.map(h => (
                                        <td key={h.key} className={h.featured ? 'pkg-td--featured' : ''}>
                                            <button
                                                type="button"
                                                onClick={() => go('#contact')}
                                                className={`pkg-cta ${h.featured ? 'pkg-cta--featured' : 'pkg-cta--default'}`}
                                            >
                                                Choisir
                                                <Arrow />
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* ═══ CONDITIONS Réseaux sociaux ═══ */}
                <div className="conditions reveal" style={{ marginBottom: '16px' }}>
                    <div className="conditions__head">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, color: 'var(--color-vecteur)' }}>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4m0 4h.01" />
                        </svg>
                        <span className="conditions__lbl">Conditions</span>
                        <span className="conditions__title">Gestion des réseaux sociaux</span>
                    </div>

                    <div className="conditions__grid">
                        {CONDITIONS_RS.map(c => (
                            <div key={c.label} className="conditions__cell">
                                <span className="conditions__cell-lbl">{c.label}</span>
                                <span className="conditions__cell-val">{c.value}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className="conditions__excluded-lbl">Non inclus dans la prestation</span>
                        <ul className="conditions__excluded">
                            {CONDITIONS_EXCLUDED.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ═══ CGU ═══ */}
                <div className="cgu reveal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }} className="cgu__icon">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <p className="cgu__text">
                        En faisant appel à nos services, vous acceptez nos{' '}
                    <a
                        className="cgu__link"
                        href="/cgu-auxo.pdf"
                        download="CGU-AUXO-Agency.pdf"
                    >
                        Conditions Générales d'Utilisation (PDF)
                    </a>
                </p>
            </div>
        </div>
</section>
)
}

function Arrow() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(18,27,31,0.45)', marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '14px',
        }}>
            {children}
            <span style={{ flex: 1, height: '1px', background: 'rgba(18,27,31,0.1)' }} />
        </h3>
    )
}