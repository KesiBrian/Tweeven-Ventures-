"use client";
import FadeInSection from "./FadeInSection";

export default function Objectives() {
  const objectives = [
    "To provide high-quality civil engineering solutions tailored to client needs.",
    "To ensure all projects are completed safely, on time, and within budget.",
    "To integrate modern construction techniques and sustainable materials.",
    "To foster long-term relationships with clients through reliability and integrity.",
    "To promote environmental stewardship in all construction activities."
  ];

  const imageUrl = "https://i.ibb.co/pBfPGYCy/Screenshot-from-2026-04-05-12-02-25.png";

  return (
    <section id="objectives" className="relative min-h-screen bg-white flex flex-col justify-center py-20 overflow-hidden">

      {/* 1. SUBTLE FULL-PAGE WATERMARK */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] grayscale">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover scale-105"
        />
      </div>


      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN: HEADER + IMAGE */}
          <div className="space-y-10">
            <FadeInSection>
              <div>
                <h2 className="text-5xl font-black text-black uppercase leading-tight tracking-tighter">
                  Our <br />
                  <span className="text-[#F15A24]">Objectives</span>
                </h2>
                <div className="w-16 h-1.5 bg-black mt-4"></div>
              </div>
            </FadeInSection>

            {/* THE PICTURE - Aligned under header */}
            <FadeInSection>
              <div className="relative w-full aspect-video overflow-hidden border-2 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.05)]">
                <img
                  src={imageUrl}
                  alt="Construction Site"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </FadeInSection>
          </div>

          {/* RIGHT COLUMN: CONTENT - Small font adjustment */}
          <div className="md:pt-4">
            <FadeInSection>
              <div className="space-y-3">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4 items-start bg-gray-50/50 p-5 border-l-4 border-[#F15A24]">
                    <span className="font-bold text-black text-sm">0{i + 1}.</span>
                    <p className="text-gray-800 text-[15px] font-semibold leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F15A24]"></div>
    </section>
  );
}