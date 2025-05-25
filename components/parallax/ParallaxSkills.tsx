"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { oxanium } from "../font/font";

export default function ParallaxSkills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: scrollYProgressMobile } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Phase 1: Zoom
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), {
    stiffness: 1000,
    damping: 30,
    restDelta: 2,
    restSpeed: 2,
  });
  const scaleStars = useSpring(
    useTransform(scrollYProgress, [0.3, 0.6], [0, 1.2]),
    {
      stiffness: 1000,
      damping: 30,
      restDelta: 2,
      restSpeed: 2,
    }
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 0.5, 1]
  );
  const xMeteorMB = useTransform(
    scrollYProgressMobile,
    [0.6, 1],
    ["0%", "-30%"]
  );
  const yMeteorMB = useTransform(
    scrollYProgressMobile,
    [0.3, 1],
    ["-30%", "20%"]
  );
  const scaleMeteor = useSpring(
    useTransform(scrollYProgress, [0.3, 0.6], [0, 0.5]),
    {
      stiffness: 1000,
      damping: 30,
      restDelta: 2,
      restSpeed: 2,
    }
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
              className="w-full h-full object-cover hidden sm:block"
            />
            {/* mobile */}
            <Image
              src={"/parallaxSkill-mb.jpg"}
              alt="space"
              width={400}
              height={400}
              className="w-full h-full object-cover block sm:hidden"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 z-0 hidden sm:block"
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

          {/* mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute inset-0 -top-150 -right-100 z-0 block sm:hidden overflow-hidden"
            style={{
              x: xMeteorMB,
              y: yMeteorMB,
              scale: scaleMeteor,
              opacity: imageOpacity,
              transition: "0.4s ease-in-out",
            }}
          >
            <Image
              src={"/meteor-mb.png"}
              alt="stars"
              width={400}
              height={400}
              className="w-full h-full object-contain"
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
