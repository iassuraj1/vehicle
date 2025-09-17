// // src/hooks/useCars.jsx
// import { useEffect, useState } from "react";
// import { getCars } from "../services/carService"; // ✅ still using backend API

// const useCars = () => {
//   const [cars, setCars] = useState([]);   // will hold the JSON array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await getCars();   // ✅ fetch from backend
//         setCars(data);                  // ✅ update with JSON response
//       } catch (err) {
//         setError(err.message || "Failed to fetch cars");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   // ✅ this hook always returns JSON-like structure
//   return { cars, loading, error };
// };

// export default useCars;





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
        console.log("API raw result:", result);

        // ✅ normalize depending on API shape
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

  return { cars, loading, error };
};

export default useCars;
