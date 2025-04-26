import React, { useState } from 'react';
// recup id logementdepuis url
import { useParams, Navigate } from 'react-router-dom';
//liste des logements
import logements from '@/logements.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slideshow from '../../components/Slideshow/Slideshow';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse';
import './FicheLogement.css';

const FicheLogement = () => {
  const { id } = useParams(); //extrait id de l'url
  const logement = logements.find(item => item.id === id); // cherche logement dans json
  // gere image dans carrousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openCollapse, setOpenCollapse] = useState({
    description: false,
    equipments: false
  });

  // inverse ouvert/ferme
  const toggleCollapse = (collapseName) => {
    setOpenCollapse(prev => ({
      ...prev,
      [collapseName]: !prev[collapseName]
    }));
  };

    // Redirection vers la page d'erreur si logement non trouvé
    if (!logement) {
      return <Navigate to="/error" replace />;
    }

  return (
    <div className="page-container">
      <Header />
      <main className="fiche-logement-content">
      {/* Carrousel d'images */}
      <Slideshow 
        pictures={logement.pictures} 
        // naviguer dans carrousel
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
        <Collapse 
          title="Description" 
          isOpen={openCollapse.description}
          onToggle={() => toggleCollapse('description')}
          className="description-collapse"
        >
          <p>{logement.description}</p>
        </Collapse>

        <Collapse 
          title="Équipements" 
          isOpen={openCollapse.equipments}
          onToggle={() => toggleCollapse('equipments')}
          className="equipments-collapse"
        >
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