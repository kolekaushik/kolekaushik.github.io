import type { FeaturedProject } from '../types';

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'kosha',
    name: 'Kosha',
    description:
      'Kosha is a full-stack B2B industrial discovery platform I designed and built from the ground up. Its core design principle is verification-gated trust: AI-generated leads are promoted into the verified database only after independent confirmation, and every assertion carries provenance and a confidence score.',
    tags: ['FastAPI', 'PostgreSQL/PostGIS', 'Next.js', 'Gemini 3 Flash', 'Exa API'],
    images: [
      { src: '/images/kosha/1.svg', alt: 'Kosha screenshot placeholder 1 — replace with a real product screenshot' },
      { src: '/images/kosha/2.svg', alt: 'Kosha screenshot placeholder 2 — replace with a real product screenshot' },
      { src: '/images/kosha/3.svg', alt: 'Kosha screenshot placeholder 3 — replace with a real product screenshot' },
    ],
  },
  {
    id: 'nashalert',
    name: 'NashAlert',
    description:
      "NashAlert is an independent research project analyzing Nashville's full 311 dataset — 334,710 infrastructure complaints across nine years — to compute spatiotemporal recurrence scores across roughly 31,000 grid points, helping prioritize infrastructure maintenance.",
    tags: ['Node.js', 'React', 'TypeScript', 'Python', 'Supabase/PostGIS', 'Mapbox GL JS'],
    images: [
      { src: '/images/nashalert/1.svg', alt: 'NashAlert screenshot placeholder 1 — replace with a real product screenshot' },
      { src: '/images/nashalert/2.svg', alt: 'NashAlert screenshot placeholder 2 — replace with a real product screenshot' },
      { src: '/images/nashalert/3.svg', alt: 'NashAlert screenshot placeholder 3 — replace with a real product screenshot' },
    ],
  },
];
