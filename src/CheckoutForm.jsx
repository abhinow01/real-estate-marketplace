import React, { useState } from 'react';
import { useHouseContext } from './HouseContext';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = () => {
  const { cart, calculateTotalCost } = useHouseContext();
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const totalCost = calculateTotalCost();
  const notify =()=> toast('payment successfull!');

  const handleContactInfoChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit checkout form
    notify();
    console.log('Contact Info:', contactInfo);
    console.log('Payment Details:', paymentDetails);
    console.log('Total Cost:', totalCost);
    // ... (additional logic for processing the checkout)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <ToastContainer/>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleContactInfoChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentDetailsChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handlePaymentDetailsChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            CVV:
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handlePaymentDetailsChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
