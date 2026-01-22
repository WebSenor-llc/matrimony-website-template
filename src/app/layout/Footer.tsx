"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

/* -------------------- DATA CONFIG -------------------- */

const FOOTER_LINKS = [
  {
    title: "Need Help?",
    links: [
      "Member Login",
      "Sign Up",
      "Partner Search",
      "How to Use Shaadi.com",
      "Premium Memberships",
      "Customer Support",
      "Site Map",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Shaadi Blog",
      "Careers",
      "Awards & Recognition",
      "Cov-Aid",
      "Contact Us",
    ],
  },
  {
    title: "Privacy & You",
    links: [
      "Terms of Use",
      "Privacy Policy",
      "Be Safe Online",
      "Report Misuse",
    ],
  },
  {
    title: "More",
    links: [
      "VIP Shaadi",
      "Sangam",
      "Shaadi Centres",
      "Success Stories",
      "Shaadi Live",
      "Elite Matrimony by Shaadi.com",
      "Astrochat.com",
      "Chat with Astrologers",
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X" },
  { icon: Youtube, label: "YouTube" },
];

/* -------------------- COMPONENT -------------------- */

const Footer = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Link Columns */}
          {FOOTER_LINKS.map((section) => (
            <nav key={section.title}>
              <h4 className="mb-4 text-lg font-bold text-gray-900">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className=" hover:text-gray-900 hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Social + App */}
          <div>
            <h4 className="mb-4 text-md font-bold text-gray-900">
              Find us on:
            </h4>

            <div className="mb-6 flex gap-4 text-gray-600">
              {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors hover:text-gray-900 border border-black/20 p-2 rounded-md transition-transform duration-300 hover:scale-115 hover:border-black"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>

            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              Get the Shaadi App
            </h4>

            <div className="flex gap-3">
              <img
                src="/images/AppleStore.png"
                alt="Download on the App Store"
                className="h-10 cursor-pointer transition-transform duration-300 hover:scale-105"
              />
              <img
                src="/images/google-play.png"
                alt="Get it on Google Play"
                className="h-10 cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              Apple and the Apple Logo are trademarks of Apple Inc.
              <br />
              Google Play and the Google Play logo are trademarks of Google LLC.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#212126] py-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between px-6 text-xs text-gray-50 md:flex-row">
          <p className="text-gray-50">
            © 1996–2026 Shaadi.com, The World’s Leading Matchmaking Service™
          </p>
          <p className="mt-2 md:mt-0">
            Passionately created by People Group ➤
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
