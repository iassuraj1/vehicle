import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../CurrencyContext"; // ✅ import context

export default function Navbar() {
  const { currency, setCurrency } = useContext(CurrencyContext); // ✅ access global state

  return (
    <nav>
      <div className="nav-links">
        <NavLink 
          to="/sell-cars" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Sell Cars
        </NavLink>

        <NavLink 
          to="/buy-cars" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Buy Cars
        </NavLink>

        <NavLink 
          to="/car-listings" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Car Listings
        </NavLink>

        <NavLink 
          to="/car-accessories" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Car Accessories
        </NavLink>

        {/* ✅ Dropdown connected with global currency */}
        <select
          id="mode_types"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="SSP">SSP</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </nav>
  );
}
