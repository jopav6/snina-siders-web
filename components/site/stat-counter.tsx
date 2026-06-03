"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ target, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;

          const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          if (reduce) {
            setValue(target);
            return;
          }

          const duration = 1400;
          let startTs: number | null = null;
          const step = (ts: number) => {
            if (startTs === null) startTs = ts;
            const p = Math.min((ts - startTs) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(step);
            else setValue(target);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl tabular-nums text-gold-bright sm:text-6xl">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
