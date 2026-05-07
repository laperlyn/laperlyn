import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStardust } from '../context/StardustContext';

export default function Navbar() {
  const { points } = useStardust();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { to: '/quiz', label: 'Quiz' },
    { to: '/wwyd', label: 'WWYD?' },
    { to: '/facts', label: 'Facts' },
    { to: '/stories', label: 'Stories' },
  ];

  const activeLinkStyle = {
    color: 'var(--primary-purple)',
    borderBottom: '2px solid var(--primary-purple)',
  };

  return (
    <nav style={styles.nav}>
      {/* Logo — always left */}
      <NavLink to="/" style={styles.logo} onClick={() => setMenuOpen(false)}>
        La Perlyn
      </NavLink>

      {/* Desktop links — right */}
      {!isMobile && (
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
      )}

      {/* Mobile — stardust badge + hamburger on right */}
      {isMobile && (
        <div style={styles.mobileRight}>
          <div style={styles.badge}>
            <span>✨</span>
            <span>{points}</span>
          </div>
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      )}

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
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
    padding: '1.2rem 5%',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 900,
    color: 'var(--primary-purple)',
    textDecoration: 'none',
    letterSpacing: '-1px',
  },
  desktopLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text-light)',
    fontWeight: 800,
    fontSize: '1rem',
    paddingBottom: '2px',
    borderBottom: '2px solid transparent',
    transition: 'color 0.2s',
  },
  badge: {
    backgroundColor: '#FFFDF9',
    border: '2px solid var(--primary-purple)',
    padding: '6px 14px',
    borderRadius: '30px',
    fontWeight: 900,
    color: 'var(--primary-purple)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.9rem',
    boxShadow: '0 4px 10px rgba(160, 32, 240, 0.15)',
  },
  mobileRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: 'var(--primary-purple)',
    lineHeight: 1,
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
