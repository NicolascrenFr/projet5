import React from 'react';
import './Card.css';

function Card({ property }) {
  return (
    <div className="card">
      <img src={property.cover} alt={property.title} />
      <h3>{property.title}</h3>
    </div>
  );
}

export default Card;