'use client'

import Image from 'next/image'
import { useReveal } from './UseReveal'

const STATS = [
    { value: '10+',  label: "Années d'expérience" },
    { value: '75+',  label: 'Clients accompagnés'  },
    { value: '100%', label: 'Sur-mesure'            },
    { value: '3',    label: 'Collègues passionnés'  },
]

const TEAM = [
    {
        name: 'Ludovic',
        role: 'Cofondateur & Stratégie',
        xp: '8 ans',
        image: '/man1.jpg', // 👉 renomme selon ton fichier réel
        description: "Expert en stratégie de communication et développement de marque. Il pilote la vision créative et accompagne les clients dans la définition de leur positionnement.",
    },
    {
        name: 'Sacha',
        role: 'Cofondateur & Créatif',
        xp: '7 ans',
        image: '/man1.jpg', // 👉 renomme selon ton fichier réel
        description: "Direction artistique, identité visuelle et production de contenu. Il transforme les idées en identités mémorables avec une approche rigoureuse et moderne.",
    },
    {
        name: 'Lucas',
        role: 'Production & Contenu',
        xp: '4 ans',
        image: '/man1.jpg', // 👉 renomme selon ton fichier réel
        description: "Spécialiste photo, vidéo et montage. Il capture l'essence de chaque marque à travers des visuels qui racontent une histoire et créent de l'engagement.",
    },
]

