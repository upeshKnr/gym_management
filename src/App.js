import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import PaymentPage from "./PaymentPage";
// import TransparentNavbar from "./componets/TransparentNavbar";
import Navbar from "./Navbar";

import FacilityPhotosPage from "./componets/FacilityPhotosPage";
// import AboutUs from "./componets/AboutUs";

// import LoginPage from "./componets/LoginPage";
// import SignUpPage from "./componets/SignUpPage";
// import PaymentHeader from "./componets/PaymentHeader";
// import PaymentForm from "./componets/PaymentForm";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <TransparentNavbar /> */}
      <Navbar />
      <div>
        {/* <AboutUs /> */}
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        {/* <PaymentPage /> */}
        {/* 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}>
              <Route index element={<SignUpPage />} />
              <Route index element={<AboutUs />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
        <FacilityPhotosPage />
      </div>
    </>
  );
}

export default App;
