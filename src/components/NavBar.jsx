import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import products from '../data/products';
import getUniqueCategories from '../utils/getUniqueCategories';

const NavBar = () => {
  const categories = getUniqueCategories(products);

  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: 'var(--paynes-gray)' }}>
      <NavLink className="navbar-brand text-white" to="/">Mockup Studio</NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/">Inicio</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </a>
            <ul className="dropdown-menu" style={{ backgroundColor: 'var(--paynes-gray)'}}>
              {categories.map(cat => (
                <li key={cat}>
                  <NavLink className="dropdown-item" to={`/category/${cat}`}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;