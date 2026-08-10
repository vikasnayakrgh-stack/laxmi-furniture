import { Testimonial } from '@/types/product';

const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const TESTIMONIALS: Testimonial[] = [
  {
    q: 'I absolutely love this table! The moment I saw it on the website, I knew it would be perfect for my room.',
    n: 'Michelle Rose',
    s: 4.5,
    av: IMG('photo-1494790108377-be9c29b29330'),
    ph: IMG('photo-1533090481720-856c6e3c1fdc'),
  },
  {
    q: "My recent purchase was a pillow with a gift card discount. I'll recommend LAXMI FURNITURE to everyone!",
    n: 'Paras Chugh',
    s: 4,
    av: IMG('photo-1507003211169-0a1dd7228f2d'),
    ph: IMG('photo-1584100936595-c0654b55a2e2'),
  },
  {
    q: 'Bought this wonderful and really strong study desk. Love this.',
    n: 'Prabhas Upadhyay',
    s: 4.5,
    av: IMG('photo-1500648767791-00dcc994a43e'),
    ph: IMG('photo-1518455027359-f3f8164ba6bd'),
  },
  {
    q: 'The Melbourne Leatherette Sectional Sofa in Brown looks very nice and offers comfortable seating.',
    n: 'Jayavant Jadhav',
    s: 5,
    av: IMG('photo-1438761681033-6461ffad8d80'),
    ph: IMG('photo-1493663284031-b7e3aefcae8e'),
  },
];
