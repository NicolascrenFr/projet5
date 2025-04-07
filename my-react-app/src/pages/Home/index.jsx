import React from 'react';
import logements from "@/logements.json";
import Baniere from "../../components/Baniere";
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./Home.css"; // Import correct du CSS

const Home = () => {
  return (
    <div className="home-page"> {/* Conteneur principal */}
      <Header /> {/* Header fixe en haut */}
      
      <main className="home-content">
        <Baniere />
        
        <div className="cards-wrapper">
          {/* Début du bloc bonus - Vérification des données */}
          {logements && logements.length > 0 ? (
            <div className="cards-container">
              {logements.map((property) => (
                <Card key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <p className="no-lodgings-message">Aucun logement disponible pour le moment.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;