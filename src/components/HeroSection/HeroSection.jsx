import React from 'react'; 
import "./HeroSection.css"
import { Link } from 'react-router-dom';
export default function HeroSection(){

    return (
        <div className="Hero"  style={{ backgroundImage: "url('/HomePageImages/Banner_image2.jpg')"}}>

           <div className="main-text">
            
            <h1 className="headline"> Buy, Sell, or Import All Your Car Needs in One Place</h1>
            <p className="heading_paragraph"> Discover verified new and used cars, connect with trusted dealers, or reqest direct  car imports - all in one place</p>


            <div className='search'>

                <Link to="/car-listings">
                <search className="search_button"> SEARCH CARS NOW</search>
               </Link>

                <Link to="/sell-cars">
                    <button className="sell_button"> Sell  Cars</button>

                </Link>

               

            </div>
            </div> 

        </div>
    )
}