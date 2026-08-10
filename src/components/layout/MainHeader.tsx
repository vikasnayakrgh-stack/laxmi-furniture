"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, User, Store, Heart, ClipboardList, Menu, Phone } from "lucide-react";
import { useWishlistStore, useUIStore, useFilterStore, useInquiryStore } from "@/store";

export function MainHeader() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { toggleMobileMenu, showToast } = useUIStore();
  const { wishlist } = useWishlistStore();
  const { shortlist, openInquiryDrawer } = useInquiryStore();
  const { setSearchQuery } = useFilterStore();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    setSearchQuery(search.trim());
    router.push("/shop");
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-[#E9E3DC] shadow-xs transition-colors">
      <div className="max-w-[1280px] mx-auto px-5 py-3.5 flex items-center justify-between gap-5">
        {/* Hamburger Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-ink hover:bg-cream dark:hover:bg-line/20"
          aria-label="Open mobile navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Box on Left - Pepperfry Style */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center flex-0 flex-basis-[320px] border-b-1.5 border-[#d8d2cb] dark:border-line py-1.5 px-1 gap-2"
        >
          <input
            type="search"
            placeholder="Search for Sofas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-none outline-none text-sm bg-transparent text-ink placeholder:text-[#8a837c] font-medium"
            aria-label="Search products"
          />
          <button type="submit" aria-label="Submit search">
            <Search className="w-4 h-4 text-[#8a837c] hover:text-[#F16521] transition-colors" />
          </button>
        </form>

        {/* Centered Brand Logo - Nestora Style */}
        <Link
          href="/"
          className="font-head font-extrabold text-2xl md:text-3.5xl text-[#F16521] tracking-tight mx-auto select-none whitespace-nowrap hover:opacity-95 transition-opacity"
          aria-label="Laxmi Furniture home"
        >
          Laxmi Furniture
        </Link>

        {/* Header Action Buttons on Right */}
        <div className="flex items-center gap-5 shrink-0">
          <button
            onClick={() => showToast("Sign Up & Get Flat 10% off")}
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#1C1917] dark:text-white hover:text-[#F16521] text-right leading-tight cursor-pointer transition-colors"
          >
            <div>
              <span className="block text-[11px] text-[#6B6560] dark:text-muted">Sign Up Now</span>
              <small className="block font-bold text-[#F16521] text-[0.78rem]">
                Get Flat 10% off
              </small>
            </div>
            <User className="w-6 h-6 text-[#333333] dark:text-white stroke-[1.5]" />
          </button>

          <Link
            href="/about"
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#1C1917] dark:text-white hover:text-[#F16521] text-right leading-tight transition-colors"
          >
            <div>
              <span className="block text-[11px] text-[#6B6560] dark:text-muted">Find a</span>
              <span className="block font-bold text-[#F16521] text-[0.78rem]">Store</span>
            </div>
            <Store className="w-6 h-6 text-[#333333] dark:text-white stroke-[1.5]" />
          </Link>

          {/* Wishlist Button */}
          <button
            onClick={() =>
              showToast(
                wishlist.length
                  ? `${wishlist.length} item(s) in wishlist`
                  : "Wishlist is empty — tap a heart to save"
              )
            }
            className="relative p-2 rounded-full hover:bg-cream dark:hover:bg-line/20 transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="w-6 h-6 text-[#333333] dark:text-white stroke-[1.5]" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-[#F16521] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Button */}
          {/* Saved Inquiry Shortlist Button */}
          <button
            onClick={openInquiryDrawer}
            className="relative p-2 rounded-full hover:bg-cream dark:hover:bg-line/20 transition-colors"
            aria-label="Saved Inquiry Shortlist"
            title="Inquiry Shortlist"
          >
            <ClipboardList className="w-6 h-6 text-[#333333] dark:text-white stroke-[1.5]" />
            {shortlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-[#F16521] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs">
                {shortlist.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}


