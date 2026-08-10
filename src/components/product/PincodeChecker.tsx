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
          className="flex-1 border-1.5 border-line rounded-xl px-3.5 py-2.5 text-sm bg-white dark:bg-cream/10 text-ink outline-none focus:border-accent"
        />
        <Button
          onClick={handleCheck}
          className="bg-ink text-white hover:bg-accent rounded-xl px-5 text-sm font-bold"
        >
          Check
        </Button>
      </div>

      {message && (
        <p
          className={`text-xs font-semibold ${
            message.ok ? "text-discount" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
