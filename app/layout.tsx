import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sikandar Rolls — Flame-Grilled Rolls, Royally Yours",
  description:
    "Sikandar Rolls — hand-rolled, flame-grilled kathi rolls crafted with royal spice. A modern street-food legend in the heart of the city.",
  keywords: [
    "Sikandar Rolls",
    "kathi rolls",
    "kebab rolls",
    "street food",
    "flame grilled",
    "Bangalore restaurant",
  ],
  openGraph: {
    title: "Sikandar Rolls — Flame-Grilled Rolls, Royally Yours",
    description:
      "Hand-rolled, flame-grilled kathi rolls crafted with royal spice.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#cc1024",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${geist.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
