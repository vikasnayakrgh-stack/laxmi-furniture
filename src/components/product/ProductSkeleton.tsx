import React from "react";

export function ProductSkeleton() {
  return (
    <div className="bg-white border border-[#E9E3DC] rounded-xl overflow-hidden shadow-2xs animate-pulse flex flex-col">
      <div className="w-full aspect-[4/5] bg-stone-200/80" />
      <div className="p-3 flex flex-col gap-2">
        <div className="w-16 h-2.5 bg-stone-200 rounded-full" />
        <div className="w-full h-3.5 bg-stone-200 rounded-full" />
        <div className="w-2/3 h-3.5 bg-stone-200 rounded-full" />
        <div className="w-20 h-4 bg-stone-300 rounded-full mt-1" />
        <div className="flex gap-1.5 mt-2">
          <div className="flex-1 h-8 bg-stone-200 rounded-lg" />
          <div className="w-8 h-8 bg-stone-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}
