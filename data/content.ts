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
  category: 'Custom Home' | 'Renovation' | 'Multi-Family' | 'Interior Planning';
  location: string;
  image: string;
  description: string;
  scope: string;
  designNotes: string;
};

export const services = [
  {
    title: 'Architectural Planning',
    summary: 'Site-responsive planning that balances family lifestyle, zoning constraints, and long-term property value.'
  },
  {
    title: 'Custom Home Design',
    summary: 'Ground-up home design shaped by proportion, circulation, and detail discipline from concept through documentation.'
  },
  {
    title: 'Renovation & Addition Planning',
    summary: 'Strategic upgrades and expansions that modernize existing homes while protecting continuity and neighborhood context.'
  },
  {
    title: 'Multi-Family Planning',
    summary: 'Efficient and elegant residential layouts for duplexes and multi-family properties across Monsey and Rockland County.'
  },
  {
    title: 'Interior Space Planning',
    summary: 'Room-by-room planning that improves flow, daylight, storage, and livability without sacrificing visual calm.'
  },
  {
    title: 'Permit & Filing Support',
    summary: 'Clear documentation packages and submission guidance to streamline municipal review and approvals.'
  }
];

export const projects: Project[] = [
  {
    slug: 'saddle-river-residence',
    title: 'Saddle River Residence',
    category: 'Custom Home',
    location: 'Monsey, NY',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    description: 'A contemporary family residence composed around layered stone, natural oak, and carefully framed daylight.',
    scope: 'Planning, façade development, full documentation, interior spatial planning.',
    designNotes: 'The plan was organized around a central circulation spine to separate private family zones from entertaining spaces.'
  },
  {
    slug: 'maple-court-renovation',
    title: 'Maple Court Renovation',
    category: 'Renovation',
    location: 'Chestnut Ridge, NY',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    description: 'A full-home renovation and rear addition that brought clarity, storage, and light to a growing household.',
    scope: 'Existing-condition study, addition planning, permit set, interior layout redesign.',
    designNotes: 'Ceiling transitions and aligned openings were used to make the addition feel fully integrated with the original structure.'
  },
  {
    slug: 'grandview-duplex',
    title: 'Grandview Duplex',
    category: 'Multi-Family',
    location: 'Spring Valley, NY',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
    description: 'A premium duplex concept focused on privacy, efficient unit planning, and a cohesive architectural language.',
    scope: 'Lot strategy, unit planning, elevation studies, municipal submission support.',
    designNotes: 'Mirrored volumes were offset to increase privacy and create stronger natural light for both units.'
  },
  {
    slug: 'hempstead-interiors',
    title: 'Hempstead Interior Replan',
    category: 'Interior Planning',
    location: 'Airmont, NY',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    description: 'A full interior spatial replan focused on circulation, kitchen flow, and family gathering spaces.',
    scope: 'Interior zoning, kitchen planning, lighting layout guidance, finish direction.',
    designNotes: 'Sightlines between kitchen, dining, and informal lounge were calibrated to support daily family routines.'
  }
];
