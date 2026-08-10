import React from "react";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/mock";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";

export interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const productId = parseInt(slug, 10);

  const product = PRODUCTS.find(
    (p) => p.id === productId || p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product) {
    notFound();
  }

  // Create image gallery array
  const gallery = [
    product.img,
    ...PRODUCTS.filter((x) => x.id !== product.id && x.cat === product.cat)
      .slice(0, 3)
      .map((x) => x.img),
  ];
  while (gallery.length < 4) {
    gallery.push(PRODUCTS[(product.id + gallery.length) % PRODUCTS.length].img);
  }

  return (
    <div className="max-w-[1280px] mx-auto px-5 py-8 space-y-12">
      {/* Product Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10">
        <ProductGallery images={gallery} productName={product.name} />
        <ProductInfo product={product} />
      </div>

      {/* Related Products Row */}
      <RelatedProducts products={PRODUCTS} currentId={product.id} />
    </div>
  );
}
