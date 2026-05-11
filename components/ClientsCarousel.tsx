'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import { useReveal } from './UseReveal'

type Client = {
    name: string
    logo?: string // chemin optionnel vers un SVG/PNG dans /public (ex: '/clients/atelier-nord.svg')
}

// 🟠 Remplace ces entrées par les vrais clients quand les logos seront fournis.
// Pour utiliser une image : { name: 'Nom Client', logo: '/clients/nom-client.svg' }
const CLIENTS: Client[] = [
    { name: 'Atelier Nord' },
    { name: 'Maison Lucien' },
    { name: 'Kérami' },
    { name: 'Studio Sept' },
    { name: 'Vinea & Co' },
    { name: 'Oréon' },
    { name: 'Nordic Studio' },
    { name: 'Terre & Grain' },
    { name: 'Hélios' },
    { name: "Vent d'Est" },
]

export default function ClientsCarousel() {
    const ref = useReveal()

    // Doublé pour un défilement infini sans coupure
    const loop = [...CLIENTS, ...CLIENTS]

    return (
        <section
            id="references"
            ref={ref as React.RefObject<HTMLElement>}
            aria-label="Ils nous font confiance"
            style={{
                background: 'var(--color-epure)',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 'clamp(64px, 8vw, 104px)',
                paddingBottom: 'clamp(64px, 8vw, 104px)',
                borderTop: '1px solid rgba(18,27,31,0.06)',
            }}
        >
            {/* Halo décoratif Vecteur — cohérent avec la section #apropos */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-180px',
                    transform: 'translateY(-50%)',
                    width: '420px',
                    height: '420px',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    background:
                        'radial-gradient(circle, rgba(255,141,65,0.05) 0%, transparent 70%)',
                }}
                aria-hidden="true"
            />

            <style>{`
                @keyframes auxo-marquee {
                    from { transform: translate3d(0, 0, 0); }
                    to   { transform: translate3d(-50%, 0, 0); }
                }

                .auxo-marquee {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                            mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                }
                .auxo-marquee__track {
                    display: flex;
                    align-items: center;
                    width: max-content;
                    animation: auxo-marquee 55s linear infinite;
                    will-change: transform;
                }
                .auxo-marquee:hover .auxo-marquee__track {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .auxo-marquee__track { animation-duration: 240s; }
                }

                .auxo-marquee__item {
                    flex-shrink: 0;
                    height: 64px;
                    padding: 0 clamp(24px, 3.5vw, 48px);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(18, 27, 31, 0.4);
                    transition: color 0.35s ease;
                }
                .auxo-marquee__item:hover {
                    color: var(--color-ancre);
                }
                .auxo-marquee__item:hover .auxo-marquee__logo--img {
                    filter: grayscale(0%);
                    opacity: 1;
                }

                .auxo-marquee__logo--text {
                    font-family: var(--font-display);
                    font-weight: 600;
                    font-size: clamp(1.05rem, 1.5vw, 1.35rem);
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    white-space: nowrap;
                    color: inherit;
                    line-height: 1;
                }
                .auxo-marquee__logo--img {
                    filter: grayscale(100%);
                    opacity: 0.6;
                    transition: filter 0.35s ease, opacity 0.35s ease;
                    max-height: 44px;
                    width: auto;
                    object-fit: contain;
                }

                .auxo-marquee__sep {
                    flex-shrink: 0;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: var(--color-vecteur);
                    opacity: 0.45;
                }
            `}</style>

            {/* Header */}
            <div className="container-auxo" style={{ position: 'relative', zIndex: 1 }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '14px',
                        textAlign: 'center',
                        marginBottom: 'clamp(40px, 5vw, 64px)',
                    }}
                >
                    <span className="label-tag reveal">Références</span>
                    <h2
                        className="reveal reveal-d1"
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            color: 'var(--color-ancre)',
                            fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                            lineHeight: 1.2,
                            margin: 0,
                            maxWidth: '560px',
                        }}
                    >
                        Ils nous font{' '}
                        <span style={{ color: 'var(--color-vecteur)' }}>confiance.</span>
                    </h2>
                    <p
                        className="reveal reveal-d2"
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.95rem',
                            color: 'rgba(18,27,31,0.55)',
                            lineHeight: 1.6,
                            margin: 0,
                            maxWidth: '460px',
                        }}
                    >
                        Des entrepreneurs et PME belges qui ont choisi de prendre leur
                        communication au sérieux.
                    </p>
                </div>
            </div>

            {/* Marquee — pleine largeur, hors container pour le fade edge */}
            <div
                className="auxo-marquee reveal reveal-d3"
                role="list"
                aria-label="Liste de nos clients"
            >
                <div className="auxo-marquee__track">
                    {loop.map((client, i) => (
                        <Fragment key={`${client.name}-${i}`}>
                            <div className="auxo-marquee__item" role="listitem">
                                {client.logo ? (
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={160}
                                        height={44}
                                        className="auxo-marquee__logo--img"
                                    />
                                ) : (
                                    <span className="auxo-marquee__logo--text">
                                        {client.name}
                                    </span>
                                )}
                            </div>
                            <span className="auxo-marquee__sep" aria-hidden="true" />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}