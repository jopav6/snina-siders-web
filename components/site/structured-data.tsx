import { site, faqs } from "@/lib/site";

/**
 * LocalBusiness + FAQ structured data (JSON-LD).
 * Helps Google show rich results (rating stars, FAQ accordions) — an edge the
 * reference site lacked. Confirm the aggregate rating numbers before launch.
 */
export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description:
      "Full-line home remodeling — kitchens, baths, basements, additions, siding, roofing, windows and doors.",
    telephone: site.phoneRaw,
    email: site.email,
    foundingDate: String(site.founded),
    url: "https://sninasiders.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "175 N. Adamsville Rd",
      addressLocality: "Bridgewater",
      addressRegion: "NJ",
      postalCode: "08807",
      addressCountry: "US",
    },
    areaServed: site.towns.map((t) => ({ "@type": "City", name: t })),
    openingHours: "Mo,Tu,We,Th,Fr 08:00-17:00",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
