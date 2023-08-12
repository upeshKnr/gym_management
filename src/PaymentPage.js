import React, { useState } from "react";
import "./components/PaymentPage.css";
i;
import axios from "axios";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const razorpayKey = "your_razorpay_key_here"; // Replace with your actual Razorpay API key

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const response = await axios.post("/create-order", {
      amount: parseFloat(amount) * 100,
    });
    const order = response.data;

    const options = {
      key: razorpayKey,
      amount: order.amount,
      currency: order.currency,
      name: "Your Gym Name",
      description: "Gym Membership Payment",
      order_id: order.id,
      handler: function (response) {
        alert(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <h1>Gym Membership Payment</h1>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          step="any"
        />
      </div>
      <div>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentPage;
