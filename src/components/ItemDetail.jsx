import React from 'react';
import ItemCount from './ItemCount';
import { formatPrice } from '../utils/formatPrice.js';

const ItemDetail = ({ title, image, price, description, stock, onAdd }) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{title}</h2>
        <p className="fs-5"><strong>Precio:</strong> {formatPrice(price)}</p>
        <p><strong>Descripción:</strong> {description}</p>
        <p><strong>Stock disponible:</strong> {stock}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;