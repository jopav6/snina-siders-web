"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { telHref, smsHref, defaultEstimateMsg } from "@/lib/site";

export function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-[#C9A24B]/15 bg-neutral-950/95 p-3 backdrop-blur transition-transform duration-300 sm:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <a
        href={telHref}
        className="flex items-center justify-center gap-2 rounded-full border border-[#C9A24B]/30 py-3 text-sm font-semibold text-foreground"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href={smsHref(defaultEstimateMsg)}
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-bright to-gold py-3 text-sm font-bold text-[#1b1408]"
      >
        <MessageSquare className="h-4 w-4" />
        Free Estimate
      </a>
    </div>
  );
}
