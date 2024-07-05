import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import React, { useState, createContext, useEffect } from "react";
import Home from "./Pages/Home/Home";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#333] text-white" : "bg-slate-50"
        } min-h-[100vh]`}
      >
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
