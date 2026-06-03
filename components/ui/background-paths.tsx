"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Images, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/site/logo-mark";

/**
 * Animated flowing SVG paths used as an atmospheric background.
 * Re-themed to gold strokes for the Snina Siders black & gold identity.
 */
export function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-[#C9A24B]"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.025}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.25, 0.55, 0.25],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

interface BackgroundPathsProps {
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    /** When provided, the CTA renders as a link (e.g. an sms: deep link). */
    ctaHref?: string;
    /** Optional secondary CTA shown under the primary button (e.g. jump to portfolio). */
    secondaryLabel?: string;
    secondaryHref?: string;
    /** Optional small kicker line above the title. */
    eyebrow?: string;
    /** Show the animated roof + house logo mark above the title. */
    logoMark?: boolean;
}

export function BackgroundPaths({
    title = "Background Paths",
    subtitle,
    ctaLabel = "Discover Excellence",
    ctaHref,
    secondaryLabel,
    secondaryHref,
    eyebrow,
    logoMark,
}: BackgroundPathsProps) {
    const reduce = useReducedMotion();
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
            {/* radial glow to seat the type on the dark field */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(60% 50% at 50% 45%, rgba(201,162,75,0.10), transparent 70%)",
                }}
                aria-hidden
            />

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-5xl mx-auto"
                >
                    {logoMark && (
                        <LogoMark className="mx-auto mb-6 h-20 w-auto sm:h-24" />
                    )}

                    {eyebrow && (
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-7 text-sm sm:text-base font-semibold uppercase tracking-[0.34em] text-[#E3C887]"
                        >
                            {eyebrow}
                        </motion.p>
                    )}

                    <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold mb-8 tracking-tight leading-[0.92] drop-shadow-[0_4px_30px_rgba(201,162,75,0.35)]">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text
                                        bg-gradient-to-b from-[#F4E4B8] via-[#D8BC84] to-[#A9802F]"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="mx-auto mb-10 max-w-3xl text-lg sm:text-xl md:text-2xl text-neutral-200 leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="inline-block group relative bg-gradient-to-b from-[#C9A24B]/40 to-transparent
                        p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg
                        hover:shadow-[0_20px_50px_-15px_rgba(201,162,75,0.5)] transition-shadow duration-300"
                    >
                        <Button
                            asChild={!!ctaHref}
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md
                            bg-neutral-950/80 hover:bg-neutral-900 text-[#F4E4B8] hover:text-white
                            transition-all duration-300 group-hover:-translate-y-0.5
                            border border-[#C9A24B]/30 hover:border-[#C9A24B]/60"
                        >
                            {ctaHref ? (
                                <a href={ctaHref}>
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        {ctaLabel}
                                    </span>
                                    <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                                        →
                                    </span>
                                </a>
                            ) : (
                                <span className="flex items-center">
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        {ctaLabel}
                                    </span>
                                    <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                                        →
                                    </span>
                                </span>
                            )}
                        </Button>
                    </motion.div>

                    {secondaryHref && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="mt-7 flex flex-col items-center gap-2"
                        >
                            <a
                                href={secondaryHref}
                                className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#C9A24B] bg-[#C9A24B]/10 px-7 py-3.5 text-base font-bold uppercase tracking-[0.16em] text-[#F4E4B8]
                                shadow-[0_10px_36px_-10px_rgba(201,162,75,0.55)] backdrop-blur-md transition-all duration-300
                                hover:-translate-y-0.5 hover:bg-[#C9A24B] hover:text-[#1b1408] hover:shadow-[0_18px_46px_-10px_rgba(201,162,75,0.8)]"
                            >
                                <Images className="h-5 w-5" />
                                {secondaryLabel}
                                <motion.span
                                    className="inline-flex"
                                    animate={reduce ? undefined : { y: [0, 3, 0] }}
                                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                                </motion.span>
                            </a>
                            <span className="text-xs uppercase tracking-[0.22em] text-[#E3C887]/60">
                                See our finished projects
                            </span>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* fade into the next (dark) section */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-neutral-950" />
        </div>
    );
}
