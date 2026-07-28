import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const WhatIsGarbhsanskarSection: React.FC = () => {
  const highlights = [
    {
      title: "Your baby listens from the womb",
      text: "Science and ancient wisdom agree — from the 4th month of pregnancy, your baby's senses begin to respond to sounds, thoughts, and your emotional state.",
    },
    {
      title: "Calm mother, calm baby",
      text: "Daily pranayam, soft mantras, and positive sanskars release motherly hormones that promote healthy foetal brain development and emotional security.",
    },
    {
      title: "A tradition, guided with modern care",
      text: "We bridge timeless Vaidik sanskars with certified medical yoga therapy to support your physical strength and emotional peace every single day.",
    },
  ];

  return (
    <Section bgColor="blush-100" id="what-is-garbhsanskar">
      <SectionHeading
        eyebrow="ANCIENT WISDOM & MODERN SCIENCE"
        title="What is Garbhsanskar?"
      />

      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-5 text-base sm:text-lg text-[#4A3B42]">
        <p>
          Garbhsanskar is the sacred art of educating and nurturing your baby right from inside the womb. It is not merely a ritual — it is a continuous daily practice of positive thoughts, gentle yoga, calming mantras, and spiritual connection.
        </p>
        <p>
          During pregnancy, a mother's mental state directly shapes her baby's brain cells, temperament, and immunity. At Astitva, we make this ancient journey simple, joyful, and deeply personal for modern pregnant women.
        </p>
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
            <p className="text-sm sm:text-base text-[#4A3B42] leading-relaxed">
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
