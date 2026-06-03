import {
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  MessageSquare,
  PencilRuler,
  Hammer,
  Sparkles,
} from "lucide-react";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { Reveal } from "@/components/site/reveal";
import { SiteHeader } from "@/components/site/site-header";
import { MobileBar } from "@/components/site/mobile-bar";
import { StatCounter } from "@/components/site/stat-counter";
import { EstimateForm } from "@/components/site/estimate-form";
import { BeforeAfter } from "@/components/site/before-after";
import { PortfolioGallery } from "@/components/site/portfolio-gallery";
import { Faq } from "@/components/site/faq";
import { StructuredData } from "@/components/site/structured-data";
import { ServiceCards } from "@/components/site/service-cards";
import {
  site,
  telHref,
  mailHref,
  smsHref,
  defaultEstimateMsg,
  guarantees,
} from "@/lib/site";
import { beforeAfterPairs } from "@/lib/portfolio";


const steps = [
  { n: "01", icon: MessageSquare, title: "Text Us", desc: "Send a quick message about your project. We reply fast and set up a free, no-pressure visit." },
  { n: "02", icon: PencilRuler, title: "Design & Estimate", desc: "We measure, advise on materials, and deliver a detailed, transparent written estimate." },
  { n: "03", icon: Hammer, title: "We Build", desc: "Licensed crews, clean job sites, and steady communication from demolition to finish." },
  { n: "04", icon: Sparkles, title: "The Reveal", desc: "A final walkthrough together — we don't finish until every detail meets our standard." },
];

