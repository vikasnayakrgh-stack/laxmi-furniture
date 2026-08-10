import React from "react";
import Link from "next/link";
import { Gift, ArrowRight, ShieldCheck, Star } from "lucide-react";

export function SignupBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFF4EE] via-[#FFF8F4] to-[#FEF0E8] border border-[#FFDEC9]">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F16521]/8 pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-8 right-40 w-24 h-24 rounded-full bg-[#F16521]/6 pointer-events-none" aria-hidden="true" />

          <div className="relative flex flex-col sm:flex-row items-center gap-6 p-6 md:px-10 md:py-8">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#F16521] flex items-center justify-center shadow-[0_4px_14px_rgba(241,101,33,0.30)] shrink-0">
              <Gift className="w-8 h-8 text-white" aria-hidden="true" />
            </div>

            {/* Copy */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-semibold text-[#F16521] uppercase tracking-widest mb-1">
                Welcome Offer
              </p>
              <h2 className="font-head text-xl md:text-2xl font-bold text-[#1C1917] leading-snug">
                Get <span className="text-[#F16521]">₹1,000 Off</span> + 10,000 Credits
              </h2>
              <p className="text-sm text-[#78716C] mt-1 font-medium">
                On your first order. No minimum purchase required.
              </p>

              {/* Social proof micro-stats */}
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-3">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#44403C]">
                  <Star className="w-3.5 h-3.5 text-[#F16521] fill-[#F16521]" aria-hidden="true" />
                  4.9★ Rated
                </span>
                <span className="w-px h-3.5 bg-[#E9E3DC]" aria-hidden="true" />
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#44403C]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" aria-hidden="true" />
                  11M+ Happy Homes
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2.5 bg-[#F16521] hover:bg-[#D4541A] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(241,101,33,0.30)] hover:shadow-[0_6px_20px_rgba(241,101,33,0.40)] hover:-translate-y-0.5 cursor-pointer"
                aria-label="Sign up and claim your ₹1,000 welcome offer"
              >
                Claim Offer
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <p className="text-[0.65rem] text-center text-[#78716C] mt-2 font-medium">
                *T&amp;C Apply. First order only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
