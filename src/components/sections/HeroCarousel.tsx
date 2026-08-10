"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { HERO_SLIDES } from "@/data/mock";

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div className="relative overflow-hidden bg-[#FAF6F1] py-4 sm:py-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4">
          
          {/* Main Freedom Sale Carousel (Left) */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm bg-gradient-to-r from-[#FF7A2F] via-[#F16521] to-[#E55310] min-h-[320px] sm:min-h-[360px] flex flex-col md:flex-row">
            {/* Banner Text Block */}
            <div className="p-6 sm:p-8 md:p-9 flex flex-col justify-center gap-3 text-white z-10 md:w-1/2">
              <span className="font-head italic text-base sm:text-lg font-semibold tracking-wide text-amber-100">
                Freedom From MRP Sale
              </span>
              <h1 className="font-head font-black text-3xl sm:text-4xl leading-none text-white tracking-tight drop-shadow-xs">
                Upto 80% Off<br />
                <span className="text-xl sm:text-2xl font-extrabold text-amber-200">+ 20% Cashback</span>
              </h1>
              <p className="text-xs font-semibold text-white/95">
                Free Shipping Sitewide • Flat ₹1,000 Off on ₹4,999+
              </p>

              {/* Coupon Code Chip */}
              <div className="bg-white/20 backdrop-blur-xs border border-white/40 rounded-xl p-2.5 px-3.5 my-1 text-xs">
                <span className="block font-bold text-amber-100 text-[10px] uppercase">
                  Flat Rs. 1000 OFF
                </span>
                <span className="block font-extrabold text-white text-xs mt-0.5">
                  Use Code: <b className="bg-white text-[#F16521] px-2 py-0.5 rounded font-black tracking-wider ml-1">FREEDOM1K</b>
                </span>
              </div>

              <Link
                href="/shop"
                className="bg-white text-[#F16521] font-extrabold px-6 py-2.5 rounded-full w-fit text-xs sm:text-sm hover:bg-amber-100 hover:shadow-md transition-all mt-1"
              >
                Shop The Sale
              </Link>
            </div>

            {/* Banner Image */}
            <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-full">
              <Image
                src={HERO_SLIDES[currentIndex].img}
                alt="Living room sofa sale"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-3 left-6 flex gap-2 z-20">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? "bg-white scale-125" : "bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Steal The Deal / Flash Hour Banner (Right - Light Warm Theme) */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm bg-gradient-to-br from-[#FFF3E8] via-[#FFF0E6] to-[#FFE8D6] border border-[#FFDEC9] text-[#1C1917] min-h-[280px] sm:min-h-[360px] flex flex-col justify-between p-6">
            <div className="absolute top-4 left-4 z-10 bg-[#F16521] text-white font-extrabold text-[10px] uppercase px-3 py-1 rounded-md shadow-xs">
              Steal The Deal
            </div>

            <div className="z-10 mt-6 max-w-[200px]">
              <div className="flex items-center gap-1.5 text-[#F16521] font-head font-black text-2xl sm:text-3xl leading-none">
                <span>FLASH</span>
                <Zap className="w-6 h-6 fill-[#F16521] text-[#F16521] animate-bounce" />
              </div>
              <div className="font-head font-black text-2xl sm:text-3xl leading-none text-[#F16521] mt-0.5">
                HOUR
              </div>
              <p className="text-xs font-semibold text-[#6B6560] mt-2">
                is going Live <b className="text-[#F16521]">At 3 PM</b>
              </p>
              <div className="mt-3 bg-white/90 backdrop-blur-xs border border-[#FFDEC9] p-2.5 px-3 rounded-xl shadow-xs">
                <span className="block text-[11px] text-[#6B6560]">Get Ergonomic Chair</span>
                <span className="text-lg font-black text-[#F16521]">At Rs. 80</span>
              </div>
            </div>

            {/* Flash Hour Chair Image */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1580481072645-022f9a6d85d5?auto=format&fit=crop&w=600&q=80"
                alt="Ergonomic office chair sale"
                fill
                sizes="300px"
                className="object-cover object-left opacity-95"
              />
            </div>

            <div className="z-10 flex items-center justify-between mt-4">
              <button className="bg-[#F16521] text-white font-bold text-xs px-4 py-2 rounded-full shadow-md hover:bg-[#D4541A] transition-colors">
                Buy on Phone
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


