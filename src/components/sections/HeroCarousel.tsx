"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/mock";

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleWhatsAppHero = () => {
    const slide = HERO_SLIDES[currentIndex];
    const message = encodeURIComponent(
      `Hi Laxmi Furniture, I saw the hero banner: "${slide.title}" and want to get factory price & catalog.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6F1] dark:bg-[#121214] py-3 sm:py-6">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3 sm:gap-4">
          
          {/* Main Hero Card (Height max 60vh on mobile) */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm bg-gradient-to-r from-[#FF7A2F] via-[#F16521] to-[#E55310] max-h-[60vh] min-h-[300px] sm:min-h-[360px] flex flex-col md:flex-row">
            
            {/* Background Image overlay for mobile aspect */}
            <div className="absolute inset-0 z-0">
              <Image
                src={HERO_SLIDES[currentIndex].img}
                alt={HERO_SLIDES[currentIndex].title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover opacity-30 md:opacity-100 md:relative md:w-1/2 md:h-full md:float-right"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden" />
            </div>

            {/* Banner Text Block */}
            <div className="p-5 sm:p-8 md:p-9 flex flex-col justify-center gap-2.5 text-white z-10 relative md:w-1/2">
              <span className="font-head italic text-xs sm:text-base font-semibold tracking-wide text-amber-100">
                Factory Direct • Free Shipping Sitewide
              </span>
              <h1 className="font-head font-black text-2xl sm:text-4xl leading-tight text-white tracking-tight drop-shadow-md">
                {HERO_SLIDES[currentIndex].title}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-white/95 line-clamp-2">
                {HERO_SLIDES[currentIndex].sub}
              </p>


              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <button
                  onClick={handleWhatsAppHero}
                  className="bg-[#25D366] text-white font-black px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm hover:bg-[#20bd5a] hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  WhatsApp Now
                </button>
                <Link
                  href="/shop"
                  className="bg-white/90 text-[#1C1917] font-extrabold px-4 py-2.5 rounded-full text-xs sm:text-sm hover:bg-white transition-all shadow-xs"
                >
                  Shop Catalog
                </Link>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="absolute bottom-3 right-4 flex items-center gap-2 z-20">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs hover:bg-black/60 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs hover:bg-black/60 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Steal The Deal / Local Showroom Offer Card (Desktop/Tablet secondary) */}
          <div className="hidden lg:flex relative rounded-2xl overflow-hidden shadow-sm bg-gradient-to-br from-[#FFF3E8] via-[#FFF0E6] to-[#FFE8D6] border border-[#FFDEC9] text-[#1C1917] min-h-[320px] flex-col justify-between p-6">
            <div className="absolute top-4 left-4 z-10 bg-[#F16521] text-white font-extrabold text-[10px] uppercase px-3 py-1 rounded-md shadow-xs">
              Factory Direct Deal
            </div>

            <div className="z-10 mt-6 max-w-[200px]">
              <div className="flex items-center gap-1.5 text-[#F16521] font-head font-black text-2xl leading-none">
                <span>FLASH</span>
                <Zap className="w-5 h-5 fill-[#F16521] text-[#F16521] animate-bounce" />
              </div>
              <div className="font-head font-black text-2xl leading-none text-[#F16521] mt-0.5">
                OFFER
              </div>
              <p className="text-xs font-semibold text-[#6B6560] mt-2">
                Custom Teak Wood Furniture <b className="text-[#F16521]">In 7 Days</b>
              </p>
              <div className="mt-3 bg-white/90 backdrop-blur-xs border border-[#FFDEC9] p-2.5 px-3 rounded-xl shadow-xs">
                <span className="block text-[11px] text-[#6B6560]">Free Store Consultation</span>
                <span className="text-sm font-black text-[#F16521]">Flat 20% Off Custom Orders</span>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1580481072645-022f9a6d85d5?auto=format&fit=crop&w=600&q=80"
                alt="Ergonomic chair showroom"
                fill
                sizes="300px"
                className="object-cover object-left opacity-95"
              />
            </div>

            <div className="z-10 flex items-center justify-between mt-4">
              <button
                onClick={handleWhatsAppHero}
                className="bg-[#F16521] text-white font-bold text-xs px-4 py-2 rounded-full shadow-md hover:bg-[#D4541A] transition-colors cursor-pointer"
              >
                Inquire Showroom
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
