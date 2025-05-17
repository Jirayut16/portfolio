"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ translateY: -90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute"
        >
          {isDark ? (
            <Moon className="w-6 h-6 text-yellow-400" />
          ) : (
            <Sun className="w-6 h-6 text-orange-500" />
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
