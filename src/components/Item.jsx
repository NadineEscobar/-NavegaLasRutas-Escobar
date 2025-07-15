import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, image, price }) => {
  return (
    <div className="card shadow-sm">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fw-bold">${price}</p>
        <Link to={`/item/${id}`} className="btn " style={{ backgroundColor: 'var(--paynes-gray)', color: 'white' }}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
