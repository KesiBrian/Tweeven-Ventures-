"use client";
import FadeInSection from "./FadeInSection";
import Image from "next/image";

export default function Hero() {
  // New Watermark URL provided
  const watermarkUrl = "https://i.ibb.co/HDTRYkH7/Screenshot-from-2026-04-06-20-10-01.png";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">

      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">

        {/* Base Background Image - Grayscale Construction Site */}
        <Image
          src="/hero-bg.jpg"
          alt="Construction Site"
          fill
          priority
          className="object-cover grayscale opacity-30"
        />

        {/* Dark Neutral Overlay (Replaces the blue background for better contrast) */}
        <div className="absolute inset-0 bg-black/10" />

        {/* THE WATERMARK LAYER */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img
            src={watermarkUrl}
            alt="Tweveen Watermark"
            className="w-auto h-[160vh] max-w-none object-contain"
          />
        </div>

      </div>


      {/* 2. CONTENT LAYER */}
      <FadeInSection>
        <div className="relative z-10 text-center flex flex-col items-center">

          {/* MAIN BRAND BOX */}
          <div className="bg-white border-[4px] border-black px-10 py-8 md:px-16 md:py-10 shadow-[20px_20px_0px_rgba(0,0,0,0.15)]">

            {/* MAIN TITLE */}
            <h1 className="text-3xl md:text-5xl font-black tracking-[0.25em] uppercase text-black">
              Tweveen Ventures Ltd.
            </h1>

            {/* SUBTITLE */}
            <h2 className="mt-4 text-xs md:text-sm font-bold tracking-[0.45em] uppercase text-[#E65100]">
              Civil Engineering and Construction
            </h2>

          </div>


          {/* SLOGAN */}
          <div className="mt-8 relative">
            <p className="text-lg md:text-xl italic font-bold text-black bg-white/40 inline-block px-6 py-2 backdrop-blur-sm rounded-sm">
              Civil engineering with a human touch
            </p>
          </div>

        </div>
      </FadeInSection>


      {/* 3. BOTTOM ORANGE BAR - Consistent with the site-wide footer style */}
      <div className="absolute bottom-0 w-full h-12 bg-[#E65100] shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-20" />

    </section>
  );
}