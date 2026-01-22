"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ShaadiExperience = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Heading */}
        <motion.h2 
          className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-semibold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          The Shaadi Experience
        </motion.h2>

        {/* Cards */}
        <motion.div 
          className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Card 1 */}
          <motion.div 
            className="rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#dcf9fe]">
              <Image
                src="/svg/moneyback.svg"
                alt="Money Back"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8"
              />
            </div>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900">
              30 Day Money Back Guarantee
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Get matched with someone special within 30 days, or we'll refund your money—guaranteed!
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#dcf9fe]">
              <Image
                src="/svg/bluetick.svg"
                alt="Blue Tick"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8"
              />
            </div>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900">
              Blue Tick to find your Green Flag
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Did you know our blue-tick profiles get 40% more connection requests than others?
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#dcf9fe]">
              <Image
                src="/svg/matchmaking.svg"
                alt="AI Matchmaking"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8"
              />
            </div>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900">
              Matchmaking Powered by AI
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Cutting-edge technology with two decades of matchmaking expertise to help you find "the one".
            </p>
          </motion.div>
        </motion.div>

        {/* VIP Section */}
        <motion.div 
          className="mt-12 sm:mt-16 rounded-2xl bg-purple-50 border-2 border-purple-200 px-4 sm:px-6 py-8 sm:py-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
            
            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <Image
                src="/svg/vip_logo.svg"
                alt="VIP Shaadi"
                width={120}
                height={50}
                className="sm:w-[140px] sm:h-[60px]"
              />
              <p className="max-w-md text-lg sm:text-xl font-medium text-gray-900">
                Experience the world of elite personalised matchmaking by Shaadi.com
              </p>
            </div>

            {/* CTA */}
            <motion.button 
              className="rounded-full bg-purple-800 px-6 sm:px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-900 shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Consultation
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ShaadiExperience;