"use client";
import FadeInSection from "./FadeInSection";

export default function CoreValues() {
  const values = [
    { title: "INTEGRITY:", desc: "We uphold honesty and transparency in every project." },
    { title: "QUALITY:", desc: "We never compromise on standards, materials, or professionalism." },
    { title: "SAFETY:", desc: "We protect people, property, and the environment." },
    { title: "INNOVATION:", desc: "We embrace modern technologies and methods for efficiency." },
    { title: "TEAMWORK:", desc: "We value collaboration and mutual respect." },
    { title: "SUSTAINABILITY:", desc: "We build for today while protecting tomorrow." }
  ];

  return (
    <section id="values" className="relative min-h-screen bg-white flex flex-col justify-center py-24 overflow-hidden">

      {/* 1. CENTERED WATERMARK IMAGE (Left-aligned, Vertically Centered) */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[60%] md:w-[45%] lg:w-[40%] z-0 pointer-events-none opacity-40 md:opacity-50">
        <FadeInSection>
          <img
            src="https://i.ibb.co/vMCWPdx/Screenshot-from-2026-04-05-11-23-33.png"
            alt="Engineers pointing"
            className="w-full h-auto object-contain grayscale"
          />
        </FadeInSection>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* 2. SPREAD HEADER AREA (Aligned over the grid) */}
        <div className="flex justify-start md:ml-[30%] lg:ml-[35%] mb-12">
          <div className="w-full">
            <FadeInSection>
              <div className="border-l-[6px] border-black pl-8 py-2 bg-transparent">
                <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-[0.1em] leading-none">
                  Core Values
                </h2>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* 3. ENHANCED VALUES GRID */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:ml-[30%] lg:ml-[35%]">
          {values.map((v, index) => (
            <FadeInSection key={v.title}>
              <div className="flex items-start gap-6 group">
                {/* Slightly larger Hexagon */}
                <div
                  className="w-12 h-12 bg-black text-white flex-shrink-0 flex items-center justify-center text-[12px] font-black transition-all group-hover:bg-[#F15A24] group-hover:scale-110 shadow-lg"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  {index + 1}.
                </div>
                <div>
                  {/* Title font increased to text-2xl */}
                  <h4 className="font-black text-black text-xl md:text-2xl uppercase tracking-tighter mb-2">
                    {v.title}
                  </h4>
                  {/* Description font increased to text-base/lg */}
                  <p className="text-gray-900 text-base md:text-lg font-semibold leading-snug max-w-sm">
                    {v.desc}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

    </section>
  );
}