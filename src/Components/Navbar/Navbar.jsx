import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/FeaturesSection">Características</a></li>
        <li><a href="/AboutUs">Sobre Nosotros</a></li>
        <li><a href="/OurProducts">Productos</a></li>
        <li><a href="/Contact">Contacto</a></li>
      </ul>
      <div className="navbar-cta">
      </div>
    </nav>
  );  
};

export default Navbar;
