"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:your.email@example.com",
    label: "Email",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              Your Name
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400"
            >
              Creating beautiful web experiences with passion and purpose.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
