'use client'

import { useState } from 'react'
import { useReveal } from './UseReveal'

// ── TYPES & DATA ──────────────────────────────────────────────

type Category = 'reseaux' | 'branding' | 'contenu' | 'audit'
type MockupType = 'social' | 'brand' | 'photo' | 'video' | 'audit'

type Project = {
    id: string
    category: Category
    mockup: MockupType
    name: string
    sector: string
    description: string
    metric?: string
}

const PROJECTS: Project[] = [
    { id: 'maison-lucien', category: 'reseaux', mockup: 'social', name: 'Maison Lucien', sector: 'Boulangerie artisanale', description: 'Stratégie éditoriale + production mensuelle complète.', metric: '+180% portée organique en 6 mois' },
    { id: 'atelier-nord',  category: 'branding', mockup: 'brand', name: 'Atelier Nord',   sector: 'Architecte d\'intérieur', description: 'Identité de marque complète — logo, charte, mockups.', metric: 'Pack Advanced' },
    { id: 'kerami',         category: 'branding', mockup: 'brand', name: 'Kérami',         sector: 'Atelier céramique',       description: 'Refonte d\'identité — du naming à la charte éditoriale.', metric: 'Pack Performance' },
    { id: 'studio-sept',    category: 'contenu',  mockup: 'photo', name: 'Studio Sept',    sector: 'Studio événementiel',     description: 'Shooting lookbook + 50 visuels pour réseaux sociaux.',     metric: 'Production photo' },
    { id: 'vent-dest',       category: 'contenu',  mockup: 'video', name: 'Vent d\'Est',     sector: 'Hôtel boutique',          description: 'Aftermovie événementiel + teasers réseaux sociaux.',        metric: 'Production vidéo' },
    { id: 'vinea-co',       category: 'audit',    mockup: 'audit', name: 'Vinea & Co',     sector: 'Caviste indépendant',     description: 'Diagnostic 360° + plan d\'actions prioritaires.',           metric: 'Audit complet' },
]

const FILTERS: { id: string; label: string; count?: number }[] = [
    { id: 'all',      label: 'Toutes' },
    { id: 'reseaux',  label: 'Réseaux sociaux' },
    { id: 'branding', label: 'Identité' },
    { id: 'contenu',  label: 'Photo & Vidéo' },
    { id: 'audit',    label: 'Audit' },
]

const CAT_LABEL: Record<Category, string> = {
    reseaux: 'Réseaux sociaux',
    branding: 'Identité de marque',
    contenu: 'Photo & Vidéo',
    audit: 'Audit',
}

// ── MAIN COMPONENT ─────────────────────────────────────────────

