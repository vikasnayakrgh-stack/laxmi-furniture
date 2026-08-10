import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  key: string;
  label: string;
}

export interface PillTabsProps {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  variant?: "default" | "underline";
  className?: string;
}

export function PillTabs({
  tabs,
  activeKey,
  onChange,
  variant = "default",
  className,
}: PillTabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-3 mb-7",
        variant === "underline" && "gap-0 border-b border-[#E5E7EB] pb-1",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;

        if (variant === "underline") {
          return (
            <button
              key={tab.key}
              onClick={() => onChange(tab.key)}
              className={cn(
                "px-3 py-2 text-sm font-semibold transition-all border-b-2 -mb-[5px] mx-2 text-[#4B5563] hover:text-[#F97316] cursor-pointer",
                isActive
                  ? "border-[#F97316] text-[#F97316] font-bold"
                  : "border-transparent"
              )}
            >
              {tab.label}
            </button>
          );
        }

        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={cn(
              "px-5 py-2 rounded-full border font-semibold text-xs transition-all cursor-pointer",
              isActive
                ? "border-[#F97316] text-white bg-[#F97316] font-extrabold shadow-xs"
                : "border-[#E5E7EB] text-[#111827] bg-[#F3F4F6] font-extrabold hover:border-[#F97316] hover:text-[#F97316]"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
