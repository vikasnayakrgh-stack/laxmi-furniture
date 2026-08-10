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
    <header className="sticky top-0 z-40 bg-white border-b border-[#E9E3DC] shadow-xs transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 py-2.5 sm:px-5 sm:py-3.5 flex flex-col gap-2 md:gap-0">
        
        {/* Main Header Bar */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-[#1C1917] hover:bg-[#FAF6F1] active:scale-95 transition-all"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center flex-0 flex-basis-[300px] border-b-2 border-[#E9E3DC] py-1.5 px-1 gap-2 focus-within:border-[#F16521] transition-colors"
          >
            <input
              type="search"
              placeholder="Search for Sofas, Beds..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-none outline-none text-xs sm:text-sm bg-transparent text-[#1C1917] placeholder:text-[#8B837C] font-medium"
              aria-label="Search products"
            />
            <button type="submit" aria-label="Submit search">
              <Search className="w-4 h-4 text-[#8B837C] hover:text-[#F16521] transition-colors" />
            </button>
          </form>

          {/* Brand Logo */}
          <Link
            href="/"
            className="font-head font-black text-xl sm:text-2xl md:text-3xl text-[#F16521] tracking-tight select-none whitespace-nowrap hover:opacity-90 transition-opacity"
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
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#1C1917] hover:text-[#F16521] text-right leading-tight cursor-pointer transition-colors"
            >
              <div>
                <span className="block text-[11px] text-[#6B6560]">Sign Up</span>
                <small className="block font-bold text-[#F16521] text-[0.78rem]">
                  Flat 10% Off
                </small>
              </div>
              <User className="w-5 h-5 text-[#333333] stroke-[1.5]" />
            </button>

            <Link
              href="/about"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#1C1917] hover:text-[#F16521] text-right leading-tight transition-colors"
            >
              <div>
                <span className="block text-[11px] text-[#6B6560]">Raipur</span>
                <span className="block font-bold text-[#F16521] text-[0.78rem]">Showroom</span>
              </div>
              <Store className="w-5 h-5 text-[#333333] stroke-[1.5]" />
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
              className="relative p-1.5 sm:p-2 rounded-full hover:bg-[#FAF6F1] active:scale-95 transition-all"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-[#333333] stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#F16521] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-2xs">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Saved Inquiry Shortlist Button */}
            <button
              onClick={openInquiryDrawer}
              className="relative p-1.5 sm:p-2 rounded-full hover:bg-[#FAF6F1] active:scale-95 transition-all"
              aria-label="Saved Inquiry Shortlist"
              title="Inquiry Shortlist"
            >
              <ClipboardList className="w-5 h-5 text-[#333333] stroke-[1.5]" />
              {shortlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#F16521] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-2xs">
                  {shortlist.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex md:hidden items-center border border-[#E9E3DC] bg-[#FAF6F1] rounded-xl px-3 py-1.5 gap-2"
        >
          <Search className="w-4 h-4 text-[#8B837C] shrink-0" />
          <input
            type="search"
            placeholder="Search Sofas, Beds, Dining..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-none outline-none text-xs bg-transparent text-[#1C1917] placeholder:text-[#8B837C] font-medium"
            aria-label="Search products on mobile"
          />
          <button type="submit" className="text-[11px] font-extrabold text-[#F16521] shrink-0">
            Search
          </button>
        </form>

      </div>
    </header>
  );
}
