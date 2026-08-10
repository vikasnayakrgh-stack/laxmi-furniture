import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-cream/10 rounded-xl border border-line overflow-hidden shadow-sm transition-all duration-300",
        hoverEffect && "hover:-translate-y-1 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
