// // First method

// import API from "./api";

// // ✅ Add a car
// export const addCar = (carData) => API.post("/cars", carData);

// // ✅ Get all cars with filters + pagination
// export const getCars = (filters = {}) => API.get("/cars", { params: filters });

// // ✅ Get single car by ID
// export const getCarById = (id) => API.get(`/cars/${id}`);

// // ✅ Update car
// export const updateCar = (id, carData) => API.put(`/cars/${id}`, carData);

// // ✅ Delete car
// export const deleteCar = (id) => API.delete(`/cars/${id}`);

// // ✅ Mark as sold
// export const markAsSold = (id, buyerId) => API.put(`/cars/${id}/sold`, { buyerId });




//second way



// // src/services/carService.js
// import api from "./api";

// // Get all cars
// export const getCars = async () => {
//   try {
//     const response = await api.get("/api/cars"); // adjust path as per backend route
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching cars:", error);
//     throw error;
//   }
// };

// // Add new car (for SellCars page)
// export const addCar = async (carData) => {
//   try {
//     const response = await api.post("/api/cars", carData);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding car:", error);
//     throw error;
//   }
// };


//third way
 import api from "./api";

// Get all cars
export const getCars = async () => {
  const response = await api.get("/car");   // ✅ fixed
  return response.data;
};

// Get single car by ID
export const getCarById = async (id) => {
  const response = await api.get(`/car/${id}`);  // ✅ fixed
  return response.data;
};

// Add a car (requires token)
export const addCar = async (carData, token) => {
  const response = await api.post("/car", carData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

// Update car
export const updateCar = async (id, carData, token) => {
  const response = await api.put(`/car/${id}`, carData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

// Delete car
export const deleteCar = async (id, token) => {
  const response = await api.delete(`/car/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

// Mark car as sold
export const markAsSold = async (id, token) => {
  const response = await api.put(`/car/${id}/sold`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
