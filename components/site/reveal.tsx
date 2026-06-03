"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** delay in seconds */
  delay?: number;
  /** slide direction */
  from?: "up" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  from = "up",
  className,
}: RevealProps) {
  const offset =
    from === "up" ? { y: 14 } : from === "right" ? { x: 20 } : {};

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -90px 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
