import Hero from "../components/Hero"
import BenefitsSection from "../components/BenefitsSection"
import TechnologyStack from "../components/TechnologyStack"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Partners from "@/components/Partners"
import ProcessCards from "@/components/ProcessCards"
import RealWorldApplication from "@/components/RealWorldApplication"
import EasySteps from "@/components/EasySteps"
import NewsSection from "@/components/NewsSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Partners />
      <ProcessCards />
      <BenefitsSection />
      <RealWorldApplication />
      <EasySteps />
      <NewsSection />
      <TechnologyStack />
      <CTA />
      <Footer />
    </main>
  )
}

