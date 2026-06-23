"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const SLIDES = [
  { src: "/hero/grill.jpg", alt: "Skewers of spiced meat flame-grilling over open coals" },
  { src: "/hero/platter.jpg", alt: "A royal spread of grilled kebabs and skewers" },
  { src: "/hero/street-food.jpg", alt: "Sikandar-style street food served fresh and hot" },
  { src: "/hero/biryani.jpg", alt: "Fragrant biryani plated on regal red velvet" },
  { src: "/hero/ambiance.jpg", alt: "The Sikandar dining experience" },
] as const;

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="animate-kenburns object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Brand-tinted darkening for headline legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(40,4,9,0.58) 0%, rgba(74,6,14,0.5) 45%, rgba(18,2,5,0.8) 100%)",
        }}
      />
      {/* Soft centre vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_55%,transparent,rgba(20,2,5,0.6))]" />
    </div>
  );
}
