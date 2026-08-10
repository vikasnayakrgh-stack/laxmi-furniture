import { create } from 'zustand';
import { SortOption } from '@/types';

interface FilterState {
  cats: string[];
  priceBand: number | null;
  mats: string[];
  colors: string[];
  minRating: number;
  sort: SortOption;
  searchQuery: string;
  presetCategory: string | null;

  toggleCategory: (category: string) => void;
  setPriceBand: (index: number | null) => void;
  toggleMaterial: (material: string) => void;
  toggleColor: (color: string) => void;
  setMinRating: (rating: number) => void;
  setSort: (sort: SortOption) => void;
  setSearchQuery: (query: string) => void;
  setPresetCategory: (category: string) => void;
  clearAllFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  cats: [],
  priceBand: null,
  mats: [],
  colors: [],
  minRating: 0,
  sort: 'pop',
  searchQuery: '',
  presetCategory: null,

  toggleCategory: (category) =>
    set((state) => ({
      cats: state.cats.includes(category)
        ? state.cats.filter((c) => c !== category)
        : [...state.cats, category],
    })),

  setPriceBand: (index) => set({ priceBand: index }),

  toggleMaterial: (material) =>
    set((state) => ({
      mats: state.mats.includes(material)
        ? state.mats.filter((m) => m !== material)
        : [...state.mats, material],
    })),

  toggleColor: (color) =>
    set((state) => ({
      colors: state.colors.includes(color)
        ? state.colors.filter((c) => c !== color)
        : [...state.colors, color],
    })),

  setMinRating: (rating) => set({ minRating: rating }),

  setSort: (sort) => set({ sort }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setPresetCategory: (category) =>
    set({
      cats: [category],
      presetCategory: category,
      searchQuery: '',
    }),

  clearAllFilters: () =>
    set({
      cats: [],
      priceBand: null,
      mats: [],
      colors: [],
      minRating: 0,
      searchQuery: '',
      presetCategory: null,
    }),
}));
