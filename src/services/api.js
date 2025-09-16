
// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://ejjar-motors.onrender.com/api", // your backend base URL
// //   withCredentials: true, // if you use cookies for auth
// });

// // Add token automatically if user logged in


// // API.interceptors.request.use((req) => {
// //   const token = localStorage.getItem("token");
// //   if (token) {
// //     req.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return req;
// // });

// export default API;







// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://ejjar-motors.onrender.com/api",
// });

// // Automatically attach token from localStorage to headers
// API.interceptors.request.use(
//   (req) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       req.headers.Authorization = `Bearer ${token}`;
//     }
//     return req;
//   },
//   (error) => Promise.reject(error)
// );

// // ✅ Signup function
// export const signupUser = async (formData) => {
//   const response = await API.post("/user/signup", formData);

//   // Store token after signup
//   if (response.data.token) {
//     localStorage.setItem("token", response.data.token);
//   }

//   return response.data;
// };

// // ✅ Login function
// export const loginUser = async (formData) => {
//   const response = await API.post("/user/login", formData);

//   // Store token after login
//   if (response.data.token) {
//     localStorage.setItem("token", response.data.token);
//   }

//   return response.data;
// };




// export default API;




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
