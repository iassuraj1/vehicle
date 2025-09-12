import { useState } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import "./SearchCar.css";

function SearchCar() {
  const [budget, setBudget] = useState(300000);
  // const [maxBudget, setMaxBudget] = useState(15000000);

  return (
    <div className="search-container">
      <h2 className="title">Search a Car</h2>

      {/* Search Row */}
      <div className="search-row">
        <div className="input-group">
          <input
            className="list-search-input"
            type="text"
            placeholder="Search Cars"
          />
          <FaSearch className="icon" />
        </div>
        <select className="new-car-btn">
          <option value="newcar">NEW CAR</option>
          <option value="oldcar">OLD CAR</option>
          </select>
      </div>

      {/* Dropdowns */}
      <div className="dropdown-row">
        <select>
          <option>Make</option>
        </select>
        <select>
          <option>Model</option>
        </select>
        <div className="input-group">
          <input className="date-input" type="text" placeholder="Year" />
          <FaCalendarAlt className="icon" />
        </div>
      </div>

      {/* Budget Slider */}
          {/* Budget Slider */}
      <div className="budget-section">
        <label>Budget</label>
        <div className="budget-values">
          <span>SSP 300,000</span>
          <span>SSP 15,000,000</span>
        </div>
        <input
          type="range"
          min="300000"
          max="15000000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
   </div>
  );
}

export default SearchCar;
