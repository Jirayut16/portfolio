"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/utils/navbarItems";
import Link from "next/link";

const sidebarVariants = {
  open: {
    clipPath: "circle(1200px at 350px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(25px at 390px 40px)", //x,y
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const linkContainerVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const Links = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-16"
      variants={linkContainerVariants}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          className="text-5xl"
          variants={linkItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(item.href)
                ?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ToggleButton = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="z-[999] flex justify-center items-center fixed top-5 right-5 w-10 h-10 rounded-full bg-transparent border-none cursor-pointer"
    >
      <svg width="20" height="25" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  // Lock scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup: in case component unmounts while open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <motion.div
      className="flex md:hidden flex-col items-center justify-center text-black"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="z-[999] fixed top-0 bottom-0 w-full h-screen bg-white"
        variants={sidebarVariants}
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
