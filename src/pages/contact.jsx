import { useState } from 'react';
import { FaUser, FaEnvelope, FaComments, FaPaperPlane, FaTransgenderAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '', age: '' });
  };

  return (
    <section className="page contact-page">
      <h2>Contact Me </h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <FaUser /> Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Outlook:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="****@outlook.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">
            <FaTransgenderAlt /> Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            <FaComments /> Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <FaPaperPlane /> Send
        </button>
      </form>
    </section>
  );
}
