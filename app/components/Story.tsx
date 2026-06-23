"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "./Reveal";
import RollArt from "./RollArt";
import Seal from "./Seal";
import Star from "./Star";

const FEATURES = [
  { k: "01", t: "Slow-marinated", d: "24 hours in royal Awadhi spice." },
  { k: "02", t: "Charcoal-grilled", d: "Over open flame, never a pan." },
  { k: "03", t: "Rolled to order", d: "Wrapped fresh the moment you ask." },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-cream py-24 md:py-36"
    >
      {/* oversized ghost word */}
      <span className="pointer-events-none absolute -right-6 top-8 select-none font-display text-[18vw] leading-none text-brand/[0.05]">
        طعم
      </span>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-10">
        {/* Copy */}
        <div>
          <Reveal className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
            <Star className="size-3.5" />
            The Sikandar Story
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl">
              A roll fit for a<span className="text-brand"> conqueror</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-ink-soft md:text-xl">
              Born on a busy street corner and perfected over a thousand
              flames, Sikandar Rolls turns the humble kathi roll into an act of
              theatre. Every wrap is a small empire of spice — smoky, succulent
              and unapologetically generous.
            </p>
          </Reveal>

          <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-brand/15">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.k}
                delay={0.12 + i * 0.08}
                className="group flex items-center gap-5 bg-paper/60 px-6 py-5 transition-colors hover:bg-brand hover:text-cream"
              >
                <span className="font-display text-2xl text-brand transition-colors group-hover:text-cream">
                  {f.k}
                </span>
                <div>
                  <p className="font-semibold">{f.t}</p>
                  <p className="text-sm text-ink-soft transition-colors group-hover:text-cream/80">
                    {f.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div ref={ref} className="relative flex justify-center">
          <motion.div
            style={{ y: artY }}
            className="dots relative flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-paper shadow-[0_40px_80px_-30px_rgba(139,11,24,0.4)] ring-1 ring-brand/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-paper/70 to-paper/95" />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-3/4 drop-shadow-[0_24px_40px_rgba(139,11,24,0.25)]"
            >
              <RollArt className="w-full" />
            </motion.div>
          </motion.div>

          <Seal className="absolute -bottom-7 -left-6 size-32 rounded-full bg-brand p-2 text-cream shadow-xl md:-left-10" />
        </div>
      </div>
    </section>
  );
}
