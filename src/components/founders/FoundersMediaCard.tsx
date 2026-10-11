"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface FoundersMediaCardProps {
  initialMode?: "photo" | "video";
  className?: string;
}

export const FoundersMediaCard: React.FC<FoundersMediaCardProps> = ({
  initialMode = "photo",
  className = "",
}) => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [mode, setMode] = useState<"photo" | "video">(initialMode);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSwitchToVideo = () => {
    setMode("video");
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  const handleSwitchToPhoto = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setMode("photo");
  };

  return (
    <div className={`relative max-w-[380px] w-full flex flex-col items-center ${className}`}>
      {/* Decorative Warm Backdrop Aura */}
      <div className="absolute inset-0 bg-[#F3B6B2] rounded-[32px] transform -rotate-2 scale-95 opacity-80 blur-xs -z-10" />

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-2 mb-3 bg-[#FFF6EE] p-1.5 rounded-full border border-[#F3B6B2] shadow-warm-sm z-10">
        <button
          type="button"
          onClick={handleSwitchToPhoto}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            mode === "photo"
              ? "bg-[#8E2B5C] text-[#FFF6EE] shadow-warm-sm"
              : "text-[#8E2B5C] hover:bg-[#FCECE9]"
          }`}
        >
          📸 {t.founders.tabPhoto}
        </button>
        <button
          type="button"
          onClick={handleSwitchToVideo}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            mode === "video"
              ? "bg-[#8E2B5C] text-[#FFF6EE] shadow-warm-sm"
              : "text-[#8E2B5C] hover:bg-[#FCECE9]"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          🎬 {t.founders.tabVideo}
        </button>
      </div>

      {/* Main Frame Container */}
      <div className="relative w-full aspect-[9/16] max-h-[580px] rounded-[24px] overflow-hidden shadow-warm-lg border-4 border-[#FFF6EE] bg-[#FCECE9]">
        {mode === "photo" ? (
          <div className="relative w-full h-full group">
            <Image
              src="/images/founders.webp"
              alt="Founders Prajakta Dhamane and Minal Purkar in sarees"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 380px"
            />

            {/* Play Video Trigger Overlay Banner */}
            <div
              onClick={handleSwitchToVideo}
              className="absolute inset-x-3 bottom-3 bg-[#8E2B5C]/90 hover:bg-[#8E2B5C] text-[#FFF6EE] backdrop-blur-xs p-3 rounded-[16px] shadow-warm flex items-center justify-between cursor-pointer transition-all border border-[#FFF6EE]/30 group-hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FFF6EE] text-[#8E2B5C] flex items-center justify-center font-bold text-sm shadow-warm-sm flex-shrink-0">
                  ▶
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">
                    {t.founders.watchVideo}
                  </div>
                  <div className="text-[10px] text-[#FCECE9] opacity-90">
                    1:48 min · Direct message
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#F3B6B2]">Watch ↗</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="/videos/founders_story.mp4"
              poster="/images/founders_video_poster.webp"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Your browser does not support playing HTML5 video.
            </video>
          </div>
        )}
      </div>

      {/* Micro-caption below */}
      <p className="text-xs text-[#36292E] opacity-80 mt-2 text-center font-medium">
        {mode === "video"
          ? t.founders.videoCaption
          : "Prajakta Dhamane & Minal Purkar — Co-Founders"}
      </p>
    </div>
  );
};
