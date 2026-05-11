'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useReveal } from './UseReveal'

// ── DATA ──────────────────────────────────────────────────────────

type Pack = {
    name: string
    price: string
    intro?: string          // "Tout Essentials" ou "Tout Advanced"
    items: string[]
    featured?: boolean
}

type ContentBlock =
    | { type: 'pills'; items: string[] }
    | { type: 'packs'; items: Pack[] }
    | { type: 'categories'; items: Record<string, string[]> }

type Service = {
    id: string
    number: string
    title: string
    tagline: string
    desc: string
    pricePreview: string
    price: { from?: string; amount: string; period?: string }
    priceNote?: string
    content: ContentBlock
    timeline: { num: string; label: string; duration: string }[]
    visual: 'calendar' | 'packs' | 'mosaic' | 'report'
    cta: string
}

const SERVICES: Service[] = [
    {
        id: 'reseaux',
        number: '01',
        title: 'Gestion des réseaux sociaux',
        tagline: 'Une présence pensée. Pas improvisée.',
        desc: "On prend la main sur votre communication Facebook & Instagram — de la stratégie au reporting mensuel. Vous gardez la marque, on gère le quotidien.",
        pricePreview: '850 € / mois',
        price: { from: 'À partir de', amount: '850 €', period: '/ mois HTVA' },
        priceNote: 'Engagement 3 mois minimum · −5% à 6 mois · −10% à 12 mois · Préavis 30 jours',
        content: {
            type: 'pills',
            items: ['Stratégie éditoriale', 'Planning de contenu', '3-4 posts / semaine', "Stories d'engagement", '1 tournage mensuel', '1 campagne sponsorisée', 'Reporting mensuel'],
        },
        timeline: [
            { num: '01', label: 'Audit & stratégie', duration: 'Semaine 1' },
            { num: '02', label: 'Planning éditorial', duration: 'Semaine 2' },
            { num: '03', label: 'Production récurrente', duration: 'Chaque mois' },
            { num: '04', label: 'Reporting & ajustement', duration: 'Fin de mois' },
        ],
        visual: 'calendar',
        cta: 'Discuter du projet',
    },
    {
        id: 'branding',
        number: '02',
        title: 'Identité de marque',
        tagline: 'Une marque qui tient debout, longtemps.',
        desc: "Trois packs pour bâtir une identité visuelle qui résiste au temps — du logo seul jusqu'à l'écosystème complet (charte, animation, identité audiovisuelle).",
        pricePreview: 'à partir de 750 €',
        price: { from: 'À partir de', amount: '750 €', period: 'HTVA · paiement unique' },
        priceNote: 'Projet livré sous 4 à 6 semaines',
        content: {
            type: 'packs',
            items: [
                {
                    name: 'Essentials',
                    price: '750 €',
                    items: [
                        'Logo (toutes déclinaisons)',
                        'Charte graphique simplifiée',
                        'Éléments visuels de marque (base)',
                        'Direction artistique (base)',
                    ],
                },
                {
                    name: 'Advanced',
                    price: '1 500 €',
                    intro: 'Tout Essentials',
                    items: [
                        'Animation du logo',
                        'Mockups sur mesure',
                        'Guide de marque complet',
                        'Éléments visuels étendus',
                        'Direction artistique avancée',
                    ],
                    featured: true,
                },
                {
                    name: 'Performance',
                    price: '2 750 €',
                    intro: 'Tout Advanced',
                    items: [
                        'Définition du nom de marque',
                        "Création de l'univers de marque",
                        'Identité audiovisuelle (logo animé + sound design)',
                        'Charte éditoriale',
                    ],
                },
            ],
        },
        timeline: [
            { num: '01', label: 'Brief & exploration', duration: 'Semaine 1' },
            { num: '02', label: 'Création concept', duration: 'Semaine 2-3' },
            { num: '03', label: 'Itération & validation', duration: 'Semaine 4' },
            { num: '04', label: 'Charte & livraison', duration: 'Semaine 5-6' },
        ],
        visual: 'packs',
        cta: 'Choisir un pack',
    },
    {
        id: 'contenu',
        number: '03',
        title: 'Création de contenu Photo & Vidéo',
        tagline: 'Des visuels qui font le travail à votre place.',
        desc: "Photo et vidéo pensées comme des outils commerciaux — direction artistique, tournage, montage. On produit ce qui vous manque vraiment.",
        pricePreview: 'sur devis',
        price: { amount: 'Sur devis' },
        priceNote: 'Selon la nature et le volume du projet',
        content: {
            type: 'categories',
            items: {
                'Photo': ['Corporate', 'Packshots', 'Studio', 'Événements'],
                'Vidéo': ['Réseaux sociaux', 'Aftermovies', 'Teasers'],
            },
        },
        timeline: [
            { num: '01', label: 'Brief créatif', duration: '1-2 jours' },
            { num: '02', label: 'Direction artistique', duration: 'Semaine 1' },
            { num: '03', label: 'Tournage / Shooting', duration: 'Selon projet' },
            { num: '04', label: 'Post-prod & livraison', duration: 'Semaine 2-3' },
        ],
        visual: 'mosaic',
        cta: 'Demander un devis',
    },
    {
        id: 'audit',
        number: '04',
        title: 'Audit de communication',
        tagline: 'Un regard extérieur. Sans complaisance.',
        desc: "Un état des lieux honnête de votre communication — ce qui fonctionne, ce qui dérape, ce qu'il faut prioriser. Sans engagement de suite.",
        pricePreview: '450 €',
        price: { amount: '450 €', period: 'HTVA · paiement unique' },
        priceNote: 'Sans engagement · Livré sous 2 semaines',
        content: {
            type: 'pills',
            items: ['Analyse des réseaux sociaux', 'Audit identité visuelle', 'Diagnostic stratégie', 'Recommandations prioritaires', "Plan d'actions 90 jours"],
        },
        timeline: [
            { num: '01', label: "RDV d'analyse", duration: '2 à 4 heures' },
            { num: '02', label: 'Constats par mail', duration: 'Sous 48 h' },
            { num: '03', label: 'Rapport complet', duration: 'Sous 2 semaines' },
            { num: '04', label: "Plan d'actions", duration: 'Inclus' },
        ],
        visual: 'report',
        cta: 'Réserver un audit',
    },
]

