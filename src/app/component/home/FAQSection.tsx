"use client";

import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "01",
    question:
      "Why is Shaadi.com better compared to other matrimonial websites?",
    answer:
      "Shaadi.com stands out as India's leading matchmaking platform with over 80 Lakh success stories, a testament to its trust and effectiveness. Unlike traditional matrimonial sites, Shaadi.com offers verified profiles, personalized matchmaking services, and advanced search tools that help users find compatible partners with ease and confidence. Its focus on safety, authenticity, and meaningful connections makes it a preferred choice for millions.",
  },
  {
    id: "02",
    question: "Is Shaadi.com a trustworthy matchmaking platform?",
    answer:
      "Yes, Shaadi.com is trusted by millions of users worldwide and follows strict verification, privacy, and security practices to ensure safe matchmaking.",
  },
  {
    id: "03",
    question:
      "What is the difference between free membership vs paid membership?",
    answer:
      "Free membership allows profile creation and browsing, while paid membership unlocks contact details, messaging, and premium matchmaking features.",
  },
  {
    id: "04",
    question: "What additional benefits do I get as a Premium Member?",
    answer:
      "Premium members enjoy priority listing, advanced filters, direct communication tools, and dedicated relationship assistance.",
  },
  {
    id: "05",
    question: "How can I contact other members on Shaadi.com?",
    answer:
      "You can express interest, send messages, or directly connect with members based on your membership plan.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <h2 className="mb-8 sm:mb-10 text-2xl sm:text-3xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-2xl border border-gray-200 bg-gray-50 px-4 sm:px-6 transition-all duration-300 hover:shadow-md"
            >
              <AccordionTrigger className="group flex items-center justify-between py-4 sm:py-5 text-left hover:no-underline [&>svg]:hidden">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <span className="text-lg sm:text-xl font-medium text-gray-500 transition-colors duration-200 shrink-0">
                    {faq.id}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                    {faq.question}
                  </span>
                </div>

                {/* Plus / Minus */}
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-50 group-data-[state=open]:border-blue-500 group-data-[state=open]:bg-blue-100 shrink-0">
                  <Plus
                    size={18}
                    className="text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-data-[state=open]:hidden group-data-[state=open]:rotate-90"
                  />
                  <Minus
                    size={18}
                    className="text-blue-600 hidden transition-all duration-300 group-data-[state=open]:block"
                  />
                </span>
              </AccordionTrigger>

              <AccordionContent className="border-t border-gray-200 pt-4 sm:pt-6 pb-4 sm:pb-5 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="animate-in fade-in-0 slide-in-from-top-2 duration-300">
                  <p className="text-sm leading-relaxed text-gray-700 pl-0 sm:pl-8">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
