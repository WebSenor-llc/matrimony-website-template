"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ShaadiExperience = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <motion.h2
          className="mb-8 mx-auto max-w-6xl text-2xl md:text-4xl font-semibold text-[#212126]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          The Shaadi Experience
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div
            className="rounded-2xl border border-[#f1f1f2] p-6 sm:p-8 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center">
              <Image
                src="/svg/moneyback.svg"
                alt="Money Back"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-20 sm:h-20"
              />
            </div>

            <h3 className="mb-3 text-lg font-bold text-[#212126]">
              30 Day Money Back Guarantee
            </h3>

            <p className="text-base leading-relaxed text-gray-600">
              Get matched with someone special within 30 days, or we&apos;ll refund your
              money—guaranteed!
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="rounded-2xl border border-[#f1f1f2] p-6 sm:p-8 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center">
              <Image
                src="/svg/bluetick.svg"
                alt="Blue Tick"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-20 sm:h-20"
              />
            </div>

            <h3 className="mb-3 text-lg font-bold text-[#212126]">
              Blue Tick to find your Green Flag
            </h3>

            <p className="text-base leading-relaxed text-gray-600">
              Did you know our blue-tick profiles get 40% more connection requests than
              others?
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="rounded-2xl border border-[#f1f1f2] p-6 sm:p-8 bg-white sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center">
              <Image
                src="/svg/matchmaking.svg"
                alt="AI Matchmaking"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-20 sm:h-20"
              />
            </div>

            <h3 className="mb-3 text-lg font-bold text-[#212126]">
              Matchmaking Powered by AI
            </h3>

            <p className="text-base leading-relaxed text-gray-600">
              Cutting-edge technology with two decades of matchmaking expertise to help
              you find &quot;the one&quot;.
            </p>
          </motion.div>
        </motion.div>


        {/* VIP Section */}
        <motion.div
          className="
    mt-12 mx-auto max-w-6xl
    rounded-[36px]
    bg-[#F7F3FF]
    border-2 border-[#E3D6FF]
    px-6 sm:px-10 lg:px-14
    py-10 sm:py-12
  "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

            {/* LOGO */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <Image
                src="/svg/vip_logo.svg"
                alt="VIP Shaadi"
                width={180}
                height={90}
                className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
                priority
              />
            </div>

            {/* TEXT + CTA */}
            <div className="flex flex-col items-center md:items-start gap-6 max-w-4xl md:pl-6">

              <p className="
        text-center md:text-left
        text-lg sm:text-xl md:text-[26px]
        font-semibold text-gray-900
        leading-snug sm:leading-[1.35]
      ">
                Experience the world of elite personalised matchmaking by{" "}
                <span className="font-bold">Shaadi.com</span>
              </p>

              <motion.button
                className="
          rounded-full
          bg-[#48276e]
          px-10 sm:px-12
          py-3 sm:py-4
          text-sm sm:text-base
          font-semibold text-white
          shadow-sm
          hover:bg-[#552f81]
          transition-colors
          cursor-pointer
        "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Consultation
              </motion.button>

            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default ShaadiExperience;