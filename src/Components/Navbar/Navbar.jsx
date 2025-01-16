import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img
            src="src/images/logoGalvez.jpeg"
            alt=""
            className="navbar-logo-img"
          />
        </a>
      </div>
      {isMobile && (
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      )}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/FeaturesSection">Características</a>
        </li>
        <li>
          <a href="/AboutUs">Sobre Nosotros</a>
        </li>
        <li>
          <a href="/OurProducts">Productos</a>
        </li>
        <li>
          <a href="/Contact">Contacto</a>
        </li>
      </ul>
      <div className="navbar-cta"></div>
    </nav>
  );
};

export default Navbar;
