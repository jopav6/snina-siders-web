"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ChefHat,
  Bath,
  Layers,
  Home as HomeIcon,
  Rows3,
  Triangle,
  DoorOpen,
  Boxes,
} from "lucide-react";

const services = [
  { icon: ChefHat, title: "Kitchen Remodeling", desc: "Cabinetry, counters, lighting and layout — kitchens designed for how your family actually lives." },
  { icon: Bath, title: "Bathroom Remodeling", desc: "Spa-grade tile, fixtures and waterproofing for bathrooms that feel like a retreat." },
  { icon: Layers, title: "Basement Finishing", desc: "Unlock a whole new floor — media rooms, suites and offices, dry and code-compliant." },
  { icon: HomeIcon, title: "Home Additions", desc: "Seamless expansions that match your home's character and grow with your family." },
  { icon: Rows3, title: "Siding", desc: "Our namesake craft — durable, beautiful exteriors that boost curb appeal and protect your home." },
  { icon: Triangle, title: "Roofing", desc: "Watertight roofing systems installed to manufacturer spec for decades of protection." },
  { icon: DoorOpen, title: "Windows & Doors", desc: "Energy-efficient windows and doors that seal tight and elevate every elevation." },
  { icon: Boxes, title: "Whole-Home Remodel", desc: "Top-to-bottom transformations, project-managed end to end by one accountable team." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ServiceCards() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {services.map((s) => (
        <motion.div key={s.title} variants={card} className="h-full [will-change:transform,opacity]">
          <article className="group h-full rounded-2xl border border-[#C9A24B]/15 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A24B]/50 hover:shadow-[0_26px_50px_-24px_rgba(0,0,0,0.7)]">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-neutral-900 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-[#1b1408]">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-2xl text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </article>
        </motion.div>
      ))}
    </motion.div>
  );
}
