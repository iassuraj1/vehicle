import React, { useState, useRef, useEffect } from "react";
import "./TrendingCars.css";
import cars from "../../../../data/trandingCarData";

const TrendingCars = () => {
  const [showAll, setShowAll] = useState(false);
  const componentRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setShowAll(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const visibleCars = showAll ? cars : cars.slice(0, 3);

  return (
    <div className="continer">
      <div className="trending-container" ref={componentRef}>
        <h2>Trending Cars & Hot Deals</h2>
        <div className="cars-grid">
          {visibleCars.map((car, index) => (
            <div className="car-card-tranding" key={index}>
              <img src={car.image} alt={car.name} className="car-image" />
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <button className="notify-btn">NOTIFY WHEN LAUNCHED </button>
            </div>
          ))}
        </div>

        {!showAll && (
          <button className="view-btn" onClick={() => setShowAll(true)}>
            View All Upcoming Cars →
          </button>
        )}
      </div>

     </div>
  );
};

export default TrendingCars;
