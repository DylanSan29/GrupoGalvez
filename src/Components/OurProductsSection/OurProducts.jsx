import React from 'react';
import './OurProducts.css'; // Nuevos estilos

const products = [
  { 
    id: 1, 
    name: "1 tonelada de papas", 
    description: "La solución ideal para grandes distribuidores o empresas del sector alimenticio.", 
    image: "https://via.placeholder.com/400", 
    link: "#" 
  },
  { 
    id: 2, 
    name: "100 kg de papas", 
    description: "Perfectas para restaurantes, supermercados o negocios medianos.", 
    image: "https://via.placeholder.com/400", 
    link: "#" 
  },
  { 
    id: 3, 
    name: "10 kg de papas", 
    description: "Ideal para familias, pequeños comercios o eventos especiales.", 
    image: "https://via.placeholder.com/400", 
    link: "#" 
  },
];


const OurProducts = () => {
  return (
    <section className="our-products">
      <h2 className="section-heading">Nuestros Productos Exclusivos</h2>
      <p className="section-subheading">Descubre la combinación perfecta de estilo y funcionalidad.</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <a href={product.link} className="cta-button">Ver Detalles</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
