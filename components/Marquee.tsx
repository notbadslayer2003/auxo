const ITEMS = [
    'Stratégie de marque', 'Réseaux sociaux', 'Identité visuelle',
    'Création de contenu', 'Audit de communication', 'Branding',
    'Photo & Vidéo', 'Croissance',
]

export default function Marquee() {
    const doubled = [...ITEMS, ...ITEMS]

    return (
        <div
            style={{ background: 'var(--color-vecteur)', overflow: 'hidden', padding: '14px 0', borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}
            aria-hidden="true"
        >
            <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}>
                {doubled.map((item, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-ancre)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', padding: '0 32px' }}>
            {item}
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" opacity={0.4}>
              <circle cx="3" cy="3" r="3"/>
            </svg>
          </span>
                ))}
            </div>
        </div>
    )
}