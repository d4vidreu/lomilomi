import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Treatments } from '@/components/site/treatments'
import { Process } from '@/components/site/process'
import { Therapist } from '@/components/site/therapist'
import { Testimonials } from '@/components/site/testimonials'
import { GiftCards } from '@/components/site/gift-cards'
import { Faq } from '@/components/site/faq'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { MobileCtaBar } from '@/components/site/mobile-cta-bar'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Process />
        <Therapist />
        <Testimonials />
        <GiftCards />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
