import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Context";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import 'emoji-picker-element';
import "./App.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
