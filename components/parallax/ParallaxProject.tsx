"use client";

import { oxanium } from "../font/font";
import { ThreeDMarquee } from "../magicui/3d-marquee";

export default function ParallaxProject() {
  const images = [
    "/3DMarque/1.png",
    "/3DMarque/2.png",
    "/3DMarque/3.png",
    "/3DMarque/4.png",
    "/3DMarque/5.png",
    "/3DMarque/6.png",
    "/3DMarque/1.png",
    "/3DMarque/2.png",
    "/3DMarque/3.png",
    "/3DMarque/4.png",
    "/3DMarque/5.png",
    "/3DMarque/6.png",
    "/3DMarque/1.png",
    "/3DMarque/2.png",
    "/3DMarque/3.png",
    "/3DMarque/4.png",
    "/3DMarque/5.png",
    "/3DMarque/6.png",
    "/3DMarque/1.png",
    "/3DMarque/2.png",
    "/3DMarque/3.png",
    "/3DMarque/4.png",
    "/3DMarque/5.png",
    "/3DMarque/6.png",
    "/3DMarque/1.png",
    "/3DMarque/2.png",
    "/3DMarque/3.png",
    "/3DMarque/4.png",
    "/3DMarque/5.png",
    "/3DMarque/6.png",
    "/3DMarque/1.png",
    "/3DMarque/2.png",
    "/3DMarque/3.png",
    "/3DMarque/4.png",
    "/3DMarque/5.png",
    "/3DMarque/6.png",
  ];
  return (
    <div className="flex justify-center items-center w-full h-screen relative">
      <div className="absolute inset-0 bg-black"></div>
      <ThreeDMarquee images={images} />
      <h1
        className={`${oxanium.className} text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50`}
      >
        My Projects
      </h1>
    </div>
  );
}
