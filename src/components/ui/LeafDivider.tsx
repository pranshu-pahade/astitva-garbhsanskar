import React from "react";

interface LeafDividerProps {
  className?: string;
  color?: string;
}

export const LeafDivider: React.FC<LeafDividerProps> = ({
  className = "",
  color = "#9CAF88",
}) => {
  return (
    <div className={`flex items-center justify-center my-6 opacity-60 ${className}`}>
      <svg
        width="240"
        height="32"
        viewBox="0 0 240 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 sm:w-60 h-auto"
        aria-hidden="true"
      >
        {/* Central stem */}
        <path
          d="M10 16 H230"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Left leaves */}
        <path
          d="M40 16 C35 10, 25 10, 28 16 C25 22, 35 22, 40 16 Z"
          fill={color}
        />
        <path
          d="M70 16 C65 8, 55 10, 60 16 C55 22, 65 24, 70 16 Z"
          fill={color}
        />
        {/* Center leaf motif */}
        <path
          d="M120 4 C112 12, 112 20, 120 28 C128 20, 128 12, 120 4 Z"
          fill={color}
        />
        {/* Right leaves */}
        <path
          d="M170 16 C175 8, 185 10, 180 16 C185 22, 175 24, 170 16 Z"
          fill={color}
        />
        <path
          d="M200 16 C205 10, 215 10, 212 16 C215 22, 205 22, 200 16 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
