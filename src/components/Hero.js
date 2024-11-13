// src/components/Hero.js
import React, { useEffect } from 'react';
import { init } from 'ityped';
import './Hero.css';

function Hero() {
    useEffect(() => {
        const typingText = [
            'Je suis développeur web fullstack',
            'Je suis DevOps',
            'J’aime les serveurs et la cybersécurité',
            'Je travaille sur des projets open-source',
            'J’aime travailler sur des projets amusants'
        ];

        init(document.querySelector("#ityped"), {
            strings: typingText,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    }, []);

    return (
        <div className="container-fluid home" id="home">
            <div id="homePageBackgroundImageDivStyled" className="background container-fluid"></div>
            <div className="container content text-center">
                <img src="/portfolio-georges/images/author/imgProfil_hucd2d9e5cf886f76815acc8314e438085_62193_148x148_fit_box_3.png" className="rounded-circle mx-auto d-block img-fluid" alt="Author" />
                <h1 className="greeting">Salut, je suis Georges</h1>
                <div className="typing-carousel">
                    <span id="ityped" className="ityped"></span>
                    <span className="ityped-cursor"></span>
                </div>
                <a href="#about" className="arrow-center" aria-label="Lire Suite - Georges"><i className="arrow bounce fa fa-chevron-down"></i></a>
            </div>
        </div>
    );
}

export default Hero;
