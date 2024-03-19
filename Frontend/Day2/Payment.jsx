import React, { useState } from 'react';
import '../assets/css/Payment.css'; // Import your custom CSS file

const Payment = ({ totalPrice }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log('Payment submitted:', formData);
    // You can add further logic here, such as redirecting after successful payment
  };

  return (
    <div className="payment-container">
      <h2>Payment Information</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <label>
          Card Number
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expiration Date
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          CVV
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cardholder Name
          <input
            type="text"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total Price: ${totalPrice}
        </label>
        <button type="submit" className="payment-button" style={{top:'800px',right:'100px',left:'100px'}}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
