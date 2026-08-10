"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Send, Award, CheckCircle2 } from "lucide-react";

export function LocalShowroomTrustSection() {
  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Laxmi+Furniture+Showroom+Raipur", "_blank");
  };

  const handleShowroomWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Laxmi Furniture, I would like to schedule a showroom visit to see your custom teak furniture."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section className="py-12 md:py-16 bg-[#FAF6F1] border-t border-b border-[#E5E7EB] transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        
        {/* Header Title with Legacy Badge */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF7ED] text-[#F97316] border border-[#FFEDD5] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>28+ Years of Craftsmanship Legacy</span>
          </div>
          <h2 className="font-head font-black text-2xl sm:text-4xl text-[#111827] tracking-tight">
            5,000+ Happy Homes in Raipur & CG
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563]">
            Experience solid teak wood furniture, test ergonomic comfort, and choose custom fabric finishes in person.
          </p>
        </div>

        {/* Local Showroom Trust Grid */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Showroom Text & Ratings */}
          <div className="flex flex-col gap-4">
            
            {/* Google Reviews Box */}
            <div className="flex items-center gap-3 bg-[#FAF6F1] border border-[#E5E7EB] p-3 rounded-2xl w-fit">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-extrabold text-[#F97316] text-base shadow-xs border border-[#E5E7EB]">
                4.9★
              </div>
              <div>
                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#111827]">
                  Google Verified Rating <span className="text-[#4B5563] font-normal">(1,240+ Local Reviews)</span>
                </span>
              </div>
            </div>

            <h3 className="font-head font-extrabold text-xl sm:text-2xl text-[#111827] leading-tight">
              Visit Our Raipur Showroom
            </h3>

            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Touch real wood finishes, inspect frame durability, and consult directly with our furniture designers.
            </p>

            {/* Showroom Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 py-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>10-Year Frame Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Free Home Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Factory Direct Price</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Custom Size & Wood</span>
              </div>
            </div>

            {/* Showroom Address Box */}
            <div className="flex items-start gap-3 bg-[#FAF6F1] p-3.5 rounded-2xl border border-[#E5E7EB] text-xs">
              <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#111827] font-bold text-sm">Laxmi Furniture Flagship Store</strong>
                <span className="text-[#4B5563]">GE Road, Near City Center Mall, Raipur, Chhattisgarh — 492001</span>
                <div className="text-[11px] font-bold text-[#16A34A] mt-1">Open 7 Days • 10:00 AM – 8:30 PM</div>
              </div>
            </div>

            {/* Showroom Action Buttons */}
            <div className="flex items-center gap-3 pt-1 flex-wrap">
              <button
                onClick={handleDirections}
                className="bg-[#111827] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:bg-[#F97316] transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Map Directions</span>
              </button>

              <button
                onClick={handleShowroomWhatsApp}
                className="bg-[#25D366] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:bg-[#20bd5a] transition-all flex items-center gap-2 active:scale-95 cursor-pointer pulse-wa"
              >
                <Send className="w-4 h-4 fill-white text-white" />
                <span>Book Store Visit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Real Showroom Photos */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-md group">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
              alt="Laxmi Furniture physical showroom in Raipur"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
              <span className="text-xs font-extrabold tracking-wide flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                Live Showroom Open Today
              </span>
              <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold">
                Raipur, CG
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
