import React, { useState } from "react";
import {  FaBars, FaTimes } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi"; 
import "./MainHeader.css";
import { Link } from "react-router-dom";

// const SearchBox = ({ placeholder, onChange }) => {
//   return (
//     <div className="search-box">
     
//       <input  
//         type="text"
//         placeholder={placeholder || "Select by make"}
//         onChange={onChange}
//       />
//        <FiSearch className="search-icon" />
//     </div>
//   );
// };

export default function MainHeader() {
  // const [city, setCity] = useState("");
  const [language, setLanguage] = useState("English");
  const [registerOption, setRegisterOption] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <header className="header">
      {/* Left side: logo + city + search (desktop/tablet), only logo on mobile */}
      <div className="header-left">

        <Link to="/">
          <img
            src="./HomePageImages/site_logo1.jpg"
            alt="logo"
            className="logo"
          />
        </Link>

        {/* Hidden on mobile, visible on desktop/tablet */}
        {/* <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="dropdown header-left-city"
        >
          <option value="">Select city</option>
          <option value="Dubai">Dubai</option>
          <option value="Abu Dhabi">Abu Dhabi</option>
          <option value="Sharjah">Sharjah</option>
        </select>

        <SearchBox placeholder="Select by make" /> */}
      </div>

      {/* Right side: visible on desktop/tablet */}
      <div className="header-right">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="lang-dropdown"
        >
          <option>English</option>
          <option>Arabic</option>
          {/* <option>French</option> */}
        </select>

        <button className="contact-btn">CONTACT US</button>

        <select
          value={registerOption}
          onChange={(e) => setRegisterOption(e.target.value)}
          className="register-dropdown"
        >
          <option value="login">Login</option>
          <option value="signout">Sign out</option>
    
        </select>
      </div>

      {/* Hamburger (only mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {/* <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="dropdown"
          >
            <option value="">Select city</option>
            <option value="Dubai">Dubai</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Sharjah">Sharjah</option>
          </select>

          <SearchBox placeholder="Select by make" /> */}

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lang-dropdown"
          >
            <option>English</option>
            <option>Arabic</option>
       
          </select>

          <button className="contact-btn">CONTACT US</button>

          <select
            value={registerOption}
            onChange={(e) => setRegisterOption(e.target.value)}
            className="register-dropdown"
          >
            <option value="login">Login</option>
            <option value="signout">Sign out</option>
          </select>
        </div>
      )}
    </header>
  );
}
