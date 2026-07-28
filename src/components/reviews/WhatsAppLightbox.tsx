"use client";

import React, { useState } from "react";
import Image from "next/image";

export const WhatsAppLightbox: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const whatsappImages = [
    {
      src: "/images/whatsapp_feedback1.jpeg",
      alt: "WhatsApp feedback screenshot 1",
      tilt: "-rotate-2",
    },
    {
      src: "/images/whatsapp_feedback2.jpeg",
      alt: "WhatsApp feedback screenshot 2",
      tilt: "rotate-1",
    },
    {
      src: "/images/whatsapp_feedback3.jpeg",
      alt: "WhatsApp feedback screenshot 3",
      tilt: "-rotate-1",
    },
    {
      src: "/images/whatsapp_feedback4.jpeg",
      alt: "WhatsApp feedback screenshot 4",
      tilt: "rotate-2",
    },
  ];

  return (
    <div className="w-full mb-16">
      {/* 4-column grid desktop, horizontal scroll mobile */}
      <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory px-2">
        {whatsappImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImageIndex(idx)}
            className={`flex-none w-[75vw] sm:w-[240px] md:w-auto snap-center bg-[#F7EDE3] rounded-[16px] p-3 shadow-warm border border-[#F2C0CD] cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-warm-lg ${img.tilt}`}
          >
            <div className="relative aspect-[9/16] w-full rounded-[12px] overflow-hidden bg-[#FBE7EC]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#5E1A3D]/0 hover:bg-[#5E1A3D]/10 transition-colors flex items-center justify-center">
                <span className="bg-[#5E1A3D]/80 text-[#FDF7F1] px-3 py-1 rounded-full text-xs font-bold opacity-0 hover:opacity-100 transition-opacity">
                  Tap to expand 🔍
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs font-bold tracking-wider text-[#9CAF88] uppercase mt-4">
        🔒 Shared with permission from mothers
      </p>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#4A1230]/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-md w-full aspect-[9/16] bg-[#FDF7F1] rounded-[24px] overflow-hidden shadow-warm-lg border-4 border-[#FDF7F1] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#5E1A3D] text-[#FDF7F1] font-bold text-xl flex items-center justify-center shadow-warm hover:bg-[#7D2352] transition-colors"
              aria-label="Close image"
            >
              ✕
            </button>
            <div className="relative w-full h-full rounded-[16px] overflow-hidden">
              <Image
                src={whatsappImages[activeImageIndex].src}
                alt={whatsappImages[activeImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
