import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { WidgetShowcase } from "@/components/widget-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WidgetShowcase />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
