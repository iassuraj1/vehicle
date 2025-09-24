

// import React, { useEffect, useRef, useState, useContext } from "react";
// import { FaSearch, FaStar } from "react-icons/fa";
// import { getCars } from "../../../services/carService"; 
// import ViewDetails from "../../../components/ViewCarDetails";
// import { Link } from "react-router-dom";
// import { CurrencyContext } from "../../../components/CurrencyContext"; // ✅ import
// import "./AdvanceFilter.css";


// const AdvanceFilter = ({ filters, setFilters }) => {
//   const [cars, setCars] = useState([]); 
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [showAllFiltered, setShowAllFiltered] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { currency } = useContext(CurrencyContext); // ✅ use global currency

//   const carListRef = useRef(null);



//   // Available brands
//   const allBrands = ["Toyota", "Hyundai", "Subaru", "Audi", "Honda","Mercedes Benz"];

//   // ✅ Filter brands dynamically using search input
//   const visibleBrands = allBrands.filter((brand) =>
//     brand.toLowerCase().includes((filters.searchBrand || "").toLowerCase())
//   );

//   // ✅ Fetch cars from backend
//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         setLoading(true);
//         const data = await getCars();

//         // Add both SSP + USD price
//         const carsWithPrices = (data.cars || []).map((car) => ({
//           ...car,
//           sspprice: car.sspprice,
//           usdprice: car.usdprice ,
//         }));

//         setCars(carsWithPrices);
//       } catch (err) {
//         console.error("Failed to fetch cars", err);
//         setError("Failed to load cars. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCars();
//   }, []);

//   // ✅ Apply ALL filters
//   const filteredCars = (cars || []).filter((car) => {
//     const matchesBrand =
//       filters.brandFilters.length > 0
//         ? filters.brandFilters.some(
//             (brand) => car.make?.toLowerCase() === brand.toLowerCase()
//           )
//         : true;

//     const matchesSearch = filters.searchText
//       ? car.title?.toLowerCase().includes(filters.searchText.toLowerCase())
//       : true;

//     const matchesCarType = filters.carType
//       ? car.type?.toLowerCase() === filters.carType.toLowerCase()
//       : true;

//     const matchesMake = filters.make
//       ? car.make?.toLowerCase() === filters.make.toLowerCase()
//       : true;

//     const matchesModel = filters.model
//       ? car.model?.toLowerCase() === filters.model.toLowerCase()
//       : true;

//     const matchesYear = filters.year
//       ? String(car.year) === String(filters.year)
//       : true;

//     const matchesBudget = filters.budget
//       ? Number(car.price) <= filters.budget
//       : true;

//     return (
//       matchesBrand &&
//       matchesSearch &&
//       matchesCarType &&
//       matchesMake &&
//       matchesModel &&
//       matchesYear &&
//       matchesBudget
//     );
//   });

//   const carsToShow = showAllFiltered ? filteredCars : filteredCars.slice(0, 2);

//   // ✅ Close "View All" when clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         showAllFiltered &&
//         carListRef.current &&
//         !carListRef.current.contains(event.target)
//       ) {
//         setShowAllFiltered(false);
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
//               value={filters.budget}
//               onChange={(e) =>
//                 setFilters({ ...filters, budget: Number(e.target.value) })
//               }
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
//                 value={filters.searchBrand || ""}
//                 onChange={(e) =>
//                   setFilters({ ...filters, searchBrand: e.target.value })
//                 }
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
//                       checked={filters.brandFilters.includes(brand)}
//                       onChange={() => {
//                         setFilters((prev) => ({
//                           ...prev,
//                           brandFilters: prev.brandFilters.includes(brand)
//                             ? prev.brandFilters.filter((b) => b !== brand)
//                             : [...prev.brandFilters, brand],
//                         }));
//                       }}
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

//           {/* See All Filters */}
//           <Link to="/buy-cars" className="see-more">
//             See all Filters
//           </Link>

//           {/* View all filtered cars */}
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
//             carsToShow.map((car) => {
//               const price =
//                 currency === "USD" ? car.usdprice : car.sspprice;

//               return (
//                 <div key={car._id} className="car-card">
//                   <img src={car.images?.[0]} alt={car.title} />
//                   <div className="car-info">
//                     <h3 className="car-title">{car.title}</h3>
//                     <p className="rating">
//                       <FaStar className="star" /> 4.5 |{" "}
//                       {Math.floor(Math.random() * 200)} Reviews
//                     </p>
//                     <p className="price">
//                       {currency} {Number(price).toLocaleString()}
//                     </p>
//                     <p className="details">
//                       {car.kmDriven || 0} km • {car.fuel || "Petrol"} •{" "}
//                       {car.transmission || "Manual"}
//                     </p>
//                     <button className="btn" onClick={() => setSelectedCar(car)}>
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </main>
//       </div>

//       {/* View Details Popup */}
//       {selectedCar && (
//         <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
//       )}
//     </div>
//   );
// };

// export default AdvanceFilter;












import React, { useEffect, useRef, useState, useContext } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { getCars } from "../../../services/carService";
import ViewDetails from "../../../components/ViewCarDetails";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../../../components/CurrencyContext"; 
import "./AdvanceFilter.css";

