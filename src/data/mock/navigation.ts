import { NavMenuItem } from '@/types/product';

export const NAV_MENU: NavMenuItem[] = [
  {
    l: 'Furniture',
    cols: {
      Living: ['Sofas', 'Recliners', 'TV Units', 'Coffee Tables'],
      Bedroom: ['Beds', 'Wardrobes', 'Dressers'],
      Study: ['Desks', 'Bookshelves'],
    },
  },
  {
    l: 'Sofas & Seating',
    cols: {
      Sofas: ['3 Seater', '2 Seater', 'L-Shape', 'Recliners'],
      Chairs: ['Accent', 'Lounge', 'Rocking'],
    },
  },
  {
    l: 'Mattresses',
    cols: {
      Type: ['Memory Foam', 'Coir', 'Spring', 'Orthopedic'],
      Size: ['King', 'Queen', 'Single'],
    },
  },
  {
    l: 'Home Decor',
    cols: {
      Decor: ['Wall Art', 'Vases', 'Clocks', 'Mirrors'],
      Accents: ['Cushions', 'Figurines'],
    },
  },
  {
    l: 'Furnishings',
    cols: {
      Soft: ['Curtains', 'Carpets', 'Bedsheets', 'Cushion Covers'],
    },
  },
  {
    l: 'Lamps & Lighting',
    cols: {
      Lights: ['Table Lamps', 'Floor Lamps', 'Pendants', 'Wall Lights'],
    },
  },
  {
    l: 'Kitchen & Dining',
    cols: {
      Dining: ['Dining Sets', 'Crockery Units', 'Bar Cabinets'],
      Serveware: ['Dinner Sets', 'Bowls'],
    },
  },
  {
    l: 'Luxury',
    cols: {
      Premium: ['Luxe Sofas', 'Designer Beds', 'Statement Lights'],
    },
  },
  {
    l: 'Modular',
    cols: {
      Modular: ['Kitchens', 'Wardrobes', 'TV Units'],
    },
  },
];
