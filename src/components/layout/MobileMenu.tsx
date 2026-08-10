"use client";

import Link from "next/link";
import { Drawer } from "@/components/ui";
import { useUIStore, useFilterStore } from "@/store";

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
      title={<span className="font-head text-accent text-xl tracking-wide">LAXMI FURNITURE</span>}
    >
      <div className="flex flex-col space-y-1 font-semibold text-sm">
        <Link
          href="/"
          onClick={() => handleCategoryClick()}
          className="py-3 px-1 border-b border-line text-ink hover:text-accent"
        >
          Home
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick()}
          className="py-3 px-1 border-b border-line text-ink hover:text-accent"
        >
          Shop All
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Sofas")}
          className="py-3 px-1 border-b border-line text-ink hover:text-accent"
        >
          Sofas & Seating
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Beds")}
          className="py-3 px-1 border-b border-line text-ink hover:text-accent"
        >
          Beds & Mattresses
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Decor")}
          className="py-3 px-1 border-b border-line text-ink hover:text-accent"
        >
          Home Decor
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Lighting")}
          className="py-3 px-1 border-b border-line text-ink hover:text-accent"
        >
          Lamps & Lighting
        </Link>
        <Link
          href="/shop"
          onClick={() => handleCategoryClick("Dining")}
          className="py-3 px-1 border-b border-line text-ink hover:text-accent"
        >
          Kitchen & Dining
        </Link>
        <Link
          href="/about"
          onClick={() => handleCategoryClick()}
          className="py-3 px-1 text-ink hover:text-accent"
        >
          About & Contact
        </Link>
      </div>
    </Drawer>
  );
}
