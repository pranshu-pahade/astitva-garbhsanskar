import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp" | "light";
  size?: "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-full min-h-[50px] px-7 py-3 text-center focus-visible:outline-3 focus-visible:outline-[#8E2B5C] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-warm-sm hover:shadow-warm hover:-translate-y-0.5 active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-[#8E2B5C] text-[#FFF6EE] hover:bg-[#722049] border-2 border-[#8E2B5C]",
    secondary:
      "bg-[#FFF6EE] text-[#8E2B5C] border-2 border-[#8E2B5C] hover:bg-[#FCECE9]",
    whatsapp:
      "bg-[#2E7D47] text-white hover:bg-[#246338] border-2 border-[#2E7D47]",
    light:
      "bg-[#FFF6EE] text-[#8E2B5C] hover:bg-[#FCECE9] border-2 border-[#FFF6EE]",
  };

  const sizeClasses = {
    md: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl px-8 py-3.5",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
