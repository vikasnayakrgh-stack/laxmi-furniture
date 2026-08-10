"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Phone, MapPin, Send } from "lucide-react";
import { useInquiryStore } from "@/store";

export function BottomNav() {
  const pathname = usePathname();
  const { shortlist, openInquiryDrawer } = useInquiryStore();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Laxmi Furniture, I'm reaching out from your website. I want to inquire about custom furniture."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E5E7EB] px-1 py-1.5 flex items-center justify-around shadow-xl transition-colors"
      aria-label="Mobile Bottom Navigation"
    >
      {/* 1. Home */}
      <Link
        href="/"
        className={`flex flex-col items-center gap-0.5 text-[0.66rem] font-extrabold transition-colors ${
          pathname === "/" ? "text-[#F97316]" : "text-[#4B5563]"
        }`}
      >
        <Home className="w-5 h-5" />
        Home
      </Link>

      {/* 2. Categories */}
      <Link
        href="/shop"
        className={`flex flex-col items-center gap-0.5 text-[0.66rem] font-extrabold transition-colors ${
          pathname === "/shop" ? "text-[#F97316]" : "text-[#4B5563]"
        }`}
      >
        <LayoutGrid className="w-5 h-5" />
        Categories
      </Link>

      {/* 3. WhatsApp (Highlighted Primary CTA) */}
      <button
        onClick={handleWhatsApp}
        className="flex flex-col items-center gap-0.5 text-[0.66rem] font-black text-[#25D366] active:scale-95 transition-transform cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center -mt-3 shadow-md border-2 border-white">
          <Send className="w-4 h-4 ml-0.5 fill-white text-white" />
        </div>
        WhatsApp
      </button>

      {/* 4. Call Now */}
      <a
        href="tel:18002674445"
        className="flex flex-col items-center gap-0.5 text-[0.66rem] font-extrabold text-[#4B5563] active:text-[#F97316] transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call
      </a>

      {/* 5. Visit Showroom */}
      <Link
        href="/about"
        className={`flex flex-col items-center gap-0.5 text-[0.66rem] font-extrabold transition-colors ${
          pathname === "/about" ? "text-[#F97316]" : "text-[#4B5563]"
        }`}
      >
        <MapPin className="w-5 h-5" />
        Showroom
      </Link>
    </nav>
  );
}
