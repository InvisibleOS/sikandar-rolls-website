# Sikandar Rolls — Landing Page

A cinematic, animation-rich landing page for **Sikandar Rolls**, a flame-grilled
kathi-roll street-food brand. Built around the brand's red-and-white identity,
its six-pointed "spark" motif and the polka-dot canopy of the storefront.

## Highlights

- **Cinematic hero** — character-by-character headline reveal, parallax, a rising
  ember/spice particle field (Canvas 2D) and a glossy distorted "spice orb"
  rendered with **Three.js** (`@react-three/fiber` + `drei`).
- **Buttery scrolling** — smooth scroll via **Lenis**, a scroll-progress bar and
  scroll-linked parallax throughout.
- **Motion everywhere** — built with **Motion** (Framer Motion): scroll reveals,
  a magnetic cursor + magnetic buttons, an animated marquee, 3D-tilt menu cards,
  count-up statistics and an animated reservation flow.
- **Brand system** — custom red/cream palette, `Cinzel` display type to echo the
  storefront sign, `Cormorant Garamond` for editorial accents, `Geist` for UI.
- **Responsive & accessible** — full mobile layout with an overlay menu, and
  `prefers-reduced-motion` support.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) · React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (`motion/react`) · Lenis |
| 3D | Three.js · @react-three/fiber · @react-three/drei |
| Language | TypeScript |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx          # fonts + metadata
  globals.css         # brand tokens, utilities, keyframes
  page.tsx            # section composition
  components/
    SmoothScroll · Cursor · ScrollProgress
    Navbar · Hero · HeroScene (3D) · EmberCanvas
    Marquee · Story · Menu · MenuCard
    Signature · Stats · Reservation · Footer
    RollArt · Seal · Star · Reveal · MagneticButton
```

> Menu, pricing, address and contact details are placeholder content — swap in
> the real brand data and food photography before launch.
