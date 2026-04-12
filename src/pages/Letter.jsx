import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react'; 

export default function Letter() {
  return (
    <div style={styles.pageContainer}>
      
      <div style={styles.letterWrapper}>
        <div style={styles.iconWrapper}>
          <Heart size={40} color="white" fill="white" />
        </div>

        <h1 style={styles.salutation}>Dear Mama,</h1>
        
        <div style={styles.letterBody}>
          <p>We see you.</p>
          
          <p>We see the early mornings before the sun comes up, and the late nights when the house is finally quiet. We see the reheated coffee, the endless worry, and the way your heart walks around outside your body every single day.</p>
          
          <p>Some days feel like a whirlwind of scattered toys, messy faces, and a million questions. Some days, you might wonder if you are doing enough. But amidst the beautiful chaos, we want you to know something important: <strong>You are doing something extraordinary.</strong></p>
          
          <p>You are building a world for someone else. You are their safe place, their loudest cheerleader, and their greatest comfort.</p>
          
          <p>Laperlyn was created because we believe that the clothes your little ones wear should reflect the softness, warmth, and care that you surround them with every day. We aren't just designing fabric; we are designing for the moments that matter—the first steps, the muddy puddles, the tight hugs, and the bedtime stories.</p>
          
          <p>Take a deep breath. You are exactly exactly who your little one needs.</p>
        </div>

        <div style={styles.signOff}>
          <p>With so much love,</p>
          <h3 style={styles.signature}>The Laperlyn Family</h3>
        </div>

        <div style={styles.actionSection}>
          <p style={styles.actionText}>We are building something beautiful for you and your little ones.</p>
          <Link to="/quiz" style={styles.actionBtn}>
            Join our Community
          </Link>
        </div>

      </div>

    </div>
  );
}

// --- Specific Styling for the Letter Page ---
const styles = {
  pageContainer: {
    padding: '4rem 5% 8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: 'var(--bg-cream)',
  },
  letterWrapper: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '800px',
    borderRadius: '40px',
    padding: '5rem 4rem',
    boxShadow: '0 25px 60px rgba(160, 32, 240, 0.05)',
    position: 'relative',
    borderTop: '8px solid var(--primary-purple)',
  },
  iconWrapper: {
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--primary-purple)',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 10px 20px rgba(160, 32, 240, 0.3)',
  },
  salutation: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'var(--primary-purple)',
    marginBottom: '2.5rem',
    textAlign: 'center',
    marginTop: '1rem',
  },
  letterBody: {
    fontSize: '1.25rem',
    lineHeight: '2',
    color: 'var(--text-main)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  signOff: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  signature: {
    fontSize: '2rem',
    fontWeight: '900',
    color: 'var(--primary-purple)',
    marginTop: '0.5rem',
    fontStyle: 'italic',
  },
  actionSection: {
    marginTop: '5rem',
    paddingTop: '3rem',
    borderTop: '2px dashed var(--accent-purple)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  actionText: {
    fontSize: '1.1rem',
    color: 'var(--text-light)',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  actionBtn: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    backgroundColor: 'var(--primary-purple)',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '900',
    borderRadius: '30px',
    transition: 'transform 0.3s, boxShadow 0.3s',
    boxShadow: '0 8px 20px rgba(160, 32, 240, 0.2)',
  }
};