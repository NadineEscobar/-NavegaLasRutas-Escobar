import React, { useState } from 'react';

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="d-flex flex-column align-items-start gap-2">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-sm btn-secondary" onClick={decrease}>-</button>
        <span>{count}</span>
        <button className="btn btn-sm btn-secondary" onClick={increase}>+</button>
      </div>
      <button className="btn" style={{ backgroundColor: 'var(--paynes-gray)', color: 'white' }} onClick={() => onAdd(count)} disabled={stock === 0} >
        {stock === 0 ? 'Sin stock' : `Agregar ${count} al carrito`}
      </button>
    </div>
  );
};

export default ItemCount;