import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useCart } from '../context/CartContext';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();


  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, 'products', itemId);

    getDoc(productRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProduct(null);
        }
      })
      .catch((error) => {
        console.log('Error al traer el producto', error);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    console.log(`Agregaste ${quantity} unidades al carrito`);
    setAddedToCart(true);
  };

  if (loading) return <p className="text-center mt-5">Cargando detalle...</p>;
  if (!product) return <p className="text-center mt-5">Producto no encontrado</p>;

  return (
    <div className="container mt-5 pt-5">
      {addedToCart ? (
       <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '70vh' }}>
         <p className="fs-5 text-success text-dark">¡Producto agregado al carrito!</p>
         <Link to="/cart" className="btn btn-success" style={{ backgroundColor: 'var(--gunmetal)', color: 'white' }}>Ir al carrito</Link>
        </div>
        ) : (<ItemDetail {...product} onAdd={handleAddToCart} />
      )}
    </div>
  );
};

export default ItemDetailContainer;