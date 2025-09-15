import HeroSection from "../../components/HeroSection/HeroSection";
import CarSellForm from "./components/sell_your_car_form";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/FeaturesSection";

export default function SellCars(){
     const herodata={
    heading:(<>From Showroom to Shipment{<br/>}  Your Car Journey Made {<br/>}  Simple</>),
    subHeading :(<>Access a curated marketplace of trusted cars,{<br/>}  connect with verified sellers, or arrange {<br/>} secure imports all in one hub.</>),
    url :"url('/Hero_images/sellCar1.jpg')"
     }
    return (
        <>
        <HeroSection {...herodata}/>
        <CarSellForm/>
        <HowItWorks/>
        <FeaturesSection/>
        
        </>
        
    )
}