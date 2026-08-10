"use client";

import React from "react";
import { PRODUCTS } from "@/data/mock";
import { useFilterStore } from "@/store";
import { SortOption } from "@/types";

const PRICE_BANDS = [
  { label: "Under ₹10,000", test: (price: number) => price < 10000 },
  { label: "₹10,000 – ₹25,000", test: (price: number) => price >= 10000 && price < 25000 },
  { label: "₹25,000 – ₹50,000", test: (price: number) => price >= 25000 && price < 50000 },
  { label: "Above ₹50,000", test: (price: number) => price >= 50000 },
];

const uniqueValues = (key: keyof (typeof PRODUCTS)[0]) =>
  Array.from(new Set(PRODUCTS.map((p) => p[key] as string)));

export function FilterSidebar() {
  const {
    cats,
    priceBand,
    mats,
    colors,
    minRating,
    toggleCategory,
    setPriceBand,
    toggleMaterial,
    toggleColor,
    setMinRating,
    clearAllFilters,
  } = useFilterStore();

  const categories = uniqueValues("cat");
  const materials = uniqueValues("mat");
  const colorList = uniqueValues("color");

  return (
    <aside
      className="md:sticky md:top-36 self-start flex flex-col gap-5 p-4 border border-line rounded-xl bg-white dark:bg-[#1C1815] shadow-xs"
      aria-label="Product Filters"
    >
      {/* Category Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-bold text-brown dark:text-accent border-b border-line pb-1.5">
          Category
        </h4>
        <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 text-xs text-ink cursor-pointer hover:text-accent"
            >
              <input
                type="checkbox"
                checked={cats.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 accent-accent cursor-pointer"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Price Band Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-bold text-brown dark:text-accent border-b border-line pb-1.5">
          Price
        </h4>
        <div className="space-y-1">
          {PRICE_BANDS.map((band, idx) => (
            <label
              key={band.label}
              className="flex items-center gap-2 text-xs text-ink cursor-pointer hover:text-accent"
            >
              <input
                type="radio"
                name="priceBand"
                checked={priceBand === idx}
                onChange={() => setPriceBand(priceBand === idx ? null : idx)}
                className="w-4 h-4 accent-accent cursor-pointer"
              />
              {band.label}
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-bold text-brown dark:text-accent border-b border-line pb-1.5">
          Material
        </h4>
        <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
          {materials.map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-2 text-xs text-ink cursor-pointer hover:text-accent"
            >
              <input
                type="checkbox"
                checked={mats.includes(mat)}
                onChange={() => toggleMaterial(mat)}
                className="w-4 h-4 accent-accent cursor-pointer"
              />
              {mat}
            </label>
          ))}
        </div>
      </div>

      {/* Colour Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-bold text-brown dark:text-accent border-b border-line pb-1.5">
          Colour
        </h4>
        <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
          {colorList.map((col) => (
            <label
              key={col}
              className="flex items-center gap-2 text-xs text-ink cursor-pointer hover:text-accent"
            >
              <input
                type="checkbox"
                checked={colors.includes(col)}
                onChange={() => toggleColor(col)}
                className="w-4 h-4 accent-accent cursor-pointer"
              />
              {col}
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-bold text-brown dark:text-accent border-b border-line pb-1.5">
          Rating
        </h4>
        <div className="space-y-1">
          {[4.5, 4, 3].map((r) => (
            <label
              key={r}
              className="flex items-center gap-2 text-xs text-ink cursor-pointer hover:text-accent"
            >
              <input
                type="radio"
                name="ratingFilter"
                checked={minRating === r}
                onChange={() => setMinRating(minRating === r ? 0 : r)}
                className="w-4 h-4 accent-accent cursor-pointer"
              />
              {r}★ & above
            </label>
          ))}
        </div>
      </div>

      {/* Clear All Filters */}
      <button
        onClick={clearAllFilters}
        className="text-xs text-accent font-bold underline hover:opacity-80 transition-opacity self-start cursor-pointer"
      >
        Clear all filters
      </button>
    </aside>
  );
}
