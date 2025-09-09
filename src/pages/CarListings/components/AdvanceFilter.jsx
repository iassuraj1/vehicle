import React from "react";
import { FaSearch,  FaStar } from "react-icons/fa";
import toyotaImg from "../../../assets/CarListingImage/toyota.jpg";
import mercedesImg from "../../../assets/CarListingImage/mercedes.jpg";
import "./AdvanceFilter.css";

// FaCar, FaMoneyBill,
const CarListing = () => {
  return (
    

          <div className="container">
            {/* Sidebar Filters */}
            <div className="sub-container">
              
              <aside className="filters">
                <h2 className="filter-title">Advanced Filters</h2>
                <hr className="horizontal_line"/>
                {/* Budget */}
                <div className="filter-box">
                  <h3 className="filter-subtitle">Budget</h3>
                  
                  <p className="range-label">SSP 300,000 - SSP 15,000,000</p>
                  <input type="range" min="300000" max="15000000" className="range-slider" />

                  <ul className="filter-list">
                    <li><input type="checkbox" /> 7.85L – 15.7L SSP <span>(3)</span></li>
                    <li><input type="checkbox" /> 15.7L – 23.55L SSP <span>(4)</span></li>
                    <li><input type="checkbox" /> 23.55L – 31.4L SSP <span>(6)</span></li>
                    <li><input type="checkbox" /> 31.4L – 54.95L SSP <span>(2)</span></li>
                  </ul>
                </div>
            <hr className="horizontal_line"/>
                {/* Brand */}
                <div className="filter-box">
                  <h3 className="filter-subtitle">Brand</h3>
                  <div className="ad_search-box">
                    <input type="text" placeholder="Search Brands" />
                    <button><FaSearch /></button>
                  </div>
                  <ul className="filter-list">
                    <li><input type="checkbox" /> Toyota <span>(3)</span></li>
                    <li><input type="checkbox" /> Nissan <span>(4)</span></li>
                    <li><input type="checkbox" /> Mitsubishi <span>(4)</span></li>
                    <li><input type="checkbox" /> Isuzu <span>(4)</span></li>
                    <li><input type="checkbox" /> Suzuki <span>(4)</span></li>
                  </ul>
                  <a href="#" className="see-more">See all Filters ⌄</a>
                </div>
              </aside>

              {/* Car Listings */}
              <main className="car-listings">
                {/* Car 1 */}
                <div className="car-card">
                  <img src={toyotaImg} alt="Toyota Hilux" />
                  <div className="car-info">
                    <h3 className="car-title">Toyota Hilux</h3>
                    <p className="rating"><FaStar className="star" /> 4.4 | 124 Reviews</p>
                    <p className="price">
                      45K – 50K SSP <a href="#">*Get On-Road Price</a>
                    </p>
                    <p className="details">*Ex-Showroom Price • 12 km/l • 2755 cc • 7 Seater</p>
                    <button className="btn">View Details</button>
                  </div>
                </div>

                {/* Car 2 */}
                <div className="car-card">
                  <img src={mercedesImg} alt="Mercedes-Benz GLE" />
                  <div className="car-info">
                    <h3 className="car-title">Mercedes-Benz GLE</h3>
                    <p className="rating"><FaStar className="star" /> 4.1 | 170 Reviews</p>
                    <p className="price">
                      120K – 140K SSP <a href="#">*Get On-Road Price</a>
                    </p>
                    <p className="details">*Ex-Showroom Price • 12 km/l • 2755 cc • 7 Seater</p>
                    <button className="btn">View Details</button>
                  </div>
                </div>
              </main>

            </div> 

          </div>

    
  );
};

export default CarListing;
