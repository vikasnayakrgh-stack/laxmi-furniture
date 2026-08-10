"use client";

import React, { useState } from "react";
import { AddressForm, CheckoutAddressData } from "@/components/checkout/AddressForm";
import { PaymentSelector } from "@/components/checkout/PaymentSelector";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { Button } from "@/components/ui";
import { useCartStore, useUIStore } from "@/store";
import { PRODUCTS, PAY_METHODS } from "@/data/mock";
import { formatPrice } from "@/lib/utils";
import { PaymentMethod } from "@/types";

export default function CheckoutPage() {
  const { getTotals, clearCart } = useCartStore();
  const { showOrderSuccess } = useUIStore();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod["k"]>("upi");
  const [addressData, setAddressData] = useState<CheckoutAddressData>({
    fullName: "Aarav Sharma",
    phone: "9876543210",
    address: "Flat 402, Sunshine Apartments, MG Road",
    city: "Raipur",
    pincode: "492001",
  });

  const totals = getTotals(PRODUCTS);

  const handlePlaceOrder = () => {
    if (totals.items.length === 0) return;
    const orderId = Math.floor(100000 + Math.random() * 899999);
    const selectedPayName = PAY_METHODS.find((m) => m.k === paymentMethod)?.t || "UPI";
    const msg = `Thank you, ${addressData.fullName}! Order #LXF${orderId} for ${formatPrice(
      totals.total
    )} is confirmed via ${selectedPayName}.`;

    showOrderSuccess(msg);
    clearCart();
  };

  return (
    <div className="max-w-[1280px] mx-auto px-5 py-11">
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 items-start">
        {/* Left Column: Address & Payment */}
        <div className="space-y-6">
          <div className="border border-line rounded-xl p-6 bg-white dark:bg-[#1C1815] shadow-xs">
            <AddressForm onAddressSubmit={(data) => setAddressData(data)} />
          </div>

          <div className="border border-line rounded-xl p-6 bg-white dark:bg-[#1C1815] shadow-xs">
            <PaymentSelector
              selectedKey={paymentMethod}
              onSelect={setPaymentMethod}
            />
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="border border-line rounded-xl p-6 bg-white dark:bg-[#1C1815] shadow-xs space-y-4">
          <h3 className="font-head text-lg font-bold text-brown dark:text-accent">
            Order Summary
          </h3>

          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {totals.items.length > 0 ? (
              totals.items.map((item: { product: import("@/types").Product; quantity: number }) => (
                <CartItemRow
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <p className="text-xs text-muted">Your cart is empty.</p>
            )}
          </div>

          <div className="space-y-1.5 text-xs text-muted border-t border-line pt-3">
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
            <div className="flex justify-between text-base font-extrabold text-ink border-t border-line pt-3 mt-1">
              <span>To Pay</span>
              <span>{formatPrice(totals.total)}</span>
            </div>
          </div>

          <Button
            variant="primary"
            disabled={totals.items.length === 0}
            className="w-full text-sm font-extrabold py-3.5 mt-2 disabled:opacity-50"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
}
