import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp";
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
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-full min-h-[52px] px-6 py-3.5 text-center focus-visible:outline-3 focus-visible:outline-[#4A6338] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-warm-sm hover:shadow-warm active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-[#7D2352] text-[#FDF7F1] hover:bg-[#5E1A3D] border-2 border-[#7D2352] hover:border-[#5E1A3D]",
    secondary:
      "bg-transparent text-[#7D2352] border-2 border-[#7D2352] hover:bg-[#FBE7EC]",
    whatsapp:
      "bg-[#2E7D47] text-white hover:bg-[#236337] border-2 border-[#2E7D47]",
  };

  const sizeClasses = {
    md: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl px-8 py-4",
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
