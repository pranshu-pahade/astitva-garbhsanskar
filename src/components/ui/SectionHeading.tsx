import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  className = "",
}) => {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = theme === "light" ? "text-[#FDF7F1]" : "text-[#5E1A3D]";
  const eyebrowColor = theme === "light" ? "text-[#D5DEC6]" : "text-[#4A6338]";
  const subtitleColor = theme === "light" ? "text-[#F2C0CD]" : "text-[#36292E]";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`block text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
