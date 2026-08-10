"use client";

import React from "react";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/data/mock";
import { ProductCard } from "@/components/product/ProductCard";

export function PopularLocalSection() {
  const popularProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-[#FAF6F1] border-t border-b border-[#E5E7EB] transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#F97316] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Raipur Showroom Bestsellers</span>
            </div>
            <h2 className="font-head font-black text-2xl sm:text-3xl text-[#111827] tracking-tight">
              Popular in Raipur & Local Homes
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Top trending solid teak wood sofas & custom dining sets chosen by local families.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#F97316] hover:text-[#EA580C] transition-colors self-start sm:self-auto border-b border-[#F97316] pb-0.5"
          >
            <span>Explore All Bestsellers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Mobile Grid / 4-Column Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
