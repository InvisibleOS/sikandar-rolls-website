"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Star from "./Star";
import HeroCarousel from "./HeroCarousel";

const EASE = [0.16, 1, 0.3, 1] as const;

function RevealWord({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`flex overflow-hidden ${className ?? ""}`}>
      {text.split("").map((ch, i) => (
        <span key={i} className="overflow-hidden">
          <motion.span
            className={`inline-block${ch === "O" ? " italic" : ""}`}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.5 + i * 0.05 }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-nav-dark
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden text-cream"
    >
      {/* Stock-image carousel backdrop */}
      <HeroCarousel />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.34em] text-cream/80"
        >
          <Star className="size-3.5 text-gold" />
          Est. Bengaluru · Flame-Grilled Daily
          <Star className="size-3.5 text-gold" />
        </motion.div>

        <h1 className="font-display font-semibold leading-[0.86] tracking-tighter">
          <RevealWord
            text="SIKANDAR"
            className="justify-center text-[clamp(3.2rem,15vw,12rem)] text-cream drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          />
          <RevealWord
            text="ROLLS"
            className="-mt-2 justify-center text-[clamp(3.2rem,15vw,12rem)] text-outline-cream md:mt-0"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-7 max-w-xl font-serif text-lg italic text-cream/85 md:text-2xl"
        >
          Royally spiced, hand-rolled and flame-kissed — the street-food
          legend, reimagined for the connoisseur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="rounded-full bg-cream px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] transition-colors hover:bg-white"
          >
            Explore the Menu
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
