import "./SportsCar.css"
import sportcarImg from "../../../assets/CarDetails/sportcar.jpg"
export default function SportsCar(){
    return(
        <div className="Sport_continer">
            <h1 className="Car_heading"> 
                Roadster Sports Car
            </h1>
            
                <img src={sportcarImg} alt="sortCarImg" />
            
            <div className="Book_test">
                 <button className="drive_button"> Book a Test Drive</button>
            </div>
           

        </div>
    )
}