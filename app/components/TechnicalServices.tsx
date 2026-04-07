"use client";
import FadeInSection from "./FadeInSection";

export default function AdditionalServices() {
  // Service list data split for the two-column box
  const leftColumnServices = [
    "BUILDING CONSTRUCTION (RESIDENTIAL, COMMERCIAL, INSTITUTIONAL)",
    "ROAD AND HIGHWAY CONSTRUCTION",
    "BRIDGE AND CULVERT CONSTRUCTION",
    "DRAINAGE SYSTEMS AND STORM WATER MANAGEMENT",
    "WATER AND SEWERAGE SYSTEMS",
  ];

  const rightColumnServices = [
    "RETAINING WALLS AND EMBANKMENTS",
    "STRUCTURAL DESIGN AND SUPERVISION",
    "CONCRETE WORKS AND PRECAST COMPONENTS",
    "LANDSCAPING AND EXTERNAL WORKS",
    "ENVIRONMENTAL AND GEOTECHNICAL ASSESSMENTS",
  ];

  // Watermark URL for the background (Ghosted texture)
  const watermarkUrl = "https://i.ibb.co/5gJGCL6Q/Screenshot-from-2026-04-06-15-35-52.png";
  // Background URL from the source image
  const backgroundUrl = "https://i.ibb.co/s9jtgPVv/Screenshot-from-2026-04-06-15-44-48.png";

  return (
    <section id="additional-services" className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden">

      {/* 1. BACKGROUND LAYER - Construction Scaffolding Grayscale */}
      <div className="absolute inset-0 z-0 opacity-40 grayscale">
        <img
          src={backgroundUrl}
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
        {/* Subtle vignette/fade over the image for text clarity */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* 2. WATERMARK LAYER - THE GHOSTED ARCHITECTURAL DRAWING */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        {/* Fixed: Comment moved outside the img tag to prevent parsing error */}
        <img
          src={watermarkUrl}
          alt="Additional Services Watermark"
          className="w-auto h-[250vh] max-w-none object-contain"
        />
      </div>

      {/* 3. CONTENT (Above Background) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center">

        {/* A. LOGO & BRANDING BLOCK */}
        <div className="w-full flex items-center justify-center gap-3 mb-16 relative">
          <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-2xl tracking-tighter">TV</span>
          </div>
          <span className="text-black font-bold uppercase tracking-[0.2em] text-sm md:text-base">
            Tweveen Ventures Ltd.
          </span>

        </div>

        {/* B. CENTERED HEADER BLOCK */}
        <FadeInSection>
          <div className="text-center mb-16 md:mb-20 space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase leading-[1.05] tracking-tighter">
              Additional Civil <br /> Engineering Services
            </h2>
            <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Beyond our core offerings, Tweveen Ventures provides a broad portfolio
              of engineering and construction solutions, including:
            </p>
          </div>
        </FadeInSection>

        {/* C. THE SERVICE LIST BOX */}
        <FadeInSection>
          <div className="bg-white/90 backdrop-blur-sm border-[2.5px] border-black p-10 md:p-12 lg:p-16 w-full max-w-5xl rounded-[40px] shadow-[20px_20px_0px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

              {/* Left Column Services */}
              <ul className="space-y-4">
                {leftColumnServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-black font-extrabold text-2xl pt-1 leading-none">•</span>
                    <span className="text-gray-900 text-[15px] md:text-base font-semibold tracking-tight leading-relaxed uppercase pt-1">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Right Column Services */}
              <ul className="space-y-4">
                {rightColumnServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-black font-extrabold text-2xl pt-1 leading-none">•</span>
                    <span className="text-gray-900 text-[15px] md:text-base font-semibold tracking-tight leading-relaxed uppercase pt-1">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </FadeInSection>

      </div>

    </section>
  );
}