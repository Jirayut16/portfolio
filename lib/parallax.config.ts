// app/components/parallax.config.ts
export type ParallaxType = "services" | "portfolio";

export const parallaxConfig: Record<
  ParallaxType,
  {
    text: string;
    backgroundGradient: string;
    image: string;
  }
> = {
  services: {
    text: "What We Do?",
    backgroundGradient: "from-[#111132] to-[#0c0c1d]",
    image: "/planets.png",
  },
  portfolio: {
    text: "What We Did?",
    backgroundGradient: "from-[#111132] to-[#505064]",
    image: "/sun.png",
  },
};
