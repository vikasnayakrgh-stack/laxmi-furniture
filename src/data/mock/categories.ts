import { CategoryHome, CategoryTab } from '@/types/product';

const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const CATEGORIES_HOME: CategoryHome[] = [
  { name: 'Sofas', tags: ['living', 'solid', 'engineered', 'luxury'], img: IMG('photo-1555041469-a586c61ea9bc') },
  { name: 'Centre Tables', tags: ['living', 'solid', 'luxury'], img: IMG('photo-1533090481720-856c6e3c1fdc') },
  { name: 'Sofa Chairs', tags: ['living', 'study'], img: IMG('photo-1519947486511-46149fa0a254') },
  { name: 'Cabinets & Sideboards', tags: ['living', 'dining', 'solid'], img: IMG('photo-1595428774223-ef52624120d2') },
  { name: 'Wall Art & Paintings', tags: ['living', 'bedroom', 'luxury'], img: IMG('photo-1513519245088-0e12902e5a38') },
  { name: 'Hanging Lights', tags: ['living', 'dining'], img: IMG('photo-1565814329452-e1efa11c5b89') },
  { name: 'Mandir', tags: ['living', 'solid'], img: IMG('photo-1600585152220-90363fe7e115') },
  { name: 'Chairs', tags: ['study', 'dining', 'solid'], img: IMG('photo-1503602642458-232111445657') },
  { name: 'Recliners', tags: ['living', 'luxury'], img: IMG('photo-1598300042247-d088f8ab3a91') },
  { name: 'TV & Media Units', tags: ['living', 'engineered'], img: IMG('photo-1593784991095-a205069470b6') },
  { name: 'Carpets', tags: ['living', 'bedroom'], img: IMG('photo-1600166898405-da9535204843') },
  { name: 'Beds & Wardrobes', tags: ['bedroom', 'solid', 'engineered', 'luxury'], img: IMG('photo-1505693416388-ac5ce068fe85') },
];

export const CAT_TABS: CategoryTab[] = [
  { k: 'living', l: 'Living Room' },
  { k: 'bedroom', l: 'Bedroom' },
  { k: 'dining', l: 'Dining Room' },
  { k: 'study', l: 'Study Room' },
  { k: 'solid', l: 'Solid Wood' },
  { k: 'engineered', l: 'Engineered Wood' },
  { k: 'luxury', l: 'Luxury Furniture' },
];
