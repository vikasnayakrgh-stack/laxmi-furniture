"use client";

import React from "react";
import { MessageSquare, Send, PhoneCall, ShieldCheck } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, calculateDiscount, getStarRatingString } from "@/lib/utils";
import { useInquiryStore } from "@/store";
import { Button, Accordion } from "@/components/ui";
import { Swatches } from "./Swatches";
import { PincodeChecker } from "./PincodeChecker";

export interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { openInquiryModal, addToShortlist } = useInquiryStore();

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
      title: "Description",
      content: `Crafted from premium ${product.mat.toLowerCase()}, the ${product.name} brings everyday comfort with a design that ages gracefully. Quality-assured and built for Indian homes.`,
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
      title: "Warranty & Support",
      content: "10-year structural warranty against manufacturing defects. Dedicated factory direct customer support & doorstep installation.",
    },
    {
      title: "Delivery & Installation",
      content: "Free safe delivery & professional installation at your location. Custom orders dispatched within 7–10 working days.",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Title */}
      <h1 className="font-head font-semibold text-xl md:text-2xl text-ink leading-snug">
        {product.name}
      </h1>

      {/* Ratings */}
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className="text-accent tracking-widest">
          {getStarRatingString(product.rating)}
        </span>
        <span>
          {product.rating} • {120 + product.id * 17} customer reviews
        </span>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-3">
        <span className="text-2xl md:text-3xl font-extrabold text-ink">
          {formatPrice(product.price)}
        </span>
        <span className="strike text-base">{formatPrice(product.mrp)}</span>
        <span className="off text-sm">{discount}% off</span>
      </div>

      <p className="text-xs text-muted flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600 inline shrink-0" />
        Factory Direct Pricing • Custom Size Available • 10-Year Warranty
      </p>

      {/* Colour Swatches */}
      <div className="border-t border-line pt-4 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-ink">
          Wood & Fabric Finishes
        </h4>
        <Swatches />
      </div>

      {/* Delivery Checker */}
      <div className="border-t border-line pt-4 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-ink">
          Check Delivery Serviceability
        </h4>
        <PincodeChecker />
      </div>

      {/* CTA Buttons for Product Inquiry */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
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

      {/* Product Accordion */}
      <Accordion items={accordionItems} className="mt-6" />
    </div>
  );
}
