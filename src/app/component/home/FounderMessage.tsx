"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FounderMessage = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7efe6]">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/founder-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 md:py-16 md:pt-16">

        {/* GRID FOR MOBILE + MEDIUM */}
        <motion.div 
          className="grid gap-12 md:grid-cols-2 lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Text Content */}
          <div className="max-w-xl">
            <motion.div 
              className="mb-4 text-7xl font-serif leading-none text-gray-300"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              "
            </motion.div>

            <motion.p 
              className="mb-6 text-3xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Shaadi.com, it is our life's mission to use technology for good and
              bring back deep and meaningful relationships.
            </motion.p>

            <motion.p 
              className="text-sm font-medium text-gray-600"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              – Anupam Mittal, Founder & CEO
            </motion.p>
          </div>

          {/* IMAGE FOR MOBILE + MEDIUM */}
          <motion.div 
            className="relative mx-auto h-[260px] w-[260px] md:h-[360px] md:w-[360px] md:hidden"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/founder.png"
              alt="Founder"
              fill
              className="object-contain object-bottom"
            />
          </motion.div>
        </motion.div>

        {/* IMAGE FOR LARGE SCREENS ONLY */}
        <motion.div 
          className="absolute bottom-0 right-10 hidden h-[460px] w-[460px] md:block"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/founder.png"
            alt="Founder"
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMessage;