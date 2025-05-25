"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { oxanium } from "../font/font";

export default function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: scrollYProgressMobile } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], ["100%", "30%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yMeteor = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yMeteorMB = useTransform(scrollYProgressMobile, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "30%"]);
  return (
    <div
      ref={ref}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      <motion.h1
        style={{ y: yText, scale: textScale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={`${oxanium.className} text-white text-5xl md:text-7xl font-bold z-50`}
      >
        About me
      </motion.h1>
      <motion.div className="absolute inset-0 bg-black/30 z-10"></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src={"/parallax-mb2.webp"}
          alt={"parallax"}
          width={800}
          height={800}
          className={"object-cover w-full h-full block sm:hidden"}
        />
        <Image
          src={"/parallax.webp"}
          alt={"parallax"}
          width={800}
          height={800}
          className={"object-cover w-full h-full sm:block hidden"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        style={{
          x: yBg,
          y: yMeteor,
          scale: scale,
          transition: "all 0.3s ease-in-out",
        }}
        viewport={{ once: true }}
        className="absolute inset-0 hidden sm:block"
      >
        <Image
          src={"/meteor.png"}
          alt={"parallax"}
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </motion.div>
      {/* meteor mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        style={{
          x: yBg,
          y: yMeteorMB,
          scale: scale,
          transition: "all 0.3s ease-in-out",
        }}
        viewport={{ once: true }}
        className="absolute inset-0 block sm:hidden"
      >
        <Image src={"/meteor.png"} alt={"parallax"} width={800} height={800} />
      </motion.div>
    </div>
  );
}
