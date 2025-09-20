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
