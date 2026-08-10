"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { useCartStore, useUIStore } from "@/store";

export interface CartItemRowProps {
  product: Product;
  quantity: number;
}

export function CartItemRow({ product, quantity }: CartItemRowProps) {
  const { setQuantity, removeFromCart } = useCartStore();
  const { showToast } = useUIStore();

  const discount = calculateDiscount(product.price, product.mrp);

  const handleRemove = () => {
    removeFromCart(product.id);
    showToast("Removed from cart");
  };

  return (
    <div className="flex gap-3.5 border border-line rounded-xl p-3 bg-white dark:bg-cream/5">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-cream/40">
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold text-ink line-clamp-1">
            {product.name}
          </p>
          <div className="flex items-baseline gap-1.5 text-xs mt-0.5">
            <b className="font-extrabold text-ink">
              {formatPrice(product.price)}
            </b>
            <span className="strike text-[0.7rem]">{formatPrice(product.mrp)}</span>
            <span className="off text-[0.7rem]">{discount}% off</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Quantity Controls */}
          <div className="inline-flex items-center border border-line rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity(product.id, quantity - 1)}
              className="w-7 h-7 font-bold text-accent hover:bg-[#FFF4EE] dark:hover:bg-accent/20 transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="px-2.5 text-xs font-bold text-ink min-w-[28px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(product.id, quantity + 1)}
              className="w-7 h-7 font-bold text-accent hover:bg-[#FFF4EE] dark:hover:bg-accent/20 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="text-[0.76rem] text-muted underline hover:text-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
