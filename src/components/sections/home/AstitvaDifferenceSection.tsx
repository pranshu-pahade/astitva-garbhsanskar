"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const AstitvaDifferenceSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const differences = [
    {
      title: "Live, Not Recorded",
      subtitle: "Real-time sessions with immediate answers",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "1-to-1 Attention",
      subtitle: "Direct guidance from the founders",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
    },
    {
      title: "Expert-Led & Qualified",
      subtitle: "M.A. Yogashastra, MSc, Medical Yoga Therapist",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      ),
    },
    {
      title: "The Full Journey",
      subtitle: "Pregnancy to 2 years of baby care with Vaidik Sanskars",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  return (
    <Section bgColor="cream-50" id="difference">
      <SectionHeading
        eyebrow="WHY MOTHERS TRUST US"
        title="Why Choose Astitva?"
        subtitle="We aren't a high-volume app or recorded course. We are two founder-teachers guiding you personally every morning and evening."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differences.map((item, index) => (
          <Card key={index} bgColor="bg-[#FFF6EE]" className="flex flex-col items-center text-center p-6 border border-[#F3B6B2]">
            <div className="w-14 h-14 rounded-full bg-[#FCECE9] flex items-center justify-center text-[#8E2B5C] mb-4 shadow-warm-sm border border-[#F3B6B2]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {item.icon}
              </svg>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#8E2B5C] mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-[#36292E] opacity-90 leading-relaxed">
              {item.subtitle}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
