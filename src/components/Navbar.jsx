import { Link } from 'react-router-dom';
import { useStardust } from '../context/StardustContext';

export default function Navbar() {
  // Grab the current points from our brain!
  const { points } = useStardust();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 5%' }}>
      <Link to="/" className="logo">La Perlyn</Link>
      
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/quiz">Quiz</Link>
        <Link to="/wwyd">What Would You Do?</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/stories">Stories</Link>
        
        {/* The Stardust Counter Badge */}
        <div style={{
          backgroundColor: '#FFFDF9',
          border: '2px solid var(--primary-purple)',
          padding: '8px 16px',
          borderRadius: '30px',
          fontWeight: '900',
          color: 'var(--primary-purple)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 10px rgba(160, 32, 240, 0.15)'
        }}>
          <span>✨</span>
          <span>{points} Stardust</span>
        </div>
      </div>
    </nav>
  );
}
