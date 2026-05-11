import Header   from '@/components/Header'
import Hero     from '@/components/Hero'
import Marquee  from '@/components/Marquee'
import About    from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Contact  from '@/components/Contact'
import Footer   from '@/components/Footer'

export default function HomePage() {
    return (
        <>
            <Header />
            <main id="main-content">
                <Hero />
                <Marquee />
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </>
    )
}