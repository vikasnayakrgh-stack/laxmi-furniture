"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sofa, Bed, Armchair, Sparkles, Lamp, Utensils, LayoutGrid, Package, ChevronDown } from "lucide-react";
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
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <nav
      className="sticky top-[108px] md:top-[63px] z-30 border-b border-[#E5E7EB] bg-white backdrop-blur-md transition-colors shadow-2xs py-2 overflow-x-auto md:overflow-visible no-scrollbar"
      aria-label="Category Menu Navigation"
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5 flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 overflow-x-auto md:overflow-visible no-scrollbar relative">
        {NAV_MENU.map((menuItem, idx) => {
          const isSelected = presetCategory === menuItem.l;
          const icon = CATEGORY_ICONS[menuItem.l] || <LayoutGrid className="w-3.5 h-3.5" />;
          const isHovered = activeHover === menuItem.l;

          return (
            <div
              key={menuItem.l}
              className="group relative shrink-0"
              onMouseEnter={() => setActiveHover(menuItem.l)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {/* Category Main Pill */}
              <Link
                href="/shop"
                onClick={() => setPresetCategory(menuItem.l)}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all whitespace-nowrap active:scale-95 border cursor-pointer ${
                  isSelected || isHovered
                    ? "bg-[#F97316] text-white border-[#F97316] shadow-xs"
                    : "bg-[#F3F4F6] text-[#111827] border-[#E5E7EB] hover:border-[#F97316] hover:text-[#F97316]"
                }`}
              >
                <span className={isSelected || isHovered ? "text-white" : "text-[#F97316]"}>{icon}</span>
                <span>{menuItem.l}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isSelected || isHovered ? "text-white rotate-180" : "text-[#6B7280] group-hover:rotate-180"
                  }`}
                />
              </Link>

              {/* Subcategory Mega Menu Dropdown */}
              <div
                className={`absolute top-full pt-2.5 z-50 transition-all duration-200 ${
                  idx > 5 ? "right-0" : "left-1/2 -translate-x-1/2"
                } ${
                  isHovered
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto"
                }`}
              >
                <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-2xl p-5 md:p-6 flex gap-8 min-w-[320px] sm:min-w-[420px] max-w-[90vw] text-left backdrop-blur-md">
                  {Object.entries(menuItem.cols).map(([header, subItems]) => (
                    <div key={header} className="min-w-[120px] space-y-2">
                      <h4 className="font-head font-black text-[#111827] text-xs uppercase tracking-wider border-b border-[#E5E7EB] pb-1.5">
                        {header}
                      </h4>
                      <ul className="space-y-1.5">
                        {subItems.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              href="/shop"
                              onClick={() => {
                                setPresetCategory(subItem);
                                setActiveHover(null);
                              }}
                              className="block text-xs font-semibold text-[#4B5563] hover:text-[#F97316] hover:translate-x-1 transition-all py-0.5"
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
            </div>
          );
        })}
      </div>
    </nav>
  );
}
