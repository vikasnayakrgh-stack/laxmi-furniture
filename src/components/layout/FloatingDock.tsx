"use client";

import React, { useState, useEffect } from "react";
import { Send, PhoneCall, ChevronUp } from "lucide-react";

export function FloatingDock() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFloatingWhatsApp = () => {
    const message = encodeURIComponent("Hi Laxmi Furniture, I want to inquire about custom solid teak wood furniture & factory price quotes.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <div className="fixed right-3.5 bottom-[72px] md:bottom-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={handleFloatingWhatsApp}
          className="flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:bg-[#20bd5a] active:scale-95 transition-all cursor-pointer border-2 border-white pulse-wa"
          aria-label="Direct WhatsApp Inquiry"
        >
          <Send className="w-4 h-4 fill-white text-white" />
          <span className="text-xs sm:text-sm font-extrabold tracking-tight">WhatsApp Inquiry</span>
        </button>
      </div>

      {/* Floating Call Showroom Pill (Desktop) */}
      <a
        href="tel:18002674445"
        className="hidden md:flex fixed left-5 bottom-6 z-40 items-center gap-2 bg-white text-[#111827] border border-[#E5E7EB] rounded-full shadow-xl px-4 py-2 text-xs font-bold hover:text-[#F97316] active:scale-95 transition-all"
      >
        <span className="w-7 h-7 rounded-full bg-[#F97316] text-white flex items-center justify-center shrink-0">
          <PhoneCall className="w-3.5 h-3.5" />
        </span>
        <span>Call: 1800-267-4445</span>
      </a>

      {/* Scroll to Top Button */}
      {showToTop && (
        <button
          onClick={scrollToTop}
          className="fixed left-3.5 bottom-[72px] md:left-auto md:right-5 md:bottom-20 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-xl hover:bg-[#F97316] active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
