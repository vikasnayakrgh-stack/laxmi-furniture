"use client";

import React from "react";
import { Check } from "lucide-react";
import { Modal, Button } from "@/components/ui";
import { useUIStore } from "@/store";

export function OrderSuccessModal() {
  const { isOrderOkOpen, orderMessage, closeOrderSuccess } = useUIStore();

  return (
    <Modal isOpen={isOrderOkOpen} onClose={closeOrderSuccess}>
      <div className="flex flex-col items-center justify-center gap-4 text-center py-6">
        <div className="w-20 h-20 rounded-full bg-discount flex items-center justify-center text-white shadow-lg">
          <Check className="w-10 h-10 stroke-[3]" />
        </div>
        <h2 className="font-head font-bold text-2xl text-ink">
          Order Placed Successfully!
        </h2>
        <p className="text-sm text-muted max-w-sm">
          {orderMessage || "Thank you for shopping with LAXMI FURNITURE."}
        </p>
        <Button
          variant="primary"
          className="mt-2 px-8 py-3 text-sm font-extrabold"
          onClick={closeOrderSuccess}
        >
          Continue Shopping
        </Button>
      </div>
    </Modal>
  );
}
