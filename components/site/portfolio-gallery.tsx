"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  finishedPortfolio,
  portfolioCategories,
  hiddenFromGallery,
  type Shot,
} from "@/lib/portfolio";

const visible: Shot[] = finishedPortfolio.filter(
  (s) => !hiddenFromGallery.some((id) => s.src.includes(id)),
);
const countCat = (key: string): number => visible.filter((s) => s.cat === key).length;

export function PortfolioGallery() {
  const [active, setActive] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shots: Shot[] = useMemo(
    () => (active === "all" ? visible : visible.filter((s) => s.cat === active)),
    [active],
  );

  const tabs = useMemo(
    () => [
      { key: "all", label: "All Work", count: visible.length },
      ...portfolioCategories
        .filter((c) => countCat(c.key) > 0)
        .map((c) => ({
          key: c.key,
          label: c.label,
          count: countCat(c.key),
        })),
    ],
    [],
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % shots.length)),
    [shots.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [shots.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, next, prev]);

  return (
    <div>
      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap gap-2.5">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              active === t.key
                ? "border-transparent bg-gradient-to-b from-gold-bright to-gold text-[#1b1408]"
                : "border-[#C9A24B]/25 text-foreground/70 hover:border-[#C9A24B]/60 hover:text-foreground",
            )}
          >
            {t.label}
            <span className={cn("ml-1.5 text-xs", active === t.key ? "text-[#1b1408]/70" : "text-muted-foreground/60")}>
              {t.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-[#C9A24B]/10 bg-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt="Snina Siders project"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-neutral-950/0 transition-colors duration-300 group-hover:bg-neutral-950/20" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && shots[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-[#C9A24B]/30 text-foreground transition-colors hover:bg-neutral-900"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-[#C9A24B]/30 text-foreground transition-colors hover:bg-neutral-900 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shots[lightbox].src}
            alt="Snina Siders project"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-[#C9A24B]/30 text-foreground transition-colors hover:bg-neutral-900 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
            {lightbox + 1} / {shots.length}
          </span>
        </div>
      )}
    </div>
  );
}
