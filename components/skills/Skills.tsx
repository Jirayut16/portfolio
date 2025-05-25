"use client";
import { skillsData } from "@/utils/skill";
import Image from "next/image";
import { oxanium } from "../font/font";
import { ShineBorder } from "../magicui/shine-border";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Skills = () => {
  const getVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  });
  return (
    <section
      id="skills"
      className="container mx-auto min-h-screen py-4 sm:py-10 px-4"
    >
      <motion.div className="flex flex-col space-y-4 sm:space-y-8 ">
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            variants={getVariants(index)}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-8 "
          >
            <p
              className={`${oxanium.className} @max-sm:w-full sm:col-span-4 p-2 sm:p-8 text-2xl text-center`}
            >
              {item.category}:
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-8">
              {item.skills.map((skill) => (
                <TooltipProvider key={skill.name}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        key={skill.name}
                        className="relative p-2 rounded-lg bg-gray-100 w-14 sm:w-16 h-14 sm:h-16 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                      >
                        <ShineBorder
                          shineColor={[
                            "#fe00c7",
                            "#20fecc",
                            "#ffe713",
                            "#fc3f09",
                          ]}
                          borderWidth={3}
                          duration={12}
                        />

                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
