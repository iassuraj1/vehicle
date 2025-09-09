import HeroSection from "../../components/HeroSection/HeroSection";
import SearchCar from "./components/SearchCar";
import AdvanceFilter from "./components/AdvanceFilter";
import CarList from "./components/CarList";

export default function CarListing(){
    return (
        <>
        <HeroSection/>
        <SearchCar/>
        <AdvanceFilter/>
      <CarList/>
       
        </>
    )
}