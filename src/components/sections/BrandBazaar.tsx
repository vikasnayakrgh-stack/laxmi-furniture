"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PillTabs } from "@/components/ui";
import { BRANDS, BRAND_TABS } from "@/data/mock";

export function BrandBazaar() {
  const [activeCategory, setActiveCategory] = useState("furniture");

  const currentBrands = BRANDS[activeCategory as keyof typeof BRANDS] || [];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">
        <h2 className="font-head font-semibold text-2xl md:text-3xl text-[#8B5E3C] text-center mb-6">
          Brand Bazaar
        </h2>

        <PillTabs
          tabs={BRAND_TABS.map((t) => ({ key: t.k, label: t.l }))}
          activeKey={activeCategory}
          onChange={setActiveCategory}
          variant="underline"
        />

        <div className="hscroll pt-4">
          {currentBrands.map((brand) => (
            <Link
              key={brand.n}
              href="/shop"
              className="group relative w-[186px] md:w-[230px] rounded-xl overflow-hidden shadow-xs hover:-translate-y-1 transition-all duration-300 shrink-0 border border-[#E9E3DC] dark:border-line"
            >
              <div className="relative w-full h-[270px]">
                <Image
                  src={brand.img}
                  alt={`${brand.n} collection`}
                  fill
                  sizes="230px"
                  className="object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 pt-8 pb-3.5 px-3.5 bg-gradient-to-t from-[#140C06]/85 to-transparent text-white text-center">
                  <b className="block font-bold text-sm md:text-base">{brand.n}</b>
                  <span className="text-xs font-semibold text-[#FFD9C2]">
                    {brand.off}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


