import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { navLinks, routes } from "../config/navigation"
import { useContactScroll } from "../hooks/useContactScroll"

export function Header({ inset = false, overlay = false }: { inset?: boolean; overlay?: boolean }) {
  const { pathname } = useLocation()
  const scrollToContact = useContactScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const headerContent = (
    <div className="relative mx-auto flex h-16 max-w-[1312px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
      <Link to={routes.home} className="shrink-0" onClick={() => setMenuOpen(false)}>
        <picture>
          <source srcSet="/images/logo-b85877.webp" type="image/webp" />
          <img
            src="/images/logo-b85877.png"
            alt="Noify"
            className="h-11 w-[112px] object-contain object-left sm:h-[56px] sm:w-[144px]"
          />
        </picture>
      </Link>

      <nav className="hidden items-center gap-5 lg:flex xl:gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link
              key={link.label}
              to={link.path}
              className={`whitespace-nowrap font-jakarta text-sm font-medium tracking-[0.08em] transition-opacity hover:opacity-80 xl:tracking-[0.11em] ${
                isActive ? "text-[#489701]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => {
            setMenuOpen(false)
            scrollToContact()
          }}
          className="btn-green hidden h-10 items-center justify-center px-4 font-jakarta text-xs font-semibold tracking-[0.05em] text-[#F7F7F7] sm:flex sm:h-[45px] sm:w-[148px] sm:text-sm lg:w-[178px]"
        >
          Contact Us
        </button>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>
    </div>
  )

  const mobileMenu = (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
          <motion.nav
            className="fixed inset-x-4 top-[4.5rem] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1d] p-5 shadow-2xl sm:inset-x-6 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3.5 font-jakarta text-base font-medium tracking-[0.04em] transition-colors ${
                      isActive
                        ? "bg-[#489701]/15 text-[#7DC553]"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  scrollToContact()
                }}
                className="btn-green mt-3 flex h-12 w-full items-center justify-center font-jakarta text-sm font-semibold tracking-[0.05em] text-white"
              >
                Contact Us
              </button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )

  if (inset && overlay) {
    return (
      <>
        <header className="absolute inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 lg:px-14">
          <div className="mx-auto max-w-[1440px] rounded-xl bg-noify-nav">{headerContent}</div>
        </header>
        {mobileMenu}
      </>
    )
  }

  if (inset) {
    return (
      <>
        <header className="relative z-50 px-3 pt-3 sm:px-6 sm:pt-5 lg:px-14">
          <div className="mx-auto max-w-[1440px] rounded-xl bg-noify-nav">{headerContent}</div>
        </header>
        {mobileMenu}
      </>
    )
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-noify-nav">{headerContent}</header>
      {mobileMenu}
    </>
  )
}
