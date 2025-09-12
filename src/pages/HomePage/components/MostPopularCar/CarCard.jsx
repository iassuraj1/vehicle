import "./CarCard.css";

const CarCard = ({ car }) => {
  return (
    <div className="most_car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.price}</p>
      <button>View Cars</button>
    </div>
  );
};

export default CarCard;
