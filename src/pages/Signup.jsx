

import { useState } from "react";
import { signupUser } from "../services/authService"; // <-- use authService.js
import "./Signup.css";

export default function Signup({ onClose, onSignupSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signupUser(form); // token stored automatically
      console.log("✅ Signup successful:", res.user);
      alert("Signup successful!");

      onSignupSuccess?.(); // <-- notify MainHeader
      onClose(); // close modal
    } catch (err) {
      console.error("❌ Signup failed:", err.response?.data || err.message);
      alert("Signup failed: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-signup" onClick={onClose}>
      <div className="signup-card" onClick={(e) => e.stopPropagation()}>
        <h2>Create Account</h2>
        <p className="lead">Sign up to continue</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input  
            className="signup_input"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
          className="signup_input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
             className="signup_input"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
           className="signup_input"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
}
