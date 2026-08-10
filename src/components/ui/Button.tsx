import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "icon" | "atc" | "hero";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          // Variants
          variant === "primary" &&
            "bg-accent text-white hover:bg-accent-dark rounded-xl font-extrabold shadow-sm active:scale-[0.98]",
          variant === "ghost" &&
            "border-2 border-accent text-accent hover:bg-[#FFF4EE] dark:hover:bg-accent/10 rounded-xl font-extrabold active:scale-[0.98]",
          variant === "atc" &&
            "w-full bg-[#FFF4EE] text-accent dark:bg-accent/15 hover:bg-accent hover:text-white rounded-lg font-bold text-xs py-2 transition-colors",
          variant === "hero" &&
            "bg-white text-accent hover:-translate-y-0.5 hover:shadow-lg font-extrabold rounded-full px-6 py-2.5 text-sm",
          variant === "icon" &&
            "relative w-10 h-10 rounded-full hover:bg-cream dark:hover:bg-line/20 p-0 text-ink",
          // Sizes
          size === "sm" && variant !== "icon" && "px-3 py-1.5 text-xs",
          size === "md" && variant !== "icon" && "px-5 py-2.5 text-sm",
          size === "lg" && variant !== "icon" && "px-7 py-3.5 text-base",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
