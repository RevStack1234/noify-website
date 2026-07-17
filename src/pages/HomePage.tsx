import { ContactSection } from "../components/ContactSection"
import { DashboardSection } from "../components/DashboardSection"
import { FAQSection } from "../components/FAQSection"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ProductCards } from "../components/ProductCards"
import { ProductDetail } from "../components/ProductDetail"
import { Seo } from "../components/Seo"

export function HomePage() {
  return (
    <div className="min-h-screen bg-noify-bg">
      <Seo
        title="Noify Energy — Premium Lithium Battery & Energy Storage Solutions"
        description="Noify Energy delivers premium lithium-ion battery and smart energy storage solutions for homes, businesses and commercial fleets. Reliable, safe and long-lasting power."
        keywords="noify energy, noify, lithium battery, energy storage, power solution, battery manufacturer, solar battery, commercial energy storage"
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <ProductDetail />
        <ProductCards />
        <DashboardSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
