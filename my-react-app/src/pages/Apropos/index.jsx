  import React from 'react';
  import Baniere from "../../components/Baniere2/Baniere2";
  import Header from '../../components/Header';
  import Footer from '../../components/Footer';
  import Collapse from '../../components/Collapse';
  import "./Apropos.css";

  const Apropos = () => {
    return (
      <div className="home-page"> {/* Conteneur principal */}
        <Header /> {/* Header fixe en haut */}
        
        <main className="home-content">
          <Baniere />
          <div className="collapses-container">
      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </Collapse>
      
      <Collapse title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </Collapse>

      <Collapse title="Service">
        <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veuillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
      </Collapse>

      <Collapse title="Sécurité">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissantune note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons égalementdes ateliers sur la sécurité domestique pour nos hôtes.</p>
      </Collapse>
    </div>
    
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Apropos