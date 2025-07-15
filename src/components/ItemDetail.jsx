import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ title, image, price, onAdd }) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{title}</h2>
        <p className="fs-5"><strong>Precio:</strong> ${price}</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;

