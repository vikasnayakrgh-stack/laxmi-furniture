import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SPOTLIGHTS } from "@/data/mock";

export function BrandSpotlight() {
  return (
    <section className="py-3">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
          {SPOTLIGHTS.map((spot, i) => (
            <Link
              key={i}
              href="/shop"
              className="group relative rounded-xl overflow-hidden h-[190px] cursor-pointer"
            >
              <Image
                src={spot.img}
                alt={spot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A06]/70 to-[#0F0A06]/10 flex items-center p-6 text-white">
                <b className="text-base font-bold leading-snug max-w-[220px]">
                  {spot.t}
                </b>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
