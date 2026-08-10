"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, MessageSquare, Send } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, calculateDiscount, cn } from "@/lib/utils";
import { useWishlistStore, useUIStore, useInquiryStore } from "@/store";

export interface ProductCardProps {
  product: Product;
  width?: number;
  className?: string;
}

export function ProductCard({ product, width, className }: ProductCardProps) {
  const { wishlist, toggleWishlist } = useWishlistStore();
  const { showToast } = useUIStore();
  const { openInquiryModal } = useInquiryStore();

  const isLiked = wishlist.includes(product.id);
  const discount = calculateDiscount(product.price, product.mrp);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(product.id);
    showToast(added ? "Added to wishlist ♥" : "Removed from wishlist");
  };

  const handleInquireNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openInquiryModal(product);
  };

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hi Laxmi Furniture, I am interested in getting details for: ${product.name} (Est. ${formatPrice(
        product.price
      )})`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <article
      className={cn(
        "group relative bg-white border border-[#E9E3DC] rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer",
        width ? `w-[${width}px]` : "w-full",
        className
      )}
      style={width ? { width: `${width}px` } : undefined}
    >
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        {/* Product Image Container */}
        <div className="relative w-full aspect-[1/0.95] overflow-hidden bg-[#FAF6F1]">
          {/* Savings & Badge Overlays */}
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
            {discount > 0 && (
              <span className="bg-[#1E8E3E] text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-md shadow-2xs">
                {discount}% OFF
              </span>
            )}
            {product.badge && (
              <span className="bg-[#F16521] text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-md shadow-2xs">
                {product.badge === "new" ? "New" : "Bestseller"}
              </span>
            )}
          </div>

          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 200px, 260px"
            className="object-cover group-hover:scale-108 transition-transform duration-500"
          />

          {/* Wishlist Button */}
          <button
            onClick={handleHeartClick}
            className={cn(
              "absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-90 cursor-pointer",
              isLiked ? "text-rose-600 fill-rose-600" : "text-[#6B6560] hover:text-rose-500"
            )}
            aria-label="Toggle wishlist"
          >
            <Heart
              className={cn("w-4 h-4 transition-colors", isLiked && "fill-rose-600 text-rose-600")}
            />
          </button>
        </div>

        {/* Product Information */}
        <div className="p-3.5 flex flex-col gap-1.5 flex-1">
          {/* Swatches preview */}
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5E3C] ring-1 ring-[#E9E3DC]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373] ring-1 ring-[#E9E3DC]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1C1917] ring-1 ring-[#E9E3DC]" />
            <span className="text-[10px] text-[#6B6560] font-medium ml-1">3 Finishes</span>
          </div>

          {/* Title */}
          <h3
            className="text-xs sm:text-sm font-bold text-[#1C1917] group-hover:text-[#F16521] line-clamp-1 transition-colors"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-[11px] text-[#6B6560]">
            <div className="flex text-amber-500">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            </div>
            <span className="font-extrabold text-[#1C1917]">
              {product.rating ? product.rating.toFixed(1) : "4.8"}
            </span>
            <span>({24 + (Number(product.id) % 80)})</span>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-2 mt-auto pt-1">
            <span className="text-base font-black text-[#1C1917] tracking-tight">
              {formatPrice(product.price)}
            </span>
            <span className="strike text-xs font-medium text-[#9b948d]">{formatPrice(product.mrp)}</span>
          </div>

          {/* Action Buttons: Inquire Now + WhatsApp */}
          <div className="flex items-center gap-1.5 mt-2">
            <button
              onClick={handleInquireNow}
              className="flex-1 bg-[#FFF4EE] hover:bg-[#F16521] text-[#F16521] hover:text-white font-extrabold text-xs py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 border border-[#FFDEC9] hover:border-[#F16521] shadow-2xs cursor-pointer group/btn"
            >
              <MessageSquare className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
              Inquire Now
            </button>
            <button
              onClick={handleQuickWhatsApp}
              className="p-2.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-lg transition-all border border-[#25D366]/30 cursor-pointer"
              title="Quick WhatsApp Inquiry"
              aria-label="Quick WhatsApp Inquiry"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}

