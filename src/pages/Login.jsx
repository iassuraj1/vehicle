

import { useState } from "react";
import { loginUser } from "../services/authService"; // <-- use authService.js
import "./Login.css";

export default function Login({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await loginUser({ email, password }); // token stored automatically

      alert("Login successful!");
      console.log("User:", res.user);

      onLoginSuccess?.(); // <-- notify MainHeader that login succeeded
      onClose(); // close modal
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-login" onClick={onClose}>
      <div className="login-card" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome back</h2>
        <p className="lead">Sign in to continue</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input  className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            {loading ? <span className="loader" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
