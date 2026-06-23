type Props = { className?: string };

/** Stylised kathi-roll illustration, built to match the red & cream brand. */
export default function RollArt({ className }: Props) {
  return (
    <svg
      viewBox="0 0 320 430"
      className={className}
      role="img"
      aria-label="A flame-grilled Sikandar roll"
    >
      <defs>
        <linearGradient id="roti" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0d6a8" />
          <stop offset="0.55" stopColor="#e3bd84" />
          <stop offset="1" stopColor="#caa066" />
        </linearGradient>
        <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="1" stopColor="#efe4d2" />
        </linearGradient>
        <clipPath id="wrap-clip">
          <path d="M104 250 L216 250 L198 426 L122 426 Z" />
        </clipPath>
      </defs>

      {/* steam */}
      <g
        className="animate-float"
        stroke="#b80d20"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      >
        <path d="M138 52 q14 -18 0 -34" />
        <path d="M160 44 q16 -20 0 -38" />
        <path d="M182 52 q14 -18 0 -34" />
      </g>

      {/* roll body */}
      <rect
        x="116"
        y="70"
        width="88"
        height="240"
        rx="44"
        fill="url(#roti)"
        stroke="#a9763f"
        strokeWidth="2"
      />

      {/* char / grill marks */}
      <g stroke="#9a5a2c" strokeWidth="5" strokeLinecap="round" opacity="0.55">
        <path d="M132 120 l56 -10" />
        <path d="M130 156 l60 -10" />
        <path d="M132 196 l56 -10" />
        <path d="M134 236 l52 -9" />
      </g>

      {/* open top with filling */}
      <ellipse cx="160" cy="72" rx="44" ry="15" fill="#54281a" />
      <g>
        <circle cx="146" cy="70" r="8" fill="#c0341f" />
        <circle cx="172" cy="74" r="7" fill="#c0341f" />
        <circle cx="160" cy="66" r="6" fill="#3f7d3a" />
        <circle cx="178" cy="68" r="5" fill="#f2e6cf" />
        <circle cx="142" cy="78" r="4" fill="#e0a85b" />
      </g>

      {/* paper wrapper */}
      <path d="M104 250 L216 250 L198 426 L122 426 Z" fill="url(#paper)" />
      <g clipPath="url(#wrap-clip)" fill="#cc1024" opacity="0.85">
        <circle cx="124" cy="278" r="6" />
        <circle cx="158" cy="292" r="6" />
        <circle cx="192" cy="278" r="6" />
        <circle cx="140" cy="320" r="6" />
        <circle cx="176" cy="320" r="6" />
        <circle cx="158" cy="350" r="6" />
        <circle cx="132" cy="372" r="6" />
        <circle cx="186" cy="372" r="6" />
      </g>
      {/* wrapper top flap */}
      <path
        d="M104 250 L160 230 L216 250 Z"
        fill="#fffdf8"
        stroke="#e4d6bf"
        strokeWidth="1.5"
      />
    </svg>
  );
}
