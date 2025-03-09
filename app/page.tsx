import Hero from "../components/Hero"
import Problem from "../components/Problem"
import Solution from "../components/Solution"
import HowItWorks from "../components/HowItWorks"
import UseCase from "../components/UseCase"
import Benefits from "../components/Benefits"
import TechStack from "../components/TechStack"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Partners from "@/components/Partners"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Partners />
      <Problem />
      <Solution />
      <HowItWorks />
      <UseCase />
      <Benefits />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  )
}

