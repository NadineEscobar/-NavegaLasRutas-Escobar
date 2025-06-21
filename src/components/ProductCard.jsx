import React from 'react';

const ProductCard = ({ title, image, downloadLink }) => {
  return (
    <div className="card shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-custom mt-3"
        >
          Descargar plantilla
        </a>
      </div>
    </div>
  );
};

export default ProductCard;