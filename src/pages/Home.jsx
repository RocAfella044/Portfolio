import { useNavigate } from 'react-router-dom';
import meImage from '../images/me.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="page home-page">
      <div className="hero">
        <span className="hero-tag">Hello Homosapiens. I am</span>
        <h1>Mandeep Rajbhandari</h1>
        <p className="hero-description">
          I am a creative frontend developer (React.js). I am currently living
          in kathmandu, Nepal and completed my bachelor's degree in computer
          science at Informatics College, Pokhara (affiliated to London
          Metropolitan University).
        </p>
        <div className="hero-actions">
          <button className="cta-button" onClick={() => navigate('/projects')}>
            My Efforts
          </button>
          <button
            className="secondary-button"
            onClick={() => navigate('/contact')}
          >
            Open to work
          </button>
        </div>
      </div>

      <div className="home-panels">
        <aside className="about-card">
          <h3>About Me</h3>
          <div className="about-image-wrap">
            <img src={meImage} alt="About me" className="about-card-image" />
          </div>
          <p>
            I am Mandeep Rajbhandari. A 23 years old who is currently learning
            (as an intern) at Swift Technology Pvt Ltd based in Kathmandu,
            Nepal.
          </p>
        </aside>

        <aside className="skills-card">
          <h3>Education</h3>
          <ul className="skills-gained-list">
            <li>
              Kaligandaki Secondary School, Baglung <br></br>
              2005–2017
            </li>
            <li>
              Trinity International College, Kathmandu <br></br>
              (Science) -- 2018–2020
            </li>
            <li>
              Informatics College, Pokhara <br></br>
              (BIT) -- 2022–2025
            </li>
            <li>
              Intern at Xdezo Technology, Pokhara <br></br>Nov 2024 – Febuary
              2025
            </li>
            <li>
              Intern at Swift Technology, Kathmandu <br></br> May 2026 – Present
            </li>
          </ul>
        </aside>
      </div>

      <div className="home-bottom">
        <aside className="hobbies-card">
          <h3>Hobbies & Interests</h3>
          <ul className="hobbies-list">
            <li>Reading Books</li>
            <li>Football on a turf</li>
            <li>Photography & editing</li>
            <li>Binge Watching Movies and Series</li>
          </ul>
        </aside>

        <aside className="languages-card">
          <h3>Languages</h3>
          <ul className="languages-list">
            <li>Nepali — Native</li>
            <li>English — Fluent</li>
            <li>Hindi — Conversational</li>
            <li>Korean — Conversational</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
