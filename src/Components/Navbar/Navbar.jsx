import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import kingdom from "../../assets/Kingdom.jpg";
import logo from "../../assets/sm_kingdom.jpg";
import { PiShoppingCartSimple } from "react-icons/pi";
import {
  HiOutlineUserCircle,
  HiMenu,
  HiX,
} from "react-icons/hi";

function Navbar({ setShowLogin, getTotalQuantity }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation();

  const toggleOnMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div
      className="flex items-center fixed top-0 w-full justify-between lg:py-4 md:p-4 text-slate-50 lg:px-[60px] shadow-md z-[100] md:relative"
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
        className={`md:relative absolute md:block md:top-0 top-0 md:right-[0] right-[-100%] min-h-[100vh] md:min-h-[0] w-[50%] md:w-[400px] bg-[#0F513A] backdrop-blur-2xl items-center transition-all duration-300 z-50 ${
          toggleMenu ? "right-[0]" : "right-[-100%]"
        }`}
      >
        <HiX
          className="cursor-pointer absolute right-8 top-5 md:hidden text-[30px] transition-all duration-300"
          onClick={toggleOnMenu}
        />
        <ul className="flex md:py-0 py-12 gap-[4vh] lg:gap-0 lg:space-x-5 md:flex-row flex-col items-start md:px-0 px-8">
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
        <div>
          <button
            onClick={() => setShowLogin(true)}
            className="px-2 py-2 bg-transparent md:text-[17px] lg:text[18px] text-white rounded-sm hover:bg-green-700 hover:border-green-700 hover:text-slate-50 transition-all duration-300 lg:block hidden mr-2"
          >
            Sign in
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="px-2 py-1 text-white hover:text-slate-50 transition-all duration-300 block lg:hidden "
          >
            <HiOutlineUserCircle className="text-slate-50 text-[29px] cursor-pointer" />
          </button>
        </div>
        <NavLink to="/cart">
          <div className="cursor-pointer relative">
            <PiShoppingCartSimple className="text-[30px] font-extralight lg:text-[30px] md:text-[30px] relative -mr-1" />
            <div className="bg-green-700 absolute text-slate-100 text-md lg:text-lg font-semibold w-5 h-5 flex items-center rounded-full justify-center -mt-9 ml-2">
              {getTotalQuantity()}
            </div>
          </div>
        </NavLink>

        <div>
          <HiMenu
            className="md:hidden text-[30px] ml-4 mr-2 cursor-pointer transition-all duration-300"
            onClick={toggleOnMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
