import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div>
      <section className="features">
        <h2 className="features-heading">
          Nuestras Principales Características
        </h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="src/images/papas3.jpg" alt="Calidad Superior" />
            <h3>Calidad Superior</h3>
            <p>
              Producimos papas de la más alta calidad, seleccionadas
              cuidadosamente para garantizar frescura y sabor.
            </p>
          </div>
          <div className="feature-card">
            <img src="src/images/papas2.jpg" alt="Variedad de Productos" />
            <h3>Variedad de Productos</h3>
            <p>
              Ofrecemos una amplia gama de opciones, desde papas frescas hasta
              productos procesados listos para usar.
            </p>
          </div>
          <div className="feature-card">
            <img src="src/images/papas1.jpg" alt="Producción Sostenible" />
            <h3>Producción Sostenible</h3>
            <p>
              Nos comprometemos con prácticas agrícolas responsables que cuidan
              del medio ambiente y promueven la sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-heading">¡Comienza Hoy Mismo!</h2>
        <p className="cta-subheading">
          Únete a miles de clientes satisfechos y lleva tu negocio al siguiente
          nivel.
        </p>
        <a href="/Contact" className="cta-button">
          Contáctanos Ahora
        </a>
      </section>
    </div>
  );
};

export default FeaturesSection;
