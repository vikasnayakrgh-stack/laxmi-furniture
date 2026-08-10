"use client";

import React from "react";
import Link from "next/link";
import { Sofa, Bed, Armchair, Sparkles, Lamp, Utensils, LayoutGrid, Package } from "lucide-react";
import { NAV_MENU } from "@/data/mock";
import { useFilterStore } from "@/store";

// Icon mapping for categories
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Furniture: <Package className="w-4 h-4" />,
  "Sofas & Seating": <Sofa className="w-4 h-4" />,
  Mattresses: <Bed className="w-4 h-4" />,
  "Home Decor": <Sparkles className="w-4 h-4" />,
  Furnishings: <Armchair className="w-4 h-4" />,
  "Lamps & Lighting": <Lamp className="w-4 h-4" />,
  "Kitchen & Dining": <Utensils className="w-4 h-4" />,
  Luxury: <Sparkles className="w-4 h-4" />,
  Modular: <LayoutGrid className="w-4 h-4" />,
};

export function CategoryNavigation() {
  const { setPresetCategory, presetCategory } = useFilterStore();


  return (
    <nav
      className="sticky top-[108px] md:top-[69px] z-30 border-b border-[#E9E3DC] dark:border-zinc-800 bg-white/95 dark:bg-[#18181B]/95 backdrop-blur-md transition-colors shadow-2xs overflow-x-auto no-scrollbar py-2"
      aria-label="Category Menu Navigation"
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
        {NAV_MENU.map((menuItem) => {
          const isSelected = presetCategory === menuItem.l;
          const icon = CATEGORY_ICONS[menuItem.l] || <LayoutGrid className="w-4 h-4" />;


          return (
            <div key={menuItem.l} className="group relative shrink-0">
              <Link
                href="/shop"
                onClick={() => setPresetCategory(menuItem.l)}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs transition-all whitespace-nowrap border ${
                  isSelected
                    ? "bg-[#F16521] text-white border-[#F16521] shadow-xs"
                    : "bg-[#FAF6F1] dark:bg-zinc-800 text-[#1C1917] dark:text-zinc-100 border-[#E9E3DC] dark:border-zinc-700 hover:border-[#F16521] hover:text-[#F16521]"
                }`}
              >
                <span className={isSelected ? "text-white" : "text-[#F16521]"}>{icon}</span>
                <span>{menuItem.l}</span>
              </Link>

              {/* Mega Menu Dropdown (Desktop hover) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 bg-white dark:bg-[#18181B] border border-[#E9E3DC] dark:border-zinc-800 rounded-2xl shadow-[0_16px_48px_rgba(28,25,23,0.12)] p-6 hidden group-hover:flex group-focus-within:flex gap-9 min-w-[480px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                {Object.entries(menuItem.cols).map(([header, subItems]) => (
                  <div key={header}>
                    <h4 className="font-head font-extrabold text-[#8B5E3C] dark:text-[#F16521] text-sm mb-2.5 tracking-wide">
                      {header}
                    </h4>
                    <ul className="space-y-1.5">
                      {subItems.map((subItem) => (
                        <li key={subItem}>
                          <Link
                            href="/shop"
                            onClick={() => setPresetCategory(subItem)}
                            className="block text-xs font-semibold text-[#6B6560] dark:text-zinc-300 hover:text-[#F16521] dark:hover:text-[#F16521] transition-colors py-0.5"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
