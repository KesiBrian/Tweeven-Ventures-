"use client";
import FadeInSection from "./FadeInSection";

export default function Partners() {
  // Verbatim list items from the reference image
  const bulletPoints = [
    "Proven technical expertise and local experience",
    "Strong focus on client satisfaction and accountability",
    "Adherence to project timelines and budgets",
    "Qualified engineers and dedicated workforce",
    "Emphasis on sustainability and safety",
  ];

  // The provided architectural drawing URL
  const illustrationUrl = "https://i.ibb.co/Txs6y33q/Screenshot-from-2026-04-06-15-55-30.png";

  return (
    <section id="why-choose" className="relative py-24 md:py-32 bg-[#F2F2F2] min-h-screen flex items-center overflow-hidden">

      {/* 1. TOP HEADER BRANDING */}
      <div className="absolute top-10 right-10 md:right-20 flex items-center gap-4 z-20">
        <span className="font-bold text-gray-700 uppercase tracking-tighter text-sm">
          Tweveen Ventures Ltd.
        </span>
        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
           <span className="text-white font-black text-xl">TV</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">

          {/* LEFT COLUMN: THE IMAGE COMPOSITION */}
          <div className="md:col-span-7 relative h-[600px] flex items-end justify-end">
            <FadeInSection>
              <div className="w-full max-w-[650px] relative z-20">
                {/* Comment moved outside to fix Parsing Error */}
                <img
                  src={illustrationUrl}
                  alt="Architectural Drawing"
                  className="w-full h-auto object-contain mix-blend-multiply opacity-90"
                />
              </div>
            </FadeInSection>
          </div>

          {/* RIGHT COLUMN: HEADER & CONTENT */}
          <div className="md:col-span-5 flex flex-col space-y-12">
            <FadeInSection>
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase leading-[1.05] tracking-tighter max-w-sm">
                  Why Choose Tweveen Ventures
                </h2>
                <div className="w-24 h-1 bg-gray-400"></div>
              </div>
            </FadeInSection>

            {/* Bullet List */}
            <div className="pt-4">
              <ul className="space-y-5">
                {bulletPoints.map((point, index) => (
                  <FadeInSection key={index}>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-extrabold text-2xl pt-1 leading-none">•</span>
                      <span className="text-gray-900 text-base md:text-lg font-semibold tracking-tight leading-relaxed">
                        {point}
                      </span>
                    </li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE WATERMARK LAYER */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img
          src={illustrationUrl}
          alt="Why Choose Watermark"
          className="w-auto h-[300vh] max-w-none object-contain"
        />
      </div>

      {/* 3. SOLID ORANGE FOOTER ACCENT */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#E65100]"></div>

    </section>
  );
}