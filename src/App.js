import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ViewProduct from "./components/ViewProduct";

const App = () => {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/viewproduct" element={<ViewProduct />} />
          </Routes>
      </Router>
    </>
  );
};

export default App;
