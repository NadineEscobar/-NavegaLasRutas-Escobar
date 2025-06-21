import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top px-4">
     <a className="navbar-brand" href="#">Mockup Studio</a>
     <div className="collapse navbar-collapse">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
         <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
         <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
        </ul>
     </div>
    <CartWidget />
   </nav>

  );
};

export default NavBar;