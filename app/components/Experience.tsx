"use client";
import FadeInSection from "./FadeInSection";

export default function AtAGlance() {
  const stats = [
    { number: "2+", label: "YEARS IN BUSINESS" },
    { number: "15+", label: "COMPLETED PROJECTS" },
    { number: "6", label: "ONGOING PROJECTS" },
    { number: "2", label: "UPCOMING PROJECTS" },
  ];

  // New expanded illustration URL
  const constructionIllustrationUrl = "https://i.ibb.co/LD0sKkFY/Screenshot-from-2026-04-06-20-52-27.png";

  return (
    <section id="at-a-glance" className="relative py-24 md:py-32 bg-[#F2F2F2] min-h-screen flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* LEFT COLUMN: HEADER & STATISTICS */}
          <div className="md:col-span-6 flex flex-col space-y-12 md:space-y-16">
            <FadeInSection>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase leading-[1.1] tracking-tighter max-w-lg">
                  Tweveen Ventures At A Glance
                </h2>
                <div className="w-24 h-1 bg-gray-400"></div>
              </div>
            </FadeInSection>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 pt-6">
              {stats.map((stat, index) => (
                <FadeInSection key={index}>
                  <div className="flex flex-col">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-none tracking-tighter">
                      {stat.number}
                    </span>
                    <span className="text-gray-800 text-sm md:text-base font-semibold uppercase tracking-tight mt-1">
                      {stat.label}
                    </span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: EXPANDED ILLUSTRATION (Covering half the section) */}
          <div className="md:col-span-6 flex flex-col justify-end items-end">
            <FadeInSection>
              <div className="w-full flex items-center justify-end">
                <img
                  src={constructionIllustrationUrl}
                  alt="Construction Illustration"
                  className="w-full max-w-[800px] h-auto object-contain mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#E65100]"></div>

    </section>
  );
}