export default function Portfolio() {
    const ref = useReveal()
    const [filter, setFilter] = useState<string>('all')
    const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

    return (
        <section
            id="realisations"
            ref={ref as React.RefObject<HTMLElement>}
            className="section-py"
            style={{ background: 'var(--color-epure)', position: 'relative', overflow: 'hidden' }}
        >
            <div style={{
                position: 'absolute', top: '-180px', left: '-180px',
                width: '500px', height: '500px', borderRadius: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle, rgba(70,125,101,0.06) 0%, transparent 70%)',
            }} aria-hidden="true" />

            <style>{`
                /* ─── FILTERS ─── */
                .pf-filters {
                    display: flex; flex-wrap: wrap; gap: 8px;
                    margin-bottom: clamp(36px, 4vw, 56px);
                }
                .pf-filter-btn {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.82rem;
                    padding: 9px 18px; border-radius: 100px;
                    background: transparent; color: var(--color-ancre);
                    border: 1px solid rgba(18,27,31,0.15);
                    cursor: pointer; white-space: nowrap;
                    transition: all 0.2s ease;
                }
                .pf-filter-btn:hover { border-color: rgba(255,141,65,0.5); color: var(--color-vecteur); }
                .pf-filter-btn--active {
                    background: var(--color-ancre); color: var(--color-epure);
                    border-color: var(--color-ancre);
                }
                .pf-filter-btn--active:hover { color: var(--color-epure); }

                /* ─── GRID ─── */
                .pf-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 24px;
                }
                @media (min-width: 700px) {
                    .pf-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 1080px) {
                    .pf-grid { grid-template-columns: repeat(3, 1fr); }
                }

                /* ─── CARD ─── */
                @keyframes pf-fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .pf-card {
                    background: white;
                    border: 1px solid rgba(18,27,31,0.08);
                    border-radius: 16px;
                    overflow: hidden;
                    display: flex; flex-direction: column;
                    animation: pf-fade-in 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
                    transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94),
                                box-shadow 0.4s ease,
                                border-color 0.3s ease;
                }
                .pf-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(255,141,65,0.25);
                    box-shadow: 0 20px 48px rgba(18,27,31,0.08);
                }
                .pf-card__visual {
                    aspect-ratio: 4 / 3;
                    background: var(--color-ancre);
                    padding: clamp(20px, 2.5vw, 28px);
                    display: flex; align-items: center; justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                .pf-card__visual::before {
                    content: ''; position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(245,228,198,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245,228,198,0.04) 1px, transparent 1px);
                    background-size: 24px 24px;
                    mask-image: radial-gradient(ellipse at center, transparent 0%, black 90%);
                    -webkit-mask-image: radial-gradient(ellipse at center, transparent 0%, black 90%);
                }
                .pf-card__meta {
                    padding: clamp(20px, 2.5vw, 26px);
                    display: flex; flex-direction: column; gap: 6px;
                    flex: 1;
                }
                .pf-card__tag {
                    display: inline-flex; align-items: center; gap: 7px;
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.66rem; letter-spacing: 0.14em;
                    text-transform: uppercase; color: var(--color-vecteur);
                    margin-bottom: 4px;
                }
                .pf-card__tag-dot {
                    width: 5px; height: 5px; border-radius: 50%;
                    background: var(--color-vecteur);
                }
                .pf-card__title {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.2rem; color: var(--color-ancre);
                    margin: 0; line-height: 1.2;
                }
                .pf-card__sector {
                    font-family: var(--font-body); font-size: 0.78rem;
                    color: rgba(18,27,31,0.5); margin: 0 0 6px 0;
                }
                .pf-card__desc {
                    font-family: var(--font-body); font-size: 0.85rem;
                    color: rgba(18,27,31,0.65); line-height: 1.6; margin: 0;
                    flex: 1;
                }
                .pf-card__metric {
                    margin-top: 14px;
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.78rem; color: var(--color-sillage);
                    padding: 6px 11px;
                    background: rgba(70,125,101,0.08);
                    border-radius: 4px;
                    width: fit-content;
                }

                /* ═══ MOCKUP: SOCIAL FEED ═══ */
                .mock-social {
                    width: 100%; height: 100%;
                    background: white; border-radius: 12px;
                    padding: 14px;
                    display: flex; flex-direction: column; gap: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
                    position: relative; z-index: 1;
                }
                .mock-social__head { display: flex; align-items: center; gap: 10px; }
                .mock-social__avatar {
                    width: 36px; height: 36px; border-radius: 50%;
                    background: linear-gradient(135deg, #ff8d41, #c4674a);
                    flex-shrink: 0;
                }
                .mock-social__info { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
                .mock-social__handle {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.82rem; color: var(--color-ancre);
                }
                .mock-social__stats {
                    display: flex; gap: 12px;
                    font-family: var(--font-body); font-size: 0.64rem;
                    color: rgba(18,27,31,0.55);
                }
                .mock-social__stats strong { color: var(--color-ancre); font-weight: 700; }
                .mock-social__feed {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3px;
                    flex: 1;
                }
                .mock-social__post {
                    aspect-ratio: 1;
                    border-radius: 3px;
                    position: relative;
                }
                .mock-social__post-reel {
                    position: absolute; top: 4px; right: 4px;
                    color: white;
                }

                /* ═══ MOCKUP: BRAND KIT ═══ */
                .mock-brand {
                    width: 100%; height: 100%;
                    background: white; border-radius: 12px;
                    padding: 18px;
                    display: flex; flex-direction: column; gap: 14px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
                    position: relative; z-index: 1;
                }
                .mock-brand__logo {
                    flex: 1;
                    display: flex; align-items: center; justify-content: center;
                    color: var(--color-ancre);
                    border-bottom: 1px solid rgba(18,27,31,0.08);
                    padding-bottom: 14px;
                }
                .mock-brand__logo svg { width: 60px; height: 60px; }
                .mock-brand__palette {
                    display: flex; gap: 3px;
                    height: 26px;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .mock-brand__palette > span { flex: 1; }
                .mock-brand__typo {
                    display: flex; align-items: center; gap: 14px;
                }
                .mock-brand__typo-big {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.9rem; color: var(--color-ancre); line-height: 1;
                }
                .mock-brand__typo-text {
                    display: flex; flex-direction: column; gap: 2px;
                    font-family: var(--font-body); font-size: 0.68rem;
                    color: rgba(18,27,31,0.55);
                }
                .mock-brand__typo-text strong { color: var(--color-ancre); font-weight: 700; }

                /* ═══ MOCKUP: PHOTO GRID ═══ */
                .mock-photo {
                    width: 100%; height: 100%;
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    gap: 6px;
                    position: relative; z-index: 1;
                }
                .mock-photo__tile {
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
                }
                .mock-photo__tile--1 { grid-column: 1; grid-row: 1 / span 2; background: linear-gradient(135deg, #c89876 0%, #8a5e3f 100%); }
                .mock-photo__tile--2 { grid-column: 2; grid-row: 1; background: linear-gradient(135deg, #d4a574 0%, #ad7e4b 100%); }
                .mock-photo__tile--3 { grid-column: 2; grid-row: 2; background: linear-gradient(135deg, #b8825a 0%, #88573a 100%); }
                .mock-photo__tag {
                    position: absolute; bottom: 8px; left: 8px;
                    font-family: var(--font-display); font-size: 0.58rem;
                    font-weight: 700; letter-spacing: 0.1em;
                    text-transform: uppercase; color: white;
                    background: rgba(0,0,0,0.35); backdrop-filter: blur(6px);
                    padding: 3px 7px; border-radius: 3px;
                }

                /* ═══ MOCKUP: VIDEO ═══ */
                .mock-video {
                    width: 100%; height: 100%;
                    display: flex; flex-direction: column;
                    background: var(--color-ancre);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
                    position: relative; z-index: 1;
                }
                .mock-video__frame {
                    flex: 1;
                    background: linear-gradient(135deg, #2c3f36, #4a6b5a);
                    display: flex; align-items: center; justify-content: center;
                    position: relative;
                }
                .mock-video__frame::before {
                    content: ''; position: absolute; inset: 0;
                    background-image:
                        radial-gradient(circle at 30% 40%, rgba(255,141,65,0.18) 0%, transparent 50%),
                        radial-gradient(circle at 70% 60%, rgba(245,228,198,0.1) 0%, transparent 50%);
                }
                .mock-video__play {
                    width: 56px; height: 56px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.18);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.3);
                    display: flex; align-items: center; justify-content: center;
                    color: white; cursor: pointer;
                    position: relative; z-index: 1;
                }
                .mock-video__bar {
                    background: rgba(18,27,31,0.95);
                    padding: 12px 16px;
                    display: flex; align-items: center; gap: 12px;
                }
                .mock-video__progress {
                    flex: 1;
                    height: 3px;
                    background: rgba(245,228,198,0.15);
                    border-radius: 2px;
                    overflow: hidden;
                }
                .mock-video__progress > div {
                    width: 38%; height: 100%;
                    background: var(--color-vecteur);
                    border-radius: 2px;
                }
                .mock-video__time {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.68rem;
                    color: rgba(245,228,198,0.7);
                }

                /* ═══ MOCKUP: AUDIT REPORT ═══ */
                .mock-audit {
                    width: 100%; height: 100%;
                    background: white;
                    border-radius: 12px;
                    padding: 18px;
                    display: flex; flex-direction: column; gap: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
                    position: relative; z-index: 1;
                }
                .mock-audit__head {
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgba(18,27,31,0.08);
                }
                .mock-audit__brand {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.58rem; letter-spacing: 0.18em;
                    text-transform: uppercase; color: var(--color-vecteur);
                    display: block; margin-bottom: 3px;
                }
                .mock-audit__title {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.82rem; color: var(--color-ancre);
                }
                .mock-audit__score {
                    display: flex; align-items: center; gap: 14px;
                    padding: 2px 0;
                }
                .mock-audit__ring {
                    width: 50px; height: 50px;
                    border-radius: 50%;
                    background: conic-gradient(var(--color-vecteur) 0% 62%, rgba(18,27,31,0.08) 62% 100%);
                    display: flex; align-items: center; justify-content: center;
                    position: relative;
                    flex-shrink: 0;
                }
                .mock-audit__ring::before {
                    content: ''; position: absolute; inset: 5px;
                    background: white; border-radius: 50%;
                }
                .mock-audit__ring span {
                    position: relative; z-index: 1;
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.82rem; color: var(--color-ancre);
                }
                .mock-audit__score p {
                    font-family: var(--font-body); font-size: 0.7rem;
                    color: rgba(18,27,31,0.6); margin: 0; line-height: 1.3;
                }
                .mock-audit__metrics {
                    display: flex; flex-direction: column; gap: 7px;
                    flex: 1;
                }
                .mock-audit__metric { display: flex; flex-direction: column; gap: 3px; }
                .mock-audit__metric-head {
                    display: flex; justify-content: space-between;
                    font-family: var(--font-body); font-size: 0.63rem;
                    color: rgba(18,27,31,0.6);
                }
                .mock-audit__metric-head strong { color: var(--color-ancre); font-weight: 700; }
                .mock-audit__bar {
                    height: 3px;
                    background: rgba(18,27,31,0.06);
                    border-radius: 2px;
                    overflow: hidden;
                }
                .mock-audit__bar > div {
                    height: 100%;
                    background: var(--color-vecteur);
                    border-radius: 2px;
                }
            `}</style>

            <div className="container-auxo">
                {/* Header */}
                <div style={{ maxWidth: '620px', marginBottom: 'clamp(40px, 5vw, 64px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span className="label-tag reveal">Réalisations</span>
                    <h2
                        className="text-display-lg reveal reveal-d1"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ancre)', marginTop: '8px' }}
                    >
                        On vous montre.<br />
                        <span style={{ color: 'var(--color-vecteur)' }}>Pas qu'on en parle.</span>
                    </h2>
                    <p
                        className="reveal reveal-d2"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'rgba(18,27,31,0.6)', lineHeight: 1.7 }}
                    >
                        Quelques projets sur lesquels on a posé nos mains — un exemple concret pour chaque type de prestation.
                    </p>
                </div>

                {/* Filters */}
                <div className="pf-filters reveal reveal-d2">
                    {FILTERS.map(f => {
                        const count = f.id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.category === f.id).length
                        return (
                            <button
                                key={f.id}
                                type="button"
                                onClick={() => setFilter(f.id)}
                                className={`pf-filter-btn${filter === f.id ? ' pf-filter-btn--active' : ''}`}
                            >
                                {f.label} <span style={{ opacity: 0.5, marginLeft: 4 }}>({count})</span>
                            </button>
                        )
                    })}
                </div>

                {/* Grid */}
                <div className="pf-grid" key={filter}>
                    {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>

                {/* Bottom CTA */}
                <div
                    className="reveal"
                    style={{
                        marginTop: 'clamp(48px, 6vw, 80px)',
                        background: 'var(--color-ancre)',
                        borderRadius: '14px',
                        padding: 'clamp(28px, 4vw, 44px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: '24px', flexWrap: 'wrap',
                    }}
                >
                    <div>
                        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', color: 'var(--color-epure)', marginBottom: '6px', lineHeight: 1.3 }}>
                            Votre projet a sa place dans la prochaine ligne ?
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(245,228,198,0.65)', lineHeight: 1.5 }}>
                            On répond en moins de 48h — sans CRM automatique entre nous.
                        </p>
                    </div>
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem',
                            background: 'var(--color-vecteur)', color: 'var(--color-ancre)',
                            border: 'none', borderRadius: '6px',
                            padding: '14px 24px', cursor: 'pointer',
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            flexShrink: 0,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,141,65,0.3)' }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                    >
                        Parlons de votre projet
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

