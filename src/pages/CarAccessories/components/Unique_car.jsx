import "./Unique_car.css"
import sportcarImg from "../../../assets/CarAccessories/bluecar.jpg"
export default function SportsCar(){
    return(
        <div className="unique_continer">
            <h1 className="unique_heading"> 
                Make It Uniquely Yours
            </h1>
            
                <img src={sportcarImg} alt="uniqueCarImg" />
            
            <div className="Book_test">
                 <button className="uniqueUpgrade"> UPGRADE NOW</button>
            </div>
           

        </div>
    )
}