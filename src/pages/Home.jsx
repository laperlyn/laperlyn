import { Link } from 'react-router-dom';

// These lines connect your actual .png files to the code
import heroImg from '../assets/hero-image.png';
import quizImg from '../assets/quiz-image.png';
import wwydImg from '../assets/wwyd-image.png';
import factsImg from '../assets/facts-image.png';
import storiesImg from '../assets/stories-image.png';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <span className="badge">Welcome to Laperlyn</span>
          <h1>Step into <br/><span>their world.</span></h1>
          <p>A gentle space to understand your little ones, share stories, and take a quiet moment for yourself.</p>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src={heroImg} 
            alt="Mother and baby smiling" 
            className="hero-img"
          />
        </div>
      </section>

      {/* Grid of Image Cards */}
      <div className="content-wrapper">
        <div className="image-grid">
          
          <Link to="/quiz" className="image-card">
            <img 
              src={quizImg} 
              alt="Baby exploring" 
              className="card-img"
            />
            <h3>Parenting Quiz</h3>
            <p>Discover your unique parenting style. Are you the Zen Master, or the Negotiator?</p>
            <span className="card-link">Take the Quiz &rarr;</span>
          </Link>

          <Link to="/wwyd" className="image-card">
            <img 
              src={wwydImg} 
              alt="Parent and child" 
              className="card-img"
            />
            <h3>What Would You Do?</h3>
            <p>The supermarket meltdown. The bedtime refusal. See how other parents handle it.</p>
            <span className="card-link">Join Discussion &rarr;</span>
          </Link>

          <Link to="/facts" className="image-card">
            <img 
              src={factsImg} 
              alt="Curious baby" 
              className="card-img"
            />
            <h3>Fascinating Facts</h3>
            <p>Bite-sized wonders about your little one's brain, growth, and development.</p>
            <span className="card-link">Explore Facts &rarr;</span>
          </Link>

          <Link to="/stories" className="image-card">
            <img 
              src={storiesImg} 
              alt="Bedtime stories" 
              className="card-img"
            />
            <h3>Bedtime Stories</h3>
            <p>Quick, calming 3-minute tales designed to send them off to dreamland peacefully.</p>
            <span className="card-link">Read a Story &rarr;</span>
          </Link>

        </div>
      </div>

      {/* Featured Letter */}
      <section className="featured-letter">
        <h2>Dear Mama,</h2>
        <p>"Some days feel like a whirlwind of scattered toys and endless questions. But amidst the chaos, you are doing something extraordinary..."</p>
        <Link to="/letter" style={{ color: 'var(--primary-purple)', fontWeight: '900', fontSize: '1.2rem', textDecoration: 'none' }}>
          Read the Full Letter &rarr;
        </Link>
      </section>
    </div>
  );
}