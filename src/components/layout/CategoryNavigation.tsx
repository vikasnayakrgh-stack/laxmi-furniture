"use client";

import React from "react";
import Link from "next/link";
import { Sofa, Bed, Armchair, Sparkles, Lamp, Utensils, LayoutGrid, Package } from "lucide-react";
import { NAV_MENU } from "@/data/mock";
import { useFilterStore } from "@/store";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Furniture: <Package className="w-3.5 h-3.5" />,
  "Sofas & Seating": <Sofa className="w-3.5 h-3.5" />,
  Mattresses: <Bed className="w-3.5 h-3.5" />,
  "Home Decor": <Sparkles className="w-3.5 h-3.5" />,
  Furnishings: <Armchair className="w-3.5 h-3.5" />,
  "Lamps & Lighting": <Lamp className="w-3.5 h-3.5" />,
  "Kitchen & Dining": <Utensils className="w-3.5 h-3.5" />,
  Luxury: <Sparkles className="w-3.5 h-3.5" />,
  Modular: <LayoutGrid className="w-3.5 h-3.5" />,
};

export function CategoryNavigation() {
  const { setPresetCategory, presetCategory } = useFilterStore();

  return (
    <nav
      className="sticky top-[108px] md:top-[63px] z-30 border-b border-[#E5E7EB] bg-white backdrop-blur-md transition-colors shadow-2xs overflow-x-auto no-scrollbar py-2"
      aria-label="Category Menu Navigation"
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
        {NAV_MENU.map((menuItem) => {
          const isSelected = presetCategory === menuItem.l;
          const icon = CATEGORY_ICONS[menuItem.l] || <LayoutGrid className="w-3.5 h-3.5" />;

          return (
            <div key={menuItem.l} className="group relative shrink-0">
              <Link
                href="/shop"
                onClick={() => setPresetCategory(menuItem.l)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold text-xs transition-all whitespace-nowrap active:scale-95 border ${
                  isSelected
                    ? "bg-[#F97316] text-white border-[#F97316] shadow-xs"
                    : "bg-[#F3F4F6] text-[#111827] border-[#E5E7EB] hover:border-[#F97316] hover:text-[#F97316]"
                }`}
              >
                <span className={isSelected ? "text-white" : "text-[#F97316]"}>{icon}</span>
                <span>{menuItem.l}</span>
              </Link>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-6 hidden group-hover:flex group-focus-within:flex gap-9 min-w-[480px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                {Object.entries(menuItem.cols).map(([header, subItems]) => (
                  <div key={header}>
                    <h4 className="font-head font-extrabold text-[#111827] text-sm mb-2.5 tracking-wide">
                      {header}
                    </h4>
                    <ul className="space-y-1.5">
                      {subItems.map((subItem) => (
                        <li key={subItem}>
                          <Link
                            href="/shop"
                            onClick={() => setPresetCategory(subItem)}
                            className="block text-xs font-semibold text-[#4B5563] hover:text-[#F97316] transition-colors py-0.5"
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
