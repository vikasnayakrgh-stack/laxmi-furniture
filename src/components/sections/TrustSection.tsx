'use client';

import React from 'react';
import { Truck, Store, RefreshCw, ShieldCheck, Headphones } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: <Truck className="w-7 h-7 text-[#F16521]" aria-hidden="true" />,
    stat: '11M+',
    title: 'Safe Deliveries',
    sub: 'Free assembly across 15,000+ pincodes',
  },
  {
    icon: <Store className="w-7 h-7 text-[#F16521]" aria-hidden="true" />,
    stat: '150+',
    title: 'Experience Stores',
    sub: 'Touch, feel & customize your furniture',
  },
  {
    icon: <RefreshCw className="w-7 h-7 text-[#F16521]" aria-hidden="true" />,
    stat: '7 Day',
    title: 'Easy Returns',
    sub: '100% money back guarantee',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#F16521]" aria-hidden="true" />,
    stat: '10 Year',
    title: 'Warranty',
    sub: 'On all solid wood furniture',
  },
  {
    icon: <Headphones className="w-7 h-7 text-[#F16521]" aria-hidden="true" />,
    stat: '24/7',
    title: 'Customer Care',
    sub: 'Expert support in 6 languages',
  },
];

export function TrustSection() {
  return (
    <section
      className="py-8 bg-white border-t border-b border-[#E9E3DC]"
      aria-label="Why Choose Laxmi Furniture"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {TRUST_ITEMS.map((item, idx) => (
            <div
              key={`trust-${idx}`}
              className="flex flex-col items-center text-center gap-2.5 p-4 rounded-2xl hover:bg-[#FFF4EE] transition-colors duration-200 cursor-default"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-2xl bg-[#FFF4EE] flex items-center justify-center">
                {item.icon}
              </div>

              {/* Stat number */}
              <p className="font-head font-bold text-xl text-[#F16521] leading-none">
                {item.stat}
              </p>

              {/* Title */}
              <p className="font-bold text-sm text-[#1C1917] leading-snug">
                {item.title}
              </p>

              {/* Sub */}
              <p className="text-[0.72rem] text-[#78716C] leading-snug">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
