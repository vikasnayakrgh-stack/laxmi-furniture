import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return "₹" + Math.round(price).toLocaleString("en-IN");
}

export function calculateDiscount(price: number, mrp: number): number {
  if (!mrp || mrp <= price) return 0;
  return Math.round((1 - price / mrp) * 100);
}

export function getStarRatingString(rating: number): string {
  const fullStars = Math.round(rating);
  return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
}
