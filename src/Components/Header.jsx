import React, { useState, useContext } from "react";
import logo from "./../assets/grocery.jpg";
import max_logo from "./../assets/g_logo.jpg";
import {
  HiOutlineShoppingCart,
  HiSun,
  HiMoon,
  HiOutlineSearch,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { ThemeContext } from "../App";

function Header() {
  const [activeLink, setActiveLink] = useState(0);
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleOnMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header
      className="flex items-center h-[70px] top-0 right-0 left-0 justify-between p-2 md:p-4 text-slate-50 shadow-md fixed"
      style={{
        background: `linear-gradient(to right, #0F513A, #0F513A)`,
        backgroundColor: "#0F513A",
      }}
    >
      <div className="flex-shrink-0">
        <img
          className="hidden md:block md:w-[170px] md:h-[60px] object-cover w-[80px]"
          src={logo}
          alt="Food logo"
        />
        <img
          className="md:hidden h-[40px] object-fill w-[20px] mt-2"
          src={max_logo}
          alt="Food logo"
        />
      </div>

      <div
        className={`lg:relative absolute lg:block lg:top-0 top-[10px] lg:right-[0] right-[-100%] bg-[#0F513A] min-h-[40vh] lg:min-h-[0] w-[50%] lg:w-[400px] rounded-bl-[50px] backdrop-blur-sm items-center transition-all duration-300 ${
          toggleMenu ? "right-[0]" : "right-[-100%]"
        }`}
      >
        <ul className="flex lg:py-0 py-12 gap-[4vh] lg:gap-[0] lg:space-x-6 lg:flex-row flex-col items-start lg:px-0 px-12 ">
          <li>
            <a
              href="#"
              className={`text-white font-semibold relative underline-animation transition duration-300 ease-in-out ${
                activeLink === 0 ? "underline-animation" : ""
              }`}
              onClick={() => handleLinkClick(0)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-white font-semibold underline-animation relative transition duration-300 ease-in-out ${
                activeLink === 1 ? "underline-animation" : ""
              }`}
              onClick={() => handleLinkClick(1)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-white font-semibold underline-animation relative transition duration-300 ease-in-out ${
                activeLink === 2 ? "underline-animation" : ""
              }`}
              onClick={() => handleLinkClick(2)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-white font-semibold underline-animation relative transition duration-300 ease-in-out ${
                activeLink === 3 ? "underline-animation" : ""
              }`}
              onClick={() => handleLinkClick(3)}
            >
              Contact
            </a>
          </li>
          <li>
            <button className="px-4 py-1 bg-slate-50 text-green-700 rounded-sm hover:bg-green-700 hover:text-slate-50 transition-all duration-300">
              Sign in
            </button>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <div className="md:w-full bg-slate-50 flex items-center mx-1">
          <input
            type="text"
            className="text-gray-700 md:w-full p-[5.6px] w-full placeholder-italic outline-none border-black bg-transparent px-2"
            placeholder="Search..."
          />
        </div>

        <button className="bg-green-700 text-xl border-2 border-green-700 -ml-2 py-[5.9px] px-2 border-1 text-slate-50">
          <HiOutlineSearch />
        </button>

        <HiOutlineShoppingCart className="text-slate-50 lg:text-[45px] text-[35px] cursor-pointer ml-4" />

        <div className="bg-green-700 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center ml-[-10px] -mt-2">
          0
        </div>

        <div className="px-2">
          {theme === "light" ? (
            <HiMoon
              className="text-[28px] bg-green-50 shadow-md rounded-full p-1 cursor-pointer text-[#333333] transition-all duration-300"
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
          {!toggleMenu ? (
            <HiMenu
              className="lg:hidden text-[35px] cursor-pointer transition-all duration-300"
              onClick={toggleOnMenu}
            />
          ) : (
            <HiX
              className="absolute cursor-pointer right-5 top-4 lg:hidden text-[35px] transition-all duration-300"
              onClick={toggleOnMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
