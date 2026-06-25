export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'FYP',
      description:
        'Final year project with both frontend (React) and backend (Django) .',
      link: 'https://github.com/RocAfella044/fyp',
    },
    {
      id: 2,
      title: 'WeatherApp',
      description: 'We can search any cities weather for a week with local time and temperature.',
      link: 'https://weatherapp-nine-eosin-96.vercel.app/',
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'Responsive portfolio website built with React and Vite.',
      link: 'https://wow-psi-seven.vercel.app/',
    },
    {
      id: 4,
      title: 'ANFA Website',
      description: 'Nepal Football Team News, History and Fixtures',
      link: 'https://nepalfootballteam.vercel.app/',
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
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {project.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
