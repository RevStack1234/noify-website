import { motion } from "motion/react"
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal"

const products = [
  {
    id: "NIE-51100",
    image: "/images/product-51150-5e0cd8.webp",
    title: "NIE-51100\n51.2V | 100Ah",
    description:
      "Optimized for E-Rickshaw applications with reliable performance, long cycle life, and efficient daily operation.",
  },
  {
    id: "NIE-51200",
    image: "/images/product-51200-v2-66d8ee.webp",
    title: "NIE-51200\n51.2V | 200Ah",
    description:
      "Built for E-Rickshaw and EV mobility, delivering extended runtime and dependable power output.",
  },
  {
    id: "NIE-64100",
    image: "/images/product-64100-39de47.webp",
    title: "NIE-64100\n64V | 100Ah",
    description:
      "Engineered for high-performance E-Rickshaw applications with efficient energy delivery and long service life.",
  },
  {
    id: "NIE-64200",
    image: "/images/product-64200-78d470.webp",
    title: "NIE-64200\n64V | 200Ah",
    description:
      "Heavy-duty lithium battery for E-Rickshaws with solar backup compatibility and dependable high-capacity performance.",
  },
] as const

function ProductCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <motion.div
      className="product-card flex w-full max-w-[284px] flex-col gap-2.5 p-3 pb-5"
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-[195px] w-full max-w-[260px] items-center justify-center overflow-hidden rounded-xl bg-[#121111]">
          <img src={image} alt={title.split("\n")[0]} className="h-[158px] w-[219px] object-contain" />
        </div>
        <div className="flex w-full max-w-[246px] flex-col items-center gap-2 text-center">
          <h3 className="whitespace-pre-line font-jakarta text-sm font-semibold leading-[1.72] tracking-[0.06em] text-white">
            {title}
          </h3>
          <p className="font-inter text-xs font-medium leading-[1.47] text-noify-text-dim">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function ProductCards() {
  return (
    <section className="bg-noify-bg px-4 py-6 sm:px-8 sm:py-8 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div
            className="rounded-lg bg-noify-card px-4 py-6 sm:px-8 sm:py-10 lg:px-12"
            style={{ boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25)" }}
          >
            <div className="mb-6 sm:mb-8">
              <span className="btn-green inline-flex h-8 items-center justify-center rounded px-3.5 font-jakarta text-xs font-semibold tracking-[0.04em] text-white">
                READY TO SHIP
              </span>
            </div>

            <Stagger className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch sm:gap-6 xl:grid-cols-4">
              {products.map((product) => (
                <StaggerItem key={product.id} className="w-full max-w-[284px] xl:max-w-none">
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
