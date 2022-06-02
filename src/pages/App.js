import React from "react";
import NavBar from "./Navbar";
import "../index.css";
import { Route, Routes } from "react-router-dom";
import Cameras from "./Cameras";
import Lenses from "./Lenses";
import Other from "./Others";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="/Cameras" element={<Cameras/>}></Route>
          <Route path="/Lenses" element={<Lenses/>}></Route>
          <Route path="/Others" element={<Other/>}></Route>
        </Routes>
      </div>
    </>
  ); 
};
export default App;
