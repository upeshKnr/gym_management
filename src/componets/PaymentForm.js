import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const PaymentForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    // payment processing
    console.log("Payment data:", data);
    // Redirect to confirmation page
    history.push("/confirmation");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          ref={register({ required: true })}
        />
        {errors.cardNumber && <span>Card number is required</span>}
      </div>
      {/* Add other payment form fields here (expiration, CVV, etc.) */}
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
