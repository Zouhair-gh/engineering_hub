export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-16"></div>
          </div>

          <div className="fade-in-section">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl shadow-2xl p-8 md:p-10 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    CERTIFICATION PROFESSIONNELLE
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    ISTQB® Certified Tester Foundation Level (CTFL)
                  </h3>
                  <p className="text-blue-200 text-lg">
                    Syllabus Version v4.0 - 2025
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                    <span className="text-4xl font-bold">✓</span>
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
