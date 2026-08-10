import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Award, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export function EditorialBanner() {
  return (
    <section className="bg-[#FAF6F1] py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] rounded-2xl overflow-hidden bg-[#F3EDE6] border border-[#E9E3DC] shadow-xs relative">
          
          {/* Decorative Subtle Accent Tag */}
          <div className="absolute top-4 left-6 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E6] border border-[#FFDEC9] text-[#F16521] text-[11px] font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F16521]" />
            Signature Craftsmanship
          </div>

          {/* Copy Box */}
          <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center gap-4 z-10 pt-12 sm:pt-12">
            <div className="space-y-1">
              <span className="text-[#8B5E3C] font-head italic text-lg sm:text-xl font-bold block">
                Unbelievably Handcrafted &
              </span>
              <h2 className="font-head font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1C1917] leading-tight">
                woodsworth<span className="text-[#F16521]">.</span>
              </h2>
              <p className="text-[#6B6560] text-xs sm:text-sm font-medium pt-1 max-w-md">
                100% Solid Teak wood furniture designed to endure generations of comfort. Every piece is quality assured and seasoned for perfection.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 my-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-[#1C1917] text-xs font-bold shadow-2xs border border-[#E9E3DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8E3E]" />
                Solid Wood
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-[#1C1917] text-xs font-bold shadow-2xs border border-[#E9E3DC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F16521]" />
                10-Year Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-[#1C1917] text-xs font-bold shadow-2xs border border-[#E9E3DC]">
                <Award className="w-3.5 h-3.5 text-[#8B5E3C]" />
                4.9★ Rated
              </span>
            </div>

            {/* Call to Action */}
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 font-extrabold text-sm text-white bg-[#F16521] hover:bg-[#D4541A] px-6 py-3 rounded-full transition-all duration-300 shadow-md w-fit mt-2 group"
            >
              Explore Woodsworth Collection
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Box */}
          <div className="relative min-h-[300px] md:min-h-[380px] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant living room with premium wooden furniture"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

