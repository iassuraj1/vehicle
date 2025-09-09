import React from "react";
import "./PopularBrands.css";

const PopularBrands = () => {
  const brands = [
    { name: "Toyota", logo: "/HomePageImages/car_logo.png" },
    { name: "Nissan", logo: "/HomePageImages/hyundai_logo1.jpg" },
    { name: "Mitsubishi", logo: "/HomePageImages/car_logo.png" },
    { name: "Hyundai", logo: "/HomePageImages/car_logo.png" },
  ];

  return (
    <div className="container">
        <div className="brands-container">
          <h2 className="brands-title">Popular Brands</h2>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div className="brand-card" key={index}>
                <img src={brand.logo} alt={brand.name} />
                <p>{brand.name}</p>
              </div>
            ))}
          </div>
          <a href="/brands" className="view-all">
            View All Brands →
          </a>
        </div>
    </div>
  );
};

export default PopularBrands;
