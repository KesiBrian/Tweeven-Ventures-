"use client";
import FadeInSection from "./FadeInSection";

export default function MissionVision() {
  const data = [
    {
      title: "OUR MISSION",
      text: "To pioneer excellence in civil engineering through innovation, safety, and sustainability while delivering projects that improve lives and strengthen communities."
    },
    {
      title: "OUR VISION",
      text: "To become a leading force in the civil engineering sector, recognized for quality, sustainability, and innovation. We aim to build enduring infrastructure that inspires progress and positively impacts future generations."
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden min-h-[70vh] flex items-center">

      {/* Subtle Watermark Background */}
      <div
        className="absolute inset-0 opacity-[0.04] grayscale pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/MxPyMgQq/Screenshot-from-2026-04-05-10-55-19.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">

          {data.map((item, index) => (
            <FadeInSection key={item.title}>
              <div className="flex justify-center group">

                {/* THE HEXAGON BOX - PDF Style */}
                <div
                  className="bg-white border-[4px] border-black p-12 md:p-16 text-center shadow-[20px_20px_0px_rgba(0,173,239,0.15)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[25px_25px_0px_rgba(0,173,239,0.25)] flex flex-col justify-center items-center"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    aspectRatio: '1 / 1',
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                  }}
                >
                  {/* Numbering Label */}
                  <div className="mb-4 bg-[#00ADEF] text-white px-3 py-1 text-[10px] font-black tracking-widest uppercase">
                    Objective 0{index + 1}
                  </div>

                  <h3 className="text-black font-black text-2xl md:text-3xl mb-6 uppercase tracking-tighter leading-none">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium max-w-[280px]">
                    {item.text}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className="mt-6 w-12 h-1 bg-[#F15A24]"></div>
                </div>

              </div>
            </FadeInSection>
          ))}

        </div>
      </div>

    </section>
  );
}