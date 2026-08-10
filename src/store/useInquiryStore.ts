import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

export interface InquiryItem {
  productId: number;
  quantity?: number;
  customSize?: string;
  notes?: string;
}

interface InquiryState {
  shortlist: number[]; // List of product IDs
  activeInquiryProduct: Product | null;
  isInquiryModalOpen: boolean;
  isInquiryDrawerOpen: boolean;

  // Actions
  addToShortlist: (productId: number) => boolean;
  removeFromShortlist: (productId: number) => void;
  toggleShortlist: (productId: number) => boolean;
  clearShortlist: () => void;

  openInquiryModal: (product?: Product | null) => void;
  closeInquiryModal: () => void;
  
  openInquiryDrawer: () => void;
  closeInquiryDrawer: () => void;
  toggleInquiryDrawer: () => void;
}

export const useInquiryStore = create<InquiryState>()(
  persist(
    (set, get) => ({
      shortlist: [],
      activeInquiryProduct: null,
      isInquiryModalOpen: false,
      isInquiryDrawerOpen: false,

      addToShortlist: (productId: number) => {
        const { shortlist } = get();
        if (!shortlist.includes(productId)) {
          set({ shortlist: [...shortlist, productId] });
          return true;
        }
        return false;
      },

      removeFromShortlist: (productId: number) => {
        set({ shortlist: get().shortlist.filter((id) => id !== productId) });
      },

      toggleShortlist: (productId: number) => {
        const { shortlist } = get();
        const exists = shortlist.includes(productId);
        if (exists) {
          set({ shortlist: shortlist.filter((id) => id !== productId) });
          return false;
        } else {
          set({ shortlist: [...shortlist, productId] });
          return true;
        }
      },

      clearShortlist: () => set({ shortlist: [] }),

      openInquiryModal: (product = null) => {
        set({ activeInquiryProduct: product, isInquiryModalOpen: true });
      },

      closeInquiryModal: () => {
        set({ isInquiryModalOpen: false, activeInquiryProduct: null });
      },

      openInquiryDrawer: () => set({ isInquiryDrawerOpen: true }),
      closeInquiryDrawer: () => set({ isInquiryDrawerOpen: false }),
      toggleInquiryDrawer: () =>
        set((state) => ({ isInquiryDrawerOpen: !state.isInquiryDrawerOpen })),
    }),
    {
      name: "laxmi-inquiry-storage",
      partialize: (state) => ({ shortlist: state.shortlist }),
    }
  )
);
