export type ProductBadge = 'best' | 'new' | null;

export interface Product {
  id: number;
  name: string;
  cat: string;
  price: number;
  mrp: number;
  mat: string;
  color: string;
  rating: number;
  badge: ProductBadge;
  img: string;
  slug?: string;
  description?: string;
  dimensions?: string;
  materialsCare?: string;
  warranty?: string;
  returns?: string;
}

export interface CategoryHome {
  name: string;
  tags: string[];
  img: string;
}

export interface CategoryTab {
  k: string;
  l: string;
}

export interface Brand {
  n: string;
  off: string;
  img: string;
}

export interface BrandTab {
  k: string;
  l: string;
}

export interface HeroSlide {
  kick: string;
  title: string;
  sub: string;
  code: string;
  cta: string;
  img: string;
  alt: string;
}

export interface Spotlight {
  t: string;
  img: string;
  alt: string;
}

export interface Testimonial {
  q: string;
  n: string;
  s: number;
  av: string;
  ph: string;
}

export interface NavMenuItem {
  l: string;
  cols: Record<string, string[]>;
}

export interface PaymentMethod {
  k: string;
  t: string;
  d: string;
}

export interface FilterState {
  cats: string[];
  price: number | null;
  mats: string[];
  colors: string[];
  rate: number;
  sort: 'pop' | 'low' | 'high' | 'disc' | 'rate' | string;
}
