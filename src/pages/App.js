import React, { useState } from "react";
import NavBar from "./Navbar";
import "../index.css";
import { Route, Routes } from "react-router-dom";
import Cameras from "./Cameras";
import Lenses from "./Lenses";
import Other from "./Others";
import Home from "./Home";
import ShoppingCart from "./Shopping";

import DM3 from "./Pictures/5DM3.webp";
import DM4 from "./Pictures/5DM4.webp";
import OM3 from "./Pictures/1DXM3.webp";
import A7R3 from "./Pictures/A7R3.jpg";
import A7R4 from "./Pictures/A7R4.jpeg";
import A74 from "./Pictures/A74.png";

import C18 from "./Pictures/C18.jpg";
import C70 from "./Pictures/C70.jpg";
import C200 from "./Pictures/C200.jpg";
import S16 from "./Pictures/S16.jpg";
import S70 from "./Pictures/S70.jpg";


const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const[cameras] = useState([
    {
      id: 1,
      name: "Canon EOS 5D Mark III",
      price: "500.00",
      img : DM3,
    },
    {
      id: 2,
      name: "Canon EOS 5D Mark IV",
      price: "2499.99",
      img : DM4,
    },
    {
      id: 3,
      name: "Canon EOS 1D X Mark III",
      price: "7109.00",
      img : OM3,
    },
    {
      id: 4,
      name: "Sony A7R III",
      price: "2198.00",
      img : A7R3,
    },
    {
      id: 5,
      name: "Sony A7R IV",
      price: "2999.99",
      img : A7R4,
    },
    {
      id: 6,
      name: "Sony A7 IV",
      price: "2489.00",
      img : A74,
    },
  ]);

  const[lenses] = useState([
    {
      id: 1,
      name: "Canon EF-S 18-55mm f/3.5-5.6 IS STM",
      price: "200.00",
    },
    {
      id: 2,
      name: "Canon EF-S 70-200mm f/2.8 IS STM",
      price: "1,500.00",
    },
    {
      id: 3,
      name: "Canon EF 20-70mm f/2.8 IS STM",
      price: "900.00",
    },
    {
      id: 4,
      name: "Sony FE 24-70mm f/2.8 GM",
      price: "2,299.99",
    },
    {
      id: 5,
      name: "Sony FE 85mm f/1.8 GM",
      price: "1,499.99",
    },
    {
      id: 6,
      name: "Sony FE 16-35mm f/2.8 GM",
      price: "1,299.99",
    },
  ]);
  const[allProducts] = useState([
    ...cameras, 
    ...lenses]);

  const[cart, setCart] = useState([]);
  const[total, setTotal] = useState(0);
  return (
    <>
      <NavBar itemCount={itemCount} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cameras" element={<Cameras cameras={cameras} total={total} setTotal={setTotal} setItemCount={setItemCount} setCart={setCart} itemCount={itemCount}/>} />
          <Route path="/Lenses" element={<Lenses lenses={lenses} setTotal={setTotal} setCart={setCart}/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart cart={cart} total={total}/>} />
        </Routes>
      </div>
    </>
  ); 
};
export default App;
