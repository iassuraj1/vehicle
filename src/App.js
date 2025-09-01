import React from "react";
import "./App.css";
import MainHeader from "./components/header/MainHeader";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";

import BuyCars from "./pages/BuyCars/BuyCars";
import SellCars from "./pages/SellCars/SellCars";
import CarListings from "./pages/CarListings/CarListings";
import CarDetails from "./pages/CarDetails/CarDetails";
import CarAccessories from "./pages/CarAccessories/CarAccessories";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Router>
      <MainHeader />
      <Navbar />

      <Routes>
        <Route path="/" element={<BuyCars />} />
        <Route path="/sell-cars" element={<SellCars />} />
        <Route path="/car-listings" element={<CarListings />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/car-accessories" element={<CarAccessories />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
