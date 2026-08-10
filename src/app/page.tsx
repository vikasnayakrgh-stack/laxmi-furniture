import React from "react";
import {
  HeroCarousel,
  TrustSection,
  BrandBazaar,
  EditorialBanner,
  CategoryGrid,
  DealsCarousel,
  SignupBanner,
  BrandSpotlight,
  StoreBanner,
  BankOffers,
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main aria-label="Laxmi Furniture Home">
      <HeroCarousel />
      {/* Trust strip moved above fold — conversion best practice */}
      <TrustSection />
      <BrandBazaar />
      <EditorialBanner />
      <CategoryGrid />
      <DealsCarousel />
      <SignupBanner />
      <BrandSpotlight />
      <StoreBanner />
      <BankOffers />
      <Testimonials />
    </main>
  );
}
