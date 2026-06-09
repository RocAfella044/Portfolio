import { NavLink } from 'react-router-dom';
import rfLogo from '../../images/rf.png';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: 'Blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <img src={rfLogo} alt="Logo" className="logo-image" />
        </h1>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
