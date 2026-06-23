"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  life: number;
  maxLife: number;
  hue: number;
  drift: number;
};

const COLORS = ["#cc1024", "#e6202f", "#ff7a2f", "#e0a85b", "#ff2f3f"];

export default function EmberCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const embers: Ember[] = [];
    let raf = 0;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (): Ember => {
      const maxLife = 180 + Math.random() * 220;
      return {
        x: Math.random() * w,
        y: h + Math.random() * 60,
        r: 0.6 + Math.random() * 2.6,
        vy: 0.3 + Math.random() * 1.1,
        vx: (Math.random() - 0.5) * 0.3,
        life: 0,
        maxLife,
        hue: Math.floor(Math.random() * COLORS.length),
        drift: Math.random() * Math.PI * 2,
      };
    };

    const target = () => Math.min(110, Math.floor(w / 12));

    const tick = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      while (embers.length < target()) embers.push(spawn());

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.life++;
        e.y -= e.vy;
        e.x += e.vx + Math.sin(t + e.drift) * 0.35;

        const p = e.life / e.maxLife;
        const alpha = Math.sin(p * Math.PI) * 0.85;

        if (p >= 1 || e.y < -20) {
          embers[i] = spawn();
          continue;
        }

        const color = COLORS[e.hue];
        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
        glow.addColorStop(0, color);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalAlpha = alpha * 0.5;
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
