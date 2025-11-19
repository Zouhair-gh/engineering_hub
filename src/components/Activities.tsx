export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Activités parascolaires
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-16"></div>
          </div>

          <div className="fade-in-section">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-blue-900">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Membre de JLM EMSI Marrakech
                  </h3>
                  <p className="text-gray-600 text-lg">Junior League Marrakech</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Janvier 2022 - Présent
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Gestion de projets générateurs de revenus pour les populations précaires, planification stratégique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
