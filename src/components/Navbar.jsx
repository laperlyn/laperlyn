import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">La Perlyn</Link>
      <div className="nav-links">
        <Link to="/quiz">Quiz</Link>
        <Link to="/wwyd">What Would You Do?</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/stories">Stories</Link>
      </div>
    </nav>
  );
}