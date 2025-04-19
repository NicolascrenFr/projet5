import React, { useState, useEffect } from 'react';
import './Slideshow.css';

//pictures - URL images à afficher
//currentIndex - image actuelle
//setCurrentIndex - mise a jour image
const Carrousel = ({ pictures, currentIndex, setCurrentIndex }) => {
  //animatio transition flèches
  const [animate, setAnimate] = useState(false);

  // Gestion des clics sur les flèches
  const handlePrev = () => { //precedente
    setAnimate(true);
    setCurrentIndex(prev => 
      //de la premiere à la derniere
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  const handleNext = () => { //suivante
    setAnimate(true);
    setCurrentIndex(prev => 
      // de la dernière à la premiere
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  // Réinitialise l'animation après chaque changement
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // si pas d'images pas de flèches
  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="carrousel-container">
        {/* Image actuelle */}
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
            &lt; {/* Flèche gauche */}

          </button>
          
          <button 
            className="carrousel-arrow next"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            &gt; {/* Flèche droite */}
          </button>
          
          {/* Compteur */}
          <div className="carrousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carrousel;