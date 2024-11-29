import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div>
      <section className="features">
        <h2 className="features-heading">¿Por Qué Elegirnos?</h2>
        <p className="features-subheading">
          Descubre las características que hacen de nuestro producto la mejor opción para ti.
        </p>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="/images/feature1-icon.svg" alt="Ícono de Eficiencia" />
            <h3>Eficiencia Optimizada</h3>
            <p>
              Ahorra tiempo y esfuerzo con nuestras herramientas intuitivas que simplifican los flujos de trabajo complejos.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images/feature2-icon.svg" alt="Ícono de Personalización" />
            <h3>Opciones Personalizables</h3>
            <p>
              Adapta el producto a las necesidades únicas de tu negocio con configuraciones flexibles.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images/feature3-icon.svg" alt="Ícono de Soporte" />
            <h3>Soporte 24/7</h3>
            <p>
              Confía en nuestro equipo de expertos para obtener asistencia cuando la necesites, día o noche.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-heading">¡Comienza Hoy Mismo!</h2>
        <p className="cta-subheading">
          Únete a miles de clientes satisfechos y lleva tu negocio al siguiente nivel.
        </p>
        <a href="/Contact" className="cta-button">
          Contáctanos Ahora
        </a>
      </section>

    </div>
  );
};

export default FeaturesSection;
