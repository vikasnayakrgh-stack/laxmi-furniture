import React from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

export interface RelatedProductsProps {
  products: Product[];
  currentId: number;
}

export function RelatedProducts({ products, currentId }: RelatedProductsProps) {
  const currentProduct = products.find((p) => p.id === currentId);
  const relatedList = products
    .filter(
      (p) =>
        p.id !== currentId &&
        (p.cat === currentProduct?.cat || p.mat === currentProduct?.mat)
    )
    .concat(products.filter((p) => p.id !== currentId))
    .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
    .slice(0, 6);

  return (
    <div className="pb-14 pt-8">
      <h2 className="font-head font-semibold text-xl md:text-2xl text-brown dark:text-accent text-center mb-6">
        You May Also Like
      </h2>
      <div className="hscroll">
        {relatedList.map((product) => (
          <ProductCard key={product.id} product={product} width={230} />
        ))}
      </div>
    </div>
  );
}
