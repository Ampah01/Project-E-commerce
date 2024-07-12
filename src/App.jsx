import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Login from "./Components/Login/Login.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import ProceedToCheckout from "./Pages/ProceedToCheckout/ProceedToCheckout.jsx";

export const CartContext = createContext();

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="bg-slate-50 min-h-[100vh]">
        <Login isOpen={showLogin} setShowLogin={setShowLogin} />
        <Navbar setShowLogin={setShowLogin} getTotalQuantity={getTotalQuantity} />
        <Routes>
          <Route
            path="/"
            element={<Home setShowLogin={setShowLogin} getTotalQuantity={getTotalQuantity} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} clearCart={clearCart} setCart={setCart} getTotalQuantity={getTotalQuantity} />}
          />
          <Route
            path="/checkout"
            element={<ProceedToCheckout cart={cart} getTotalQuantity={getTotalQuantity} getTotalPrice={getTotalPrice} clearCart={clearCart} />}
          />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
