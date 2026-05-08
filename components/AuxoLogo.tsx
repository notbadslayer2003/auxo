import Image from 'next/image'

type AuxoLogoVariant = 'white' | 'orange'

interface AuxoLogoProps {
    variant?: AuxoLogoVariant
    height?: number
    className?: string
}

export default function AuxoLogo({
                                     variant = 'white',
                                     height = 36,
                                     className = '',
                                 }: AuxoLogoProps) {
    const src = variant === 'orange' ? '/logoOrange.png' : '/logoWhite.png'

    return (
        <Image
            src={src}
            alt="AUXO Agency"
            height={height}
            width={0}
            sizes="200px"
            style={{ width: 'auto', height: height }}
            className={className}
            priority
        />
    )
}