


import React, { useMemo, useState } from "react";
import "./Accessories.css";


import seatImg from "../../../assets/CarAccessories/front_sheat.jfif";
import MatsImg from "../../../assets/CarAccessories/fold_mats.jpg" ;
 import backSheatImg from "../../../assets/CarAccessories/back_sheat.jfif";

const sections = {
  "Interior Essentials": [
    { id: 1, name: "Car Seat Covers", price: "SSP 35,000+", image: seatImg},
    { id: 2, name: "Car Floor Mats", price: "SSP 13,000+", image: MatsImg},
    { id: 3, name: "Car Organizers", price: "SSP 9,000+", image: backSheatImg},
  ],
  "Exterior Enhancements": [
    { id: 4, name: "Alloy Wheels", price: "SSP 45,000+", image: seatImg} ,
    { id: 5, name: "Roof Rails", price: "SSP 20,000+", image: seatImg} ,
  ],
  "Tech & Safety": [
    { id: 6, name: "Dash Camera", price: "SSP 15,000+", image: seatImg},
    { id: 7, name: "Parking Sensors", price: "SSP 12,000+", image: seatImg},
  ],
  "Comfort & Care": [
    { id: 8, name: "Neck Pillow", price: "SSP 5,000+", image: seatImg},
    { id: 9, name: "Car Perfume", price: "SSP 3,000+", image: seatImg},
  ],
};

export default function Accessories() {
  const [active, setActive] = useState("Interior Essentials");
  const [showAll, setShowAll] = useState(false);

  const allItems = useMemo(() => Object.values(sections).flat(), []);
  const visible = showAll ? allItems : sections[active];

  return (
    <div className="acc-wrap">
      <div className="acc-box">
        <div className="acc-header">
          <h2>Accessories We Offer</h2>
          {showAll && (
            <button
              className="acc-link acc-back-link"
              onClick={() => setShowAll(false)}
            >
              ← Back to Categories
            </button>
          )}
        </div>

        {!showAll && (
          <nav className="acc-tabs">
            {Object.keys(sections).map((label) => (
              <button
                key={label}
                className={`acc-tab ${active === label ? "active" : ""}`}
                onClick={() => setActive(label)}
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        <div className="acc-grid">
          {visible.map((item) => (
            <article key={item.id} className="acc-card">
              <div className="acc-thumb">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="acc-info">
                <h4 className="acc-title">{item.name}</h4>
                <p className="acc-price">{item.price}</p>
                <button className="acc-buy">BUY NOW</button>
              </div>
            </article>
          ))}
        </div>

        {!showAll && (
          <button
            className="acc-link acc-view-all"
            onClick={() => setShowAll(true)}
          >
            View All SUVs Cars &gt;
          </button>
        )}
      </div>
    </div>
  );
}
