"use client";
import FadeInSection from "./FadeInSection";
import Image from "next/image";

export default function Leadership() {
  const leaders = [
    {
      name: "Lewis Kamau Thiongo",
      title: "Executive Director",
      bio: "Lewis provides strategic leadership across all construction projects. With a solid foundation in civil engineering, he ensures quality, safety, and efficiency on every site. His focus on results and client satisfaction continues to shape the company's operational excellence.",
    },
    
    {
      name: "Benard Kireti Thiongo",
      title: "Executive Director",
      bio: "Benard brings creativity and precision to every project, blending technical and aesthetic excellence. His expertise in interior design and finishing ensures superior outcomes. He also champions innovation and sustainability within the company.",
    },
  ];

  return (
    <section id="leadership" className="py-24 md:py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* HEADER BLOCK - Unified alignment */}
        <FadeInSection>
          <div className="mb-20 space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase leading-[1.1] tracking-tighter">
              Executive Leadership
            </h2>
            <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed">
              Tweveen Ventures Ltd is led by a team of Executive Directors who bring
              together deep technical expertise, visionary leadership, and hands-on
              experience. Their combined commitment drives the company's pursuit of
              engineering excellence, innovation, and sustainability.
            </p>
          </div>
        </FadeInSection>

        {/* LEADERSHIP GRID - 3 Columns with precise spacing */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {leaders.map((leader, index) => (
            <FadeInSection key={index}>
              <div className="flex flex-col space-y-4">
                {/* Header with horizontal separator */}
                <div className="relative pb-3 mb-3">
                  <h3 className="text-xl font-extrabold text-black uppercase tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-gray-700 text-base font-semibold">
                    {leader.title}
                  </p>
                  {/* Matching the partial border from the reference */}
                  <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gray-300"></div>
                </div>

                {/* Detailed Bio - Font weight medium for readability */}
                <p className="text-gray-900 text-[15px] md:text-base font-medium leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}