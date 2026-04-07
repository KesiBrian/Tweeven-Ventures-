"use client";
import FadeInSection from "./FadeInSection";

export default function About() {
  const imageUrl = "https://i.ibb.co/MxPyMgQq/Screenshot-from-2026-04-05-10-55-19.png";

  return (
    <section id="about" className="relative py-24 bg-tweveen-gray overflow-hidden">

      {/* Faded Watermark Background - Using the new URL */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center grayscale pointer-events-none"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE TEXT */}
          <FadeInSection>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-tweveen-orange"></div>
                <h2 className="text-4xl font-black text-tweveen-dark uppercase tracking-tight">
                  About Us
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="font-bold text-lg">
                  Tweveen Ventures LTD is a civil engineering company based in Kilifi, Kenya.
                  Founded on 13th December 2023.
                </p>
                <p>
                  We specialize in delivering quality civil engineering projects that meet modern
                  standards while ensuring safety, efficiency, and community impact. From roads
                  and drainage to land development and infrastructure maintenance, our work is
                  driven by excellence, integrity, and innovation.
                </p>
                <p className="italic">
                  At Tweveen Ventures, we don’t just construct, we care. Every project is a
                  partnership with our clients and the communities we serve.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT SIDE HEXAGON IMAGE */}
          <FadeInSection>
            <div className="relative flex justify-center">

              {/* Modern Hexagon Card Container */}
              <div className="relative bg-white shadow-2xl p-6">

                {/* The defined hexagon wrapper */}
                <div
                  className="w-[360px] h-[320px] overflow-hidden relative"
                  style={{
                    clipPath:
                      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  }}
                >
                  {/* Standard img tag for instant visibility of external link */}
                  <img
                    src={imageUrl}
                    alt="Nation Media Building"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Page Indicator */}
              <div className="absolute -left-14 top-1/2 -rotate-90 bg-black text-white px-4 py-1 text-[10px] font-bold tracking-[0.4em] uppercase">
                PAGE 002
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}