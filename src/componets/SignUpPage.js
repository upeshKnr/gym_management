import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    age: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can add your server-side logic here)
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(initialFormData);
    }, 2000); // Reset the form and clear success message after 2 seconds
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {isSubmitted ? (
        <div className="success-message">Successfully Submitted!</div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => setFormData(initialFormData)}>
              Reset
            </button>
          </div>
          <p>
            already have a account
            <a href="/LoginPage">Login</a>
          </p>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;
