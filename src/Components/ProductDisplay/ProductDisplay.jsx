import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";
import all_products from '../assets/all_product';
import './ProductDisplay.css';

const ProductDisplay = () => {
  const { id } = useParams();
  const { addToCart, showPopup } = useContext(ShopContext);
  const product = all_products.find((item) => item.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to the cart.');
      return;
    }
    addToCart(product.id);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-Prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="size">
          <h1>Select size</h1>
          <div className="diffsizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className={`${
                  selectedSize === size ? 'selected' : ''
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        {showPopup && <div className="popup">Item added to cart successfully!</div>}
        <p className="productdisplay-right-category">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
