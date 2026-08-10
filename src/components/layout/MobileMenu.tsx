"use client";

import Link from "next/link";
import { Drawer } from "@/components/ui";
import { useUIStore, useFilterStore } from "@/store";
import { Home, Package, Sofa, Bed, Sparkles, Lamp, Utensils, Info, PhoneCall } from "lucide-react";

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();
  const { setPresetCategory } = useFilterStore();

  const handleCategoryClick = (categoryName?: string) => {
    if (categoryName) {
      setPresetCategory(categoryName);
    }
    closeMobileMenu();
  };

  return (
    <Drawer
      isOpen={isMobileMenuOpen}
      onClose={closeMobileMenu}
      position="left"
      title={<span className="font-head text-[#F97316] font-black text-xl tracking-tight">LAXMI FURNITURE</span>}
    >
      <div className="flex flex-col space-y-1 font-extrabold text-sm text-[#111827]">
        <Link
          href="/"
          onClick={() => handleCategoryClick()}
          className="flex items-center gap-3 py-3 px-3 rounded-xl border-b border-[#E5E7EB] text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors"
        >
          <Home className="w-4 h-4 text-[#F97316]" />
          <span>Home</span>
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick()}
          className="flex items-center gap-3 py-3 px-3 rounded-xl border-b border-[#E5E7EB] text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors"
        >
          <Package className="w-4 h-4 text-[#F97316]" />
          <span>Shop All Furniture</span>
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Sofas")}
          className="flex items-center gap-3 py-3 px-3 rounded-xl border-b border-[#E5E7EB] text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors"
        >
          <Sofa className="w-4 h-4 text-[#F97316]" />
          <span>Sofas & Seating</span>
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Beds")}
          className="flex items-center gap-3 py-3 px-3 rounded-xl border-b border-[#E5E7EB] text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors"
        >
          <Bed className="w-4 h-4 text-[#F97316]" />
          <span>Beds & Mattresses</span>
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Decor")}
          className="flex items-center gap-3 py-3 px-3 rounded-xl border-b border-[#E5E7EB] text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors"
        >
          <Sparkles className="w-4 h-4 text-[#F97316]" />
          <span>Home Decor</span>
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Lighting")}
          className="flex items-center gap-3 py-3 px-3 rounded-xl border-b border-[#E5E7EB] text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors"
        >
          <Lamp className="w-4 h-4 text-[#F97316]" />
          <span>Lamps & Lighting</span>
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Dining")}
          className="flex items-center gap-3 py-3 px-3 rounded-xl border-b border-[#E5E7EB] text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors"
        >
          <Utensils className="w-4 h-4 text-[#F97316]" />
          <span>Kitchen & Dining</span>
        </Link>
        <Link
          href="/about"
          onClick={() => handleCategoryClick()}
          className="flex items-center gap-3 py-3 px-3 rounded-xl text-[#111827] hover:text-[#F97316] hover:bg-[#F9FAFB] transition-colors mt-2"
        >
          <Info className="w-4 h-4 text-[#F97316]" />
          <span>About Showroom & Contact</span>
        </Link>

        <div className="pt-4 border-t border-[#E5E7EB] mt-4">
          <a
            href="tel:18002674445"
            className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-md active:scale-95 transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Showroom: 1800-267-4445</span>
          </a>
        </div>
      </div>
    </Drawer>
  );
}
