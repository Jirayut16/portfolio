"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScroll } from "@/lib/hooks/use-scroll";
import { ThemeToggle } from "@/components/theme-toggle";
import { CodeXml } from "lucide-react";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}
const navItems: NavItem[] = [
  { name: "About Me", href: "#aboutme" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

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
        "sticky z-40 transition-all duration-700 ease-in-out",
        scrolled
          ? "bg-primary-foreground/80 dark:bg-background/80 w-1/2 backdrop-blur-md top-2 translate-x-1/2 border-2 border-foreground/10 rounded-full"
          : "bg-primary-foreground dark:bg-transparent w-full top-0 left-0 translate-x-0 border dark:border-none"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CodeXml
              className={cn(
                "h-6 w-6 sm:h-8 sm:w-8",
                scrolled ? "text-primary hidden" : "text-foreground"
              )}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={cn(
              "font-bold text-lg sm:text-2xl",
              scrolled ? "text-primary hidden" : "text-foreground"
            )}
          >
            Jirayut S.
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
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
