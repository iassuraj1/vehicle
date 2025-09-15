



import React from 'react'; 
import "./HeroSection.css"
import { Link } from 'react-router-dom';
export default function HeroSection({heading ,subHeading ,url}){

    return (
        <div className="Hero"  style={{ backgroundImage: url}}>

           <div className="main-text">
            
            <h1 className="headline"> {heading}</h1>
            <p className="heading_paragraph"> {subHeading}</p>


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