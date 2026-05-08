'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 400)
        return () => clearTimeout(t)
    }, [])

    const scrollTo = (id: string) =>
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section
            id="accueil"
            style={{ position: 'relative', height: '100svh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#0c1418' }}
            aria-label="Accueil AUXO"
        >
            {/* YouTube video */}
            <div style={{ position: 'absolute', inset: '-10%', pointerEvents: 'none', zIndex: 0 }} aria-hidden="true">
                <iframe
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'calc(100% + 200px)', height: 'calc(100% + 200px)', minWidth: '100%', minHeight: '100%', border: 'none' }}
                    src="https://www.youtube.com/embed/hnfScOQdZfo?autoplay=1&mute=1&loop=1&playlist=hnfScOQdZfo&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
                    title="AUXO background video"
                    allow="autoplay; encrypted-media"
                    loading="lazy"
                    tabIndex={-1}
                />
            </div>

            {/* Overlays */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: `linear-gradient(to right, rgba(18,27,31,0.65) 0%, rgba(18,27,31,0.35) 60%, rgba(18,27,31,0.2) 100%), linear-gradient(to top, rgba(18,27,31,0.7) 0%, transparent 50%)` }} aria-hidden="true" />
            <div className="noise-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.025 }} aria-hidden="true" />

            {/* Content */}
            <div className="container-auxo" style={{ position: 'relative', zIndex: 3, paddingBottom: '60px', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 1s ease, transform 1s ease' }}>
        <span className="label-tag" style={{ display: 'block', marginBottom: '28px', opacity: 0.85 }}>
          Agence de communication — Belgique
        </span>

                <h1 className="text-display-xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-epure)', maxWidth: '820px', marginBottom: '24px' }}>
                    Votre marque mérite<br />
                    <span style={{ color: 'var(--color-vecteur)', display: 'block' }}>plus que du bruit.</span>
                </h1>

                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: 'rgba(247,247,247,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '48px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    Stratégie
                    <span style={{ color: 'var(--color-vecteur)', fontSize: '1.4em' }}>·</span>
                    Croissance
                    <span style={{ color: 'var(--color-vecteur)', fontSize: '1.4em' }}>·</span>
                    Engagement
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button onClick={() => scrollTo('#services')} className="btn-primary" aria-label="Voir nos services">
                        Nos services
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button onClick={() => scrollTo('#contact')} className="btn-outline" aria-label="Nous contacter">
                        Prendre contact
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: loaded ? 1 : 0, transition: 'opacity 1.2s ease 1.5s' }} aria-hidden="true">
                <span className="animate-scroll-pulse" style={{ display: 'block', width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--color-vecteur), transparent)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,247,247,0.35)' }}>Défiler</span>
            </div>
        </section>
    )
}