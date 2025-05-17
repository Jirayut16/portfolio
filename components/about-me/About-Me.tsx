"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShineBorder } from "../magicui/shine-border";
import { oxanium } from "../font/font";

const AboutMe = () => {
  return (
    <section className="container mx-auto min-h-screen py-20 px-4" id="aboutme">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Column - Image */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-full">
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
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${oxanium.className} text-4xl font-bold text-foreground mb-4`}
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 text-foreground"
          >
            {/* <p className="text-lg">
              Welcome to my portfolio! I&apos;m a passionate web developer with a
              strong focus on front-end development. With a strong foundation in
              HTML, CSS, and JavaScript, I specialize in creating visually
              stunning and user-friendly web applications.
            </p> */}
            <p className="text-lg">
              Hello, I&apos;m Ohm I&apos;m a self-driven developer who recently
              transitioned into the tech industry. Though I may be new to the
              field, I&apos;m deeply passionate about web development and
              continuously strive to improve through hands-on learning and
              building real projects. I believe in lifelong learning and always
              look for opportunities to grow, explore new technologies, and
              challenge myself.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3
                className={`${oxanium.className} text-2xl font-bold text-foreground mb-2`}
              >
                I love to:
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Build responsive and accessible web applications</li>
                <li>Designing with a user-first mindset</li>
                <li>Learn new technologies and best practices</li>
                <li>Learn from experienced developers</li>
                <li>Solve complex problems</li>
                <li>Always stay up-to-date with industry trends</li>
              </ul>
            </motion.div>
            <h4
              className={`${oxanium.className} text-xl text-center font-bold text-foreground mb-2`}
            >
              &quot;I&apos;m always learning and improving, and I&apos;m excited
              to continue my journey in the world of web development.&quot;
            </h4>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
