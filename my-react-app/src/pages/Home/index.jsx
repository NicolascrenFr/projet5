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
        
        <div className="cards-wrapper"> {/* Conteneur du fond gris */}
          <div className="cards-container">
            {logements.slice(0, 6).map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;