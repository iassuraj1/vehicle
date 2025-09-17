// import { useState } from "react";
// import { FaSearch, FaCalendarAlt } from "react-icons/fa";
// import "./SearchCar.css";

// function SearchCar() {
//   const [budget, setBudget] = useState(300000);
//   // const [maxBudget, setMaxBudget] = useState(15000000);

//   return (
//     <div className="search-container">
//       <h2 className="title">Search a Car</h2>

//       {/* Search Row */}
//       <div className="search-row">
//         <div className="input-group">
//           <input
//             className="list-search-input"
//             type="text"
//             placeholder="Search Cars"
//           />
//           <FaSearch className="icon" />
//         </div>
//         <select className="new-car-btn">
//           <option value="newcar">NEW CAR</option>
//           <option value="oldcar">OLD CAR</option>
//           </select>
//       </div>

//       {/* Dropdowns */}
//       <div className="dropdown-row">
//         <select>
//           <option>Make</option>
//           <option>Make</option>
//         </select>
//         <select>
//           <option>Model</option>
//           <option>XUV</option>
//         </select>
//         <div className="input-group">
//           <input className="date-input" type="text" placeholder="Year" />
//           <FaCalendarAlt className="icon" />
//         </div>
//       </div>

//       {/* Budget Slider */}
//           {/* Budget Slider */}
//       <div className="budget-section">
//         <label>Budget</label>
//         <div className="budget-values">
//           <span>SSP 300,000</span>
//           <span>SSP 15,000,000</span>
//         </div>
//         <input
//           type="range"
//           min="300000"
//           max="15000000"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//         />
//       </div>
//    </div>
//   );
// }

// export default SearchCar;



import React, { useEffect, useState } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { getCars } from "../../../services/carService"; // ✅ use same API
import "./SearchCar.css";

function SearchCar({ filters, setFilters }) {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        const cars = data.cars || [];

        // ✅ derive unique dropdown values from cars
        const uniqueMakes = [...new Set(cars.map((c) => c.make).filter(Boolean))];
        const uniqueModels = [...new Set(cars.map((c) => c.model).filter(Boolean))];
        const uniqueYears = [...new Set(cars.map((c) => c.year).filter(Boolean))];

        setMakes(uniqueMakes);
        setModels(uniqueModels);
        setYears(uniqueYears.sort((a, b) => b - a)); // newest first
      } catch (err) {
        console.error("Failed to fetch cars for filters", err);
      }
    };

    fetchCars();
  }, []);

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

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
            value={filters.searchText}
            onChange={(e) => handleChange("searchText", e.target.value)}
          />
          <FaSearch className="icon" />
        </div>
        <select
          className="new-car-btn"
          value={filters.carType}
          onChange={(e) => handleChange("carType", e.target.value)}
        >
          <option value="">All Cars</option>
          <option value="newcar">NEW CAR</option>
          <option value="oldcar">OLD CAR</option>
        </select>
      </div>

      {/* Dropdowns */}
      <div className="dropdown-row">
        <select
          value={filters.make}
          onChange={(e) => handleChange("make", e.target.value)}
        >
          <option value="">Make</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>

        <select
          value={filters.model}
          onChange={(e) => handleChange("model", e.target.value)}
        >
          <option value="">Model</option>
          {models
            .filter((m) =>
              filters.make
                ? m.toLowerCase().includes(filters.make.toLowerCase())
                : true
            )
            .map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>

        <div className="input-group">
          <select
            className="date-input"
            value={filters.year}
            onChange={(e) => handleChange("year", e.target.value)}
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <FaCalendarAlt className="icon" />
        </div>
      </div>

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
          value={filters.budget}
          onChange={(e) => handleChange("budget", Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default SearchCar;
