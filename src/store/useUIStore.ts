import { create } from 'zustand';

interface UIState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isOrderOkOpen: boolean;
  orderMessage: string | null;
  toastMessage: string | null;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;

  showOrderSuccess: (message: string) => void;
  closeOrderSuccess: () => void;

  showToast: (message: string) => void;
  hideToast: () => void;
}

let toastTimeout: NodeJS.Timeout | null = null;

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isMobileMenuOpen: false,
  isOrderOkOpen: false,
  orderMessage: null,
  toastMessage: null,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  showOrderSuccess: (message) => set({ isOrderOkOpen: true, orderMessage: message }),
  closeOrderSuccess: () => set({ isOrderOkOpen: false, orderMessage: null }),

  showToast: (message) => {
    if (toastTimeout) clearTimeout(toastTimeout);
    set({ toastMessage: message });
    toastTimeout = setTimeout(() => {
      set({ toastMessage: null });
    }, 2500);
  },
  hideToast: () => {
    if (toastTimeout) clearTimeout(toastTimeout);
    set({ toastMessage: null });
  },
}));
