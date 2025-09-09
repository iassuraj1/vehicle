import React from "react";
import { FaWrench, FaSearch, FaMoneyBillWave } from "react-icons/fa"; // icons
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaWrench />,
      title: "Book a Free Car Inspection",
      desc: "Choose the inspection centre closest to you and bring your car along with all the documents."
    },
    {
      id: 2,
      icon: <FaSearch />,
      title: "Let us Find you the Right Buyer",
      desc: "We'll handle conversations with all the buyers to ensure you get the best offer."
    },
    {
      id: 3,
      icon: <FaMoneyBillWave />,
      title: "Get your Money Instantly",
      desc: "We guarantee money transfer the same day we close the deal with the buyer."
    }
  ];

  return (
    <div className="how-container">
      <h2>How it Works</h2>
      <div className="how-steps">
        {steps.map((step) => (
          <div className="step-box" key={step.id}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <span className="step-number">{step.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
