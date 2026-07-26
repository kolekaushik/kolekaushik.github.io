import { SITE } from '../data/site';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28 md:py-32">
        <Reveal>
          <p className="font-mono-tag text-sm uppercase tracking-widest text-blue-700">
            {SITE.role}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {SITE.tagline}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SITE.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
              aria-label={`Email ${SITE.name} at ${SITE.email}`}
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>

            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
