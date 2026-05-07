import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>

        {/* Top section */}
        <div style={styles.top}>
          <div style={styles.brand}>
            <Link to="/" style={styles.logo}>La Perlyn</Link>
            <p style={styles.tagline}>For their earliest days. 💜</p>
          </div>

          {/* Nav columns */}
          <div style={styles.columns}>
            <div style={styles.column}>
              <p style={styles.colTitle}>Explore</p>
              <Link to="/quiz" style={styles.link}>Parenting Quiz</Link>
              <Link to="/wwyd" style={styles.link}>What Would You Do?</Link>
              <Link to="/facts" style={styles.link}>Fascinating Facts</Link>
              <Link to="/stories" style={styles.link}>Bedtime Stories</Link>
            </div>
            <div style={styles.column}>
              <p style={styles.colTitle}>Community</p>
              <Link to="/letter" style={styles.link}>Dear Mama Letter</Link>
              <Link to="/quiz" style={styles.link}>Earn Stardust ✨</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Bottom */}
        <div style={styles.bottom}>
          <p style={styles.copy}>© {new Date().getFullYear()} Laperlyn. Made with love.</p>
          <p style={styles.copy}>Crafted for every parent, everywhere. 🌍</p>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #F3C9FF 0%, #CDEDFD 100%)',
    padding: '4rem 5% 2rem',
    marginTop: '2rem',
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '3rem',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    maxWidth: '260px',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#9B59D4',
    textDecoration: 'none',
    letterSpacing: '-1px',
  },
  tagline: {
    color: '#7A7585',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  columns: {
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
  },
  colTitle: {
    fontWeight: 900,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#9B59D4',
    marginBottom: '0.3rem',
  },
  link: {
    textDecoration: 'none',
    color: '#7A7585',
    fontWeight: 700,
    fontSize: '0.95rem',
    transition: 'color 0.2s',
  },
  divider: {
    height: '1px',
    background: 'rgba(155, 89, 212, 0.2)',
    marginBottom: '1.5rem',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  copy: {
    color: '#7A7585',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
};
