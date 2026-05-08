'use client'

import { useReveal } from './UseReveal'

const PACKS = [
    {
        name: 'Essentials', price: '750 €',
        desc: "L'essentiel pour démarrer avec une identité visuelle propre et cohérente.",
        hl: false, badge: null,
        sections: [
            { title: 'Identité visuelle', items: ['Logo (toutes déclinaisons)', 'Éléments visuels de marque (base)', "Direction artistique et utilisation de l'identité (base)"] },
            { title: 'Guide de marque', items: ['Charte graphique (simplifiée)'] },
        ],
    },
    {
        name: 'Advanced', price: '1 500 €',
        desc: 'Une identité complète et opérationnelle — le choix de la majorité de nos clients.',
        hl: true, badge: 'Le plus choisi ⭐',
        sections: [
            { title: 'Identité visuelle', items: ['Logo (toutes déclinaisons)', 'Animation du logo', 'Mockups sur mesure', 'Éléments visuels de marque', "Direction artistique et utilisation de l'identité"] },
            { title: 'Guide de marque', items: ['Charte graphique complète'] },
        ],
    },
    {
        name: 'Performance', price: '2 750 €',
        desc: "L'offre la plus complète — de la stratégie de marque à l'identité audiovisuelle.",
        hl: false, badge: 'Le plus complet',
        sections: [
            { title: 'Identité de marque', items: ["Définition du nom de la marque", "Création de l'univers de la marque", 'Mockups sur mesure', 'Éléments visuels de marque', "Direction artistique et utilisation de l'identité"] },
            { title: 'Identité audiovisuelle', items: ['Logo (toutes déclinaisons)', 'Animation du logo et sound design', 'Mockups sur mesure', 'Éléments visuels de marque', "Direction artistique et utilisation de l'identité"] },
            { title: 'Guide de marque', items: ['Charte graphique', 'Charte éditoriale'] },
        ],
    },
]

const ROWS = [
    { service: 'Gestion des réseaux sociaux',       price: 'À partir de 850 € HTVA / mois', note: 'Engagement min. 3 mois', cta: true },
    { service: 'Branding — Pack Essentials',         price: '750 €',    note: 'Projet unique' },
    { service: 'Branding — Pack Advanced',           price: '1 500 €',  note: 'Le plus choisi', hl: true },
    { service: 'Branding — Pack Performance',        price: '2 750 €',  note: 'Le plus complet' },
    { service: 'Audit de communication',             price: '450 €',    note: 'Sans engagement' },
    { service: 'Création de contenu photo & vidéo',  price: 'Sur devis', note: 'Selon projet' },
    { service: 'Prestations graphiques',             price: 'Sur devis', note: 'Catalogue, brochure, affiche, roll-up…' },
]

