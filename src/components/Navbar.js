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

    const themeIcon = theme === 'dark' ? moonLogo : theme === 'light' ? sunLogo : computerLogo;

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
                                            selectedLanguage === 'Français' ? 'flag-icon-fr' : 'flag-icon-gb'
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
                                onClick={() => setSelectedLanguage('Français')}
                            >
                                <span className="flag-icon flag-icon-fr" style={{ width: '16px', height: '16px', marginRight: '8px' }}></span>
                                Français
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => setSelectedLanguage('English')}
                            >
                                <span className="flag-icon flag-icon-gb" style={{ width: '16px', height: '16px', marginRight: '8px' }}></span>
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
                                {selectedLanguage === 'Français' ? 'Thème Clair' : 'Light Theme'}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleThemeChange('dark')}>
                                <img src={moonLogo} alt="Dark Theme" style={{ marginRight: '8px' }} width="16" />
                                {selectedLanguage === 'Français' ? 'Thème Sombre' : 'Dark Theme'}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleThemeChange('system')}>
                                <img src={computerLogo} alt="System Theme" style={{ marginRight: '8px' }} width="16" />
                                {selectedLanguage === 'Français' ? 'Thème Système' : 'System Theme'}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default PortfolioNavbar;