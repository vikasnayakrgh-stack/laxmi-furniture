export interface Brand {
  n: string;
  off: string;
  img: string;
}

export interface BrandTab {
  k: 'furniture' | 'mattresses' | 'decor' | string;
  l: string;
}

export type BrandsCollection = Record<'furniture' | 'mattresses' | 'decor' | string, Brand[]>;
