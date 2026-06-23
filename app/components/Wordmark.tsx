type Props = {
  className?: string;
  /** Letter-spacing utility. Defaults to the tightest brand setting; loosen
   *  only where readability needs it (e.g. the small navbar lockup). */
  tracking?: string;
};

/**
 * The "SIKANDAR ROLLS" wordmark — the brand is always written in full, always
 * uppercase, with tight letter-spacing, and the "O" in ROLLS always italic.
 * "ROLLS" wraps onto the next line only when space requires it (the single
 * space between the two words is the only break point).
 */
export default function Wordmark({
  className = "",
  tracking = "tracking-tighter",
}: Props) {
  return (
    <span className={`font-display uppercase ${tracking} ${className}`}>
      SIKANDAR R<span className="italic">O</span>LLS
    </span>
  );
}
