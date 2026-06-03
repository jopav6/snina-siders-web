/** Year the business was established. Years-in-business updates automatically. */
const FOUNDED_YEAR = 2003;

export const site = {
  name: "Snina Siders LLC",
  shortName: "Snina Siders",
  phoneDisplay: "(908) 930-4569",
  phoneRaw: "+19089304569",
  email: "sninasidersllc@gmail.com",
  address: "175 N. Adamsville Rd, Bridgewater, NJ 08807",
  hours: "Mon–Fri · 8:00 AM – 5:00 PM",
  license: "#13VH05110700",
  founded: FOUNDED_YEAR,
  yearsInBusiness: new Date().getFullYear() - FOUNDED_YEAR,
  serviceArea: "the Tristate Area",
  towns: [
    "Bridgewater",
    "Somerville",
    "Branchburg",
    "Hillsborough",
    "Basking Ridge",
    "Warren",
    "Flemington",
    "Morristown",
  ],
};

/** Consolidated trust band — the scattered Odyssey signals, in one place. */
export const guarantees = [
  { title: "Free, No-Pressure Estimates", desc: "On-site visit, honest advice, and a clear written quote — no obligation." },
  { title: "Licensed & Insured in NJ", desc: `NJ HIC ${site.license}. Fully insured for your protection on every job.` },
  { title: "Written Workmanship Warranty", desc: "We stand behind our craft in writing — not just a handshake." },
  { title: "20+ Years of Experience", desc: "Established 2003 — siding specialists grown into full-line remodelers." },
];

/** Manufacturer / certification partners — confirm which apply before launch. */
export const certifications = [
  "James Hardie",
  "GAF",
  "CertainTeed",
  "Andersen",
  "Owens Corning",
];

/** Objection-handling FAQ — reused for on-page accordion and FAQ schema. */
export const faqs = [
  {
    q: "How do I get a free estimate?",
    a: "The fastest way is to text us — tap any \"Free Estimate\" button and your phone opens a pre-written message. We reply quickly and schedule a no-pressure, on-site visit to measure and advise.",
  },
  {
    q: "What areas do you serve?",
    a: `We serve homeowners across ${site.serviceArea}, including ${site.towns.slice(0, 4).join(", ")} and the surrounding communities. Not sure if you're in range? Just ask.`,
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes. Snina Siders LLC is fully licensed and insured in New Jersey (NJ HIC ${site.license}). We're happy to provide documentation before any work begins.`,
  },
  {
    q: "How long have you been in business?",
    a: `Over ${site.yearsInBusiness} years. We started in siding and grew into a full-line remodeler, and we manage every project end-to-end — with the owner on the job site around the clock.`,
  },
  {
    q: "What types of projects do you take on?",
    a: "Kitchens, bathrooms, basements, additions, siding, roofing, windows and doors, and full whole-home remodels — all handled by one accountable team.",
  },
];

/** Build an SMS deep link that pre-fills a message to the contractor. */
export function smsHref(body: string): string {
  return `sms:${site.phoneRaw}?&body=${encodeURIComponent(body)}`;
}

export const telHref = `tel:${site.phoneRaw}`;
export const mailHref = `mailto:${site.email}`;
export const defaultEstimateMsg =
  "Hi Snina Siders! I saw your portfolio and I'd love a free estimate. ";
