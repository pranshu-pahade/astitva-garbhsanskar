import React from "react";

export const SocialProofBandSection: React.FC = () => {
  const stats = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#8E2B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      label: "Live on Zoom",
      sublabel: "Real-time sessions",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#8E2B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "3 Daily Batches",
      sublabel: "45 min | 6 Sundays off",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#8E2B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      label: "150+ Mothers",
      sublabel: "Completed",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#8E2B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: "32 Active",
      sublabel: "Students",
    },
  ];

  return (
    <section className="w-full bg-[#FFF6EE] py-8 border-y border-[#F3B6B2]/40">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FFF6EE] border border-[#F3B6B2] shadow-warm-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FCECE9] flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base sm:text-lg text-[#8E2B5C] leading-tight">
                  {stat.label}
                </span>
                <span className="text-xs sm:text-sm text-[#36292E] opacity-80">
                  {stat.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
