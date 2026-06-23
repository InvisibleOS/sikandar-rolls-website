"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import Star from "./Star";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 1.2, decimals: 1, suffix: "M+", label: "Rolls served & counting" },
  { value: 12, suffix: " yrs", label: "Tending the same flame" },
  { value: 4.9, decimals: 1, suffix: "★", label: "Across 9,000 reviews" },
  { value: 27, suffix: "", label: "Spices in the secret blend" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return (
    <span ref={ref} className="font-display text-5xl font-semibold text-brand md:text-7xl">
      {stat.prefix}
      {val.toFixed(stat.decimals ?? 0)}
      {stat.suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 md:grid-cols-4 md:gap-0">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center px-4 text-center ${
              i !== 0 ? "md:border-l md:border-brand/15" : ""
            }`}
          >
            <Star className="mb-4 size-4 text-brand/40" />
            <Counter stat={s} />
            <p className="mt-3 max-w-[14ch] text-sm leading-snug text-ink-soft">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
