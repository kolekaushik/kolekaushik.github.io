import { EXPERIENCE } from '../data/experience';
import { SITE } from '../data/site';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal>
          <p className="font-mono-tag text-sm uppercase tracking-widest text-blue-700">Career</p>
          <h2 id="experience-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Experience
          </h2>
        </Reveal>

        <ol className="mt-8 flex flex-col divide-y divide-slate-200 border-y border-slate-200">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={`${item.org}-${item.period}`} delay={i * 80} as="li">
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <p className="font-semibold text-slate-900">
                    {item.role} <span className="text-slate-500">· {item.org}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:max-w-xl">{item.summary}</p>
                </div>
                <p className="font-mono-tag whitespace-nowrap text-xs uppercase tracking-wide text-slate-500">
                  {item.period}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-6">
          <a
            href={SITE.resumeUrl}
            download
            className="inline-flex items-center gap-1 font-mono-tag text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Full resume →
          </a>
        </p>
      </div>
    </section>
  );
}
