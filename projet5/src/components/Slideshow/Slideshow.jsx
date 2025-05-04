import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // État interne de l’image affichée
  const [animate, setAnimate] = useState(false);       // État pour gérer l’animation

  // Image précédente
  const handlePrev = () => {
    setAnimate(true);
    setCurrentIndex(prev =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  // Image suivante
  const handleNext = () => {
    setAnimate(true);
    setCurrentIndex(prev =>
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  // Réinitialise l’animation après 500 ms
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Pas d’images = pas d'affichage
  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="carrousel-container">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`carrousel-image ${animate ? 'slide-animation' : ''}`}
      />

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
