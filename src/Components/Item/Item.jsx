import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item" id={id}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="item-image" />
      </Link>
      <h3 className="item-name">{name}</h3>
      <div className="item-prices">
        <span className="new-price">${new_price}</span>
        {old_price && <span className="old-price">${old_price}</span>}
      </div>
    </div>
  );
};
