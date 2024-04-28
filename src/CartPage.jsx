// components/CartPage.jsx
import React from 'react';
import { useHouseContext } from './HouseContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, calculateTotalCost } = useHouseContext();
  const totalCost = calculateTotalCost();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((property, index) => (
            <div key={index}>
              <p>{property.title}</p>
              <p>Price: ${property.price}</p>
              {/* Implement booking dates and other details */}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <p>Total Cost: ${totalCost}</p>
          <Link to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default CartPage;