'use client'

import { useReveal } from './UseReveal'

const SERVICES = [
    {
        id: 'reseaux', label: 'Réseaux sociaux', title: 'Gestion des réseaux sociaux',
        price: 'À partir de 850 € HTVA/mois',
        desc: 'Une présence cohérente et engageante sur Facebook & Instagram, pilotée de A à Z — de la stratégie au reporting mensuel, en passant par la création de contenu.',
        points: [
            'Audit de la présence en ligne et stratégie éditoriale',
            'Création du planning de contenu',
            'Rédaction des textes et descriptions',
            'Gestion des publications Facebook & Instagram',
            '3 à 4 publications par semaine',
            "Stories d'engagement",
            '1 tournage mensuel (vidéo, photo, visuels)',
            'Une campagne sponsorisée (hors budget plateforme)',
            'Rendez-vous et rapport mensuel',
        ],
        badge: null,
    },
    {
        id: 'branding', label: 'Branding', title: 'Identité de marque',
        price: 'Dès 750 €',
        desc: "Trois packs pour construire une identité visuelle forte et mémorable — du logo à la charte graphique complète.",
        points: [
            'Pack Essentials — 750 € (logo + charte simplifiée)',
            'Pack Advanced — 1 500 € ⭐ (+ animation logo, mockups)',
            'Pack Performance — 2 750 € (+ identité audiovisuelle, charte éditoriale)',
        ],
        badge: '3 packs',
    },
    {
        id: 'contenu', label: 'Photo & Vidéo', title: 'Création de contenu',
        price: 'Sur devis',
        desc: "Des visuels photo et vidéo pensés pour impacter — tout réalisé avec une direction artistique soignée.",
        points: [
            'Photos corporate & packshots',
            'Studio & shooting événementiel',
            'Photos réseaux sociaux',
            'Vidéos réseaux sociaux & corporate',
            'Aftermovies & teasers',
        ],
        badge: null,
    },
    {
        id: 'audit', label: 'Audit', title: 'Audit de communication',
        price: '450 €',
        desc: "Un regard extérieur acéré sur votre communication — diagnostic complet, constats clairs et plan d'actions concret.",
        points: [
            "Rendez-vous d'analyse entre 2h et 4h",
            'Retour par mail avec constat et actions sous 48h',
            "Rapport d'audit et recommandations sous 2 semaines",
            'Sans engagement',
        ],
        badge: 'Entrée en matière',
    },
]

export default function Services() {
    const ref = useReveal()

    return (
        <section
            id="services"
            ref={ref as React.RefObject<HTMLElement>}
            className="section-py"
            style={{ background: 'var(--color-epure)', position: 'relative', overflow: 'hidden' }}
        >
            {/* Glow décoratif */}
            <div style={{
                position: 'absolute', bottom: '-100px', right: '-100px',
                width: '600px', height: '600px', borderRadius: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle, rgba(70,125,101,0.06) 0%, transparent 70%)',
            }} aria-hidden="true" />

            <div className="container-auxo">

                {/* Header */}
                <div style={{ maxWidth: '580px', marginBottom: 'clamp(48px,6vw,80px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span className="label-tag reveal">Nos services</span>
                    <h2 className="text-display-lg reveal reveal-d1"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ancre)', marginTop: '8px' }}>
                        Ce qu'on fait,<br />
                        <span style={{ color: 'var(--color-vecteur)' }}>on le fait bien.</span>
                    </h2>
                    <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(18,27,31,0.55)', lineHeight: 1.7 }}>
                        Quatre expertises complémentaires pour construire, développer et amplifier votre présence de marque.
                    </p>
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '20px' }}>
                    {SERVICES.map((s, i) => (
                        <article key={s.id} className="service-card reveal"
                                 style={{ padding: 'clamp(28px,3vw,40px)', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', transitionDelay: `${0.1 + i * 0.1}s` }}>
                            {s.badge && (
                                <span style={{
                                    position: 'absolute', top: '20px', right: '20px',
                                    fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700,
                                    textTransform: 'uppercase', letterSpacing: '0.08em',
                                    background: 'var(--color-vecteur)', color: 'white',
                                    padding: '4px 10px', borderRadius: '3px',
                                }}>{s.badge}</span>
                            )}

                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-vecteur)' }}>
                {s.label}
              </span>

                            <h3 className="text-display-md" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-ancre)', margin: 0 }}>
                                {s.title}
                            </h3>

                            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-vecteur)' }}>
                                {s.price}
                            </p>

                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(18,27,31,0.55)', lineHeight: 1.7, flex: 1 }}>
                                {s.desc}
                            </p>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', margin: 0, padding: 0, paddingTop: '16px', borderTop: '1px solid rgba(18,27,31,0.08)' }}>
                                {s.points.map(p => (
                                    <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(18,27,31,0.6)' }}>
                                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-vecteur)', flexShrink: 0, marginTop: '6px' }} />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* Prestations graphiques */}
                <div className="reveal" style={{
                    marginTop: '48px',
                    background: 'var(--color-sillage)',
                    borderRadius: '14px',
                    padding: '32px 36px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '32px', flexWrap: 'wrap',
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                        <div style={{
                            width: '46px', height: '46px', flexShrink: 0,
                            background: 'rgba(247,247,247,0.1)', border: '1px solid rgba(247,247,247,0.2)',
                            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--color-trame)',
                        }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                            </svg>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-epure)', marginBottom: '6px' }}>
                                Prestations graphiques particulières
                            </p>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,228,198,0.75)', lineHeight: 1.6 }}>
                                Catalogue produit · Brochure commerciale · Affiche · Roll-up · Pré-presse · et plus…
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-trame)' }}>
              Sur devis
            </span>
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{
                                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem',
                                background: 'var(--color-trame)', color: 'var(--color-ancre)',
                                border: 'none', borderRadius: '4px', padding: '10px 22px', cursor: 'pointer',
                            }}
                        >
                            Demander un devis
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}