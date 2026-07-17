import { Reveal, Stagger, StaggerItem } from "../motion/Reveal"

const tags = [
  ["Scalable Operations", "OEM Partnership"],
  ["Industrial Deployment", "Nationwide Distribution"],
] as const

const values = [
  { icon: "/images/icon-energy.svg", label: "Energy" },
  { icon: "/images/icon-map.svg", label: "Effective" },
  { icon: "/images/icon-heart.svg", label: "Affordable" },
] as const

const infrastructure = [
  { icon: "/images/icon-warehouse-3491ea.png", label: "Warehouse\nInfrastructure" },
  { icon: "/images/icon-smart-energy-73907b.png", label: "Smart Energy\nVersion" },
  { icon: "/images/icon-product-expansion-5a9513.png", label: "Product\nExpansion" },
  { icon: "/images/icon-distribution-dec0cd.png", label: "Distribution\nNetwork" },
] as const

export function ManufacturingSection() {
  return (
    <section className="bg-noify-bg px-4 py-10 sm:px-6 sm:py-12 lg:px-[100px] lg:py-16">
      <div className="mx-auto flex max-w-[1108px] flex-col items-center gap-10 sm:gap-12 lg:gap-14">
        <Reveal className="flex w-full flex-col gap-8 sm:gap-10 lg:gap-12">
          <h2 className="text-center font-jakarta text-[22px] font-semibold leading-tight tracking-[0.02em] text-gradient-green sm:text-[28px] lg:text-[40px]">
            Manufacturing premium lithium batteries that power India&apos;s E-Rickshaw and EV
            mobility revolution.
          </h2>

          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-10">
            {tags.flat().map((tag) => (
              <StaggerItem
                key={tag}
                className="tag-outline flex h-[48px] items-center justify-center px-4 sm:h-[53px] sm:px-6"
              >
                <span className="text-center font-inter text-base tracking-[0.05em] text-white sm:text-lg lg:text-xl">
                  {tag}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <div className="flex w-full max-w-[904px] flex-col items-center gap-10 lg:gap-12">
          <Stagger className="flex flex-wrap items-start justify-center gap-10 sm:gap-14">
            {values.map((value) => (
              <StaggerItem key={value.label} className="flex flex-col items-center gap-2.5">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[rgba(251,251,251,0.41)] bg-noify-surface">
                  <img src={value.icon} alt="" className="h-5 w-5" />
                </div>
                <span className="font-inter text-xl tracking-[0.05em] text-white">
                  {value.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="grid w-full grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {infrastructure.map((item) => (
              <StaggerItem
                key={item.label}
                className="infra-card flex flex-col items-center gap-5 px-4 py-5 sm:gap-6 sm:px-6 sm:py-4"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-[90px] w-[90px] rounded-full object-contain sm:h-[108px] sm:w-[110px]"
                />
                <p className="whitespace-pre-line text-center font-inter text-sm font-medium tracking-[0.11em] text-[#FEFEFC] sm:text-base">
                  {item.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
