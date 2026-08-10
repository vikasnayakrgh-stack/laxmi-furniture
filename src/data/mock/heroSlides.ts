import { HeroSlide } from '@/types/product';

const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const HERO_SLIDES: HeroSlide[] = [
  {
    kick: 'Freedom From MRP Sale',
    title: 'Upto 80% Off + 20% Cashback',
    sub: 'Free Shipping Sitewide • Flat ₹1,000 Off on ₹4,999+',
    code: 'FREEDOM1K',
    cta: 'Shop The Sale',
    img: IMG('photo-1586023492125-27b2c045efd7'),
    alt: 'Couple relaxing on a cream sofa in an orange living room',
  },
  {
    kick: 'Cook. Serve. Celebrate.',
    title: 'Kitchen & Dining Under ₹299',
    sub: 'Ceramics, serveware & more at fry-worthy prices',
    code: 'FEAST299',
    cta: 'Explore Dining',
    img: IMG('photo-1603199506016-b9a594b593c0'),
    alt: 'Hand-painted ceramic serveware on a table',
  },
  {
    kick: 'New Luxe Collection',
    title: 'Beds, Wardrobes & Storage',
    sub: 'Solid wood craftsmanship with 5-year warranty',
    code: 'LUXE20',
    cta: 'Discover Luxury',
    img: IMG('photo-1616594039964-ae9021a400a0'),
    alt: 'Modern bedroom with wooden bed and wardrobe',
  },
];