// ── CARD ───────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="pf-card">
            <div className="pf-card__visual">
                {project.mockup === 'social' && <SocialMockup name={project.name} />}
                {project.mockup === 'brand'  && <BrandMockup project={project.id} />}
                {project.mockup === 'photo'  && <PhotoMockup />}
                {project.mockup === 'video'  && <VideoMockup />}
                {project.mockup === 'audit'  && <AuditMockup />}
            </div>
            <div className="pf-card__meta">
                <span className="pf-card__tag">
                    <span className="pf-card__tag-dot" />
                    {CAT_LABEL[project.category]}
                </span>
                <h3 className="pf-card__title">{project.name}</h3>
                <p className="pf-card__sector">{project.sector}</p>
                <p className="pf-card__desc">{project.description}</p>
                {project.metric && <span className="pf-card__metric">{project.metric}</span>}
            </div>
        </article>
    )
}

// ── MOCKUPS ────────────────────────────────────────────────────

function SocialMockup({ name }: { name: string }) {
    const cells = [
        'linear-gradient(135deg, #c89876, #8a5e3f)',
        'linear-gradient(135deg, #d4a574, #ad7e4b)',
        'linear-gradient(135deg, #c4674a, #8a3e2a)',
        'linear-gradient(135deg, #e9d5b8, #c4a87c)',
        'linear-gradient(135deg, #b89677, #8a6e4f)',
        'linear-gradient(135deg, #d6a884, #a87c5e)',
        'linear-gradient(135deg, #c9a070, #9a7444)',
        'linear-gradient(135deg, #e0c099, #b8946e)',
        'linear-gradient(135deg, #b8825a, #88573a)',
    ]
    const handle = '@' + name.toLowerCase().replace(/[^a-z0-9]/g, '')
    return (
        <div className="mock-social">
            <div className="mock-social__head">
                <div className="mock-social__avatar" />
                <div className="mock-social__info">
                    <span className="mock-social__handle">{handle}</span>
                    <div className="mock-social__stats">
                        <span><strong>180</strong> posts</span>
                        <span><strong>2,4k</strong> abonnés</span>
                    </div>
                </div>
            </div>
            <div className="mock-social__feed">
                {cells.map((bg, i) => (
                    <div key={i} className="mock-social__post" style={{ background: bg }}>
                        {(i === 1 || i === 5) && (
                            <span className="mock-social__post-reel">
                                <svg viewBox="0 0 14 14" fill="currentColor" style={{ width: 9, height: 9 }}>
                                    <polygon points="3 2 11 7 3 12 3 2" />
                                </svg>
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

function BrandMockup({ project }: { project: string }) {
    const palettes: Record<string, string[]> = {
        'atelier-nord': ['#1a2a35', '#e9d5b8', '#c4674a', '#88573a'],
        'kerami':        ['#467d65', '#f5e4c6', '#c89876', '#1a2a35'],
    }
    const palette = palettes[project] || ['#ff8d41', '#f5e4c6', '#467d65', '#121b1f']
    return (
        <div className="mock-brand">
            <div className="mock-brand__logo">
                <svg viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M28 28 L52 52 M52 28 L28 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </div>
            <div className="mock-brand__palette">
                {palette.map((c, i) => <span key={i} style={{ background: c }} />)}
            </div>
            <div className="mock-brand__typo">
                <span className="mock-brand__typo-big">Aa</span>
                <div className="mock-brand__typo-text">
                    <p><strong>Display</strong> 700</p>
                    <p>Body Sans 500</p>
                </div>
            </div>
        </div>
    )
}

function PhotoMockup() {
    return (
        <div className="mock-photo">
            <div className="mock-photo__tile mock-photo__tile--1">
                <span className="mock-photo__tag">Lookbook</span>
            </div>
            <div className="mock-photo__tile mock-photo__tile--2">
                <span className="mock-photo__tag">Studio</span>
            </div>
            <div className="mock-photo__tile mock-photo__tile--3">
                <span className="mock-photo__tag">Packshot</span>
            </div>
        </div>
    )
}

function VideoMockup() {
    return (
        <div className="mock-video">
            <div className="mock-video__frame">
                <button className="mock-video__play" aria-label="Lire">
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, marginLeft: 2 }}>
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                </button>
            </div>
            <div className="mock-video__bar">
                <div className="mock-video__progress"><div /></div>
                <span className="mock-video__time">0:42 / 1:50</span>
            </div>
        </div>
    )
}

function AuditMockup() {
    const metrics = [
        { label: 'Identité visuelle', val: 45 },
        { label: 'Réseaux sociaux', val: 70 },
        { label: 'Site web', val: 35 },
    ]
    return (
        <div className="mock-audit">
            <div className="mock-audit__head">
                <span className="mock-audit__brand">Audit AUXO</span>
                <span className="mock-audit__title">Vinea &amp; Co — 2026</span>
            </div>
            <div className="mock-audit__score">
                <div className="mock-audit__ring"><span>62%</span></div>
                <p>Score<br />global</p>
            </div>
            <div className="mock-audit__metrics">
                {metrics.map(m => (
                    <div key={m.label} className="mock-audit__metric">
                        <div className="mock-audit__metric-head">
                            <span>{m.label}</span>
                            <span><strong>{m.val}</strong>/100</span>
                        </div>
                        <div className="mock-audit__bar"><div style={{ width: `${m.val}%` }} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}