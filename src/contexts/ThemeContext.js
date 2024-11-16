import React, { createContext, useState, useEffect } from 'react';

// Créez le contexte pour gérer le thème
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Gérer le thème système pour 'computer'
    const detectSystemTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    useEffect(() => {
        // Appliquer le thème au body lors du premier rendu ou au changement de thème
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const systemTheme = detectSystemTheme();
            setTheme(systemTheme);
        }
    }, []); // Ce useEffect s'exécute uniquement lors du premier rendu

    useEffect(() => {
        // Appliquez le thème au body après le changement de thème
        document.documentElement.setAttribute('data-theme', theme); // Applique le thème à <html>
    }, [theme]); // Appliquer chaque fois que 'theme' change

    // Fonction pour changer de thème
    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Sauvegarde le thème dans le localStorage
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme-${theme}`}>{children}</div> {/* Appliquez les classes du thème ici */}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;






