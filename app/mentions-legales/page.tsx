import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mentions légales — AUXO Agency',
    description: 'Mentions légales de AUXO Agency.',
}

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-ancre pt-32 pb-24">
            <div className="container-auxo max-w-3xl">
                <Link href="/" className="label-tag inline-flex items-center gap-2 mb-8 hover:text-epure/60 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Retour
                </Link>

                <h1 className="font-display font-bold text-epure text-display-lg mb-10">
                    Mentions légales
                </h1>

                <div className="prose prose-sm font-body text-epure/60 leading-relaxed space-y-8">
                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Éditeur du site</h2>
                        <p>AUXO Agency<br />
                            Belgique<br />
                            Email : <a href="mailto:hello@auxoagency.be" className="text-vecteur hover:underline">hello@auxoagency.be</a><br />
                            Tél : <a href="tel:+32474407737" className="text-vecteur hover:underline">+32 474 40 77 37</a><br />
                            Site : <a href="https://www.auxoagency.be" className="text-vecteur hover:underline">www.auxoagency.be</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Hébergement</h2>
                        <p>Le site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.</p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Propriété intellectuelle</h2>
                        <p>L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos) est la propriété exclusive d'AUXO Agency, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.</p>
                    </section>

                    <section>
                        <h2 className="font-display font-semibold text-epure text-lg mb-3">Responsabilité</h2>
                        <p>AUXO Agency met tout en œuvre pour assurer l'exactitude des informations publiées, mais ne peut garantir leur exhaustivité ou leur actualité. L'utilisation des informations se fait sous la responsabilité exclusive de l'utilisateur.</p>
                    </section>
                </div>
            </div>
        </main>
    )
}