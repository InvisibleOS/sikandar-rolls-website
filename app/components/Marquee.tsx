import Star from "./Star";

const PHRASES = [
  "Flame-Grilled",
  "Hand-Rolled",
  "Royally Spiced",
  "Freshly Wrapped",
  "Charcoal-Kissed",
  "Made to Order",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max">
      <ul
        className={`flex shrink-0 items-center ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {[...PHRASES, ...PHRASES].map((p, i) => (
          <li key={i} className="flex items-center">
            <span className="px-6 font-display text-3xl font-medium uppercase tracking-wide text-cream md:text-5xl">
              {p}
            </span>
            <Star className="size-5 text-gold md:size-7" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      data-nav-dark
      className="relative overflow-hidden border-y-2 border-brand-deep/25 bg-brand py-5 shadow-[0_24px_50px_-24px_rgba(139,11,24,0.6)] md:py-7"
    >
      <Row />
    </section>
  );
}
