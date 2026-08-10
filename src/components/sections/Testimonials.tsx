import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/mock";
import { getStarRatingString } from "@/lib/utils";
import { Star, BadgeCheck } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-[#FAF6F1] py-14" aria-label="Customer Reviews">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">
          <div className="text-left lg:sticky lg:top-8">
            {/* Aggregate rating */}
            <div className="inline-flex items-center gap-2 bg-[#F16521] text-white text-sm font-bold px-4 py-2 rounded-full mb-5 shadow-[0_4px_14px_rgba(241,101,33,0.30)]">
              <Star className="w-4 h-4 fill-white" aria-hidden="true" />
              4.9 / 5 Rating
            </div>
            <h2 className="font-head font-bold text-[#7C5230] text-3xl md:text-4xl leading-tight mb-3">
              See Why They
              <br />
              <em>Love Us</em>
            </h2>
            <p className="text-sm font-semibold text-[#78716C]">
              Trusted by over <strong className="text-[#1C1917]">11 Million</strong> happy homes across India
            </p>
            {/* Star display */}
            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F16521] text-[#F16521]" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm font-bold text-[#1C1917]">4.9</span>
              <span className="text-sm text-[#78716C] ml-1">(11M+ reviews)</span>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E9E3DC] rounded-2xl p-5 flex gap-4 items-start shadow-[0_2px_10px_rgba(28,25,23,0.07)] hover:shadow-[0_6px_24px_rgba(28,25,23,0.08)] transition-shadow duration-300"
              >
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#FFDEC9]">
                  <Image
                    src={t.av}
                    alt={t.n}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-2 min-w-0">
                  {/* Verified badge + name */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-[#1C1917]">{t.n}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <BadgeCheck className="w-3.5 h-3.5 text-[#16A34A]" aria-hidden="true" />
                        <span className="text-[0.65rem] font-semibold text-[#16A34A] uppercase tracking-wide">
                          Verified Purchase
                        </span>
                      </div>
                    </div>
                    {/* Product thumbnail — no rotation for clean look */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E9E3DC]">
                      <Image
                        src={t.ph}
                        alt={`Product purchased by ${t.n}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.s }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F16521] text-[#F16521]" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-xs text-[#44403C] leading-relaxed font-medium line-clamp-3">
                    &ldquo;{t.q}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
