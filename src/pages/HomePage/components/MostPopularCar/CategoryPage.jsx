import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCars from "../../../../services/useCars";
import { carFilterByMake } from "../../../../data/carFilterByMake";
import CarList from "./CarList";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const { cars, loading, error } = useCars();
  const [carsByMake, setCarsByMake] = useState({});

  useEffect(() => {
    if (cars.length > 0) {
      const grouped = carFilterByMake(cars);
      setCarsByMake(grouped);
    }
  }, [cars]);

  if (loading) return <div>Loading cars...</div>;
  if (error) return <div>Error: {error}</div>;

  const categoryCars = carsByMake[category] || [];

  return (
    <div className="category-page">
      <h2>{category} Cars</h2>
      <CarList cars={categoryCars} />
    </div>
  );
};

export default CategoryPage;
