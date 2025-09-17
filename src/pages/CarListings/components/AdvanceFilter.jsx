
// import React, { useEffect, useRef, useState } from "react";
// import { FaSearch, FaStar } from "react-icons/fa";
// import { getCars } from "../../../services/carService"; // ✅ fetch API
// import ViewDetails from "../../../components/ViewCarDetails"; // ✅ popup
// import { Link } from "react-router-dom";
// import "./AdvanceFilter.css";

// const AdvanceFilter = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [brandFilters, setBrandFilters] = useState([]); // ✅ brand filter state
//   const [showAllFiltered, setShowAllFiltered] = useState(false); // ✅ toggle top2/all
//   const [loading, setLoading] = useState(true); // ✅ loading state
//   const [error, setError] = useState(null); // ✅ error state
//   const [searchBrand, setSearchBrand] = useState(""); // ✅ brand search state

//   const carListRef = useRef(null); // ✅ ref for outside click detection

//   // Available brands (static list or you could generate from cars)
//   const allBrands = ["Toyota", "Nissan", "Mitsubishi", "Isuzu", "Suzuki"];

//   // ✅ filter brands dynamically using search input
//   const visibleBrands = allBrands.filter((brand) =>
//     brand.toLowerCase().includes(searchBrand.toLowerCase())
//   );

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await getCars();
//         setCars(data.cars || []);
//       } catch (err) {
//         console.error("Failed to fetch cars", err);
//         setError("Failed to load cars. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCars();
//   }, []);

//   // ✅ Handle brand filter toggle
//   const handleBrandFilter = (brand) => {
//     setBrandFilters((prev) =>
//       prev.includes(brand)
//         ? prev.filter((b) => b !== brand)
//         : [...prev, brand]
//     );
//   };

//   // ✅ Apply filters based on car.make field
//   const filteredCars = cars.filter((car) =>
//     brandFilters.length > 0
//       ? brandFilters.some(
//           (brand) => car.make?.toLowerCase() === brand.toLowerCase()
//         )
//       : true
//   );

//   // ✅ Show either top 2 or all filtered cars
//   const carsToShow = showAllFiltered ? filteredCars : filteredCars.slice(0, 2);

//   // ✅ Close "View all" when clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         showAllFiltered &&
//         carListRef.current &&
//         !carListRef.current.contains(event.target)
//       ) {
//         setShowAllFiltered(false); // Close to top 2
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showAllFiltered]);

//   return (
//     <div className="container">
//       <div className="sub-container">
//         {/* Sidebar Filters */}
//         <aside className="filters">
//           <h2 className="filter-title">Advanced Filters</h2>
//           <hr className="horizontal_line" />

//           {/* Budget */}
//           <div className="filter-box">
//             <h3 className="filter-subtitle">Budget</h3>
//             <p className="range-label">SSP 300,000 - SSP 15,000,000</p>
//             <input
//               type="range"
//               min="300000"
//               max="15000000"
//               className="range-slider"
//             />
//           </div>

//           <hr className="horizontal_line" />

//           {/* Brand */}
//           <div className="filter-box">
//             <h3 className="filter-subtitle">Brand</h3>
//             <div className="ad_search-box">
//               <input
//                 type="text"
//                 placeholder="Search Brands"
//                 value={searchBrand}
//                 onChange={(e) => setSearchBrand(e.target.value)}
//               />
//               <button>
//                 <FaSearch />
//               </button>
//             </div>
//             <ul className="filter-list">
//               {visibleBrands.length > 0 ? (
//                 visibleBrands.map((brand) => (
//                   <li key={brand}>
//                     <input
//                       type="checkbox"
//                       checked={brandFilters.includes(brand)}
//                       onChange={() => handleBrandFilter(brand)}
//                     />{" "}
//                     {brand}
//                   </li>
//                 ))
//               ) : (
//                 <li className="no-result">No matching brands</li>
//               )}
//             </ul>
//           </div>

//           <hr className="horizontal_line" />

//           {/* ✅ See All Filters */}
//           <Link to="/buy-cars" className="see-more">
//             See all Filters
//           </Link>

//           {/* ✅ View all filtered cars */}
//           {filteredCars.length > 2 && (
//             <span
//               className="view-all"
//               onClick={() => setShowAllFiltered((prev) => !prev)}
//             >
//               {showAllFiltered
//                 ? "Show only top 2 cars"
//                 : "View all filtered cars"}
//             </span>
//           )}
//         </aside>

//         {/* Car Listings */}
//         <main className="car-listings" ref={carListRef}>
//           {loading ? (
//             <p className="loading-text">Loading cars...</p>
//           ) : error ? (
//             <p className="error-text">{error}</p>
//           ) : filteredCars.length === 0 ? (
//             <p>No cars match your filters.</p>
//           ) : (
//             carsToShow.map((car) => (
//               <div key={car._id} className="car-card">
//                 <img src={car.images?.[0]} alt={car.title} />
//                 <div className="car-info">
//                   <h3 className="car-title">{car.title}</h3>
//                   <p className="rating">
//                     <FaStar className="star" /> 4.5 |{" "}
//                     {Math.floor(Math.random() * 200)} Reviews
//                   </p>
//                   <p className="price">${car.price}</p>
//                   <p className="details">
//                     {car.kmDriven || 0} km • {car.fuel || "Petrol"} •{" "}
//                     {car.transmission || "Manual"}
//                   </p>
//                   <button className="btn" onClick={() => setSelectedCar(car)}>
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </main>
//       </div>

//       {/* ✅ View Details Popup */}
//       {selectedCar && (
//         <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
//       )}
//     </div>
//   );
// };

