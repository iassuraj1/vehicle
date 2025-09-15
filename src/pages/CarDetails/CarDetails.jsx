import HeroSection from "../../components/HeroSection/HeroSection";
import SportsCar from "./components/SportsCar";
import CarFeatures from "./components/CarFeatures";
import CarEssential from "./components/essential_details";
export default  function CarDetails(){

    const herodata={
    heading:(<>One Platform, Many {<br/>}Roads Your Next Car {<br/>}
Starts Here</>),
    subHeading :(<>Compare exclusive listings, partner with  {<br/>}reliable dealers, or request global imports {<br/>}
    designed to match your needs
    </>),
    url :"url('/Hero_images/carDetails1.jpg')"
     }

    return(
        <>
        <HeroSection {...herodata}/>
        <SportsCar/>
        <CarFeatures/>
        <CarEssential/>
        </>
    )
} 