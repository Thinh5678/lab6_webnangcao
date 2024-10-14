import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default Cart;
