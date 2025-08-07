import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalItems } = useCart();
  return (
    <Link to="/cart" className="btn btn-custom">
      🛒 <span className="badge bg-light text-dark">{totalItems}</span>
    </Link>
  );
};

export default CartWidget;