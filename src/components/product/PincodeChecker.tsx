"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui";

export function PincodeChecker() {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(
    null
  );

  const handleCheck = () => {
    const cleanPin = pincode.trim();
    if (/^\d{6}$/.test(cleanPin)) {
      setMessage({
        text: `✓ Delivering to ${cleanPin} — expected within 5–8 days. Assembly included.`,
        ok: true,
      });
    } else {
      setMessage({
        text: "Please enter a valid 6-digit pincode.",
        ok: false,
      });
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2.5">
        <input
          type="text"
          maxLength={6}
          inputMode="numeric"
          placeholder="Enter pincode (e.g. 492001)"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="flex-1 border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 text-sm bg-white text-[#111827] outline-none focus:border-[#F97316]"
        />
        <Button
          onClick={handleCheck}
          className="bg-[#111827] text-white hover:bg-[#F97316] rounded-xl px-5 text-sm font-bold cursor-pointer"
        >
          Check
        </Button>
      </div>

      {message && (
        <p
          className={`text-xs font-semibold ${
            message.ok ? "text-[#16A34A]" : "text-rose-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
