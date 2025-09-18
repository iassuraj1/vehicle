// import "./CarCard.css";

// const CarCard = ({ car }) => {
//   // fallback handling in case fields are missing
//   const carName = car.name || `${car.make || ""} ${car.model || ""}`.trim();
//   const carPrice = car.price
//     ? `$${Number(car.price).toLocaleString()}`
//     : "Price not available";

//   return (
//     <div className="most_car-card">
//       <img src={car.image} alt={carName} />
//       <h3>{carName}</h3>
//       <p>{carPrice}</p>
//       <button>View Cars</button>
//     </div>
//   );
// };

// export default CarCard;



import "./CarCard.css";

const CarCard = ({ car, onViewDetails }) => {
  const carName = car.name || car.title || `${car.make || ""} ${car.model || ""}`.trim();
  const carPrice = car.price
    ? `$${Number(car.price).toLocaleString()}`
    : "Price not available";

  return (
    <div className="most_car-card">
      <img src={car.image || (car.images && car.images[0])} alt={carName} />
      <h3>{carName}</h3>
      <p>{carPrice}</p>
<button onClick={() => onViewDetails(car)}>View Cars</button>

    </div>
  );
};

export default CarCard;
