"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { oxanium } from "../font/font";

export default function ParallaxSkills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Phase 1: Zoom รูป
  const scale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scaleStars = useTransform(scrollYProgress, [0.3, 0.6], [0, 1.2]);

  // Phase 2: Fade รูปออก
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 0.5, 1]
  );

  // Phase 3: Fade Text เข้ามา
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.8], [50, 0]);

  return (
    <>
      <section ref={ref} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-transparent">
          {/* Zooming Image */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              scale,
              opacity: imageOpacity,
              transition: "0.3s ease-in-out",
            }}
          >
            <div className="absolute inset-0 z-0 bg-black/30"></div>
            <Image
              src={"/space.webp"}
              alt="space"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              scale: scaleStars,
              opacity: imageOpacity,
              transition: "0.4s ease-in-out",
            }}
          >
            <Image
              src={"/stars.png"}
              alt="stars"
              width={800}
              height={800}
              className="w-full object-cover"
            />
          </motion.div>

          {/* Fading Text */}
          <motion.div
            className="absolute text-center px-8 text-white"
            style={{
              opacity: textOpacity,
              y: textY,
              transition: "0.3s ease-in-out",
            }}
          >
            <h1
              className={`${oxanium.className} text-5xl md:text-7xl font-bold`}
            >
              My Skills
            </h1>
          </motion.div>
        </div>
      </section>
    </>
  );
}
