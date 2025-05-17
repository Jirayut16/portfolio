"use client";

import { useEffect, useState } from "react";
import AnimatedBackground from "../ui/AnimatedBackground";
import { TerminalHero } from "../ui/Terminal";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import { oxanium } from "../font/font";

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
            className="absolute -top-20 inset-0 z-20 flex items-center justify-center"
          >
            <TerminalHero />
          </motion.div>
        ) : (
          <motion.div
            key="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 h-full items-center relative z-10 px-4"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-red-400 dark:bg-secondary/50 items-center justify-center space-y-8 p-4 mx-16 rounded-lg shadow-lg"
            >
              <h1
                className={`${oxanium.className} text-4xl font-bold text-primary`}
              >
                Hello, I&apos;m{" "}
                <span className="text-white">Jirayut Sikkhacharoen</span>
              </h1>
              <p className="text-lg text-gray-100 mt-4">
                I&apos;m a passionate developer with a love for creating
                beautiful and functional web applications. I specialize in
                front-end development and have experience with various
                technologies.
              </p>
              <div className="flex gap-4">
                <Button>Contact Me</Button>
                <Button>Download CV</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative h-full p-4 mx-16"
            >
              <Image
                src="/3DMarque/1.png"
                alt="my pic"
                loading="eager"
                priority
                width={640}
                height={640}
                className="absolute -top-50 left-0 w-full h-full scale-150 object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
