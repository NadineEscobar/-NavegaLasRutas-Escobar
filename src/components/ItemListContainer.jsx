import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const consulta = categoryId
      ? query(productsCollection, where('category', '==', categoryId))
      : productsCollection;

    getDocs(consulta)
      .then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productsData);
      })
      .catch((error) => {
        console.log('Error al traer productos:', error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p className="text-center mt-5">Cargando productos...</p>;

  return (
    <div className="container mt-5 pt-5 pb-5">
      {greeting && <h1 className="text-center mb-4">{greeting}</h1>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;