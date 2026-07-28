"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const MeetFoundersSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const credentials = [
    "M.A. Yogashastra",
    "MSc Qualified",
    "Medical Yoga Therapist",
    "Certified Garbhsanskar Educator",
  ];

  return (
    <Section bgColor="cream-50" id="founders">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Founders Portrait */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="absolute inset-0 bg-[#F3B6B2] rounded-[32px] transform -rotate-3 scale-95 opacity-80 blur-xs" />
          
          <div className="relative max-w-[400px] w-full aspect-[679/906] rounded-[24px] overflow-hidden shadow-warm-lg border-4 border-[#FFF6EE]">
            <Image
              src="/images/founders.webp"
              alt="Founders Prajakta Dhamane and Minal Purkar in sarees"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Right Column: Narrative & Credentials */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <SectionHeading
            eyebrow={t.founders.eyebrow}
            title={t.founders.title}
            align="left"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-[#36292E] leading-relaxed mb-6">
            {t.founders.narrative}
          </p>

          {/* Credentials Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {credentials.map((pill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#E2EAD8] text-[#8E2B5C] text-xs sm:text-sm font-bold shadow-warm-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          <Button href="/about" variant="secondary" size="md">
            {t.founders.readStory}
          </Button>
        </div>
      </div>
    </Section>
  );
};
