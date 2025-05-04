// //usestate =ouverture/fermeture
// //useref =contenu à afficher/masquer
// //useeffect =animer le contenu
import { useState, useRef, useEffect } from 'react';
import './Collapse.scss';

// //children =contenu a afficher/masquer
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  //   //fonction ouverture
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  //   //effet animation hauteur
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen, children]);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button 
        className="collapse-toggle"
        onClick={handleToggle}
        aria-expanded={isOpen}
        style={{ outline: 'none' }}
      >
        {title}
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="collapse-content" // contenu a afficher ou a masquer
        ref={contentRef}
        style={{
          overflow: 'hidden',
          transition: 'height 0.3s ease-out'
        }}
      >
        <div className="collapse-inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
