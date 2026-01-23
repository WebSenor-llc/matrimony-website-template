"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HomeBanner = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const stats = [
    { text: "#1 Matchmaking Service", stars: null },
    { text: "Ratings on Playstore by 2.4 Lakh users", stars: "⭐⭐⭐⭐⭐" },
    { text: "80 Lakh Success Stories", stars: null }
  ];

  // Auto-slide effect for medium screens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative h-[65vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] w-full overflow-hidden">
      
      {/* Background Images - Responsive */}
      {/* Mobile & Medium Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 lg:hidden"
      >
        <Image
          src="/images/mobile-banner-bg.jpg"
          alt="Find your forever"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      
      {/* Desktop Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 hidden lg:block"
      >
        <Image
          src="/images/home-banner.jpg"
          alt="Find your forever"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 sm:px-6 text-center text-white pb-20 sm:pb-24 lg:pb-28">
        
        {/* Heading */}
        <motion.h1 
          className="mb-3 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Find your forever <motion.span 
            className="inline-block"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
          >
            ❤️
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="mb-6 max-w-md sm:max-w-xl text-sm sm:text-base text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Discover a world beyond matrimony
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-block rounded-full bg-[#0aa4b8] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-colors duration-200 hover:bg-[#00bcd5] shadow-lg hover:shadow-xl"
            >
              Find Your Match
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-6 left-1/2 w-full max-w-5xl -translate-x-1/2 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Desktop/Large Screen - Show all stats */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] sm:text-sm text-gray-200">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              #1 Matchmaking Service
            </motion.span>
            <span>|</span>
            <motion.span 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              ⭐⭐⭐⭐⭐ Ratings on Playstore by 2.4 Lakh users
            </motion.span>
            <span>|</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              80 Lakh Success Stories
            </motion.span>
          </div>

          {/* Medium Screen - Slider */}
          <div className="lg:hidden flex flex-col items-center justify-center text-[11px] sm:text-sm text-gray-200 h-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStatIndex}
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150}}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-center flex flex-col items-center"
              >
                {stats[currentStatIndex].stars && (
                  <div className="mb-1 text-xs">
                    {stats[currentStatIndex].stars}
                  </div>
                )}
                <div>
                  {stats[currentStatIndex].text}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeBanner;
