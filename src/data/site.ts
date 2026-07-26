// Central place for contact details and links used across the site.
export const SITE = {
  name: 'Kunal Kaushik',
  role: 'Software Engineer & Independent Researcher',
  email: 'kunal.kaushik@vanderbilt.edu',
  github: 'https://github.com/kolekaushik',
  githubHandle: 'github.com/kolekaushik',
  linkedin: 'https://www.linkedin.com/in/kunal-kaushik-683219a5',
  linkedinHandle: 'linkedin.com/in/kunal-kaushik-683219a5',
  resumeUrl: '/resume.pdf',
  tagline:
    'Software engineer and independent researcher working on trust, verification, and decision-making in learned systems — from production AI pipelines to cyber-physical systems.',
  researchStatement:
    "I'm interested in how systems that rely on learned components — policies, value functions, learned representations — can be trusted and maintained once deployed in the real world, where conditions drift and fresh training data isn't always available. My current focus is cyber-physical systems: environments where physical components degrade, exogenous conditions shift over time, and decisions have to keep being made under exactly that kind of change.",
} as const;
