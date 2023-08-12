import React from "react";
import "./TransparentNavbar.css"; // Import the CSS file for styling

const TransparentNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Add your navigation links, logo, etc. here */}
        <li>
          <a class="nav-link active" aria-current="page" href="/Home ">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">
            AboutUs
          </a>
        </li>
      </div>
    </nav>
  );
};

export default TransparentNavbar;
