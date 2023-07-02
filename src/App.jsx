import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  const Home = React.lazy(() => import("./pages/Home"));
  const About = React.lazy(() => import("./pages/About"));
  const Contact = React.lazy(() => import("./pages/Contact"));
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}> <Home /> </Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}> <About /> </Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}> <Contact /> </Suspense>} />
      </Routes>
    </div>
  );
}
{
}

export default App;