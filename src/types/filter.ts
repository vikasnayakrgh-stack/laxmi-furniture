export interface PriceBand {
  l: string;
  min: number;
  max: number | null;
}

export type SortOption = 'pop' | 'low' | 'high' | 'disc' | 'rate';

export interface FilterState {
  cats: string[];
  price: number | null;
  mats: string[];
  colors: string[];
  rate: number;
  sort: SortOption | string;
}
