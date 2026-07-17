import { RevealScale } from "./motion/Reveal"

export function DashboardSection() {
  return (
    <section className="bg-noify-bg px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <RevealScale>
          <picture>
            <source srcSet="/images/section-dashboard.webp" type="image/webp" />
            <img
              src="/images/section-dashboard.png"
              alt="Noify Dashboard"
              className="h-auto w-full rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </RevealScale>
      </div>
    </section>
  )
}
