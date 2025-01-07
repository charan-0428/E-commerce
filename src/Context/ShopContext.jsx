import React, { createContext, useState } from 'react';
import all_product from '../Components/assets/all_product';

// Create the context
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0; // Initialize cart with product IDs as keys
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  // Add to cart
  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
    setShowPopup(true); // Show popup
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 0),
    }));
  };

  // Reset cart
  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    resetCart,
    showPopup,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
