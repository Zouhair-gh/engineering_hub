export default function Skills() {
  const development = {
    title: "Développement",
    description:
      "Conception et réalisation d'applications web et services back-end — bonnes pratiques, CI/CD et conteneurisation.",
    items: [
      {
        group: 'Langages',
        skills: ['Java', 'PHP', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++'],
      },
      {
        group: 'Frameworks / Libs',
        skills: ['Spring Boot', 'React', 'Angular', 'Laravel', 'Django', 'Tailwind'],
      },
      {
        group: 'Bases de données',
        skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle'],
      },
      {
        group: 'Outils & CI/CD',
        skills: ['Git / GitHub', 'Docker', 'Jenkins', 'Azure DevOps'],
      },
    ],
  };

  const testing = {
    title: "Tests & Assurance qualité",
    description:
      "Stratégies de test manuels et automatisés, pipelines de tests et outils d'orchestration pour garantir la qualité.",
    items: [
      {
        group: 'Tests Manuels',
        skills: ['Jira Xray', 'Confluence', 'Rédaction de cas de test', 'Gestion de campagnes'],
      },
      {
        group: 'Tests Automatisés',
        skills: ['Selenium (Java)', 'JUnit', 'Cucumber', 'Playwright'],
      },
      {
        group: 'Tests API & Outils',
        skills: ['Postman', 'REST Assured', 'SoapUI'],
      },
      {
        group: 'Qualité & CI',
        skills: ['SonarQube', 'Jenkins', 'Automatisation CI/CD'],
      },
    ],
  };

  return (
    <section id="skills" className="page-section bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-section">
            <h2 className="section-title text-center">Compétences Techniques</h2>
            <div className="section-subtle-line"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[development, testing].map((section) => (
              <div key={section.title} className="fade-in-section card">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">{section.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{section.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.items.map((grp) => (
                    <div key={grp.group} className="card-quiet">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2 uppercase tracking-wide">{grp.group}</h4>
                      <div className="flex flex-wrap gap-2">
                        {grp.skills.map((s) => (
                          <span key={s} className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
