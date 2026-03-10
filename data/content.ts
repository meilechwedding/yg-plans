export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Studio' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' }
];

export type Project = {
  slug: string;
  title: string;
  category: 'Home' | 'Apartment' | 'Multi-Family' | 'Renovation';
  location: string;
  image: string;
  summary: string;
};

export const services = [
  'Architectural Planning',
  'Home & Addition Design',
  'Apartment & Multi-Family Planning',
  'Renovation Layouts',
  'Interior Space Planning',
  'Permit & Filing Support'
];

export const projects: Project[] = [
  {
    slug: 'saddle-river-home',
    title: 'Saddle River Home',
    category: 'Home',
    location: 'Monsey, NY',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80',
    summary: 'Ground-up residence shaped around daylight, family flow, and quiet material contrast.'
  },
  {
    slug: 'ridge-apartments',
    title: 'Ridge Apartments',
    category: 'Apartment',
    location: 'Spring Valley, NY',
    image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1800&q=80',
    summary: 'Modern apartment layouts with better circulation, storage logic, and cleaner shared spaces.'
  },
  {
    slug: 'grandview-duplex',
    title: 'Grandview Duplex',
    category: 'Multi-Family',
    location: 'Airmont, NY',
    image: 'https://images.unsplash.com/photo-1613977257593-487ecd136cc3?auto=format&fit=crop&w=1800&q=80',
    summary: 'Dual-family planning with strong privacy, efficient footprints, and balanced elevations.'
  },
  {
    slug: 'maple-renovation',
    title: 'Maple Renovation',
    category: 'Renovation',
    location: 'Chestnut Ridge, NY',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80',
    summary: 'Interior replan and rear extension delivering more light, better kitchen flow, and daily comfort.'
  }
];
