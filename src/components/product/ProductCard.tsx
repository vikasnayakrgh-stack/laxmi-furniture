"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, MessageSquare, Send } from "lucide-react";
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
      `Hi Laxmi Furniture, I'm interested in getting details for: ${product.name} (Est. ${formatPrice(
        product.price
      )})`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <article
      className={cn(
        "group relative bg-white dark:bg-[#18181B] border border-[#E9E3DC] dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer",
        width ? `w-[${width}px]` : "w-full",
        className
      )}
      style={width ? { width: `${width}px` } : undefined}
    >
      <Link href={`/product/${product.id}`} onClick={handleCardClick} className="flex flex-col h-full">
        {/* Product Image Container (Mobile 4:5 Aspect Ratio) */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAF6F1] dark:bg-zinc-900">
          {/* Savings & Badge Overlays */}
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
            {discount > 0 && (
              <span className="bg-[#1E8E3E] text-white font-extrabold text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 rounded shadow-2xs">
                {discount}% OFF
              </span>
            )}
            {product.badge && (
              <span className="bg-[#F16521] text-white font-extrabold text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 rounded shadow-2xs">
                {product.badge === "new" ? "New" : "Bestseller"}
              </span>
            )}
          </div>

          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 180px, 260px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Wishlist Button */}
          <button
            onClick={handleHeartClick}
            className={cn(
              "absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xs flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-90 cursor-pointer",
              isLiked ? "text-rose-600 fill-rose-600" : "text-[#6B6560] dark:text-zinc-300 hover:text-rose-500"
            )}
            aria-label="Toggle wishlist"
          >
            <Heart
              className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors", isLiked && "fill-rose-600 text-rose-600")}
            />
          </button>
        </div>

        {/* Product Information */}
        <div className="p-2.5 sm:p-3 flex flex-col gap-1 flex-1">
          {/* Rating */}
          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#6B6560] dark:text-zinc-400">
            <div className="flex text-amber-500">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            </div>
            <span className="font-extrabold text-[#1C1917] dark:text-zinc-100">
              {product.rating ? product.rating.toFixed(1) : "4.8"}
            </span>
            <span>({24 + (Number(product.id) % 80)})</span>
          </div>

          {/* Title - Max 2 lines */}
          <h3
            className="text-xs sm:text-sm font-bold text-[#1C1917] dark:text-zinc-100 group-hover:text-[#F16521] line-clamp-2 min-h-[32px] sm:min-h-[40px] leading-snug transition-colors"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Price Block */}
          <div className="flex items-baseline gap-1.5 mt-auto pt-1 flex-wrap">
            <span className="text-sm sm:text-base font-black text-[#1C1917] dark:text-white tracking-tight">
              {formatPrice(product.price)}
            </span>
            <span className="line-through text-[11px] sm:text-xs font-medium text-[#9b948d] dark:text-zinc-400">
              {formatPrice(product.mrp)}
            </span>
          </div>

          {/* Dual Action Buttons: Inquire + WhatsApp */}
          <div className="flex items-center gap-1.5 mt-2">
            <button
              onClick={handleInquireNow}
              className="flex-1 bg-[#FFF4EE] dark:bg-amber-950/40 hover:bg-[#F16521] text-[#F16521] dark:text-amber-400 hover:text-white font-extrabold text-[11px] sm:text-xs py-2 px-2 rounded-lg transition-all flex items-center justify-center gap-1 border border-[#FFDEC9] dark:border-amber-900/50 hover:border-[#F16521] shadow-2xs cursor-pointer group/btn"
            >
              <MessageSquare className="w-3 h-3 group-hover/btn:scale-110 transition-transform shrink-0" />
              <span className="truncate">View</span>
            </button>
            <button
              onClick={handleQuickWhatsApp}
              className="p-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-lg transition-all border border-[#25D366]/30 cursor-pointer shrink-0"
              title="WhatsApp Inquiry"
              aria-label="WhatsApp Inquiry"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
