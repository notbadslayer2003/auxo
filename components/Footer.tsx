'use client'

import AuxoLogo from './AuxoLogo'

const NAV_LINKS = [
    ['Accueil', '#accueil'],
    ['À propos', '#apropos'],
    ['Équipe', '#equipe'],
    ['Services', '#services'],
    ['Contact', '#contact'],
]

const SERVICES = [
    {label: 'Réseaux sociaux', href: '#services'},
    {label: 'Identité de marque', href: '#services'},
    {label: 'Création de contenu', href: '#services'},
    {label: 'Audit de communication', href: '#services'},
    {label: 'Prestations graphiques', href: '#tarifs'},
]

const LEGAL_LINKS = [
    {label: 'Mentions légales', href: '/mentions-legales'},
    {label: 'Confidentialité', href: '/politique-de-confidentialite'},
    {label: 'Cookies', href: '/politique-cookies'},
    {label: 'CGU', href: '/cgv'},
]

const CONTACT_LINKS = [
    {href: 'mailto:hello@auxoagency.be', text: 'hello@auxoagency.be'},
    {href: 'tel:+32474407737', text: '+32 474 40 77 37'},
    {href: 'https://www.auxoagency.be', text: 'www.auxoagency.be', ext: true},
]

export default function Footer() {
    const year = new Date().getFullYear()
    const scrollTo = (href: string) =>
        document.querySelector(href)?.scrollIntoView({behavior: 'smooth'})

    return (
        <footer style={{background: '#f0ede8', borderTop: '1px solid rgba(18,27,31,0.1)'}}>

            {/* ── Top ── */}
            <div style={{paddingTop: '64px', paddingBottom: '64px'}}>
                <div className="container-auxo">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: '40px 48px'
                    }}>

                        {/* Brand */}
                        <div style={{minWidth: '180px'}}>
                            {/* Logo orange sur fond clair */}
                            <AuxoLogo height={30} variant="orange"/>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.82rem',
                                color: 'rgba(18,27,31,0.55)',
                                lineHeight: 1.65,
                                maxWidth: '200px',
                                marginTop: '16px',
                                marginBottom: '20px'
                            }}>
                                Stratégie &amp; branding<br/>pour une croissance durable.
                            </p>
                            <div style={{display: 'flex', gap: '8px'}}>
                                {[
                                    {
                                        href: 'https://www.facebook.com/auxoagency', label: 'Facebook',
                                        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                        </svg>
                                    },
                                    {
                                        href: 'https://www.instagram.com/auxoagency', label: 'Instagram',
                                        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                                   stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                                                   strokeLinejoin="round">
                                            <rect x="2" y="2" width="20" height="20" rx="5"/>
                                            <circle cx="12" cy="12" r="4"/>
                                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                                        </svg>
                                    },
                                ].map(s => (
                                    <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                                       aria-label={`AUXO sur ${s.label}`} className="footer-social">
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <ColTitle>Navigation</ColTitle>
                            {NAV_LINKS.map(([label, href]) => (
                                <a key={href} href={href}
                                   onClick={e => {
                                       e.preventDefault();
                                       scrollTo(href)
                                   }}
                                   className="footer-link">
                                    {label}
                                </a>
                            ))}
                        </div>

                        {/* Services */}
                        <div>
                            <ColTitle>Services</ColTitle>
                            {SERVICES.map(s => (
                                <a key={s.label} href={s.href}
                                   onClick={e => {
                                       e.preventDefault();
                                       scrollTo(s.href)
                                   }}
                                   className="footer-link">
                                    {s.label}
                                </a>
                            ))}
                        </div>

                        {/* Contact */}
                        <div>
                            <ColTitle>Contact</ColTitle>
                            {CONTACT_LINKS.map(item => (
                                <a key={item.href} href={item.href}
                                   target={item.ext ? '_blank' : undefined}
                                   rel={item.ext ? 'noopener noreferrer' : undefined}
                                   className="footer-link">
                                    {item.text}
                                </a>
                            ))}
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.82rem',
                                color: 'rgba(18,27,31,0.4)',
                                marginTop: '4px'
                            }}>
                                Mons, Belgique
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── Bottom ── */}
            <div style={{borderTop: '1px solid rgba(18,27,31,0.1)', padding: '18px 0'}}>
                <div className="container-auxo" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                }}>
                    <p style={{fontFamily: 'var(--font-body)', fontSize: '0.73rem', color: 'rgba(18,27,31,0.4)'}}>
                        © {year} AUXO Agency — Tous droits réservés.
                    </p>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap'}}>
                        {LEGAL_LINKS.map((l, i) => (
                            <span key={l.href} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                {i > 0 && <span style={{color: 'rgba(18,27,31,0.2)'}}>·</span>}
                                {/* TODO: Reimplémenter ça */}
                                {/*<a href={l.href}*/}
                                {/*   target={l.ext ? '_blank' : undefined}*/}
                                {/*   rel={l.ext ? 'noopener noreferrer' : undefined}*/}
                                {/*   className="footer-legal">*/}
                                {/*  {l.label}*/}
                                {/*</a>*/}
                                <a href={l.href}
                                   target={'_blank'}
                                   rel={'noopener noreferrer'}
                                   className="footer-legal">
                                  {l.label}
                                </a>
                          </span>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    )
}

function ColTitle({children}: { children: React.ReactNode }) {
    return (
        <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: 'var(--color-ancre)', marginBottom: '20px',
        }}>
            {children}
        </h3>
    )
}