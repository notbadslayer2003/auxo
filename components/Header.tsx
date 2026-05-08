'use client'

import { useState, useEffect } from 'react'
import AuxoLogo from './AuxoLogo'

const NAV_LINKS = [
    { label: 'Accueil',  href: '#accueil'  },
    { label: 'À propos', href: '#apropos'  },
    { label: 'Équipe',   href: '#equipe'   },
    { label: 'Services', href: '#services' },
    { label: 'Tarifs',   href: '#tarifs'   },
    { label: 'Contact',  href: '#contact'  },
]

export default function Header() {
    const [scrolled,  setScrolled]  = useState(false)
    const [menuOpen,  setMenuOpen]  = useState(false)
    const [active,    setActive]    = useState('accueil')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const go = (e: React.MouseEvent, href: string) => {
        e.preventDefault()
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        setActive(href.replace('#', ''))
    }

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
            padding: scrolled ? '14px 0' : '24px 0',
            background: scrolled ? 'rgba(18,27,31,0.93)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,141,65,0.1)' : '1px solid transparent',
            transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
        }}>
            <style>{`
        .hdr-nav { display: none; align-items: center; gap: 2px; }
        @media(min-width: 768px) { .hdr-nav { display: flex; } .hdr-burger { display: none !important; } }
      `}</style>

            <div className="container-auxo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                <a href="#accueil" onClick={e => go(e, '#accueil')} style={{ textDecoration: 'none' }} aria-label="AUXO — accueil">
                    <AuxoLogo height={32} />
                </a>

                {/* Desktop */}
                <nav className="hdr-nav" aria-label="Navigation principale">
                    {NAV_LINKS.map(l => (
                        <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
                           className={`nav-link${active === l.href.replace('#', '') ? ' active' : ''}`}>
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={e => go(e, '#contact')} className="btn-primary"
                       style={{ marginLeft: '12px', fontSize: '0.83rem', padding: '10px 20px' }}>
                        Nous contacter
                    </a>
                </nav>

                {/* Burger */}
                <button className="hdr-burger" onClick={() => setMenuOpen(!menuOpen)}
                        style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '6px', background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label={menuOpen ? 'Fermer' : 'Menu'} aria-expanded={menuOpen}>
                    {[0, 1, 2].map(i => (
                        <span key={i} style={{
                            display: 'block', width: '24px', height: '2px',
                            background: 'var(--color-epure)', borderRadius: '2px',
                            transition: 'transform 0.3s ease, opacity 0.3s ease', transformOrigin: 'center',
                            transform: menuOpen ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)' : 'none',
                            opacity: menuOpen && i === 1 ? 0 : 1,
                        }} />
                    ))}
                </button>
            </div>

            {/* Mobile menu */}
            <div style={{
                display: 'flex', flexDirection: 'column', gap: '4px',
                padding: menuOpen ? '16px 24px 28px' : '0 24px',
                maxHeight: menuOpen ? '500px' : '0', overflow: 'hidden',
                background: 'rgba(18,27,31,0.97)', backdropFilter: 'blur(20px)',
                borderBottom: menuOpen ? '1px solid rgba(255,141,65,0.12)' : 'none',
                transition: 'max-height 0.4s ease, padding 0.3s ease',
            }}>
                {NAV_LINKS.map(l => (
                    <a key={l.href} href={l.href} onClick={e => go(e, l.href)} style={{
                        fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500,
                        color: 'rgba(247,247,247,0.65)', padding: '12px 8px',
                        borderBottom: '1px solid rgba(247,247,247,0.05)', textDecoration: 'none',
                    }}>{l.label}</a>
                ))}
                <a href="#contact" onClick={e => go(e, '#contact')} className="btn-primary"
                   style={{ marginTop: '12px', justifyContent: 'center' }}>
                    Nous contacter
                </a>
            </div>
        </header>
    )
}