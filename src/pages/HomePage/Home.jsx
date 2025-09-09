import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import CarSearchForm from "./components/CarSearchForm/CarSearchForm";
import Home from "./components/MostPopularCar/Home";
import CategoryPage from "./components/MostPopularCar/CategoryPage";
import { Routes, Route } from "react-router-dom";
import BestDealers from "./components/Dealing/BestDealers";
import PopularBrands from "./components/BrandLogo/PopularBrands";
import TrendingCars from "./components/TrendingCars/TrendingCars";
import CarImportCard from "./components/ImportedCar/CarImportCard";
import ContactForm from "./components/contactForm/ContactForm";

export default function BuyCars() {
  return (
    <div>
      <HeroSection />
      <CarSearchForm />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
      
      <PopularBrands/>
      <BestDealers/>


     

      <TrendingCars/>
      <CarImportCard/>
      <ContactForm/>

     

    </div>
  );
}
