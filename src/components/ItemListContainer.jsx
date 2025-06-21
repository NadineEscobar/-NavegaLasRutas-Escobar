import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container main-content">
      <h2 className="text-center mb-4">{greeting}</h2>
      <div className="row justify-content-center gap-3">
        {products.map(({ id, title, image, downloadLink }) => (
          <div key={id} className="col-md-3">
            <ProductCard
              title={title}
              image={image}
              downloadLink={downloadLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;