import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const SessionGlimpseSection: React.FC = () => {
  const sessionImages = [
    {
      src: "/images/pooja.webp",
      title: "Vaidik Sanskar & Pooja Rituals",
      caption: "Spiritual connection through auspicious mantras, lamps, and Garbha Pooja.",
    },
    {
      src: "/images/activity1.webp",
      title: "Interactive Daily Activities",
      caption: "Mindful creative exercises, music therapy, and stories shared live together.",
    },
    {
      src: "/images/activity2.webp",
      title: "Prenatal Yoga & Pranayam",
      caption: "Gentle postures tailored for pregnancy to keep your body strong, flexible, and pain-free.",
    },
  ];

  return (
    <Section bgColor="cream-100" id="glimpse">
      <SectionHeading
        eyebrow="INSIDE OUR DAILY SESSIONS"
        title="A Glimpse of Your Sessions"
        subtitle="Every 45-minute live Zoom session is designed to soothe your mind, strengthen your body, and connect with your baby."
      />

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory">
        {sessionImages.map((img, idx) => (
          <div
            key={idx}
            className="flex-none w-[85vw] sm:w-[320px] md:w-auto snap-center bg-[#FDF7F1] rounded-[16px] overflow-hidden shadow-warm border border-[#F2C0CD] flex flex-col group"
          >
            <div className="relative aspect-[4/3] w-full bg-[#FBE7EC] overflow-hidden">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, 33vw"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-serif text-lg font-bold text-[#5E1A3D] mb-2 leading-snug">
                {img.title}
              </h3>
              <p className="text-sm text-[#36292E] leading-relaxed">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
