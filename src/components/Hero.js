import React, { useEffect, useRef, useContext } from 'react';
import { init } from 'ityped';
import './Hero.css';
import imgProfil from '../assets/images/author/imgProfil.png';
import { ThemeContext } from '../contexts/ThemeContext';

function Hero() {
    const { theme } = useContext(ThemeContext);
    const itypedRef = useRef(null);

    useEffect(() => {
        const element = itypedRef.current;

        if (element) {
            // Initialiser iTyped seulement si ce n'est pas déjà fait
            if (!element.classList.contains('ityped-initialized')) {
                init(element, {
                    strings: [
                        'Je suis développeur web fullstack',
                        'Je suis DevOps',
                        'J’aime les serveurs et la cybersécurité',
                        'Je travaille sur des projets open-source',
                        'J’aime travailler sur des projets amusants'
                    ],
                    typeSpeed: 100,
                    backSpeed: 50,
                    loop: true,
                });

                // Marquer l'élément comme initialisé
                element.classList.add('ityped-initialized');
            }
        }

        return () => {
            // Nettoyage au démontage du composant
            if (element) {
                const cursor = document.querySelector(".ityped-cursor");
                if (cursor) cursor.remove(); // Supprime le curseur proprement
            }
        };
    }, []); // Effet qui s'exécute une seule fois

    const borderColor = theme === 'dark' ? 'black' : 'white';

    return (
        <div className="home" id="home">
            <div id="homePageBackgroundImageDivStyled" className="background"></div>
            <div className="container content text-center">
                <img
                    src={imgProfil}
                    className="rounded-circle mx-auto d-block img-fluid"
                    alt="Author"
                    style={{
                        border: `5px solid ${borderColor}`,
                        objectFit: 'cover',
                    }}
                />
                <h1 className="greeting">Salut, je suis Georges</h1>
                <div className="typing-carousel">
                    <span ref={itypedRef} id="ityped" className="ityped"></span>
                </div>
                <a href="#about" className="arrow-center" aria-label="Lire Suite - Georges">
                    <i className="arrow bounce fa fa-chevron-down"></i>
                </a>
            </div>
        </div>
    );
}

export default Hero;