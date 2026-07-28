"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const SessionGlimpseSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const sessionImages = [
    {
      src: "/images/pooja.webp",
      title: t.glimpse.g1Title,
      caption: t.glimpse.g1Desc,
    },
    {
      src: "/images/activity1.webp",
      title: t.glimpse.g2Title,
      caption: t.glimpse.g2Desc,
    },
    {
      src: "/images/activity2.webp",
      title: t.glimpse.g3Title,
      caption: t.glimpse.g3Desc,
    },
  ];

  return (
    <Section bgColor="cream-100" id="glimpse">
      <SectionHeading
        eyebrow={t.glimpse.eyebrow}
        title={t.glimpse.title}
        subtitle={t.glimpse.subtitle}
      />

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory">
        {sessionImages.map((img, idx) => (
          <div
            key={idx}
            className="flex-none w-[85vw] sm:w-[320px] md:w-auto snap-center bg-[#FFF6EE] rounded-[16px] overflow-hidden shadow-warm border border-[#F3B6B2] flex flex-col group"
          >
            <div className="relative aspect-[4/3] w-full bg-[#FCECE9] overflow-hidden">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, 33vw"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-serif text-lg font-bold text-[#8E2B5C] mb-2 leading-snug">
                {img.title}
              </h3>
              <p className="text-sm text-[#36292E] opacity-90 leading-relaxed">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
