"use client";

import React from "react";
import { Clock, Trash2 } from "lucide-react";
import { useRecentlyViewedStore } from "@/store";
import { ProductCard } from "@/components/product/ProductCard";

export function RecentlyViewedSection() {
  const { recentlyViewed, clearRecentlyViewed } = useRecentlyViewedStore();

  if (!recentlyViewed || recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="py-6 bg-white dark:bg-[#18181B] border-b border-[#E9E3DC] dark:border-zinc-800 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#F16521]" />
            <h2 className="font-head font-bold text-lg sm:text-xl text-[#1C1917] dark:text-zinc-100">
              Recently Viewed
            </h2>
            <span className="text-xs bg-[#FFF4EE] dark:bg-amber-950/40 text-[#F16521] px-2 py-0.5 rounded-full font-bold">
              {recentlyViewed.length}
            </span>
          </div>

          <button
            onClick={clearRecentlyViewed}
            className="flex items-center gap-1 text-[11px] font-semibold text-[#8a837c] hover:text-rose-600 transition-colors cursor-pointer"
            title="Clear history"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>

        {/* Horizontal Scrollable Carousel for Mobile */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="w-[165px] sm:w-[220px] shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
