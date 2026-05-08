import type { Metadata, Viewport } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'AUXO Agency — Stratégie & Branding pour une croissance durable',
  description:
      'Agence de communication créative basée en Belgique. Gestion des réseaux sociaux, identité de marque, création de contenu, audit de communication.',
  keywords: [
    'agence communication', 'branding', 'réseaux sociaux',
    'Belgique', 'Mons', 'identité de marque', 'AUXO',
  ],
  authors: [{ name: 'AUXO Agency', url: 'https://www.auxoagency.be' }],
  metadataBase: new URL('https://www.auxoagency.be'),
  openGraph: {
    title: 'AUXO Agency — Stratégie & Branding',
    description: 'Agence de communication créative basée en Belgique.',
    url: 'https://www.auxoagency.be',
    siteName: 'AUXO Agency',
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUXO Agency',
    description: 'Stratégie & Branding pour une croissance durable.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#121b1f',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
            rel="stylesheet"
        />
      </head>
      <body className="bg-ancre text-epure overflow-x-hidden">
      <SmoothScroll>
        {children}
      </SmoothScroll>
      <CookieBanner />
      </body>
      </html>
  )
}