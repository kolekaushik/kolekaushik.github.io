import type { FeaturedProject } from '../types';
import { ExpandIcon } from './icons';

interface ProjectCardProps {
  project: FeaturedProject;
  onImageClick: (images: FeaturedProject['images'], index: number) => void;
}

export default function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{project.name}</h3>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used in ${project.name}`}>
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono-tag text-xs text-slate-600"
          >
            {tag}
          </li>
        ))}
      </ul>

      <ul
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
        aria-label={`Screenshot gallery for ${project.name}`}
      >
        {project.images.map((image, imageIndex) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => onImageClick(project.images, imageIndex)}
              className="group relative block w-full overflow-hidden rounded-lg border border-slate-200"
              aria-label={`Enlarge screenshot ${imageIndex + 1} of ${project.images.length} for ${project.name}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/2.5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors group-hover:bg-slate-900/30">
                <ExpandIcon className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
