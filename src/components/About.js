import React from 'react';
import './About.css'; // Ajoutez un fichier CSS pour la personnalisation de la section (si nécessaire)

const About = () => {
  return (
    <section id="about" className="container anchor p-lg-5 about-section">
      <div className="row pt-sm-2 pt-md-4 align-self-center">
        {/* Colonne de texte */}
        <div className="col-sm-6">
          <h3 className="p-1">Georges Dietrich</h3>
          <h5 className="p-1">Développeur Web Fullstack Flutter &amp; DevOps</h5>
          <p className="p-1 text-justify">
            Je suis un développeur web full-stack dynamique, spécialisé en Flutter et DevOps. Mon expertise me permet de concevoir des applications web interactives et performantes tout en développant des scripts d’automatisation sophistiqués. Je me spécialise également dans la création de serveurs sécurisés et de systèmes d’exploitation personnalisés, optimisant ainsi l’infrastructure pour répondre aux besoins spécifiques de chaque projet.
            <br /><br />
            En parallèle, je perfectionne mes compétences avec des certifications en cours chez OpenClassrooms, Cisco Packet Tracer, et AWS, pour rester à la pointe des innovations technologiques.
            <br /><br />
            Diplômé en Développement et Exploitation Informatique du CNAM de Paris, je combine une solide formation académique avec une pratique professionnelle approfondie pour offrir des solutions modernes et efficaces dans le domaine du développement et des opérations.
          </p>
          <div className="text-container ms-auto">
            <ul className="social-link d-flex">
              <li>
                <a href="mailto:gdietrich@live.fr" title="Email" target="_blank" rel="noreferrer">
                  <svg /* svg email icon */ />
                </a>
              </li>
              <li>
                <a href="https://github.com/lakrim92" title="Github" target="_blank" rel="noreferrer">
                  <svg /* svg github icon */ />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/georges-dietrich-5ab82b14a" title="LinkedIn" target="_blank" rel="noreferrer">
                  <svg /* svg linkedin icon */ />
                </a>
              </li>
            </ul>
          </div>
          <a href="/files/resume.pdf" title="Mon CV" target="#">
            <button className="btn btn-dark">Mon CV</button>
          </a>
        </div>
        {/* Colonne des certifications */}
        <div className="col-sm-6 pt-5 ps-md-4 ps-sm-3 pt-sm-0">
          <div className="row">
            <div className="col-6 col-lg-4 p-2">
              <div className="certificate-badge">
                <a href="https://openclassrooms.com/fr/course-certificates/9983336297" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.python.org/static/community_logos/python-powered-h.svg" alt="Certifié Python Openclassrooms et le CNAM" />
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-4 p-2">
              <div className="certificate-badge">
                <a href="https://openclassrooms.com/fr/course-certificates/8665668863" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.kindpng.com/picc/m/342-3423390_docker-icon-png-transparent-png.png" alt="Certifié Docker Openclassrooms et le CNAM" />
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-4 p-2">
              <div className="certificate-badge">
                <a href="https://openclassrooms.com/fr/course-certificates/5322438441" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.kindpng.com/picc/m/290-2902020_linux-penguin-linux-penguin-gif-hd-png-download.png" alt="Certifié Linux Openclassrooms et le CNAM" />
                </a>
              </div>
            </div>
            {/* Ajouter d'autres certifications ou éléments ici */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
