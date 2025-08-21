import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/buy-cars">Buy cars</Link>
        <Link to="/sell-cars">Sell cars</Link>
        <Link to="/car-listings">Car Listings</Link>
        <Link to="/car-details">Car Details</Link>
        <Link to="/car-accessories">Car Accessories</Link>
     

        <select>
          <option value="ssp">SSP</option>
          <option value="msp">MSP</option>
        </select>

       </div>
    </nav>
  );
}
