"use client";

import { images } from "@/utils/parallax-project-image";
import { oxanium } from "../font/font";
import { ThreeDMarquee } from "../magicui/3d-marquee";

export default function ParallaxProject() {
  return (
    <div className="flex justify-center items-center w-full h-screen relative">
      <div className="absolute inset-0 bg-black"></div>
      <ThreeDMarquee images={images} />
      <h1
        className={`${oxanium.className} w-full text-6xl text-center sm:text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
      >
        My Projects
      </h1>
    </div>
  );
}
