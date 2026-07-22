import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-name">Mandeep Rajbhandari</p>
          <p className="footer-copy">&copy; {year} All rights reserved.</p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/RocAfella044"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mandeep-rajbhandari-179a15259/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/mandeep.rajbhandary.73"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mandeeprajbhandari/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
