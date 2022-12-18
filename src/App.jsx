import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
// import Terminal from "./components/Terminal";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Team />
      {/* <Terminal /> */}
      <Footer />
    </div>
  );
}

export default App;
