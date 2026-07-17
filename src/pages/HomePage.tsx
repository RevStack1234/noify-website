import { ContactSection } from "../components/ContactSection"
import { DashboardSection } from "../components/DashboardSection"
import { FAQSection } from "../components/FAQSection"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ProductCards } from "../components/ProductCards"
import { ProductDetail } from "../components/ProductDetail"

export function HomePage() {
  return (
    <div className="min-h-screen bg-noify-bg">
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
