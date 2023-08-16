import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import PaymentPage from "./PaymentPage";
// import PaymentForm from "./componets/PaymentForm";

import Navbar from "./componets/Navbar";

import FacilityPhotosPage from "./componets/FacilityPhotosPage";
import AboutUs from "./componets/AboutUs";

import LoginPage from "./componets/LoginPage";
import SignUpPage from "./componets/SignUpPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <FacilityPhotosPage />
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="aboutUs" element={<AboutUs />}></Route>
            <Route path="signUpPage" element={<SignUpPage />}></Route>
            <Route
              path="facilityPhotosPage"
              element={<FacilityPhotosPage />}
            ></Route>
            <Route
              path="facilityPhotosPage"
              element={<FacilityPhotosPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
