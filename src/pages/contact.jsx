import { useEffect, useState } from 'react';
import { FaPaperPlane, FaCheck, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const STORAGE_KEY = 'contactFormData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setFormData((prev) => ({ ...prev, ...parsed }));
        }
      } catch (err) {
        console.warn('Unable to load saved contact data', err);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="page contact-wrap">
      <header className="contact-head">
        <span className="contact-badge">get in touch</span>
        <h2>Let&apos;s talk</h2>
        <p>
          Got a project, a question, or just want to say hi? I&apos;ll get back
          to you as soon as I can.
        </p>
      </header>

      <div className="contact-inner">
        <div className="contact-info">
          <div className="contact-head-row">
            <h3>Reach out</h3>
          </div>
          <div className="contact-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
          <div className="contact-divider" />
          <p className="contact-location">mandeeprajbhandari12@gmail.com</p>
          <p className="contact-location">Kathmandu, Nepal</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="field">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me what's on your mind..."
              required
            />
          </div>
          <button type="submit" className="contact-btn">
            <FaPaperPlane /> Send message
          </button>
        </form>
      </div>

      {sent && (
        <div className="sent-overlay" onClick={() => setSent(false)}>
          <div className="sent-card" onClick={(e) => e.stopPropagation()}>
            <span className="sent-icon"><FaCheck /></span>
            <h3>Thanks!</h3>
            <p>Your message came through. I&apos;ll reply soon.</p>
            <button onClick={() => setSent(false)}>Got it</button>
          </div>
        </div>
      )}
    </section>
  );
}
