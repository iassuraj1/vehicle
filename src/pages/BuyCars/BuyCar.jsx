import HeroSection from "../../components/HeroSection/HeroSection";
import BuyCarPage from "./components/BuyCarPage";
export default function BuyCars(){
      const herodata={
    heading:(<>Drive Local or Import {<br/>}
Premium Cars Without {<br/>}
the Hassle</>),
    subHeading :(<>Explore handpicked vehicles, partner with {<br/>} certified dealers, or request seamless imports 
    {<br/>}everthing simplified for you.</>),
    url :"url('/Hero_images/buyCar1.jpg')"
     }

    return(
        <>
        <HeroSection {...herodata}/>
        <BuyCarPage/>
        </>
    )
}