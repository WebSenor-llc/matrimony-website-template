"use client";

import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/home-banner.jpg" // replace with your image path
        alt="Find your forever"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay with Bottom Shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 text-center text-white pb-20">
        
        <h1 className="mb-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Find your forever{" "}
          <span className="inline-block">❤️</span>
        </h1>

        <p className="mb-6 max-w-xl text-sm text-gray-200 sm:text-base">
          Discover a world beyond matrimony
        </p>

        <Link
          href="/register"
          className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          Find Your Match
        </Link>

        {/* Bottom Stats */}
        <div className="absolute bottom-6 left-1/2 w-full max-w-5xl -translate-x-1/2 px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-200 sm:text-sm">
            <span>#1 Matchmaking Service</span>
            <span className="hidden sm:inline">|</span>
            <span>⭐⭐⭐⭐⭐ Ratings on Playstore by 2.4 Lakh users</span>
            <span className="hidden sm:inline">|</span>
            <span>80 Lakh Success Stories</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBanner;
