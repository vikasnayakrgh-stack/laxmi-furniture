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
        variant === "underline" && "gap-0 border-b border-line pb-1",
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
                "px-3 py-2 text-sm font-semibold transition-all border-b-2 -mb-[5px] mx-2 text-muted hover:text-accent cursor-pointer",
                isActive
                  ? "border-accent text-accent font-bold"
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
              "px-5 py-2 rounded-full border-1.5 font-semibold text-xs transition-all cursor-pointer",
              isActive
                ? "border-accent text-accent bg-[#FFF4EE] dark:bg-accent/15 font-bold shadow-xs"
                : "border-[#ddd6ce] text-muted bg-white dark:bg-cream/10 hover:border-accent hover:text-accent"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
