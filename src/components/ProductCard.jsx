import React from 'react';

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="card shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fw-bold">${price}</p>
        <button className="btn btn-custom mt-3">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
