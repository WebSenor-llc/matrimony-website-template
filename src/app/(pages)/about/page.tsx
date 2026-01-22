"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] w-full overflow-hidden bg-linear-to-r from-pink-50 to-orange-50">
        <div className="relative z-10 mx-auto flex max-w-6xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900">
              About Shaadi.com
            </h1>
            <p className="text-xl leading-relaxed text-gray-700">
              For over two decades, we've been India's most trusted matrimonial platform, 
              bringing together millions of hearts and creating countless success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                At Shaadi.com, our mission is to use technology for good and bring back 
                deep and meaningful relationships. We believe that everyone deserves to 
                find their perfect life partner.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We're committed to making the journey of finding love safe, secure, 
                and successful for millions of people worldwide.
              </p>
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/images/home-banner.jpg"
                alt="Happy couple"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Impact in Numbers
          </h2>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-2 text-4xl font-bold text-pink-600">80L+</div>
              <div className="text-gray-700">Success Stories</div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-2 text-4xl font-bold text-pink-600">35L+</div>
              <div className="text-gray-700">Verified Profiles</div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-2 text-4xl font-bold text-pink-600">20+</div>
              <div className="text-gray-700">Years of Trust</div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-2 text-4xl font-bold text-pink-600">100+</div>
              <div className="text-gray-700">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-pink-100 p-4">
                  <Image
                    src="/svg/bluetick.svg"
                    alt="Trust"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Trust & Safety</h3>
              <p className="text-gray-700">
                Every profile is verified to ensure authenticity and safety for all our members.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-pink-100 p-4">
                  <Image
                    src="/svg/matchmaking.svg"
                    alt="Innovation"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-700">
                We use cutting-edge AI and technology to provide the most relevant matches.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-pink-100 p-4">
                  <Image
                    src="/svg/moneyback.svg"
                    alt="Success"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Success Guarantee</h3>
              <p className="text-gray-700">
                We're so confident in our service that we offer a money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="relative min-h-[520px] w-full overflow-hidden bg-[#f7efe6]">
        <Image
          src="/images/founder-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-10 mx-auto flex max-w-6xl items-end px-6 pt-20">
          <div className="max-w-xl pb-16">
            <div className="mb-6 text-7xl font-serif leading-none text-gray-300">
              "
            </div>
            <p className="mb-6 text-4xl font-semibold leading-relaxed text-gray-900">
              At Shaadi.com, it is our life's mission to use technology for good and
              bring back deep and meaningful relationships.
            </p>
            <p className="text-sm font-medium text-gray-600">
              – Anupam Mittal, Founder & CEO
            </p>
          </div>
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

      {/* Journey Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Journey
          </h2>
          <div className="space-y-8">
            <div className="rounded-lg border bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">The Beginning</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded with the vision of revolutionizing the way people find life partners, 
                Shaadi.com started as a simple idea to connect hearts across the globe. 
                What began as a small startup has now become India's largest matrimonial platform.
              </p>
            </div>
            <div className="rounded-lg border bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Innovation & Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we've continuously innovated with features like AI-powered matching, 
                video profiles, and advanced privacy controls. Our commitment to technology and 
                user experience has helped millions find their perfect match.
              </p>
            </div>
            <div className="rounded-lg border bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Global Presence</h3>
              <p className="text-gray-700 leading-relaxed">
                Today, Shaadi.com serves members across 100+ countries, making it the world's 
                largest matrimonial service. We continue to expand our reach while maintaining 
                our core values of trust, authenticity, and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-pink-500 to-orange-500 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="mb-8 text-xl">
            Join millions of happy couples who found love on Shaadi.com
          </p>
          <button className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-pink-600 transition-colors hover:bg-gray-100">
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;