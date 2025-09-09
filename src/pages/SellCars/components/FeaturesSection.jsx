import React from "react";
import "./FeaturesSection.css";

// replace these with your actual image paths
import priceIcon from "../../../assets/SellCarImage/price.png";
import processIcon from "../../../assets/SellCarImage/paper.png";
import valuationIcon from "../../../assets/SellCarImage/car.png"

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: priceIcon,
      title: "Best Price Assured",
      desc: "We ensure you receive the most competitive offer based on real-time market data."
    },
    {
      id: 2,
      icon: processIcon,
      title: "Hassle-Free Process",
      desc: "From inspection to paperwork, our team manages everything for a smooth experience."
    },
    {
      id: 3,
      icon: valuationIcon,
      title: "Instant Valuation",
      desc: "Get your car’s accurate market value within minutes through our advanced pricing system."
    }
  ];

  return (
    <div className="features-container">
        <div className="semi-continer">
            {features.map((feature) => (
                <div className="feature-box" key={feature.id}>
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                </div>
            ))}

        </div>
      
    </div>
  );
};

export default FeaturesSection;
