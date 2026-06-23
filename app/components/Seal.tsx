import Star from "./Star";

type Props = { className?: string; label?: string };

/** Rotating circular stamp — an editorial brand seal. */
export default function Seal({
  className,
  label = "SIKANDAR ROLLS · FLAME-GRILLED · EST. BENGALURU · ",
}: Props) {
  // Keep the "O" in ROLLS italic, in line with the wordmark treatment.
  const rolls = label.indexOf("ROLLS");

  return (
    <div className={className}>
      <div className="relative aspect-square">
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slow h-full w-full text-current"
        >
          <defs>
            <path
              id="seal-curve"
              d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
              fill="none"
            />
          </defs>
          <text
            fill="currentColor"
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <textPath href="#seal-curve" startOffset="0">
              {rolls === -1 ? (
                label
              ) : (
                <>
                  {label.slice(0, rolls + 1)}
                  <tspan fontStyle="italic">O</tspan>
                  {label.slice(rolls + 2)}
                </>
              )}
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <Star className="size-9 text-current" />
        </span>
      </div>
    </div>
  );
}
