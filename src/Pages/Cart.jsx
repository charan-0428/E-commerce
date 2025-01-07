import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, all_product, removeFromCart, resetCart } = useContext(ShopContext);

  const calculateTotalPrice = (id) => {
    const product = all_product.find(item => item.id === id);
    return product ? product.new_price * cartItems[id] : 0;
  };

  const cartKeys = Object.keys(cartItems);
  const cartProducts = cartKeys.filter(key => cartItems[key] > 0).map(id => ({
    id: parseInt(id),
    quantity: cartItems[id],
  }));

  const totalCartValue = cartProducts.reduce((total, { id, quantity }) => {
    return total + calculateTotalPrice(id);
  }, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartProducts.length > 0 ? (
        cartProducts.map(({ id, quantity }) => (
          <div key={id} className="cart-item">
            <div className="cart-item-img">
              <img src={all_product.find(product => product.id === id)?.image} alt={`Product ${id}`} />
            </div>
            <div>
              <div>Product ID: {id}</div>
              <div>Quantity: {quantity}</div>
              <div>Total: ${calculateTotalPrice(id).toFixed(2)}</div>
              <button onClick={() => removeFromCart(id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
      <div className="cart-total">
        <h2>Total Cart Value: ${totalCartValue.toFixed(2)}</h2>
      </div>
      <div  className='buttons'>
      <button onClick={resetCart}>Reset Cart</button>
      <button >Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
