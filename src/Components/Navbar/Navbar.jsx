import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar el estado del menú
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      {/* Botón hamburguesa */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}> {/* Condicionalmente agregar la clase 'active' */}
        <li><a href="/">Inicio</a></li>
        <li><a href="/FeaturesSection">Características</a></li>
        <li><a href="/AboutUs">Sobre Nosotros</a></li>
        <li><a href="/OurProducts">Productos</a></li>
        <li><a href="/Contact">Contacto</a></li>
      </ul>
      <div className="navbar-cta">
        {/* Botón o contenido adicional */}
      </div>
    </nav>
  );
};

export default Navbar;
