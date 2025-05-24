"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed inset-x-0 top-0 z-50 h-2.5 origin-left bg-primary/80"
      />
    </>
  );
}
