import { AboutNoifySection } from "../components/distributor/AboutNoifySection"
import { DistributorHero } from "../components/distributor/DistributorHero"
import { FleetIntegrationSection } from "../components/distributor/FleetIntegrationSection"
import { ManufacturingSection } from "../components/distributor/ManufacturingSection"
import { PowerFeaturesSection } from "../components/distributor/PowerFeaturesSection"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Seo } from "../components/Seo"

export function BecomeDistributorPage() {
  return (
    <div className="min-h-screen bg-noify-bg">
      <Seo
        title="Become a Noify Energy Distributor — Partner With a Leading Battery Brand"
        description="Partner with Noify Energy as a distributor or fleet integration partner. Get access to premium lithium battery products, manufacturing strength and growth-focused commercial support."
        keywords="noify energy distributor, battery dealership, become distributor, fleet integration partner, noify partnership"
        path="/become-a-distributor"
      />
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
