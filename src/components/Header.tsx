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

  const navLinkColor = isScrolled ? 'text-gray-700' : 'text-white';
  const navLinkHoverColor = isScrolled ? 'hover:text-blue-900' : 'hover:text-blue-200';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-blue-900/20 backdrop-blur-md py-6'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}
          >
            ZOUHAIR GHAOURI
          </button>

          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection('formation')}
              className={`${navLinkColor} ${navLinkHoverColor} transition-colors font-medium`}
            >
              Formation
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`${navLinkColor} ${navLinkHoverColor} transition-colors font-medium`}
            >
              Expériences
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`${navLinkColor} ${navLinkHoverColor} transition-colors font-medium`}
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`${navLinkColor} ${navLinkHoverColor} transition-colors font-medium`}
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${navLinkColor} ${navLinkHoverColor} transition-colors font-medium`}
            >
              Contact
            </button>
            <a
              href="/resume.pdf"
              download
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                isScrolled
                  ? 'bg-blue-900 text-white hover:bg-blue-800'
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
            >
              CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
