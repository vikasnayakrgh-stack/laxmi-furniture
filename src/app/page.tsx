import React from "react";
import {
  HeroCarousel,
  TrustSection,
  CategoryGrid,
  DealsCarousel,
  Testimonials,
} from "@/components/sections";
import { PopularLocalSection } from "@/components/sections/PopularLocalSection";
import { RecentlyViewedSection } from "@/components/sections/RecentlyViewedSection";
import { LocalShowroomTrustSection } from "@/components/sections/LocalShowroomTrustSection";

export default function HomePage() {
  return (
    <main aria-label="Laxmi Furniture Home" className="pb-8 md:pb-0">
      {/* 1. Mobile-First Hero Carousel (Max 60vh) */}
      <HeroCarousel />

      {/* 2. Trust Strip */}
      <TrustSection />

      {/* 3. Popular in Raipur & CG Showrooms (2-Column Mobile Grid) */}
      <PopularLocalSection />

      {/* 4. Visual Category Grid */}
      <CategoryGrid />

      {/* 5. Steal The Deal / Deals Carousel */}
      <DealsCarousel />

      {/* 6. Recently Viewed Products History */}
      <RecentlyViewedSection />

      {/* 7. Local Showroom Trust & Google Reviews */}
      <LocalShowroomTrustSection />

      {/* 8. Verified Customer Testimonials */}
      <Testimonials />
    </main>
  );
}
