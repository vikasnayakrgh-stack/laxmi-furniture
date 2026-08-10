"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/mock";
import { ProductCard } from "@/components/product/ProductCard";
import { Zap, Clock, ArrowRight } from "lucide-react";

export function DealsCarousel() {
  const dealProducts = PRODUCTS.slice(0, 7);

  // Live Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 5, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format2 = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="bg-gradient-to-b from-amber-50/50 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 py-14 border-y border-amber-100 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md">
              <Zap className="w-6 h-6 fill-amber-300 text-white" />
            </div>
            <div>
              <h2 className="font-head font-black text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 tracking-tight">
                Lightning Flash Deals
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Massive discounts on best-selling luxury furniture — Limited Stock!
              </p>
            </div>
          </div>

          {/* Countdown Pill */}
          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl shadow-md border border-slate-800 text-xs font-bold">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-slate-400">Ends In:</span>
            <div className="flex items-center gap-1 font-mono text-sm text-amber-400 font-black">
              <span>{format2(timeLeft.hours)}h</span>:
              <span>{format2(timeLeft.minutes)}m</span>:
              <span>{format2(timeLeft.seconds)}s</span>
            </div>
          </div>
        </div>

        <div className="hscroll">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} width={240} />
          ))}

          {/* Explore Freedom Deals Tile */}
          <Link
            href="/shop"
            className="w-[200px] sm:w-[240px] rounded-2xl bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white flex flex-col items-start justify-between p-6 shrink-0 hover:-translate-y-1.5 transition-all shadow-xl group border border-orange-500/30"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
              <Zap className="w-5 h-5 fill-white" />
            </div>

            <div className="my-auto">
              <span className="text-[10px] uppercase font-black tracking-widest text-amber-200">
                Exclusive Offers
              </span>
              <h3 className="font-head font-black text-2xl sm:text-3xl leading-tight text-white mt-1">
                FREEDOM<br />DEALS
              </h3>
              <p className="text-xs text-white/90 font-medium mt-1">
                Save up to ₹25,000 on living room bundles
              </p>
            </div>

            <div className="flex items-center gap-2 font-bold text-xs bg-white text-slate-950 px-4 py-2 rounded-xl group-hover:bg-amber-300 transition-colors shadow-xs w-full justify-between mt-4">
              <span>View All Deals</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

