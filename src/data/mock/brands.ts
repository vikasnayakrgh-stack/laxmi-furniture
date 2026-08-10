import { Brand, BrandTab } from '@/types/product';

const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const BRANDS: Record<'furniture' | 'mattresses' | 'decor' | string, Brand[]> = {
  furniture: [
    { n: 'The Flamingo Life', off: 'Extra 10% Off', img: IMG('photo-1616486338812-3dadae4b4ace') },
    { n: 'HomeTown', off: 'Extra 5% Off', img: IMG('photo-1617806118233-18e1de247200') },
    { n: 'Arra', off: 'Extra 5% Off', img: IMG('photo-1493663284031-b7e3aefcae8e') },
    { n: 'Nestroots', off: 'Extra 5% Off', img: IMG('photo-1505693416388-ac5ce068fe85') },
    { n: 'Neudot', off: 'Extra 5% Off', img: IMG('photo-1598300042247-d088f8ab3a91') },
    { n: 'Freedom Tree', off: 'Extra 5% Off', img: IMG('photo-1615066390971-03e4e1c36ddf') },
  ],
  mattresses: [
    { n: 'SlumberSoft', off: 'Extra 15% Off', img: IMG('photo-1631049307264-da0ec9d70304') },
    { n: 'DreamCoir', off: 'Extra 10% Off', img: IMG('photo-1540518614846-7eded433c457') },
    { n: 'OrthoRest', off: 'Extra 5% Off', img: IMG('photo-1616594039964-ae9021a400a0') },
    { n: 'CloudNine', off: 'Extra 5% Off', img: IMG('photo-1631049552057-403cdb8f0658') },
  ],
  decor: [
    { n: 'Freedom Tree', off: 'Extra 10% Off', img: IMG('photo-1513519245088-0e12902e5a38') },
    { n: 'ArtHouse', off: 'Extra 5% Off', img: IMG('photo-1513694203232-719a280e022f') },
    { n: 'GlowCraft', off: 'Extra 5% Off', img: IMG('photo-1507473885765-e6ed057f782c') },
    { n: 'Terracotta Tales', off: 'Extra 5% Off', img: IMG('photo-1485955900006-10f4d324d411') },
  ],
};

export const BRAND_TABS: BrandTab[] = [
  { k: 'furniture', l: 'Furniture' },
  { k: 'mattresses', l: 'Mattresses' },
  { k: 'decor', l: 'Home Decor' },
];
