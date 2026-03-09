export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' }
];

export type Project = {
  title: string;
  category: 'Residential' | 'Multi-Family' | 'Modern Villa' | 'Custom Home';
  location: string;
  image: string;
  description: string;
  scope: string;
};

export const services = [
  {
    title: 'Architectural Planning',
    summary: 'Strategic planning frameworks that align design ambition with practical buildability.'
  },
  {
    title: 'Design Development',
    summary: 'Refined concept-to-detail development rooted in spatial clarity and material precision.'
  },
  {
    title: 'Interior Space Planning',
    summary: 'Calm, intentional interiors shaped by movement, light, proportion, and lifestyle needs.'
  },
  {
    title: 'Renovation Design',
    summary: 'Sophisticated renewal of existing spaces with contemporary expression and timeless value.'
  },
  {
    title: 'Permit & Planning Support',
    summary: 'Comprehensive documentation and guidance to streamline regulatory approval processes.'
  },
  {
    title: 'Project Visualization',
    summary: 'Narrative visual tools that communicate design intent with confidence and beauty.'
  }
];

export const projects: Project[] = [
  {
    title: 'Twin Gable Duplex',
    category: 'Multi-Family',
    location: 'Ontario, Canada',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
    description: 'A symmetrical black-and-white duplex composition built around vertical proportion and strong entry clarity.',
    scope: 'Concept Design • Exterior Development'
  },
  {
    title: 'Ridgeview Estate',
    category: 'Residential',
    location: 'Ontario, Canada',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
    description: 'A classic estate language reinterpreted through cleaner geometry and landscape-led frontage.',
    scope: 'Architecture • Site Composition'
  },
  {
    title: 'Stonecourt Residences',
    category: 'Multi-Family',
    location: 'Upstate New York, USA',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1400&q=80',
    description: 'Three-level residential block balancing durability, daylight access, and efficient unit stacking.',
    scope: 'Facade Renewal • Planning Support'
  },
  {
    title: 'Elm Street Townhomes',
    category: 'Multi-Family',
    location: 'Ontario, Canada',
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1400&q=80',
    description: 'An urban townhome ensemble with layered massing and enhanced pedestrian frontage.',
    scope: 'Design Development • Visualization'
  },
  {
    title: 'Sunset Modern House',
    category: 'Modern Villa',
    location: 'Toronto, Canada',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80',
    description: 'A contemporary residence shaped by stone, glass, and long horizontal roof lines.',
    scope: 'Architecture • Interior Coordination'
  },
  {
    title: 'Grand Axis Manor',
    category: 'Custom Home',
    location: 'Ontario, Canada',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
    description: 'Formal axis planning and restrained detailing for a commanding yet calm family residence.',
    scope: 'Concept Architecture • Permit Set'
  },
  {
    title: 'Split-Level Horizon Home',
    category: 'Residential',
    location: 'Ontario, Canada',
    image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1400&q=80',
    description: 'A wide split-level expression with durable contrast materials and integrated garage volume.',
    scope: 'Facade Design • Landscape Interface'
  },
  {
    title: 'Forest Edge Residence',
    category: 'Residential',
    location: 'Quebec, Canada',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    description: 'A refined frontage tuned to wooded context, natural light, and understated luxury.',
    scope: 'Residential Architecture'
  },
  {
    title: 'Contemporary Crest House',
    category: 'Modern Villa',
    location: 'Ontario, Canada',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80',
    description: 'Monolithic vertical framing and balanced glazing shape a confident contemporary identity.',
    scope: 'Concept • Exterior Detailing'
  },
  {
    title: 'Twin Porch Residence',
    category: 'Custom Home',
    location: 'Ontario, Canada',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=80',
    description: 'A dual-entry home with a civic porch rhythm and modern material layering.',
    scope: 'Planning • Visualization'
  },
  {
    title: 'Front Elevation Study A',
    category: 'Custom Home',
    location: 'Design Study',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    description: 'A frontal composition study focused on symmetry, balcony framing, and entry hierarchy.',
    scope: 'Architectural Study'
  },
  {
    title: 'Front Elevation Study B',
    category: 'Custom Home',
    location: 'Design Study',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
    description: 'A refined variant emphasizing facade cadence, window rhythm, and porch articulation.',
    scope: 'Architectural Study'
  }
];
