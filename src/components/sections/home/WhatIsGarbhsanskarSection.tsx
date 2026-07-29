"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const WhatIsGarbhsanskarSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <Section bgColor="cream-50" id="what-is-garbhsanskar">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Narrative & Know More Button */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <SectionHeading
            eyebrow={t.whatIs.eyebrow}
            title={t.whatIs.title}
            align="left"
            className="mb-6"
          />

          <p className="text-lg sm:text-xl text-[#36292E] leading-relaxed mb-6">
            {t.whatIs.para1}
          </p>

          <p className="text-base sm:text-lg text-[#36292E] opacity-90 leading-relaxed mb-8">
            {t.whatIs.para2}
          </p>

          <Button href="/program" variant="primary" size="md">
            {t.whatIs.knowMore}
          </Button>
        </div>

        {/* Right Column: Custom Garbhsanskar Activities Image Collage */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-[380px] aspect-[2/3] rounded-[28px] overflow-hidden shadow-warm-lg border-4 border-[#FFF6EE] bg-[#FCECE9]">
            <Image
              src="/images/garbhsanskar_activities.webp"
              alt="Garbhsanskar activities collage - Meditation, Yoga, Pranayam, and Art Therapy"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 380px"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
