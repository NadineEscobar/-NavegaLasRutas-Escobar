import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ItemDetail from './ItemDetail';

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === parseInt(id)));
    }, 500);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(itemId).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} unidades al carrito`);
  };

  if (loading) return <p className="text-center mt-5">Cargando detalle...</p>;
  if (!product) return <p className="text-center mt-5">Producto no encontrado</p>;

  return (
    <div className="container mt-5 pt-5">
      <ItemDetail {...product} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetailContainer;
