import React, { useState } from "react";
import NavBar from "./Navbar";
import "../index.css";
import { Route, Routes } from "react-router-dom";
import Cameras from "./Cameras";
import Lenses from "./Lenses";
import Other from "./Others";
import Home from "./Home";
import ShoppingCart from "./Shopping";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <>
      <NavBar itemCount={itemCount} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cameras" element={<Cameras/>} />
          <Route path="/Lenses" element={<Lenses/>} />
          <Route path="/Others" element={<Other/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart/>} />
        </Routes>
      </div>
    </>
  ); 
};
export default App;
