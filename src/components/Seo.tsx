import { Helmet } from "react-helmet-async"

interface SeoProps {
  title: string
  description: string
  keywords?: string
  path?: string
  image?: string
  type?: string
}

const SITE_NAME = "Noify Energy"
const SITE_URL = "https://noify.energy"
const DEFAULT_IMAGE = "/images/hero-battery-v2-1dc189.png"

export function Seo({
  title,
  description,
  keywords,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}: SeoProps) {
  const url = `${SITE_URL}${path}`
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-b85877.png`,
        description,
    sameAs: [
      "https://www.linkedin.com/company/noify",
      "https://www.instagram.com/noifyenergy",
      "https://www.facebook.com/noifyelectronics",
    ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-0000000000",
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
