

import React, { useEffect, useState } from "react";
import { getCars } from "../../../services/carService";
import ViewDetails from "../../../components/ViewCarDetails"; 
import "./CarList.css";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); 

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        console.log("API Response:", data);
        setCars(data.cars || []);
      } catch (error) {
        console.error("Failed to fetch cars", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="carlist-container">
      <h2 className="carlist-title">All Cars Available</h2>
      <div className="carlist-grid">
        {cars.map((car) => (
          <div key={car._id} className="carlist-card">
            <img
              src={car.images?.[0]}
              alt={car.title}
              className="carlist-image"
            />
            <div className="carlist-info">
              <h3 className="carlist-name">{car.title}</h3>
              <p className="carlist-price">${car.price}</p>
              <button
                className="carlist-notify-btn"
                onClick={() => setSelectedCar(car)}
              >
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}



