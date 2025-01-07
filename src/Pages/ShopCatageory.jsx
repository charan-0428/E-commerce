import React from 'react';
import all_products from '../Components/assets/all_product';

import { Item } from '../Components/Item/Item.jsx';
import './Pages.css'


const ShopCatageory = ({ banner, category }) => {
  // Filter products by category
  const filteredProducts = all_products.filter(product => product.category === category);

  return (
    <div className="shop-category">
      <img src={banner} alt={`${category} banner`} />
      <div className="shopcatageory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_products.length}
        </p>
       
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCatageory;
