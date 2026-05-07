import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Wwyd from './pages/Wwyd';
import Facts from './pages/Facts';
import Stories from './pages/Stories';
import Letter from './pages/Letter';
import DressPery from './pages/DressPery'; // WE IMPORTED THE NEW PAGE HERE

import { StardustProvider } from './context/StardustContext';

function App() {
  return (
    <StardustProvider>
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
              {/* WE ADDED THE NEW ROUTE RIGHT HERE */}
              <Route path="/dress-pery" element={<DressPery />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </StardustProvider>
  );
}

export default App;
