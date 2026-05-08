import type { Config } from 'tailwindcss'

// ⚠️  Tailwind v4 : les couleurs, fonts et animations sont définis
// dans app/globals.css via @theme — pas ici.
// Ce fichier sert uniquement à déclarer les chemins de contenu.
const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
}

export default config