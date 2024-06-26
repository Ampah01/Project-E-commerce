import "./App.css";
import Navbar from "./Components/Navbar";
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
          theme === "dark" ? "bg-[#333333] text-white" : null
        } min-h-[100vh]`}
      >
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
