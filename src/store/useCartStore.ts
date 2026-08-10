import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';

interface CartState {
  cart: Record<number, number>; // productId -> quantity
  coupon: string | null;
  addToCart: (productId: number, quantity?: number) => void;
  setQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  applyCoupon: (code: string, subtotal: number) => { success: boolean; message: string };
  removeCoupon: () => void;
  clearCart: () => void;
  getTotals: (products: Product[]) => {
    items: { product: Product; quantity: number }[];
    mrp: number;
    sub: number;
    couponDisc: number;
    ship: number;
    total: number;
    count: number;
  };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: {},
      coupon: null,

      addToCart: (productId, quantity = 1) => {
        set((state) => ({
          cart: {
            ...state.cart,
            [productId]: (state.cart[productId] || 0) + quantity,
          },
        }));
      },

      setQuantity: (productId, quantity) => {
        set((state) => {
          const updated = { ...state.cart };
          if (quantity <= 0) {
            delete updated[productId];
          } else {
            updated[productId] = quantity;
          }
          return { cart: updated };
        });
      },

      removeFromCart: (productId) => {
        set((state) => {
          const updated = { ...state.cart };
          delete updated[productId];
          return { cart: updated };
        });
      },

      applyCoupon: (code, subtotal) => {
        const cleanCode = code.trim().toUpperCase();
        if (cleanCode === 'FREEDOM1K') {
          if (subtotal >= 4999) {
            set({ coupon: 'FREEDOM1K' });
            return { success: true, message: '✓ FREEDOM1K applied — ₹1,000 off!' };
          } else {
            return { success: false, message: 'Add items worth ₹4,999+ to use FREEDOM1K' };
          }
        }
        set({ coupon: null });
        return { success: false, message: 'Invalid coupon code' };
      },

      removeCoupon: () => set({ coupon: null }),

      clearCart: () => set({ cart: {}, coupon: null }),

      getTotals: (products) => {
        const { cart, coupon } = get();
        const items = Object.entries(cart)
          .map(([idStr, q]) => {
            const product = products.find((p) => p.id === Number(idStr));
            return product ? { product, quantity: q } : null;
          })
          .filter((item): item is { product: Product; quantity: number } => item !== null);

        const mrp = items.reduce((sum, item) => sum + item.product.mrp * item.quantity, 0);
        const sub = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

        let couponDisc = 0;
        if (coupon === 'FREEDOM1K' && sub >= 4999) {
          couponDisc = 1000;
        }

        const ship = sub - couponDisc >= 999 || items.length === 0 ? 0 : 199;
        const total = Math.max(0, sub - couponDisc + ship);
        const count = items.reduce((sum, item) => sum + item.quantity, 0);

        return { items, mrp, sub, couponDisc, ship, total, count };
      },
    }),
    {
      name: 'laxmi-cart-storage',
    }
  )
);
