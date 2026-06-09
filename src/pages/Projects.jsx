export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'FYP',
      description: 'Final year project with both frontend (React) and backend (Django) .',
      repo: 'https://github.com/RocAfella044/fyp',
    },
    {
      id: 2,
      title: 'Moneymap',
      description: 'Personal finance tracker with charts and budget planning.',
      repo: 'https://github.com/RocAfella044/moneymap',
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'Responsive portfolio website built with React and Vite.',
      repo: 'https://github.com/RocAfella044/portfolio',
    },
    {
      id: 4,
      title: 'Project Artifacts',
      description: 'Collection of project files, reports, and code samples.',
      repo: 'https://github.com/RocAfella044/project-artifacts',
    },
  ];

  return (
    <section className="page projects-page">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {project.repo}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
