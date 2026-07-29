"use client";

import React, { useState } from "react";
import Image from "next/image";

export const WhatsAppLightbox: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const whatsappImages = [
    {
      src: "/images/whatsapp_feedback1.webp",
      alt: "WhatsApp feedback screenshot 1 - Daily session review",
      tilt: "-rotate-2",
    },
    {
      src: "/images/whatsapp_feedback2.webp",
      alt: "WhatsApp feedback screenshot 2 - Trataka and story review",
      tilt: "rotate-1",
    },
    {
      src: "/images/whatsapp_feedback3.webp",
      alt: "WhatsApp feedback screenshot 3 - Meditation review",
      tilt: "-rotate-1",
    },
    {
      src: "/images/whatsapp_feedback4.webp",
      alt: "WhatsApp feedback screenshot 4 - Baby connection review",
      tilt: "rotate-2",
    },
    {
      src: "/images/whatsapp_feedback6.webp",
      alt: "WhatsApp feedback screenshot 6 - Gayatri Amrutkar and Aishwarya review",
      tilt: "-rotate-1",
    },
    {
      src: "/images/whatsapp_feedback7.webp",
      alt: "WhatsApp feedback screenshot 7 - Manisha Sargar and Swati review",
      tilt: "rotate-1",
    },
  ];

  return (
    <div className="w-full mb-12">
      {/* Responsive Grid */}
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory px-2">
        {whatsappImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImageIndex(idx)}
            className={`flex-none w-[75vw] sm:w-[220px] md:w-auto snap-center bg-[#FFF6EE] rounded-[16px] p-2.5 shadow-warm border border-[#F3B6B2] cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-warm-lg ${img.tilt}`}
          >
            <div className="relative aspect-[9/16] w-full rounded-[12px] overflow-hidden bg-[#FCECE9]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 16vw"
              />
              <div className="absolute inset-0 bg-[#8E2B5C]/0 hover:bg-[#8E2B5C]/10 transition-colors flex items-center justify-center">
                <span className="bg-[#8E2B5C]/90 text-[#FFF6EE] px-3 py-1 rounded-full text-xs font-bold opacity-0 hover:opacity-100 transition-opacity">
                  Tap to view 🔍
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs font-bold tracking-wider text-[#3A5E2E] uppercase mt-4">
        🔒 Shared with permission from mothers
      </p>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#8E2B5C]/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-md w-full aspect-[9/16] bg-[#FFF6EE] rounded-[24px] overflow-hidden shadow-warm-lg border-4 border-[#FFF6EE] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#8E2B5C] text-[#FFF6EE] font-bold text-xl flex items-center justify-center shadow-warm hover:bg-[#A83770] transition-colors"
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
