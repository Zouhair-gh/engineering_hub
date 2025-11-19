export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Expériences Professionnelles
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-16"></div>
          </div>

          <div className="space-y-8">
            <div className="experience-card fade-in-section bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Stagiaire Ingénieur en test et développement
                  </h3>
                  <p className="text-xl text-blue-900 font-semibold mb-2">ONDA</p>
                  <p className="text-gray-600 mb-4">Marrakech</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    07/2025 - 09/2025
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Projet</p>
                <p className="text-gray-800 mb-6 font-medium">
                  Développement et tests d'une application de gestion de projet
                </p>

                <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Responsabilités</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Analyse de l'exigence et conception fonctionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Développement des fonctionnalités avec Java Spring Boot et React</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Mise en place de tests automatisés avec Selenium WebDriver Java</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Gestion des tests manuels et création de cas de tests dans Jira Xray</span>
                  </li>
                </ul>

                <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['Java Spring Boot', 'React', 'Selenium WebDriver', 'Jira Xray', 'Postman', 'Jenkins', 'HTML', 'CSS', 'JavaScript', 'SQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="experience-card fade-in-section bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Stagiaire en développement Web Full Stack
                  </h3>
                  <p className="text-xl text-blue-900 font-semibold mb-2">2DK Services</p>
                  <p className="text-gray-600 mb-4">Marrakech</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    07/2024 - 06/2025
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-8">
                <div>
                  <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Projet 1</p>
                  <p className="text-gray-800 mb-4 font-medium">
                    Développement de solutions SaaS
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">Analyse de l'exigence et conception fonctionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">Développement Frontend et backend des fonctionnalités</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">Test unitaire et participation au déploiement</span>
                    </li>
                  </ul>

                  <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {['PHP-Laravel', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Projet 2</p>
                  <p className="text-gray-800 mb-4 font-medium">
                    Mise en place d'un système de gestion d'agence immobilière, automatisant les annonces
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">Analyse de l'exigence et Conception fonctionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">Développement Frontend et backend des fonctionnalités</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">Test Unitaire et participation au déploiement</span>
                    </li>
                  </ul>

                  <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Technologies</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['PHP-Laravel', 'ReactJS', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'SQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Gestion de projet</p>
                  <span className="px-3 py-1 bg-green-100 text-green-900 rounded-full text-sm font-medium">
                    AGILE-SCRUM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
