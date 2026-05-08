'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('auxo_cookie_consent')) setVisible(true)
    }, [])

    const accept  = () => { localStorage.setItem('auxo_cookie_consent', 'accepted');  setVisible(false) }
    const decline = () => { localStorage.setItem('auxo_cookie_consent', 'declined'); setVisible(false) }

    if (!visible) return null

    return (
        <div role="dialog" aria-label="Consentement aux cookies" style={{
            position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
            zIndex: 1000, width: 'min(560px, calc(100vw - 32px))',
            background: '#0e1a1f', border: '1px solid rgba(247,247,247,0.1)',
            borderRadius: '12px', boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '20px 24px',
        }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                    width: '40px', height: '40px', flexShrink: 0, marginTop: '2px',
                    background: 'rgba(255,141,65,0.1)', border: '1px solid rgba(255,141,65,0.2)',
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-vecteur)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                        <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01"/>
                    </svg>
                </div>

                <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-epure)', fontSize: '0.92rem', marginBottom: '6px' }}>
                        Nous utilisons des cookies
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(247,247,247,0.45)', lineHeight: 1.6 }}>
                        Pour améliorer votre expérience. Consultez notre{' '}
                        <Link href="/politique-cookies" style={{ color: 'rgba(255,141,65,0.7)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                            politique de cookies
                        </Link>.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '14px', flexWrap: 'wrap' }}>
                        <button onClick={accept} className="btn-primary" style={{ fontSize: '0.82rem', padding: '9px 20px' }}>
                            Accepter
                        </button>
                        <button onClick={decline} style={{
                            fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600,
                            color: 'rgba(247,247,247,0.4)', background: 'none', border: 'none',
                            cursor: 'pointer', padding: '9px 12px', transition: 'color 0.2s',
                        }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(247,247,247,0.7)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,247,247,0.4)')}>
                            Refuser
                        </button>
                    </div>
                </div>

                <button onClick={decline} aria-label="Fermer" style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'rgba(247,247,247,0.25)', padding: '4px', flexShrink: 0,
                    transition: 'color 0.2s',
                }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(247,247,247,0.6)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,247,247,0.25)')}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M12 4 4 12M4 4l8 8"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}