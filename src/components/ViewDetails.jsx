import React, { useState } from "react";
import "./ViewDetails.css";

export default function ViewDetails({ car, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  if (!car) return null;

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === car.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? car.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Left: Slider */}
        <div className="popup-left">
          <button className="slider-btn left" onClick={prevImage}>❮</button>
          <img src={car.images[currentImage]} alt="Car" className="popup-image" />
          <button className="slider-btn right" onClick={nextImage}>❯</button>

          {/* Thumbnails */}
          <div className="thumbnail-row">
            {car.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`thumbnail ${idx === currentImage ? "active" : ""}`}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="popup-right">
          <h2>{car.title}</h2>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Brand:</strong> {car.brand}</p>
          <p><strong>Model:</strong> {car.model}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>KMs Driven:</strong> {car.kmDriven}</p>
          <p><strong>Location:</strong> {car.city}, {car.state}</p>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
