import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/LOGO.png';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img 
          src={logo} 
          alt="Kasa - Location d'appartements" 
          className="header-logo" 
        />
      </Link>
      
      <nav className="nav-links">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;