import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import 'flag-icon-css/css/flag-icons.min.css';
import invertedLogo from '../assets/images/logos/inverted-logo.png';
import sunLogo from '../assets/images/icons/sun-svgrepo-com.svg';
import moonLogo from '../assets/images/icons/moon-svgrepo-com.svg';
import computerLogo from '../assets/images/icons/computer-svgrepo-com.svg';

const PortfolioNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('#home');
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

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

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    return (
        <Navbar
            expand="xl"
            className={`top-navbar ${isScrolled ? 'scrolled-navbar' : 'transparent-navbar'}`}
            fixed="top"
        >
            <Container>
                <Navbar.Brand href="/portfolio-georges" className="brand-link">
                    <img src={invertedLogo} id="logo" alt="Logo Inversé" className={isScrolled ? 'scrolled-logo' : 'transparent-logo'} />
                    Georges Dietrich - Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="top-nav-items">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="top-nav-items" className="dynamic-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={`nav-link ${activeTab === '#home' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#home')}
                        >
                            Accueil
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={`nav-link ${activeTab === '#about' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#about')}
                        >
                            À propos
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={`nav-link ${activeTab === '#skills' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#experiences"
                            className={`nav-link ${activeTab === '#experiences' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#experiences')}
                        >
                            Experiences
                        </Nav.Link>
                        <Nav.Link
                            href="#education"
                            className={`nav-link ${activeTab === '#education' ? 'active' : ''}`}
                            onClick={() => handleTabClick('#education')}
                        >
                            Parcours académique
                        </Nav.Link>
                        <Nav.Link
                            href="/portfolio-georges/posts"
                            className={`nav-link ${activeTab === '/portfolio-georges/posts' ? 'active' : ''}`}
                            onClick={() => handleTabClick('/portfolio-georges/posts')}
                        >
                            Articles
                        </Nav.Link>

                        {/* Language Selector */}
                        <NavDropdown
                            title={
                                <span style={{ color: isLanguageMenuOpen ? '#000000' : undefined }}>
                                    <span className="flag-icon flag-icon-fr"></span> Français
                                </span>
                            }
                            id="languageSelector"
                            onToggle={toggleLanguageMenu}
                            className="language-dropdown"
                        >
                            <NavDropdown.Item href="/en/portfolio-georges" className="dropdown-link">
                                <span className="flag-icon flag-icon-gb"></span> English
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/portfolio-georges" className="dropdown-link">
                                <span className="flag-icon flag-icon-fr"></span> Français
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Theme Selector */}
                        <NavDropdown
                            title={<img id="navbar-theme-icon-svg" className={`theme-icon svg-inverted ${isScrolled ? 'scrolled' : 'transparent'}`} src={sunLogo} width="20" alt="Theme Icon" />}
                            id="themeSelector"
                            className="theme-dropdown"
                        >
                            <NavDropdown.Item href="#" data-scheme="light" className="dropdown-link">
                                <img className="theme-icon" src={sunLogo} width="20" alt="Light Theme" />
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" data-scheme="dark" className="dropdown-link">
                                <img className="theme-icon" src={moonLogo} width="20" alt="Dark Theme" />
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" data-scheme="system" className="dropdown-link">
                                <img className="theme-icon" src={computerLogo} width="20" alt="System Theme" />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;


