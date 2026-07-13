import React from 'react';

const certificationBodies = [
  {
    name: "National Construction Authority (NCA)",
    acronym: "NCA",
    description: "Registered and licensed contractor for building, civil engineering, and specialized construction works, ensuring strict compliance with national safety and structural regulations.",
    status: "Active / Compliant",
    // NCA Identity: Deep Blue and Golden Yellow
    brandColor: "text-[#0F2C59]",
    badgeBg: "bg-[#0F2C59]/5",
    watermark: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-15 text-[#0F2C59] absolute right-4 bottom-2 fill-current">
        <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M30 40 L50 20 L70 40 L50 60 Z" />
        <rect x="44" y="55" width="12" height="25" />
      </svg>
    )
  },
  {
    name: "Access to Government Procurement Opportunities",
    acronym: "AGPO",
    description: "Fully certified under the AGPO program, enabling preferential access and institutional compliance for strategic government tenders, enterprise supply chains, and public works.",
    status: "Certified Enterprise",
    // AGPO Identity: Kenyan National Theme (Red, Green, Black)
    brandColor: "text-[#006643]",
    badgeBg: "bg-[#006643]/5",
    watermark: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-10 text-[#990000] absolute right-2 bottom-0 fill-current">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M50 15 L60 45 L90 45 L65 65 L75 95 L50 75 L25 95 L35 65 L10 45 L40 45 Z" />
      </svg>
    )
  },
  {
    name: "Electronic Government Procurement System",
    acronym: "e-GP",
    description: "Fully verified and integrated vendor within the national electronic procurement framework for streamlined, transparent bidding, secure contract execution, and compliant financial processing.",
    status: "Verified Portal Vendor",
    // e-GP Identity: Cyan/Digital Tech Blue
    brandColor: "text-[#0080FF]",
    badgeBg: "bg-[#0080FF]/5",
    watermark: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-15 text-[#0080FF] absolute right-4 bottom-2 fill-current">
        <rect x="15" y="15" width="70" height="70" rx="10" fill="none" stroke="currentColor" strokeWidth="5" />
        <path d="M30 50 Q50 20 70 50 Q50 80 30 50 Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="50" cy="50" r="10" />
      </svg>
    )
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase">
            Regulatory Compliance & Certifications
          </h2>
          <div className="w-16 h-[3px] bg-tweveen-orange mx-auto mt-4"></div>
          <p className="mt-6 text-sm font-medium text-slate-600 leading-relaxed">
            Tweveen Ventures Ltd is fully vetted, registered, and authorized by Kenya’s premier regulatory bodies, guaranteeing structural integrity, operational transparency, and elite institutional alignment.
          </p>
        </div>

        {/* Corporate Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {certificationBodies.map((body, index) => (
            <div
              key={index}
              className="bg-white rounded-sm border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Logo Rectangle Container with Watermark effect */}
                <div className={`h-24 w-full ${body.badgeBg} rounded-sm flex items-center justify-start px-6 mb-6 border border-slate-100 relative overflow-hidden`}>

                  {/* Background Watermark Graphic */}
                  {body.watermark}

                  {/* Foreground High-Contrast Text */}
                  <div className="relative z-10 flex flex-col">
                    <span className={`text-2xl font-black ${body.brandColor} tracking-tight leading-none`}>
                      {body.acronym}
                    </span>
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">
                      Official Core Registry
                    </span>
                  </div>
                </div>

                {/* Status Pill badge */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {body.status}
                  </span>
                </div>

                <h3 className="text-md font-black text-slate-900 mb-2 uppercase tracking-wide">
                  {body.name}
                </h3>

                <p className="text-xs leading-relaxed text-slate-600 font-medium">
                  {body.description}
                </p>
              </div>

              {/* Verified Trust Tagline */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-[10px] text-slate-400 font-black uppercase tracking-wider">
                <svg className="w-4 h-4 text-emerald-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Verified Institutional Standing
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Documentation Notice */}
        <div className="mt-12 bg-white rounded-sm p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-3 bg-tweveen-orange/10 text-tweveen-orange hidden sm:block rounded-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V7a4 4 0 00-8 0v4c0 2.508.834 4.823 2.24 6.74m3.221 3.05a11.05 11.05 0 01-2.812-1.732c-.374-.322-.743-.657-1.11-1M12 11a14 14 0 014.243 9.57M18.75 18.75a11.054 11.054 0 002.813-1.733c.373-.322.742-.657 1.109-1m-4.243 4.243a2 2 0 002.046-3.23l-.054-.09A13.916 13.916 0 0015 11V7a4 4 0 00-8 0v4c0 2.508-.834 4.823-2.24 6.74" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase tracking-wide">Valid Corporate Documentation Available</p>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">Official license numbers, original seals, and comprehensive fiscal certificates can be provided upon structured formal request.</p>
            </div>
          </div>
          <a href="#contact" className="text-[10px] font-black uppercase tracking-wider text-tweveen-orange bg-tweveen-orange/5 px-4 py-2 rounded-sm hover:bg-tweveen-orange/10 transition-colors whitespace-nowrap">
            Request Documents
          </a>
        </div>

      </div>
    </section>
  );
}