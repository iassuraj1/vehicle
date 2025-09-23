

// import React, { useEffect, useState } from "react";
// import { getCars } from "../../../services/carService";
// import ViewDetails from "../../../components/ViewCarDetails"; 
// import "./CarList.css";

// export default function CarList() {
//   const [cars, setCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null); 

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await getCars();
//         console.log("API Response:", data);
//         setCars(data.cars || []);
//       } catch (error) {
//         console.error("Failed to fetch cars", error);
//       }
//     };
//     fetchCars();
//   }, []);

//   return (
//     <div className="carlist-container">
//       <h2 className="carlist-title">All Cars Available</h2>
//       <div className="carlist-grid">
//         {cars.map((car) => (
//           <div key={car._id} className="carlist-card">
//             <img
//               src={car.images?.[0]}
//               alt={car.title}
//               className="carlist-image"
//             />
//             <div className="carlist-info">
//               <h3 className="carlist-name">{car.title}</h3>
//               <p className="carlist-price">${car.price}</p>
//               <button
//                 className="carlist-notify-btn"
//                 onClick={() => setSelectedCar(car)}
//               >
//                 VIEW DETAILS
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedCar && (
//         <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState, useContext } from "react";
import { getCars } from "../../../services/carService";
import ViewDetails from "../../../components/ViewCarDetails"; 
import { CurrencyContext } from "../../../components/CurrencyContext";
import "./CarList.css";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const { currency } = useContext(CurrencyContext);

  // Example: Hardcoded exchange rate (1 USD = 130 SSP)
  // const SSP_TO_USD = 130;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();

        const carsWithPrices = (data.cars || []).map(car => ({
          ...car,
          sspprice: car.sspprice,
          usdprice: car.usdprice ,
        }));

        setCars(carsWithPrices);
      } catch (error) {
        console.error("Failed to fetch cars", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="carlist-container">
      <h2 className="carlist-title">All Cars Available</h2>
      <div className="carlist-grid">
        {cars.map((car) => {
          const price =
            currency === "USD" ? car.usdprice : car.sspprice;

          return (
            <div key={car._id} className="carlist-card">
              <img
                src={car.images?.[0]}
                alt={car.title}
                className="carlist-image"
              />
              <div className="carlist-info">
                <h3 className="carlist-name">{car.title}</h3>
                <p className="carlist-price">
                  {currency} {Number(price).toLocaleString()}
                </p>

                <button
                  className="carlist-notify-btn"
                  onClick={() => setSelectedCar(car)}
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCar && (
        <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}
