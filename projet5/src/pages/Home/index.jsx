import React from 'react';
import { Link } from 'react-router-dom';
import logements from "@/logements.json";
import Baniere from "../../components/Baniere/Baniere";
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      
      <main className="home-content">
        {/* Bannière avec conteneur d'alignement */}
        <div className="content-container">
          <Baniere />
        </div>

        {/* Conteneur pour le fond gris (même largeur que la bannière) */}
        <div className="content-container">
          <div className="cards-wrapper">
            {/* Contenu des cards */}
            {logements?.length > 0 ? (
              <div className="cards-container">
                {logements.map((property) => (
                  <Link 
                    to={`/logement/${property.id}`} 
                    key={property.id} 
                    className="card-link"
                  >
                    <Card property={property} />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="no-lodgings-message">
                Aucun logement disponible pour le moment.
              </p>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;