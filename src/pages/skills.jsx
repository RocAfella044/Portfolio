

export default function Skills() {
  const tools = [
    {
      area: 'Frontend',
      note: 'I like making things that feel good to use.',
      list: ['HTML & CSS', 'Modern JavaScript', 'Typescript', 'React'],
    },
    {
      area: 'Visual Design',
      note: 'Colors, spacing, typography — the small stuff matters.',
      list: ['UI/UX', 'Figma', 'Design systems', 'Content creator'],
    },
    {
      area: 'Dev & Tools',
      note: 'Keeps me sane when things get messy.',
      list: ['Git & GitHub', 'REST APIs', 'Responsive design', 'Debugging'],
    },
  ];

  return (
    <section className="page skills-wrap">
      <header className="skill-header">
        <span className="skill-badge">stack</span>
        <h2>What I actually use</h2>
        <p>
          Just the stuff I&apos;ve picked up along the way — some planned,
          most by accident.
        </p>
      </header>

      <div className="skill-notes">
        <div className="note-card accent">
          <h3>design first</h3>
          <p>I try to think about who&apos;s using it before I write a single line.</p>
        </div>
        <div className="note-card">
          <h3>keep it simple</h3>
          <p>Less code, less cluster, more clarity.</p>
        </div>
      </div>

      <div className="tool-grid">
        {tools.map((t) => {
          return (
            <div key={t.area} className="tool-card">
              <h3>{t.area}</h3>
              <p>{t.note}</p>
              <ul className="tool-list">
                {t.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
