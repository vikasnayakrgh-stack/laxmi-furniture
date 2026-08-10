"use client";

import React from "react";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/mock";
import { useFilterStore } from "@/store";
import { calculateDiscount } from "@/lib/utils";
import { SortOption } from "@/types";

const PRICE_BANDS = [
  (price: number) => price < 10000,
  (price: number) => price >= 10000 && price < 25000,
  (price: number) => price >= 25000 && price < 50000,
  (price: number) => price >= 50000,
];

export default function ShopPage() {
  const {
    cats,
    priceBand,
    mats,
    colors,
    minRating,
    sort,
    searchQuery,
    setSort,
  } = useFilterStore();

  const filteredProducts = PRODUCTS.filter((product) => {
    if (cats.length > 0 && !cats.includes(product.cat)) return false;
    if (priceBand !== null && !PRICE_BANDS[priceBand](product.price)) return false;
    if (mats.length > 0 && !mats.includes(product.mat)) return false;
    if (colors.length > 0 && !colors.includes(product.color)) return false;
    if (minRating > 0 && product.rating < minRating) return false;
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.cat.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "disc") return calculateDiscount(b.price, b.mrp) - calculateDiscount(a.price, a.mrp);
    if (sort === "rate") return b.rating - a.rating;
    return (b.badge === "best" ? 1 : 0) - (a.badge === "best" ? 1 : 0);
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-5 py-6 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 sm:gap-8">
        <FilterSidebar />

        <div>
          {/* Shop Header & Sort Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-head font-extrabold text-xl md:text-2xl text-[#1C1917] dark:text-zinc-100">
                {searchQuery ? `Results for "${searchQuery}"` : "Shop All Furniture"}
              </h2>
              <span className="text-xs font-medium text-[#6B6560] dark:text-zinc-400">
                {sortedProducts.length} products available
              </span>
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="border border-[#E9E3DC] dark:border-zinc-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-zinc-800 text-[#1C1917] dark:text-zinc-100 outline-none cursor-pointer shadow-2xs"
              aria-label="Sort products"
            >
              <option value="pop">Sort: Popularity</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="disc">Discount</option>
              <option value="rate">Customer Rating</option>
            </select>
          </div>

          {/* Product Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-2 text-[#6B6560] dark:text-zinc-400 bg-stone-50 dark:bg-zinc-900 rounded-2xl border border-[#E9E3DC] dark:border-zinc-800">
              <h3 className="font-head font-bold text-lg text-[#1C1917] dark:text-zinc-100">
                No products match your filters
              </h3>
              <p className="text-xs">Try clearing a filter or two.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
