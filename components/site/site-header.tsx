"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, telHref, smsHref, defaultEstimateMsg } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-[#C9A24B]/15 py-3"
          : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label={`${site.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt={`${site.name} logo`}
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12",
            )}
          />
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium text-foreground/75 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telHref}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground/85 transition-colors hover:text-gold sm:flex"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <a
            href={smsHref(defaultEstimateMsg)}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-bright to-gold px-5 py-2.5 text-sm font-bold text-[#1b1408] shadow-[0_10px_30px_-10px_rgba(201,162,75,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Free Estimate
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
