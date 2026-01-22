// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const stories = [
//     {
//       image: "/stories/rohit-sonam.jpg",
//       title: "Rohit & Sonam",
//       description:
//         "We met on Shaadi.com and found our perfect match. Thank you for helping me find my soulmate and begin this beautiful new chapter of life!",
//     },
//     {
//       image: "/stories/shreyashree-sukdev.jpg",
//       title: "Shreyashree & Sukdev",
//       description:
//         "Shaadi.com helped us find each other when we least expected it. Forever grateful for this journey!",
//     },
//   {
//     image: "/stories/piyas-anindita.jpg",
//     title: "Piyas & Anidita",
//     description:
//       "Thank you Shaadi.com! I found my soulmate here. After chatting, we involved our families—now we're happily engaged as of 9th May 2025!",
//   },
// ];

// const SuccessStories = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   // Show 2 cards per page
//   const cardsPerPage = 2;
//   const totalPages = Math.ceil(stories.length / cardsPerPage);
//   const currentStories = stories.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

//   const progressWidth = ((currentPage + 1) / totalPages) * 100;

//   const next = () => {
//     if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
//   };

//   const prev = () => {
//     if (currentPage > 0) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <section className="bg-white py-20">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

//           {/* Left Content */}
//           <div>
//             <h2 className="mb-4 text-3xl font-semibold text-gray-900">
//               Real Stories, True Connections
//             </h2>
//             <p className="mb-8 text-gray-600">
//               Discover how Shaadi has brought together couples through meaningful
//               connections and shared journeys. Your success story could be next!
//             </p>
//             <button className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600">
//               Know more →
//             </button>
//           </div>

//           {/* Cards */}
//           <div className="relative lg:col-span-2">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {currentStories.map((story, i) => (
//                 <div key={currentPage * cardsPerPage + i} className="w-full">
//                   <div className="overflow-hidden rounded-2xl border shadow-sm">

//                     {/* Image */}
//                     <div className="relative h-48">
//                       <Image
//                         src={story.image}
//                         alt={story.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="p-4">
//                       <h3 className="mb-2 text-lg font-semibold">
//                         {story.title}
//                       </h3>
//                       <p className="text-sm text-gray-600">
//                         {story.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Progress Bar */}
//             <div className="mt-6 h-2 w-full rounded-full bg-gray-200">
//               <div
//                 className="h-2 rounded-full bg-red-400 transition-all duration-500"
//                 style={{ width: `${progressWidth}%` }}
//               />
//             </div>

//             {/* Navigation */}
//             <div className="mt-6 flex justify-end gap-4">
//               <button
//                 onClick={prev}
//                 disabled={currentPage === 0}
//                 className="flex h-10 w-10 items-center justify-center rounded-full border disabled:opacity-40"
//               >
//                 <ArrowLeft size={18} />
//               </button>
//               <button
//                 onClick={next}
//                 disabled={currentPage === totalPages - 1}
//                 className="flex h-10 w-10 items-center justify-center rounded-full border disabled:opacity-40"
//               >
//                 <ArrowRight size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;


"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const stories = [
  {
    image: "/stories/ajinkya-ashwini.jpg",
    title: "Ajinkya & Ashwini",
    description: "Thank you Shaadi.com! I found my soulmate here. After chatting, we involved our families—now we're happily engaged as of 9th May 2025!",
  },
  {
    image: "/stories/rohit-sonam.jpg",
    title: "Rohit & Sonam",
    description: "We met on Shaadi.com and found our perfect match. Thank you for helping me find my soulmate and begin this beautiful new chapter of life!",
  },
  {
    image: "/stories/shreyashree-sukdev.jpg",
    title: "Shreyashree & Sukdev",
    description: "Shaadi.com helped us find each other when we least expected it. Forever grateful for this journey!",
  },
  {
    image: "/stories/piyas-anindita.jpg",
    title: "Priya & Arjun",
    description: "The easiest way to find love! Shaadi.com connected us and now we're building our forever together.",
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 2;

  const next = () => {
    setCurrentIndex((prev) => (prev + cardsPerPage) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - cardsPerPage + stories.length) % stories.length);
  };

  const totalPages = Math.ceil(stories.length / cardsPerPage);
  const currentPage = Math.floor(currentIndex / cardsPerPage);
  const progressWidth = ((currentPage + 1) / totalPages) * 100;
  const visibleStories = stories.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <section className="bg-white pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* Left Content */}
          <div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Real Stories, True Connections
            </h2>
            <p className="mb-8 text-gray-600">
              Discover how Shaadi has brought together couples through meaningful
              connections and shared journeys. Your success story could be next!
            </p>
            <button className="rounded-full bg-[#54b9d2] px-8 py-3 text-sm font-semibold text-white hover:bg-[#54b9d2] transition-transform hover:scale-105 duration-300 cursor-pointer">
              Know more →
            </button>
          </div>

          {/* Cards Carousel */}
          <div className="lg:col-span-2">
            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 overflow-hidden">
              {visibleStories.map((story, index) => (
                <div
                  key={currentIndex + index}
                  className="transition-all duration-500 ease-out"
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Card Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="mb-2 text-lg font-bold">{story.title}</h3>
                      <p className="text-xs leading-relaxed">{story.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mb-6 h-1 w-full rounded-full bg-gray-300">
              <div
                className="h-1 rounded-full bg-red-400 transition-all duration-500"
                style={{ width: `${progressWidth}%` }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 hover:border-gray-400 transition text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 hover:border-gray-400 transition text-gray-600 hover:text-gray-900"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}