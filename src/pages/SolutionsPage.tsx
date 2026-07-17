import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal"
import { SolutionsHero } from "../components/solutions/SolutionsHero"
import { masterCatalogPdf } from "../config/navigation"
import { motion } from "motion/react"
import { Seo } from "../components/Seo"

type Product = {
  model: string
  specs: string
  description: string
  image: string
}

const series512: Product[] = [
  {
    model: "NIE51100",
    specs: "51.2V · 100AH",
    description:
      "Optimized for E-Rickshaw applications with reliable performance, long cycle life, and efficient daily operation.",
    image: "/images/product-51150-5e0cd8.webp",
  },
  {
    model: "NIE51150",
    specs: "51.2V · 150AH",
    description:
      "Built for E-Rickshaw and EV mobility, delivering extended runtime and dependable power output.",
    image: "/images/product-51150-5e0cd8.webp",
  },
  {
    model: "NIE51200",
    specs: "51.2V · 200AH",
    description:
      "High-capacity battery for E-Rickshaws with solar backup support, offering maximum runtime and reliable performance.",
    image: "/images/product-51200-v2-66d8ee.webp",
  },
]

const series64: Product[] = [
  {
    model: "NIE64100",
    specs: "64V · 100AH",
    description:
      "Engineered for high-performance E-Rickshaw applications with efficient energy delivery and long service life.",
    image: "/images/product-64100-39de47.webp",
  },
  {
    model: "NIE64150",
    specs: "64V · 150AH",
    description:
      "Designed for demanding E-Rickshaw operations, providing higher efficiency, durability, and consistent output..",
    image: "/images/product-64100-39de47.webp",
  },
  {
    model: "NIE64200",
    specs: "64V · 200AH",
    description:
      "Heavy-duty lithium battery for E-Rickshaws with solar backup compatibility and dependable high-capacity performance.",
    image: "/images/product-64200-78d470.webp",
  },
]

function SolutionProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      className="solution-product-card flex w-full max-w-[401px] flex-col gap-5 rounded-[25px] border border-[rgba(107,107,107,0.43)] bg-[#1C1C1C] px-[17px] py-[18px]"
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      <div className="solution-image-bg flex h-[288px] items-center justify-center overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.model}
          className="h-[260px] w-auto max-w-[358px] object-contain"
        />
      </div>
      <div className="flex w-full max-w-[262px] flex-col gap-2">
        <div className="flex flex-col gap-px">
          <p className="font-jakarta text-sm tracking-[0.015em] text-white">{product.model}</p>
          <p className="font-jakarta text-xl font-semibold tracking-[0.005em] text-[#7CC552]">
            {product.specs}
          </p>
        </div>
        <p className="font-inter text-xs font-medium leading-[1.31] text-[#9E9E9E]">
          {product.description}
        </p>
      </div>
    </motion.div>
  )
}

function ProductSeries({ title, products }: { title: string; products: Product[] }) {
  return (
    <Reveal className="flex flex-col gap-6">
      <h3 className="font-jakarta text-[32px] font-semibold tracking-[-0.005em] text-white">
        {title}
      </h3>
      <div className="h-px w-full max-w-[1226px] bg-white/15" />
      <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <StaggerItem key={product.model}>
            <SolutionProductCard product={product} />
          </StaggerItem>
        ))}
      </Stagger>
    </Reveal>
  )
}

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-noify-bg">
      <Seo
        title="Noify Energy Solutions — Lithium Batteries for E-Rickshaw, Solar & Industrial Use"
        description="Explore Noify Energy's complete range of lithium-ion battery solutions engineered for E-Rickshaws, solar storage, telecom and industrial applications with long service life."
        keywords="noify energy solutions, lithium battery solutions, e-rickshaw battery, solar lithium battery, industrial battery, energy storage systems"
        path="/solutions"
      />
      <Header inset />
      <main className="m-0 p-0">
        <SolutionsHero />

        <section className="px-6 pt-16 pb-0 lg:px-[88px] lg:pt-20 lg:pb-0">
          <div className="mx-auto max-w-[1265px]">
            <Reveal className="mb-16 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-noify-accent" />
                <span className="font-inter text-sm tracking-[-0.015em] text-noify-badge">
                  Product Catalogue
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="max-w-[679px] font-jakarta text-[32px] leading-tight tracking-[-0.005em] text-white/94 sm:text-[40px]">
                  Two voltage series. Built for the full mobility range.
                </h2>
                <p className="max-w-[576px] font-inter text-base tracking-[0.05em] text-noify-muted">
                  Every model follows Noify&apos;s standardized naming convention for consistency
                  across brochures, catalogues and marketing material.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-16">
              <ProductSeries title="51.2V Series" products={series512} />
              <ProductSeries title="64V Series" products={series64} />
            </div>
          </div>
        </section>

        <section className="px-6 pt-16 pb-16 lg:px-6 lg:pt-16 lg:pb-20">
          <Reveal className="mx-auto flex max-w-[763px] flex-col items-center gap-[50px] text-center">
            <div className="flex flex-col items-center gap-0">
              <h2 className="font-space text-2xl leading-[2.01] tracking-[-0.02em] text-white">
                Looking for technical blueprints &amp; dimensions?
              </h2>
              <p className="max-w-[805px] font-space text-base leading-[2.01] tracking-[-0.02em] text-white/60">
                Download our comprehensive 2026 Master Specification Catalog containing full data
                sheets for all models.
              </p>
            </div>
            <motion.a
              href={masterCatalogPdf.href}
              download={masterCatalogPdf.download}
              className="btn-green flex h-14 w-full max-w-[487px] items-center justify-center px-4 font-jakarta text-lg font-bold tracking-[0.05em] text-white sm:h-[76px] sm:text-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Master PDF
            </motion.a>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
