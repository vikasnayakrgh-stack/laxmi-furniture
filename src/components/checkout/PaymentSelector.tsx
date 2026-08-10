"use client";

import React from "react";
import { PhoneCall, CreditCard, Package, Truck } from "lucide-react";
import { PAY_METHODS } from "@/data/mock";
import { PaymentMethod } from "@/types";
import { cn } from "@/lib/utils";

export interface PaymentSelectorProps {
  selectedKey: PaymentMethod["k"];
  onSelect: (key: PaymentMethod["k"]) => void;
}

export function PaymentSelector({
  selectedKey,
  onSelect,
}: PaymentSelectorProps) {
  const getIcon = (key: PaymentMethod["k"]) => {
    switch (key) {
      case "upi":
        return <PhoneCall className="w-5 h-5 text-accent" />;
      case "card":
        return <CreditCard className="w-5 h-5 text-accent" />;
      case "emi":
        return <Package className="w-5 h-5 text-accent" />;
      case "cod":
        return <Truck className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="font-head text-lg font-bold text-brown dark:text-accent mb-3">
        Payment Method
      </h3>
      {PAY_METHODS.map((method) => {
        const isSelected = selectedKey === method.k;
        return (
          <label
            key={method.k}
            onClick={() => onSelect(method.k)}
            className={cn(
              "flex items-center gap-3.5 border-1.5 rounded-xl p-3.5 cursor-pointer transition-all",
              isSelected
                ? "border-accent bg-[#FFF9F5] dark:bg-accent/10 shadow-xs"
                : "border-line bg-white dark:bg-cream/5 hover:border-accent"
            )}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.k}
              checked={isSelected}
              onChange={() => onSelect(method.k)}
              className="w-4 h-4 accent-accent cursor-pointer"
            />
            {getIcon(method.k)}
            <div>
              <b className="block text-sm font-bold text-ink">{method.t}</b>
              <small className="text-xs text-muted">{method.d}</small>
            </div>
          </label>
        );
      })}
    </div>
  );
}
