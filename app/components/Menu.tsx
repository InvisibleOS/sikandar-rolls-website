import MenuCard, { type Roll } from "./MenuCard";
import Reveal from "./Reveal";
import Star from "./Star";

const ROLLS: Roll[] = [
  {
    no: "01",
    name: "The Sikandar Special",
    desc: "Double charcoal chicken, smoked mayo, burnt-garlic chutney and crisp onion in a flaky paratha.",
    price: "₹240",
    heat: 3,
    tag: "House Legend",
  },
  {
    no: "02",
    name: "Galouti Mutton Roll",
    desc: "Slow-cooked saffron mutton galouti that dissolves on the tongue, kissed with rose and kewra.",
    price: "₹260",
    heat: 2,
    tag: "Chef's Pick",
  },
  {
    no: "03",
    name: "Murgh Tikka Roll",
    desc: "Tandoor-charred chicken tikka, cooling mint yoghurt and a squeeze of smoked lime.",
    price: "₹190",
    heat: 2,
  },
  {
    no: "04",
    name: "Seekh Kebab Roll",
    desc: "Hand-minced lamb seekh off the skewer, ribboned with pickled onion and green chutney.",
    price: "₹230",
    heat: 3,
  },
  {
    no: "05",
    name: "Paneer Lahori Roll",
    desc: "Smoky chargrilled paneer, roasted pepper and a whisper of Lahori chili masala.",
    price: "₹180",
    heat: 2,
  },
  {
    no: "06",
    name: "Anda Masaledar",
    desc: "Twin eggs folded into house masala with caramelised onions — the morning-after hero.",
    price: "₹150",
    heat: 1,
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-cream-deep py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
              <Star className="size-3.5" />
              Signature Rolls
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl font-semibold leading-[1.02] text-ink md:text-6xl">
                The royal lineup
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-serif text-lg italic text-ink-soft">
              Six wraps that built the legend. Every one grilled over open coal,
              rolled the second you order.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROLLS.map((roll, i) => (
            <MenuCard key={roll.no} roll={roll} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
