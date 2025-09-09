import React from "react";
import "./essential_details.css";

// import images from assets folder
import carMain from "../../../assets/CarDetails/GMG.jpg";
import carSide from "../../../assets/CarDetails/pourshe2.jpg";

export default function EssentialDetails() {
  return (
    <div className="buycar-details-page">
      {/* Main Car Image */}
      <div className="buycar-details-main-image">
        <img src={carMain} alt="Car Main" />
      </div>

      {/* Description */}
      <p className="buycar-details-description">
        “This Land Cruiser 2022 VX offers luxury and power with Toyota’s latest
        design, advanced off-road capabilities, and premium comfort. Equipped
        with adaptive cruise control, a 12.3-inch infotainment system, leather
        seats, and Toyota Safety Sense package, this SUV ensures safety and
        performance in every journey.”
      </p>

      {/* Card Section */}
      <div className="buycar-details-card">
        <div className="buycar-details-card-left">
          <img src={carSide} alt="Car Side" />
        </div>
        <div className="buycar-details-card-right">
          <h3>Essential Details</h3>
          <ul>
            <li><strong>Year:</strong> 2022</li>
            <li><strong>Fuel Type:</strong> Petrol</li>
            <li><strong>Engine:</strong> 3.5L V6 Twin Turbo</li>
            <li><strong>Seating Capacity:</strong> 7 Seater</li>
            <li><strong>Color:</strong> Pearl White</li>
            <li><strong>Location:</strong> Riyadh</li>
          </ul>
          <button className="buycar-details-btn">RESERVE THIS CAR</button>
        </div>
      </div>
    </div>
  );
}
