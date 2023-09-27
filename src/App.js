import React from "react";
import { Navbar, DisplayImages } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pages-container">
        <DisplayImages />
      </div>
    </div>
  );
}

export default App;
