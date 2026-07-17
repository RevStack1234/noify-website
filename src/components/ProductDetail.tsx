import { Reveal, RevealLeft, RevealRight, Stagger, StaggerItem } from "./motion/Reveal"

const specs = [
  { value: "5120 Wh", label: "(Total Energy Capacity)" },
  { value: "51.2 V", label: "(Nominal Voltage)" },
  { value: "100 Ah", label: "(Rated Capacity)" },
] as const

const features = [
  "Sourced exclusively with Grade A+ Prismatic LiFePO₄ Cells for absolute structural reliability.",
  "Customized Smart BMS for optimized efficiency, safety, and reliable performance.",
  "3 X reduction in spatial weight footprint compared to legacy lead-acid setups.",
] as const

export function ProductDetail() {
  return (
    <section className="bg-noify-bg px-4 pb-12 sm:px-6 lg:px-14 lg:pb-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="rounded-[10px] bg-[#0F0F11] px-4 py-8 sm:px-6 lg:px-[105px] lg:py-12">
            <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:gap-8 lg:mb-[60px] lg:flex-row lg:items-center lg:justify-between">
              <h2 className="shrink-0 font-jakarta text-2xl font-semibold leading-[1.36] text-white lg:text-[28px]">
                NIE-51100
              </h2>
              <Stagger className="flex flex-wrap gap-6 sm:gap-10 lg:gap-20">
                {specs.map((spec) => (
                  <StaggerItem key={spec.value} className="text-left lg:text-center">
                    <p className="font-inter text-xl font-bold leading-tight text-white lg:text-[22px]">
                      {spec.value}
                    </p>
                    <p className="mt-1 font-inter text-sm font-normal text-[#B7B7B7] lg:text-[15px]">
                      {spec.label}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[339px_1fr] lg:gap-[130px]">
              <RevealLeft>
                <div
                  className="mx-auto flex h-[344px] w-full max-w-[339px] items-center justify-center rounded-[10px] border-[1.2px] border-[rgba(36,36,36,0.48)] bg-[#0F0F11] p-6 lg:mx-0"
                  style={{ boxShadow: "2px 4px 4px 0px rgba(69, 148, 1, 0.09)" }}
                >
                  <picture>
                    <source srcSet="/images/product-detail-3a24ba.webp" type="image/webp" />
                    <img
                      src="/images/product-detail-3a24ba.png"
                      alt="NIE-51100 Battery"
                      className="h-auto w-full max-w-[300px] object-contain"
                      loading="lazy"
                      decoding="async"
                  />
                </picture>
                </div>
              </RevealLeft>

              <RevealRight>
                <div className="flex flex-col gap-10">
                  <ul className="flex flex-col gap-6">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start font-jakarta text-base font-normal leading-[1.36] tracking-[0.01em] text-[#B7B7B7] lg:text-[20px]"
                      >
                        <span className="mr-3 text-[#B7B7B7]">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="btn-green flex h-14 w-full max-w-[275px] items-center justify-center gap-3 rounded-lg font-jakarta text-base font-bold tracking-[0.04em] text-white sm:h-[57px] lg:text-[18px]"
                  >
                    Configure Installation
                    <img src="/images/arrow-icon.svg" alt="" className="h-[18px] w-[18px]" />
                  </button>
                </div>
              </RevealRight>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
