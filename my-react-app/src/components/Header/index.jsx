import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '@/assets/images/LOGO.png';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
            <NavLink to="/">
        <img 
          src={logo} 
          alt="Kasa - Location d'appartements" 
          className="header-logo" 
        />
      </NavLink>
      
      <nav className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "nav-link nav-link--active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        
        <NavLink 
          to="/apropos" 
          className={({ isActive }) => 
            isActive ? "nav-link nav-link--active" : "nav-link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;