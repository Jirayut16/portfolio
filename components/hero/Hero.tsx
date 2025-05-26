"use client";

import { useEffect, useState } from "react";
import AnimatedBackground from "../ui/AnimatedBackground";
import { TerminalHero } from "../ui/Terminal";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import { oxanium } from "../font/font";
import Link from "next/link";

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("terminalPlayed");

    if (!hasPlayed) {
      setShowTerminal(true);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setShowTerminal(false);
        document.body.style.overflow = "";
        localStorage.setItem("terminalPlayed", "true");
      }, 6200);
    }

    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        {showTerminal ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute -top-20 inset-0 z-[999] flex items-center justify-center p-8 sm:p-0 bg-background"
          >
            <TerminalHero />
          </motion.div>
        ) : (
          <div
            key="hero-content"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full"
          >
            {/* Left Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-black/30 z-20 sm:hidden"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 left-0 sm:left-10 z-10 w-full h-full rounded-none sm:rounded-full p-0 sm:p-20 "
              >
                <Image
                  src="/bannerpic.webp"
                  alt="my pic"
                  loading="eager"
                  priority
                  width={window.innerWidth < 640 ? 200 : 400}
                  height={window.innerHeight < 640 ? 200 : 400}
                  className="w-full h-full object-cover rounded-n sm:rounded-full sm:border-4 border-secondary/50 shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 left-10 bg-gradient-to-br from-destructive/20 via-primary/10 to-primary/20 animate-pulse blur-3xl w-full h-full rounded-full p-20"
              ></motion.div>
            </div>
            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col items-center justify-center space-y-12 sm:space-y-8 px-10 me-0 sm:me-14 absolute z-50 sm:relative @max-sm:w-full h-full"
            >
              <div>
                <h1
                  className={`${oxanium.className} text-7xl sm:text-6xl font-bold text-white sm:text-primary`}
                >
                  Hello, I&apos;m
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:hidden">
                <h1
                  className={`${oxanium.className} text-5xl font-bold text-white `}
                >
                  Jirayut
                </h1>
                <h1
                  className={`${oxanium.className} text-5xl font-bold text-white`}
                >
                  Sikkhacharoen
                </h1>
              </div>
              <span
                className={`${oxanium.className} text-5xl font-bold hidden sm:block`}
              >
                Jirayut Sikkhacharoen
              </span>
              <div className="flex justify-center w-full p-2 mt-4 border-t-2 border-primary">
                <p className="text-xl font-extralight sm:text-lg sm:font-normal text-gray-100">
                  I&apos;m a passionate Web Developer with a love for creating
                  beautiful and functional applications. I constantly strive to
                  learn new technologies and tools to improve my skills and
                  deliver better solutions.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="cursor-pointer">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button className="cursor-pointer">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
