import React from "react";

interface SectionProps {
  id?: string;
  bgColor?: "cream-50" | "blush-100" | "cream-100" | "plum-900" | "plum-800" | "transparent";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  bgColor = "cream-50",
  className = "",
  containerClassName = "",
  children,
}) => {
  const bgClasses = {
    "cream-50": "bg-[#FDF7F1] text-[#4A3B42]",
    "blush-100": "bg-[#FBE7EC] text-[#4A3B42]",
    "cream-100": "bg-[#F7EDE3] text-[#4A3B42]",
    "plum-900": "bg-[#4A1230] text-[#FDF7F1]",
    "plum-800": "bg-[#5E1A3D] text-[#FDF7F1]",
    transparent: "bg-transparent text-inherit",
  };

  return (
    <section
      id={id}
      className={`w-full py-16 md:py-28 px-5 sm:px-8 transition-colors duration-300 ${bgClasses[bgColor]} ${className}`}
    >
      <div className={`max-w-[1120px] mx-auto w-full ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
