import { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/projects';
import type { ProjectImage } from '../types';
import Lightbox from './Lightbox';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

interface LightboxState {
  images: ProjectImage[];
  index: number;
}

export default function FeaturedProjects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal>
          <p className="font-mono-tag text-sm uppercase tracking-widest text-blue-700">Featured Work</p>
          <h2 id="projects-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Featured Projects
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard
                project={project}
                onImageClick={(images, index) => setLightbox({ images, index })}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(nextIndex) => setLightbox({ images: lightbox.images, index: nextIndex })}
        />
      )}
    </section>
  );
}
