



import { useEffect, useState } from "react";
import { getCars } from "./carService";

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchCars = async () => {
    try {
      const result = await getCars();
     

      if (Array.isArray(result)) {
        setCars(result);
      } else if (result?.data && Array.isArray(result.data)) {
        setCars(result.data);
      } else if (result?.cars && Array.isArray(result.cars)) {
        setCars(result.cars);
      } else {
        setError("Unexpected response format");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  fetchCars();
}, []);

  console.log("useCars",cars)
  return {cars, loading, error };
};


export default useCars;


