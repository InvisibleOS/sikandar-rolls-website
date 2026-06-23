"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

/**
 * Intercepts clicks on in-page (#hash) links and smoothly scrolls to the
 * target via Lenis, offsetting for the fixed navbar so the section isn't
 * hidden underneath it.
 */
function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (e: MouseEvent) => {
      // Let modified clicks (open in new tab, etc.) behave normally.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;

      const link = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash.length < 2) return; // ignore bare "#" placeholders

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      // Stop 4px past the section's top, so (e.g.) Story lands right after the
      // marquee rather than under it. The navbar is transparent, so no
      // navbar-height offset is needed.
      lenis.scrollTo(target as HTMLElement, { offset: 4, duration: 1.1 });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
