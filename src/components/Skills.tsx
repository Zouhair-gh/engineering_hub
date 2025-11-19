export default function Skills() {
  const skillCategories = [
    {
      title: 'Langages de programmation',
      skills: ['JAVA', 'JEE', 'PHP', 'PYTHON', 'C', 'C++'],
    },
    {
      title: 'Frameworks et Bibliothèques',
      skills: ['SpringBoot', 'ReactJS', 'Angular', 'Laravel', 'Django', 'Bootstrap', 'Tailwind'],
    },
    {
      title: 'Gestion de base de données',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle'],
    },
    {
      title: 'Outils et plateformes',
      skills: ['GitHub', 'Docker', 'Jenkins', 'SonarQube'],
    },
    {
      title: 'Testing Manuel',
      skills: ['JIRA XRAY', 'Confluence', 'Documentation des cas de test', 'Suivi des cycles de tests'],
    },
    {
      title: 'Testing Automatisé',
      skills: ['Selenium (Java)', 'JUnit', 'Cucumber'],
    },
    {
      title: 'Testing API',
      skills: ['Postman'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Compétences Techniques
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skill-card fade-in-section bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-900"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-50 text-blue-900 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
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
