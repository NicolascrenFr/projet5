import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ property }) {
  return (
    <Link to={`/logement/${property.id}`} className="card-link">
      <div className="card">
        <img 
          src={property.cover} 
          alt={property.title}
          className="card-image"
        />
        <div className="card-overlay">
          <h3 className="card-title">{property.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;