"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const WhatIsGarbhsanskarSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const highlights = [
    {
      title: t.whatIs.card1Title,
      text: t.whatIs.card1Desc,
    },
    {
      title: t.whatIs.card2Title,
      text: t.whatIs.card2Desc,
    },
    {
      title: t.whatIs.card3Title,
      text: t.whatIs.card3Desc,
    },
  ];

  return (
    <Section bgColor="blush-100" id="what-is-garbhsanskar">
      <SectionHeading
        eyebrow={t.whatIs.eyebrow}
        title={t.whatIs.title}
      />

      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-5 text-base sm:text-lg text-[#36292E]">
        <p>{t.whatIs.para1}</p>
        <p>{t.whatIs.para2}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {highlights.map((item, index) => (
          <Card key={index} bgColor="bg-[#FDF7F1]" className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#D5DEC6] flex items-center justify-center text-[#7D2352] mb-5 shadow-warm-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#5E1A3D] mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-[#36292E] leading-relaxed">
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
