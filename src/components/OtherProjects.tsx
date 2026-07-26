import { OTHER_PROJECTS } from '../data/otherProjects';
import Reveal from './Reveal';

export default function OtherProjects() {
  return (
    <section id="other-projects" aria-labelledby="other-projects-heading" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal>
          <p className="font-mono-tag text-sm uppercase tracking-widest text-blue-700">More Work</p>
          <h2
            id="other-projects-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Other Projects
          </h2>
        </Reveal>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {OTHER_PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 80} as="li">
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
