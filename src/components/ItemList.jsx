import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="row justify-content-center gap-3">
      {items.map(item => (
        <div key={item.id} className="col-md-3">
          <Item {...item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;