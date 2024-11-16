import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './contexts/ThemeContext'; // Importez le ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* Utilisez ThemeProvider pour englober App */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Mesurer la performance de l'application si besoin
reportWebVitals();

