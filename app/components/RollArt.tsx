import Image from "next/image";

type Props = { className?: string };

/** Photo of the signature Sikandar roll, wrapped in branded paper. */
export default function RollArt({ className }: Props) {
  return (
    <Image
      src="/roll.png"
      alt="A flame-grilled Sikandar roll wrapped in branded paper"
      width={848}
      height={1264}
      sizes="(max-width: 768px) 75vw, 40vw"
      className={`h-auto w-full ${className ?? ""}`}
    />
  );
}
