"use client";

import { motion } from "motion/react";
import Star from "./Star";
import Wordmark from "./Wordmark";

const COLS = [
  {
    head: "Explore",
    links: [
      { t: "Our Story", h: "#story" },
      { t: "Signature Rolls", h: "#menu" },
      { t: "The Anatomy", h: "#signature" },
      { t: "Reserve", h: "#visit" },
    ],
  },
  {
    head: "Visit",
    links: [
      { t: "UB City, Bengaluru", h: "#visit" },
      { t: "11 AM — 1 AM, daily", h: "#visit" },
      { t: "+91 98765 43210", h: "tel:+919876543210" },
    ],
  },
  {
    head: "Follow",
    links: [
      { t: "Instagram", h: "#" },
      { t: "Zomato", h: "#" },
      { t: "Swiggy", h: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-nav-dark
      className="relative flex min-h-[calc(100svh-68px)] flex-col overflow-hidden pt-20 text-cream"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, #5a0712 0%, #380510 55%, #220308 100%)",
      }}
    >
      <div className="dots-cream absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Star className="size-7 text-gold" />
              <Wordmark className="text-xl" />
            </div>
            <p className="mt-5 max-w-xs font-serif text-lg italic text-cream/70">
              Royally spiced, flame-grilled rolls — wrapped fresh since the
              first spark.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.head}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                {c.head}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.t}>
                    <a
                      href={l.h}
                      className="group inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-cream"
                    >
                      <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                      {l.t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* giant wordmark */}
        <a href="#top" className="block">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-outline-cream select-none text-center font-display text-[18vw] font-semibold uppercase leading-[0.8] tracking-tighter md:text-[15vw]"
          >
            SIKANDAR R<span className="italic">O</span>LLS
          </motion.h2>
        </a>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/15 py-8 text-xs text-cream/60 md:flex-row">
          <p>© 2026 Sikandar Rolls. Crafted with fire & a little mischief.</p>
          <a
            href="#top"
            className="flex items-center gap-2 uppercase tracking-[0.18em] transition-colors hover:text-cream"
          >
            Back to top
            <span className="inline-block rotate-[-90deg]">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
