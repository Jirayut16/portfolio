"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  // Add spring physics to scrollYProgress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scaleX,
        }}
        className="fixed inset-x-0 top-0 z-50 h-2.5 origin-left bg-primary"
      />
    </>
  );
}
