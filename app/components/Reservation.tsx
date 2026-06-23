"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import Star from "./Star";

const INFO = [
  { k: "Find us", v: "UB City, Vittal Mallya Road, Bengaluru 560001" },
  { k: "Open daily", v: "11:00 AM — 1:00 AM" },
  { k: "Reservations", v: "+91 98765 43210" },
];

export default function Reservation() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="visit"
      data-nav-dark
      className="relative overflow-hidden bg-brand py-24 text-cream md:py-36"
    >
      <div className="dots-cream absolute inset-0 opacity-[0.05]" />
      <Star className="animate-spin-slow absolute -right-10 top-10 size-40 text-cream/[0.06]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:gap-10">
        <div>
          <Reveal className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            <Star className="size-3.5" />
            Pull up a chair
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-semibold leading-[1.03] md:text-6xl">
              Come for the roll,
              <br />
              stay for the ritual.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md font-serif text-lg italic text-cream/85">
              Reserve a table under the red-and-white canopy, or just follow the
              scent of charcoal. We&apos;ll keep a roll warm.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {INFO.map((d, i) => (
              <Reveal
                key={d.k}
                delay={0.14 + i * 0.06}
                className="flex items-baseline gap-5 border-t border-cream/20 pt-5"
              >
                <span className="w-32 shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/60">
                  {d.k}
                </span>
                <span className="font-serif text-lg md:text-xl">{d.v}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* form card */}
        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] bg-cream p-8 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-brand text-cream">
                    <Star className="size-8" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl text-brand">
                    Table requested!
                  </h3>
                  <p className="mt-3 max-w-xs text-ink-soft">
                    Our team will text you a confirmation shortly. Get those
                    taste buds ready.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-brand underline-offset-4 hover:underline"
                  >
                    Book another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    Book a table
                  </h3>
                  <Field label="Full name" type="text" placeholder="Your name" />
                  <Field
                    label="Phone"
                    type="tel"
                    placeholder="+91 ..."
                  />
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                        Guests
                      </label>
                      <select
                        required
                        defaultValue="2"
                        className="border-b border-brand/25 bg-transparent py-2 text-base outline-none focus:border-brand"
                      >
                        {["1", "2", "3", "4", "5", "6+"].map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <Field label="When" type="datetime-local" />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-hot
                    className="mt-2 w-full rounded-full bg-brand px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-cream shadow-[0_14px_30px_-12px_rgba(204,16,36,0.8)] transition-colors hover:bg-brand-bright"
                  >
                    Reserve my table
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
        {label}
      </label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="border-b border-brand/25 bg-transparent py-2 text-base outline-none placeholder:text-ink/30 focus:border-brand"
      />
    </div>
  );
}
