"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Star from "./Star";
import Wordmark from "./Wordmark";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Signatures", href: "#menu" },
  { label: "The Roll", href: "#signature" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [onDark, setOnDark] = useState(true);
  const [open, setOpen] = useState(false);

  // Two states: dark (over a red/dark section) → white; light (over pale
  // sections) → ink. A section is "dark" if it carries data-nav-dark.
  const updateNav = useCallback(() => {
    const header = document.querySelector("header");
    const line = header ? header.offsetHeight / 2 : 34;
    setOnDark(
      [...document.querySelectorAll("[data-nav-dark]")].some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= line && r.bottom > line;
      }),
    );
  }, []);

  useMotionValueEvent(scrollY, "change", updateNav);
  useEffect(() => {
    const id = requestAnimationFrame(updateNav);
    return () => cancelAnimationFrame(id);
  }, [updateNav]);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[80]"
      >
        <nav className="flex w-full items-center justify-between bg-transparent px-6 py-4 md:px-10">
          <a href="#top" className="group flex items-center gap-2.5">
            <motion.span
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className={`transition-colors duration-300 ${
                onDark ? "text-cream" : "text-ink"
              }`}
            >
              <Star className="size-6" />
            </motion.span>
            <Wordmark
              tracking="tracking-[0.02em]"
              className={`text-3xl transition-colors duration-300 ${
                onDark ? "text-cream" : "text-brand"
              }`}
            />
          </a>

          <div className="flex items-center gap-8 md:gap-10">
            <ul className="hidden items-center gap-9 md:flex">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`group relative text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 hover:text-brand ${
                      onDark ? "text-cream/90" : "text-ink-soft"
                    }`}
                  >
                    {l.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#visit"
              className="hidden rounded-md bg-brand px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-brand-bright md:block"
            >
              Contact Us
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`flex size-10 flex-col items-center justify-center gap-1.5 rounded-md transition-colors duration-500 md:hidden ${
                onDark ? "bg-cream/15" : "bg-brand/10"
              }`}
            >
              <span
                className={`h-0.5 w-5 rounded transition-colors duration-500 ${
                  onDark ? "bg-cream" : "bg-brand"
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded transition-colors duration-500 ${
                  onDark ? "bg-cream" : "bg-brand"
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex flex-col bg-brand text-cream md:hidden"
          >
            <div className="dots-cream absolute inset-0 opacity-[0.06]" />
            <div className="relative flex items-center justify-between px-6 pt-6">
              <Wordmark tracking="tracking-[0.02em]" className="text-lg" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex size-10 items-center justify-center rounded-full bg-cream/15 text-2xl"
              >
                ×
              </button>
            </div>
            <ul className="relative flex flex-1 flex-col justify-center gap-3 px-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl tracking-wide"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="relative m-6 rounded-md bg-cream px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-brand"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
