export default function Formation() {
  return (
    <section id="formation" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Formation Académique
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-16"></div>
          </div>

          <div className="space-y-8">
            <div className="timeline-item fade-in-section">
              <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Cycle d'ingénieur en informatique et réseaux
                    </h3>
                    <p className="text-lg text-blue-900 font-semibold mb-2">
                      École Marocaine des sciences de l'ingénieur (EMSI)
                    </p>
                    <p className="text-gray-600">Marrakech, Maroc</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      2023 – Présent
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">MODULES CLÉS</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Développement Web avancé</li>
                    <li>Architecture logicielle</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item fade-in-section">
              <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Cycle préparatoire intégré
                    </h3>
                    <p className="text-lg text-blue-900 font-semibold mb-2">
                      École Marocaine des sciences de l'ingénieur (EMSI)
                    </p>
                    <p className="text-gray-600">Marrakech, Maroc</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      2021 – 2023
                    </span>
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