// Calendrier mensuel pour le mockup réseaux
type Day = { post?: boolean; story?: boolean; campaign?: boolean }
const CAL_DAYS: Day[] = [
    { story: true }, { post: true }, { story: true }, {}, { post: true, story: true }, {}, {},
    {}, { post: true }, { story: true }, {}, { post: true }, { story: true }, {},
    { post: true, campaign: true }, { story: true, campaign: true }, { post: true, story: true, campaign: true }, { campaign: true }, { post: true, campaign: true }, { story: true, campaign: true }, { campaign: true },
    { post: true }, { story: true }, { post: true }, { story: true }, { post: true }, {}, {},
]

// ── COMPONENT ──────────────────────────────────────────────────────

export default function Services() {
    const ref = useReveal()
    const [openId, setOpenId] = useState<string | null>('reseaux')
    const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section
            id="services"
            ref={ref as React.RefObject<HTMLElement>}
            className="section-py"
            style={{ background: 'var(--color-epure)', position: 'relative', overflow: 'hidden' }}
        >
            {/* Halo orange décoratif */}
            <div style={{
                position: 'absolute', top: '20%', right: '-200px',
                width: '500px', height: '500px', borderRadius: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle, rgba(255,141,65,0.06) 0%, transparent 70%)',
            }} aria-hidden="true" />

            <style>{`
                /* ─── HEADER ─── */
                .svc-header {
                    max-width: 720px;
                    margin-bottom: clamp(56px, 7vw, 88px);
                    display: flex; flex-direction: column; gap: 14px;
                }

                /* ─── ACCORDION CONTAINER ─── */
                .acc {
                    display: flex; flex-direction: column; gap: 14px;
                }

                /* ─── ACCORDION ITEM ─── */
                .acc-item {
                    background: white;
                    border: 1px solid rgba(18,27,31,0.08);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
                }
                .acc-item:hover { border-color: rgba(18,27,31,0.16); }
                .acc-item--open {
                    border-color: rgba(255,141,65,0.35);
                    box-shadow: 0 24px 60px -20px rgba(18,27,31,0.18);
                }

                /* ─── HEADER (always visible) ─── */
                .acc-head {
                    width: 100%;
                    display: grid;
                    grid-template-columns: auto 1fr auto auto;
                    align-items: center;
                    gap: clamp(20px, 3vw, 36px);
                    padding: clamp(22px, 2.6vw, 32px) clamp(22px, 3vw, 40px);
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    font-family: inherit;
                    transition: background 0.25s ease;
                }
                .acc-head:hover { background: rgba(255,141,65,0.02); }
                .acc-item--open .acc-head { background: rgba(255,141,65,0.025); }

                .acc-num {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: clamp(1.1rem, 1.8vw, 1.4rem);
                    color: var(--color-vecteur); letter-spacing: -0.01em;
                    line-height: 1;
                }
                .acc-head-main { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
                .acc-title {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: clamp(1.05rem, 1.6vw, 1.3rem);
                    color: var(--color-ancre); line-height: 1.2;
                    margin: 0;
                }
                .acc-head-tagline {
                    font-family: var(--font-body); font-size: 0.85rem;
                    color: rgba(18,27,31,0.5); line-height: 1.4;
                }
                .acc-head-price {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: clamp(0.9rem, 1.3vw, 1.05rem);
                    color: var(--color-vecteur); white-space: nowrap;
                }
                .acc-toggle {
                    width: 36px; height: 36px;
                    border-radius: 50%;
                    background: rgba(18,27,31,0.04);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--color-ancre);
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .acc-item--open .acc-toggle {
                    background: var(--color-vecteur);
                    color: white;
                    transform: rotate(45deg);
                }
                .acc-toggle svg { transition: transform 0.3s ease; }

                @media (max-width: 768px) {
                    .acc-head {
                        grid-template-columns: auto 1fr auto;
                        grid-template-rows: auto auto;
                        row-gap: 12px;
                    }
                    .acc-num { grid-row: 1; grid-column: 1; }
                    .acc-head-main { grid-row: 1; grid-column: 2; }
                    .acc-toggle { grid-row: 1; grid-column: 3; }
                    .acc-head-price {
                        grid-row: 2; grid-column: 1 / -1;
                        font-size: 1rem;
                    }
                }

                /* ─── BODY (collapsible via grid-row trick) ─── */
                .acc-body {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.55s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .acc-item--open .acc-body { grid-template-rows: 1fr; }
                .acc-body-inner {
                    min-height: 0;
                    overflow: hidden;
                }
                .acc-body-pad {
                    padding: 0 clamp(22px, 3vw, 40px) clamp(28px, 4vw, 44px);
                    border-top: 1px solid rgba(18,27,31,0.05);
                }

                /* ─── BODY CONTENT GRID ─── */
                .acc-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: clamp(28px, 4vw, 48px);
                    align-items: start;
                    padding-top: clamp(28px, 3vw, 40px);
                }
                @media (min-width: 980px) {
                    .acc-grid { grid-template-columns: 1.05fr 1fr; }
                }
                /* Grid full-width pour le service Branding */
                .acc-grid--full { grid-template-columns: 1fr !important; }

                .acc-desc {
                    font-family: var(--font-body); font-size: 0.95rem;
                    line-height: 1.75; color: rgba(18,27,31,0.7);
                    margin: 0 0 24px 0;
                }

                /* ─── PILLS ─── */
                .acc-pills {
                    display: flex; flex-wrap: wrap; gap: 6px;
                    margin-bottom: 28px;
                }
                .acc-pill {
                    font-family: var(--font-body); font-size: 0.78rem;
                    padding: 7px 14px;
                    background: white;
                    border: 1px solid rgba(18,27,31,0.1);
                    border-radius: 100px;
                    color: var(--color-ancre);
                    transition: all 0.2s ease;
                }
                .acc-pill:hover {
                    border-color: var(--color-vecteur);
                    color: var(--color-vecteur);
                }

                /* ─── CATEGORIES ─── */
                .acc-cats { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
                .acc-cat-lbl {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.66rem; letter-spacing: 0.16em; text-transform: uppercase;
                    color: var(--color-vecteur); margin-right: 12px;
                }
                .acc-cat-items {
                    font-family: var(--font-body); font-size: 0.88rem;
                    color: rgba(18,27,31,0.7);
                }

                /* ─── PACKS (branding) — 3 colonnes égales ─── */
                .acc-packs {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                    margin: 8px 0 28px;
                }
                @media (max-width: 900px) {
                    .acc-packs { grid-template-columns: 1fr; gap: 14px; }
                }

                .acc-pack {
                    position: relative;
                    padding: 28px 22px 22px;
                    background: white;
                    border: 1px solid rgba(18,27,31,0.1);
                    border-radius: 12px;
                    display: flex; flex-direction: column; gap: 14px;
                    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94),
                                box-shadow 0.35s ease,
                                border-color 0.3s ease;
                }
                .acc-pack:hover {
                    border-color: rgba(255,141,65,0.35);
                    transform: translateY(-4px);
                    box-shadow: 0 18px 40px rgba(18,27,31,0.08);
                }
                .acc-pack--featured {
                    background: var(--color-ancre);
                    border-color: var(--color-vecteur);
                    box-shadow: 0 18px 44px rgba(18,27,31,0.18);
                }
                .acc-pack--featured:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 22px 52px rgba(18,27,31,0.22);
                }

                .acc-pack-badge {
                    position: absolute; top: -10px; left: 50%;
                    transform: translateX(-50%);
                    background: var(--color-vecteur); color: white;
                    font-family: var(--font-display);
                    font-size: 0.62rem; font-weight: 700;
                    letter-spacing: 0.14em; text-transform: uppercase;
                    padding: 5px 12px; border-radius: 3px;
                    white-space: nowrap;
                }

                .acc-pack-head {
                    display: flex; justify-content: space-between; align-items: baseline;
                    gap: 10px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid rgba(18,27,31,0.08);
                }
                .acc-pack--featured .acc-pack-head {
                    border-bottom-color: rgba(255,255,255,0.12);
                }
                .acc-pack-name {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.15rem; color: var(--color-ancre);
                    line-height: 1;
                }
                .acc-pack--featured .acc-pack-name { color: white; }
                .acc-pack-price {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.3rem; color: var(--color-vecteur);
                    line-height: 1; letter-spacing: -0.01em;
                    white-space: nowrap;
                }

                /* Encart d'héritage "Tout Essentials, plus :" */
                .acc-pack-intro {
                    display: flex; align-items: center; gap: 9px;
                    padding: 9px 12px;
                    background: rgba(255,141,65,0.08);
                    border: 1px solid rgba(255,141,65,0.22);
                    border-radius: 6px;
                    font-family: var(--font-body); font-size: 0.78rem;
                    color: var(--color-ancre);
                    line-height: 1.35;
                }
                .acc-pack--featured .acc-pack-intro {
                    background: rgba(255,141,65,0.15);
                    border-color: rgba(255,141,65,0.32);
                    color: white;
                }
                .acc-pack-intro svg {
                    width: 14px; height: 14px;
                    color: var(--color-vecteur); flex-shrink: 0;
                }
                .acc-pack-intro strong { font-weight: 700; }

                /* Liste à puces */
                .acc-pack-items {
                    list-style: none; padding: 0; margin: 0;
                    display: flex; flex-direction: column; gap: 9px;
                    flex: 1;
                }
                .acc-pack-items li {
                    display: flex; gap: 10px; align-items: flex-start;
                    font-family: var(--font-body); font-size: 0.83rem;
                    color: rgba(18,27,31,0.72); line-height: 1.5;
                }
                .acc-pack--featured .acc-pack-items li { color: rgba(255,255,255,0.78); }
                .acc-pack-items li::before {
                    content: ''; flex-shrink: 0;
                    width: 5px; height: 5px; border-radius: 50%;
                    background: var(--color-vecteur);
                    margin-top: 8px;
                }

                /* ─── PRICE & CTA ─── */
                .acc-price-row {
                    display: flex; align-items: center; gap: 20px;
                    flex-wrap: wrap;
                    padding-top: 18px;
                    border-top: 1px solid rgba(18,27,31,0.08);
                }
                .acc-price-detail {
                    display: flex; align-items: baseline; gap: 8px;
                    flex-wrap: wrap;
                }
                .acc-price-from {
                    font-family: var(--font-body); font-size: 0.82rem;
                    color: rgba(18,27,31,0.5);
                }
                .acc-price-amount {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: clamp(1.7rem, 2.8vw, 2.2rem);
                    color: var(--color-vecteur);
                    line-height: 1; letter-spacing: -0.02em;
                }
                .acc-price-period {
                    font-family: var(--font-body); font-size: 0.85rem;
                    color: rgba(18,27,31,0.55);
                }
                .acc-cta {
                    display: inline-flex; align-items: center; gap: 10px;
                    font-family: var(--font-display); font-weight: 600; font-size: 0.88rem;
                    background: var(--color-vecteur); color: var(--color-ancre);
                    border: none; border-radius: 6px;
                    padding: 13px 22px; cursor: pointer;
                    margin-left: auto;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .acc-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 28px rgba(255,141,65,0.3);
                }
                .acc-cta svg { transition: transform 0.2s ease; }
                .acc-cta:hover svg { transform: translateX(3px); }
                .acc-price-note {
                    font-family: var(--font-body); font-size: 0.72rem;
                    color: rgba(18,27,31,0.45);
                    margin: 12px 0 0 0; line-height: 1.5;
                }

                /* ─── VISUAL CONTAINER ─── */
                .acc-visual {
                    width: 100%;
                    aspect-ratio: 4 / 3.4;
                    background: var(--color-ancre);
                    border-radius: 14px;
                    padding: clamp(18px, 2vw, 28px);
                    overflow: hidden;
                    position: relative;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s;
                }
                .acc-item--open .acc-visual { opacity: 1; transform: translateY(0); }
                .acc-visual::before {
                    content: ''; position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 28px 28px;
                    mask-image: radial-gradient(ellipse at top right, black 0%, transparent 65%);
                    -webkit-mask-image: radial-gradient(ellipse at top right, black 0%, transparent 65%);
                    pointer-events: none;
                }
                .acc-visual::after {
                    content: ''; position: absolute; top: -100px; right: -100px;
                    width: 320px; height: 320px; border-radius: 50%;
                    background: radial-gradient(circle, rgba(255,141,65,0.18) 0%, transparent 70%);
                    pointer-events: none;
                }

                /* ─── CALENDRIER ─── */
                .cal {
                    position: relative; z-index: 1;
                    width: 100%; height: 100%;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 10px;
                    padding: clamp(16px, 1.8vw, 22px);
                    display: flex; flex-direction: column; gap: 14px;
                }
                .cal__head {
                    display: flex; justify-content: space-between; align-items: baseline;
                    flex-wrap: wrap; gap: 10px;
                }
                .cal__month {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.95rem; color: white;
                }
                .cal__stats { display: flex; gap: 12px; flex-wrap: wrap; }
                .cal__stat {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-family: var(--font-body); font-size: 0.68rem;
                    color: rgba(255,255,255,0.55);
                }
                .cal__dot { width: 7px; height: 7px; border-radius: 50%; }
                .cal__dot--post { background: var(--color-vecteur); }
                .cal__dot--story { background: rgba(255,255,255,0.5); }
                .cal__dot--camp { background: rgba(255,141,65,0.5); border: 1px solid var(--color-vecteur); }
                .cal__weekdays {
                    display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px;
                }
                .cal__wd {
                    font-family: var(--font-body); font-size: 0.6rem;
                    color: rgba(255,255,255,0.35); text-align: center;
                }
                .cal__grid {
                    display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px;
                    flex: 1;
                }
                .cal__day {
                    aspect-ratio: 1;
                    background: rgba(255,255,255,0.04);
                    border-radius: 5px;
                    position: relative;
                    display: flex; align-items: center; justify-content: center;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .cal__day:hover { background: rgba(255,141,65,0.18); transform: scale(1.1); }
                .cal__day--campaign {
                    background: rgba(255,141,65,0.1);
                    border: 1px solid rgba(255,141,65,0.25);
                }
                .cal__day-post {
                    width: 7px; height: 7px; border-radius: 50%;
                    background: var(--color-vecteur);
                }
                .cal__day-story {
                    position: absolute; top: 3px; right: 3px;
                    width: 3px; height: 3px; border-radius: 50%;
                    background: rgba(255,255,255,0.7);
                }

                /* ─── MOSAIQUE (visuel contenu) ─── */
                .mosaic {
                    position: relative; z-index: 1;
                    width: 100%; height: 100%;
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    grid-template-rows: 1.3fr 1fr 1fr;
                    gap: 6px;
                }
                .mos-tile {
                    border-radius: 8px;
                    position: relative; overflow: hidden;
                    transition: transform 0.3s ease;
                }
                .mos-tile:hover { transform: scale(1.02); }
                .mos-tile--1 { grid-column: 1; grid-row: 1 / span 2; background: linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%); }
                .mos-tile--2 { grid-column: 2; grid-row: 1; background: linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 100%); }
                .mos-tile--3 { grid-column: 2; grid-row: 2; background: linear-gradient(135deg, #ff8d41 0%, #c4674a 100%); }
                .mos-tile--4 { grid-column: 1; grid-row: 3; background: linear-gradient(135deg, #1a1a1a 0%, #000 100%); }
                .mos-tile--5 { grid-column: 2; grid-row: 3; background: linear-gradient(135deg, #4a4a4a 0%, #1a1a1a 100%); }
                .mos-play {
                    position: absolute; inset: 0;
                    display: flex; align-items: center; justify-content: center;
                }
                .mos-play-btn {
                    width: 32px; height: 32px; border-radius: 50%;
                    background: rgba(255,255,255,0.18);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.3);
                    display: flex; align-items: center; justify-content: center;
                    color: white;
                }
                .mos-tag {
                    position: absolute; bottom: 8px; left: 8px;
                    font-family: var(--font-display); font-size: 0.58rem;
                    font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
                    color: white;
                    background: rgba(0,0,0,0.4); backdrop-filter: blur(6px);
                    padding: 3px 7px; border-radius: 3px;
                }

                /* ─── RAPPORT (visuel audit) ─── */
                .report {
                    position: relative; z-index: 1;
                    width: 100%; height: 100%;
                    background: white;
                    border-radius: 10px;
                    padding: 20px;
                    display: flex; flex-direction: column; gap: 12px;
                    box-shadow: 0 14px 36px rgba(0,0,0,0.3);
                }
                .report::before {
                    content: '';
                    position: absolute; top: 10px; right: 10px;
                    width: 44px; height: 3px;
                    background: var(--color-vecteur);
                    border-radius: 2px;
                }
                .report__head { padding-bottom: 12px; border-bottom: 1px solid rgba(18,27,31,0.08); }
                .report__brand {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.6rem; letter-spacing: 0.16em; text-transform: uppercase;
                    color: var(--color-vecteur); margin-bottom: 4px;
                }
                .report__title {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.85rem; color: var(--color-ancre);
                }
                .report__score { display: flex; align-items: center; gap: 12px; }
                .report__ring {
                    width: 48px; height: 48px; border-radius: 50%;
                    background: conic-gradient(var(--color-vecteur) 0% 62%, rgba(18,27,31,0.08) 62% 100%);
                    display: flex; align-items: center; justify-content: center;
                    position: relative; flex-shrink: 0;
                }
                .report__ring::before {
                    content: ''; position: absolute; inset: 4px;
                    background: white; border-radius: 50%;
                }
                .report__ring span {
                    position: relative; z-index: 1;
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.78rem; color: var(--color-ancre);
                }
                .report__score-text {
                    font-family: var(--font-body); font-size: 0.7rem;
                    color: rgba(18,27,31,0.6); line-height: 1.4;
                    margin: 0;
                }
                .report__metrics {
                    display: flex; flex-direction: column; gap: 8px;
                    flex: 1;
                }
                .report__metric { display: flex; flex-direction: column; gap: 3px; }
                .report__metric-head {
                    display: flex; justify-content: space-between;
                    font-family: var(--font-body); font-size: 0.65rem;
                    color: rgba(18,27,31,0.6);
                }
                .report__metric-head strong { color: var(--color-ancre); font-weight: 700; }
                .report__bar {
                    height: 3px;
                    background: rgba(18,27,31,0.06);
                    border-radius: 2px; overflow: hidden;
                }
                .report__bar > div {
                    height: 100%;
                    background: var(--color-vecteur);
                    border-radius: 2px;
                }

                /* ─── METHODOLOGY TIMELINE ─── */
                .acc-method {
                    margin-top: clamp(32px, 4vw, 48px);
                    padding: clamp(28px, 3.5vw, 40px);
                    background: var(--color-ancre);
                    border-radius: 14px;
                    position: relative;
                    overflow: hidden;
                }
                .acc-method::before {
                    content: ''; position: absolute; inset: 0; pointer-events: none;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 32px 32px;
                    mask-image: radial-gradient(ellipse at bottom left, black 0%, transparent 70%);
                    -webkit-mask-image: radial-gradient(ellipse at bottom left, black 0%, transparent 70%);
                }
                .acc-method__head {
                    display: flex; align-items: center; gap: 12px;
                    margin-bottom: 28px;
                    position: relative; z-index: 1;
                }
                .acc-method__lbl {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
                    color: var(--color-vecteur);
                }
                .acc-method__title {
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 1.05rem; color: white;
                }
                .timeline {
                    position: relative; z-index: 1;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }
                @media (max-width: 768px) {
                    .timeline { grid-template-columns: 1fr 1fr; gap: 20px; }
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    top: 18px;
                    left: 11.5%; right: 11.5%;
                    height: 1px;
                    background: linear-gradient(to right, var(--color-vecteur) 0%, rgba(255,141,65,0.2) 100%);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
                }
                .acc-item--open .timeline::before { transform: scaleX(1); }
                @media (max-width: 768px) {
                    .timeline::before { display: none; }
                }
                .ts {
                    display: flex; flex-direction: column;
                    align-items: center; text-align: center; gap: 12px;
                    position: relative; z-index: 1;
                    opacity: 0;
                    transform: translateY(12px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .acc-item--open .ts { opacity: 1; transform: translateY(0); }
                .acc-item--open .ts:nth-child(1) { transition-delay: 0.35s; }
                .acc-item--open .ts:nth-child(2) { transition-delay: 0.5s; }
                .acc-item--open .ts:nth-child(3) { transition-delay: 0.65s; }
                .acc-item--open .ts:nth-child(4) { transition-delay: 0.8s; }
                .ts__circle {
                    width: 36px; height: 36px; border-radius: 50%;
                    background: var(--color-ancre);
                    border: 1.5px solid var(--color-vecteur);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-display); font-weight: 700;
                    font-size: 0.78rem; color: var(--color-vecteur);
                }
                .ts__label {
                    font-family: var(--font-display); font-weight: 600;
                    font-size: 0.88rem; color: white; line-height: 1.3;
                }
                .ts__duration {
                    font-family: var(--font-body); font-size: 0.72rem;
                    color: rgba(255,255,255,0.55);
                }

                /* ─── CGU FOOTER ─── */
                .svc-cgu {
                    margin-top: 32px;
                    display: flex; align-items: center; justify-content: center;
                    gap: 8px;
                    font-family: var(--font-body); font-size: 0.78rem;
                    color: rgba(18,27,31,0.5);
                    text-align: center;
                    flex-wrap: wrap;
                }
                .svc-cgu a {
                    color: var(--color-vecteur);
                    text-decoration: underline;
                    text-underline-offset: 3px;
                    font-weight: 500;
                }
            `}</style>

            <div className="container-auxo">
                {/* Header */}
                <div className="svc-header">
                    <span className="label-tag reveal">Nos services & tarifs</span>
                    <h2
                        className="text-display-lg reveal reveal-d1"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ancre)', marginTop: '8px' }}
                    >
                        Quatre expertises.<br />
                        <span style={{ color: 'var(--color-vecteur)' }}>Zéro flou.</span>
                    </h2>
                    <p
                        className="reveal reveal-d2"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(18,27,31,0.6)', lineHeight: 1.7, maxWidth: '560px' }}
                    >
                        Cliquez sur un service pour découvrir le détail, les tarifs et la méthodologie de travail.
                    </p>
                </div>

                {/* Accordion */}
                <div className="acc reveal">
                    {SERVICES.map(service => (
                        <AccordionItem
                            key={service.id}
                            service={service}
                            isOpen={openId === service.id}
                            onToggle={() => setOpenId(prev => prev === service.id ? null : service.id)}
                            onCta={scrollToContact}
                        />
                    ))}
                </div>

                {/* CGU */}
                <p className="svc-cgu reveal">
                    En faisant appel à nos services, vous acceptez nos{' '}
                    <Link href="/cgv">Conditions Générales de Vente</Link>.
                </p>
            </div>
        </section>
    )
}

