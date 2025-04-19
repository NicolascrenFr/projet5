//usestate =ouverture/fermeture
//useref =contenu à afficher/masquer
//useeffect =animer le contenu
import { useState, useRef, useEffect } from 'react';
import './Collapse.scss';

//children =contenu a afficher/masquer
function Collapse({ title, children, isOpen: propsIsOpen, onToggle }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false); //État local pour les composants non contrôlés
  const contentRef = useRef(null); //Référence à l'élément DOM du contenu (pour l'animation)
  const isControlled = typeof propsIsOpen !== 'undefined'; //Vérifie si le composant est contrôlé par le parent (propsIsOpen)
  const isOpen = isControlled ? propsIsOpen : internalIsOpen; //Détermine l'état actuel 

  //fonction ouverture
  const handleToggle = () => {
    if (isControlled && onToggle) {
      onToggle(); // Si contrôlé, utilise le callback parent
    } else {
      setInternalIsOpen(!isOpen); // Sinon, utilise l'état interne
    }
  };

  //effet animation hauteur
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen //si ouvert
        ? `${contentRef.current.scrollHeight}px` //hauteur contenu
        : '0px'; //si fermé hauteur 0 - fermé
    }
  }, [isOpen, children]); // quand isopen ou children changent

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button 
        className="collapse-toggle"
        onClick={handleToggle}
        aria-expanded={isOpen} //pour accessibilite
        style={{ outline: 'none' }} //desactive bord bleu

      >
        {title}
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>
          <svg //fleche vers le bas
            width="16" 
            height="10" 
            viewBox="0 0 16 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1L8 8L15 1" //fleche vers le bas
              stroke="currentColor" //prend couleur parent
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      
      <div
        className="collapse-content" //contenu a afficher/masquer
        ref={contentRef} //modifie hauteur en JS
        style={{
          overflow: 'hidden', //empeche debordement animation
          transition: 'height 0.3s ease-out' //animer hauteur
        }}
      >
        <div className="collapse-inner">{children}</div> {/*children=contenu collapse */}
      </div>
    </div>
  );
}

export default Collapse;