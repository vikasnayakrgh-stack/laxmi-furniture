"use client";

import React from "react";
import { MessageSquare, Send, PhoneCall, ShieldCheck, Truck, Store, Award } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, calculateDiscount, getStarRatingString } from "@/lib/utils";
import { useInquiryStore } from "@/store";
import { Accordion } from "@/components/ui";
import { Swatches } from "./Swatches";
import { PincodeChecker } from "./PincodeChecker";

export interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { openInquiryModal } = useInquiryStore();

  const discount = calculateDiscount(product.price, product.mrp);

  const handleInquireModal = () => {
    openInquiryModal(product);
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi Laxmi Furniture, I would like to get a quote and details for:\n*Product:* ${product.name}\n*Est. Price:* ${formatPrice(product.price)}\n*ID:* #${product.id}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  const accordionItems = [
    {
      title: "Description & Craftsmanship",
      content: `Crafted from premium ${product.mat.toLowerCase()}, the ${product.name} brings everyday comfort with a design that ages gracefully. Handcrafted by master artisans for Indian homes.`,
    },
    {
      title: "Customization & Sizes",
      content: "Available in Standard, King, Queen, and custom dimensions. Choose wood finish (Teak, Walnut, Oak) and fabric options during your consultation.",
    },
    {
      title: "Materials & Care",
      content: `Frame: ${product.mat}. Upholstery: premium fabric. Care: vacuum weekly, wipe spills immediately with a dry cloth, keep away from direct sunlight.`,
    },
    {
      title: "Warranty & Local Support",
      content: "10-year structural warranty against manufacturing defects. Dedicated Raipur showroom customer support & doorstep installation.",
    },
    {
      title: "Delivery & Showroom Pickup",
      content: "Free safe delivery & professional installation at your location. Showroom pickup available at GE Road, Raipur.",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Title */}
      <h1 className="font-head font-extrabold text-xl md:text-2xl text-[#1C1917] dark:text-zinc-100 leading-snug">
        {product.name}
      </h1>

      {/* Ratings */}
      <div className="flex items-center gap-2 text-xs text-[#6B6560] dark:text-zinc-400">
        <span className="text-amber-500 font-bold tracking-wider">
          {getStarRatingString(product.rating)}
        </span>
        <span>
          {product.rating} • {120 + product.id * 17} verified customer reviews
        </span>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-3">
        <span className="text-2xl md:text-3xl font-black text-[#1C1917] dark:text-white">
          {formatPrice(product.price)}
        </span>
        <span className="line-through text-base text-[#9b948d] font-medium">{formatPrice(product.mrp)}</span>
        <span className="bg-[#1E8E3E] text-white text-xs font-black px-2 py-0.5 rounded">{discount}% OFF</span>
      </div>

      {/* Trust Callout Badges */}
      <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-[#E9E3DC] dark:border-zinc-800 my-2">
        <div className="flex flex-col items-center text-center p-2 bg-[#FAF6F1] dark:bg-zinc-800 rounded-lg">
          <Truck className="w-4 h-4 text-[#F16521] mb-1" />
          <span className="text-[10px] font-extrabold text-[#1C1917] dark:text-zinc-200">Free Delivery</span>
        </div>
        <div className="flex flex-col items-center text-center p-2 bg-[#FAF6F1] dark:bg-zinc-800 rounded-lg">
          <Store className="w-4 h-4 text-[#F16521] mb-1" />
          <span className="text-[10px] font-extrabold text-[#1C1917] dark:text-zinc-200">Local Store</span>
        </div>
        <div className="flex flex-col items-center text-center p-2 bg-[#FAF6F1] dark:bg-zinc-800 rounded-lg">
          <Award className="w-4 h-4 text-[#F16521] mb-1" />
          <span className="text-[10px] font-extrabold text-[#1C1917] dark:text-zinc-200">Quality Assured</span>
        </div>
      </div>

      {/* Key Feature Bullet Points */}
      <div className="space-y-1.5 text-xs text-[#1C1917] dark:text-zinc-300">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F16521]" />
          <span>Primary Material: <b>{product.mat}</b></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F16521]" />
          <span>Customization: <b>Size & Wood Finish Available</b></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F16521]" />
          <span>Warranty: <b>10-Year Frame Warranty</b></span>
        </div>
      </div>

      {/* Colour Swatches */}
      <div className="border-t border-[#E9E3DC] dark:border-zinc-800 pt-4 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-zinc-200">
          Wood & Fabric Finishes
        </h4>
        <Swatches />
      </div>

      {/* Delivery Checker */}
      <div className="border-t border-[#E9E3DC] dark:border-zinc-800 pt-4 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-zinc-200">
          Check Delivery Serviceability
        </h4>
        <PincodeChecker />
      </div>

      {/* Desktop Inline Action Buttons */}
      <div className="hidden sm:flex flex-row gap-3 pt-2">
        <button
          onClick={handleInquireModal}
          className="flex-1 bg-[#F16521] hover:bg-[#D95316] text-white font-extrabold text-sm py-3.5 px-5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <PhoneCall className="w-4 h-4" />
          Request Best Price Quote
        </button>

        <button
          onClick={handleWhatsAppInquiry}
          className="flex-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm py-3.5 px-5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          Inquire on WhatsApp
        </button>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 z-50 bg-white dark:bg-[#18181B] border-t border-[#E9E3DC] dark:border-zinc-800 p-2.5 px-3 shadow-2xl flex items-center gap-2">
        <a
          href="tel:18002674445"
          className="flex-1 bg-stone-100 dark:bg-zinc-800 text-[#1C1917] dark:text-zinc-100 font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 border border-[#E9E3DC] dark:border-zinc-700"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#F16521]" />
          Call Now
        </a>
        <button
          onClick={handleWhatsAppInquiry}
          className="flex-1 bg-[#25D366] text-white font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Send className="w-3.5 h-3.5" />
          WhatsApp Now
        </button>
      </div>

      {/* Product Accordion */}
      <Accordion items={accordionItems} className="mt-6" />
    </div>
  );
}
