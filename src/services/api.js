
import axios from "axios";

const API = axios.create({
  baseURL: "https://ejjar-motors.onrender.com/api",
});

// Automatically attach token from localStorage to headers
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

export default API;
