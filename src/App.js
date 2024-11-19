import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PortfolioFrench from './pages/fr/PortfolioFrench';  // Page en français
import PortfolioEnglish from './pages/en/PortfolioEnglish';  // Page en anglais
import './App.css';
import About from './components/About';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Routes>
          {/* Route pour la version française */}
          <Route path="/fr" element={<PortfolioFrench />} />
          {/* Route pour la version anglaise */}
          <Route path="/en" element={<PortfolioEnglish />} />
        </Routes>
      </div>
      </Router>
      </LanguageProvider>
  );
}

export default App;


