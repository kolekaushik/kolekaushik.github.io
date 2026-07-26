export interface ProjectImage {
  src: string;
  alt: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  description: string;
  tags: string[];
  images: ProjectImage[];
}

export interface OtherProject {
  name: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  summary: string;
}

export interface NavSection {
  id: string;
  label: string;
}
