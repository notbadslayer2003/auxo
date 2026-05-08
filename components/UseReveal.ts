'use client'

import { useEffect, useRef } from 'react'

export function useReveal() {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting)
                    e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
            }),
            { threshold: 0.08 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return ref
}