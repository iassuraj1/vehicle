import React from "react";
import "./CarImportCard.css";
import { BsDot } from "react-icons/bs";

const CarImportCard = () => {
  return (
    <div className="continer-imported">
      <div className="car-card-box">
        <div className="car-card-content">
          <h2 className="card-title">Import a Car Hassle Free</h2>
          <p className="card-text">
            Whether it’s a brand-new ride or a reliable used vehicle, EJAR Motors
            helps you import from trusted international markets with full support.
          </p>
          <ul className="card-list">
            <li><BsDot className="dot_icon"/>Verified Dealers</li>
            <li><BsDot className="dot_icon"/> Transparent Pricing</li>
            <li><BsDot className="dot_icon"/> End-to-End Service</li>
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
