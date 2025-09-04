import React from "react";
import "./ContactForm.css";

import { FaEnvelope , FaPhoneAlt } from "react-icons/fa";
const ContactForm = () => {
  return (
    <div className="contact-card">
      {/* Left Side - Info */}
      <div className="contact-info">
        <h2>Your Car Journey Starts Here</h2>
        <p>
          We’re here to answer your questions, assist with listings, or help you
          import your next car.
        </p>
        <div className="contact-details">
          <p>
            <span className="icon"><FaEnvelope className="mail_icon"/></span> support@ejarmotors.com
          </p>
          <p>
            <span className="icon"><FaPhoneAlt className="phone_icon" /></span> +211 91 234 5678
          </p>
        </div>
        <button className="whatsapp-btn">WHATSAPP OUR TEAM</button>
      </div>

      {/* Right Side - Form */}
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Phone Number" required />
        </div>
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Write a Message" rows="4"></textarea>
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
