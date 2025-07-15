import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Mockup Studio, tu tienda de recursos para diseñadores!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría..." />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;