export default function Home() {
  const estimateLink = smsHref(defaultEstimateMsg);

  return (
    <>
      <StructuredData />
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-[#1b1408]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="top">
        {/* ============ HERO ============ */}
        <BackgroundPaths
          logoMark
          eyebrow={`${site.serviceArea} · Est. ${site.founded}`}
          title="Snina Siders LLC"
          subtitle="Full-line home remodeling, crafted to last — from kitchens and baths to siding, additions and whole-home transformations across the Tristate Area."
          ctaLabel="Get a Free Estimate"
          ctaHref={estimateLink}
          secondaryLabel="View Our Work"
          secondaryHref="#portfolio"
        />

        {/* ============ TRUST BADGES ============ */}
        <section className="border-y border-[#C9A24B]/15 bg-neutral-950">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-8 text-sm text-foreground/75 sm:px-8">
            <span className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-gold" />
              NJ HIC Lic. {site.license}
            </span>
            <span className="flex items-center gap-2.5">
              <Clock className="h-5 w-5 text-gold" />
              {site.yearsInBusiness}+ Years of Craftsmanship
            </span>
            <span className="flex items-center gap-2.5">
              <MapPin className="h-5 w-5 text-gold" />
              Serving {site.serviceArea}
            </span>
          </div>
        </section>

        {/* ============ MARQUEE ============ */}
        <div className="marquee-wrap overflow-hidden border-b border-[#C9A24B]/15 bg-neutral-950 py-5">
          <div className="marquee text-sm uppercase tracking-[0.22em] text-muted-foreground">
            {[0, 1].map((dup) => (
              <span key={dup} className="flex items-center gap-12 pr-12" aria-hidden={dup === 1}>
                {site.towns.map((t) => (
                  <span key={t} className="flex items-center gap-12">
                    {t}
                    <span className="text-gold">◆</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ============ GUARANTEES ============ */}
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Why Homeowners Choose Us</p>
              <h2 className="text-balance font-display text-3xl leading-tight sm:text-4xl">
                Every promise, in writing — not just a handshake.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {guarantees.map((g, i) => (
                <Reveal key={g.title} delay={(i % 4) * 0.08}>
                  <div className="h-full rounded-2xl border border-[#C9A24B]/15 bg-card p-7">
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-neutral-900 text-gold">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-display text-xl text-foreground">{g.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="blueprint bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">What We Do</p>
              <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
                A full line of remodeling, under one trusted roof.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                One team, accountable from demolition to the final reveal — so every detail is consistent, code-compliant, and built to last.
              </p>
            </Reveal>

            <ServiceCards />
          </div>
        </section>

        {/* ============ PORTFOLIO ============ */}
        <section id="portfolio" className="bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Our Work</p>
                <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
                  See the craftsmanship for yourself.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Real New Jersey homes, transformed. Filter by the space you&apos;re planning, browse the full portfolio — then text us about the one closest to your vision.
                </p>
              </div>
              <a
                href={estimateLink}
                className="group hidden items-center gap-2 rounded-full bg-gradient-to-b from-gold-bright to-gold px-6 py-3 text-sm font-bold text-[#1b1408] shadow-[0_10px_30px_-10px_rgba(201,162,75,0.65)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
              >
                Text us about a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal className="mt-12">
              <figure className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#C9A24B]/15 sm:aspect-[2/1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portfolio/IMG_5631.jpg"
                  alt="Custom chef's kitchen with waterfall quartz island"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-transparent" />
                <figcaption className="absolute bottom-6 left-6 z-[2]">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-[0.28em] text-gold">Featured Project</span>
                  <span className="block font-display text-2xl text-foreground sm:text-3xl">Custom Chef&apos;s Kitchen</span>
                </figcaption>
              </figure>
            </Reveal>

            <PortfolioGallery />

            <a
              href={estimateLink}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-bright to-gold py-3.5 text-sm font-bold text-[#1b1408] sm:hidden"
            >
              Text us about a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ============ BEFORE & AFTER ============ */}
        {beforeAfterPairs.length > 0 && (
          <section id="before-after" className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <Reveal className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Before &amp; After</p>
                <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
                  The Snina Siders difference, side by side.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Drag the slider to see how we transform a space — from start to finished.
                </p>
              </Reveal>
              <div className="mt-12 space-y-12">
                {beforeAfterPairs.map((p) => (
                  <Reveal key={p.after}>
                    <BeforeAfter before={p.before} after={p.after} caption={p.caption} fit={p.fit} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ PROCESS ============ */}
        <section id="process" className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">How It Works</p>
              <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
                A clear path from first text to final reveal.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-[#C9A24B]/15 bg-card p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-5xl text-gold">{s.n}</span>
                      <s.icon className="h-6 w-6 text-gold/70" />
                    </div>
                    <h3 className="mb-2 mt-4 font-display text-2xl text-foreground">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="border-y border-[#C9A24B]/15 bg-neutral-950 py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
            <Reveal><StatCounter target={site.yearsInBusiness} suffix="+" label="Years in Business" /></Reveal>
            <Reveal delay={0.08}><StatCounter target={500} suffix="+" label="Projects Completed" /></Reveal>
            <Reveal delay={0.16}><StatCounter target={30} suffix="+" label="NJ Towns Served" /></Reveal>
            <Reveal delay={0.24}><StatCounter target={100} suffix="%" label="Licensed & Insured" /></Reveal>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
            <Reveal from="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#C9A24B]/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portfolio/IMG_5953.jpg"
                  alt="Custom screened porch addition with composite decking"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
              </div>
            </Reveal>
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Who We Are</p>
              <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
                Over two decades of building trust, one home at a time.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Snina Siders LLC is a Bridgewater-based remodeling company built on a simple promise: do exceptional work, treat every home like our own, and stand behind it. What began with expert siding has grown into a true full-line remodeler serving the Tristate Area.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We&apos;re fully licensed and insured in New Jersey, and we manage every project end-to-end so you always know who&apos;s accountable. The owner is on the job site around the clock — just craftsmanship you can see and a team you can reach.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gold pl-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">NJ HIC License</dt>
                  <dd className="mt-1 font-display text-xl text-foreground">{site.license}</dd>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Serving</dt>
                  <dd className="mt-1 font-display text-xl text-foreground">{site.serviceArea}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal className="text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Good to Know</p>
              <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
                Answers before you ask.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Still wondering about something? Text us — we&apos;re happy to talk it through.
              </p>
            </Reveal>
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="blueprint bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Free Estimate</p>
              <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
                Tell us about your project — we&apos;ll text you right back.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Fill in a few details and tap send. Your phone opens a pre-written text to Snina Siders — no forms lost in cyberspace, just a real conversation.
              </p>

              <div className="mt-9 space-y-4">
                <a href={telHref} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-neutral-900 text-gold transition-colors group-hover:bg-gold group-hover:text-[#1b1408]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">Call or text</span>
                    <span className="block font-display text-xl text-foreground">{site.phoneDisplay}</span>
                  </span>
                </a>
                <a href={mailHref} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-neutral-900 text-gold transition-colors group-hover:bg-gold group-hover:text-[#1b1408]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                    <span className="block break-all font-display text-xl text-foreground">{site.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-neutral-900 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">Visit</span>
                    <span className="block font-display text-xl text-foreground">{site.address}</span>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-neutral-900 text-gold">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">Hours</span>
                    <span className="block font-display text-xl text-foreground">{site.hours}</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal from="right">
              <EstimateForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[#C9A24B]/15 bg-neutral-950 pb-28 pt-16 text-muted-foreground sm:pb-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt={`${site.name} logo`}
                className="mb-5 h-12 w-auto sm:h-14"
              />
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Full-line home remodeling crafted to last — proudly serving homeowners across {site.serviceArea} for {site.yearsInBusiness}+ years.
              </p>
              <p className="mt-4 text-xs text-muted-foreground/60">
                NJ HIC License {site.license} · Licensed &amp; Insured
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Explore</h4>
              <ul className="space-y-2.5 text-sm">
                {["Services", "Portfolio", "Process", "About", "FAQ"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Get in Touch</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href={telHref} className="transition-colors hover:text-gold">{site.phoneDisplay}</a></li>
                <li><a href={mailHref} className="break-all transition-colors hover:text-gold">{site.email}</a></li>
                <li>175 N. Adamsville Rd<br />Bridgewater, NJ 08807</li>
                <li>{site.hours}</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#C9A24B]/15 pt-6 text-xs text-muted-foreground/60 sm:flex-row">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>Bridgewater, New Jersey</p>
          </div>
        </div>
      </footer>

      <MobileBar />
    </>
  );
}
