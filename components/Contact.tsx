'use client'

import { useState } from 'react'
import { useReveal } from './UseReveal'

const SERVICES_OPTIONS = [
    'Gestion des réseaux sociaux',
    'Identité de marque — Pack Essentials',
    'Identité de marque — Pack Advanced',
    'Identité de marque — Pack Performance',
    'Audit de communication',
    'Création de contenu photo & vidéo',
    'Prestation graphique',
    'Autre / Je ne sais pas encore',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
    const ref = useReveal()
    const [status, setStatus] = useState<Status>('idle')
    const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', service: '', message: '' })
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validate = () => {
        const e: Record<string, string> = {}
        if (!form.nom.trim())    e.nom     = 'Requis'
        if (!form.prenom.trim()) e.prenom  = 'Requis'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
        if (!form.message.trim()) e.message = 'Décrivez votre projet'
        return e
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm(p => ({ ...p, [name]: value }))
        if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setStatus('loading')
        try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
            setStatus(res.ok ? 'success' : 'error')
        } catch { setStatus('error') }
    }

    return (
        <section
            id="contact"
            ref={ref as React.RefObject<HTMLElement>}
            className="section-py"
            style={{ background: 'var(--color-ancre)', position: 'relative', overflow: 'hidden' }}
        >
            {/* Papier millimétré */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: "url('/gridwhite.svg')",
                backgroundRepeat: 'repeat', backgroundSize: 'auto',
                opacity: 0.1,
            }} aria-hidden="true" />
            {/* Glow */}
            <div style={{
                position: 'absolute', bottom: '-300px', right: '-200px',
                width: '700px', height: '700px', borderRadius: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle, rgba(18,27,31,0.15) 0%, transparent 65%)',
            }} aria-hidden="true" />

            <div className="container-auxo" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(48px,6vw,96px)', alignItems: 'start' }}>

                    {/* ── Info ── */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,228,198,0.75)', display: 'block' }} className="reveal">
              Contact
            </span>
                        <h2 className="text-display-lg reveal reveal-d1"
                            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-epure)' }}>
                            Parlons de<br />
                            <span style={{ color: 'var(--color-trame)' }}>votre projet.</span>
                        </h2>
                        <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.975rem', color: 'rgba(245,228,198,0.7)', lineHeight: 1.75 }}>
                            Que vous ayez une idée précise ou que vous cherchiez encore la bonne direction, on prend le temps d'écouter.
                        </p>

                        {/* Coordonnées */}
                        <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                            {[
                                { href: 'mailto:hello@auxoagency.be', label: 'Email', value: 'hello@auxoagency.be' },
                                { href: 'tel:+32474407737', label: 'Téléphone', value: '+32 474 40 77 37' },
                                { href: 'https://www.auxoagency.be', label: 'Site web', value: 'www.auxoagency.be', ext: true },
                            ].map(item => (
                                <a key={item.href} href={item.href}
                                   target={item.ext ? '_blank' : undefined}
                                   rel={item.ext ? 'noopener noreferrer' : undefined}
                                   style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                                    <div style={{
                                        width: '40px', height: '40px', flexShrink: 0,
                                        background: 'rgba(247,247,247,0.1)', border: '1px solid rgba(247,247,247,0.15)',
                                        borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--color-trame)',
                                    }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                            {item.label === 'Email' && <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>}
                                            {item.label === 'Téléphone' && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/>}
                                            {item.label === 'Site web' && <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
                                        </svg>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(245,228,198,0.45)' }}>{item.label}</span>
                                        <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(247,247,247,0.8)' }}>{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Socials — CSS class, zero JS */}
                        <div className="reveal reveal-d4" style={{ display: 'flex', gap: '10px', marginTop: '8px', paddingTop: '20px', borderTop: '1px solid rgba(247,247,247,0.12)' }}>
                            <a href="https://www.facebook.com/auxoagency" target="_blank" rel="noopener noreferrer"
                               aria-label="AUXO sur Facebook" className="social-btn-green">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/auxoagency" target="_blank" rel="noopener noreferrer"
                               aria-label="AUXO sur Instagram" className="social-btn-green">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* ── Formulaire ── */}
                    <div className="reveal reveal-d2" style={{
                        background: 'rgba(18,27,31,0.25)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(247,247,247,0.12)',
                        borderRadius: '14px',
                        padding: 'clamp(28px,4vw,44px)',
                    }}>
                        {status === 'success' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '48px 24px', textAlign: 'center' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--color-trame)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M5 14l6.5 6.5L23 7" stroke="var(--color-trame)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-epure)', fontSize: '1.6rem' }}>Message envoyé !</h3>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(245,228,198,0.65)', lineHeight: 1.7, maxWidth: '300px' }}>
                                    Merci pour votre message. Nous revenons vers vous dans les plus brefs délais.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <FormField label="Nom" required error={errors.nom}>
                                        <input name="nom" type="text" autoComplete="family-name" aria-required="true"
                                               className={`input-green${errors.nom ? ' error' : ''}`}
                                               value={form.nom} onChange={handleChange} />
                                    </FormField>
                                    <FormField label="Prénom" required error={errors.prenom}>
                                        <input name="prenom" type="text" autoComplete="given-name" aria-required="true"
                                               className={`input-green${errors.prenom ? ' error' : ''}`}
                                               value={form.prenom} onChange={handleChange} />
                                    </FormField>
                                </div>

                                <FormField label="Email" required error={errors.email}>
                                    <input name="email" type="email" autoComplete="email" aria-required="true"
                                           className={`input-green${errors.email ? ' error' : ''}`}
                                           value={form.email} onChange={handleChange} />
                                </FormField>

                                <FormField label="Téléphone" optional>
                                    <input name="telephone" type="tel" autoComplete="tel"
                                           className="input-green" value={form.telephone} onChange={handleChange} />
                                </FormField>

                                <FormField label="Service qui vous intéresse">
                                    <select name="service" className="input-green"
                                            style={{ appearance: 'none', cursor: 'pointer',
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='rgba(245,228,198,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: '40px',
                                            }}
                                            value={form.service} onChange={handleChange}>
                                        <option value="">— Sélectionner un service —</option>
                                        {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </FormField>

                                <FormField label="Message" required error={errors.message}>
                  <textarea name="message" rows={5} aria-required="true"
                            placeholder="Décrivez votre projet, vos objectifs ou vos questions…"
                            className={`input-green${errors.message ? ' error' : ''}`}
                            style={{ resize: 'vertical', minHeight: '110px', lineHeight: 1.65 }}
                            value={form.message} onChange={handleChange} />
                                </FormField>

                                {status === 'error' && (
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#fca5a5', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '6px', padding: '12px 16px' }}>
                                        Une erreur s'est produite. Réessayez ou contactez-nous par email.
                                    </p>
                                )}

                                <button type="submit" disabled={status === 'loading'} style={{
                                    width: '100%', justifyContent: 'center', padding: '16px', marginTop: '4px',
                                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem',
                                    background: 'var(--color-vecteur)', color: 'var(--color-ancre)',
                                    border: 'none', borderRadius: '4px', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    opacity: status === 'loading' ? 0.6 : 1,
                                    transition: 'opacity 0.2s',
                                }}>
                                    {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
                                    {status !== 'loading' && (
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>
                                        </svg>
                                    )}
                                </button>

                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(245,228,198,0.35)', textAlign: 'center', lineHeight: 1.5 }}>
                                    Vos données sont utilisées uniquement pour répondre à votre demande.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

function FormField({ label, required, optional, error, children }: {
    label: string; required?: boolean; optional?: boolean; error?: string; children: React.ReactNode
}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <label style={{ fontFamily: 'var(--font-display)', fontSize: '0.76rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(245,228,198,0.55)' }}>
                {label}
                {required && <span style={{ color: 'var(--color-trame)', marginLeft: '4px' }}>*</span>}
                {optional && <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 'normal', fontSize: '0.7rem', color: 'rgba(245,228,198,0.3)', marginLeft: '6px' }}>(optionnel)</span>}
            </label>
            {children}
            {error && <span role="alert" style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#fca5a5' }}>{error}</span>}
        </div>
    )
}