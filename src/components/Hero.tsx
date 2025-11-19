export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            GHAOURI ZOUHAIR
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-200">
            Futur ingénieur en développement Full-Stack & QA
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200 max-w-3xl mx-auto">
            Étudiant ingénieur en informatique, passionné par les tests logiciels et le développement web.
            Fort d'une solide formation à l'EMSI Marrakech et de compétences techniques en technologies
            full-stack et en assurance qualité, actuellement à la recherche d'une opportunité de projet
            de fin d'études (PFE) d'une durée de 4 à 5 mois, à partir de février 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="text-center">
              <p className="text-sm text-blue-300 font-semibold mb-1">LOCALISATION</p>
              <p className="text-lg">Marrakech, Maroc</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-blue-400"></div>
            <div className="text-center">
              <p className="text-sm text-blue-300 font-semibold mb-1">MOBILITÉ</p>
              <p className="text-lg">Nationale et internationale</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:zouhairghaouri@gmail.com"
              className="btn-primary bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              Me Contacter
            </a>
            <a
              href="https://github.com/Zouhair-gh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900"
            >
              GitHub
            </a>
            <a
              href="https://zouhair-gh.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900"
            >
              Portfolio Actuel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
