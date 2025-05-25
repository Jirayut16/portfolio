"use client";
import { motion } from "framer-motion";
import { oxanium } from "../font/font";
import { Mail, MapPinned, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Image from "next/image";
const socialsImg = [
  {
    id: 1,
    img: "/GitHub.svg",
    link: "https://github.com/Jirayut16",
  },
  {
    id: 2,
    img: "/instagram.svg",
    link: "https://www.instagram.com/s_tuyarijmhooo",
  },
  {
    id: 3,
    img: "/gmail.svg",
    link: "mailto:jirayut.who@gmail.com",
  },
  {
    id: 4,
    img: "/line.svg",
    link: "https://line.me/ti/p/~0994891986",
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mx-auto py-10 sm:py-20  min-h-screen sm:h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full px-4 sm:px-0 relative">
        {/* Left col */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between pb-4 z-50"
        >
          <h1 className={`${oxanium.className} text-6xl font-bold `}>
            Let&apos;s work
            <p className="text-5xl mt-2">together!</p>
          </h1>

          <div>
            <p className="font-bold text-2xl mt-2 sm:mt-0">Contact Me:</p>
            <div className="flex flex-col space-y-4 sm:space-y-8 py-4">
              <div className="flex gap-4 items-center">
                <Phone className="w-8 h-8" />
                <p className="text-xl "> +66 99 489 1986</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-8 h-8" />
                <p className="text-xl "> Jirayut.who@gmail.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <MapPinned className="w-8 h-8" />
                <p className="text-xl "> Bangkok, Thailand.</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4"></div>
          </div>
          {/* Socials */}
          <div className="flex gap-4">
            {socialsImg.map((item) => (
              <div
                key={item.id}
                className="w-12 h-12 bg-gray-300 rounded-2xl p-1"
              >
                <Link href={item.link} target="_blank">
                  <Image
                    src={item.img}
                    alt=""
                    width={500}
                    height={500}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right col */}
        <div className="overflow-hidden">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="(max-width: 600px) 100%, 600px"
            height="600"
            viewBox="0 0 32 32"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 0.5 }} //หายออกไป
            viewport={{ once: true }}
            className={
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            }
          >
            <motion.path
              stroke="white"
              fill="none"
              strokeWidth={0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }} //ความเร็วที่วาด
              d="M16 14h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8-12h10v2H16z"
            />
            <motion.path
              stroke="white"
              fill="none"
              strokeWidth={0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              d="M28 6H14V5a2.002 2.002 0 0 0-2-2H8a2.002 2.002 0 0 0-2 2v1H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2ZM8 5h4v17H8Zm20 21H4V8h2v14a2.002 2.002 0 0 0 2 2h4a2.002 2.002 0 0 0 2-2V8h14Z"
            />
          </motion.svg>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Contact;
