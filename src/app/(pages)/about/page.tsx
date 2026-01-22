"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FounderMessage from "../../component/home/FounderMessage";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[300px] sm:min-h-[400px] w-full overflow-hidden bg-linear-to-r from-pink-50 to-orange-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 mx-auto flex max-w-6xl items-center px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Shaadi.com
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              For over two decades, we've been India's most trusted matrimonial platform, 
              bringing together millions of hearts and creating countless success stories.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="bg-white py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At Shaadi.com, our mission is to use technology for good and bring back 
                deep and meaningful relationships. We believe that everyone deserves to 
                find their perfect life partner.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We're committed to making the journey of finding love safe, secure, 
                and successful for millions of people worldwide.
              </motion.p>
            </motion.div>
            <motion.div 
              className="relative h-64 sm:h-80 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Mobile & Medium Background */}
              <Image
                src="/images/mobile-banner-bg.jpg"
                alt="Happy couple"
                fill
                className="rounded-lg object-cover lg:hidden"
              />
              
              {/* Desktop Background */}
              <Image
                src="/images/home-banner.jpg"
                alt="Happy couple"
                fill
                className="rounded-lg object-cover hidden lg:block"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="bg-gray-50 py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h2 
            className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.div 
            className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 md:grid-cols-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { number: "80L+", label: "Success Stories" },
              { number: "35L+", label: "Verified Profiles" },
              { number: "20+", label: "Years of Trust" },
              { number: "100+", label: "Countries" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="rounded-lg bg-white p-4 sm:p-6 shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "/svg/bluetick.svg",
                title: "Trust & Safety",
                description: "Every profile is verified to ensure authenticity and safety for all our members."
              },
              {
                icon: "/svg/matchmaking.svg",
                title: "Innovation",
                description: "We use cutting-edge AI and technology to provide the most relevant matches."
              },
              {
                icon: "/svg/moneyback.svg",
                title: "Success Guarantee",
                description: "We're so confident in our service that we offer a money-back guarantee."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`text-center ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-pink-100 p-3 sm:p-4 hover:scale-110 hover:rotate-1 transition-transform duration-300">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={32}
                      height={32}
                      className="sm:w-10 sm:h-10"
                    />
                  </div>
                </div>
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <FounderMessage />

      {/* Journey Section */}
      <motion.section 
        className="bg-white py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h2 
            className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "The Beginning",
                content: "Founded with the vision of revolutionizing the way people find life partners, Shaadi.com started as a simple idea to connect hearts across the globe. What began as a small startup has now become India's largest matrimonial platform."
              },
              {
                title: "Innovation & Growth",
                content: "Over the years, we've continuously innovated with features like AI-powered matching, video profiles, and advanced privacy controls. Our commitment to technology and user experience has helped millions find their perfect match."
              },
              {
                title: "Global Presence",
                content: "Today, Shaadi.com serves members across 100+ countries, making it the world's largest matrimonial service. We continue to expand our reach while maintaining our core values of trust, authenticity, and success."
              }
            ].map((journey, index) => (
              <motion.div 
                key={index}
                className="rounded-lg border bg-gray-50 p-6 sm:p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {journey.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {journey.content}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-lineear-to-r from-pink-500 to-orange-500 py-12 sm:py-16 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.h2 
            className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Find Your Perfect Match?
          </motion.h2>
          <motion.p 
            className="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join millions of happy couples who found love on Shaadi.com
          </motion.p>
          <motion.button 
            className="rounded-lg bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-pink-600 transition-colors hover:bg-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
          >
            Start Your Journey Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;