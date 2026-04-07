"use client";
import FadeInSection from "./FadeInSection";

export default function HSE() {
  const safetyLogoUrl = "https://i.ibb.co/wZTvxxv1/Screenshot-from-2026-04-05-13-45-34.png";

  return (
    // Reverted background to #F2F2F2 to match the picture background perfectly
    <section id="hse" className="relative py-24 bg-[#F2F2F2] min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN: HEADER AND LOGO */}
          <FadeInSection>
            <div className="flex flex-col space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase leading-[1.1] tracking-tighter">
                Health, Safety <span className="text-black/70">&</span> <br />
                Environment (HSE) Policy
              </h2>

              {/* Logo size slightly reduced as requested, filters removed for natural look */}
              <div className="w-full max-w-[320px]">
                <img
                  src={safetyLogoUrl}
                  alt="HSE Safety Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT COLUMN: CONTENT */}
          <FadeInSection>
            <div className="flex flex-col space-y-16 md:pt-2">

              <div className="space-y-4">
                <p className="text-gray-900 text-[16px] md:text-lg font-medium leading-relaxed max-w-xl">
                  Tweveen Ventures maintains a zero-compromise approach to safety. Every project follows strict health and environmental guidelines to prevent accidents, minimize waste, and preserve local ecosystems. We conduct regular site audits, employee training, and environmental assessments to ensure compliance with NEMA and NCA regulations.
                </p>
              </div>

              <div className="flex flex-col space-y-6">
                <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">
                  Quality Assurance
                </h3>
                <p className="text-gray-900 text-[16px] md:text-lg font-medium leading-relaxed max-w-xl">
                  Quality is central to everything we do. Our team adheres to tested project management systems, supplier vetting processes, and on-site supervision to guarantee precision, durability, and client satisfaction.
                </p>
              </div>

            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}