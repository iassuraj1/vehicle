import { useParams } from "react-router-dom";
import { cars } from "../../../../data/mostPopulartCarData";
import CarList from "./CarList";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryCars = cars[category] || [];

  return (
    <div className="category-page">
      <h2>{category} Cars</h2>
      <CarList cars={categoryCars} />
    </div>
  );
};

export default CategoryPage;
