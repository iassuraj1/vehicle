import { useState } from "react";
import { cars } from "../../../../data/mostPopulartCarData";
import CategoryTabs from "./CategoryTabs";
import CarList from "./CarList";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("SUVs");

  return (
    <div className="home_container">
          <div className="home">
            <h2>The Most Popular Cars</h2>

            <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />

            <CarList cars={cars[activeCategory].slice(0, 3)} />

            <Link to={`/category/${activeCategory}`} className="view-all">
              View All {activeCategory} Cars →
            </Link>
          </div>


    </div>
  );
};

export default Home;
