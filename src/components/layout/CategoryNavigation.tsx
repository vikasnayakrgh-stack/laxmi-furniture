"use client";

import Link from "next/link";
import { NAV_MENU } from "@/data/mock";
import { useFilterStore } from "@/store";

export function CategoryNavigation() {
  const { setPresetCategory } = useFilterStore();

  return (
    <nav
      className="hidden md:block border-b border-[#E9E3DC] bg-white relative z-30 transition-colors"
      aria-label="Category Menu Navigation"
    >
      <div className="max-w-[1280px] mx-auto px-5 flex justify-center gap-1">
        {NAV_MENU.map((menuItem) => (
          <div key={menuItem.l} className="group relative">
            <Link
              href="/shop"
              onClick={() => setPresetCategory(menuItem.l)}
              className="block px-4 py-3.5 font-bold text-sm text-[#1C1917] dark:text-white group-hover:text-[#F16521] dark:group-hover:text-[#F16521] transition-colors whitespace-nowrap"
            >
              {menuItem.l}
            </Link>

            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 bg-white border border-[#E9E3DC] rounded-2xl shadow-[0_16px_48px_rgba(28,25,23,0.12)] p-6 hidden group-hover:flex group-focus-within:flex gap-9 min-w-[480px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
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
                          className="block text-xs font-semibold text-[#6B6560] dark:text-muted hover:text-[#F16521] dark:hover:text-[#F16521] transition-colors py-0.5"
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
        ))}
      </div>
    </nav>
  );
}


