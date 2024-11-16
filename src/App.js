import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PortfolioFrench from './pages/fr/PortfolioFrench';  // Page en français
import PortfolioEnglish from './pages/en/PortfolioEnglish';  // Page en anglais
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          {/* Route pour la version française */}
          <Route path="/en" element={<PortfolioFrench />} />
          {/* Route pour la version anglaise */}
          <Route path="/en" element={<PortfolioEnglish />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


