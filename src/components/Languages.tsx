export default function Languages() {
  const languages = [
    { name: 'Arabe', level: 'Maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Courant' },
  ];

  return (
    <section id="languages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Langues
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="fade-in-section bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {language.name}
                </h3>
                <div className="w-12 h-1 bg-blue-900 mx-auto mb-3"></div>
                <p className="text-lg text-gray-600 font-medium">
                  {language.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
