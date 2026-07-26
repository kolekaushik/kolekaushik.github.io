import { SITE } from '../data/site';
import Reveal from './Reveal';

export default function ResearchInterests() {
  return (
    <section id="research" aria-labelledby="research-heading" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal>
          <p className="font-mono-tag text-sm uppercase tracking-widest text-blue-700">Research</p>
          <h2 id="research-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Research Interests
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {SITE.researchStatement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
