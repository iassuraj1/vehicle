// import "./Navbar.css";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav>
//       <div className="nav-links">
//         <NavLink to="/sell-cars">Sell cars</NavLink>
//         <NavLink to="/buy-cars">Buy cars</NavLink>
//         <NavLink to="/car-listings">Car Listings</NavLink>
//         <NavLink to="/car-details">Car Details</NavLink>
//         <NavLink to="/car-accessories">Car Accessories</NavLink>
     

//         <select id="mode_types">
//           <option value="ssp">SSP</option>
//           <option value="msp">MSP</option>
//         </select>

//        </div>
//     </nav>
//   );
// } 


import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
          to="/car-details" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Car Details
        </NavLink>

        <NavLink 
          to="/car-accessories" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Car Accessories
        </NavLink>

        <select id="mode_types">
          <option value="ssp">SSP</option>
          <option value="msp">MSP</option>
        </select>
      </div>
    </nav>
  );
}

