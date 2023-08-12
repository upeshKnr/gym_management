
const FacilityCard = ({ imgSrc, title }) => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="card" style={animationProps}>
      {/* ... rest of the code ... */}
    </animated.div>
  );
};



//to include router
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<Router>
        <div className="App">
          <PaymentHeader />
          <Switch>
            <Route path="/" exact component={PaymentForm} />
            {/* Add other routes (confirmation, success, error) */}
          </Switch>
        </div>
      </Router>



/* Apply basic styling to the signup container */
.signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Style the h1 element */
  .signup-container h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Style the form inputs and labels */
  .signup-container label {
    display: block;
    margin-bottom: 10px;
  }
  
  .signup-container input[type="text"],
  .signup-container input[type="email"],
  .signup-container input[type="password"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  */
  
  /* Style the submit button */
  .signup-container button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    background-color: #2196f3;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  .signup-container button[type="submit"]:hover {
    background-color: #007bff;
  }
  