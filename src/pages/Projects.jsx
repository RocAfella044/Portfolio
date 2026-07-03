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
      description:
        'A responsive weather application that allows users to search for any city worldwide and view real-time weather conditions, a 7-day forecast, local time, temperature, humidity, wind speed, and other essential weather information through an intuitive and user-friendly interface.',
      link: 'https://weatherapp-nine-eosin-96.vercel.app/',
    },
    {
      id: 3,
      title: 'Rocafella wears',
      description:
        'Responsive responsive e-commerce web application that allows users to browse clothing products, search and filter items, add products to a cart or favorites, authenticate using Supabase Authentication, and manage their shopping experience.',
      link: 'https://rocafella-clothes.vercel.app/',
    },
    {
      id: 4,
      title: 'ANFA Website',
      description: 'Nepal Football Team News, History and FixturesA modern football platform dedicated to the Nepal National Football Team, featuring the latest news, upcoming fixtures, team history, player information, achievements, and an engaging responsive design.',
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
