import { FaReact, FaServer, FaTools } from 'react-icons/fa'

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'Modern JavaScript', 'React.js'],  icon: FaReact,
    },
    {
      category: 'Tools',
      items: ['Git', 'Redux.js', 'VS Code', 'Figma', 'Rest API'],
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
