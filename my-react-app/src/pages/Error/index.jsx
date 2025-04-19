//hooks de react, 
// useState permet de gérer un état (variable qui peut changer)
// useEffect exécute du code au chargement du composant ou quand une variable change
import { useState, useEffect } from 'react'; 
// composant de react-router-dom pour rediriger vers une autre page
import { Navigate } from 'react-router-dom';
// import de l'image
import errorImage from '@/assets/images/404.png';
//import composants réutilisables
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./error.css"; // Import du CSS

// composant React
const Error = () => {
  //shouldRedirect variable d'état (initialisée à False)
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // pour redirection vers page d'accueil
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRedirect(true); // Après 3 secondes, déclenche la redirection
    }, 3000); // 3000 ms = 3 secondes
    return () => clearTimeout(timer); //Nettoie le timer si l’utilisateur quitte la page avant les 3 s
  }, []); //s'execute au chargement d'ERROR ([] vide)

  //Si shouldRedirect est true, le composant <Navigate to="/" /> redirige vers la page d’accueil (/)
  if (shouldRedirect) {
    return <Navigate to="/" replace />; //Empêche l’utilisateur de revenir en arrière avec le bouton "Précédent"
  }

  return (
    <div className="home-page">
      <Header />
      <main className="error-page">
        <img src={errorImage} alt="Erreur 404 - Page non trouvée" />
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
//Permet d’utiliser ce composant dans d’autres fichiers avec import Error from './Error';