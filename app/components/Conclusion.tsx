"use client";
import FadeInSection from "./FadeInSection";

export default function CompanyDetails() {
  // Data captured verbatim from the reference image
  const companyData = [
    { label: "Registered Name", value: "Tweveen Ventures LTD" },
    { label: "Incorporation Date", value: "13th December 2023" },
    { label: "Company Type", value: "Private Limited Company" },
    { label: "Registration No", value: "PVT-MKUMZ2ZJ" },
    { label: "Location", value: "Kilifi, Kenya" },
    { label: "Tagline", value: "Civil Engineering with a Human Touch" },
  ];

  return (
    <section id="company-details" className="relative py-24 md:py-32 bg-[#F2F2F2] min-h-screen flex items-center overflow-hidden">

      {/* 1. TOP HEADER - Logo and centered heading */}
      <div className="absolute top-10 right-10 md:right-20 flex items-center gap-4 z-10">
        <span className="font-bold text-gray-700 uppercase tracking-tighter text-sm">
          Tweveen Ventures Ltd.
        </span>
        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
           <span className="text-white font-black text-xl">TV</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">

        {/* Centered Main Header Area */}
        <FadeInSection>
          <div className="text-center mb-16 md:mb-20 space-y-3">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase leading-[1.05] tracking-tighter max-w-2xl mx-auto">
              Company <br className="md:hidden" /> Details
            </h2>
            {/* Minimal separator line */}
            <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          </div>
        </FadeInSection>

        {/* DETAILS GRID - Two column layout for mobile, standard list for larger screens */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-8 md:p-12 lg:p-16 border-2 border-white max-w-4xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col space-y-6 md:space-y-7 pt-4">

              {companyData.map((detail, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-x-12 items-baseline">

                  {/* Label - font-black for maximum weight, md:col-span-4 to match balance */}
                  <span className="md:col-span-4 text-gray-900 text-base md:text-[17px] font-black uppercase tracking-tight leading-none pt-1">
                    {detail.label}:
                  </span>

                  {/* Value - font-semibold for clarity, standard sentence case */}
                  <span className="md:col-span-8 text-gray-800 text-lg md:text-xl font-semibold leading-relaxed tracking-tight pl-0 md:pl-2">
                    {detail.value}
                  </span>

                </div>
              ))}

            </div>
          </FadeInSection>
        </div>
      </div>

      {/* 2. SOLID ORANGE FOOTER ACCENT */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#E65100]"></div>

    </section>
  );
}