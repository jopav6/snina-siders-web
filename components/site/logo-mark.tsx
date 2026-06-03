"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated Snina Siders roof + house mark (recreated as SVG so it can animate).
 * The gold roofline draws itself in, then the white house rises into place and
 * gently floats. Matches the black & gold brand identity.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 120 92"
      className={className}
      fill="none"
      role="img"
      aria-label="Snina Siders roof mark"
    >
      <defs>
        <linearGradient id="roofGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4E4B8" />
          <stop offset="55%" stopColor="#D8BC84" />
          <stop offset="100%" stopColor="#A9802F" />
        </linearGradient>
      </defs>

      {/* Gold roofline — draws in */}
      <motion.path
        d="M14 48 L60 14 L106 48"
        stroke="url(#roofGold)"
        strokeWidth={12}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
        style={{ filter: "drop-shadow(0 4px 14px rgba(201,162,75,0.45))" }}
      />

      {/* White house — rises in, then gently floats */}
      <motion.g
        initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.05, duration: 0.6, type: "spring", bounce: 0.45 }}
        style={{ transformOrigin: "60px 64px" }}
      >
        <motion.g
          animate={reduce ? undefined : { y: [0, -3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
        >
          {/* house body + roof peak */}
          <path
            d="M46 54 L60 42 L74 54 L74 76 L46 76 Z"
            fill="#F4ECDB"
          />
          {/* doorway */}
          <rect x="56" y="62" width="8" height="14" rx="1.2" fill="#0a0a0b" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
