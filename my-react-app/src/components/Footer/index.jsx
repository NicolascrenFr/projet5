import React from 'react';
import logoKasaFooter from '@/assets/images/logo-kasa-blanc.png'; // Chemin corrigé
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img 
          src={logoKasaFooter} 
          alt="Kasa - Location d'appartements" 
          className="footer-logo" 
        />
        <p className="footer-text">© 2024 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;