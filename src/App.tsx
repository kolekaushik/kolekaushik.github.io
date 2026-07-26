import Contact from './components/Contact';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import Nav from './components/Nav';
import OtherProjects from './components/OtherProjects';
import ResearchInterests from './components/ResearchInterests';

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <ResearchInterests />
        <FeaturedProjects />
        <OtherProjects />
        <Experience />
      </main>

      <Contact />
    </>
  );
}
