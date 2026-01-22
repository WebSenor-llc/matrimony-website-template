"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
    <section className="rounded-2xl border bg-gray-50 px-4 sm:px-6 py-4 sm:py-6 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        {title}
      </h2>

      {shouldHideTabs ? (
        /* Content without tabs for Horoscope and Community Matrimony Services */
        <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-gray-700">
          {allItems.map((item, index) => (
            <span key={index} className="group cursor-pointer">
              <span className="border-b border-dotted border-gray-400 group-hover:border-gray-900">
                {item}
              </span>
              {index < allItems.length - 1 && (
                <span className="mx-0.5 sm:mx-1 text-gray-400">|</span>
              )}
            </span>
          ))}
        </div>
      ) : (
        /* Normal tabs for other sections */
        <Tabs defaultValue={tabs[0].key} className="w-full">
          {/* Tabs Header */}
          <TabsList className="mb-4 sm:mb-6 flex w-full justify-start gap-3 sm:gap-6 border-b bg-transparent p-0 overflow-x-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab?.key}
                value={tab?.key}
                className="
                  relative rounded-none px-0 pb-2 sm:pb-3 text-sm sm:text-base font-medium text-gray-600 whitespace-nowrap flex-shrink-0
                  data-[state=active]:text-gray-900
                  data-[state=active]:after:absolute
                  data-[state=active]:after:bottom-0
                  data-[state=active]:after:left-0
                  data-[state=active]:after:h-[2px]
                  data-[state=active]:after:w-full
                  data-[state=active]:after:bg-gray-900
                "
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-gray-700">
                {tab.items.map((item, index) => (
                  <span key={index} className="group cursor-pointer">
                    <span className="border-b border-dotted border-gray-400 group-hover:border-gray-900">
                      {item}
                    </span>
                    {index < tab.items.length - 1 && (
                      <span className="mx-0.5 sm:mx-1 text-gray-400">|</span>
                    )}
                  </span>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </section>
  );
};

export default ExploreProfilesTabs;
