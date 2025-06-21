import React from 'react';

const CartWidget = () => {
  return (
    <button className="btn btn-custom">
      🛒 <span className="badge bg-light text-dark">0</span>
    </button>
  );
};

export default CartWidget;