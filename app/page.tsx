import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { HowItWorks } from "@/components/landing/how-it-works text"
import { Differentiators } from "@/components/landing/differentiators"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { Waitlist } from "@/components/Waitlist"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Differentiators />
        <CTA />
        
        {/* Envolvemos la Waitlist con el ID idéntico al que buscan tus botones */}
        <div id="waitlist-section" className="scroll-mt-24">
          <Waitlist />
        </div>
      </main>
      <Footer />
    </>
  )
}
