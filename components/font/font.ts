import { Caveat, Oxanium } from "next/font/google";

export const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oxanium",
  display: "swap",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
  display: "swap",
});
