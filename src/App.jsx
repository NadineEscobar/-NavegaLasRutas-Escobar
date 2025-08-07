import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'; 
import './firebaseConfig';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import './theme.css';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Mockup Studio, tu tienda de recursos para diseñadores!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría..." />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1 className="text-center mt-5">404 - Página no encontrada</h1>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;