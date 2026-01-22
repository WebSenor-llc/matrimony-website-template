"use client";

import Image from "next/image";

const FounderMessage = () => {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden bg-[#f7efe6]">
      
      {/* Background Image */}
      <Image
        src="/images/founder-bg.jpeg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-end px-6 pt-20">
        
        {/* Left Content */}
        <div className="max-w-xl pb-16">
          
          {/* Quote Icon */}
          <div className="mb-6 text-7xl font-serif leading-none text-gray-300">
            “
          </div>

          {/* Quote Text */}
          <p className="mb-6 text-4xl font-semibold leading-relaxed text-gray-900">
            At Shaadi.com, it is our life's mission to use technology for good and
            bring back deep and meaningful relationships.
          </p>

          {/* Author */}
          <p className="text-sm font-medium text-gray-600">
            – Anupam Mittal, Founder & CEO
          </p>
        </div>

        {/* Right Image (BOTTOM-TOUCHED) */}
        <div className="absolute bottom-0 right-10 hidden h-[460px] w-[460px] md:block">
          <Image
            src="/images/founder.png"
            alt="Founder"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
