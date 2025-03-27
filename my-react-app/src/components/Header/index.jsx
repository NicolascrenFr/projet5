import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A propos</Link>
            <Link to="/FicheLogement">Fiche logement</Link>
            <Link to="/Error">Error</Link>
        </nav>
    )
}

export default Header