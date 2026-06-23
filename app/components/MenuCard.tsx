"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export type Roll = {
  no: string;
  name: string;
  desc: string;
  price: string;
  heat: number;
  tag?: string;
};

export default function MenuCard({ roll, index }: { roll: Roll; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 14);
    rx.set((0.5 - py) * 14);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      style={{ perspective: 1000 }}
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-brand/12 bg-paper p-7 shadow-[0_18px_50px_-30px_rgba(139,11,24,0.45)] transition-shadow hover:shadow-[0_30px_70px_-30px_rgba(139,11,24,0.55)]"
      >
        <div className="relative flex items-start justify-between">
          <span className="font-display text-3xl text-brand/30">{roll.no}</span>
          {roll.tag && (
            <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cream">
              {roll.tag}
            </span>
          )}
        </div>

        <div className="relative mt-10">
          <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
            {roll.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {roll.desc}
          </p>
        </div>

        <div className="relative mt-7 flex items-end justify-between border-t border-brand/10 pt-5">
          <div className="flex items-center gap-1.5">
            <span className="mr-1 text-[10px] uppercase tracking-[0.16em] text-ink-soft">
              Heat
            </span>
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className={`size-2 rounded-full ${
                  i < roll.heat ? "bg-brand" : "bg-brand/15"
                }`}
              />
            ))}
          </div>
          <span className="font-display text-2xl font-semibold text-brand">
            {roll.price}
          </span>
        </div>
      </motion.article>
    </motion.div>
  );
}
