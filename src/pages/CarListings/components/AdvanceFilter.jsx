// import React from "react";
// import { FaSearch,  FaStar } from "react-icons/fa";
// import toyotaImg from "../../../assets/CarListingImage/toyota.jpg";
// import mercedesImg from "../../../assets/CarListingImage/Mercedes1.jpg";
// import "./AdvanceFilter.css";
// import { Link } from "react-router-dom";


// // FaCar, FaMoneyBill,
// const CarListing = () => {
//   return (
    

//           <div className="container">
//             {/* Sidebar Filters */}
//             <div className="sub-container">
              
//               <aside className="filters">
//                 <h2 className="filter-title">Advanced Filters</h2>
//                 <hr className="horizontal_line"/>
//                 {/* Budget */}
//                 <div className="filter-box">
//                   <h3 className="filter-subtitle">Budget</h3>
                  
//                   <p className="range-label">SSP 300,000 - SSP 15,000,000</p>
//                   <input type="range" min="300000" max="15000000" className="range-slider" />
//                   <p className="ad_description">Or select from the range below</p>
//                   <ul className="filter-list">
//                     <li><input type="checkbox" /> 7.85L – 15.7L SSP <span>(3)</span></li>
//                     <li><input type="checkbox" /> 15.7L – 23.55L SSP <span>(4)</span></li>
//                     <li><input type="checkbox" /> 23.55L – 31.4L SSP <span>(6)</span></li>
//                     <li><input type="checkbox" /> 31.4L – 54.95L SSP <span>(2)</span></li>
//                   </ul>
//                 </div>
//             <hr className="horizontal_line"/>
//                 {/* Brand */}
//                 <div className="filter-box">
//                   <h3 className="filter-subtitle">Brand</h3>
//                   <div className="ad_search-box">
//                     <input type="text" placeholder="Search Brands" />
//                     <button><FaSearch /></button>
//                   </div>
//                   <ul className="filter-list">
//                     <li><input type="checkbox" /> Toyota <span>(3)</span></li>
//                     <li><input type="checkbox" /> Nissan <span>(4)</span></li>
//                     <li><input type="checkbox" /> Mitsubishi <span>(4)</span></li>
//                     <li><input type="checkbox" /> Isuzu <span>(4)</span></li>
//                     <li><input type="checkbox" /> Suzuki <span>(4)</span></li>
//                   </ul>
                
//                 </div>
//                   <hr className="horizontal_line"/>
//                   <Link to="/buy-cars" className="see-more">See all Filters ⌄</Link>
//               </aside>

//               {/* Car Listings */}
//               <main className="car-listings">
//                 {/* Car 1 */}
//                 <div className="car-card">
//                   <img src={toyotaImg} alt="Toyota Hilux" />
//                   <div className="car-info">
//                     <h3 className="car-title">Toyota Hilux</h3>
//                     <p className="rating"><FaStar className="star" /> 4.4 | 124 Reviews</p>
//                     <p className="price">
//                       45K – 50K SSP <a href="/buy-cars">*Get On-Road Price</a>
//                     </p>
//                     <p className="details">*Ex-Showroom Price {<br/>}• 12 km/l • 2755 cc • 7 Seater</p>
//                     <button className="btn">View Details</button>
//                   </div>
//                 </div>

//                 {/* Car 2 */}
//                 <div className="car-card">
//                   <img src={mercedesImg} alt="Mercedes-Benz GLE" />
//                   <div className="car-info">
//                     <h3 className="car-title">Mercedes-Benz GLE</h3>
//                     <p className="rating"><FaStar className="star" /> 4.1 | 170 Reviews</p>
//                     <p className="price">
//                       120K – 140K SSP <a href="/car-listings">*Get On-Road Price</a>
//                     </p>
//                     <p className="details">*Ex-Showroom Price • 12 km/l • 2755 cc • 7 Seater</p>
//                     <button className="btn">View Details</button>
//                   </div>
//                 </div>
//               </main>

//             </div> 

//           </div>

    
//   );
// };

// export default CarListing;





