import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a Mockup Studio, tu tienda de recursos para diseñadores!" />
    </>
  );
};

export default App;