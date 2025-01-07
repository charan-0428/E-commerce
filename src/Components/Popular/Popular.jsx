import React from 'react';
import './Popular.css';
import data_product from '../assets/data';
import { Item } from '../Item/Item';

export const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product && data_product.length > 0 ? (
          data_product.map((item, i) => (
            <Item
              key={item.id || i} // Prefer unique id if available
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available</p> // Fallback message
        )}
      </div>
    </div>
  );
};
