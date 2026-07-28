import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const MeetFoundersSection: React.FC = () => {
  const credentials = [
    "M.A. Yogashastra",
    "MSc Qualified",
    "Medical Yoga Therapist",
    "Certified Garbhsanskar Educator",
  ];

  return (
    <Section bgColor="cream-50" id="founders">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Founders Portrait with Blush Blob */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Blush-300 background blob */}
          <div className="absolute inset-0 bg-[#F2C0CD] rounded-[32px] transform -rotate-3 scale-95 opacity-80 blur-xs" />
          
          <div className="relative max-w-[400px] w-full aspect-[679/906] rounded-[24px] overflow-hidden shadow-warm-lg border-4 border-[#FDF7F1]">
            <Image
              src="/images/founders.jpg"
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
            eyebrow="YOUR GUIDES & FOUNDERS"
            title="Meet Prajakta & Minal"
            align="left"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-[#4A3B42] leading-relaxed mb-6">
            Astitva Garbhsanskar was born out of our own family's pregnancy journey in Pune, where we saw firsthand how traditional wisdom transforms a mother's calm and a newborn's health. We combine authentic Vaidik sanskars with scientific medical yoga therapy so every mother feels supported, understood, and deeply connected to her baby. As two women founders, we personally lead every single session and hold your hand through every month of pregnancy and baby care.
          </p>

          {/* Credentials Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {credentials.map((pill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#D5DEC6] text-[#5E1A3D] text-xs sm:text-sm font-bold shadow-warm-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          <Button href="/about" variant="secondary" size="md">
            Read Our Story
          </Button>
        </div>
      </div>
    </Section>
  );
};
