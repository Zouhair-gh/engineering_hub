export default function Hero() {
  const profileImage = new URL('../assets/profile.png', import.meta.url).href;
  const resumeUrl = '/GHAOURI-ZOUHAIR.pdf';
  return (
    <section id="hero" className="page-section bg-white pt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="fade-in-section">
              <h1 className="section-title font-extrabold">Ghaouri Zouhair</h1>
              <p className="text-lg text-slate-700 mt-3 max-w-2xl">
                Ingénieur en informatique — spécialisé en développement Full-Stack et assurance qualité logicielle.
                Actuellement en recherche d'un projet de fin d'études (PFE) de 4–5 mois à partir de février 2026.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <a href={resumeUrl} download className="btn-primary">Télécharger le CV</a>
                <a href="mailto:zouhairghaouri@gmail.com" className="px-4 py-2 rounded-md border border-slate-200 text-slate-700 font-medium">Contact</a>
                <a href="https://github.com/Zouhair-gh" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md text-slate-700 border border-slate-100 hover:shadow-sm">GitHub</a>
              </div>

              <div className="mt-8 flex gap-6 items-center text-sm text-slate-600">
                <div>
                  <div className="font-semibold text-slate-800">Localisation</div>
                  <div>Marrakech, Maroc</div>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div>
                  <div className="font-semibold text-slate-800">Mobilité</div>
                  <div>Nationale & internationale</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="fade-in-section">
              <div className="profile-portrait">
                <img src={profileImage} alt="Portrait de Zouhair Ghaouri" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
