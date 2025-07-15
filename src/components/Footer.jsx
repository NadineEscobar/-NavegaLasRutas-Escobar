import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-white mt-5 py-4" style={{ backgroundColor: 'var(--gunmetal)' }}>
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Mockup Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;