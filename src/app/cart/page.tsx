"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { PRODUCTS } from "@/data/mock";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { Button } from "@/components/ui";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const router = useRouter();
  const { getTotals } = useCartStore();
  const totals = getTotals(PRODUCTS);

  return (
    <div className="max-w-[860px] mx-auto px-5 py-11">
      <h2 className="font-head font-semibold text-2xl text-brown dark:text-accent text-center mb-8">
        Your Cart
      </h2>

      {totals.items.length > 0 ? (
        <div className="space-y-6">
          <div className="space-y-3.5">
            {totals.items.map((item: { product: import("@/types").Product; quantity: number }) => (
              <CartItemRow
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>

          <div className="border border-line rounded-xl p-6 bg-white dark:bg-[#1C1815] shadow-xs space-y-3 text-xs text-muted">
            <div className="flex justify-between text-sm">
              <span>Cart MRP</span>
              <span className="strike">{formatPrice(totals.mrp)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount on MRP</span>
              <span className="off">– {formatPrice(totals.mrp - totals.sub)}</span>
            </div>
            {totals.couponDisc > 0 && (
              <div className="flex justify-between text-sm">
                <span>Coupon (FREEDOM1K)</span>
                <span className="off">– {formatPrice(totals.couponDisc)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>
                {totals.ship === 0 ? (
                  <b className="off">FREE</b>
                ) : (
                  formatPrice(totals.ship)
                )}
              </span>
            </div>
            <div className="flex justify-between text-base font-extrabold text-ink border-t border-line pt-3 mt-2">
              <span>To Pay</span>
              <span>{formatPrice(totals.total)}</span>
            </div>

            <Button
              variant="primary"
              className="w-full text-sm font-extrabold py-3.5 mt-4"
              onClick={() => router.push("/checkout")}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 space-y-4 text-muted">
          <p className="text-sm">Nothing here yet — your dream sofa awaits.</p>
          <Link href="/shop">
            <Button variant="primary" className="px-8 py-3 text-sm">
              Start Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
