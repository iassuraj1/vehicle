import React from "react";
import "./ContactForm.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

import { FaEnvelope , FaPhoneAlt } from "react-icons/fa";
const ContactForm = () => {
  const form = useRef();
  const public_key ="j7zRwmN2v-VjO2B7J"
  const service_id ="service_9nodsbp"
  const template_id ="template_f1bwe6d"


   const sendEmail = (e) => {
    e.preventDefault();



    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
            alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
           alert("Failed to send message. Please try again.");
        },
      );
  };
 
 
 
 
 
 
 
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
            <span className="icon"><FaEnvelope className="mail_icon"/></span> 
            <a  href="mailto:support@ejarmotors.comx" style={{"color":"#294872"}}>support@ejarmotors.com</a> 
          </p>
          <p>
            <span className="icon"><FaPhoneAlt className="phone_icon" /></span> +211 91 234 5678
          </p>
        </div>
        <button className="whatsapp-btn">WHATSAPP OUR TEAM</button>
      </div>







      {/* Right Side - Form */}
      <form ref={form}  onSubmit={sendEmail}  className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Full Name" name="from_name" required    />
          <input type="text" placeholder="Phone Number" name="phone" required />
        </div>
        <input type="email" placeholder="Email" name="from_email" required />
        <textarea placeholder="Write a Message" rows="4" name="message" required></textarea>
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
