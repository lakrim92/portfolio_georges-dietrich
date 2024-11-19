import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { ThemeContext } from '../contexts/ThemeContext'; // Gestion du thème
import { useLanguage } from '../contexts/LanguageContext'; // Gestion de la langue
import invertedLogo from '../assets/images/logos/inverted-logo.png';
import sunLogo from '../assets/images/icons/sun-svgrepo-com.svg';
import moonLogo from '../assets/images/icons/moon-svgrepo-com.svg';
import computerLogo from '../assets/images/icons/computer-svgrepo-com.svg';

const PortfolioNavbar = () => {
    // Gestion de l'état pour le scroll
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('#home');

    // Récupération du contexte pour le thème
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Récupération du contexte pour la langue
    const { selectedLanguage, setSelectedLanguage } = useLanguage();

    // Gestion du scroll pour modifier l'apparence de la barre de navigation
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Gestion du changement d'onglet
    const handleTabClick = (tabId) => setActiveTab(tabId);

    // Gestion du changement de thème
    const handleThemeChange = (selectedTheme) => {
        if (selectedTheme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            toggleTheme(prefersDark ? 'dark' : 'light');
        } else {
            toggleTheme(selectedTheme);
        }
    };

    // Sélection de l'icône de thème
    const themeIcon = theme === 'dark' ? moonLogo : theme === 'light' ? sunLogo : computerLogo;

    // Style dynamique pour la barre de navigation
    const navbarStyle = {
        backgroundColor: isScrolled
            ? theme === 'dark'
                ? '#1F2937'
                : '#F8FAFC'
            : 'transparent',
        color: isScrolled
            ? theme === 'dark'
                ? '#F1F5F9'
                : '#1E293B'
            : '#CBD5E1',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    // Style dynamique pour les icônes
    const iconStyle = {
        filter: theme === 'dark' ? 'invert(1)' : 'invert(0)',
        transition: 'filter 0.3s ease',
    };

    return (
        <Navbar
            expand="xl"
            className={`top-navbar ${isScrolled ? 'scrolled-navbar' : 'transparent-navbar'}`}
            fixed="top"
            style={navbarStyle}
        >
            <Container>
                {/* Logo et titre */}
                <Navbar.Brand href="/portfolio-georges">
                    <img src={invertedLogo} id="logo" alt="Logo Inversé" />
                    Georges Dietrich - Portfolio
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="top-nav-items" />
                <Navbar.Collapse id="top-nav-items" className="dynamic-navbar">
                    <Nav className="ms-auto">
                        {/* Liens de navigation */}
                        {[
                            { href: '#home', label: 'Accueil', enLabel: 'Home' },
                            { href: '#about', label: 'À propos', enLabel: 'About' },
                            { href: '#skills', label: 'Compétences', enLabel: 'Skills' },
                            { href: '#experiences', label: 'Expériences', enLabel: 'Experiences' },
                            { href: '#education', label: 'Parcours académique', enLabel: 'Education' },
                            { href: '/portfolio-georges/posts', label: 'Articles', enLabel: 'Articles' },
                        ].map(({ href, label, enLabel }) => (
                            <Nav.Link
                                key={href}
                                href={href}
                                className={`nav-link ${activeTab === href ? 'active' : ''}`}
                                onClick={() => handleTabClick(href)}
                            >
                                {selectedLanguage === 'français' ? label : enLabel}
                            </Nav.Link>
                        ))}

                        {/* Sélecteur de langue */}
                        <NavDropdown
                            title={
                                <span>
                                    <span
                                        className={`flag-icon ${
                                            selectedLanguage === 'français' ? 'flag-icon-fr' : 'flag-icon-gb'
                                        }`}
                                        style={{ marginRight: '8px' }}
                                    ></span>
                                    {selectedLanguage}
                                </span>
                            }
                            id="languageSelector"
                            className="language-dropdown"
                        >
                            <NavDropdown.Item
                                onClick={() => setSelectedLanguage('français')}
                            >
                                Français
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => setSelectedLanguage('anglais')}
                            >
                                English
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Sélecteur de thème */}
                        <NavDropdown
                            title={<img src={themeIcon} alt="Theme Icon" style={iconStyle} width="20" />}
                            id="themeSelector"
                            className="theme-dropdown"
                        >
                            <NavDropdown.Item onClick={() => handleThemeChange('light')}>
                                <img src={sunLogo} alt="Light Theme" style={{ marginRight: '8px' }} width="16" />
                                {selectedLanguage === 'français' ? 'Thème Clair' : 'Light Theme'}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleThemeChange('dark')}>
                                <img src={moonLogo} alt="Dark Theme" style={{ marginRight: '8px' }} width="16" />
                                {selectedLanguage === 'français' ? 'Thème Sombre' : 'Dark Theme'}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleThemeChange('system')}>
                                <img src={computerLogo} alt="System Theme" style={{ marginRight: '8px' }} width="16" />
                                {selectedLanguage === 'français' ? 'Thème Système' : 'System Theme'}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default PortfolioNavbar;


