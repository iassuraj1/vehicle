

import { useState, useEffect } from "react";
import CategoryTabs from "./CategoryTabs";
import CarList from "./CarList";
import ViewDetails from "../../../../components/ViewCarDetails"; // import popup

import useCars from "../../../../services/useCars";
import { carFilterByMake } from "../../../../data/carFilterByMake";

import "./Home.css";

const Home = () => {
  const { cars, loading, error } = useCars();
  const [carsByMake, setCarsByMake] = useState({});
  const [activeCategory, setActiveCategory] = useState("");
  const [showAll, setShowAll] = useState(false);

  // ✅ State for popup
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (cars.length > 0) {
      const grouped = carFilterByMake(cars);
      setCarsByMake(grouped);

      // Set default category
      const firstCategory = Object.keys(grouped)[0];
      if (firstCategory) setActiveCategory(firstCategory);
    }
  }, [cars]);

  if (loading) return <div>Loading cars...</div>;
  if (error) return <div>Error: {error}</div>;

  const carList = carsByMake[activeCategory] || [];
  const displayedCars = showAll ? carList : carList.slice(0, 3);



// Function to open ViewDetails popup
const handleViewDetails = (car) => {
  // Ensure images array exists and take all images from backend
  const imagesArray = Array.isArray(car.images) ? car.images : car.image ? [car.image] : [];

  const normalizedCar = {
    ...car,
    images: imagesArray,
  };

  setSelectedCar(normalizedCar);
};




  // ✅ Function to close popup
  // const handleCloseDetails = () => {
  //   setSelectedCar(null);
  // };

  return (
    <div className="home_container">
      <div className="home">
        <h2>The Most Popular Cars</h2>

        <CategoryTabs
          active={activeCategory}
          categories={Object.keys(carsByMake)}
          onSelect={(category) => {
            setActiveCategory(category);
            setShowAll(false); // reset toggle
          }}
        />

       <CarList cars={displayedCars} onViewDetails={handleViewDetails} />


        {carList.length > 3 && !showAll && (
          <div
            className="view-all"
            style={{ cursor: "pointer", textAlign: "left", padding: 0, marginLeft: 0, marginTop: "20px" }}
            onClick={() => setShowAll(true)}
          >
            View All {activeCategory} Cars →
          </div>
        )}

        {showAll && (
          <div
            className="view-all"
            style={{ cursor: "pointer", textAlign: "left", padding: 0, marginLeft: 0, marginTop: "20px" }}
            onClick={() => setShowAll(false)}
          >
            Show Less
          </div>
        )}
      </div>

      {/* ✅ Render popup only when a car is selected */}
      {selectedCar && <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />}

    </div>
  );
};

export default Home;



