import React, { useEffect, useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const contactItems = document.querySelectorAll(".contact-item");
    contactItems.forEach((item) => {
      item.classList.add("visible");
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      try {
        setFormStatus("Enviando...");
        setTimeout(() => {
          setFormStatus("Mensaje enviado exitosamente.");
        }, 2000);
      } catch (error) {
        setFormStatus("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } else {
      setFormStatus("Por favor, completa todos los campos.");
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-section">
          <h3 className="section-heading">Envíanos un Correo</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Enviar
            </button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>

        <div className="scroll-down-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
