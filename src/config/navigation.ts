export const routes = {
  home: "/",
  solutions: "/solutions",
  about: "/about",
  distributor: "/become-a-distributor",
} as const

export const masterCatalogPdf = {
  href: "/NOIFY%20Master%20Catalog.pdf",
  download: "NOIFY Master Catalog.pdf",
} as const

export const navLinks = [
  { label: "Our Solutions", path: routes.solutions },
  { label: "About Us", path: routes.about },
  { label: "Become a Distributor", path: routes.distributor },
] as const
