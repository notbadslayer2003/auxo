import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Conditions Générales de Vente — Auxo Agency',
    description: 'Conditions générales régissant les prestations de services d\'Auxo Agency.',
}

const SECTIONS = [
    { id: 'presentation',    num: '01', title: "Présentation de l'agence" },
    { id: 'objet',           num: '02', title: 'Objet' },
    { id: 'commandes',       num: '03', title: 'Commandes et acceptation' },
    { id: 'delais',          num: '04', title: 'Délais de réalisation' },
    { id: 'tarifs',          num: '05', title: 'Tarifs et conditions de paiement' },
    { id: 'modifications',   num: '06', title: 'Modifications et révisions' },
    { id: 'obligations',     num: '07', title: 'Obligations et responsabilité' },
    { id: 'propriete',       num: '08', title: 'Propriété intellectuelle' },
    { id: 'confidentialite', num: '09', title: 'Confidentialité' },
    { id: 'droit',           num: '10', title: 'Droit applicable et juridiction' },
    { id: 'rgpd',            num: '11', title: 'Données personnelles (RGPD)' },
    { id: 'resiliation',     num: '12', title: 'Résiliation anticipée' },
    { id: 'engagements',     num: '13', title: 'Engagements à durée déterminée' },
    { id: 'remises',         num: '14', title: 'Remises conditionnelles' },
]

