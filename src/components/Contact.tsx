import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const whatsappMessage = `Bonjour Zouhair,%0A%0AMonsieur/Madame: ${formData.name}%0AEmail: ${formData.email}%0A%0ASujet: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/212695429241?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Contactez-moi
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
            <p className="text-xl text-center text-blue-200 mb-16">
              Disponible pour un projet de fin d'études (PFE) d'une durée de 4 à 5 mois, à partir de février 2026
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="fade-in-section space-y-4">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
                <p className="text-sm font-bold text-blue-200 mb-2 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:zouhairghaouri@gmail.com"
                  className="text-lg font-semibold hover:text-blue-200 transition-colors break-all"
                >
                  zouhairghaouri@gmail.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
                <p className="text-sm font-bold text-blue-200 mb-2 uppercase tracking-wide">
                  Téléphone
                </p>
                <a
                  href="tel:+212695429241"
                  className="text-lg font-semibold hover:text-blue-200 transition-colors"
                >
                  +212 695-429241
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
                <p className="text-sm font-bold text-blue-200 mb-2 uppercase tracking-wide">
                  GitHub
                </p>
                <a
                  href="https://github.com/Zouhair-gh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-blue-200 transition-colors break-all"
                >
                  GitHub/Zouhair-gh
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
                <p className="text-sm font-bold text-blue-200 mb-2 uppercase tracking-wide">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/zouhair-ghaouri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-blue-200 transition-colors break-all"
                >
                  Linkedin/Zouhair Ghaouri/
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
                <p className="text-sm font-bold text-blue-200 mb-2 uppercase tracking-wide">
                  Portfolio Actuel
                </p>
                <a
                  href="https://zouhair-gh.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-blue-200 transition-colors break-all"
                >
                  zouhair-gh.github.io/Portfolio/
                </a>
              </div>
            </div>

            {/* WhatsApp Contact Form */}
            <div className="fade-in-section">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>

                {isSubmitted && (
                  <div className="mb-4 p-4 bg-green-500/20 border border-green-400 rounded-lg">
                    <p className="text-green-200 font-semibold">
                      Message envoyé via WhatsApp ! Nous nous reparlerons bientôt.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Votre email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jean@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Projet de fin d'études"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                  >
                    Envoyer via WhatsApp
                  </button>
                </form>

                <p className="text-xs text-gray-300 mt-4 text-center">
                  Le formulaire ouvrira WhatsApp pour envoyer votre message
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/20 text-center">
        <p className="text-blue-200">
          © 2025 GHAOURI ZOUHAIR. Tous droits réservés.
        </p>
      </footer>
    </section>
  );
}
