"use client";
import FadeInSection from "./FadeInSection";

export default function Services() {
  const services = [
    {
      title: "1. Infrastructure Maintenance & Repairs",
      desc: "We keep infrastructure in top condition through expert maintenance and repair works on roads, bridges, drainage systems, and other civil structures.",
    },
    {
      title: "2. Project Management",
      desc: "From planning to completion, we provide structured project management that ensures time, cost, and quality targets are achieved.",
    },
    {
      title: "3. Land Development",
      desc: "We offer full-service land development including site preparation, grading, and infrastructure installation for residential, commercial, and industrial use.",
    },
    {
      title: "4. Code Compliance",
      desc: "We handle regulatory requirements, ensuring projects meet local and national construction standards.",
    },
    {
      title: "5. Safety Inspections",
      desc: "Our safety inspection services protect workers, assets, and communities throughout every phase of a project.",
    },
  ];

  const imageUrl = "https://i.ibb.co/5WP5KmXB/Screenshot-from-2026-04-05-13-08-26.png";

  return (
    // Changed bg-[#F2F2F2] to bg-white for a seamless blend
    <section id="services" className="relative min-h-screen bg-white flex items-center overflow-hidden">


      <div className="w-full grid md:grid-cols-12 items-stretch min-h-screen">

        {/* LEFT COLUMN: FULL-SIDE IMAGE COMPOSITION */}
        <div className="md:col-span-5 relative flex items-center justify-center bg-white overflow-hidden">
          {/* 1. The "Expanded" Background - Now fills the entire container */}
          <div
            className="absolute inset-0 z-0 opacity-15 grayscale scale-110"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // Subtle hexagon mask for the "expanded" feel
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
            }}
          />

          <FadeInSection className="z-10">
            <div className="relative w-[320px] h-[380px] md:w-[480px] md:h-[550px]">
              {/* 2. The Main Foreground Hexagon (Solid) */}
              <div
                className="absolute inset-0 shadow-2xl border-white border-8"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
          </FadeInSection>
        </div>

        {/* RIGHT COLUMN: CONTENT - Blended with White background */}
        <div className="md:col-span-7 flex flex-col justify-center px-12 md:px-20 lg:px-32 py-24 bg-white">
          <FadeInSection>
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-black text-black uppercase leading-none tracking-tighter">
                Our Services
              </h2>
            </div>

            <div className="space-y-10">
              {services.map((s, i) => (
                <div key={i} className="group">
                  <h4 className="text-lg md:text-xl font-black text-black uppercase tracking-tight flex items-center gap-4">
                    {s.title}
                    <div className="flex-grow h-[1px] bg-black/10 group-hover:bg-black transition-colors" />
                  </h4>
                  <p className="mt-2 text-gray-700 text-[15px] font-medium leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>

      </div>
    </section>
  );
}