// import React, { useEffect, useState } from "react";
// import { FaSearch, FaStar } from "react-icons/fa";
// import { getCars } from "../../../services/carService";
// import ViewDetails from "../../../components/ViewDetails"; // ✅ reuse popup
// import "./AdvanceFilter.css";
// import { Link } from "react-router-dom";

// const AdvanceFilter = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await getCars();
//         setCars(data.cars || []);
//       } catch (error) {
//         console.error("Failed to fetch cars", error);
//       }
//     };
//     fetchCars();
//   }, []);

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
//             <p className="ad_description">Or select from the range below</p>
//             <ul className="filter-list">
//               <li>
//                 <input type="checkbox" /> 7.85L – 15.7L SSP <span>(3)</span>
//               </li>
//               <li>
//                 <input type="checkbox" /> 15.7L – 23.55L SSP <span>(4)</span>
//               </li>
//               <li>
//                 <input type="checkbox" /> 23.55L – 31.4L SSP <span>(6)</span>
//               </li>
//               <li>
//                 <input type="checkbox" /> 31.4L – 54.95L SSP <span>(2)</span>
//               </li>
//             </ul>
//           </div>

//           <hr className="horizontal_line" />

//           {/* Brand */}
//           <div className="filter-box">
//             <h3 className="filter-subtitle">Brand</h3>
//             <div className="ad_search-box">
//               <input type="text" placeholder="Search Brands" />
//               <button>
//                 <FaSearch />
//               </button>
//             </div>
//             <ul className="filter-list">
//               <li>
//                 <input type="checkbox" /> Toyota <span>(3)</span>
//               </li>
//               <li>
//                 <input type="checkbox" /> Nissan <span>(4)</span>
//               </li>
//               <li>
//                 <input type="checkbox" /> Mitsubishi <span>(4)</span>
//               </li>
//               <li>
//                 <input type="checkbox" /> Isuzu <span>(4)</span>
//               </li>
//               <li>
//                 <input type="checkbox" /> Suzuki <span>(4)</span>
//               </li>
//             </ul>
//           </div>

//           <hr className="horizontal_line" />
//           <Link to="/buy-cars" className="see-more">
//             See all Filters ⌄
//           </Link>
//         </aside>

//         {/* Car Listings */}
//         <main className="car-listings">
//           {cars.length === 0 ? (
//             <p>No cars available</p>
//           ) : (
//             cars.map((car) => (
//               <div key={car._id} className="car-card">
//                 <img src={car.images?.[0]} alt={car.title} />
//                 <div className="car-info">
//                   <h3 className="car-title">{car.title}</h3>
//                   <p className="rating">
//                     <FaStar className="star" /> {car.rating || "4.5"} |{" "}
//                     {car.reviews || "100"} Reviews
//                   </p>
//                   <p className="price">
//                     ${car.price}{" "}
//                     <a href="/buy-cars">*Get On-Road Price</a>
//                   </p>
//                   <p className="details">
//                     • {car.fuel || "Petrol"} • {car.kmDriven || 0} km •{" "}
//                     {car.year || "NA"}
//                   </p>
//                   <button
//                     className="btn"
//                     onClick={() => setSelectedCar(car)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </main>
//       </div>

//       {/* ✅ Popup for details */}
//       {selectedCar && (
//         <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
//       )}
//     </div>
//   );
// };

// export default AdvanceFilter;


// import React, { useEffect, useState } from "react";
// import { FaSearch, FaStar } from "react-icons/fa";
// import { getCars } from "../../../services/carService"; // ✅ fetch API
// import ViewDetails from "../../../components/ViewDetails"; // ✅ popup
// import "./AdvanceFilter.css";

// const AdvanceFilter = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [brandFilters, setBrandFilters] = useState([]); // ✅ brand filter state

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await getCars();
//         setCars(data.cars || []);
//       } catch (error) {
//         console.error("Failed to fetch cars", error);
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

