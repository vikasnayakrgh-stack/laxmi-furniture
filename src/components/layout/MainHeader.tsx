"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, User, Store, Heart, ClipboardList, Menu, Send } from "lucide-react";
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

  const handleHeaderWhatsApp = () => {
    const message = encodeURIComponent("Hi Laxmi Furniture, I am looking for custom furniture & quote details.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#18181B] border-b border-[#E9E3DC] dark:border-zinc-800 shadow-2xs transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 py-2.5 sm:px-5 sm:py-3.5 flex flex-col gap-2.5 md:gap-0">
        
        {/* Main Header Bar */}
        <div className="flex items-center justify-between gap-3">
          {/* Hamburger Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-[#1C1917] dark:text-zinc-100 hover:bg-stone-100 dark:hover:bg-zinc-800"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center flex-0 flex-basis-[300px] border-b-1.5 border-[#d8d2cb] dark:border-line py-1.5 px-1 gap-2"
          >
            <input
              type="search"
              placeholder="Search for Sofas, Beds..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-none outline-none text-sm bg-transparent text-ink placeholder:text-[#8a837c] font-medium"
              aria-label="Search products"
            />
            <button type="submit" aria-label="Submit search">
              <Search className="w-4 h-4 text-[#8a837c] hover:text-[#F16521] transition-colors" />
            </button>
          </form>

          {/* Brand Logo */}
          <Link
            href="/"
            className="font-head font-extrabold text-xl sm:text-2xl md:text-3.5xl text-[#F16521] tracking-tight select-none whitespace-nowrap hover:opacity-95 transition-opacity"
            aria-label="Laxmi Furniture home"
          >
            Laxmi Furniture
          </Link>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Quick WhatsApp Header Button */}
            <button
              onClick={handleHeaderWhatsApp}
              className="flex items-center gap-1.5 bg-[#25D366] text-white px-2.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-xs hover:bg-[#20bd5a] transition-all cursor-pointer"
              title="Chat on WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </button>

            {/* Account & Store links (Desktop only) */}
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
              <User className="w-5 h-5 text-[#333333] dark:text-white stroke-[1.5]" />
            </button>

            <Link
              href="/about"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#1C1917] dark:text-white hover:text-[#F16521] text-right leading-tight transition-colors"
            >
              <div>
                <span className="block text-[11px] text-[#6B6560] dark:text-muted">Find a</span>
                <span className="block font-bold text-[#F16521] text-[0.78rem]">Store</span>
              </div>
              <Store className="w-5 h-5 text-[#333333] dark:text-white stroke-[1.5]" />
            </Link>

            {/* Wishlist Button */}
            <button
              onClick={() =>
                showToast(
                  wishlist.length
                    ? `${wishlist.length} item(s) in wishlist`
                    : "Wishlist is empty — tap heart to save"
                )
              }
              className="relative p-1.5 sm:p-2 rounded-full hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-[#333333] dark:text-white stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#F16521] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Saved Inquiry Shortlist Button */}
            <button
              onClick={openInquiryDrawer}
              className="relative p-1.5 sm:p-2 rounded-full hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Saved Inquiry Shortlist"
              title="Inquiry Shortlist"
            >
              <ClipboardList className="w-5 h-5 text-[#333333] dark:text-white stroke-[1.5]" />
              {shortlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#F16521] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {shortlist.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Auto-Focus & Sticky under Header on Mobile) */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex md:hidden items-center border border-[#d8d2cb] dark:border-zinc-700 bg-stone-50 dark:bg-zinc-900 rounded-lg px-3 py-1.5 gap-2"
        >
          <Search className="w-4 h-4 text-[#8a837c] shrink-0" />
          <input
            type="search"
            placeholder="Search for Sofas, Beds, Dining..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-none outline-none text-xs bg-transparent text-[#1C1917] dark:text-zinc-100 placeholder:text-[#8a837c] font-medium"
            aria-label="Search products on mobile"
          />
          <button type="submit" className="text-[11px] font-bold text-[#F16521] shrink-0">
            Search
          </button>
        </form>

      </div>
    </header>
  );
}
