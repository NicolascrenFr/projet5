import React from 'react';
import errorImage from '@/assets/images/404.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./error.css"; // Import correct du CSS

function Error() {
    return (
      <div className="home-page"> {/* Conteneur principal */}
      <Header /> {/* Header fixe en haut */}
      <main className="error-page">
      <img 
        src={errorImage} 
        alt="Erreur 404 - Page non trouvée" 
      />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="error-link">Retourner sur la page d'accueil</a>
    </main>
      <Footer />
      </div>
    )
  }
  
  export default Error