export default function Pricing() {
    const ref = useReveal()
    const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section
            id="tarifs"
            ref={ref as React.RefObject<HTMLElement>}
            className="section-py"
            style={{ background: 'var(--color-epure)', position: 'relative', overflow: 'hidden' }}
        >
            {/* Séparateur top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(70,125,101,0.4), transparent)' }} aria-hidden="true" />

            <div className="container-auxo">

                {/* Header */}
                <div style={{ maxWidth: '560px', marginBottom: 'clamp(48px,6vw,80px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span className="label-tag reveal">Tarifs</span>
                    <h2 className="text-display-lg reveal reveal-d1"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ancre)', marginTop: '8px' }}>
                        Transparent.<br />
                        <span style={{ color: 'var(--color-vecteur)' }}>Sans mauvaise surprise.</span>
                    </h2>
                    <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(18,27,31,0.55)', lineHeight: 1.7 }}>
                        Tous nos tarifs sont en € HTVA. Pour les services sur devis, un premier échange suffit à cadrer votre projet.
                    </p>
                </div>

                {/* ── Packs branding ── */}
                <div style={{ marginBottom: 'clamp(48px,6vw,80px)' }}>
                    <SectionTitle>Packs Identité de Marque</SectionTitle>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px', alignItems: 'start' }}>
                        {PACKS.map((pack, i) => (
                            <div key={pack.name} className="reveal"
                                 style={{
                                     position: 'relative', borderRadius: '12px', padding: '32px 28px',
                                     display: 'flex', flexDirection: 'column', gap: '12px',
                                     background: pack.hl ? 'var(--color-sillage)' : 'white',
                                     border: `1px solid ${pack.hl ? 'transparent' : 'rgba(18,27,31,0.08)'}`,
                                     boxShadow: pack.hl ? '0 12px 40px rgba(70,125,101,0.25)' : '0 2px 12px rgba(18,27,31,0.06)',
                                     transform: pack.hl ? 'scale(1.025)' : 'none',
                                     transitionDelay: `${0.1 + i * 0.1}s`,
                                 }}>
                                {pack.badge && (
                                    <span style={{
                                        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                                        fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700,
                                        textTransform: 'uppercase', letterSpacing: '0.08em',
                                        background: pack.hl ? 'var(--color-trame)' : 'var(--color-vecteur)',
                                        color: 'var(--color-ancre)',
                                        padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap',
                                    }}>{pack.badge}</span>
                                )}

                                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: pack.hl ? 'var(--color-epure)' : 'var(--color-ancre)', fontSize: '1.05rem', letterSpacing: '0.04em' }}>
                                    {pack.name}
                                </h4>
                                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: pack.hl ? 'var(--color-trame)' : 'var(--color-vecteur)', fontSize: 'clamp(1.8rem,3vw,2.2rem)', lineHeight: 1.1 }}>
                                    {pack.price}
                                </p>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: pack.hl ? 'rgba(245,228,198,0.75)' : 'rgba(18,27,31,0.5)', lineHeight: 1.65 }}>
                                    {pack.desc}
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '16px', borderTop: `1px solid ${pack.hl ? 'rgba(247,247,247,0.12)' : 'rgba(18,27,31,0.08)'}`, flex: 1 }}>
                                    {pack.sections.map(section => (
                                        <div key={section.title}>
                                            <p style={{
                                                fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700,
                                                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px',
                                                color: pack.hl ? 'rgba(245,228,198,0.7)' : 'var(--color-vecteur)',
                                            }}>{section.title}</p>
                                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                {section.items.map(item => (
                                                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: pack.hl ? 'rgba(247,247,247,0.75)' : 'rgba(18,27,31,0.6)' }}>
                                                        <svg viewBox="0 0 14 14" fill="none" style={{ width: '13px', height: '13px', color: pack.hl ? 'var(--color-trame)' : 'var(--color-vecteur)', flexShrink: 0, marginTop: '2px' }}>
                                                            <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => scrollTo('#contact')}
                                    style={{
                                        marginTop: '8px', width: '100%', justifyContent: 'center',
                                        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem',
                                        padding: '12px', borderRadius: '4px', cursor: 'pointer',
                                        background: pack.hl ? 'var(--color-trame)' : 'transparent',
                                        color: pack.hl ? 'var(--color-ancre)' : 'var(--color-ancre)',
                                        border: pack.hl ? 'none' : '1.5px solid rgba(18,27,31,0.2)',
                                        transition: 'background 0.25s, border-color 0.25s',
                                    }}
                                >
                                    Choisir ce pack
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Tableau récapitulatif ── */}
                <div className="reveal" style={{ marginBottom: '24px' }}>
                    <SectionTitle>Récapitulatif</SectionTitle>
                    <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(18,27,31,0.1)', boxShadow: '0 2px 12px rgba(18,27,31,0.06)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
                            <thead>
                            <tr style={{ background: 'rgba(18,27,31,0.03)', borderBottom: '1px solid rgba(18,27,31,0.08)' }}>
                                {['Service', 'Tarif', 'Note', ''].map(h => (
                                    <th key={h} style={{ padding: '16px 20px', textAlign: 'left', fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(18,27,31,0.35)' }}>{h}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {ROWS.map(row => (
                                <tr key={row.service}
                                    style={{ borderBottom: '1px solid rgba(18,27,31,0.06)', background: 'hl' in row && row.hl ? 'rgba(70,125,101,0.05)' : 'white' }}>
                                    <td style={{ padding: '16px 20px', color: 'var(--color-ancre)', fontWeight: 500 }}>{row.service}</td>
                                    <td style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-vecteur)', whiteSpace: 'nowrap' }}>{row.price}</td>
                                    <td style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'rgba(18,27,31,0.35)' }}>{row.note}</td>
                                    <td style={{ padding: '16px 20px' }}>
                                        {'cta' in row && row.cta && (
                                            <button onClick={() => scrollTo('#contact')} style={{
                                                fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
                                                color: 'var(--color-sillage)', border: '1px solid rgba(70,125,101,0.4)',
                                                borderRadius: '4px', padding: '6px 14px', background: 'transparent', cursor: 'pointer',
                                                transition: 'background 0.25s, color 0.25s',
                                            }}
                                                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--color-sillage)'; el.style.color = 'white' }}
                                                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = 'var(--color-sillage)' }}
                                            >Démarrer</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ── Conditions ── */}
                <div className="reveal" style={{ background: 'var(--color-sillage)', borderRadius: '12px', padding: '28px 32px', marginBottom: '16px' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-epure)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: 'var(--color-trame)', flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
                        </svg>
                        Conditions — Gestion des réseaux sociaux
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px 32px', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(245,228,198,0.8)', marginBottom: '12px' }}>
                        {['Engagement minimum : <b>3 mois</b>', 'Remise <b>-5%</b> à 6 mois', 'Remise <b>-10%</b> à 12 mois', 'Résiliation : préavis <b>30 jours</b>'].map(c => (
                            <li key={c} dangerouslySetInnerHTML={{ __html: c.replace(/<b>/g, '<strong style="color:#f5e4c6;font-weight:600">').replace(/<\/b>/g, '</strong>') }} />
                        ))}
                    </ul>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {[
                            "La réponse aux commentaires et messages n'est pas incluse.",
                            "La création de supports visuels hors de ceux prévus pour Facebook et Instagram n'est pas incluse.",
                            "Le budget plateforme des campagnes sponsorisées est à la charge du client.",
                        ].map(note => (
                            <li key={note} style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(245,228,198,0.5)', display: 'flex', gap: '6px' }}>
                                <span style={{ flexShrink: 0 }}>*</span>{note}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CGU */}
                <div className="reveal" style={{ background: 'rgba(18,27,31,0.04)', border: '1px solid rgba(18,27,31,0.08)', borderRadius: '8px', padding: '16px 24px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(18,27,31,0.4)' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
                        </svg>
                        En faisant appel à nos services, vous acceptez nos{' '}
                        <a href="https://www.swisstransfer.com/d/9a804d90-fa97-4abf-909f-693ac893109f" target="_blank" rel="noopener noreferrer"
                           style={{ color: 'var(--color-vecteur)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                            Conditions Générales d'Utilisation (PDF)
                        </a>
                    </p>
                </div>

            </div>
        </section>
    )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600,
            color: 'rgba(18,27,31,0.5)', marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '14px',
        }}>
            {children}
            <span style={{ flex: 1, height: '1px', background: 'rgba(18,27,31,0.1)' }} />
        </h3>
    )
}