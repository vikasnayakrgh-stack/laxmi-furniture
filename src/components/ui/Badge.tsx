import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "badge" | "chip" | "new" | "best" | "qa";
}

export function Badge({
  className,
  variant = "badge",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-bold transition-colors",
        variant === "badge" &&
          "bg-accent text-white text-[0.68rem] min-w-[19px] h-[19px] rounded-full px-1",
        variant === "chip" &&
          "border-1.5 border-dashed border-accent text-accent bg-[#FFF4EE] dark:bg-accent/15 text-[0.85rem] px-3 py-1 rounded-lg tracking-wider",
        variant === "new" &&
          "bg-green-bar text-white text-[0.68rem] font-extrabold uppercase px-2.2 py-1 rounded-md tracking-wider",
        variant === "best" &&
          "bg-accent text-white text-[0.68rem] font-extrabold uppercase px-2.2 py-1 rounded-md tracking-wider",
        variant === "qa" &&
          "bg-accent text-white text-[0.74rem] font-bold px-3 py-1 rounded-md -rotate-4 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
