import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[0.78rem] font-bold uppercase tracking-wider text-[#4B5563] mb-1.5">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#111827] transition-colors focus:border-[#F97316] focus:outline-none placeholder:text-[#6B7280]",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500 mt-1 font-semibold">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
