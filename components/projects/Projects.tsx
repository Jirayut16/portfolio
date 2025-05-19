"use client";
import Image from "next/image";
import { projectData } from "@/utils/projectData";
import { useState } from "react";
import { oxanium } from "../font/font";
import Link from "next/link";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = projectData.slice(startIndex, endIndex);

  return (
    <section id="projects" className="container mx-auto py-10">
      <div className="flex flex-col space-y-6">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-[300px]"
          >
            {/* Image Section*/}
            <div className="w-full md:w-[400px] h-full relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header */}
              <div className="mb-4">
                <h2
                  className={`${oxanium.className} text-2xl font-bold text-primary mb-2`}
                >
                  {item.name}
                </h2>
                <p className="text-sm font-semibold text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Features:</h3>
                <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags and Links */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                <div className="flex flex-wrap gap-1">
                  {item.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {item.github && (
                    <Link
                      href={item.github}
                      target="_blank"
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-xs font-medium"
                    >
                      GitHub
                    </Link>
                  )}
                  {item.demo && (
                    <Link
                      href={item.demo}
                      target="_blank"
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-xs font-medium"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 bg-primary/10 text-primary rounded-lg disabled:opacity-50 hover:bg-primary/20 transition-colors text-sm"
        >
          Previous
        </button>
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-primary/10 text-primary rounded-lg disabled:opacity-50 hover:bg-primary/20 transition-colors text-sm"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
