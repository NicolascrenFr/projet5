import React, { useState, useEffect } from 'react';
import './carrousel.css';

const Carrousel = ({ pictures, currentIndex, setCurrentIndex }) => {
  const [animate, setAnimate] = useState(false);

  // Gestion des clics sur les flèches
  const handlePrev = () => {
    setAnimate(true);
    setCurrentIndex(prev => 
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAnimate(true);
    setCurrentIndex(prev => 
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  // Réinitialise l'animation après chaque changement
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="carrousel-container">
      <img 
        src={pictures[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`}
        className={`carrousel-image ${animate ? 'slide-animation' : ''}`}
      />
      
      {/* Flèches et compteur (seulement si plusieurs images) */}
      {pictures.length > 1 && (
        <>
          <button 
            className="carrousel-arrow prev"
            onClick={handlePrev}
            aria-label="Image précédente"
          >
            &lt;
          </button>
          
          <button 
            className="carrousel-arrow next"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            &gt;
          </button>
          
          <div className="carrousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carrousel;