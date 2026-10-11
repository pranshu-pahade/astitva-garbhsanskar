"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { FoundersMediaCard } from "@/components/founders/FoundersMediaCard";

export const MeetFoundersSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const credentials = [
    "M.A. Yogashastra",
    "Diploma in Garbhsanskar",
    "Medical Yoga Therapist",
    "Certified Garbhsanskar Educator",
  ];

  return (
    <Section bgColor="cream-50" id="founders">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Interactive Founders Photo & Video Card */}
        <div className="lg:col-span-5 flex justify-center relative">
          <FoundersMediaCard initialMode="photo" />
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

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/about" variant="secondary" size="md">
              {t.founders.readStory}
            </Button>
            <Button href="/contact" variant="primary" size="md">
              {t.nav.bookDemo}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
