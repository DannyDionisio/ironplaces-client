import React from "react";
import './index.css';
import './App.css';

import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-container">
          <Navbar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
