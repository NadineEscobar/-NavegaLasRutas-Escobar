import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from './ProductCard';
import ItemList from './ItemList';

const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter((prod) => prod.category === categoryId));
      } else {
        resolve(products);
      }
    }, 500);
  });
};

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p className="text-center mt-5">Cargando productos...</p>;

  return (
    <div className="container mt-5 pt-5">
      {greeting && <h2 className="text-center mb-4">{greeting}</h2>}
       <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;