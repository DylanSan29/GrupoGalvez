import React, { useEffect } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  useEffect(() => {
    const contactItems = document.querySelectorAll('.contact-item');
    const onScroll = () => {
      contactItems.forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Contáctanos</h2>

        {/* Sección de Redes Sociales */}
        <div className="contact-social-media">
          <h3 className="section-heading">Síguenos</h3>
          <div className="contact-items">
            <div className="contact-item social-card">
              <div className="contact-item-img">
                <img src="facebook-image.jpg" alt="Facebook" />
              </div>
              <i className="fab fa-facebook"></i>
              <p className="contact-link">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </p>
            </div>
            <div className="contact-item social-card">
              <div className="contact-item-img">
                <img src="twitter-image.jpg" alt="Twitter" />
              </div>
              <i className="fab fa-twitter"></i>
              <p className="contact-link">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </p>
            </div>
            <div className="contact-item social-card">
              <div className="contact-item-img">
                <img src="instagram-image.jpg" alt="Instagram" />
              </div>
              <i className="fab fa-instagram"></i>
              <p className="contact-link">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Correo Electrónico */}
        <div className="contact-section">
          <h3 className="section-heading">Envíanos un Correo</h3>
          <div className="contact-items">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p className="contact-link">
                <a href="mailto:contact@company.com">contact@company.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Teléfono */}
        <div className="contact-section">
          <h3 className="section-heading">Llámanos</h3>
          <div className="contact-items">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p className="contact-link">
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Ubicación */}
        <div className="contact-section">
          <h3 className="section-heading">Nuestra Ubicación</h3>
          <div className="contact-items">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p className="contact-link">
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">123 Calle Negocios, Ciudad, País</a>
              </p>
            </div>
          </div>
        </div>

        {/* Indicador de Desplazamiento */}
        <div className="scroll-down-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
