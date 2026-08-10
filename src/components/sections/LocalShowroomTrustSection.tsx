"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Phone, Send, ShieldCheck, Truck, Clock, Award } from "lucide-react";

export function LocalShowroomTrustSection() {
  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Laxmi+Furniture+Showroom+Raipur", "_blank");
  };

  const handleShowroomWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Laxmi Furniture, I would like to schedule a visit to your showroom in Raipur."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section className="py-8 bg-white dark:bg-[#18181B] border-t border-b border-[#E9E3DC] dark:border-zinc-800 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        
        {/* Local Showroom Trust Box */}
        <div className="bg-gradient-to-br from-[#FAF6F1] via-[#FFF8F3] to-[#FFF4EE] dark:from-zinc-900 dark:to-zinc-950 border border-[#FFDEC9] dark:border-zinc-800 rounded-2xl p-5 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            
            {/* Left Column: Showroom Text & Ratings */}
            <div className="flex flex-col gap-3">
              {/* Google Reviews Badge */}
              <div className="inline-flex items-center gap-2 bg-white dark:bg-zinc-800 border border-[#E9E3DC] dark:border-zinc-700 px-3 py-1.5 rounded-full shadow-2xs w-fit">
                <span className="font-extrabold text-xs text-[#1C1917] dark:text-zinc-100 flex items-center gap-1">
                  Google <span className="text-amber-500 font-black">4.9 ★</span>
                </span>
                <span className="text-[11px] text-[#6B6560] dark:text-zinc-400 border-l border-stone-200 dark:border-zinc-700 pl-2">
                  (1,240+ Verified Reviews)
                </span>
              </div>

              <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-[#1C1917] dark:text-zinc-100 tracking-tight leading-tight">
                Visit Our Flagship Furniture Showroom
              </h2>

              <p className="text-xs sm:text-sm text-[#6B6560] dark:text-zinc-300 leading-relaxed">
                Experience solid teak wood furniture, test ergonomic comfort, and choose custom fabric finishes in person at our physical showroom.
              </p>

              {/* Showroom Features */}
              <div className="grid grid-cols-2 gap-3 my-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917] dark:text-zinc-200">
                  <ShieldCheck className="w-4 h-4 text-[#F16521] shrink-0" />
                  <span>10-Year Frame Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917] dark:text-zinc-200">
                  <Truck className="w-4 h-4 text-[#F16521] shrink-0" />
                  <span>Free Home Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917] dark:text-zinc-200">
                  <Award className="w-4 h-4 text-[#F16521] shrink-0" />
                  <span>Factory Direct Price</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917] dark:text-zinc-200">
                  <Clock className="w-4 h-4 text-[#F16521] shrink-0" />
                  <span>Open 7 Days (10 AM–8 PM)</span>
                </div>
              </div>

              {/* Showroom Address */}
              <div className="flex items-start gap-2 bg-white/80 dark:bg-zinc-800/80 p-3 rounded-xl border border-[#E9E3DC] dark:border-zinc-700 text-xs">
                <MapPin className="w-4 h-4 text-[#F16521] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1C1917] dark:text-zinc-100 font-bold">Laxmi Furniture Store</strong>
                  <span className="text-[#6B6560] dark:text-zinc-400">GE Road, Near City Center, Raipur, Chhattisgarh — 492001</span>
                </div>
              </div>

              {/* Showroom Actions */}
              <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                <button
                  onClick={handleDirections}
                  className="bg-[#F16521] text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs hover:bg-[#D4541A] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Map Directions</span>
                </button>

                <button
                  onClick={handleShowroomWhatsApp}
                  className="bg-[#25D366] text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:bg-[#20bd5a] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Book Store Visit</span>
                </button>
              </div>
            </div>

            {/* Right Column: Showroom Photo Showcase */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                alt="Laxmi Furniture physical showroom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Live Showroom Open Today
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
