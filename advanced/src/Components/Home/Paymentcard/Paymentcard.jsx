import React, { useState } from 'react';

import "./Paymentcard.css";
import { useNavigate } from 'react-router-dom';


const Paymentcard = () => {
  const navigate = useNavigate(); 
  const [modeOfPayment, setModeOfPayment] = useState('Credit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState(null);
  const [cvv, setCvv] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState(null);

  const handleModeOfPaymentChange = (event) => {
    setModeOfPayment(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (date) => {
    setExpiryDate(date);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleTotalAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

  const handlePaymentDateChange = (date) => {
    setPaymentDate(date);
  };

  const handleProceedPayment = () => {
    // Add logic for proceeding payment
    navigate("/home");
    console.log("Payment Proceeded!");
  };

  const handleCancelPayment = () => {
    // Add logic for canceling payment
    navigate("/home");
    console.log("Payment Canceled!");
  };

  return (
    <div className="payment-card">
      <div className="payment-card-body">
        <h5 className="payment-card-title">Payment Information</h5>
        <div className="payment-form-group">
          <label>Mode of Payment:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Credit"
                checked={modeOfPayment === 'Credit'}
                onChange={handleModeOfPaymentChange}
              />
              Credit
            </label>
            <label>
              <input
                type="radio"
                value="Debit"
                checked={modeOfPayment === 'Debit'}
                onChange={handleModeOfPaymentChange}
              />
              Debit
            </label>
            <label>
              <input
                type="radio"
                value="UPI"
                checked={modeOfPayment === 'UPI'}
                onChange={handleModeOfPaymentChange}
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                checked={modeOfPayment === 'Other'}
                onChange={handleModeOfPaymentChange}
              />
              Other
            </label>
          </div>
        </div>
        <div className="payment-form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            className="payment-form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="payment-form-group">
          <label>Expiry Date:</label>
          <DatePicker
            selected={expiryDate}
            onChange={handleExpiryDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="payment-form-control"
          />
        </div>
        <div className="payment-form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            className="payment-form-control"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
        <div className="payment-form-group">
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="number"
            className="payment-form-control"
            id="totalAmount"
            value={totalAmount}
            onChange={handleTotalAmountChange}
          />
        </div>
        <div className="payment-form-group">
          <label>Payment Date:</label>
          <DatePicker
            selected={paymentDate}
            onChange={handlePaymentDateChange}
            className="payment-form-control"
          />
        </div>
        <div className="text-right">
          <button className="btn btn-primary mr-2" onClick={handleProceedPayment}>
            Proceed Payment
          </button>
          <button className="btn btn-secondary" onClick={handleCancelPayment}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paymentcard;
