import React from "react";
import { FaChevronDown } from "react-icons/fa"; 
import "./sell_your_car_form.css";


const SellCarForm = () => {
  return (
    <div className="form-container">
      <h2>Sell your Car</h2>
      <form className="car-form">
        <div className="form-row">
          <div className="custom-select">
            <select>
              <option>Make</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Ford</option>
            </select>
            <FaChevronDown className="sellcar_dropdown-icon" />
          </div>

          <div className="custom-select">
            <select>
              <option>Model</option>
              <option>Corolla</option>
              <option>Civic</option>
              <option>Focus</option>
            </select>
            <FaChevronDown className="sellcar_dropdown-icon" />
          </div>
        </div>

        <div className="form-row">
          <div className="custom-select">
            <select>
              <option>Year of Manufacture</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
            <FaChevronDown className="sellcar_dropdown-icon" />
          </div>

          <div className="custom-select">
            <select>
              <option>Condition</option>
              <option>New</option>
              <option>Used</option>
            </select>
            <FaChevronDown className="sellcar_dropdown-icon" />
          </div>
        </div>

        <div className="form-row">
          <div className="custom-select">
            <select>
              <option>Fuel Type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
            </select>
            <FaChevronDown className="sellcar_dropdown-icon" />
          </div>

          <div className="custom-select">
            <select>
              <option>Transmission</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
            <FaChevronDown className="sellcar_dropdown-icon" />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Request Instant Valuation
        </button>
      </form>
    </div>
  );
};

export default SellCarForm;
