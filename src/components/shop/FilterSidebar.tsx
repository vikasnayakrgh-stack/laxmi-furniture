"use client";

import React from "react";
import { PRODUCTS } from "@/data/mock";
import { useFilterStore } from "@/store";

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
      className="md:sticky md:top-36 self-start flex flex-col gap-5 p-4 sm:p-5 border border-[#E5E7EB] rounded-2xl bg-white shadow-xs"
      aria-label="Product Filters"
    >
      {/* Category Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-black text-[#111827] border-b border-[#E5E7EB] pb-2 tracking-wide">
          Category
        </h4>
        <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] cursor-pointer hover:text-[#F97316] transition-colors py-0.5"
            >
              <input
                type="checkbox"
                checked={cats.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 accent-[#F97316] cursor-pointer rounded"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Band Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-black text-[#111827] border-b border-[#E5E7EB] pb-2 tracking-wide">
          Price
        </h4>
        <div className="space-y-1.5">
          {PRICE_BANDS.map((band, idx) => (
            <label
              key={band.label}
              className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] cursor-pointer hover:text-[#F97316] transition-colors py-0.5"
            >
              <input
                type="radio"
                name="priceBand"
                checked={priceBand === idx}
                onChange={() => setPriceBand(priceBand === idx ? null : idx)}
                className="w-4 h-4 accent-[#F97316] cursor-pointer"
              />
              <span>{band.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-black text-[#111827] border-b border-[#E5E7EB] pb-2 tracking-wide">
          Material
        </h4>
        <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
          {materials.map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] cursor-pointer hover:text-[#F97316] transition-colors py-0.5"
            >
              <input
                type="checkbox"
                checked={mats.includes(mat)}
                onChange={() => toggleMaterial(mat)}
                className="w-4 h-4 accent-[#F97316] cursor-pointer rounded"
              />
              <span>{mat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colour Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-black text-[#111827] border-b border-[#E5E7EB] pb-2 tracking-wide">
          Colour
        </h4>
        <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
          {colorList.map((col) => (
            <label
              key={col}
              className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] cursor-pointer hover:text-[#F97316] transition-colors py-0.5"
            >
              <input
                type="checkbox"
                checked={colors.includes(col)}
                onChange={() => toggleColor(col)}
                className="w-4 h-4 accent-[#F97316] cursor-pointer rounded"
              />
              <span>{col}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter Group */}
      <div className="space-y-2">
        <h4 className="font-head text-sm font-black text-[#111827] border-b border-[#E5E7EB] pb-2 tracking-wide">
          Rating
        </h4>
        <div className="space-y-1.5">
          {[4.5, 4, 3].map((r) => (
            <label
              key={r}
              className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] cursor-pointer hover:text-[#F97316] transition-colors py-0.5"
            >
              <input
                type="radio"
                name="ratingFilter"
                checked={minRating === r}
                onChange={() => setMinRating(minRating === r ? 0 : r)}
                className="w-4 h-4 accent-[#F97316] cursor-pointer"
              />
              <span>{r}★ & above</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear All Filters */}
      <button
        onClick={clearAllFilters}
        className="text-xs text-[#F97316] font-extrabold underline hover:opacity-80 transition-opacity self-start cursor-pointer pt-1"
      >
        Clear all filters
      </button>
    </aside>
  );
}
