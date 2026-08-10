import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartTotals {
  items: CartItem[];
  mrp: number;
  sub: number;
  couponDisc: number;
  ship: number;
  total: number;
  count: number;
}
