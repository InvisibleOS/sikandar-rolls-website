type StarProps = React.SVGProps<SVGSVGElement>;

/** Six-pointed "Sikandar" spark — the brand motif from the storefront. */
export default function Star({ className, ...props }: StarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M50 2 L57.5 37 L91.57 26 L65 50 L91.57 74 L57.5 63 L50 98 L42.5 63 L8.43 74 L35 50 L8.43 26 L42.5 37 Z" />
    </svg>
  );
}
