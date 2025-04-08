import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import FicheLogement from "./pages/FicheLogement";
import Error from "./pages/Error";

function App() {
  return (
    <Router>  {/* Composant qui englobe toute l'application pour gérer la navigation */}
      <Routes>  {/* Conteneur qui définit les différentes routes */}
        
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home/>} />

        {/* Route pour la page "À propos" */}
        <Route path="/apropos" element={<Apropos/>} />

        {/* Route pour la page "FicheLogement" */}
        <Route path="/fichelogement" element={<FicheLogement/>} />

        {/* Route pour toutes les URL non définies (page d'erreur 404) */}
        <Route path="*" element={<Error/>} />

        <Route path="/logement/:id" element={<FicheLogement />} />

      </Routes>
    </Router>
  );
}

export default App;