//   // ✅ Only show top 2 cars
//   const carsToShow = filteredCars.slice(0, 2);

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
//               <input type="text" placeholder="Search Brands" />
//               <button>
//                 <FaSearch />
//               </button>
//             </div>
//             <ul className="filter-list">
//               {["Toyota", "Nissan", "Mitsubishi", "Isuzu", "Suzuki"].map(
//                 (brand) => (
//                   <li key={brand}>
//                     <input
//                       type="checkbox"
//                       checked={brandFilters.includes(brand)}
//                       onChange={() => handleBrandFilter(brand)}
//                     />{" "}
//                     {brand}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </aside>

//         {/* Car Listings */}
//         <main className="car-listings">
//           {carsToShow.length === 0 ? (
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



// import React, { useEffect, useState } from "react";
// import { FaSearch, FaStar } from "react-icons/fa";
// import { getCars } from "../../../services/carService"; // ✅ fetch API
// import ViewDetails from "../../../components/ViewDetails"; // ✅ popup
// import { Link } from "react-router-dom";
// import "./AdvanceFilter.css";

// const AdvanceFilter = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [brandFilters, setBrandFilters] = useState([]); // ✅ brand filter state

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await getCars();
//         setCars(data.cars || []);
//       } catch (error) {
//         console.error("Failed to fetch cars", error);
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

//   // ✅ Only show top 2 cars
//   const carsToShow = filteredCars.slice(0, 2);

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
//               <input type="text" placeholder="Search Brands" />
//               <button>
//                 <FaSearch />
//               </button>
//             </div>
//             <ul className="filter-list">
//               {["Toyota", "Nissan", "Mitsubishi", "Isuzu", "Suzuki"].map(
//                 (brand) => (
//                   <li key={brand}>
//                     <input
//                       type="checkbox"
//                       checked={brandFilters.includes(brand)}
//                       onChange={() => handleBrandFilter(brand)}
//                     />{" "}
//                     {brand}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           <hr className="horizontal_line" />

//           {/* ✅ See All Filters */}
//           <Link to="/buy-cars" className="see-more">
//             See all Filters ⌄
//           </Link>
//         </aside>

//         {/* Car Listings */}
//         <main className="car-listings">
//           {carsToShow.length === 0 ? (
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
import { getCars } from "../../../services/carService"; // ✅ fetch API
import ViewDetails from "../../../components/ViewDetails"; // ✅ popup
import { Link } from "react-router-dom";
import "./AdvanceFilter.css";

const AdvanceFilter = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [brandFilters, setBrandFilters] = useState([]); // ✅ brand filter state
  const [showAllFiltered, setShowAllFiltered] = useState(false); // ✅ toggle top2/all
  const [loading, setLoading] = useState(true); // ✅ loading state
  const [error, setError] = useState(null); // ✅ error state
  const [searchBrand, setSearchBrand] = useState(""); // ✅ brand search state

  const carListRef = useRef(null); // ✅ ref for outside click detection

  // Available brands (static list or you could generate from cars)
  const allBrands = ["Toyota", "Nissan", "Mitsubishi", "Isuzu", "Suzuki"];

  // ✅ filter brands dynamically using search input
  const visibleBrands = allBrands.filter((brand) =>
    brand.toLowerCase().includes(searchBrand.toLowerCase())
  );

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
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

  // ✅ Handle brand filter toggle
  const handleBrandFilter = (brand) => {
    setBrandFilters((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // ✅ Apply filters based on car.make field
  const filteredCars = cars.filter((car) =>
    brandFilters.length > 0
      ? brandFilters.some(
          (brand) => car.make?.toLowerCase() === brand.toLowerCase()
        )
      : true
  );

  // ✅ Show either top 2 or all filtered cars
  const carsToShow = showAllFiltered ? filteredCars : filteredCars.slice(0, 2);

  // ✅ Close "View all" when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showAllFiltered &&
        carListRef.current &&
        !carListRef.current.contains(event.target)
      ) {
        setShowAllFiltered(false); // Close to top 2
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
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
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
                      checked={brandFilters.includes(brand)}
                      onChange={() => handleBrandFilter(brand)}
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

          {/* ✅ See All Filters */}
          <Link to="/buy-cars" className="see-more">
            See all Filters
          </Link>

          {/* ✅ View all filtered cars */}
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

      {/* ✅ View Details Popup */}
      {selectedCar && (
        <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
};

export default AdvanceFilter;
