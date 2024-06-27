import React, { useState, useContext } from "react";
import kingdom from "./../assets/Kingdom.jpg";
import logo from "./../assets/sm_kingdom.jpg";
import {
  HiOutlineShoppingCart,
  HiSun,
  HiMoon,
  HiOutlineSearch,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { ThemeContext } from "../App";

function Navbar() {
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleOnMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div
      className="flex items-center top-0  fixed w-full justify-between lg:py-4 md:p-4 text-slate-50 lg:px-[60px] shadow-md  z-50"
      style={{
        backgroundColor: "#0F513A",
      }}
    >
      <div className="flex-shrink-0">
        <img
          className="hidden md:block md:w-[170px] mr-3 md:h-[60px] object-cover w-[80px]"
          src={kingdom}
          alt="logo"
        />
        <img
          className="md:hidden h-[40px] object-cover w-[40px] mt-2 ml-2 "
          src={logo}
          alt="Food logo"
        />
      </div>

      <div
        className={`lg:relative absolute lg:block lg:top-0 top-0 lg:right-[0] right-[-100%] bg-[#0F513A] min-h-[40vh] lg:min-h-[0] w-[50%] lg:w-[400px] rounded-bl-[50px] backdrop-blur-sm items-center transition-all duration-300 z-50 ${
          toggleMenu ? "right-[0]" : "right-[-100%]"
        } `}
        
      >
        <HiX
            className="cursor-pointer absolute right-8 top-5 lg:hidden text-[35px] transition-all duration-300"
            onClick={toggleOnMenu}
          />
        <ul className="flex lg:py-0 py-12 gap-[4vh] lg:gap-[0] lg:space-x-5 lg:flex-row flex-col items-start lg:px-0 px-10 ">
          <li
            className={`text-white cursor-pointer font-semibold relative underline-animation transition duration-300 ease-in-out ${
              active === "home"
                ? "after:-bottom-1 after:w-full after:absolute after:bg-white after:transition-all after:duration-300 after:ease-in-out"
                : ""
            }`}
            onClick={() => setActive("home")}
          >
            Home
          </li>
          <li
            className={`text-white cursor-pointer font-semibold underline-animation relative transition duration-300 ease-in-out ${
              active === "about"
                ? "after:-bottom-1 after:w-full after:absolute after:bg-white after:transition-all after:duration-300 after:ease-in-out"
                : ""
            }`}
            onClick={() => setActive("about")}
          >
            About
          </li>
          <li
            className={`text-white cursor-pointer font-semibold underline-animation relative transition duration-300 ease-in-out ${
              active === "service"
                ? "after:-bottom-1 after:w-full after:absolute after:bg-white after:transition-all after:duration-300 after:ease-in-out"
                : ""
            }`}
            onClick={() => setActive("service")}
          >
            Services
          </li>
          <li
            className={`text-white cursor-pointer font-semibold underline-animation relative transition duration-300 ease-in-out ${
              active === "contact"
                ? "after:-bottom-1 after:w-full after:absolute after:bg-white after:transition-all after:duration-300 after:ease-in-out"
                : ""
            }`}
            onClick={() => setActive("contact")}
          >
            Contact
          </li>
          <li>
            <button className="px-4 py-1 bg-slate-50 text-green-700 rounded-sm hover:bg-green-700 hover:text-slate-50 transition-all duration-300">
              Sign in
            </button>
          </li>
        </ul>
      </div>

      <div className="flex items-center ">
        <div className="relative px-1 z-10">
          <input
            type="text"
            className={`w-full p-1 rounded-full dark:bg-transparent outline-none px-2 ${theme === 'dark' ? 'text-white bg-[#333333]' : 'text-gray-700 bg-slate-100'}`}
            placeholder="Search..."
          />
          <button className="absolute rounded-r-full w-8 right-1 top-1/2 -translate-y-1/2 p-2 bg-green-700">
            <HiOutlineSearch />
          </button>
        </div>

        <HiOutlineShoppingCart className="text-slate-50 lg:text-[38px] text-[35px] cursor-pointer ml-4" />

        <div className="bg-green-700 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center ml-[-16px] -mt-3">
          0
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
