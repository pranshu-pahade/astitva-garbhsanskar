import React from "react";

interface ImageFallbackProps {
  label?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  label = "Astitva Garbhsanskar",
  aspectRatio = "landscape",
  className = "",
}) => {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
  };

  return (
    <div
      className={`w-full bg-[#FBE7EC] rounded-[16px] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#F2C0CD] ${aspectClasses[aspectRatio]} ${className}`}
    >
      <svg
        className="w-12 h-12 text-[#B5703A] mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="font-serif text-[#5E1A3D] font-medium text-sm sm:text-base">
        {label}
      </span>
    </div>
  );
};
