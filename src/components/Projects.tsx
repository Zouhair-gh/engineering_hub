import { useState } from 'react';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  demoLink?: string;
}

interface ClientProject {
  title: string;
  description: string;
  url: string;
  type: string;
}

interface AcademicProject extends ProjectDetail {
  collaborators?: Array<{
    name: string;
    role?: string;
  }>;
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const academicProjects: AcademicProject[] = [
    {
      id: 'tutorconnect',
      title: 'TutorConnect – Plateforme avancée de tutorat et de visioconférence',
      description: 'Intégration de visioconférence en temps réel avec Jitsi Meet. Conteneurisation avec Docker et mise en place d\'un pipeline CI/CD via GitHub Actions',
      technologies: ['Spring Boot', 'ReactJS', 'MySQL', 'Docker', 'Jitsi', 'JWT', 'Tailwind CSS', 'Maven', 'GitHub Actions', 'Azure DevOps'],
      features: ['Visioconférence en temps réel', 'Pipeline CI/CD', 'Conteneurisation Docker', 'Authentification JWT'],
    },
    {
      id: 'welcomeimmo',
      title: 'Welcome Immo - Plateforme de Gestion Immobilière',
      description: 'Système complet de gestion immobilière avec IA intégrée pour la description automatique des annonces, système de chat en temps réel, et gestion des listings.',
      technologies: ['React.js', 'Laravel', 'Pusher', 'OpenAI API', 'MySQL'],
      features: [
        'Génération automatique de descriptions avec IA',
        'Chat en temps réel avec Pusher',
        'Gestion complète des propriétés',
        'Système de filtrage avancé',
      ],
      collaborators: [
        { name: 'ISSAME Imad', role: 'Co-développeur' },
      ],
      demoLink: 'https://youtu.be/7FwrmWoIrHo',
    },
    {
      id: 'dreamtravel',
      title: 'Dream Travel - Plateforme de Voyage Intelligente',
      description: 'Application de recommandation de voyages utilisant le machine learning et l\'API Google Maps pour analyser et suggérer les meilleures destinations.',
      technologies: ['Python', 'Django', 'Google Maps API', 'Beautiful Soup', 'TensorFlow'],
      features: [
        'Recommandations intelligentes de destinations',
        'Intégration Google Maps',
        'Scraping de contenu web',
        'Analyses prédictives avec TensorFlow',
      ],
      collaborators: [
        { name: 'Morad Marouan', role: 'Co-développeur' },
        { name: 'ISSAME Imad', role: 'Co-développeur' },
      ],
      demoLink: 'https://youtu.be/fV6PQHPus9k',
    },
    {
      id: 'chestxray',
      title: 'Chest X-Ray - Diagnostic par Intelligence Artificielle',
      description: 'Application d\'analyse de radiographies thoraciques utilisant le deep learning pour assister le diagnostic médical avec une haute précision.',
      technologies: ['Python', 'Django', 'TensorFlow', 'Beautiful Soup'],
      features: [
        'Analyse IA des radiographies',
        'Haute précision diagnostique',
        'Interface utilisateur intuitive',
        'Historique des analyses',
      ],
      collaborators: [
        { name: 'ISSAME Imad', role: 'Co-développeur' },
        { name: 'Mohammed Amine AGOUMI', role: 'Co-développeur' },
      ],
      demoLink: 'https://youtu.be/_v2rzyRKMY0',
    },
    {
      id: 'ridetogether',
      title: 'Ride Together - Plateforme de Covoiturage',
      description: 'Application de partage de trajets reliant conducteurs et passagers, avec système de notation et paiement intégré.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Système de matching des trajets',
        'Système de notation des utilisateurs',
        'Paiement sécurisé',
        'Chat entre utilisateurs',
      ],
      collaborators: [
        { name: 'ISSAME Imad', role: 'Co-développeur' },
        { name: 'Mohammed Amine AGOUMI', role: 'Co-développeur' },
        { name: 'Morad Marouan', role: 'Co-développeur' },
      ],
      demoLink: 'https://youtu.be/6rmYx5Nk7kQ',
    },
    {
      id: 'disneydataexploration',
      title: 'Disney Data Exploration - Analyse de Données',
      description: 'Analyse approfondie du dataset Disney avec visualisations avancées pour extraire des insights sur les performances des films.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      features: [
        'Nettoyage et préparation des données',
        'Visualisations interactives',
        'Analyses statistiques détaillées',
        'Rapports professionnels',
      ],
      collaborators: [
        { name: 'Morad Marouan', role: 'Co-développeur' },
      ],
      demoLink: 'https://github.com/Zouhair-gh/Disney-Data-Exploration.git',
    },
  ];

  const clientProjects: ClientProject[] = [
    {
      title: 'EduSchoolConnect',
      description: 'Système complet de gestion scolaire permettant la gestion des élèves, des cours, des notes et de la communication entre établissements, enseignants et parents.',
      url: 'https://eduschoolconnect.com/',
      type: 'Système de gestion scolaire',
    },
    {
      title: 'Welcome Immo',
      description: 'Plateforme immobilière moderne avec gestion complète des annonces, intégration IA, et système de communication en temps réel entre agents et clients.',
      url: 'https://welcome-immo.com/',
      type: 'Plateforme immobilière',
    },
    {
      title: 'Medicare Clinic',
      description: 'Plateforme e-learning dédiée à la formation continue en santé, offrant des cours interactifs, des certifications et un suivi pédagogique complet.',
      url: 'https://medicareclinic.ma/',
      type: 'Plateforme e-learning',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Academic Projects Section */}
          <div className="fade-in-section mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Projets Académiques
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicProjects.map((project) => (
                <div
                  key={project.id}
                  className="fade-in-section bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div
                    className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 cursor-pointer"
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )
                    }
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {project.description.substring(0, 100)}...
                    </p>
                  </div>

                  {expandedProject === project.id && (
                    <div className="p-6 border-t-4 border-blue-900">
                      <p className="text-gray-700 mb-4">{project.description}</p>

                      <div className="mb-4">
                        <p className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                          Fonctionnalités principales
                        </p>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.collaborators && project.collaborators.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                            Collaborateurs
                          </p>
                          <div className="space-y-1">
                            {project.collaborators.map((collab, idx) => (
                              <p key={idx} className="text-gray-700">
                                {collab.name}
                                {collab.role && (
                                  <span className="text-gray-600 ml-2">
                                    - {collab.role}
                                  </span>
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                        >
                          Voir la démo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Client Projects Section */}
          <div className="fade-in-section">
            <h2 className="section-title text-center">Projets Clients en Production</h2>
            <div className="section-subtle-line"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {clientProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fade-in-section block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 border-brand overflow-hidden"
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[rgba(184,143,42,0.12)] text-[var(--brand)] rounded-full text-xs font-semibold mb-4">
                        EN PRODUCTION
                      </div>

                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-700 font-medium">Type: <span className="text-slate-900 font-semibold">{project.type}</span></span>
                      <span className="text-sm text-brand-muted">Visiter →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
