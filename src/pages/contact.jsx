import { useEffect, useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaComments,
  FaPaperPlane,
  FaTimes,
} from 'react-icons/fa';

const STORAGE_KEY = 'contactFormData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

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
    if (error) setError(''); // Clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Email Validation
    if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
      setError('Email must end with @gmail.com');
      return;
    }

    // Simulate sending
    console.log('Form submitted:', formData);

    // Save form submission to local storage
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    // Show success popup
    setShowPopup(true);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="contact-page">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <FaUser /> Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Full Name'
            required
          />
        </div>

        <div className="form-group">
          <label>
            <FaEnvelope /> Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          {error && <p className="error">{error}</p>}
        </div>

        <div className="form-group">
          <label>
            <FaComments /> Message:
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder='Leave us a message...'
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          <FaPaperPlane /> Send
        </button>
      </form>

      {/* Simple Success Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={closePopup}>
              <FaTimes />
            </button>
            <h3>Message Sent!</h3>
            <p>Thank you. I'll be right back at you.</p>
            <button className="close-btn-main" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
