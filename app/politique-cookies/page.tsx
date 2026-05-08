import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Politique de cookies — AUXO Agency',
}

export default function PolitiqueCookies() {
    return (
        <main className="min-h-screen bg-ancre pt-32 pb-24">
            <div className="container-auxo max-w-3xl">
                <Link href="/" className="label-tag inline-flex items-center gap-2 mb-8 hover:text-epure/60 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Retour
                </Link>

                <h1 className="font-display font-bold text-epure text-display-lg mb-10">
                    Politique de cookies
                </h1>

                <div className="font-body text-epure/60 leading-relaxed space-y-8">
                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Qu'est-ce qu'un cookie ?</h2>
                        <p>Un cookie est un petit fichier texte déposé sur votre terminal lors de votre visite. Il permet de mémoriser vos préférences et d'améliorer votre expérience de navigation.</p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Cookies utilisés</h2>
                        <div className="space-y-4">
                            <div className="bg-epure/3 border border-epure/8 rounded-lg p-5">
                                <h3 className="font-display font-semibold text-epure/80 mb-1">Cookies essentiels</h3>
                                <p className="text-sm">Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.</p>
                            </div>
                            <div className="bg-epure/3 border border-epure/8 rounded-lg p-5">
                                <h3 className="font-display font-semibold text-epure/80 mb-1">Cookies analytiques</h3>
                                <p className="text-sm">Nous permettent de mesurer l'audience et d'améliorer nos pages. Soumis à votre consentement.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Gérer vos préférences</h2>
                        <p>Vous pouvez modifier vos choix à tout moment en effaçant les cookies de votre navigateur ou en nous contactant à <a href="mailto:hello@auxoagency.be" className="text-vecteur hover:underline">hello@auxoagency.be</a>.</p>
                    </section>
                </div>
            </div>
        </main>
    )
}