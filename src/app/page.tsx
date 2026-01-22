import Image from "next/image";
import Header from "./layout/Header";
import HomeBanner from "./component/home/HomeBanner";
import ShaadiExperience from "./component/home/ShaadiExperience";
import FounderMessage from "./component/home/FounderMessage";
import SuccessStories from "./component/home/SuccessStories";
import FAQSection from "./component/home/FAQSection";
import ExploreProfilesTabs from "./component/explore/ExploreProfilesTabs";
import AboutMatrimonySection from "./component/AboutMatrimonySection";
import Footer from "./layout/Footer";
import { DatingTabs, exploreTabs, HoroscopeTabs, MatrimonyServiceTabs } from "../utils/constant";

export default function Home() {
  return (
    <div className="min-h-screen space-y-3 sm:space-y-4">
      <HomeBanner />
      <ShaadiExperience />
      <FounderMessage />
      <SuccessStories />
      <FAQSection />
      <ExploreProfilesTabs
        title="Explore Matrimonial Profiles By"
        tabs={exploreTabs}
      />
      <ExploreProfilesTabs
        title="Dating"
        tabs={DatingTabs}
      />
      <ExploreProfilesTabs
        title="Horoscope"
        tabs={HoroscopeTabs}
      />
      <ExploreProfilesTabs
        title="Community Matrimony Services"
        tabs={MatrimonyServiceTabs}
      />
      <AboutMatrimonySection />
    </div>
  );
}
