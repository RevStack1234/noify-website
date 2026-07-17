import { Reveal } from "../motion/Reveal"

function FeatureBlock({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex max-w-[344px] flex-col gap-2 px-2 py-4">
      <h3 className="font-inter text-[28px] font-medium leading-[1.25] tracking-[0.03em] text-white lg:text-[32px]">
        {title}
      </h3>
      <p className="font-jakarta text-base leading-normal tracking-[0.05em] text-white/58">
        {description}
      </p>
    </div>
  )
}

export function AboutNoifySection() {
  return (
    <section className="bg-[#18181B] px-4 py-4 lg:px-4 lg:py-4">
      <Reveal>
        <div className="mx-auto grid max-w-[1438px] grid-cols-1 gap-8 px-4 py-4 lg:h-[623px] lg:grid-cols-[1fr_294px_1fr] lg:grid-rows-2 lg:gap-x-12 lg:gap-y-0 lg:px-8 lg:py-4">
          <div className="flex flex-col justify-center gap-4 lg:pr-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#8DF700]" />
              <span className="font-inter text-sm tracking-[-0.015em] text-[#8DF700]">
                About Noify Energy
              </span>
            </div>
            <h2 className="max-w-[352px] font-jakarta text-[36px] font-bold leading-[1.15] tracking-[0.02em] text-white lg:text-4xl">
              <span className="text-gradient-green">What Pushes Us</span> Forward Every Day
            </h2>
            <p className="max-w-[300px] font-jakarta text-base tracking-[0.05em] text-white/58">
              Reliable lithium power built for India&apos;s electric mobility.
            </p>
          </div>

          <div className="flex items-center justify-center lg:row-span-2">
            <img
              src="/images/about-noify-13262a.png"
              alt="Noify Energy"
              className="h-[420px] w-full max-w-[294px] rounded-xl object-cover lg:h-full lg:max-h-[591px]"
            />
          </div>

          <div className="flex flex-col justify-center border-b border-white/33 pb-6 lg:border-b-0 lg:pb-0">
            <FeatureBlock
              title="Engineered for Every Mile"
              description="Every battery is engineered for consistent performance across thousands of daily charge cycles."
            />
          </div>

          <div className="flex flex-col justify-center border-t border-white/33 pt-6 lg:pt-8">
            <FeatureBlock
              title="Built for Every Rider's Journey"
              description="From daily commutes to full commercial shifts, our batteries are engineered to keep vehicles moving without fail."
            />
          </div>

          <div className="flex flex-col justify-center border-t border-white/33 pt-6 lg:pt-8">
            <FeatureBlock
              title="Built Around Reliability"
              description="We grow through dealers and OEMs who depend on us for reliable, direct manufacturer support."
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
