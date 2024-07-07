import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import kingdom from "../../assets/Kingdom.jpg";
import logo from "../../assets/sm_kingdom.jpg";
import {
  HiOutlineShoppingCart,
  HiSun,
  HiMoon,
  HiOutlineSearch,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { ThemeContext } from "../../App";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const location = useLocation();

  const handleQuantity = () => {
    setCartQuantity((c) => c + 1);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleOnMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div
      className="flex items-center top-0 fixed w-full justify-between lg:py-4 md:p-4 text-slate-50 lg:px-[60px] shadow-md z-50"
      style={{ backgroundColor: "#0F513A" }}
    >
      <div className="flex-shrink-0">
        <NavLink to="/">
          <img
            className="hidden md:block md:w-[170px] md:h-[60px] object-cover w-[80px] cursor-pointer"
            src={kingdom}
            alt="logo"
          />
          <img
            className="md:hidden h-[40px] object-cover w-[40px] mt-2 ml-2 cursor-pointer"
            src={logo}
            alt="Food logo"
          />
        </NavLink>
      </div>

      <div
        className={`lg:relative absolute lg:block lg:top-0 top-0 lg:right-[0] right-[-100%] bg-[#0F513A] min-h-[40vh] lg:min-h-[0] w-[50%] lg:w-[400px] rounded-bl-[50px] backdrop-blur-sm items-center transition-all duration-300 z-50 ${
          toggleMenu ? "right-[0]" : "right-[-100%]"
        }`}
      >
        <HiX
          className="cursor-pointer absolute right-8 top-5 lg:hidden text-[35px] transition-all duration-300"
          onClick={toggleOnMenu}
        />
        <ul className="flex lg:py-0 py-12 gap-[4vh] lg:gap-0 lg:space-x-5 lg:flex-row flex-col items-start lg:px-0 px-10">
          <li
            className={`text-white cursor-pointer font-semibold relative transition duration-300 ease-in-out ${
              isActive("/") ? "active-item" : ""
            }`}
            onClick={() => setToggleMenu(false)}
          >
            <NavLink
              to="/"
              onClick={() => setToggleMenu(false)}
              className={`nav-link ${isActive("/") ? "active-link" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li
            className={`text-white cursor-pointer font-semibold relative transition duration-300 ease-in-out ${
              isActive("/about") ? "active-item" : ""
            }`}
            onClick={() => setToggleMenu(false)}
          >
            <NavLink
              to="/about"
              onClick={() => setToggleMenu(false)}
              className={`nav-link ${isActive("/about") ? "active-link" : ""}`}
            >
              About us
            </NavLink>
          </li>
          <li
            className={`text-white cursor-pointer font-semibold relative transition duration-300 ease-in-out ${
              isActive("/services") ? "active-item" : ""
            }`}
            onClick={() => setToggleMenu(false)}
          >
            <NavLink
              to="/services"
              onClick={() => setToggleMenu(false)}
              className={`nav-link ${
                isActive("/services") ? "active-link" : ""
              }`}
            >
              Services
            </NavLink>
          </li>
          <li
            className={`text-white cursor-pointer font-semibold relative transition duration-300 ease-in-out ${
              isActive("/contact") ? "active-item" : ""
            }`}
            onClick={() => setToggleMenu(false)}
          >
            <NavLink
              to="/contact"
              onClick={() => setToggleMenu(false)}
              className={`nav-link ${
                isActive("/contact") ? "active-link" : ""
              }`}
            >
              Contact
            </NavLink>
          </li>
          
        </ul>
      </div>

      <div className="flex items-center">
      <button className="px-4 py-1 bg-slate-50 text-green-700 rounded-sm hover:bg-green-700 hover:text-slate-50 transition-all duration-300">
              Sign in
            </button>

        <HiOutlineShoppingCart className="text-slate-50 lg:text-[32px] text-[35px] cursor-pointer ml-4" />

        <div className="bg-green-700 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center ml-[-16px] -mt-3">
          {cartQuantity}
        </div>

        <div className="px-2">
          {theme === "light" ? (
            <HiMoon
              className="text-[28px] bg-slate-50 shadow-md rounded-full p-1 cursor-pointer text-[#333333] transition-all duration-300"
              onClick={toggleTheme}
            />
          ) : (
            <HiSun
              className="text-[28px] bg-green-700 shadow-md rounded-full p-1 cursor-pointer text-slate-50 transition-all duration-300"
              onClick={toggleTheme}
            />
          )}
        </div>

        <div>
          <HiMenu
            className="lg:hidden text-[35px] cursor-pointer transition-all duration-300"
            onClick={toggleOnMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
