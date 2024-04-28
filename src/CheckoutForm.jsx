// components/CheckoutForm.jsx
import React, { useState } from 'react';
import { useHouseContext } from './HouseContext';

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
    console.log('Contact Info:', contactInfo);
    console.log('Payment Details:', paymentDetails);
    console.log('Total Cost:', totalCost);
    // ... (additional logic for processing the checkout)
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleContactInfoChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
            />
          </label>
        </div>
        <div>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handlePaymentDetailsChange}
            />
          </label>
        </div>
        <div>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handlePaymentDetailsChange}
            />
          </label>
        </div>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckoutForm;