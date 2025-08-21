import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./MainHeader.css"; // Import CSS

export default function MainHeader() {
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("English");
  const [registerOption, setRegisterOption] = useState("");

  return (
    <header className="header">
      
      {/* Left: Logo */}
      <div className="header-left">
        <img
          src="./HomePageImages/site_logo1.jpg"
          alt="logo"
          className="logo"
        />
        {/* <span className="brand">EJAR MOTORS</span> */}
      </div>

      {/* Middle: Search Section */}
      <div className="header-middle">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="dropdown"
        >
          <option value="">Select city</option>
          <option value="Dubai">Dubai</option>
          <option value="Abu Dhabi">Abu Dhabi</option>
          <option value="Sharjah">Sharjah</option>
        </select>

        <select className="dropdown">
          <option value="">Select by make</option>
          <option value="Toyota">Toyota</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
        </select>

        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      {/* Right: Controls */}
      <div className="header-right">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="lang-dropdown"
        >
          <option>English</option>
          <option>Arabic</option>
          <option>French</option>
        </select>

        <button className="contact-btn">CONTACT US</button>

        <select
          value={registerOption}
          onChange={(e) => setRegisterOption(e.target.value)}
          className="register-dropdown"
        >
          <option value="">Register</option>
          <option value="User">As User</option>
          <option value="Dealer">As Dealer</option>
        </select>
      </div>
    </header>
  );
}
