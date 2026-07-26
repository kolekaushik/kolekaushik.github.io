import { SITE } from '../data/site';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="bg-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal>
          <p className="font-mono-tag text-sm uppercase tracking-widest text-blue-400">Get in touch</p>
          <h2 id="contact-heading" className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 max-w-xl text-slate-300">
            Feel free to reach out about collaboration, research, or opportunities.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
            >
              <MailIcon className="h-4 w-4" />
              {SITE.email}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              {SITE.githubHandle}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
              {SITE.linkedinHandle}
            </a>
            <a
              href={SITE.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <DownloadIcon className="h-4 w-4" />
              Resume
            </a>
          </div>
        </Reveal>

        <p className="mt-14 font-mono-tag text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
