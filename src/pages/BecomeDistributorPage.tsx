import { AboutNoifySection } from "../components/distributor/AboutNoifySection"
import { DistributorHero } from "../components/distributor/DistributorHero"
import { FleetIntegrationSection } from "../components/distributor/FleetIntegrationSection"
import { ManufacturingSection } from "../components/distributor/ManufacturingSection"
import { PowerFeaturesSection } from "../components/distributor/PowerFeaturesSection"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function BecomeDistributorPage() {
  return (
    <div className="min-h-screen bg-noify-bg">
      <Header />
      <main>
        <DistributorHero />
        <ManufacturingSection />
        <AboutNoifySection />
        <PowerFeaturesSection />
        <FleetIntegrationSection />
      </main>
      <Footer />
    </div>
  )
}
