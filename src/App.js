import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext'; // Importation du LanguageProvider
import PortfolioNavbar from './components/Navbar'; // Votre composant de barre de navigation
import ThemeProvider from './contexts/ThemeContext'; // Changement de l'importation
import Hero from './components/Hero'; // Assurez-vous que Hero est bien importé
import About from './components/About'; // Assurez-vous que About est bien importé

function App() {
    return (
        <LanguageProvider> {/* Fournit le contexte de la langue à tous les composants enfants */}
            <ThemeProvider> {/* Fournit le contexte du thème à tous les composants enfants */}
                <PortfolioNavbar /> {/* Votre composant de barre de navigation */}
                <Hero /> {/* Composant Hero pour la première section */}
                <About /> {/* Composant About pour la section À propos */}
                {/* Ajoutez ici d'autres composants ou pages */}
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
