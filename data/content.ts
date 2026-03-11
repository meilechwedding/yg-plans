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
  'Custom Home & Addition Design',
  'Apartment & Multi-Family Planning',
  'Renovation Strategy',
  'Interior Space Planning',
  'Permit & Filing Support'
];

export const projects: Project[] = [
  {
    slug: 'saddle-river-home',
    title: 'Saddle River Home',
    category: 'Home',
    location: 'Monsey, NY',
    image: 'https://images.unsplash.com/photo-1600585154205-63b2d94f3f08?auto=format&fit=crop&w=1800&q=80',
    summary: 'Ground-up residence composed around daylight, calm material contrast, and family flow.'
  },
  {
    slug: 'ridge-apartments',
    title: 'Ridge Apartments',
    category: 'Apartment',
    location: 'Spring Valley, NY',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80',
    summary: 'Apartment planning with cleaner circulation, stronger storage logic, and efficient cores.'
  },
  {
    slug: 'grandview-duplex',
    title: 'Grandview Duplex',
    category: 'Multi-Family',
    location: 'Airmont, NY',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1800&q=80',
    summary: 'Balanced dual-family layout with privacy, proportion, and disciplined frontage design.'
  },
  {
    slug: 'maple-renovation',
    title: 'Maple Renovation',
    category: 'Renovation',
    location: 'Chestnut Ridge, NY',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1800&q=80',
    summary: 'Interior replan and extension focused on light, kitchen workflow, and daily comfort.'
  }
];
