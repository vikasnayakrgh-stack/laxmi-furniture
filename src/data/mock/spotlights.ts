import { Spotlight } from '@/types/product';

const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const SPOTLIGHTS: Spotlight[] = [
  {
    t: "India's 8 Hour Chair →",
    img: IMG('photo-1580480055273-228ff5388ef8'),
    alt: 'Ergonomic office chairs',
  },
  {
    t: 'Beds, Wardrobes & Storage Solutions →',
    img: IMG('photo-1616594039964-ae9021a400a0'),
    alt: 'Bedroom with storage bed',
  },
  {
    t: 'Modern Bedroom Collection →',
    img: IMG('photo-1615873968403-89e068629265'),
    alt: 'Modern neutral bedroom',
  },
];
