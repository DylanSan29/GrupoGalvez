import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      {/* Sobre Nosotros */}
      <div className="intro">
        <h2>Sobre Nosotros</h2>
        <p>
          <strong>Productora de papas Rancho Gálvez SPR DE RL</strong>
        </p>
      </div>
      <div className="main-image">
        <img
          src="src/images/photoField.jpg"
          alt="Imagen Principal"
          className="full-width-image"
        />
      </div>

      <div className="mission-section">
        <h2>Nuestra Misión</h2>
        <p>
          Produciendo papas de alta calidad, sostenibles y accesibles, mientras
          fomentamos el desarrollo de nuestras comunidades rurales y protegemos
          el medio ambiente para las generaciones futuras. Comprometidos a
          satisfacer las necesidades del sector industrial, proporcionando
          productos de alta calidad y personalizados para satisfacer las
          demandas de nuestros clientes industriales.
        </p>
      </div>

      {/* Sección de Visión */}
      <div className="vision-section">
        <h2>Nuestra Visión</h2>
        <p>
          Ser la empresa líder en la producción de papas de alta calidad,
          reconocida por nuestra innovación, eficiencia y compromiso con la
          sostenibilidad, y ser una fuente de orgullo y prosperidad para
          nuestros colaboradores, socios y comunidades, mientras satisfacemos
          las necesidades del mercado industrial y contribuimos al desarrollo de
          la industria alimentaria en la región.
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
            <img src="src/images/worker1.jpg" alt="Miembro del Equipo" />
          </div>
          <div className="team-member">
            <img src="src/images/worker2.jpg" alt="Miembro del Equipo" />
          </div>
          <div className="team-member">
            <img src="src/images/worker3.jpg" alt="Miembro del Equipo" />
          </div>
          <div className="team-member">
            <img src="src/images/worker4.jpg" alt="Miembro del Equipo" />
          </div>
          <div className="team-member">
            <img src="src/images/worker5.jpg" alt="Miembro del Equipo" />
          </div>
          <div className="team-member">
            <img src="src/images/worker6.jpg" alt="Miembro del Equipo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
