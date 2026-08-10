"use client";

import React from "react";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/data/mock";
import { ProductCard } from "@/components/product/ProductCard";

export function PopularLocalSection() {
  // Select top 4 bestsellers for local showcase
  const popularProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="py-6 sm:py-8 bg-[#FAF6F1] dark:bg-[#151518] transition-colors border-t border-b border-[#E9E3DC] dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        
        {/* Header Title with Local Raipur Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#F16521] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-[#F16521]" />
              <span>Showroom Hot Picks</span>
            </div>
            <h2 className="font-head font-extrabold text-xl sm:text-2xl text-[#1C1917] dark:text-zinc-100 tracking-tight">
              Popular in Raipur & Local Showrooms
            </h2>
            <p className="text-xs text-[#6B6560] dark:text-zinc-400 mt-0.5">
              Top trending teak wood & custom sofas ordered by local customers.
            </p>
          </div>

          <Link
            href="/shop"
            className="flex items-center gap-1 text-xs font-bold text-[#F16521] hover:underline self-start sm:self-center"
          >
            <span>View All Bestsellers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Mobile Grid / 4-Column Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
