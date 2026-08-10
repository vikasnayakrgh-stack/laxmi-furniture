import { Playfair_Display, Inter } from "next/font/google";

export const fontHead = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-head",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
