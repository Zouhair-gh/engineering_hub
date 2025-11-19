import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Activities from './components/Activities';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          section.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Header />
      <Hero />
      <Formation />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Languages />
      <Activities />
      <Contact />
    </div>
  );
}

export default App;