const AdvanceFilter = ({ filters, setFilters }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAllFiltered, setShowAllFiltered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currency } = useContext(CurrencyContext); 
  const carListRef = useRef(null);

  // ✅ dynamic min/max price
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [priceBuckets, setPriceBuckets] = useState([]);

  // Available brands
  const allBrands = ["Toyota", "Hyundai", "Subaru", "Audi", "Honda", "Mercedes Benz"];

  const visibleBrands = allBrands.filter((brand) =>
    brand.toLowerCase().includes((filters.searchBrand || "").toLowerCase())
  );

  // ✅ Fetch cars from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars();

        const carsWithPrices = (data.cars || []).map((car) => ({
          ...car,
          sspprice: car.sspprice,
          usdprice: car.usdprice,
        }));

        setCars(carsWithPrices);
      } catch (err) {
        console.error("Failed to fetch cars", err);
        setError("Failed to load cars. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  // ✅ update min & max dynamically when cars/currency changes
  useEffect(() => {
    if (cars.length > 0) {
      const prices = cars.map((car) =>
        currency === "USD" ? car.usdprice : car.sspprice
      );

      const min = Math.min(...prices);
      const max = Math.max(...prices);

      setPriceRange({ min, max });

      // ✅ divide into 3-4 buckets dynamically
     // ✅ Create smaller price buckets (e.g., step = 25000)
        const step = 25000;  // <-- choose your own step size
        const buckets = [];
        for (let i = min; i < max; i += step) {
          const rangeEnd = Math.min(i + step, max);
          buckets.push({ min: i, max: rangeEnd });
        }
        setPriceBuckets(buckets);


      // reset budget if invalid
      if (!filters.budget || filters.budget < min || filters.budget > max) {
        setFilters((prev) => ({ ...prev, budget: max }));
      }
    }
  }, [cars, currency, filters.budget, setFilters]);

  // ✅ Apply ALL filters
  const filteredCars = (cars || []).filter((car) => {
    const price = currency === "USD" ? car.usdprice : car.sspprice;

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

    const matchesBudget = filters.budget ? Number(price) <= filters.budget : true;

    const matchesBucket =
      filters.budgetBuckets && filters.budgetBuckets.length > 0
        ? filters.budgetBuckets.some(
            (bucket) => price >= bucket.min && price <= bucket.max
          )
        : true;

    return (
      matchesBrand &&
      matchesSearch &&
      matchesCarType &&
      matchesMake &&
      matchesModel &&
      matchesYear &&
      matchesBudget &&
      matchesBucket
    );
  });

  const carsToShow = showAllFiltered ? filteredCars : filteredCars.slice(0, 2);

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
            <p className="range-label">
              {currency} {priceRange.min.toLocaleString()} - {currency}{" "}
              {priceRange.max.toLocaleString()}
            </p>
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              className="range-slider"
              value={filters.budget || priceRange.max}
              onChange={(e) =>
                setFilters({ ...filters, budget: Number(e.target.value) })
              }
            />
            <p>
              Selected: {currency}{" "}
              {filters.budget?.toLocaleString() || priceRange.max.toLocaleString()}
            </p>

            {/* ✅ Checkbox Buckets (show only top 4) */}
            <div className="buycar-checkbox-group" style={{ marginTop: 8 }}>
              {priceBuckets.slice(0, 4).map((bucket, idx) => (
                <label key={idx} className="buycar-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.budgetBuckets?.some(
                      (b) => b.min === bucket.min && b.max === bucket.max
                    )}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters((prev) => ({
                          ...prev,
                          budgetBuckets: [...(prev.budgetBuckets || []), bucket],
                        }));
                      } else {
                        setFilters((prev) => ({
                          ...prev,
                          budgetBuckets: (prev.budgetBuckets || []).filter(
                            (b) => !(b.min === bucket.min && b.max === bucket.max)
                          ),
                        }));
                      }
                    }}
                  />{" "}
                  {currency} {bucket.min.toLocaleString()} - {currency}{" "}
                  {bucket.max.toLocaleString()}
                </label>
              ))}
            </div>

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

          <Link to="/buy-cars" className="see-more">
            See all Filters
          </Link>

          {filteredCars.length > 2 && (
            <span
              className="view-all-filters"
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
            carsToShow.map((car) => {
              const price = currency === "USD" ? car.usdprice : car.sspprice;

              return (
                <div key={car._id} className="car-card">
                  <img src={car.images?.[0]} alt={car.title} />
                  <div className="car-info">
                    <h3 className="car-title">{car.title}</h3>
                    <p className="rating">
                      <FaStar className="star" /> 4.5 |{" "}
                      {Math.floor(Math.random() * 200)} Reviews
                    </p>
                    <p className="price">
                      {currency} {Number(price).toLocaleString()}
                    </p>
                    <p className="details">
                      {car.kmDriven || 0} km • {car.fuel || "Petrol"} •{" "}
                      {car.transmission || "Manual"}
                    </p>
                    <button className="btn" onClick={() => setSelectedCar(car)}>
                      View Details
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </main>
      </div>

      {selectedCar && (
        <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
};

export default AdvanceFilter;
