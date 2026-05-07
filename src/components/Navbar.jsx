import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStardust } from '../context/StardustContext';
import './Navbar.css';

export default function Navbar() {
  const { points } = useStardust();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/quiz', label: 'Quiz' },
    { to: '/wwyd', label: 'What Would You Do?' },
    { to: '/facts', label: 'Facts' },
    { to: '/stories', label: 'Stories' },
  ];

  const activeLinkStyle = {
    color: 'var(--primary-purple)',
    borderBottom: '2px solid var(--primary-purple)',
    paddingBottom: '2px',
  };

  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.logo} onClick={() => setMenuOpen(false)}>
        La Perlyn
      </NavLink>

      {/* Desktop links */}
      <div style={styles.desktopLinks}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? activeLinkStyle : {}),
            })}
          >
            {label}
          </NavLink>
        ))}

        <div style={styles.badge}>
          <span>✨</span>
          <span>{points} Stardust</span>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                ...styles.mobileLink,
                ...(isActive ? { color: 'var(--primary-purple)' } : {}),
              })}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div style={{ ...styles.badge, justifyContent: 'center', marginTop: '0.5rem' }}>
            <span>✨</span>
            <span>{points} Stardust</span>
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 5%',
    position: 'relative',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '2.2rem',
    fontWeight: 900,
    color: 'var(--primary-purple)',
    textDecoration: 'none',
    letterSpacing: '-1px',
  },
  desktopLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    '@media (max-width: 768px)': { display: 'none' },
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text-light)',
    fontWeight: 800,
    fontSize: '1rem',
    transition: 'color 0.2s',
  },
  badge: {
    backgroundColor: '#FFFDF9',
    border: '2px solid var(--primary-purple)',
    padding: '8px 16px',
    borderRadius: '30px',
    fontWeight: 900,
    color: 'var(--primary-purple)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 10px rgba(160, 32, 240, 0.15)',
    fontSize: '0.95rem',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: 'var(--primary-purple)',
    '@media (max-width: 768px)': { display: 'block' },
  },
  mobileMenu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem 0',
    borderTop: '1px solid var(--accent-purple)',
    marginTop: '0.5rem',
  },
  mobileLink: {
    textDecoration: 'none',
    color: 'var(--text-light)',
    fontWeight: 800,
    fontSize: '1.1rem',
    padding: '0.3rem 0',
  },
};
