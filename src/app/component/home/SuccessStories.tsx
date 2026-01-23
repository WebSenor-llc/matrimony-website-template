"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    image: "/stories/ajinkya-ashwini.jpg",
    title: "Ajinkya & Ashwini",
    description:
      "Thank you Shaadi.com! I found my soulmate here. After chatting, we involved our families—now we're happily engaged as of 9th May 2025!",
  },
  {
    image: "/stories/rohit-sonam.jpg",
    title: "Rohit & Sonam",
    description:
      "We met on Shaadi.com and found our perfect match. Thank you for helping me find my soulmate and begin this beautiful new chapter of life!",
  },
  {
    image: "/stories/shreyashree-sukdev.jpg",
    title: "Shreyashree & Sukdev",
    description:
      "Shaadi.com helped us find each other when we least expected it. Forever grateful for this journey!",
  },
  {
    image: "/stories/piyas-anindita.jpg",
    title: "Piyas & Anindita",
    description:
      "Thank you Shaadi.com! I found my soulmate here. After chatting, we involved our families—now we're happily engaged as of 9th May 2025!",
  },
];

const SuccessStories = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Responsive cards per page: 1 on mobile, 2 on desktop
  const getCardsPerPage = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 2 : 1;
    }
    return 2; // Default for SSR
  };

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);
  
  // Update cards per page on window resize
  useState(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setCardsPerPage(getCardsPerPage());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const totalPages = Math.ceil(stories.length / cardsPerPage);
  const currentStories = stories.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  const progressWidth = ((currentPage + 1) / totalPages) * 100;

  const next = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-white py-12 md:py-0 md:pt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <motion.div 
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="mb-3 sm:mb-4 text-2xl sm:text-4xl font-bold text-[#212126]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real Stories, True Connections
            </motion.h2>
            <motion.p 
              className="mb-6 sm:mb-8 text-[#212126] text-lg"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Discover how Shaadi has brought together couples through meaningful
              connections and shared journeys. Your success story could be next!
            </motion.p>
            <motion.button 
              className="rounded-full bg-[#0aa4b8] px-8 py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-[#27c6db] transition-colors cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              Know more →
            </motion.button>
          </motion.div>

          {/* Cards */}
          <motion.div 
            className="relative lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPage}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {currentStories.map((story, i) => (
                  <motion.div 
                    key={currentPage * cardsPerPage + i} 
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <motion.div 
                      className="overflow-hidden rounded-2xl border shadow-sm h-96 sm:h-[28rem] flex flex-col"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                      transition={{ duration: 0.3 }}
                    >

                      {/* Image */}
                      <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full"
                        >
                          <Image
                            src={story.image}
                            alt={story.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-start">
                        <h3 className="mb-2 text-xl font-bold flex-shrink-0">
                          {story.title}
                        </h3>
                        <p className="text-lg sm:text-xl text-[#212126] leading-relaxed">
                          {story.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <motion.div 
              className="mt-4 sm:mt-6 h-2 w-full rounded-full bg-gray-200"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-2 rounded-full bg-red-400"
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Navigation */}
            <motion.div 
              className="mt-4 sm:mt-6 flex justify-center lg:justify-end gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={prev}
                disabled={currentPage === 0}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border disabled:opacity-40 hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.button>
              <motion.button
                onClick={next}
                disabled={currentPage === totalPages - 1}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border disabled:opacity-40 hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;