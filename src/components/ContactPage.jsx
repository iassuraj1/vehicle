import React, { useState } from "react";
import "./ContactPage.css";
import { FaTimes } from "react-icons/fa";

const ContactForm = ({ isOpen, onClose }) => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [interested, setInterested] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstname,
      lastname,
      email,
      phoneNo,
      interested,
      message,
    };

    console.log("Form Data Submitted:", formData);

    // ⬇️ Later you can integrate API call here
    // await axios.post("/api/contact", formData);

    // Clear form after submit
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setInterested("");
    setMessage("");
    
    onClose(); // Close modal after submit (optional)
  };
  if (!isOpen) return null; // ⬅️ hide modal when closed
  return (
    <div className="contact-overlay">
      <div className="contact-modal">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Contact Us</h2>
        <p>Fill out this form and we'll get back to you shortly.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              className="first-name"
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="last-name"
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            className="input_email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input_contact"
            type="tel"
            placeholder="Contact No"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
          <select
            value={interested}
            onChange={(e) => setInterested(e.target.value)}
            required
          >
            <option value="">Interested in</option>
            <option value="buy">Buy Car</option>
            <option value="sell">Sell Car</option>
            <option value="accessories">Accessories</option>
          </select>
          <textarea
            className="input_textarea"
            placeholder="Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
