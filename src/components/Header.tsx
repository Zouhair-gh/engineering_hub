import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeUrl = '/GHAOURI-ZOUHAIR.pdf';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-semibold text-brand hover:opacity-90 transition-colors"
            aria-label="Aller en haut"
          >
            G. Zouhair
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('formation')} className="text-slate-700 hover:text-brand-muted transition-colors font-medium">
              Formation
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-brand-muted transition-colors font-medium">
              Expériences
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-brand-muted transition-colors font-medium">
              Projets
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-brand-muted transition-colors font-medium">
              Compétences
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-brand-muted transition-colors font-medium">
              Contact
            </button>

            <a href={resumeUrl} download className="inline-flex items-center px-4 py-2 border border-slate-200 rounded-md text-sm font-semibold text-slate-800 hover:shadow-sm">
              Télécharger le CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
