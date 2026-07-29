"use client";

import React from "react";

interface LocalVideoReviewProps {
  videoSrc: string; // e.g., "/videos/mother_review.mp4"
  posterSrc?: string;
  title?: string;
  motherName?: string;
}

export const LocalVideoReview: React.FC<LocalVideoReviewProps> = ({
  videoSrc,
  posterSrc,
  title = "Mother Video Testimonial",
  motherName,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#FFF6EE] rounded-[20px] p-4 sm:p-6 shadow-warm border border-[#F3B6B2] flex flex-col items-center">
      {motherName && (
        <div className="mb-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3A5E2E] block">
            VERIFIED MOTHER TESTIMONIAL
          </span>
          <h4 className="font-serif text-xl font-bold text-[#8E2B5C]">
            {motherName}
          </h4>
        </div>
      )}

      <div className="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#FCECE9] border-2 border-[#F3B6B2] shadow-inner">
        <video
          controls
          preload="metadata"
          poster={posterSrc}
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
          Your browser does not support HTML5 video playing.
        </video>
      </div>

      <p className="text-xs text-[#36292E] opacity-80 mt-3 italic text-center">
        📹 Recorded with permission from mother
      </p>
    </div>
  );
};
