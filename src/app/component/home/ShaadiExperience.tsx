"use client";

import Image from "next/image";

const ShaadiExperience = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <h2 className="mb-12 text-3xl font-semibold text-gray-900">
          The Shaadi Experience
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#dcf9fe]">
              <Image
                src="/svg/moneyback.svg"
                alt="Money Back"
                width={32}
                height={32}
              />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              30 Day Money Back Guarantee
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Get matched with someone special within 30 days, or we'll refund your money—guaranteed!
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#dcf9fe]">
              <Image
                src="/svg/bluetick.svg"
                alt="Blue Tick"
                width={32}
                height={32}
              />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Blue Tick to find your Green Flag
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Did you know our blue-tick profiles get 40% more connection requests than others?
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#dcf9fe]">
              <Image
                src="/svg/matchmaking.svg"
                alt="AI Matchmaking"
                width={32}
                height={32}
              />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Matchmaking Powered by AI
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Cutting-edge technology with two decades of matchmaking expertise to help you find "the one".
            </p>
          </div>
        </div>

        {/* VIP Section */}
        <div className="mt-16 rounded-2xl bg-purple-50 border-2 border-purple-200 px-6 py-16">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            
            {/* Left */}
            <div className="flex items-center gap-6">
              <Image
                src="/svg/vip_logo.svg"
                alt="VIP Shaadi"
                width={140}
                height={60}
              />
              <p className="max-w-md text-xl font-medium text-gray-900">
                Experience the world of elite personalised matchmaking by Shaadi.com
              </p>
            </div>

            {/* CTA */}
            <button className="rounded-full bg-purple-800 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-900">
              Free Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShaadiExperience;
