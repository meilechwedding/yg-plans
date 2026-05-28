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
  category: 'Custom Home' | 'Shul / Community' | 'Semi-Attached' | 'Multi-Family' | 'Renovation';
  location: string;
  image: string;
  description: string;
  scope: string;
  designNotes: string;
};

export const services = [
  {
    title: 'Custom Home Design',
    summary: 'Ground-up homes with refined elevations, family flow, daylight, privacy, and practical daily use planned together.'
  },
  {
    title: 'Semi-Attached & Townhomes',
    summary: 'Paired layouts that respect privacy, maximize the lot, and keep the street elevation unified and calm.'
  },
  {
    title: 'Apartment Buildings',
    summary: 'Efficient unit planning, clear cores, egress awareness, and residential-scale facades that feel considered.'
  },
  {
    title: 'Shul & Community Buildings',
    summary: 'Layouts for sanctuary flow, lobby movement, support rooms, ezras nashim, and future growth.'
  },
  {
    title: 'Renovations & Additions',
    summary: 'Existing homes reworked with better hierarchy, cleaner circulation, and additions that feel intentional.'
  },
  {
    title: 'Permits & Filing',
    summary: 'Organized drawing packages for review, coordination, revisions, and builder handoff.'
  }
];

export const projects: Project[] = [
  {
    slug: 'family-residence-study',
    title: 'Family Residence Study',
    category: 'Custom Home',
    location: 'Monsey, NY',
    image: '/yg-architecture-set.png',
    description: 'A refined home concept balancing formal curb appeal, daily family flow, storage, kitchen life, privacy, and builder-ready documentation.',
    scope: 'Concept planning, floor plans, elevations, documentation direction.',
    designNotes: 'The architecture stays calm while the plan works hard behind it for everyday family use.'
  },
  {
    slug: 'community-building-study',
    title: 'Community Building Study',
    category: 'Shul / Community',
    location: 'Rockland County, NY',
    image: '/yg-architecture-set.png',
    description: 'Planning for sanctuary clarity, lobby circulation, support spaces, ezras nashim, and dignified local presence.',
    scope: 'Program planning, circulation, support rooms, phased growth.',
    designNotes: 'Busy-day movement and future flexibility are planned early so the building can serve the kehilla well.'
  },
  {
    slug: 'paired-family-homes',
    title: 'Paired Family Homes',
    category: 'Semi-Attached',
    location: 'Spring Valley, NY',
    image: '/yg-architecture-set.png',
    description: 'Two homes planned together so density, privacy, parking, stairs, entries, and facade rhythm work as one composition.',
    scope: 'Lot strategy, paired layouts, facade rhythm, municipal submission support.',
    designNotes: 'Mirrored volumes are tuned for privacy and entry clarity instead of feeling copied and pasted.'
  },
  {
    slug: 'residential-scale-apartments',
    title: 'Residential-Scale Apartments',
    category: 'Multi-Family',
    location: 'Ramapo, NY',
    image: '/yg-architecture-set.png',
    description: 'Efficient stacking and circulation with a warmer facade language than typical small multifamily work.',
    scope: 'Unit mix, common circulation, egress-aware planning, street-facing scale.',
    designNotes: 'The plan focuses on efficiency while keeping the building grounded in a residential neighborhood scale.'
  },
  {
    slug: 'existing-home-reworked',
    title: 'Existing Home Reworked',
    category: 'Renovation',
    location: 'Airmont, NY',
    image: '/yg-architecture-set.png',
    description: 'A study in adding useful space without making the house feel patched on: better hierarchy, clearer rooms, and a calmer exterior.',
    scope: 'Existing-condition planning, addition massing, kitchen and room flow fixes.',
    designNotes: 'Connections between old and new are resolved so the addition feels intentional.'
  }
];
