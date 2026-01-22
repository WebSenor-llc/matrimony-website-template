"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

/* -------------------- DATA CONFIG -------------------- */

const FOOTER_LINKS = [
  {
    title: "Need Help?",
    links: [
      "Member Login",
      "Sign Up",
      "Partner Search",
      "How to Use Shaadi.com",
      "Premium Memberships",
      "Customer Support",
      "Site Map",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Shaadi Blog",
      "Careers",
      "Awards & Recognition",
      "Cov-Aid",
      "Contact Us",
    ],
  },
  {
    title: "Privacy & You",
    links: [
      "Terms of Use",
      "Privacy Policy",
      "Be Safe Online",
      "Report Misuse",
    ],
  },
  {
    title: "More",
    links: [
      "VIP Shaadi",
      "Sangam",
      "Shaadi Centres",
      "Success Stories",
      "Shaadi Live",
      "Elite Matrimony by Shaadi.com",
      "Astrochat.com",
      "Chat with Astrologers",
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X" },
  { icon: Youtube, label: "YouTube" },
];

/* -------------------- COMPONENT -------------------- */

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <motion.div 
        className="mx-auto max-w-7xl px-4 py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="grid grid-cols-2 gap-8 lg:grid-cols-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >

          {/* Link Columns */}
          {FOOTER_LINKS.map((section, sectionIndex) => (
            <motion.nav 
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h4 
                className="mb-3 text-base font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h4>
              <motion.ul 
                className="space-y-2 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.05, delayChildren: sectionIndex * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.03 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href="#"
                        className="hover:text-gray-900 hover:underline transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          ))}

          {/* Social + App */}
          <motion.div 
            className="col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="mb-4 text-base font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Find us on:
            </motion.h4>

            <motion.div 
              className="mb-6 flex flex-wrap gap-3 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
              viewport={{ once: true }}
            >
              {SOCIAL_LINKS.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="#"
                      aria-label={label}
                      className="rounded-md border border-black/20 p-2 transition-all duration-300 hover:border-black hover:text-gray-900 block"
                    >
                      <Icon size={18} />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h4 
              className="mb-3 text-sm font-semibold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Get the Shaadi App
            </motion.h4>

            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/images/AppleStore.png"
                alt="Download on the App Store"
                className="h-10 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img
                src="/images/google-play.png"
                alt="Get it on Google Play"
                className="h-10 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.p 
              className="mt-4 text-xs leading-relaxed text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              Apple and the Apple Logo are trademarks of Apple Inc.
              <br />
              Google Play and the Google Play logo are trademarks of Google LLC.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="bg-[#212126] py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div 
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs text-gray-50 md:flex-row md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© 1996–2026 Shaadi.com, The World’s Leading Matchmaking Service™</p>
          <p>Passionately created by People Group ➤</p>
        </motion.div >
      </motion.div >
    </footer>
  );
};

export default Footer;
