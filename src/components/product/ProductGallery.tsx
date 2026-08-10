"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0] || "");

  return (
    <div className="space-y-3">
      {/* Main Large Image Display */}
      <div className="relative w-full aspect-[1/0.85] rounded-xl overflow-hidden shadow-xs border border-line bg-cream/40 group">
        <Image
          src={activeImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-125 transition-transform duration-500 origin-center cursor-zoom-in"
        />
      </div>

      {/* Thumbnail Buttons */}
      <div className="flex gap-2.5 overflow-x-auto pb-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`relative w-[76px] h-[66px] rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
              activeImage === img
                ? "border-accent shadow-xs"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              sizes="76px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
