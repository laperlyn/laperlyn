import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <span style={styles.emoji}>🌙</span>
      <h1 style={styles.title}>Oops! Page not found.</h1>
      <p style={styles.subtitle}>Looks like this page wandered off to dreamland.</p>
      <Link to="/" style={styles.btn}>Take me home →</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    textAlign: 'center',
    padding: '4rem 5%',
    gap: '1.5rem',
  },
  emoji: { fontSize: '5rem' },
  title: {
    fontSize: '2.5rem',
    fontWeight: 900,
    color: 'var(--primary-purple)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-light)',
  },
  btn: {
    padding: '1rem 2.5rem',
    backgroundColor: 'var(--primary-purple)',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 900,
    fontSize: '1.1rem',
    boxShadow: '0 8px 20px rgba(160,32,240,0.2)',
  },
};
