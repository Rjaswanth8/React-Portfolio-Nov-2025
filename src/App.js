// src/App.js
import React, { useEffect } from "react";
import { initMainAnimations } from "./main"; // works with named import
// or you can use: import initMainAnimations from "./main";

import "odometer/themes/odometer-theme-default.css";

import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // initialize animations and capture cleanup
    const cleanup = initMainAnimations();

    // return cleanup for React to call on unmount
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
