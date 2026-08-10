import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

interface RecentlyViewedState {
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
  clearRecentlyViewed: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set) => ({
      recentlyViewed: [],
      addRecentlyViewed: (product: Product) =>
        set((state) => {
          const filtered = state.recentlyViewed.filter((item) => item.id !== product.id);
          return { recentlyViewed: [product, ...filtered].slice(0, 10) };
        }),
      clearRecentlyViewed: () => set({ recentlyViewed: [] }),
    }),
    {
      name: "laxmi_recently_viewed",
    }
  )
);
