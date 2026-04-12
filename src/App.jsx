import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Wwyd from './pages/Wwyd';
import Facts from './pages/Facts';
import Stories from './pages/Stories';
import Letter from './pages/Letter';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/wwyd" element={<Wwyd />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/letter" element={<Letter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;