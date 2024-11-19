import { createContext, useContext, useState } from 'react';

// Crée un contexte pour la langue
const LanguageContext = createContext();

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = () => useContext(LanguageContext);

// Provider pour envelopper l'application et fournir la langue sélectionnée
export const LanguageProvider = ({ children }) => {
    // État pour suivre la langue sélectionnée, avec 'français' comme langue par défaut
    const [selectedLanguage, setSelectedLanguage] = useState('français');

    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
