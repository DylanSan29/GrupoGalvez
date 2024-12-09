import React from "react";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <section className="full-width-image-GrupoGalvez">
        <img
          src="src/images/GrupoGalvez.jpg"
          alt=""
          className="full-width-image-element"
        />
      </section>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">
            La Mejor Calidad en Producción de Papas
          </h1>
          <p className="hero-subheading">
            Nos dedicamos a cultivar y ofrecer las mejores papas frescas y
            procesadas, garantizando calidad y sabor en cada producto. ¡Confía
            en nosotros para llevar lo mejor a tu mesa!
          </p>
          <a href="contact" className="cta-button">
            Contáctanos
          </a>
        </div>
        <div className="hero-image">
          <img src="src/images/papas.jpg" alt="Producción de Papas" />
        </div>
      </section>

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

      <section className="video-section">
        <h2 className="video-heading">Descubre Nuestro Proceso</h2>
        <div className="video-container">
          <video width="100%" height="500px" controls preload="auto">
            <source src="src/videos/papas.mp4" type="video/mp4" />
            El buscador no soporta el video.
          </video>
        </div>
      </section>

      {/* <section className="testimonials">
        <h2 className="testimonials-heading">Historias de éxito</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "La calidad de las papas es insuperable. Desde que trabajamos con
              esta empresa, nuestros clientes están más satisfechos que nunca."
            </p>
            <h3>- María López</h3>
            <p>Gerente, compañia ejemplo</p>
          </div>
          <div className="testimonial-card">
            <p>
              "Estamos impresionados con el compromiso y la frescura de cada
              entrega. Sin duda, un socio confiable para nuestro negocio."
            </p>
            <h3>- Carlos Ramírez</h3>
            <p>Propietario, compañia ejemplo</p>
          </div>
        </div>
      </section> */}

      <section className="benefits">
        <h2 className="benefits-heading">¿Por Qué Elegirnos?</h2>
        <ul className="benefits-list">
          <li>
            ✔ Papas de la más alta calidad, frescas y seleccionadas
            cuidadosamente.
          </li>
          <li>
            ✔ Proceso de producción eficiente que garantiza entregas puntuales.
          </li>
          <li>✔ Atención personalizada y soporte dedicado a cada cliente.</li>
          <li>
            ✔ Compromiso con la sostenibilidad y el cuidado del medio ambiente.
          </li>
        </ul>
      </section>

      {/* <section className="pricing">
        <h2 className="pricing-heading">Opciones de Servicio</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Básico</h3>
            <p className="price">$199,999.99</p>
            <ul>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Profesional</h3>
            <p className="price">$299,999.99</p>
            <ul>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Empresarial</h3>
            <p className="price">Precios Personalizados</p>
            <ul>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="faq">
        <h2 className="faq-heading">Preguntas Frecuentes</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h3>¿De dónde provienen nuestras papas?</h3>
            <p>
              Nuestras papas son cultivadas en campos seleccionados para
              garantizar la mejor calidad y sabor.
            </p>
          </div>
          <div className="faq-item">
            <h3>¿Ofrecen opciones personalizadas para empresas?</h3>
            <p>
              Sí, trabajamos con negocios para ofrecer soluciones personalizadas
              según sus necesidades.
            </p>
          </div>
          <div className="faq-item">
            <h3>¿Cómo puedo realizar un pedido?</h3>
            <p>
              Es fácil, solo tienes que contactarnos a través del botón
              "Contacto" y nuestro equipo te ayudará.
            </p>
          </div>
          <div className="faq-item">
            <h3>¿Cuál es la diferencia entre sus productos?</h3>
            <p>
              Ofrecemos diferentes variedades y presentaciones de papas, desde
              papas frescas hasta productos listos para cocinar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainScreen;