export default function About() {
    const ref = useReveal()

    return (
        <>
            {/* ── À propos — thème CLAIR ── */}
            <section
                id="apropos"
                ref={ref as React.RefObject<HTMLElement>}
                className="section-py"
                style={{ background: 'var(--color-epure)', position: 'relative', overflow: 'hidden' }}
            >
                <div style={{
                    position: 'absolute', top: '-150px', right: '-150px',
                    width: '500px', height: '500px', borderRadius: '50%', pointerEvents: 'none',
                    background: 'radial-gradient(circle, rgba(255,141,65,0.07) 0%, transparent 70%)',
                }} aria-hidden="true" />

                <div className="container-auxo">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
                        gap: 'clamp(48px,6vw,96px)', alignItems: 'start',
                    }}>
                        {/* Texte */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <span className="label-tag reveal">Notre mission & notre vision</span>
                            <h2 className="text-display-lg reveal reveal-d1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ancre)', marginTop: '8px' }}>
                                On ne fait pas du marketing.<br />
                                <span style={{ color: 'var(--color-vecteur)' }}>On construit des marques.</span>
                            </h2>
                            <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.975rem', color: 'rgba(18,27,31,0.65)', lineHeight: 1.75 }}>
                                AUXO, c'est avant tout une conviction : une bonne communication ne se résume pas à de jolis visuels ou un feed Instagram impeccable. Elle naît d'une stratégie claire, d'une identité cohérente et d'un contenu qui sert réellement vos objectifs.
                            </p>
                            <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.975rem', color: 'rgba(18,27,31,0.65)', lineHeight: 1.75 }}>
                                Fondée à Mons par Ludo et Sacha, l'agence accompagne des entrepreneurs et PME belges qui veulent prendre leur communication au sérieux — sans perdre de temps ni d'argent sur ce qui ne fonctionne pas.
                            </p>
                            <p className="reveal reveal-d3" style={{ fontFamily: 'var(--font-body)', fontSize: '0.975rem', color: 'rgba(18,27,31,0.65)', lineHeight: 1.75 }}>
                                Notre approche :{' '}
                                <strong style={{ color: 'var(--color-ancre)', fontWeight: 600 }}>comprendre d'abord, créer ensuite</strong>.
                                Chaque projet commence par une écoute sincère. C'est à partir de là que la forme prend vie.
                            </p>
                            <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px', paddingTop: '20px', borderTop: '1px solid rgba(255,141,65,0.2)' }}>
                                {[
                                    { href: 'mailto:hello@auxoagency.be', text: 'hello@auxoagency.be' },
                                    { href: 'tel:+32474407737', text: '+32 474 40 77 37' },
                                ].map(item => (
                                    <a key={item.href} href={item.href} className="about-contact-link">
                    <span style={{ color: 'var(--color-vecteur)', width: '16px', height: '16px', flexShrink: 0 }}>
                      {item.href.startsWith('mailto') ? <MailIcon /> : <PhoneIcon />}
                    </span>
                                        {item.text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {STATS.map((stat, i) => (
                                <div key={stat.label} className="about-stat-card reveal" style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: 'var(--color-vecteur)', lineHeight: 1 }}>
                    {stat.value}
                  </span>
                                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(18,27,31,0.5)', lineHeight: 1.4 }}>
                    {stat.label}
                  </span>
                                </div>
                            ))}
                            <div className="reveal reveal-d4" style={{ gridColumn: 'span 2', background: 'rgba(255,141,65,0.06)', border: '1px solid rgba(255,141,65,0.2)', borderRadius: '8px', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <img src="/Pathshort4.svg" alt="" aria-hidden="true" style={{ width: '64px', height: '64px', flexShrink: 0 }} />
                                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 500, color: 'rgba(18,27,31,0.6)', lineHeight: 1.65 }}>
                                    Stratégie &amp; branding<br />pour une croissance durable
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Équipe — fond VERT ── */}
            <section
                id="equipe"
                className="section-py"
                style={{ background: 'var(--color-sillage)', position: 'relative', overflow: 'hidden' }}
            >
                {/* auxoBg — grande image fixe en parallax */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: "url('/logoWhite.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                    opacity: 0.2,
                }} aria-hidden="true" />

                {/* Papier millimétré */}


                <div className="container-auxo" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header */}
                    <div style={{ maxWidth: '560px', marginBottom: 'clamp(48px,6vw,72px)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,228,198,0.8)', display: 'block', marginBottom: '16px' }}>
              L'équipe
            </span>
                        <h2 className="text-display-lg" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-epure)', lineHeight: 1.1 }}>
                            Des visages derrière<br />
                            <span style={{ color: 'var(--color-trame)' }}>chaque projet.</span>
                        </h2>
                    </div>

                    {/* CSS cards */}
                    <style>{`
            .team-card {
              position: relative;
              border-radius: 14px;
              overflow: hidden;
              border: 1px solid rgba(247,247,247,0.12);
              aspect-ratio: 3/4;
              transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.4s ease;
            }
            .team-card:hover {
              transform: translateY(-8px);
              border-color: rgba(245,228,198,0.4);
            }
            .team-card-img {
              position: absolute;
              inset: 0;
              object-fit: cover;
              transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
            }
            .team-card:hover .team-card-img {
              transform: scale(1.06);
            }
            .team-card-gradient {
              position: absolute;
              bottom: 0; left: 0; right: 0;
              height: 65%;
              background: linear-gradient(to top, rgba(18,27,31,0.92) 0%, rgba(18,27,31,0.4) 60%, transparent 100%);
              transition: height 0.4s ease;
            }
            .team-card:hover .team-card-gradient {
              height: 100%;
              background: linear-gradient(to top, rgba(18,27,31,0.97) 0%, rgba(70,125,101,0.88) 100%);
            }
            .team-card-front {
              position: absolute;
              bottom: 0; left: 0; right: 0;
              padding: 24px;
              transition: transform 0.4s ease, opacity 0.3s ease;
            }
            .team-card:hover .team-card-front {
              transform: translateY(-8px);
              opacity: 0;
            }
            .team-card-overlay {
              position: absolute;
              inset: 0;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              padding: 28px;
              opacity: 0;
              transform: translateY(16px);
              transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
            }
            .team-card:hover .team-card-overlay {
              opacity: 1;
              transform: translateY(0);
            }
          `}</style>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
                        {TEAM.map((member) => (
                            <div key={member.name} className="team-card">

                                {/* Photo réelle */}
                                <Image
                                    src={member.image}
                                    alt={`Photo de ${member.name}`}
                                    fill
                                    className="team-card-img"
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Gradient */}
                                <div className="team-card-gradient" />

                                {/* Front — état repos */}
                                <div className="team-card-front">
                                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-epure)', marginBottom: '2px' }}>
                                        {member.name}
                                    </p>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(245,228,198,0.75)' }}>
                                        {member.role}
                                    </p>
                                </div>

                                {/* Overlay — au hover */}
                                <div className="team-card-overlay" aria-hidden="true">
                  <span style={{
                      fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--color-vecteur)', marginBottom: '10px', display: 'block',
                  }}>
                    Qui suis-je ?
                  </span>
                                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', color: 'var(--color-epure)', lineHeight: 1.1, marginBottom: '4px' }}>
                                        {member.name}
                                    </p>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(245,228,198,0.75)', marginBottom: '16px' }}>
                                        {member.role}
                                    </p>
                                    <div style={{ width: '28px', height: '2px', background: 'var(--color-vecteur)', borderRadius: '1px', marginBottom: '16px' }} />
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(247,247,247,0.65)', lineHeight: 1.65, marginBottom: '16px' }}>
                                        {member.description}
                                    </p>
                                    <span style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '7px',
                                        fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
                                        color: 'var(--color-trame)',
                                        background: 'rgba(245,228,198,0.1)', border: '1px solid rgba(245,228,198,0.2)',
                                        padding: '5px 12px', borderRadius: '4px',
                                    }}>
                    <svg viewBox="0 0 16 16" fill="none" style={{ width: '12px', height: '12px' }}>
                      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                                        {member.xp} d'expérience
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

function MailIcon() {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
}
function PhoneIcon() {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
}