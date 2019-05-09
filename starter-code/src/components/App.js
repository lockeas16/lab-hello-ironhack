import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feats from "../components/Feats";
import "../styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feats />
    </div>
  );
}

export default App;