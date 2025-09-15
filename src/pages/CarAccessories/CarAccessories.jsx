import HeroSection from "../../components/HeroSection/HeroSection";
import EjarAccessories from "./components/EjarAccessories"
import Accessories from "./components/Accessories";
import UniqueCar from "./components/Unique_car"
export default function CarAccessories(){

    const herodata={
        heading:(<>Buy, Trade, or Import {<br/>}
            Cars Tailored to Your {<br/>}
            Lifestyle
        </>),
        subHeading :(<>Discover verified options, deal with approved {<br/>}sellers, or import directly ensuring trust and  {<br/>}convenience at every step.
        </>),
        url :"url('/Hero_images/carAccessories1.jpg')"
        }

    return(
        <>
        <HeroSection {...herodata}/>
        <EjarAccessories/>
        <Accessories/>
        <UniqueCar/>
        </>
    )
}