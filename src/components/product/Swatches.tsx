"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface SwatchOption {
  name: string;
  colorHex: string;
}

export interface SwatchesProps {
  options?: SwatchOption[];
  onSelect?: (colorName: string) => void;
}

const DEFAULT_SWATCHES: SwatchOption[] = [
  { name: "Brown", colorHex: "#8B5E3C" },
  { name: "Blue", colorHex: "#31456B" },
  { name: "Grey", colorHex: "#7A7A72" },
  { name: "Beige", colorHex: "#D9C6A5" },
];

export function Swatches({
  options = DEFAULT_SWATCHES,
  onSelect,
}: SwatchesProps) {
  const [selected, setSelected] = useState(options[0]?.name || "");

  const handleSelect = (name: string) => {
    setSelected(name);
    if (onSelect) onSelect(name);
  };

  return (
    <div className="flex gap-2.5">
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => handleSelect(option.name)}
          style={{ backgroundColor: option.colorHex }}
          className={cn(
            "w-8.5 h-8.5 rounded-full border-2 border-white shadow-xs transition-all cursor-pointer",
            selected === option.name
              ? "ring-2 ring-[#F97316] scale-110"
              : "opacity-85 hover:opacity-100"
          )}
          title={option.name}
          aria-label={`Select ${option.name} color`}
        />
      ))}
    </div>
  );
}
