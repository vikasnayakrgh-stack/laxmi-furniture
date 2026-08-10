"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, MessageSquare, Send, Sparkles } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, calculateDiscount, cn } from "@/lib/utils";
import { useWishlistStore, useUIStore, useInquiryStore, useRecentlyViewedStore } from "@/store";

export interface ProductCardProps {
  product: Product;
  width?: number;
  className?: string;
}

export function ProductCard({ product, width, className }: ProductCardProps) {
  const { wishlist, toggleWishlist } = useWishlistStore();
  const { showToast } = useUIStore();
  const { openInquiryModal } = useInquiryStore();
  const { addRecentlyViewed } = useRecentlyViewedStore();

  const isLiked = wishlist.includes(product.id);
  const discount = calculateDiscount(product.price, product.mrp);

  const isTrendingInRaipur = Number(product.id) % 2 === 0;

  const handleCardClick = () => {
    addRecentlyViewed(product);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(product.id);
    showToast(added ? "Added to wishlist ♥" : "Removed from wishlist");
  };

  const handleInquireNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addRecentlyViewed(product);
    openInquiryModal(product);
  };

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addRecentlyViewed(product);
    const message = encodeURIComponent(
      `Hi Laxmi Furniture, I am interested in getting factory price quote for: ${product.name} (Est. ${formatPrice(
        product.price
      )})`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <article
      className={cn(
        "group relative bg-white border border-[#E9E3DC] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer",
        width ? `w-[${width}px]` : "w-full",
        className
      )}
      style={width ? { width: `${width}px` } : undefined}
    >
      <Link href={`/product/${product.id}`} onClick={handleCardClick} className="flex flex-col h-full">
        {/* Product Image Container (4:5 Aspect Ratio) */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAF6F1]">
          {/* Savings & Micro-copy Overlays */}
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start max-w-[85%]">
            {discount > 0 && (
              <span className="bg-[#16A34A] text-white font-extrabold text-[9px] sm:text-[10px] uppercase px-2 py-0.5 rounded-full shadow-2xs">
                {discount}% OFF
              </span>
            )}
            {isTrendingInRaipur ? (
              <span className="bg-[#F16521] text-white font-bold text-[8px] sm:text-[9.5px] uppercase px-2 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Trending in Raipur</span>
              </span>
            ) : (
              <span className="bg-[#1C1917] text-white font-bold text-[8px] sm:text-[9.5px] uppercase px-2 py-0.5 rounded-full shadow-2xs">
                Factory Direct
              </span>
            )}
          </div>

          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 190px, 280px"
            className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Wishlist Button */}
          <button
            onClick={handleHeartClick}
            className={cn(
              "absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer",
              isLiked ? "text-rose-600 fill-rose-600" : "text-[#6B6560] hover:text-rose-500"
            )}
            aria-label="Toggle wishlist"
          >
            <Heart
              className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors", isLiked && "fill-rose-600 text-rose-600")}
            />
          </button>
        </div>

        {/* Product Information */}
        <div className="p-3 sm:p-3.5 flex flex-col gap-1 flex-1">
          {/* Rating */}
          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#6B6560]">
            <div className="flex text-amber-500">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            </div>
            <span className="font-extrabold text-[#1C1917]">
              {product.rating ? product.rating.toFixed(1) : "4.8"}
            </span>
            <span className="text-stone-400">({24 + (Number(product.id) % 80)})</span>
          </div>

          {/* Title - Medium Weight, 2 lines */}
          <h3
            className="text-xs sm:text-sm font-medium text-[#1C1917] group-hover:text-[#F16521] line-clamp-2 min-h-[32px] sm:min-h-[40px] leading-snug transition-colors"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Price Block */}
          <div className="flex items-baseline gap-1.5 mt-auto pt-1 flex-wrap">
            <span className="text-sm sm:text-base font-extrabold text-[#1C1917] tracking-tight">
              {formatPrice(product.price)}
            </span>
            <span className="line-through text-[11px] sm:text-xs font-normal text-[#9B8E87]">
              {formatPrice(product.mrp)}
            </span>
          </div>

          {/* Micro-copy Stock Indicator */}
          <div className="text-[9.5px] font-semibold text-[#D97706] mt-0.5">
            ⚡ Direct Factory Price Quote
          </div>

          {/* Dual Action Buttons */}
          <div className="flex items-center gap-1.5 mt-2">
            <button
              onClick={handleInquireNow}
              className="flex-1 bg-gradient-to-r from-[#F16521] to-[#D4541A] text-white font-extrabold text-[11px] sm:text-xs py-2 px-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs hover:shadow-md active:scale-95 cursor-pointer group/btn"
            >
              <MessageSquare className="w-3 h-3 group-hover/btn:scale-110 transition-transform shrink-0" />
              <span className="truncate">View Quote</span>
            </button>
            <button
              onClick={handleQuickWhatsApp}
              className="p-2 bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-xl transition-all shadow-2xs active:scale-95 cursor-pointer shrink-0"
              title="WhatsApp Inquiry"
              aria-label="WhatsApp Inquiry"
            >
              <Send className="w-3.5 h-3.5 fill-white text-white" />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
