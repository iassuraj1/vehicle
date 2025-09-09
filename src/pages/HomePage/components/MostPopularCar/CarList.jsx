import CarCard from "./CarCard";
import "./CarList.css";

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
