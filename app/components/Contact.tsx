"use client";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  // Watermark URL for the background
  const watermarkUrl = "https://i.ibb.co/s9jtgPVv/Screenshot-from-2026-04-06-15-44-48.png";
  // The steel construction background from your reference
  const backgroundUrl = "https://i.ibb.co/4ZZQdmLG/Screenshot-from-2026-04-06-15-09-30.png";

  return (
    <section id="contact" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* 1. TOP ORANGE CONTINUITY BAR */}
      <div className="absolute top-0 left-0 w-full h-12 bg-[#E65100] z-20" />

      {/* 2. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundUrl}
          alt="Construction Background"
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* WATERMARK LAYER */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 mix-blend-screen pointer-events-none">
          <img
            src={watermarkUrl}
            alt="Watermark"
            className="w-auto h-[150vh] max-w-none object-contain"
          />
        </div>
      </div>

      {/* 3. CENTERED CONTENT */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center flex flex-col items-center">
        <FadeInSection>

          {/* LOGO & BRANDING */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-xl tracking-tighter">TV</span>
            </div>
            <span className="text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              Tweveen Ventures Ltd.
            </span>
          </div>

          {/* THE REDUCED "THANK YOU" BOX - ALIGNED HORIZONTALLY */}
          <div className="border-[2px] border-white px-6 py-4 md:px-12 md:py-6 mb-12 inline-block">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-normal leading-none">
              Thank You.
            </h2>
          </div>

          {/* CONTACT DETAILS SUBTITLE */}
          <div className="mb-6">
            <p className="text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">
              G E T &nbsp; I N &nbsp; T O U C H &nbsp; W I T H &nbsp; U S :
            </p>
          </div>

          {/* FINAL CONTACT LIST - HORIZONTAL ALIGNMENT FOCUS */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col space-y-2 font-bold text-white tracking-tight text-base md:text-lg">
              <p>PHONE: +254 737 928 188</p>

              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rotate-45" />
                </div>
                <p className="uppercase">EMAIL: TWEEVEENVENTURES@GMAIL.COM</p>
              </div>

              <p className="uppercase">LOCATION: KILIFI, KENYA</p>
            </div>
          </div>

        </FadeInSection>
      </div>

    </section>
  );
}