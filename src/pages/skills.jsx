import { FaReact, FaServer, FaTools } from 'react-icons/fa'

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],  icon: FaReact,
    },
    {
      category: 'Tools',
      items: ['Git', 'Vite', 'VS Code', 'Figma'],
      icon: FaTools,
    },
  ];

  return (
    <section className="page skills-page">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup) => {
          const IconComponent = skillGroup.icon
          return (
            <div key={skillGroup.category} className="skill-group">
              <div className="skill-icon"><IconComponent /></div>
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="skill-item"> {skill}</li>
                ))}
              </ul>
            </div>
            )
          })}
      </div>
    </section>
  )
}
