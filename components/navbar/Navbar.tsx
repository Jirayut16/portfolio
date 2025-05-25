"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScroll } from "@/lib/hooks/use-scroll";
import { useEffect, useState } from "react";
import { caveat } from "../font/font";
import { navItems } from "@/utils/navbarItems";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  console.log(activeSection);

  useEffect(() => {
    // ตรวจสอบส่วนเริ่มต้นเมื่อโหลดหน้า
    const checkInitialSection = () => {
      const homeSection = document.querySelector("#home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          setActiveSection(""); // ไม่ไฮไลต์เมื่ออยู่ใน Hero
        }
      }
    };
    checkInitialSection();

    // ตั้งค่า IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        let sectionInView = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionInView = entry.target.id;
          }
        });
        setActiveSection(sectionInView);
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrolled = useScroll(50);

  return (
    <header
      className={cn(
        "sticky z-50 transition-all transform-gpu will-change-transform duration-1000 ease-in-out hidden md:block",
        scrolled
          ? "bg-background/80 w-1/3 left-1/2 -translate-x-1/2 backdrop-blur-md top-2 border-2 border-foreground/10 rounded-full scale-90"
          : "bg-transparent w-full top-0 left-0 translate-x-0 duration-1000 ease-in-out"
      )}
    >
      <div
        className={`${scrolled ? "flex items-center justify-center px-4" : "flex items-center justify-between px-4"} container mx-auto h-16`}
      >
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={cn(
              `${caveat.className} font-bold text-lg sm:text-4xl hover:text-primary transition-colors `,
              scrolled ? "text-primary hidden" : "text-foreground "
            )}
          >
            &lt; OhmmiiDev / &gt;
          </motion.span>
        </Link>
        <nav className="hidden md:flex gap-12">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "hover:text-primary transition-colors ",
                  scrolled
                    ? "text-primary text-base font-semibold hover:text-destructive after:scale-x-150 "
                    : "text-foreground text-xl",
                  activeSection === item.href.slice(1) &&
                    "text-destructive font-bold after:absolute relative after:-bottom-1 after:left-0 after:w-full after:rounded-2xl after:h-0.5 after:bg-primary after:scale-x-80 after:transition-transform after:duration-500"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
