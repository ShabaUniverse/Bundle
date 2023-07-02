import React from "react";
import "../App.css";

import { ComponentTwo, ComponentThree } from "../components";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <h2>contact</h2>
          <ComponentTwo />
          <ComponentThree />
        </div>
      </div>
    </div>
  );
};

export default Contact;
