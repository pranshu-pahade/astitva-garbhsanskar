"use client";

import React, { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-[16px] bg-[#FDF7F1] border border-[#F2C0CD] shadow-warm overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-[#9CAF88] group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-bold text-[#5E1A3D] group-hover:text-[#7D2352] transition-colors pr-4">
                {item.q}
              </span>
              <span
                className={`w-8 h-8 rounded-full bg-[#FBE7EC] text-[#7D2352] font-bold flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#7D2352] text-[#FDF7F1]" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-base text-[#4A3B42] leading-relaxed border-t border-[#F2C0CD]/40 animate-fadeIn">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
