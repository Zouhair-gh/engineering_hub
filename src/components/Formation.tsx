export default function Formation() {
  return (
    <section id="formation" className="page-section bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section text-center">
            <h2 className="section-title">Formation Académique</h2>
            <div className="section-subtle-line"></div>
          </div>

          <div className="space-y-8 mt-8">
            <div className="fade-in-section">
              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Cycle d'ingénieur en informatique et réseaux</h3>
                    <p className="text-lg text-brand font-semibold mb-2">École Marocaine des sciences de l'ingénieur (EMSI)</p>
                    <p className="text-slate-600">Marrakech, Maroc</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="muted-pill">2023 – Présent</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Modules clés</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Développement Web avancé</li>
                    <li>Architecture logicielle</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="fade-in-section">
              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Cycle préparatoire intégré</h3>
                    <p className="text-lg text-brand font-semibold mb-2">École Marocaine des sciences de l'ingénieur (EMSI)</p>
                    <p className="text-slate-600">Marrakech, Maroc</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="muted-pill">2021 – 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
