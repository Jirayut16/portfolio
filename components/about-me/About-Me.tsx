"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShineBorder } from "../magicui/shine-border";
import { oxanium } from "../font/font";

const AboutMe = () => {
  return (
    <section
      className="container mx-auto min-h-[calc(100vh-4rem)] py-10 sm:py-20 px-4"
      id="aboutme"
    >
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column - Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-[500px] mx-auto overflow-hidden rounded-full">
          <ShineBorder
            shineColor={["#fe00c7", "#20fecc", "#ffe713", "#fc3f09"]}
            borderWidth={4}
            duration={10}
          />
          <Image
            src="/mypic2.webp"
            alt="My Image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-4 sm:space-y-6 px-2 sm:px-4">
          <h2
            className={`${oxanium.className} text-3xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-center md:text-left`}
          >
            About Me
          </h2>

          <div className="space-y-3 sm:space-y-4 text-foreground">
            <p className="text-base sm:text-lg leading-relaxed">
              Hello, I&apos;m Ohm I&apos;m a self-driven developer who recently
              transitioned into the tech industry. Though I may be new to the
              field, I&apos;m deeply passionate about web development and
              continuously strive to improve through hands-on learning and
              building real projects. I believe in lifelong learning and always
              look for opportunities to grow, explore new technologies, and
              challenge myself.
            </p>

            <div className="pt-2 sm:pt-4">
              <h3
                className={`${oxanium.className} text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3`}
              >
                I love to:
              </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Build responsive and accessible web applications</li>
                <li>Designing with a user-first mindset</li>
                <li>Learn new technologies and best practices</li>
                <li>Learn from experienced developers</li>
                <li>Solve complex problems</li>
                <li>Always stay up-to-date with industry trends</li>
              </ul>
            </div>
            <h4
              className={`${oxanium.className} text-lg sm:text-xl text-center font-bold text-foreground mt-4 sm:mt-6 mb-2`}
            >
              &quot;I&apos;m always learning and improving, and I&apos;m excited
              to continue my journey in the world of web development.&quot;
            </h4>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
