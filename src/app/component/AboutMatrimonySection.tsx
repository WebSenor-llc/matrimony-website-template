"use client";

interface AboutMatrimonySectionProps {
  content?: string[];
}

const defaultContent = [
  `For over two decades, the beautiful Indian matchmaking tradition has spread its roots and become accessible, hassle-free, and exciting with pioneering marriage matrimony sites like Shaadi.com. Here, our aim is simple: to give you complete control over your matrimonial search, and help you discover blissful, meaningful connections that last a lifetime.`,

  `Shaadi.com’s credibility as one of the best Indian matrimony sites stems from having made over 80 lakh success stories possible. With a diverse portfolio of 35+ lakh verified marriage profiles on offer, we empower you to easily cross paths with the soulmate you deserve - no matter your age, community, faith, location, occupation, or other preferences.`,

  `Good matrimony sites remain as platforms where matrimony profile quantity often takes precedence over quality. But Shaadi.com continues to evolve the matchmaking process, thanks to its focus on technology such as: AI algorithms for quicker, more relevant matches; thorough verification checks and safety measures; and blue-tick verification that promises 40% more matches! With a premium membership that supercharges your search with minute personalisation controls, get more options to connect with your matches along with curated matches, advanced search filters, and much more!`,

  `Start with a profile on our marriage website for free and open the door to more promising opportunities that lead you to the one - or get your money back within 30 days!`
];

const AboutMatrimonySection = ({
  content = defaultContent,
}: AboutMatrimonySectionProps) => {
  return (
    <section className="rounded-t-2xl border bg-gray-100 px-6 py-6 text-gray-700 max-w-7xl mx-auto">
      <div className="space-y-5 text-base leading-relaxed">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutMatrimonySection;
