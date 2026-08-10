"use client";

import React, { useState, useEffect } from "react";
import { Bell, Headphones, MessageSquare, PhoneCall, ChevronUp } from "lucide-react";
import { useUIStore } from "@/store";

export function FloatingDock() {
  const { showToast } = useUIStore();
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Right Floating Action Dock (Desktop) */}
      <div className="hidden md:flex fixed right-3.5 top-1/2 -translate-y-1/2 z-40 flex-col gap-2.5">
        <button
          onClick={() => showToast("No new notifications")}
          className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center shadow-md hover:bg-accent hover:scale-108 transition-all cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        <button
          onClick={() => showToast("Support: call 1800-267-4445")}
          className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center shadow-md hover:bg-accent hover:scale-108 transition-all cursor-pointer"
          aria-label="Support Desk"
        >
          <Headphones className="w-5 h-5" />
        </button>
        <button
          onClick={() => showToast("Chat with us — avg. reply in 2 min")}
          className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center shadow-md hover:bg-accent hover:scale-108 transition-all cursor-pointer"
          aria-label="Live Chat"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>

      {/* Inquire On Phone Floating Pill */}
      <a
        href="tel:18002674445"
        className="fixed right-4 bottom-20 md:bottom-5 z-40 flex items-center gap-2 bg-white dark:bg-[#1C1815] rounded-full shadow-xl border border-line px-4 py-2 text-xs font-bold text-accent hover:-translate-y-1 transition-all"
      >
        <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
          <PhoneCall className="w-4 h-4" />
        </span>
        Inquire on Phone
      </a>

      {/* Scroll to Top Floating Button */}
      {showToTop && (
        <button
          onClick={scrollToTop}
          className="fixed left-4 bottom-20 md:bottom-5 z-40 w-11 h-11 rounded-full bg-ink text-white flex items-center justify-center shadow-xl hover:bg-accent transition-all cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