// ── ACCORDION ITEM ─────────────────────────────────────────────

function AccordionItem({service, isOpen, onToggle, onCta }: { service: Service; isOpen: boolean; onToggle: () => void; onCta: () => void }) {
    const isPacks = service.content.type === 'packs'

    return (
        <div className={`acc-item${isOpen ? ' acc-item--open' : ''}`}>
            <button type="button" className="acc-head" onClick={onToggle} aria-expanded={isOpen} aria-controls={`acc-body-${service.id}`}>
                <span className="acc-num">{service.number}</span>
                <div className="acc-head-main">
                    <h3 className="acc-title">{service.title}</h3>
                    <p className="acc-head-tagline">{service.tagline}</p>
                </div>
                <span className="acc-head-price">{service.pricePreview}</span>
                <span className="acc-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>
            </button>

            <div className="acc-body" id={`acc-body-${service.id}`}>
                <div className="acc-body-inner">
                    <div className="acc-body-pad">
                        <div className={`acc-grid${isPacks ? ' acc-grid--full' : ''}`}>
                            {/* Content side */}
                            <div>
                                <p className="acc-desc">{service.desc}</p>

                                {service.content.type === 'pills' && (
                                    <div className="acc-pills">
                                        {service.content.items.map(p => <span key={p} className="acc-pill">{p}</span>)}
                                    </div>
                                )}

                                {service.content.type === 'categories' && (
                                    <div className="acc-cats">
                                        {Object.entries(service.content.items).map(([cat, items]) => (
                                            <div key={cat}>
                                                <span className="acc-cat-lbl">{cat}</span>
                                                <span className="acc-cat-items">{items.join(' · ')}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {service.content.type === 'packs' && (
                                    <div className="acc-packs">
                                        {service.content.items.map(pack => (
                                            <div key={pack.name} className={`acc-pack${pack.featured ? ' acc-pack--featured' : ''}`}>
                                                {pack.featured && <span className="acc-pack-badge">Le plus choisi</span>}
                                                <div className="acc-pack-head">
                                                    <span className="acc-pack-name">{pack.name}</span>
                                                    <span className="acc-pack-price">{pack.price}</span>
                                                </div>
                                                {pack.intro && (
                                                    <div className="acc-pack-intro">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                                            <line x1="12" y1="5" x2="12" y2="19" />
                                                            <line x1="5" y1="12" x2="19" y2="12" />
                                                        </svg>
                                                        <span><strong>{pack.intro}</strong>, plus :</span>
                                                    </div>
                                                )}
                                                <ul className="acc-pack-items">
                                                    {pack.items.map(it => <li key={it}>{it}</li>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Price + CTA */}
                                <div className="acc-price-row">
                                    <div className="acc-price-detail">
                                        {service.price.from && <span className="acc-price-from">{service.price.from}</span>}
                                        <span className="acc-price-amount">{service.price.amount}</span>
                                        {service.price.period && <span className="acc-price-period">{service.price.period}</span>}
                                    </div>
                                    <button type="button" className="acc-cta" onClick={onCta}>
                                        {service.cta}
                                        <Arrow />
                                    </button>
                                </div>
                                {service.priceNote && <p className="acc-price-note">{service.priceNote}</p>}
                            </div>

                            {/* Visual side — pas affiché pour Branding (les 3 packs prennent toute la largeur) */}
                            {!isPacks && (
                                <div className="acc-visual">
                                    {service.visual === 'calendar' && <CalendarMockup />}
                                    {service.visual === 'mosaic' && <MosaicMockup />}
                                    {service.visual === 'report' && <ReportMockup />}
                                </div>
                            )}
                        </div>

                        {/* Methodology */}
                        <div className="acc-method">
                            <div className="acc-method__head">
                                <span className="acc-method__lbl">Méthodologie</span>
                                <span className="acc-method__title">Notre processus de travail</span>
                            </div>
                            <div className="timeline">
                                {service.timeline.map(step => (
                                    <div key={step.num} className="ts">
                                        <div className="ts__circle">{step.num}</div>
                                        <div className="ts__label">{step.label}</div>
                                        <div className="ts__duration">{step.duration}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── MOCKUPS ────────────────────────────────────────────────────

function CalendarMockup() {
    return (
        <div className="cal">
            <div className="cal__head">
                <span className="cal__month">Janvier 2026</span>
                <div className="cal__stats">
                    <span className="cal__stat"><span className="cal__dot cal__dot--post" />13 posts</span>
                    <span className="cal__stat"><span className="cal__dot cal__dot--story" />20 stories</span>
                    <span className="cal__stat"><span className="cal__dot cal__dot--camp" />1 campagne</span>
                </div>
            </div>
            <div className="cal__weekdays">
                {['L','M','M','J','V','S','D'].map((d, i) => <span key={i} className="cal__wd">{d}</span>)}
            </div>
            <div className="cal__grid">
                {CAL_DAYS.map((day, i) => (
                    <div key={i} className={`cal__day${day.campaign ? ' cal__day--campaign' : ''}`}>
                        {day.post && <span className="cal__day-post" />}
                        {day.story && <span className="cal__day-story" />}
                    </div>
                ))}
            </div>
        </div>
    )
}

function MosaicMockup() {
    return (
        <div className="mosaic">
            <div className="mos-tile mos-tile--1"><span className="mos-tag">Corporate</span></div>
            <div className="mos-tile mos-tile--2">
                <div className="mos-play"><span className="mos-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 11, height: 11, marginLeft: 2 }}><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </span></div>
                <span className="mos-tag">Aftermovie</span>
            </div>
            <div className="mos-tile mos-tile--3"><span className="mos-tag">Studio</span></div>
            <div className="mos-tile mos-tile--4">
                <div className="mos-play"><span className="mos-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 11, height: 11, marginLeft: 2 }}><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </span></div>
                <span className="mos-tag">Teaser</span>
            </div>
            <div className="mos-tile mos-tile--5"><span className="mos-tag">Packshot</span></div>
        </div>
    )
}

function ReportMockup() {
    const metrics = [
        { lbl: 'Identité visuelle', val: 45 },
        { lbl: 'Réseaux sociaux', val: 70 },
        { lbl: 'Site web', val: 38 },
    ]
    return (
        <div className="report">
            <div className="report__head">
                <p className="report__brand">Audit AUXO</p>
                <p className="report__title">Communication — Échantillon</p>
            </div>
            <div className="report__score">
                <div className="report__ring"><span>62%</span></div>
                <p className="report__score-text"><strong>Score global</strong><br />Base éditoriale solide, identité à renforcer.</p>
            </div>
            <div className="report__metrics">
                {metrics.map(m => (
                    <div key={m.lbl} className="report__metric">
                        <div className="report__metric-head">
                            <span>{m.lbl}</span>
                            <span><strong>{m.val}</strong>/100</span>
                        </div>
                        <div className="report__bar"><div style={{ width: `${m.val}%` }} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Arrow() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    )
}