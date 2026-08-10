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
    const message = encodeURIComponent("Hi Laxmi Furniture, I want to inquire about custom solid teak wood furniture & factory price quote.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E7EB] shadow-xs transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 py-2.5 sm:px-5 sm:py-3 flex flex-col gap-2 md:gap-0">
        
        {/* Main Header Bar */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-[#111827] hover:bg-[#F3F4F6] active:scale-95 transition-all"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center flex-0 flex-basis-[300px] border border-[#E5E7EB] bg-[#F9FAFB] rounded-xl py-1.5 px-3 gap-2 focus-within:border-[#F97316] focus-within:bg-white transition-colors shadow-2xs"
          >
            <Search className="w-4 h-4 text-[#6B7280] shrink-0" />
            <input
              type="search"
              placeholder="Search for Sofas, Beds..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-none outline-none text-xs sm:text-sm bg-transparent text-[#111827] placeholder:text-[#6B7280] font-medium"
              aria-label="Search products"
            />
            <button type="submit" aria-label="Submit search" className="text-xs font-bold text-[#F97316]">
              Search
            </button>
          </form>

          {/* Brand Logo */}
          <Link
            href="/"
            className="font-head font-black text-xl sm:text-2xl md:text-3xl text-[#F97316] tracking-tight select-none whitespace-nowrap hover:opacity-90 transition-opacity"
            aria-label="Laxmi Furniture home"
          >
            Laxmi Furniture
          </Link>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Direct WhatsApp Button */}
            <button
              onClick={handleHeaderWhatsApp}
              className="flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-black shadow-xs hover:bg-[#20bd5a] active:scale-95 transition-all cursor-pointer pulse-wa"
              title="Chat on WhatsApp"
            >
              <Send className="w-3.5 h-3.5 fill-white text-white" />
              <span className="hidden xs:inline">WhatsApp</span>
            </button>

            {/* Desktop User Account & Store */}
            <button
              onClick={() => showToast("Sign Up & Get Flat 10% off")}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#111827] hover:text-[#F97316] text-right leading-tight cursor-pointer transition-colors"
            >
              <div>
                <span className="block text-[11px] text-[#4B5563]">Sign Up</span>
                <small className="block font-bold text-[#F97316] text-[0.78rem]">
                  Flat 10% Off
                </small>
              </div>
              <User className="w-5 h-5 text-[#111827] stroke-[1.5]" />
            </button>

            <Link
              href="/about"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#111827] hover:text-[#F97316] text-right leading-tight transition-colors"
            >
              <div>
                <span className="block text-[11px] text-[#4B5563]">Raipur</span>
                <span className="block font-bold text-[#F97316] text-[0.78rem]">Showroom</span>
              </div>
              <Store className="w-5 h-5 text-[#111827] stroke-[1.5]" />
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
              className="relative p-1.5 sm:p-2 rounded-full hover:bg-[#F3F4F6] active:scale-95 transition-all"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-[#111827] stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#F97316] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-2xs">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Saved Inquiry Shortlist Button */}
            <button
              onClick={openInquiryDrawer}
              className="relative p-1.5 sm:p-2 rounded-full hover:bg-[#F3F4F6] active:scale-95 transition-all"
              aria-label="Saved Inquiry Shortlist"
              title="Inquiry Shortlist"
            >
              <ClipboardList className="w-5 h-5 text-[#111827] stroke-[1.5]" />
              {shortlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#F97316] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-2xs">
                  {shortlist.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex md:hidden items-center border border-[#E5E7EB] bg-[#F3F4F6] rounded-xl px-3 py-1.5 gap-2"
        >
          <Search className="w-4 h-4 text-[#6B7280] shrink-0" />
          <input
            type="search"
            placeholder="Search Sofas, Beds, Dining..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-none outline-none text-xs bg-transparent text-[#111827] placeholder:text-[#6B7280] font-medium"
            aria-label="Search products on mobile"
          />
          <button type="submit" className="text-[11px] font-extrabold text-[#F97316] shrink-0">
            Search
          </button>
        </form>

      </div>
    </header>
  );
}
