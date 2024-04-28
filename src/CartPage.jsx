import React from 'react';
import { useHouseContext } from './HouseContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, calculateTotalCost } = useHouseContext();
  const totalCost = calculateTotalCost();

  return (
    <div className='flex flex-col items-center justify-center mt-4'>
      <div className='w-4/5 p-4 border border-b rounded-xl'>
        <h2 className='text-3xl font-bold mb-4'>Cart</h2>
        {cart.length === 0 ? (
          <p className='text-lg'>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((property, index) => (
              <div key={index} className='flex flex-col mb-4'>
                <div className='flex items-center justify-between mb-2'>
                  <img src={property.image} alt={property.title} className='w-20 h-20 mr-4 rounded-md' />
                  <div>
                    <p className='text-lg font-bold'>{property.title}</p>
                    <p className='text-base'>Price: ${property.price}</p>
                  </div>
                  <button className='text-sm text-red-500' onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
            <p className='text-lg font-bold'>Total Cost: ${totalCost}</p>
            <Link to="/checkout" className='text-lg text-blue-500 underline'>Proceed to Checkout</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