export default function CgvPage() {
    return (
        <main style={{ background: 'var(--color-epure)', minHeight: '100vh' }}>
            <style>{`
                .cgv-page { padding: clamp(80px, 10vw, 120px) 0 clamp(60px, 8vw, 100px); }

                .cgv-hero { max-width: 720px; margin-bottom: clamp(48px, 6vw, 72px); }

                .cgv-info {
                    background: white;
                    border: 1px solid rgba(18,27,31,0.08);
                    border-radius: 14px;
                    padding: clamp(28px, 3.5vw, 40px);
                    margin-bottom: clamp(56px, 7vw, 80px);
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 24px;
                    align-items: start;
                }
                .cgv-info__icon {
                    width: 48px; height: 48px;
                    border-radius: 50%;
                    background: rgba(255,141,65,0.1);
                    border: 1px solid rgba(255,141,65,0.25);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--color-vecteur);
                    flex-shrink: 0;
                }
                .cgv-info__name {
                    font-family: var(--font-display);
                    font-weight: 700;
                    font-size: 1.05rem;
                    color: var(--color-ancre);
                    margin-bottom: 14px;
                }
                .cgv-info__list {
                    list-style: none; padding: 0; margin: 0;
                    display: flex; flex-direction: column; gap: 8px;
                }
                .cgv-info__list li {
                    display: grid;
                    grid-template-columns: 150px 1fr;
                    gap: 16px;
                    font-family: var(--font-body);
                    font-size: 0.88rem;
                    color: rgba(18,27,31,0.75);
                }
                .cgv-info__list li strong { color: var(--color-ancre); font-weight: 600; }
                .cgv-info__list a { color: var(--color-vecteur); text-decoration: none; }
                .cgv-info__list a:hover { text-decoration: underline; text-underline-offset: 3px; }
                @media (max-width: 600px) {
                    .cgv-info__list li { grid-template-columns: 1fr; gap: 2px; }
                }

                .cgv-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: clamp(32px, 4vw, 56px);
                }
                @media (min-width: 980px) {
                    .cgv-layout { grid-template-columns: 240px 1fr; }
                }

                .cgv-toc {
                    position: sticky;
                    top: 100px;
                    height: max-content;
                }
                .cgv-toc__lbl {
                    font-family: var(--font-display);
                    font-weight: 600;
                    font-size: 0.7rem;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: var(--color-vecteur);
                    margin-bottom: 16px;
                    display: block;
                }
                .cgv-toc__list {
                    list-style: none; padding: 0; margin: 0;
                    display: flex; flex-direction: column; gap: 2px;
                }
                .cgv-toc__list a {
                    display: flex; gap: 12px; align-items: baseline;
                    padding: 8px 0;
                    font-family: var(--font-body);
                    font-size: 0.82rem;
                    color: rgba(18,27,31,0.6);
                    text-decoration: none;
                    transition: color 0.2s ease;
                    line-height: 1.4;
                }
                .cgv-toc__list a:hover { color: var(--color-vecteur); }
                .cgv-toc__list a strong {
                    font-family: var(--font-display);
                    font-weight: 700;
                    color: var(--color-vecteur);
                    font-size: 0.78rem;
                    flex-shrink: 0;
                    width: 22px;
                }
                @media (max-width: 980px) {
                    .cgv-toc { display: none; }
                }

                .cgv-section {
                    padding-bottom: clamp(40px, 5vw, 56px);
                    margin-bottom: clamp(40px, 5vw, 56px);
                    border-bottom: 1px solid rgba(18,27,31,0.06);
                    scroll-margin-top: 100px;
                }
                .cgv-section:last-of-type {
                    border-bottom: none;
                    margin-bottom: 0;
                }
                .cgv-section__head {
                    display: flex; align-items: baseline; gap: 16px;
                    margin-bottom: 20px;
                }
                .cgv-section__num {
                    font-family: var(--font-display);
                    font-weight: 700;
                    font-size: clamp(1.4rem, 2vw, 1.8rem);
                    color: var(--color-vecteur);
                    line-height: 1;
                    letter-spacing: -0.02em;
                }
                .cgv-section__title {
                    font-family: var(--font-display);
                    font-weight: 700;
                    font-size: clamp(1.2rem, 1.8vw, 1.5rem);
                    color: var(--color-ancre);
                    line-height: 1.25;
                    margin: 0;
                }
                .cgv-section__body {
                    font-family: var(--font-body);
                    font-size: 0.95rem;
                    line-height: 1.8;
                    color: rgba(18,27,31,0.75);
                }
                .cgv-section__body p { margin: 0 0 16px 0; }
                .cgv-section__body p:last-child { margin-bottom: 0; }
                .cgv-section__body strong { color: var(--color-ancre); font-weight: 600; }
                .cgv-section__body em { font-style: italic; color: rgba(18,27,31,0.6); }

                .cgv-highlight {
                    background: rgba(255,141,65,0.06);
                    border-left: 3px solid var(--color-vecteur);
                    padding: 18px 22px;
                    border-radius: 0 8px 8px 0;
                    margin: 20px 0;
                }

                .cgv-footer {
                    margin-top: clamp(60px, 8vw, 96px);
                    padding-top: clamp(36px, 4.5vw, 52px);
                    border-top: 1px solid rgba(18,27,31,0.08);
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                }
                .cgv-back {
                    display: inline-flex; align-items: center; gap: 10px;
                    font-family: var(--font-display);
                    font-weight: 600; font-size: 0.9rem;
                    color: var(--color-ancre);
                    text-decoration: none;
                    transition: gap 0.2s ease;
                }
                .cgv-back:hover { gap: 14px; }
                .cgv-back svg { transition: transform 0.2s ease; }
                .cgv-back:hover svg { transform: translateX(-3px); }
                .cgv-updated {
                    font-family: var(--font-body);
                    font-size: 0.78rem;
                    color: rgba(18,27,31,0.45);
                }
            `}</style>

            <div className="cgv-page">
                <div className="container-auxo">
                    {/* Hero */}
                    <div className="cgv-hero">
                        <span className="label-tag">Mentions légales · 2026</span>
                        <h1 style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            color: 'var(--color-ancre)',
                            lineHeight: 1.1,
                            margin: '16px 0',
                            letterSpacing: '-0.02em',
                        }}>
                            Conditions <span style={{ color: 'var(--color-vecteur)' }}>Générales de Vente.</span>
                        </h1>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1rem',
                            color: 'rgba(18,27,31,0.6)',
                            lineHeight: 1.7,
                            maxWidth: '580px',
                        }}>
                            Les présentes conditions régissent les prestations de services proposées par Auxo Agency. La signature d'un devis vaut acceptation pleine et entière de ces conditions.
                        </p>
                    </div>

                    {/* Agency info */}
                    <div className="cgv-info">
                        <div className="cgv-info__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                        </div>
                        <div>
                            <p className="cgv-info__name">Auxo Agency</p>
                            <ul className="cgv-info__list">
                                <li><strong>Siège social</strong><span>Rue Reine Astrid 15, 7110 Strépy-Bracquegnies</span></li>
                                <li><strong>Siège d'exploitation</strong><span>Grand'Route 20, 7000 Mons</span></li>
                                <li><strong>TVA</strong><span>BE 0800 239 508</span></li>
                                <li><strong>Email</strong><a href="mailto:hello@auxoagency.be">hello@auxoagency.be</a></li>
                                <li><strong>Web</strong><a href="https://www.auxoagency.be">www.auxoagency.be</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* TOC + Content */}
                    <div className="cgv-layout">
                        <aside className="cgv-toc" aria-label="Sommaire">
                            <span className="cgv-toc__lbl">Sommaire</span>
                            <ul className="cgv-toc__list">
                                {SECTIONS.map(s => (
                                    <li key={s.id}>
                                        <a href={`#${s.id}`}>
                                            <strong>{s.num}</strong>
                                            <span>{s.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        <article>
                            <section id="presentation" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">01</span>
                                    <h2 className="cgv-section__title">Présentation de l'agence</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Les coordonnées et informations légales d'Auxo Agency sont reprises dans l'encart situé en haut de cette page.</p>
                                </div>
                            </section>

                            <section id="objet" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">02</span>
                                    <h2 className="cgv-section__title">Objet</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Les présentes conditions générales de vente (CGV) régissent les prestations de services proposées par Auxo Agency dans les domaines du <strong>marketing digital</strong>, de la <strong>communication visuelle</strong> et de la <strong>création de supports publicitaires on/offline</strong>, auprès d'une clientèle professionnelle.</p>
                                </div>
                            </section>

                            <section id="commandes" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">03</span>
                                    <h2 className="cgv-section__title">Commandes et acceptation</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Toute prestation fait l'objet d'un devis préalable. <strong>La signature du devis vaut acceptation pleine et entière des présentes CGV.</strong> Le démarrage des travaux est conditionné à la réception du devis signé et, le cas échéant, au paiement de l'acompte mentionné sur la facture.</p>
                                </div>
                            </section>

                            <section id="delais" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">04</span>
                                    <h2 className="cgv-section__title">Délais de réalisation</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Les délais de livraison ou d'exécution sont donnés à titre indicatif et dépendent de la nature du projet. Auxo Agency s'engage à informer le client de toute modification significative du planning.</p>
                                </div>
                            </section>

                            <section id="tarifs" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">05</span>
                                    <h2 className="cgv-section__title">Tarifs et conditions de paiement</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Sauf mention contraire, <strong>les factures sont payables à 30 jours date de facturation</strong>. En cas de retard de paiement, des intérêts de retard seront appliqués de plein droit, sans mise en demeure préalable, au taux fixé par la loi du 2 août 2002 concernant la lutte contre le retard de paiement dans les transactions commerciales.</p>
                                    <p>En outre, une <strong>indemnité forfaitaire de 40 €</strong> sera due pour frais de recouvrement, conformément à la directive européenne transposée en droit belge.</p>
                                    <p>En cas de non-paiement récurrent ou de solvabilité douteuse, Auxo Agency se réserve le droit d'exiger un paiement anticipé ou de suspendre la prestation jusqu'au règlement intégral des sommes dues.</p>
                                    <p>Un acompte peut être exigé avant le début de certaines prestations.</p>
                                </div>
                            </section>

                            <section id="modifications" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">06</span>
                                    <h2 className="cgv-section__title">Modifications et révisions</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p><strong>Deux séries de modifications sont incluses dans chaque prestation.</strong> Au-delà, les ajustements seront facturés sur base d'un taux horaire de <strong>80 € / heure HTVA</strong>.</p>
                                </div>
                            </section>

                            <section id="obligations" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">07</span>
                                    <h2 className="cgv-section__title">Obligations et responsabilité</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Auxo Agency est soumise à une <strong>obligation de moyens</strong> : elle met tout en œuvre pour fournir des services professionnels et adaptés aux objectifs du client. Toutefois, elle ne peut être tenue responsable des résultats obtenus, ceux-ci dépendant de nombreux facteurs externes et indépendants de sa volonté.</p>
                                    <p>Le client s'engage à fournir en temps utile les informations et validations nécessaires à la bonne exécution de la mission.</p>
                                </div>
                            </section>

                            <section id="propriete" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">08</span>
                                    <h2 className="cgv-section__title">Propriété intellectuelle</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Sauf mention contraire, les créations réalisées par Auxo Agency restent la propriété de l'agence <strong>jusqu'au paiement complet de la prestation</strong>. Une fois le solde réglé, les droits d'exploitation sont cédés au client selon les conditions définies dans le devis.</p>
                                    <p>Les droits d'auteur, y compris les droits moraux (droit à la paternité, au respect de l'œuvre, etc.), restent la propriété d'Auxo Agency, sauf accord écrit préalable.</p>
                                    <p>Toute reproduction, modification ou réutilisation des créations sans autorisation explicite est interdite.</p>
                                    <div className="cgv-highlight">
                                        <p style={{ margin: 0 }}>Les <strong>fichiers sources</strong> des créations (fichiers de travail natifs : <em>.psd, .ai, .indd</em>, fichiers de montage vidéo, etc.) ne sont pas remis au client, sauf mention expresse dans le devis. Seuls les livrables finalisés sont transmis dans des formats standards d'exploitation (PDF, JPEG, MP4, etc.).</p>
                                    </div>
                                </div>
                            </section>

                            <section id="confidentialite" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">09</span>
                                    <h2 className="cgv-section__title">Confidentialité</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Auxo Agency s'engage à ne pas divulguer les informations confidentielles échangées dans le cadre de ses prestations.</p>
                                </div>
                            </section>

                            <section id="droit" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">10</span>
                                    <h2 className="cgv-section__title">Droit applicable et juridiction compétente</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Les présentes conditions sont soumises au <strong>droit belge</strong>. En cas de litige, seuls les <strong>tribunaux de l'arrondissement judiciaire de Mons</strong> sont compétents.</p>
                                    <p>En cas de non-paiement dans un délai de 30 jours après relance écrite, Auxo Agency se réserve le droit de suspendre ou de résilier la prestation, et d'engager une procédure judiciaire sans mise en demeure supplémentaire. Tous les frais de recouvrement engagés (avocat, huissier, etc.) seront à la charge du client.</p>
                                </div>
                            </section>

                            <section id="rgpd" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">11</span>
                                    <h2 className="cgv-section__title">Données personnelles (RGPD)</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Auxo Agency s'engage à respecter la réglementation applicable en matière de protection des données personnelles. Les données collectées sont utilisées uniquement dans le cadre des missions confiées. Le client dispose d'un <strong>droit d'accès, de rectification ou de suppression</strong> sur simple demande.</p>
                                </div>
                            </section>

                            <section id="resiliation" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">12</span>
                                    <h2 className="cgv-section__title">Résiliation anticipée et clause résolutoire</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>En cas de manquement grave par l'une des parties à ses obligations contractuelles (notamment en cas de non-paiement ou d'absence de collaboration du client), l'autre partie pourra résilier de plein droit le contrat, <strong>15 jours après l'envoi d'une mise en demeure restée sans effet</strong>.</p>
                                    <p>Auxo Agency conservera le droit de réclamer le paiement des prestations déjà réalisées, ainsi que des dommages et intérêts pour le préjudice subi.</p>
                                </div>
                            </section>

                            <section id="engagements" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">13</span>
                                    <h2 className="cgv-section__title">Engagements contractuels à durée déterminée</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Certaines prestations peuvent faire l'objet d'un engagement annuel, mentionné explicitement sur le devis par la mention <em>"contrat annuel"</em> ou équivalent. La signature du devis vaut acceptation pleine et entière de cet engagement pour une <strong>durée d'un (1) an</strong> à compter de la date de démarrage du service.</p>
                                    <p>En cas de souhait de résiliation anticipée, le client s'engage à respecter un <strong>préavis de trois (3) mois</strong> notifié par écrit. Ce préavis sera obligatoirement presté ou facturé, à titre d'indemnité compensatoire.</p>
                                    <p>À défaut de notification à l'échéance, le contrat pourra être tacitement reconduit pour une nouvelle période équivalente.</p>
                                </div>
                            </section>

                            <section id="remises" className="cgv-section">
                                <div className="cgv-section__head">
                                    <span className="cgv-section__num">14</span>
                                    <h2 className="cgv-section__title">Remises conditionnelles et engagements promotionnels</h2>
                                </div>
                                <div className="cgv-section__body">
                                    <p>Certains avantages (tels qu'une vidéo offerte, un shooting photo incluant 5 photos retouchées, ou tout autre avantage mentionné sur le devis) peuvent être accordés dans le cadre de contrats d'engagement à durée déterminée (par exemple : contrat pour la réalisation de 10 vidéos sur un an).</p>
                                    <p>Ces remises ou avantages sont <strong>conditionnés à la réalisation complète du contrat</strong> selon les modalités et délais définis dans le devis.</p>
                                    <p>En cas de rupture anticipée du contrat ou de non-réalisation partielle (nombre de vidéos inférieur à celui convenu, retard non justifié par le client, etc.), Auxo Agency se réserve le droit de facturer une régularisation correspondant à la valeur des remises initialement accordées. Cette régularisation est exigible immédiatement.</p>
                                    <div className="cgv-highlight">
                                        <p style={{ margin: 0 }}>Le client est réputé avoir pris connaissance et accepté ces conditions par la simple mention figurant sur le devis (ex. : <em>"Contrat pour 10 vidéos – voir conditions des remises dans les CGV"</em>).</p>
                                    </div>
                                </div>
                            </section>

                            {/* Footer */}
                            <div className="cgv-footer">
                                <Link href="/" className="cgv-back">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                                        <line x1="19" y1="12" x2="5" y2="12" />
                                        <polyline points="12 19 5 12 12 5" />
                                    </svg>
                                    Retour à l'accueil
                                </Link>
                                <span className="cgv-updated">Dernière mise à jour : Février 2026</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}