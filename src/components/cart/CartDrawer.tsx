"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Drawer, Button } from "@/components/ui";
import { CartItemRow } from "./CartItemRow";
import { useCartStore, useUIStore } from "@/store";
import { PRODUCTS } from "@/data/mock";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const router = useRouter();
  const { isCartOpen, closeCart } = useUIStore();
  const { coupon, applyCoupon, getTotals } = useCartStore();
  const [couponInput, setCouponInput] = useState("");
  const [couponMsg, setCouponMsg] = useState<{ text: string; success: boolean } | null>(null);

  const totals = getTotals(PRODUCTS);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput, totals.sub);
    setCouponMsg({ text: res.message, success: res.success });
  };

  const handleProceedCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <Drawer
      isOpen={isCartOpen}
      onClose={closeCart}
      position="right"
      title={
        <div className="flex items-center gap-2">
          <span>Your Cart</span>
          <span className="text-accent text-sm font-bold">
            {totals.count > 0 && `(${totals.count})`}
          </span>
        </div>
      }
    >
      <div className="flex flex-col h-full justify-between">
        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-1">
          {totals.items.length > 0 ? (
            totals.items.map((item: { product: import("@/types").Product; quantity: number }) => (
              <CartItemRow
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))
          ) : (
            <div className="text-center py-12 space-y-4 text-muted">
              <p className="text-sm">Your cart is feeling light.</p>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  closeCart();
                  router.push("/shop");
                }}
              >
                Explore Deals
              </Button>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout CTA */}
        {totals.items.length > 0 && (
          <div className="border-t border-line pt-4 mt-4 space-y-3">
            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code (try FREEDOM1K)"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                className="flex-1 border-1.5 border-dashed border-accent rounded-lg px-3 py-2 text-xs bg-[#FFFAF6] dark:bg-accent/10 text-ink outline-none uppercase font-semibold placeholder:normal-case"
              />
              <Button type="submit" size="sm" className="bg-ink text-white hover:bg-accent rounded-lg px-4 text-xs font-bold">
                Apply
              </Button>
            </form>

            {couponMsg && (
              <p
                className={`text-xs font-semibold ${
                  couponMsg.success ? "text-discount" : "text-red-500"
                }`}
              >
                {couponMsg.text}
              </p>
            )}

            {/* Cost Breakdown */}
            <div className="space-y-1.5 text-xs text-muted">
              <div className="flex justify-between">
                <span>Cart MRP</span>
                <span className="strike">{formatPrice(totals.mrp)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount on MRP</span>
                <span className="off">– {formatPrice(totals.mrp - totals.sub)}</span>
              </div>
              {totals.couponDisc > 0 && (
                <div className="flex justify-between">
                  <span>Coupon (FREEDOM1K)</span>
                  <span className="off">– {formatPrice(totals.couponDisc)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>
                  {totals.ship === 0 ? (
                    <b className="off">FREE</b>
                  ) : (
                    formatPrice(totals.ship)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-ink border-t border-line pt-2 mt-1">
                <span>To Pay</span>
                <span>{formatPrice(totals.total)}</span>
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full text-sm font-extrabold py-3.5"
              onClick={handleProceedCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </Drawer>
  );
}
