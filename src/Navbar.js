import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import { Dropdown } from "bootstrap";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  // Change the background color of the navbar when scrolling
  const handleScroll = () => {
    const threshold = 100; // Adjust as needed
    const currentScroll = window.pageYOffset;

    if (currentScroll > threshold) {
      setNavbarBackground("antiquewhite");
    } else {
      setNavbarBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const options = [
  //   { label: "Home", value: "home" },
  //   { label: "About Us", value: "about" },
  //   // Add more dropdown options as needed
  // ];

  return (
    <nav className="Navbar" style={{ backgroundColor: navbarBackground }}>
      <div className="navbar-content">
        <span className="navbar-brand">The Vengeance</span>
        <div className="navbar-items">
          <a href="/HomePage" className="nav-link">
            Home
          </a>

          <a href="/AboutUs" className="nav-link">
            About Us
          </a>
          {/* <Dropdown
            options={options}
            placeholder="Select an option"
            dropdownPosition="bottom"
            dropdownGap={5}
            direction="ltr"
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
