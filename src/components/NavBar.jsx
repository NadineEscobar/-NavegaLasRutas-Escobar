import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');

    getDocs(productsCollection).then((snapshot) => {
      const uniqueCategories = [
        ...new Set(snapshot.docs.map((doc) => doc.data().category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: 'var(--gunmetal)' }}>
      <NavLink className="navbar-brand text-white" to="/">Mockup Studio</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'var(--paynes-gray)' }}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/">Inicio</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
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