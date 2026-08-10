import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  wishlist: number[];
  toggleWishlist: (productId: number) => boolean; // returns true if added, false if removed
  isWishlisted: (productId: number) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],

      toggleWishlist: (productId) => {
        const { wishlist } = get();
        const exists = wishlist.includes(productId);
        if (exists) {
          set({ wishlist: wishlist.filter((id) => id !== productId) });
          return false;
        } else {
          set({ wishlist: [...wishlist, productId] });
          return true;
        }
      },

      isWishlisted: (productId) => get().wishlist.includes(productId),

      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: 'laxmi-wishlist-storage',
    }
  )
);
