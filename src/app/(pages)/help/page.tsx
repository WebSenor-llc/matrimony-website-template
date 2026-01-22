"use client";

import { Plus, Minus, Phone, Mail, MessageCircle, Clock, Search, Shield, Heart, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "01",
    question: "How do I create a profile on Shaadi.com?",
    answer: "Creating a profile is simple and free. Click on 'Register Free' and fill in your basic details, preferences, and upload photos. Our team will verify your profile within 24-48 hours."
  },
  {
    id: "02",
    question: "How does the matching algorithm work?",
    answer: "Our AI-powered algorithm considers your preferences like age, location, community, education, profession, and lifestyle choices to suggest the most compatible matches."
  },
  {
    id: "03",
    question: "Is my personal information safe and secure?",
    answer: "Yes, we use advanced encryption and security measures to protect your data. You have full control over who can view your profile and contact details."
  },
  {
    id: "04",
    question: "What's the difference between free and premium membership?",
    answer: "Free members can create profiles and browse matches. Premium members can view contact details, send unlimited messages, get priority listing, and access advanced search filters."
  },
  {
    id: "05",
    question: "How can I contact other members?",
    answer: "You can express interest, send personalized messages, or use our chat feature. Premium members have unlimited communication privileges."
  },
  {
    id: "06",
    question: "What if I don't find suitable matches?",
    answer: "We offer a money-back guarantee within 30 days if you're not satisfied. Our relationship managers also provide personalized assistance to premium members."
  },
  {
    id: "07",
    question: "How do I verify my profile?",
    answer: "Upload clear photos and valid ID documents. Our verification team will review and add a blue tick to verified profiles, which get 40% more responses."
  },
  {
    id: "08",
    question: "Can I hide my profile from certain people?",
    answer: "Yes, you can block specific profiles, hide from colleagues/friends, or make your profile visible only to premium members for added privacy."
  }
];

const helpTopics = [
  {
    icon: Search,
    title: "Getting Started",
    description: "Learn how to create your profile and start your search",
    topics: ["Creating your profile", "Uploading photos", "Setting preferences", "Profile verification"]
  },
  {
    icon: Heart,
    title: "Finding Matches",
    description: "Discover how our matching system works",
    topics: ["Understanding matches", "Using search filters", "Saving favorites", "Express interest"]
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Connect with potential partners safely",
    topics: ["Sending messages", "Chat features", "Video calls", "Communication etiquette"]
  },
  {
    icon: Shield,
    title: "Safety & Privacy",
    description: "Keep your information secure",
    topics: ["Privacy settings", "Blocking users", "Reporting profiles", "Safety tips"]
  },
  {
    icon: Users,
    title: "Membership",
    description: "Understand membership benefits and billing",
    topics: ["Membership plans", "Payment methods", "Refund policy", "Upgrading account"]
  }
];

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            How Can We Help You?
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl text-gray-600">
            Find answers to your questions and get the support you need
          </p>
          
          {/* Search Bar */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help topics, FAQs, or features..."
                className="w-full rounded-lg border border-gray-300 py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base lg:text-lg focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Topics */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Popular Help Topics
          </h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {helpTopics.map((topic, index) => (
              <div key={index} className="rounded-lg bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 sm:mb-4 flex items-center">
                  <div className="rounded-lg bg-pink-100 p-2 sm:p-3">
                    <topic.icon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />
                  </div>
                  <h3 className="ml-3 sm:ml-4 text-lg sm:text-xl font-semibold text-gray-900">
                    {topic.title}
                  </h3>
                </div>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">{topic.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-700 hover:text-pink-600 cursor-pointer">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 sm:px-6 transition-all duration-300 hover:shadow-sm"
              >
                <AccordionTrigger className="group flex items-center justify-between py-4 sm:py-5 text-left hover:no-underline [&>svg]:hidden">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <span className="text-base sm:text-lg font-medium text-gray-500 shrink-0">
                      {faq.id}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-pink-600">
                      {faq.question}
                    </span>
                  </div>
                  
                  <span className="ml-3 sm:ml-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 group-hover:border-pink-400 group-hover:bg-pink-50 group-data-[state=open]:border-pink-500 group-data-[state=open]:bg-pink-100 shrink-0">
                    <Plus
                      size={16}
                      className="text-gray-600 transition-all duration-300 group-hover:text-pink-600 group-data-[state=open]:hidden sm:w-[18px] sm:h-[18px]"
                    />
                    <Minus
                      size={16}
                      className="text-pink-600 hidden transition-all duration-300 group-data-[state=open]:block sm:w-[18px] sm:h-[18px]"
                    />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="border-t border-gray-200 pt-4 sm:pt-6 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-0 sm:pl-8">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Still Need Help? Contact Us
          </h2>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone Support */}
            <div className="rounded-lg bg-white p-6 sm:p-8 text-center shadow-sm lg:col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="rounded-full bg-green-100 p-3 sm:p-4">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900">Phone Support</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">Speak with our support team</p>
              <p className="mb-2 text-base sm:text-lg font-semibold text-gray-900">1800-XXX-XXXX</p>
              <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">
                <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                Mon-Sat: 9 AM - 9 PM
              </div>
            </div>

            {/* Email Support */}
            <div className="rounded-lg bg-white p-6 sm:p-8 text-center shadow-sm">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-3 sm:p-4">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900">Email Support</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">Get detailed help via email</p>
              <p className="mb-2 text-base sm:text-lg font-semibold text-gray-900">help@shaadi.com</p>
              <p className="text-xs sm:text-sm text-gray-500">Response within 24 hours</p>
            </div>

            {/* Live Chat */}
            <div className="rounded-lg bg-white p-6 sm:p-8 text-center shadow-sm">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="rounded-full bg-purple-100 p-3 sm:p-4">
                  <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900">Live Chat</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">Chat with us in real-time</p>
              <button className="rounded-lg bg-purple-600 px-5 sm:px-6 py-2 text-sm sm:text-base text-white hover:bg-purple-700 transition-colors">
                Start Chat
              </button>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Additional Resources
          </h2>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900">Video Tutorials</h3>
              <p className="text-sm sm:text-base text-gray-600">Step-by-step guides to help you get started</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900">Safety Guidelines</h3>
              <p className="text-sm sm:text-base text-gray-600">Tips to stay safe while using our platform</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900">Success Stories</h3>
              <p className="text-sm sm:text-base text-gray-600">Read inspiring stories from our members</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900">Community Forum</h3>
              <p className="text-sm sm:text-base text-gray-600">Connect with other members and share experiences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;