import axios from "axios";

// deployed backend base URL
const API_URL = "https://ejjar-motors.onrender.com/api/users";

// Signup
export const signupUser = async (userData) => {
  return await axios.post(`${API_URL}/signup`, userData);
};

// Login
export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};


