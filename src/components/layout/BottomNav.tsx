"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Search, ClipboardList, User } from "lucide-react";
import { useUIStore, useInquiryStore } from "@/store";

export function BottomNav() {
  const pathname = usePathname();
  const { showToast } = useUIStore();
  const { shortlist, openInquiryDrawer } = useInquiryStore();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#1C1815] border-t border-line px-1 py-1.5 flex items-center justify-around shadow-lg"
      aria-label="Mobile Bottom Navigation"
    >
      <Link
        href="/"
        className={`flex flex-col items-center gap-0.5 text-[0.66rem] font-semibold transition-colors ${
          pathname === "/" ? "text-accent" : "text-muted"
        }`}
      >
        <Home className="w-5 h-5" />
        Home
      </Link>

      <Link
        href="/shop"
        className={`flex flex-col items-center gap-0.5 text-[0.66rem] font-semibold transition-colors ${
          pathname === "/shop" ? "text-accent" : "text-muted"
        }`}
      >
        <LayoutGrid className="w-5 h-5" />
        Categories
      </Link>

      <Link
        href="/shop"
        className="flex flex-col items-center gap-0.5 text-[0.66rem] font-semibold text-muted transition-colors"
      >
        <Search className="w-5 h-5" />
        Search
      </Link>

      <button
        onClick={openInquiryDrawer}
        className="relative flex flex-col items-center gap-0.5 text-[0.66rem] font-semibold text-muted transition-colors cursor-pointer"
      >
        <ClipboardList className="w-5 h-5" />
        Inquiry
        {shortlist.length > 0 && (
          <span className="absolute top-0 right-2 bg-accent text-white text-[0.6rem] font-bold min-w-[16px] h-[16px] rounded-full flex items-center justify-center">
            {shortlist.length}
          </span>
        )}
      </button>

      <button
        onClick={() => showToast("Sign in coming soon")}
        className="flex flex-col items-center gap-0.5 text-[0.66rem] font-semibold text-muted transition-colors cursor-pointer"
      >
        <User className="w-5 h-5" />
        Account
      </button>
    </nav>
  );
}
