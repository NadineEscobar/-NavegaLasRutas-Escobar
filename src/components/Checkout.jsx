import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }
    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor completa todos los campos");
      return;
    }

    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="btn mt-3" style={{ backgroundColor: 'var(--paynes-gray)', color: 'white' }}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Finalizar compra</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" name="name" className="form-control" value={buyer.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={buyer.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="text" name="phone" className="form-control" value={buyer.phone} onChange={handleChange} />
        </div>
        <button type="submit" className="btn w-100" style={{ backgroundColor: 'var(--paynes-gray)', color: 'white' }}>
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;