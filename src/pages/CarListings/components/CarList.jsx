import React from "react";
import "./CarList.css";
import mercedesImg from "../../../assets/CarListingImage/mercedes.jpg";
import BentleyImg from "../../../assets/CarListingImage/Bentley.jfif";
import Lamborghini_UrusImg from "../../../assets/CarListingImage/Lamborghini_Urus.jfif";
import Lamborghini from "../../../assets/CarListingImage/Lamborghini.jfif";
import RollsImg from "../../../assets/CarListingImage/Rolls Royce.jfif";
import royceImg from "../../../assets/CarListingImage/Rolls.jfif";



const cars = [
  {
    name: "Bentley Bentayga",
    price: "SSP 40,000,000+",
    image: BentleyImg,
  },
  {
    name: "Lamborghini Urus",
    price: "From SSP 4M – 8.5M",
    image:Lamborghini,
  },
  {
    name: "Rolls-Royce Phantom",
    price: "From SSP 4M – 8.5M",
    image:mercedesImg,
  },
  {
    name: "Bentley Bentayga",
    price: "From SSP 4M – 8.5M",
    image: royceImg,
  },
  {
    name: "Lamborghini Urus",
    price: "From SSP 4M – 8.5M",
    image: Lamborghini_UrusImg,
  },
  {
    name: "Rolls-Royce Phantom",
    price: "From SSP 4M – 8.5M",
    image: RollsImg,
  },
];

export default function CarList() {
  return (
    <div className="carlist-container">
      <h2 className="carlist-title">All Cars Available</h2>
      <div className="carlist-grid">
        {cars.map((car, index) => (
          <div key={index} className="carlist-card">
            <img src={car.image} alt={car.name} className="carlist-image" />
            <div className="carlist-info">
              <h3 className="carlist-name">{car.name}</h3>
              <p className="carlist-price">{car.price}</p>
              <button className="carlist-notify-btn">
                NOTIFY WHEN LAUNCHED
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
