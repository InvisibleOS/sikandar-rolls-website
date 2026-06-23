"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import RollArt from "./RollArt";
import Seal from "./Seal";
import Star from "./Star";

const CHIPS = [
  { t: "Flaky Lachha Paratha", pos: "left-0 top-6 md:-left-6" },
  { t: "Charcoal-Grilled Filling", pos: "right-0 top-16 md:-right-8" },
  { t: "Burnt-Garlic Mayo", pos: "left-2 bottom-24 md:-left-10" },
  { t: "Mint, Onion & Lime", pos: "right-2 bottom-10 md:-right-6" },
];

export default function Signature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.92]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section
      id="signature"
      data-nav-dark
      className="relative overflow-hidden py-24 text-cream md:py-36"
      style={{
        background:
          "radial-gradient(120% 110% at 50% 0%, #9d0c1d 0%, #6f0915 45%, #3c050d 100%)",
      }}
    >
      <div className="dots-cream absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-4 flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold"
        >
          <Star className="size-3.5" />
          Anatomy of a Sikandar
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl font-semibold leading-[1.02] md:text-7xl"
        >
          Engineered for flavour
        </motion.h2>

        <div
          ref={ref}
          className="relative mx-auto mt-16 flex h-[460px] max-w-xl items-center justify-center md:h-[560px]"
        >
          {/* rotating seal halo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Seal className="size-[78%] text-cream/15" />
          </div>

          <motion.div
            style={{ scale, rotate }}
            className="relative z-10 w-[58%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          >
            <RollArt className="w-full" />
          </motion.div>

          {/* floating ingredient chips */}
          {CHIPS.map((c, i) => (
            <motion.span
              key={c.t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className={`absolute z-20 flex items-center gap-2 rounded-full border border-cream/20 bg-brand-deep/50 px-4 py-2 text-xs font-medium backdrop-blur-sm md:text-sm ${c.pos}`}
            >
              <span className="size-1.5 rounded-full bg-gold" />
              {c.t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
