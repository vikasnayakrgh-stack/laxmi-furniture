"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES_HOME, CAT_TABS } from "@/data/mock";
import { PillTabs } from "@/components/ui";
import { useFilterStore } from "@/store";

export function CategoryGrid() {
  const [activeTab, setActiveTab] = useState("living");
  const { setPresetCategory } = useFilterStore();

  const filteredCategories = CATEGORIES_HOME.filter((cat) =>
    cat.tags.includes(activeTab as any)
  );

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        <h2 className="font-head font-extrabold text-2xl md:text-3xl text-[#111827] text-center mb-6">
          Shop All Things Home
        </h2>

        <PillTabs
          tabs={CAT_TABS.map((t) => ({ key: t.k, label: t.l }))}
          activeKey={activeTab}
          onChange={setActiveTab}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mt-6">
          {filteredCategories.map((cat) => (
            <Link
              key={cat.name}
              href="/shop"
              onClick={() => setPresetCategory(cat.name)}
              className="group text-center cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xs mb-2.5 bg-[#FAF6F1] border border-[#E5E7EB]">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>
              <p className="font-extrabold text-xs md:text-sm text-[#111827] group-hover:text-[#F97316] transition-colors">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
