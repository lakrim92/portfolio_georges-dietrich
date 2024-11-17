import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { ThemeContext } from '../contexts/ThemeContext'; // Importez ThemeContext
import invertedLogo from '../assets/images/logos/inverted-logo.png';
import sunLogo from '../assets/images/icons/sun-svgrepo-com.svg';
import moonLogo from '../assets/images/icons/moon-svgrepo-com.svg';
// import computerLogo from '../assets/images/icons/computer-svgrepo-com.svg';

const PortfolioNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('#home');
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Menu langue ouvert/fermé
    const [selectedLanguage, setSelectedLanguage] = useState('français'); // Langue sélectionnée

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Détecte la langue actuelle en fonction de l'URL
        const currentLang = window.location.pathname.includes('/en') ? 'anglais' : 'français';
        setSelectedLanguage(currentLang);
    }, []);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleThemeChange = (selectedTheme) => {
        toggleTheme(selectedTheme);
    };

    const navbarStyle = {
        backgroundColor: theme === 'dark' ? 'transparent' : 'transparent', // Toujours transparent
        color: theme === 'dark' ? '#CBD5E1' : '#CBD5E1', // Texte couleur par défaut
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    // Style au scroll
    const scrolledStyle = {
        backgroundColor: theme === 'dark' ? '#1F2937' : '#F8FAFC', // Couleur de fond au scroll
        color: theme === 'dark' ? '#F1F5F9' : '#1E293B', // Couleur du texte au scroll
    };

    const finalNavbarStyle = isScrolled
        ? { ...navbarStyle, ...scrolledStyle }
        : navbarStyle;

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const handleLanguageSelect = (language, href) => {
        setSelectedLanguage(language);
        window.location.href = href; // Redirige vers la langue sélectionnée
    };

    // Couleur dynamique des icônes avant et après le scroll
    const themeIconColor = isScrolled
        ? theme === 'dark'
            ? '#CBD5E1' // Sombre, scrollé
            : '#1E293B' // Clair, scrollé
        : theme === 'dark'
            ? '#F1F5F9' // Sombre, non scrollé
            : '#CBD5E1'; // Clair, non scrollé

    // Le moonLogo garde toujours sa couleur #F1F5F9 en mode sombre
    const moonLogoColor = theme === 'dark' ? '#F1F5F9' : isScrolled ? '#1E293B' : '#CBD5E1';

    return (
        <Navbar
            expand="xl"
            className={`top-navbar ${isScrolled ? 'scrolled-navbar' : 'transparent-navbar'}`}
            fixed="top"
            style={finalNavbarStyle}
        >
            <Container>
                <Navbar.Brand href="/portfolio-georges">
                    <img src={invertedLogo} id="logo" alt="Logo Inversé" />
                    Georges Dietrich - Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="top-nav-items" />
                <Navbar.Collapse id="top-nav-items" className="dynamic-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={`nav-link ${activeTab === '#home' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#home')}
                        >
                            {selectedLanguage === 'français' ? 'Accueil' : 'Home'}
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={`nav-link ${activeTab === '#about' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#about')}
                        >
                            {selectedLanguage === 'français' ? 'À propos' : 'About'}
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={`nav-link ${activeTab === '#skills' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#skills')}
                        >
                            {selectedLanguage === 'français' ? 'Compétences' : 'Skills'}
                        </Nav.Link>
                        <Nav.Link
                            href="#experiences"
                            className={`nav-link ${activeTab === '#experiences' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#experiences')}
                        >
                            {selectedLanguage === 'français' ? 'Expériences' : 'Experiences'}
                        </Nav.Link>
                        <Nav.Link
                            href="#education"
                            className={`nav-link ${activeTab === '#education' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#education')}
                        >
                            {selectedLanguage === 'français' ? 'Parcours académique' : 'Education'}
                        </Nav.Link>
                        <Nav.Link
                            href="/portfolio-georges/posts"
                            className={`nav-link ${activeTab === '/portfolio-georges/posts' ? 'active' : ''}`}
                            onClick={() => handleTabClick('/portfolio-georges/posts')}
                        >
                            {selectedLanguage === 'français' ? 'Articles' : 'Articles'}
                        </Nav.Link>

                        {/* Language Selector */}
                        <NavDropdown
                            title={
                                <span style={{ color: isLanguageMenuOpen ? '#000000' : undefined }}>
                                    <span className={`flag-icon ${selectedLanguage === 'français' ? 'flag-icon-fr' : 'flag-icon-gb'}`}
                                        style={{ width: '16px', height: '16px', marginRight: '8px' }}
                                    ></span>
                                    {selectedLanguage === 'français' ? 'Français' : 'English'}
                                </span>
                            }
                            id="languageSelector"
                            onToggle={toggleLanguageMenu}
                            className="language-dropdown"
                        >
                            <NavDropdown.Item
                                href="/src/pages/fr/PortfolioFrench.js"
                                onClick={() => handleLanguageSelect('français', '/portfolio-georges')}
                                className="dropdown-link"
                            >
                                <span className="flag-icon flag-icon-fr" style={{ width: '16px', height: '16px', marginRight: '8px' }}></span> Français
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="/src/pages/en/PortfolioEnglish.js"
                                onClick={() => handleLanguageSelect('anglais', '/en/portfolio-georges')}
                                className="dropdown-link"
                            >
                                <span className="flag-icon flag-icon-gb" style={{ width: '16px', height: '16px', marginRight: '8px' }}></span> English
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Theme Selector */}
                        <NavDropdown
                            title={
                                <img
                                    className="navbar-theme-icon"
                                    src={theme === 'dark' ? moonLogo : sunLogo}
                                    width="20"
                                    alt="Theme Icon"
                                    style={{
                                        filter: isScrolled ? 'none' : `invert(${theme === 'dark' ? '100%' : '0%'})`, // Applique l'inversion seulement quand non scrollé
                                        color: themeIconColor, // Applique la couleur dynamique aux icônes de thème
                                    }}
                                />
                            }
                            id="themeSelector"
                            className="theme-dropdown"
                        >
                            <NavDropdown.Item onClick={() => handleThemeChange('light')}>
                                <img 
                                    className="dropdown-theme-icon" 
                                    src={sunLogo} 
                                    width="16" 
                                    alt="Light Theme Icon" 
                                    style={{
                                        width: '16px', 
                                        height: '16px', 
                                        marginRight: '8px', 
                                        color: themeIconColor, // Applique la couleur dynamique aux icônes de sélection
                                    }}
                                />
                                {selectedLanguage === 'français' ? 'Thème Clair' : 'Light Theme'}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleThemeChange('dark')}>
                                <img
                                    className="dropdown-theme-icon"
                                    src={moonLogo}
                                    width="16"
                                    alt="Dark Theme Icon"
                                    style={{
                                        color: moonLogoColor, // Applique la couleur dynamique au moonLogo en mode sombre
                                    }}
                                />
                                {selectedLanguage === 'français' ? 'Thème Sombre' : 'Dark Theme'}
                            </NavDropdown.Item>²    
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default PortfolioNavbar;