// export default AdvanceFilter;







import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { getCars } from "../../../services/carService"; // fetch cars from backend
import ViewDetails from "../../../components/ViewCarDetails";
import { Link } from "react-router-dom";
import "./AdvanceFilter.css";

const AdvanceFilter = ({ filters, setFilters }) => {
  const [cars, setCars] = useState([]); // ✅ initialize empty array
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAllFiltered, setShowAllFiltered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const carListRef = useRef(null);

  // Available brands
  const allBrands = ["Toyota", "Nissan", "Mitsubishi", "Isuzu", "Suzuki"];

  // ✅ Filter brands dynamically using search input
  const visibleBrands = allBrands.filter((brand) =>
    brand.toLowerCase().includes((filters.searchBrand || "").toLowerCase())
  );

  // ✅ Fetch cars from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars();
        setCars(data.cars || []);
      } catch (err) {
        console.error("Failed to fetch cars", err);
        setError("Failed to load cars. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  // ✅ Apply ALL filters: SearchCar + brand filters
  const filteredCars = (cars || []).filter((car) => {
    const matchesBrand =
      filters.brandFilters.length > 0
        ? filters.brandFilters.some(
            (brand) => car.make?.toLowerCase() === brand.toLowerCase()
          )
        : true;

    const matchesSearch = filters.searchText
      ? car.title?.toLowerCase().includes(filters.searchText.toLowerCase())
      : true;

    const matchesCarType = filters.carType
      ? car.type?.toLowerCase() === filters.carType.toLowerCase()
      : true;

    const matchesMake = filters.make
      ? car.make?.toLowerCase() === filters.make.toLowerCase()
      : true;

    const matchesModel = filters.model
      ? car.model?.toLowerCase() === filters.model.toLowerCase()
      : true;

    const matchesYear = filters.year
      ? String(car.year) === String(filters.year)
      : true;

    const matchesBudget = filters.budget
      ? Number(car.price) <= filters.budget
      : true;

    return (
      matchesBrand &&
      matchesSearch &&
      matchesCarType &&
      matchesMake &&
      matchesModel &&
      matchesYear &&
      matchesBudget
    );
  });

  const carsToShow = showAllFiltered ? filteredCars : filteredCars.slice(0, 2);

  // ✅ Close "View All" when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showAllFiltered &&
        carListRef.current &&
        !carListRef.current.contains(event.target)
      ) {
        setShowAllFiltered(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAllFiltered]);

  return (
    <div className="container">
      <div className="sub-container">
        {/* Sidebar Filters */}
        <aside className="filters">
          <h2 className="filter-title">Advanced Filters</h2>
          <hr className="horizontal_line" />

          {/* Budget */}
          <div className="filter-box">
            <h3 className="filter-subtitle">Budget</h3>
            <p className="range-label">SSP 300,000 - SSP 15,000,000</p>
            <input
              type="range"
              min="300000"
              max="15000000"
              className="range-slider"
              value={filters.budget}
              onChange={(e) =>
                setFilters({ ...filters, budget: Number(e.target.value) })
              }
            />
          </div>

          <hr className="horizontal_line" />

          {/* Brand */}
          <div className="filter-box">
            <h3 className="filter-subtitle">Brand</h3>
            <div className="ad_search-box">
              <input
                type="text"
                placeholder="Search Brands"
                value={filters.searchBrand || ""}
                onChange={(e) =>
                  setFilters({ ...filters, searchBrand: e.target.value })
                }
              />
              <button>
                <FaSearch />
              </button>
            </div>
            <ul className="filter-list">
              {visibleBrands.length > 0 ? (
                visibleBrands.map((brand) => (
                  <li key={brand}>
                    <input
                      type="checkbox"
                      checked={filters.brandFilters.includes(brand)}
                      onChange={() => {
                        setFilters((prev) => ({
                          ...prev,
                          brandFilters: prev.brandFilters.includes(brand)
                            ? prev.brandFilters.filter((b) => b !== brand)
                            : [...prev.brandFilters, brand],
                        }));
                      }}
                    />{" "}
                    {brand}
                  </li>
                ))
              ) : (
                <li className="no-result">No matching brands</li>
              )}
            </ul>
          </div>

          <hr className="horizontal_line" />

          {/* See All Filters */}
          <Link to="/buy-cars" className="see-more">
            See all Filters
          </Link>

          {/* View all filtered cars */}
          {filteredCars.length > 2 && (
            <span
              className="view-all"
              onClick={() => setShowAllFiltered((prev) => !prev)}
            >
              {showAllFiltered
                ? "Show only top 2 cars"
                : "View all filtered cars"}
            </span>
          )}
        </aside>

        {/* Car Listings */}
        <main className="car-listings" ref={carListRef}>
          {loading ? (
            <p className="loading-text">Loading cars...</p>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : filteredCars.length === 0 ? (
            <p>No cars match your filters.</p>
          ) : (
            carsToShow.map((car) => (
              <div key={car._id} className="car-card">
                <img src={car.images?.[0]} alt={car.title} />
                <div className="car-info">
                  <h3 className="car-title">{car.title}</h3>
                  <p className="rating">
                    <FaStar className="star" /> 4.5 |{" "}
                    {Math.floor(Math.random() * 200)} Reviews
                  </p>
                  <p className="price">${car.price}</p>
                  <p className="details">
                    {car.kmDriven || 0} km • {car.fuel || "Petrol"} •{" "}
                    {car.transmission || "Manual"}
                  </p>
                  <button className="btn" onClick={() => setSelectedCar(car)}>
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      </div>

      {/* View Details Popup */}
      {selectedCar && (
        <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
};

export default AdvanceFilter;
