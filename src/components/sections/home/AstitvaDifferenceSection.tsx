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
      title: t.difference.d1Title,
      subtitle: t.difference.d1Desc,
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
      title: t.difference.d2Title,
      subtitle: t.difference.d2Desc,
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
      title: t.difference.d3Title,
      subtitle: t.difference.d3Desc,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      ),
    },
    {
      title: t.difference.d4Title,
      subtitle: t.difference.d4Desc,
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
        eyebrow={t.difference.eyebrow}
        title={t.difference.title}
        subtitle={t.difference.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {differences.map((item, index) => (
          <Card key={index} bgColor="bg-[#F7EDE3]" className="flex items-start gap-5 p-6 sm:p-8">
            <div className="w-12 h-12 rounded-2xl bg-[#FBE7EC] flex items-center justify-center text-[#8C4E1D] flex-shrink-0 shadow-warm-sm border border-[#F2C0CD]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {item.icon}
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5E1A3D] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-base text-[#36292E] leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
