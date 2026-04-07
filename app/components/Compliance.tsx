"use client";
import FadeInSection from "./FadeInSection";

export default function TargetClients() {
  // Client list captured verbatim from the reference image
  const clientList = [
    { number: 1, text: "National and County Governments" },
    { number: 2, text: "Developers and Real Estate Investors" },
    { number: 3, text: "NGOs and International Organizations" },
    { number: 4, text: "Industrial and Agricultural Institutions" },
    { number: 5, text: "Private Landowners and Corporates" },
  ];

  return (
    <section id="target-clients" className="relative py-24 md:py-32 bg-[#F2F2F2] min-h-screen flex items-center overflow-hidden">

      {/* 1. TOP HEADER - Company logo positioned top-right */}
      <div className="absolute top-10 right-10 md:right-20 flex items-center gap-4 z-10">
        <span className="font-bold text-gray-700 uppercase tracking-tighter text-sm">
          Tweveen Ventures Ltd.
        </span>
        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
           <span className="text-white font-black text-xl">TV</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">

          {/* LEFT COLUMN: THE NUMBERED CLIENT LIST */}
          <div className="md:col-span-6 flex flex-col space-y-6 pt-10">
            {clientList.map((client) => (
              <FadeInSection key={client.number}>
                {/* ListItem Container with specific horizontal line style */}
                <div className="flex items-center space-x-6 border-b border-gray-300 pb-5">
                  {/* Number - Font black for high weight */}
                  <span className="text-4xl md:text-5xl font-black text-black leading-none tracking-tighter">
                    {client.number}.
                  </span>
                  {/* Text - font-semibold for balance */}
                  <span className="text-gray-900 text-[17px] md:text-lg lg:text-xl font-semibold tracking-tight leading-relaxed max-w-md">
                    {client.text}
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* RIGHT COLUMN: THE PROMINENT HEADER */}
          <div className="md:col-span-6 flex flex-col justify-center items-start md:items-end md:pl-16">
            <FadeInSection>
              {/* Refined Header Size for a bold, clean aesthetic */}
              <div className="space-y-4 md:text-right">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase leading-[1.05] tracking-tighter max-w-sm">
                  Target Clients
                </h2>
                <div className="w-24 h-1 bg-gray-400 md:ml-auto"></div>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>

      {/* 2. SOLID ORANGE FOOTER ACCENT */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#E65100]"></div>

    </section>
  );
}