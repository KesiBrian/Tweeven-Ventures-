"use client";
import FadeInSection from "./FadeInSection";

export default function TechnicalServices() {
  // Image URLs
  const imgFarLeftHex = "https://i.ibb.co/JWSBrxrp/Screenshot-from-2026-04-06-20-20-29.png";
  const imgZigZagHex = "https://i.ibb.co/d04L9hxQ/Screenshot-from-2026-04-06-20-20-04.png";
  const imgRectangular = "https://i.ibb.co/fVyBqZPQ/Screenshot-from-2026-04-06-20-17-56.png";

  const hexagonStyle = {
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
  };

  return (
    <section id="resources" className="relative py-24 bg-[#F2F2F2] min-h-screen flex items-center overflow-hidden">

      {/* 1. ZIG-ZAG HEXAGON COMPOSITION */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden xl:block">
        <div
          className="absolute left-[60px] top-[12%] w-[320px] h-[320px] shadow-xl"
          style={hexagonStyle}
        >
          <img src={imgFarLeftHex} className="w-full h-full object-cover grayscale" alt="Equipment 1" />
        </div>

        <div
          className="absolute left-[240px] top-[42%] w-[300px] h-[300px] shadow-2xl"
          style={hexagonStyle}
        >
          <img src={imgZigZagHex} className="w-full h-full object-cover grayscale" alt="Equipment 2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 h-full">
        <div className="grid md:grid-cols-12 gap-12 items-center h-full">

          {/* 2. CONTENT COLUMN - Clear of the overlap */}
          <div className="md:col-span-7 xl:col-span-6 xl:ml-32 space-y-8 flex flex-col justify-center text-left relative z-20">
            <FadeInSection>
              <div className="space-y-2">
                <h2 className="text-5xl md:text-7xl font-black text-black uppercase leading-none tracking-tighter">
                  Equipment <span className="text-black/70">&</span><br /> Resources
                </h2>
                <div className="w-full h-[1px] bg-gray-400 mt-6"></div>
              </div>

              <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed mt-8 max-w-lg">
                Tweveen Ventures invests in modern tools and machinery for excavation,
                grading, concrete works, and road construction. We also collaborate with
                reliable equipment partners to ensure resource availability for large-scale projects.
              </p>
            </FadeInSection>
          </div>

          {/* 3. EXCAVATOR IMAGE - Shifted further right to clear the "S" */}
          <div className="md:col-span-5 xl:col-span-6 relative h-full flex items-end justify-end z-10">
            <FadeInSection>
              <div className="xl:absolute xl:bottom-[-40px] xl:right-[-80px] w-full max-w-[580px] shadow-[30px_30px_0px_rgba(0,0,0,0.05)] border border-gray-300 bg-white p-2 rotate-[-2deg]">
                <img
                  src={imgRectangular}
                  alt="Excavator"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>

      {/* FOOTER STRIP */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#E65100] z-30"></div>

    </section>
  );
}