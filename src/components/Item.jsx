import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice.js';

const Item = ({ id, title, image, price }) => {
  return (
    <div className="card h-100 d-flex flex-column shadow-sm">
      <img src={image} alt={title} className="card-img-top object-fit-cover" style={{ height: '200px' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h3 className="card-title" style={{ minHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis'}} > {title} </h3>
          <p className="card-text fw-bold">{formatPrice(price)}</p>
        </div>
        <Link to={`/item/${id}`} className="btn mt-auto" style={{ backgroundColor: 'var(--paynes-gray)', color: 'white' }} >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;

