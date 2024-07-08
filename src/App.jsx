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

export const ThemeContext = createContext();
export const CartContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div
          className={`${theme} ${
            theme === "dark" ? "bg-[#333] text-white" : "bg-slate-50"
          } min-h-[100vh]`}
        >
          <Login isOpen={showLogin} setShowLogin={setShowLogin} />
          <Navbar
            setShowLogin={setShowLogin}
            getTotalQuantity={getTotalQuantity}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setShowLogin={setShowLogin}
                  getTotalQuantity={getTotalQuantity}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  getTotalQuantity={getTotalQuantity}
                />
              }
            />
          </Routes>
        </div>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
