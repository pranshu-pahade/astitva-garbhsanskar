import React from "react";
import { LeafDivider } from "@/components/ui/LeafDivider";

export const SocialProofBandSection: React.FC = () => {
  const stats = [
    { number: "150+", label: "Mothers guided personally" },
    { number: "3", label: "Batches daily (6 days a week)" },
    { number: "6 Months", label: "Complete pregnancy support" },
  ];

  return (
    <section className="w-full bg-[#5E1A3D] text-[#FDF7F1] py-14 sm:py-20 px-5 sm:px-8 shadow-warm-lg relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto text-center">
        <LeafDivider color="#F2C0CD" className="mb-8 opacity-80" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#7D2352]">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center ${index > 0 ? "pt-8 md:pt-0" : ""}`}>
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2C0CD] mb-2 tracking-tight">
                {stat.number}
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#D5DEC6] max-w-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
