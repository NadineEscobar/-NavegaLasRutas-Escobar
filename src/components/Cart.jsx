import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn mt-3" style={{ backgroundColor: 'var(--paynes-gray)', color: 'white' }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-4 text-center">Carrito de Compras</h1>
      <div className="list-group">
        {cart.map(item => (
          <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h2>{item.title}</h2>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-end">
        <h3>Total: ${totalPrice}</h3>
        <button className="btn btn-secondary me-2" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn" style={{ backgroundColor: 'var(--paynes-gray)', color: 'white' }}>
          Ir a pagar
        </Link>
      </div>
    </div>
  );
};

export default Cart;