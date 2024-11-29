import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      {/* Sobre Nosotros */}
      <div className="intro">
        <h2>Sobre Nosotros</h2>
        <p>
          En <strong>Grupo Galvez</strong>, nos apasiona ofrecer soluciones transformadoras que empoderan a las empresas para alcanzar sus objetivos. Con un compromiso con la innovación y la excelencia, hemos sido un socio de confianza para más de 10,000 clientes satisfechos en todo el mundo.
        </p>
      </div>

      {/* Sección de Misión */}
      <div className="mission-section">
        <h2>Nuestra Misión</h2>
        <p>
          Empoderar a las empresas mediante soluciones innovadoras, fomentando el éxito y el crecimiento en cada paso.
        </p>
      </div>

      {/* Sección de Visión */}
      <div className="vision-section">
        <h2>Nuestra Visión</h2>
        <p>
          Ser el líder global en innovación y transformación empresarial, inspirando cambios en todas las industrias.
        </p>
      </div>

      {/* Sección de Valores */}
      <div className="values-section">
        <h2>Nuestros Valores</h2>
        <ul>
          <li>Integridad: Siempre hacer lo correcto.</li>
          <li>Innovación: Pensar de manera diferente, actuar con audacia.</li>
          <li>Excelencia: Buscar lo mejor en todo lo que hacemos.</li>
          <li>Éxito del Cliente: Enfocarnos en ofrecer impacto y valor.</li>
        </ul>
      </div>

      {/* Sección de Impacto */}
      <div className="impact-section">
        <h2>Nuestro Impacto</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Clientes Felices</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Países Alcanzados</p>
          </div>
          <div className="stat">
            <h3>500%</h3>
            <p>ROI Promedio</p>
          </div>
        </div>
      </div>

      {/* Conoce al Equipo */}
      <div className="team-section">
        <h2>Conoce al Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Miembro del Equipo" />
            <h3>Jane Doe</h3>
            <p>CEO & Fundadora</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Miembro del Equipo" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Miembro del Equipo" />
            <h3>Emily Davis</h3>
            <p>Jefa de Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
