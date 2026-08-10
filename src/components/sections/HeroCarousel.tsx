"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Sparkles, ChevronLeft, ChevronRight, ShieldCheck, Award } from "lucide-react";
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

  const handleWhatsAppHero = () => {
    const slide = HERO_SLIDES[currentIndex];
    const message = encodeURIComponent(
      `Hi Laxmi Furniture, I want to inquire about custom solid teak furniture for my home in Raipur. Slide: "${slide.title}"`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section className="relative bg-[#1C1917] text-white overflow-hidden py-4 sm:py-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5">
        
        {/* Main Hero Lifestyle Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-12">
          
          {/* Lifestyle Interior Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_SLIDES[currentIndex].img}
              alt={HERO_SLIDES[currentIndex].title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover transition-all duration-700 scale-105"
            />
            {/* Multi-layered Warm Gradient Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/95 via-[#1C1917]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/90 via-transparent to-transparent hidden md:block" />
          </div>

          {/* Emotional Content Block */}
          <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
            
            {/* Social Proof Legacy Pill */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-white text-[10.5px] sm:text-xs font-semibold w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>5,000+ Happy Homes in Raipur & CG • Est. 1998</span>
            </div>

            {/* Emotional Headline */}
            <h1 className="font-head font-black text-2xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight drop-shadow-md">
              Upgrade Your Living Space
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-base text-stone-200 font-medium max-w-xl leading-relaxed">
              Handcrafted solid teak sofas, luxury beds & custom home decor — direct from our local Raipur showroom to your home.
            </p>

            {/* Micro Trust Callouts */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold text-amber-200/90 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                10-Year Frame Warranty
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-300" />
                Factory Direct Pricing
              </span>
            </div>

            {/* Primary & Secondary CTA Hierarchy */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              {/* Primary CTA: WhatsApp Now with pulse animation */}
              <button
                onClick={handleWhatsAppHero}
                className="bg-[#25D366] text-white font-extrabold px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm hover:bg-[#20bd5a] transition-all flex items-center gap-2 shadow-lg active:scale-95 cursor-pointer pulse-wa"
              >
                <Send className="w-4 h-4 fill-white text-white" />
                <span>WhatsApp Now</span>
              </button>

              {/* Secondary CTA: Explore Collection */}
              <Link
                href="/shop"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 font-bold px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all active:scale-95 shadow-xs"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Slider Navigation Dots & Controls */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 z-20">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex gap-1.5">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? "bg-[#F16521] scale-125" : "bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
