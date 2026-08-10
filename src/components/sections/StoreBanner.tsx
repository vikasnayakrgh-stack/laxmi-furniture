import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function StoreBanner() {
  return (
    <section className="bg-[#FAF6F1] py-14" aria-label="Visit Our Store">
      <div className="max-w-[1280px] mx-auto px-5">
        <h2 className="font-head font-semibold text-xl md:text-2xl text-[#7C5230] text-center mb-6">
          Visit Our Store
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 bg-white border border-[#E9E3DC] rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(28,25,23,0.07)]">
          <div className="hidden md:block relative h-full min-h-[170px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=70"
              alt="Fabric swatches and material samples"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>

          <div className="py-8 px-6 text-center space-y-2">
            <p className="font-head italic text-lg md:text-2xl text-ink font-semibold">
              Too Many Choices, No Clarity?
            </p>
            <p className="text-sm md:text-base text-ink">
              Get A <b className="font-extrabold text-ink">Free Design Consultation</b> In-Store.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-sm text-ink hover:text-accent border-b-2 border-current hover:border-accent pb-0.5 transition-colors"
              >
                Visit Today <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block relative h-full min-h-[170px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=70"
              alt="Designer choosing fabric swatches"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
