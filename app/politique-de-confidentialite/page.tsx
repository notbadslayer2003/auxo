import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Politique de confidentialité — AUXO Agency',
}

export default function PolitiqueConfidentialite() {
    return (
        <main className="min-h-screen bg-ancre pt-32 pb-24">
            <div className="container-auxo max-w-3xl">
                <Link href="/" className="label-tag inline-flex items-center gap-2 mb-8 hover:text-epure/60 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Retour
                </Link>

                <h1 className="font-display font-bold text-epure text-display-lg mb-10">
                    Politique de confidentialité
                </h1>

                <div className="font-body text-epure/60 leading-relaxed space-y-8">
                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Responsable du traitement</h2>
                        <p>AUXO Agency — <a href="mailto:hello@auxoagency.be" className="text-vecteur hover:underline">hello@auxoagency.be</a></p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Données collectées</h2>
                        <p>Lors de l'utilisation du formulaire de contact, nous collectons : nom, prénom, adresse email, numéro de téléphone (optionnel) et le contenu de votre message.</p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Finalité du traitement</h2>
                        <p>Vos données sont utilisées exclusivement pour répondre à vos demandes et ne sont jamais transmises à des tiers sans votre consentement explicite.</p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Durée de conservation</h2>
                        <p>Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum 3 ans à des fins de prospection commerciale.</p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Vos droits (RGPD)</h2>
                        <p>Conformément au RGPD et à la loi belge du 30 juillet 2018, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits : <a href="mailto:hello@auxoagency.be" className="text-vecteur hover:underline">hello@auxoagency.be</a></p>
                    </section>
                </div>
            </div>
        </main>
    )
}