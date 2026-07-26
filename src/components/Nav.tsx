import { useEffect, useState } from 'react';
import { NAV_SECTIONS } from '../data/nav';
import { useActiveSection } from '../hooks/useActiveSection';
import { CloseIcon, MenuIcon } from './icons';

const SECTION_IDS = NAV_SECTIONS.map((section) => section.id);

export default function Nav() {
  const activeId = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu if the viewport grows back to desktop width.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono-tag text-sm font-semibold tracking-tight text-slate-900 no-underline"
        >
          Kunal Kaushik
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-nav-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        <ul
          id="primary-nav-menu"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 top-full w-full flex-col gap-1 border-b border-slate-200 bg-white px-6 py-3 md:static md:flex md:w-auto md:flex-row md:gap-6 md:border-none md:bg-transparent md:p-0`}
        >
          {NAV_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-2 py-2 font-mono-tag text-sm transition-colors md:px-0 md:py-1 ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
