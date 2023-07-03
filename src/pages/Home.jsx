import React from "react";
import "../App.css";

// import ComponentOne from "../components/ComponentOne";
// import ComponentTwo from "../components/ComponentTwo";
// import ComponentThree from "../components/ComponentThree";
// import ComponentFour from "../components/ComponentFour";

import { ComponentOne, ComponentTwo, ComponentThree, ComponentFour } from "../components";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <h2>home</h2>
          <ComponentOne />
          <ComponentTwo />
          <ComponentThree />
          <ComponentFour />
        </div>
      </div>
    </div>
  );
};

export default Home;
