"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface ExploreTab {
  key: string;
  label: string;
  items: string[];
}

interface ExploreProfilesTabsProps {
  title: string;
  tabs: ExploreTab[];
}

const ExploreProfilesTabs = ({ title, tabs }: ExploreProfilesTabsProps) => {
  // Check if this should show without tabs
  const shouldHideTabs = title === "Horoscope" || title === "Community Matrimony Services";
  
  // Combine all items from all tabs into a single array for sections without tabs
  const allItems = shouldHideTabs ? tabs.flatMap(tab => tab.items) : [];

  return (
    <motion.section 
      className="rounded-2xl border bg-[#f9f9fb] px-4  py-4 sm:py-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <motion.h2 
        className="mb-4 sm:mb-6 text-lg md:text-2xl font-semibold text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>

      {shouldHideTabs ? (
        /* Content without tabs for Horoscope and Community Matrimony Services */
        <motion.div 
          className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          {allItems.map((item, index) => (
            <motion.span 
              key={index} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <span className="text-base border-b border-dotted border-gray-400 group-hover:border-gray-900 transition-colors duration-200">
                {item}
              </span>
              {index < allItems.length - 1 && (
                <span className="mx-0.5 sm:mx-1 text-gray-400">|</span>
              )}
            </motion.span>
          ))}
        </motion.div>
      ) : (
        /* Normal tabs for other sections */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Tabs defaultValue={tabs[0].key} className="w-full">
            {/* Tabs Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TabsList className="mb-4 sm:mb-6 flex w-full justify-start gap-3 sm:gap-6 border-b bg-transparent p-0 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={tab?.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TabsTrigger
                      value={tab?.key}
                      className="
                        relative rounded-none px-0 pb-2 sm:pb-3 text-sm md:text-lg font-medium text-gray-600 whitespace-nowrap shrink-0 transition-all duration-200 bg-transparent border-none shadow-none
                        data-[state=active]:text-gray-900
                        data-[state=active]:bg-transparent
                        data-[state=active]:border-none
                        data-[state=active]:shadow-none
                        data-[state=active]:after:absolute
                        data-[state=active]:after:bottom-0
                        data-[state=active]:after:left-0
                        data-[state=active]:after:h-[4px]
                        data-[state=active]:after:w-full
                        data-[state=active]:after:bg-black
                        hover:text-[#212126]
                        hover:bg-transparent
                        hover:border-none
                        hover:shadow-none
                        hover:after:absolute
                        hover:after:bottom-0
                        hover:after:left-0
                        hover:after:h-[2px]
                        hover:after:w-full
                        hover:after:bg-gray-400
                        hover:after:rounded-t-sm
                        focus:outline-none
                        focus:ring-0
                        focus:border-none
                        focus:shadow-none
                        cursor-pointer
                      "
                    >
                      {tab.label}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            {/* Tabs Content */}
            {tabs.map((tab) => (
              <TabsContent key={tab.key} value={tab.key}>
                <motion.div 
                  className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, staggerChildren: 0.03 }}
                >
                  {tab.items.map((item, index) => (
                    <motion.span 
                      key={index} 
                      className="group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-base border-b border-dotted border-gray-400 group-hover:border-gray-900 transition-colors duration-200">
                        {item}
                      </span>
                      {index < tab.items.length - 1 && (
                        <span className="mx-0.5 sm:mx-1 text-gray-400">|</span>
                      )}
                    </motion.span>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ExploreProfilesTabs;
