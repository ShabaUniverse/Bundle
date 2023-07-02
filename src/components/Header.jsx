import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-logo">
            <h2>bundle</h2>
          </div>
          <div className="header-links">
          <Link to="/" className="header-link">
              home
            </Link>
            <Link to="/about" className="header-link">
              about
            </Link>
            <Link to="/contact" className="header-link">
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
