import { Link } from "react-router-dom"
import { Reveal } from "./motion/Reveal"
import { routes } from "../config/navigation"
import { useContactScroll } from "../hooks/useContactScroll"

const productLinks = [
  { label: "51.2V Series", path: routes.solutions },
  { label: "64V Series", path: routes.solutions },
  { label: "Commercial EV", path: routes.solutions },
  { label: "Solar Applications", path: routes.solutions },
] as const

const companyLinks = [
  { label: "About Us", path: routes.about },
  { label: "Become a Dealer", path: routes.distributor },
] as const

const contactLinks = [
  { label: "8369457406", path: "tel:8369457406" },
  { label: "priyanshu@noifyenergy.com", path: "mailto:priyanshu@noifyenergy.com" },
] as const

const socialLinks = [
  { label: "Instagram", icon: "/images/icon-instagram.svg", href: "https://www.instagram.com/noifyenergy" },
  { label: "LinkedIn", icon: "/images/icon-linkedin.svg", href: "https://www.linkedin.com/company/noify" },
  { label: "Facebook", icon: "/images/icon-facebook.svg", href: "https://www.facebook.com/noifyenergy?ref=1" },
] as const

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; path: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-inter text-base font-bold tracking-[0.04em] text-white/86">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.path.startsWith("/") ? (
              <Link
                to={link.path}
                className="font-inter text-xs font-light tracking-[0.04em] text-white/68 transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.path}
                className="font-inter text-xs font-light tracking-[0.04em] text-white/68 transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const scrollToContact = useContactScroll()

  return (
    <footer className="bg-noify-surface px-5 py-10 sm:px-8 lg:px-12">
      <Reveal>
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[1.5fr_repeat(5,1fr)] lg:gap-10">
            <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
              <Link to={routes.home}>
                <picture>
                  <source srcSet="/images/logo-footer-7ef9d6.webp" type="image/webp" />
                  <img
                    src="/images/logo-footer-7ef9d6.png"
                    alt="Noify"
                    className="h-12 w-[140px] object-contain object-left sm:h-[58px] sm:w-[168px]"
                  />
                </picture>
              </Link>
              <p className="max-w-[243px] font-inter text-sm tracking-[0.04em] text-white/68">
                Premium lithium batteries for E-Rickshaw, EV and commercial fleets manufactured for
                dealers and OEM partners across India.
              </p>
            </div>

            <FooterColumn title="Products" links={productLinks} />
            <div className="flex flex-col gap-4">
              <h4 className="font-inter text-base font-bold tracking-[0.04em] text-white/86">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-inter text-xs font-light tracking-[0.04em] text-white/68 transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="font-inter text-xs font-light tracking-[0.04em] text-white/68 transition-opacity hover:opacity-80"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <FooterColumn title="Contact" links={contactLinks} />

            <div className="flex flex-col gap-4">
              <h4 className="font-inter text-base font-bold tracking-[0.04em] text-white/86">
                Location
              </h4>
              <p className="max-w-[155px] font-inter text-xs font-light tracking-[0.04em] text-white/68">
                748, 7th Floor Tower B I-Thum Sector 62 Noida, India
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-start gap-4 sm:col-span-1">
              <h4 className="font-inter text-base font-bold tracking-[0.04em] text-white/86">
                Connect us with
              </h4>
              <div className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img src={social.icon} alt={social.label} className="h-[14px] w-[14px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center font-inter text-sm font-medium tracking-[0.04em] text-white/68">
            ©2026 Noify Electronics Private Limited. All Rights Reserved.
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
