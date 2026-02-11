import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Documentation from './components/Documentation'; // NEW: Import Documentation
import Contact from './components/Contact';
import Background from './components/Background';

// --- 1. THE LANDING PAGE (Scrollable) ---
const LandingPage = () => (
  <div className="relative z-10 animate-fadeIn">
    {/* Hero Section */}
    <Hero />
    
    {/* Projects Section (Target for Scroll) */}
    {/* Changed ID from 'modules' to 'projects' to match Navbar */}
    <div id="projects">
      <Projects />
    </div>

    {/* Documentation Section (Target for Scroll) */}
    {/* NEW SECTION ADDED HERE */}
    <div id="docs">
      <Documentation />
    </div>

    {/* Footer/Contact Section (Target for Scroll) */}
    <div id="contact">
      <Contact />
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen relative overflow-x-hidden text-white selection:bg-cyan-500/30">
      
      {/* Fixed Background Layer */}
      <Background />

      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        // Router controls which page is shown
        <Router>
          <Routes>
            {/* Main Home Route */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Future Tool Routes can be added here later */}
            {/* <Route path="/visualizer" element={<VisualizerPage />} /> */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;