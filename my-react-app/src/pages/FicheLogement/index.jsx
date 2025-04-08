import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '@/logements.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel/Carrousel';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse';
import './FicheLogement.css';

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logements.find(item => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <div className="error-message">Logement non trouvé</div>;
  }

  return (
    <div className="fiche-logement">
      <Header /> 
      {/* Carrousel d'images */}
      <Carrousel 
        pictures={logement.pictures} 
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />

      {/* Section titre et informations */}
      <section className="info-section">
        <div className="left-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="right-info">
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img 
              src={logement.host.picture} 
              alt={`Photo de ${logement.host.name}`}
              className="host-picture"
            />
          </div>
          <Rating rating={parseInt(logement.rating)} />
        </div>
      </section>

      {/* Sections dépliables */}
      <div className="collapse-section">
        <Collapse title="Description" className="description-collapse">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements" className="equipments-collapse">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
      <Footer /> 
    </div>
  );
};

export default FicheLogement;