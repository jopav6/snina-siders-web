"use client";

import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterProps {
  before: string;
  after: string;
  caption?: string;
  /** "cover" (default) crops to fill; "contain" shows the full image (zoomed out). */
  fit?: "cover" | "contain";
}

export function BeforeAfter({ before, after, caption, fit = "cover" }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div>
      <div className="relative aspect-[16/10] max-h-[600px] select-none overflow-hidden rounded-3xl border border-[#C9A24B]/15 sm:aspect-[16/9]">
        {/* Blurred backdrop fills the letterbox space when showing full (contain) images */}
        {fit === "contain" && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={after}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              draggable={false}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={before}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
              draggable={false}
            />
          </>
        )}
        {/* BEFORE (base, full width) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt="Before renovation"
          className={`absolute inset-0 h-full w-full ${objectClass}`}
          draggable={false}
        />
        {/* AFTER (full width, revealed from the left via clip-path) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt="After renovation"
          className={`absolute inset-0 h-full w-full ${objectClass}`}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />
        {/* AFTER label — clipped to the after (left) side so it only shows over the after image */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <span className="absolute bottom-4 left-4 rounded-full bg-gold/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#1b1408] backdrop-blur">
            After
          </span>
        </div>
        {/* BEFORE label — clipped to the before (right) side so it only shows over the before image */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <span className="absolute bottom-4 right-4 rounded-full bg-neutral-950/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/80 backdrop-blur">
            Before
          </span>
        </div>

        {/* handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-[3] w-0.5 bg-gold-bright"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-bright shadow-[0_8px_24px_-6px_rgba(0,0,0,0.7)]">
            <ChevronsLeftRight className="h-5 w-5 text-[#1b1408]" />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="absolute inset-0 z-[4] m-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      {caption && (
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {caption} · <span className="text-muted-foreground/60">drag to compare</span>
        </p>
      )}
    </div>
  );
}
