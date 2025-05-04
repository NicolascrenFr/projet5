import React from 'react';
// // recup id logementdepuis url
import { useParams, Navigate } from 'react-router-dom';
import logements from '@/logements.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slideshow from '../../components/Slideshow/Slideshow';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse';
import './FicheLogement.css';

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logements.find(item => item.id === id); // cherche logement dans json

  if (!logement) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="page-container">
      <Header />
      <main className="fiche-logement-content">
        {/* Carrousel d'images (état géré dans le composant) */}
        <Slideshow pictures={logement.pictures} />

        {/* Infos logement */}
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

        {/* Collapse autonomes */}
        <div className="collapse-section">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FicheLogement;
