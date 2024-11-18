import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import 'flag-icon-css/css/flag-icons.min.css';
import { ThemeContext } from '../contexts/ThemeContext'; // Importez ThemeContext
import invertedLogo from '../assets/images/logos/inverted-logo.png';
import sunLogo from '../assets/images/icons/sun-svgrepo-com.svg';
import moonLogo from '../assets/images/icons/moon-svgrepo-com.svg';
import computerLogo from '../assets/images/icons/computer-svgrepo-com.svg';

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
        if (selectedTheme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            toggleTheme(prefersDark ? 'dark' : 'light');
        } else {
            toggleTheme(selectedTheme);
        }
    };

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
            : theme === 'dark'
                ? '#CBD5E1'
                : '#CBD5E1',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const handleLanguageSelect = (language, href) => {
        setSelectedLanguage(language);
        window.location.href = href; // Redirige vers la langue sélectionnée
    };

    const themeIcon = theme === 'dark' ? moonLogo : theme === 'light' ? sunLogo : computerLogo;

    return (
        <Navbar
            expand="xl"
            className={`top-navbar ${isScrolled ? 'scrolled-navbar' : 'transparent-navbar'}`}
            fixed="top"
            style={navbarStyle}
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
                                <span>
                                    <span className={`flag-icon ${selectedLanguage === 'français' ? 'flag-icon-fr' : 'flag-icon-gb'}`}
                                        style={{ marginRight: '8px' }}
                                    ></span>
                                    {selectedLanguage}
                                </span>
                            }
                            id="languageSelector"
                            onToggle={toggleLanguageMenu}
                            className="language-dropdown"
                        >
                            <NavDropdown.Item
                                onClick={() => handleLanguageSelect('français', '/portfolio-georges')}
                            >
                                Français
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => handleLanguageSelect('anglais', '/en/portfolio-georges')}
                            >
                                English
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Theme Selector */}
                        <NavDropdown
                            title={<img src={themeIcon} alt="Theme Icon" width="20" />}
                            id="themeSelector"
                            className="theme-dropdown"
                        >
                            <NavDropdown.Item onClick={() => handleThemeChange('light')}>
                                <img src={sunLogo} width="16" alt="Light" style={{ marginRight: '8px' }} />
                                {selectedLanguage === 'français' ? 'Thème Clair' : 'Light Theme'}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleThemeChange('dark')}>
                                <img src={moonLogo} width="16" alt="Dark" style={{ marginRight: '8px' }} />
                                {selectedLanguage === 'français' ? 'Thème Sombre' : 'Dark Theme'}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleThemeChange('system')}>
                                <img src={computerLogo} width="16" alt="System" style={{ marginRight: '8px' }} />
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
