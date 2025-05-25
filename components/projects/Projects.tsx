"use client";
import Image from "next/image";
import { projectData } from "@/utils/projectData";
import { useState } from "react";
import { oxanium } from "../font/font";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [prevLoading, setPrevLoading] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const currentItems = projectData.slice(startIndex, endIndex);
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const handleNextPage = async () => {
    if (currentPage < totalPages && !nextLoading) {
      setNextLoading(true);
      await delay(500);
      setCurrentPage((prevPage) => prevPage + 1);
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setNextLoading(false);
    }
  };

  const handlePrevPage = async () => {
    if (currentPage > 1 && !prevLoading) {
      setPrevLoading(true);
      await delay(500);
      setCurrentPage((prevPage) => prevPage - 1);
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setPrevLoading(false);
    }
  };

  return (
    <section
      id="projects"
      className="container mx-auto py-8 sm:py-10 px-4 sm:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col space-y-6 sm:space-y-8"
      >
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all min-h-[300px] md:h-[300px]"
          >
            {/* Image Section*/}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 * index }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-[400px] h-[200px] md:h-full relative"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-center sm:object-contain sm:p-4 "
                priority
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 * index }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex-1 p-4 sm:p-6 flex flex-col"
            >
              {/* Header */}
              <div className="mb-3 sm:mb-4">
                <h2
                  className={`${oxanium.className} text-xl sm:text-2xl font-bold text-primary mb-2`}
                >
                  {item.name}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  Features:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-1">
                  {item.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 sm:gap-2"
                    >
                      <span className="text-primary">•</span>
                      <span className="text-xs sm:text-sm text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags and Links */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 space-y-2 sm:space-y-0 border-t border-gray-700">
                <div className="flex flex-wrap gap-1">
                  {item.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 sm:py-1 bg-accent/10 text-accent rounded-full text-[10px] sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  {item.github && (
                    <Link
                      href={item.github}
                      target="_blank"
                      className="flex-1 sm:flex-none text-center px-3 py-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-xs font-medium"
                    >
                      GitHub
                    </Link>
                  )}
                  {item.demo && (
                    <Link
                      href={item.demo}
                      target="_blank"
                      className="flex-1 sm:flex-none text-center px-3 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-xs font-medium"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8">
        <button
          disabled={currentPage === 1 || prevLoading}
          onClick={handlePrevPage}
          className="px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-lg disabled:opacity-50 hover:bg-primary/20 transition-colors text-xs sm:text-sm cursor-pointer"
        >
          {prevLoading ? "Loading..." : "Previous"}
        </button>
        <span className="text-xs sm:text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages || nextLoading}
          onClick={handleNextPage}
          className="px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-lg disabled:opacity-50 hover:bg-primary/20 transition-colors text-xs sm:text-sm cursor-pointer"
        >
          {nextLoading ? "Loading..." : "Next"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
