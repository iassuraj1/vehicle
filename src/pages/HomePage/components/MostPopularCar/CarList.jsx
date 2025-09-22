// import CarCard from "./CarCard";
// import "./CarList.css";

// const CarList = ({ cars }) => {
//   return (
//     <div className="car-list">
//       {cars.map(car => (
//         <CarCard key={car.id} car={car} />
//       ))}
//     </div>
//   );
// };

// export default CarList;

// CarList.jsx

// CarList.jsx
import React from "react";
import CarCard from "./CarCard";
import "./CarList.css";

const CarList = ({ cars, onViewDetails }) => {
  return (
    <div className="car-list">
      {cars.map((car, index) => (
        <CarCard
          key={car._id || car.id || index} // ✅ fallback to index if no unique id
          car={car}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default CarList;
