export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Brand Rebrand",
    category: "Branding",
    description: "Complete visual identity redesign for premium fashion brand",
    longDescription: "Led a comprehensive rebranding project for a luxury fashion house, creating a modern yet timeless visual identity that resonated with their high-end clientele.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    tags: ["Branding", "Identity", "Luxury"],
    year: "2024",
    client: "Maison Elegance"
  },
  {
    id: 2,
    title: "Tech Startup Campaign",
    category: "Digital Marketing",
    description: "Multi-channel campaign for AI startup launch",
    longDescription: "Developed and executed a comprehensive digital marketing campaign that generated 250% ROI and 10,000+ qualified leads in the first quarter.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Digital", "Campaign", "Tech"],
    year: "2024",
    client: "NeuralStart"
  },
  {
    id: 3,
    title: "Editorial Magazine Design",
    category: "Print Design",
    description: "Award-winning layout design for quarterly publication",
    longDescription: "Created innovative editorial layouts that won the Design Excellence Award and increased subscription rates by 45%.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
    tags: ["Print", "Editorial", "Layout"],
    year: "2023",
    client: "Modern Living Magazine"
  },
  {
    id: 4,
    title: "E-commerce Experience",
    category: "UX/UI Design",
    description: "Complete redesign of mobile shopping experience",
    longDescription: "Redesigned mobile e-commerce platform resulting in 65% increase in conversion rate and 40% reduction in cart abandonment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["UX", "Mobile", "E-commerce"],
    year: "2023",
    client: "StyleHub"
  },
  {
    id: 5,
    title: "Film Festival Identity",
    category: "Motion Graphics",
    description: "Dynamic branding and motion graphics package",
    longDescription: "Created comprehensive motion graphics package including title sequences, social media content, and venue installations for London Film Festival.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop",
    tags: ["Motion", "Film", "Events"],
    year: "2023",
    client: "London Film Festival"
  },
  {
    id: 6,
    title: "Restaurant Brand Launch",
    category: "Branding",
    description: "Full brand identity for Michelin-starred restaurant",
    longDescription: "Developed complete brand identity including logo, menu design, interior signage, and digital presence for award-winning restaurant.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    tags: ["Branding", "Hospitality", "Print"],
    year: "2022",
    client: "The Metropolitan"
  }
];

export const categories = [
  "All",
  "Branding",
  "Digital Marketing",
  "Print Design",
  "UX/UI Design",
  "Motion Graphics"
];
