import { FaPalette, FaReact, FaServer } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend Craft',
      description:
        'Building polished, responsive interfaces with modern JavaScript and thoughtful interaction.',
      items: ['HTML5 & CSS3', 'Modern JavaScript', 'React.js', 'Accessibility'],
      icon: FaReact,
    },
    {
      category: 'Visual Storytelling',
      description:
        'Turning concepts into visuals that feel calm, expressive, and memorable.',
      items: [
        'UI/UX thinking',
        'Figma',
        'Design systems',
        'Brand storytelling',
      ],
      icon: FaPalette,
    },
    {
      category: 'Development Workflow',
      description:
        'Keeping ideas organized, scalable, and ready to grow into real experiences.',
      items: ['Git & GitHub', 'REST APIs', 'Responsive design', 'Debugging'],
      icon: FaServer,
    },
  ];

  return (
    <section className="page skills-page">
      <div className="skills-hero">
        <span className="hero-tag2">creative toolkit</span>
        <h2>Skills that shape the experience</h2>
        <p>
          I blend design thinking, storytelling, and front-end development to
          create work that feels both functional and emotionally resonant.
        </p>
      </div>

      <div className="skills-highlight-grid">
        <div className="skills-highlight-card gradient-card">
          <h3>Design-led thinking</h3>
          <p>
            Every interface is shaped around clarity, rhythm, and human feeling.
          </p>
        </div>
        <div className="skills-highlight-card">
          <h3>Flexible build process</h3>
          <p>
            Projects move smoothly from concept sketches to polished digital
            experiences.
          </p>
        </div>
      </div>

      <div className="skills-container">
        {skills.map((skillGroup) => {
          const IconComponent = skillGroup.icon;

          return (
            <div key={skillGroup.category} className="skill-group">
              <div className="skill-icon">
                <IconComponent />
              </div>
              <h3>{skillGroup.category}</h3>
              <p className="skill-description">{skillGroup.description}</p>
              <ul className="skill-list">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
