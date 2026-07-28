import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
  bgColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverLift = true,
  bgColor = "bg-[#F7EDE3]",
}) => {
  return (
    <div
      className={`rounded-[16px] p-6 sm:p-8 ${bgColor} shadow-warm transition-all duration-300 ${
        hoverLift ? "hover:-translate-y-1 hover:shadow-warm-lg" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
