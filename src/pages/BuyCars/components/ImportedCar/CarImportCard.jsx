import React from "react";
import "./CarImportCard.css";

const CarImportCard = () => {
  return (
    <div className="continer-imported">
      <div className="car-card">
        <div className="car-card-content">
          <h2 className="card-title">Import a Car Hassle Free</h2>
          <p className="card-text">
            Whether it’s a brand-new ride or a reliable used vehicle, EJAR Motors
            helps you import from trusted international markets with full support.
          </p>
          <ul className="card-list">
            <li>✔ Verified Dealers</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ End-to-End Service</li>
          </ul>
          <button className="card-btn">REQUEST IMPORT QUOTE</button>
        </div>

        <div className="car-card-image">
          <img
            src="/HomePageImages/bentley-flying.jpg" 
            alt="Luxury Car"
          />
        </div>
      </div>

    </div>
  );
};

export default CarImportCard;
