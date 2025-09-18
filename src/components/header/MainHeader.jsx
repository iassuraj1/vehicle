
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MainHeader.css";

import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import { logoutUser } from "../../services/authService";
import ContactForm from "../ContactPage";


export default function MainHeader() {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [registerOption, setRegisterOption] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isContactOpen, setIsContactOpen] = useState(false);

  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);

  const handleRegisterClick = (option) => {
    setRegisterOption(option);
    setShowMenu(false);
  };

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setRegisterOption("");
  };

  // Callback after login/signup success
  const handleLoginSignupSuccess = () => {
    setIsLoggedIn(true);
    setRegisterOption(""); // close modal
  };

  return (
    <header className="header">
      {/* Left side: logo */}
      <div className="header-left">
        <Link to="/">
          <img src="./HomePageImages/site_logo1.jpg" alt="logo" className="logo" />
        </Link>
      </div>

      {/* Right side */}
      <div className="header-right">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="lang-dropdown"
        >
          <option>English</option>
          <option>Arabic</option>
        </select>

        <button className="contact-btn" onClick={() => setIsContactOpen(true)}>CONTACT US</button>
        <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button className="register-btn" onClick={() => setShowMenu((prev) => !prev)}>
              Register ▾
            </button>

            {showMenu && (
              <div className="register-menu">
                <button onClick={() => handleRegisterClick("login")}>Login</button>
                <button onClick={() => handleRegisterClick("signup")}>Signup</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hamburger (mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lang-dropdown"
          >
            <option>English</option>
            <option>Arabic</option>
          </select>
          
         <button className="contact-btn" onClick={() => setIsContactOpen(true)}>CONTACT US</button>
        <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button className="register-btn" onClick={() => setShowMenu((prev) => !prev)}>
                Register ▾
              </button>
              {showMenu && (
                <div className="register-menu">
                  <button onClick={() => handleRegisterClick("login")}>Login</button>
                  <button onClick={() => handleRegisterClick("signup")}>Signup</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Render modals */}
      {registerOption === "login" && (
        <Login onClose={() => setRegisterOption("")} onLoginSuccess={handleLoginSignupSuccess} />
      )}
      {registerOption === "signup" && (
        <Signup onClose={() => setRegisterOption("")} onSignupSuccess={handleLoginSignupSuccess} />
      )}
    </header>
  );
}
