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
            title="What is Garbhsanskar?"
            align="left"
            className="mb-6"
          />

          <p className="text-lg sm:text-xl text-[#36292E] leading-relaxed mb-6">
            Garbhsanskar is the science of nurturing the baby in the womb with positive thoughts, emotions, and values through Yoga, Mantra, Ayurveda and Vaidik Sanskars.
          </p>

          <p className="text-base sm:text-lg text-[#36292E] opacity-90 leading-relaxed mb-8">
            During pregnancy, a mother's mental state directly shapes her baby's brain cells, temperament, and immunity. At Astitva, we make this ancient journey simple, joyful, and deeply personal for modern pregnant women.
          </p>

          <Button href="/program" variant="primary" size="md">
            Know More
          </Button>
        </div>

        {/* Right Column: Soft Framed Image */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-[380px] aspect-square rounded-[36px] overflow-hidden shadow-warm-lg border-4 border-[#FFF6EE] bg-[#FCECE9]">
            <Image
              src="/images/pooja.webp"
              alt="Pregnant mother embracing her baby with Garbhsanskar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
